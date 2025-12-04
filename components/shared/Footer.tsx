"use client";
import { ArrowUpRight, Loader2 } from "lucide-react";
import SocialIcons from "./social-icons";
import { useState } from "react";
import { useNewsletter } from "@/hooks/use-newsletter";
import { xinfinAddress, xinfinEmail, xinfinPhone } from "@/constants/contact";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-900 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Big Title Section - Made more compact (reduced margins) */}
        <div className="w-full flex justify-center mb-10 sm:mb-12 relative">
          {/* Subtle glow effect behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-primary-500/5 blur-[80px] rounded-full pointer-events-none"></div>

          <h1 className="text-[17vw] xs:text-[15vw] sm:text-[13.5vw] leading-[0.85] sm:leading-[0.8] font-serif font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-400 to-gray-50 select-none text-center">
            INFIN CONSULTANTS
          </h1>
        </div>

        {/* Main Content Grid - Reduced gap and bottom margin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Column 1: Info & Address */}
          <div className="lg:col-span-4 flex flex-col space-y-5 sm:space-y-6 pr-0 lg:pr-12">
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm">
              We&apos;re committed to delivering exceptional care with
              compassion, trust, and integrity. From your first visit to
              long-term support, your health and comfort are always our
              priority.
            </p>

            <hr className="border-gray-200 w-full" />

            <div className="flex flex-col space-y-1.5 sm:space-y-2">
              <h3 className="text-gray-900 font-semibold text-base">
                Visit Us
              </h3>
              <address className="text-gray-600 text-xs sm:text-sm not-italic leading-relaxed">
                {xinfinAddress}
                <br />
                {xinfinEmail}
                <br />
                {xinfinPhone}
              </address>
            </div>
          </div>

          {/* Column 2: Main Pages Links */}
          <div className="lg:col-span-4">
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-4 sm:mb-6">
              Main Pages
            </h3>
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2.5 sm:gap-y-3">
              <div className="flex flex-col space-y-3">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/services">Service</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/pricing">Pricing</FooterLink>
              </div>
              <div className="flex flex-col space-y-3">
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions">
                  Terms and Conditions
                </FooterLink>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-4 pl-0 lg:pl-8">
            <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6 max-w-xs">
              Let&apos;s transform your vision into results and discuss your
              vision with us.
            </p>

            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-gray-500 text-xs">
            © Copywrite {new Date().getFullYear()} All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-gray-500 hover:text-black transition-colors text-sm w-fit"
  >
    {children}
  </a>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    mutate(email, {
      onSuccess: () => {
        setEmail("");
      },
    });
  };

  return (
    <form
      className="flex flex-col space-y-2.5 sm:space-y-3"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full bg-white text-gray-900 rounded-full py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-primary-500 transition-all placeholder:text-gray-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="group w-fit bg-accent hover:bg-primary-600 text-white rounded-full py-2 pr-2 pl-5 sm:pl-6 flex items-center justify-center xs:justify-start space-x-2.5 sm:space-x-3 transition-all duration-300 shadow-md shadow-primary-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="font-medium text-xs sm:text-sm">
          {isPending ? "Subscribing..." : "Subscribe"}
        </span>
        <div className="bg-white rounded-full p-1.5 sm:p-2 group-hover:rotate-45 transition-transform duration-300">
          {isPending ? (
            <Loader2 size={16} className="text-accent animate-spin" />
          ) : (
            <ArrowUpRight size={16} className="text-accent" />
          )}
        </div>
      </button>
    </form>
  );
};
