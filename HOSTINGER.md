# Hostinger: Next.js deploy (this project)

## What you are deploying

- Framework: **Next.js 16** (App Router), standard Node deployment (not static `out/` only).
- Repo root must contain `package.json` and `next.config.ts` after you unzip.

## Hostinger panel settings

1. Choose **JavaScript frameworks** and select **Next.js** (if available), or use **Node.js** app with the commands below.
2. **Node version:** **20.x**
3. **Install command:** `npm install`  
   **Build command:** `npm run build`  
   **Start command:** `npm run start`

## Environment variables

Add in Hostinger (Environment / Variables). These power **SMTP** enquiry emails (no third-party form service required).

| Name | Required | Notes |
|------|----------|--------|
| `GMAIL_USER` | Yes* | Gmail address that sends mail (or set `SMTP_USER` for custom SMTP) |
| `GMAIL_PASS` | Yes* | Gmail **App Password** (not your normal password) |
| `ENQUIRY_TO_EMAIL` | Recommended | Inbox that receives enquiries; comma-separated ok. Defaults to `GMAIL_USER` if unset. |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | Optional | Use for non-Gmail SMTP; see `.env.example` |
| `NEXT_PUBLIC_WEB3FORMS_KEY` **or** `WEB3FORMS_ACCESS_KEY` | Recommended | Same **Form Access Key** from Web3Forms. Either works; the app also exposes it via `/api/form-config` if the public key was missing at build time. |

\* Or use `SMTP_USER` / `SMTP_PASS` with `SMTP_HOST` instead of Gmail presets.

Do **not** commit real secrets. Local copy may use `.env`; production uses Hostinger variables.

## If Hostinger says “Unsupported framework / invalid structure”

- Upload/extract so **`package.json` is at the app root** (not nested inside another folder).
- Ensure the zip is **source code**, not only `out/` or only `.next/`.
- Use **Node 20.x** and the three commands above.

## Browser shows `ERR_CONNECTION_REFUSED`

This means nothing is accepting connections on that host/port (usually the Node process is not running, not listening publicly, or the reverse proxy points at the wrong port).

### Checklist

1. **Build finished successfully**  
   In Hostinger logs, confirm `npm run build` completed with no errors before start.

2. **Start command actually runs**  
   Use: `npm run start` (this project listens on **`0.0.0.0`** and uses **`PORT`** if Hostinger sets it, otherwise **3000**).

3. **If Hostinger documents a custom port**  
   Set env `PORT` in the panel to the value they expect (e.g. `3000` or their assigned app port).

4. **App root is correct**  
   `package.json` must live in the directory Hostinger uses as the app root.

5. **Process crashed on boot**  
   Open runtime logs; fix any “Cannot find module” / Node version / missing env errors.

### Local testing (your PC)

- `ERR_CONNECTION_REFUSED` on `http://localhost:3000` almost always means the dev server is off. Run:
  - `npm run dev`
  - then open the URL Next prints in the terminal.
