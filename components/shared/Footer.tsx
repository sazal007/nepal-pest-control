"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import SocialIcons from "./social-icons";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-[#020205] text-gray-900 dark:text-white pt-16 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden font-sans border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Big Title Section - Made more compact (reduced margins) */}
        <div className="w-full flex justify-center mb-12 relative">
          {/* Subtle glow effect behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-blue-500/5 dark:bg-blue-900/10 blur-[80px] rounded-full pointer-events-none transition-colors duration-300"></div>

          <h1 className="text-[13.5vw] leading-[0.8] font-serif font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-400 to-gray-50 dark:from-white dark:via-gray-500 dark:to-[#020205] select-none text-center transition-all duration-300">
            XINFIN CONSULTANTS
          </h1>
        </div>

        {/* Main Content Grid - Reduced gap and bottom margin */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1: Info & Address */}
          <div className="lg:col-span-4 flex flex-col space-y-6 pr-0 lg:pr-12">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm transition-colors duration-300">
              We&apos;re committed to delivering exceptional care with
              compassion, trust, and integrity. From your first visit to
              long-term support, your health and comfort are always our
              priority.
            </p>

            <hr className="border-gray-200 dark:border-gray-900 w-full transition-colors duration-300" />

            <div className="flex flex-col space-y-2">
              <h3 className="text-gray-900 dark:text-white font-semibold text-base transition-colors duration-300">
                Visit Us
              </h3>
              <address className="text-gray-600 dark:text-gray-400 text-sm not-italic leading-relaxed transition-colors duration-300">
                123 Wellness Avenue, Suite
                <br />
                405, New York, NY 10016
                <br />
                United States
              </address>
            </div>
          </div>

          {/* Column 2: Main Pages Links */}
          <div className="lg:col-span-4">
            <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-6 transition-colors duration-300">
              Main Pages
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex flex-col space-y-3">
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">Service</FooterLink>
                <FooterLink href="#">Case Study</FooterLink>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </div>
              <div className="flex flex-col space-y-3">
                <FooterLink href="#">Style Guide</FooterLink>
                <FooterLink href="#">License</FooterLink>
                <FooterLink href="#">Changelog</FooterLink>
                <FooterLink href="#">404</FooterLink>
                <FooterLink href="#">Password Protect</FooterLink>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="lg:col-span-4 pl-0 lg:pl-8">
            <h3 className="text-gray-900 dark:text-white font-semibold text-xl mb-4 transition-colors duration-300">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-xs transition-colors duration-300">
              Let&apos;s transform your vision into results and discuss your
              vision with us.
            </p>

            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white dark:bg-white text-gray-900 rounded-full py-3 px-6 text-sm outline-none border border-gray-200 dark:border-transparent focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="group w-fit bg-[#2f45ff] hover:bg-blue-600 text-white rounded-full py-2 pr-2 pl-6 flex items-center space-x-3 transition-all duration-300 shadow-md shadow-blue-500/20"
              >
                <span className="font-medium text-sm">Subscribe</span>
                <div className="bg-white rounded-full p-2 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={16} className="text-[#2f45ff]" />
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-900 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-colors duration-300">
          <p className="text-gray-500 text-xs">
            © Copywrite 2025 All rights reserved.
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
    className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm w-fit"
  >
    {children}
  </a>
);
