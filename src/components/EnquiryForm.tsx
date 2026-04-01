"use client";

import { useState } from "react";
import { BRAND_NAME } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type ApiResult = {
  success?: boolean;
  smtpFailed?: boolean;
  message?: string;
  delivery?: string;
};

async function resolveWeb3FormsKey(): Promise<string | undefined> {
  const inlined = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();
  if (inlined) return inlined;

  try {
    const r = await fetch("/api/form-config", { cache: "no-store" });
    if (!r.ok) return undefined;
    const d = (await r.json()) as { web3formsKey?: string | null };
    return d.web3formsKey?.trim() || undefined;
  } catch {
    return undefined;
  }
}

async function submitWeb3FormsFallback(
  accessKey: string,
  name: string,
  email: string,
  phone: string,
) {
  const message = `Phone: ${phone}\n\nSubmitted from ${BRAND_NAME} website enquiry form.`;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New Enquiry from ${name} — ${BRAND_NAME}`,
      from_name: `${BRAND_NAME} Website`,
      name,
      email,
      phone,
      message,
    }),
  });

  const raw = await res.text();
  let data: { success?: boolean; message?: string };
  try {
    data = JSON.parse(raw) as { success?: boolean; message?: string };
  } catch {
    throw new Error(
      `Backup service returned an unexpected response (HTTP ${res.status}).`,
    );
  }

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Backup delivery failed.");
  }
}

export function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const result = (await response.json()) as ApiResult;

      if (result.success) {
        toast.success("Enquiry sent successfully!", {
          description: "We will get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "" });
        onSuccess?.();
        return;
      }

      const canTryWeb3 =
        result.smtpFailed === true || response.status === 502;

      if (canTryWeb3) {
        const web3Key = await resolveWeb3FormsKey();
        if (web3Key) {
          try {
            await submitWeb3FormsFallback(
              web3Key,
              formData.name,
              formData.email,
              formData.phone,
            );
            toast.success("Enquiry sent successfully!", {
              description: "Delivered via backup form service.",
            });
            setFormData({ name: "", email: "", phone: "" });
            onSuccess?.();
            return;
          } catch (fallbackErr) {
            const msg =
              fallbackErr instanceof Error
                ? fallbackErr.message
                : "Backup failed.";
            throw new Error(
              `${result.message || "Primary email failed."} Backup: ${msg}`,
            );
          }
        }
        throw new Error(
          `${result.message || "Primary email failed."} Set NEXT_PUBLIC_WEB3FORMS_KEY or WEB3FORMS_ACCESS_KEY on the server.`,
        );
      }

      throw new Error(result.message || "Failed to send enquiry");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Please try again later.";
      toast.error("Something went wrong.", {
        description: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Name</label>
        <Input
          name="name"
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Email</label>
        <Input
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Phone</label>
        <Input
          name="phone"
          type="tel"
          placeholder="+91 9876543210"
          required
          value={formData.phone}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {loading ? "Sending…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
