import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { QueryProvider } from "@/providers/query-provider";
import { FooterCTA } from "@/components/shared/FooterCTA";
import { Toaster } from "sonner";

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
  title: "Infin - Strategic Consulting",
  description:
    "Expert strategic consulting to drive sustainable growth, operational innovation, and lasting business transformation",
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
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={3000}
          />
          <FooterCTA />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
