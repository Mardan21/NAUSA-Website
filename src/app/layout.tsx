import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "../lib/constants";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "../components/ui/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.fullName}`,
  description: SITE_CONFIG.description,
  keywords:
    "Uyghur, sports, tournament, North America, soccer, football, community",
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.fullName}`,
    description: SITE_CONFIG.description,
    url: "https://uyghursports.com",
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.fullName}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Skip Navigation Link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-nausa-lightblue text-white p-4 z-[100] rounded-br-lg font-bold"
        >
          Skip to main content
        </a>

        <ErrorBoundary>
          <Navigation />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
