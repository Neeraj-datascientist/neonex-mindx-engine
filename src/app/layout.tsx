import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { BRAND_NAME } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://neonexminds.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${BRAND_NAME} | Best Data Science & AI Training Institute in India | 100% Placement`,
  description: `Transform your career with ${BRAND_NAME} — India's leading Data Science, AI/ML, and Business Analytics training institute. Learn Python, SQL, Machine Learning, Deep Learning with hands-on projects. 100% job assistance, industry mentors, and internship included. Join 1000+ successful alumni.`,
  keywords: [
    "data science course",
    "AI ML training",
    "machine learning course India",
    "Python course online",
    "SQL training",
    "business analytics course",
    "data analytics training",
    "Power BI course",
    "Tableau training",
    "placement assistance",
    "data science internship",
    "best data science institute",
    "online data science course",
    "AI course for beginners",
    "career change to data science"
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://neonexminds.com",
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | Best Data Science & AI Training Institute | 100% Placement`,
    description: "Transform your career with industry-led Data Science, AI/ML, and Analytics training. Hands-on projects, internship, and placement support included.",
    images: [
      {
        url: "/images/logo-social.png",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} — Data Science & AI Training`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} | Data Science & AI Training | 100% Placement`,
    description: "Master Data Science, AI/ML & Analytics with hands-on training and 100% placement support. Start from basics – non-tech friendly.",
    images: ["/images/logo-social.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://neonexminds.com",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-blue-600/15 selection:text-blue-900 [font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif]`}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* Navbar removed for Replica SPA Mode */}
          <main className="flex-1">{children}</main>
          {/* Footer removed for Replica SPA Mode */}
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
