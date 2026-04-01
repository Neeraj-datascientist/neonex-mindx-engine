import { BRAND_NAME } from "@/lib/brand";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const bodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(5).max(40),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getSmtpTransport() {
  const user = process.env.SMTP_USER ?? process.env.GMAIL_USER;
  const passRaw = process.env.SMTP_PASS ?? process.env.GMAIL_PASS;
  if (!user || !passRaw) return null;

  const pass = passRaw.replace(/\s/g, "");
  const host = process.env.SMTP_HOST;

  if (host) {
    const port = Number(process.env.SMTP_PORT ?? "587");
    const secure =
      process.env.SMTP_SECURE === "true" || port === 465;

    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      ...(port === 587 && !secure ? { requireTLS: true } : {}),
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please check name, email, and phone." },
      { status: 400 },
    );
  }

  const { name, email, phone } = parsed.data;

  const transport = getSmtpTransport();
  const smtpUser = process.env.SMTP_USER ?? process.env.GMAIL_USER;
  const toRaw = process.env.ENQUIRY_TO_EMAIL?.trim() || smtpUser || "";
  const toAddresses = toRaw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const fromName =
    process.env.SMTP_FROM_NAME?.trim() || `${BRAND_NAME} Website`;

  if (!transport || !smtpUser || toAddresses.length === 0) {
    return NextResponse.json(
      {
        success: false,
        smtpFailed: true,
        message:
          "Primary email (SMTP) is not configured. The app will try Web3Forms in your browser if configured.",
      },
      { status: 502 },
    );
  }

  try {
    // 1. Save to Database
    try {
      await db.enquiry.create({
        data: {
          name,
          email,
          phone,
        },
      });
    } catch (dbErr) {
      // We still try to send the email even if DB fails, 
      // but we log it for the developer.
      console.error("[send-enquiry] DB save failed", dbErr);
    }

    // 2. Send Email Notification
    await transport.sendMail({
      from: `"${fromName}" <${smtpUser}>`,
      to: toAddresses.join(", "),
      replyTo: email,
      subject: `New Enquiry from ${name} — ${BRAND_NAME}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Phone:</strong> ${escapeHtml(phone)}</p>`,
    });

    return NextResponse.json({ success: true, delivery: "smtp" });
  } catch (err) {
    console.error("[send-enquiry] SMTP failed", err);
    return NextResponse.json(
      {
        success: false,
        smtpFailed: true,
        message: "Primary email (SMTP) could not be sent. The app will try Web3Forms in your browser if configured.",
      },
      { status: 502 },
    );
  }
}
