# Deployment Guide for NeoNex Mindx

This guide provides detailed instructions for deploying the NeoNex Mindx EdTech platform to various hosting platforms, with a focus on GitHub deployment.

## 🎯 Deployment Options

1. **GitHub Pages** (Static deployment)
2. **GitHub Actions** (Automated CI/CD)
3. **Render/Vercel** (Server-side deployment)
4. **Docker Container** (Self-hosted)

## Hostinger Deployment (Next.js Node app)

This project is a standard **Next.js App Router** app (not static export only). On Hostinger, use **JavaScript frameworks → Next.js** (or Node) so the platform runs `npm run build` and `npm run start`.

### Node.js Version

- Use **Node.js 20.x** for install, build, and runtime.
- Do **not** use Node 16 with Next.js 16.
- Avoid Node 22 unless Hostinger explicitly supports it for Next 16; this repo pins `engines` to **20–21**.

The project declares:

- `engines.node: >=20 <22`
- `.nvmrc: 20`

### Build and start commands

- Install: `npm install` (or `npm ci` from lockfile)
- Build: `npm run build`
- Start: `npm run start`

### Environment variables (Hostinger panel)

Set SMTP so enquiries send reliably (see `.env.example`):

- `GMAIL_USER` / `GMAIL_PASS` (App Password), or custom `SMTP_*` vars  
- `ENQUIRY_TO_EMAIL` – where notifications are delivered (optional; defaults to sender mailbox)  
- `NEXT_PUBLIC_WEB3FORMS_KEY` or `WEB3FORMS_ACCESS_KEY` – same Web3Forms Form Access Key; browser fallback if SMTP fails (see `/api/form-config`)

### Source upload (zip/FTP)

Upload the **project source** (not only `out/` or `.next/`). After extract, **`package.json` must be at the app root** so the host detects Next.js. Exclude `node_modules` and `.next` from the archive; the platform should run `npm install` for you.

## Vercel

1. Import this repo in [Vercel](https://vercel.com) (Git integration recommended).
2. **Framework:** Next.js (auto-detected). **Node:** 20.x matches `engines` / `.nvmrc`.
3. **Environment variables:** copy from `.env.example` — set `GMAIL_USER` / `GMAIL_PASS` (or `SMTP_*`), optional `ENQUIRY_TO_EMAIL`, and `NEXT_PUBLIC_WEB3FORMS_KEY` or `WEB3FORMS_ACCESS_KEY` as needed.
4. Deploy; Vercel runs `next build` and hosts the App Router + API routes (`/api/send-enquiry`, `/api/form-config`).

## 🚀 GitHub Deployment (Recommended)

### Prerequisites

1. GitHub account
2. Repository created on GitHub
3. Git installed locally

### Step-by-Step Deployment

#### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: NeoNex Mindx EdTech Platform"
git branch -M main
```

#### 2. Connect to GitHub Repository

```bash
git remote add origin https://github.com/yourusername/neonex-minds.git
git push -u origin main
```

#### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

#### 4. Set Environment Variables

For email functionality to work on deployed site:

1. Go to repository "Settings"
2. Click "Secrets and variables" → "Actions"
3. Add the following repository secrets:
   - `GMAIL_USER`: your-email@gmail.com
   - `GMAIL_PASS`: your-app-password

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## ☁️ Alternative Platforms

### Vercel Deployment

1. Sign in to Vercel
2. Import your GitHub repository
3. Set environment variables in Vercel dashboard:
   - `DATABASE_URL`: file:./dev.db
   - `GMAIL_USER`: your-email@gmail.com
   - `GMAIL_PASS`: your-app-password
4. Deploy!

### Render Deployment

1. Sign in to Render
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set start command: `npm start`
6. Add environment variables in Render dashboard

## 🐳 Docker Deployment

### Building and Running Locally

```bash
# Build the image
docker build -t neonex-minds .

# Run the container
docker run -p 3000:3000 neonex-minds
```

### Deploying with Docker

For self-hosted deployments, you can use the Docker image on any cloud provider that supports containers.

## 🔐 Security Considerations

1. **Never commit `.env` files** - These are already in `.gitignore`
2. **Use App Passwords** - For Gmail SMTP, use App Passwords instead of your regular password
3. **Environment Variables** - Store sensitive data as environment variables in your deployment platform

## 🆘 Troubleshooting

### Common Issues

1. **Email not sending**: Check that GMAIL_USER and GMAIL_PASS are correctly set in environment variables
2. **Database errors**: Ensure DATABASE_URL is set correctly for your deployment environment
3. **Build failures**: Check Node.js version compatibility (use Node.js 20.x for this project)

### GitHub Pages Specific Issues

1. **404 errors**: Make sure GitHub Pages is configured to deploy from the correct branch
2. **CSS not loading**: Ensure `next.config.js` has `images: { unoptimized: true }`

## 🔄 Updating Your Deployment

To update your deployed site:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy (if configured)
4. For manual GitHub Pages, repeat the deployment process

## 📞 Support

For deployment issues, contact [pcneeraj123@gmail.com](mailto:pcneeraj123@gmail.com)