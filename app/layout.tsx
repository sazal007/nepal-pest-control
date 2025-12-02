import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

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
  title: "XInfin - Financial Advisory & Process Automation",
  description:
    "Delivering innovative solutions for clients to achieve their financial goals. Process Automation, Financial Advisory, Accounting and Bookkeeping, Virtual CFO, Data Analysis, and more.",
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
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
