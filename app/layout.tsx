import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { QueryProvider } from "@/providers/query-provider";
import { FooterCTA } from "@/components/shared/FooterCTA";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import { WhatsApp } from "@/components/whatsapp/whatsapp";
import PopupManager from "@/components/popup/popup-manager";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinconsultants.com"),
  title: {
    default: "XInfin - Professional Accounting, Compliance & Business Setup",
    template: "%s - XInfin Consulting",
  },
  description:
    "Xinfin is a professional accounting, compliance and business setup company that provides exceptional financial services. We are a leading financial consulting firm that offers a wide range of services to businesses of all sizes.",
  keywords: [
    "Professional Accounting",
    "Compliance",
    "Business Setup",
    "Financial Consulting",
    "Tax Planning",
    "Auditing Services",
    "Business Compliance",
    "Financial Strategy",
    "Corporate Advisory",
    "Accounting Solutions",
    "Risk Management",
    "Financial Excellence",
    "Budgeting and Forecasting",
    "Strategic Financial Guidance",
    "Business Growth Consulting",
    "Tax Compliance",
    "Financial Optimization",
    "Regulatory Compliance",
    "Financial Advisory Services",
    "Expert Accounting Services",
    "Income Tax Consulting",
    "Corporate Finance Management",
    "infinconsultants.com",
    "infinconsultants",
    "XInfin",
  ],
  authors: [{ name: "XInfin Consulting" }],
  creator: "XInfin Consulting",
  publisher: "XInfin Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
    locale: "en_US",
    url: "https://www.infinconsultants.com",
    siteName: "XInfin Consulting",
    title: "XInfin - Chartered Accountants | Financial Consulting",
    description:
      "Unlock financial excellence with our seasoned team of Chartered Accountants. Xinfin provide strategic financial guidance, expert tax planning, and meticulous auditing to optimize your business performance.",
    images: [
      {
        url: "/infinconsultants_logo.svg",
        width: 1200,
        height: 630,
        alt: "XInfin Consulting - Chartered Accountants",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 antialiased`}
      >
        <QueryProvider>
          <Header />
          <NextTopLoader color="#1e2fcc" height={3} showSpinner={false} />
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={3000}
          />
          <FooterCTA />
          <Footer />
          <WhatsApp />
          <PopupManager />
        </QueryProvider>
      </body>
    </html>
  );
}
