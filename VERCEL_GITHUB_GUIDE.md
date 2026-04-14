# Vercel Deployment & GitHub Guide

This guide will walk you through pushing your local changes to GitHub and deploying to Vercel with a connected Postgres database.

## Step 1: Push to GitHub

If you haven't initialized Git in this folder yet, follow these steps in your terminal:

1. **Initialize & Add Files**:
   ```bash
   git init
   git add .
   ```

2. **Commit your changes**:
   ```bash
   git commit -m "Final Vercel Optimization: Next 14, React 18 & Asset Cleanups"
   ```

3. **Link to GitHub**:
   * Create a new repository on [GitHub](https://github.com/new).
   * Run the following commands (replace the URL with your actual repo URL):
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2: Deploy to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New"** > **"Project"**.
2. Import your newly created GitHub repository.
3. **Environment Variables**: Before clicking "Deploy", expand the **Environment Variables** section and add the following from your `.env.example`:
   * `SMTP_USER`
   * `SMTP_PASS`
   * `SMTP_HOST`
   * `NEXT_PUBLIC_WEB3FORMS_KEY`
   * (You will add the Database URLs in the next step).

---

## Step 3: Connect Vercel Postgres

Once the project is created in Vercel:

1. Click on the **"Storage"** tab in your Vercel Project dashboard.
2. Select **"Create Database"** > **"Postgres"**.
3. Once created, click **"Connect"** to link it to your project.
4. Vercel will automatically inject several environment variables. You need to ensure they match our `schema.prisma` requirements:
   * Go to **Settings** > **Environment Variables**.
   * You will see `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING`.
   * **Crucial Mapping**:
     * Create/Edit `DATABASE_URL` and set its value to `{{POSTGRES_PRISMA_URL}}`.
     * Create/Edit `DIRECT_URL` and set its value to `{{POSTGRES_URL_NON_POOLING}}`.

---

## Step 4: Finalize & Run Migrations

1. **Local Migration**: To set up your schema in the live database for the first time, run this command from your local machine (ensure your `.env` has the Vercel connection string temporarily):
   ```bash
   npx prisma db push
   ```
2. **Redeploy**: Go to the **"Deployments"** tab in Vercel and trigger a redeploy if the first one failed due to the missing database.

---

## ✅ Deployment Checklist
- [ ] Next.js 14 Build passing.
- [ ] Vercel Postgres connected.
- [ ] Environment Variables (`DATABASE_URL`, `DIRECT_URL`, `SMTP_*`) configured.
- [ ] `prisma generate` running automatically (via `postinstall` in `package.json`).
