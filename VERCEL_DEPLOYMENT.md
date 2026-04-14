# Vercel Deployment Guide — NeoNex

This guide outlines the steps and configurations required to deploy the NeoNex project to Vercel.

## 🚀 Deployment Steps

1.  **Push to GitHub**: Ensure your project is pushed to a GitHub repository.
2.  **Import to Vercel**: Connect your GitHub account to Vercel and import the repository.
3.  **Build Settings**: Vercel should automatically detect Next.js. The default build command `npm run build` will now correctly run `prisma generate && next build`.

## ⚙️ Environment Variables

You **must** configure the following environment variables in the Vercel Project Settings:

| Variable | Description |
| :--- | :--- |
| `DATABASE_URL` | Your PostgreSQL connection string (e.g., `postgresql://...`). |
| `GMAIL_USER` / `SMTP_USER` | Your email address for sending enquiries. |
| `GMAIL_PASS` / `SMTP_PASS` | Your Gmail App Password or SMTP password. |
| `SMTP_HOST` | (Optional) Your SMTP provider host (e.g., `smtp.gmail.com`). |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Your Web3Forms Access Key for the frontend fallback. |
| `WEB3FORMS_ACCESS_KEY` | Your Web3Forms Access Key for the backend API. |
| `ENQUIRY_TO_EMAIL` | (Optional) Recipient email addresses (comma-separated). |

## 🐘 Database Configuration (PostgreSQL)

> [!IMPORTANT]
> **PostgreSQL is Required**: The project is now configured to use PostgreSQL. SQLite is not supported for Vercel deployment because of its ephemeral filesystem.
> 
> **Recommendation**: Use a PostgreSQL provider like **Neon**, **Supabase**, or **Vercel Postgres**. Provide the connection string via the `DATABASE_URL` environment variable.

## 🛠️ Prisma Configuration

The project is configured to run `prisma generate` during the build. This ensures that the Prisma Client is compatible with the Vercel execution environment.
