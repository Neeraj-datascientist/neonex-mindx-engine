import { NextResponse } from "next/server";

/**
 * Web3Forms access key is safe to expose (see web3forms.com).
 * This endpoint lets the client read the key at runtime when
 * NEXT_PUBLIC_* was not available at build time (common on some hosts).
 */
export async function GET() {
  const web3formsKey =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim() ||
    null;

  return NextResponse.json({ web3formsKey });
}
