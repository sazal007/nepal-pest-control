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
  metadataBase: new URL("https://www.nepalpestcontrol.com"),
  title: {
    default: "Nepal Pest Control - Professional Pest Control Services",
    template: "%s - Nepal Pest Control",
  },
  description:
    "Nepal Pest Control is a professional pest control company that provides exceptional pest control services. We are a leading pest control firm that offers a wide range of services to businesses of all sizes.",
  keywords: ["nepalpestcontrol.com", "nepalpestcontrol", "Nepal Pest Control"],
  authors: [{ name: "Nepal Pest Control" }],
  creator: "Nepal Pest Control",
  publisher: "Nepal Pest Control",
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
    url: "https://www.nepalpestcontrol.com",
    siteName: "Nepal Pest Control",
    title: "Nepal Pest Control - Professional Pest Control Services",
    description:
      "Unlock pest control excellence with our seasoned team of professionals. Nepal Pest Control provide strategic pest control services to optimize your business performance.",
    images: [
      {
        url: "/logo/nepalpestcontrol.png",
        width: 1200,
        height: 630,
        alt: "Nepal Pest Control - Professional Pest Control Services",
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
          <NextTopLoader color="#f97316" height={3} showSpinner={false} />
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
