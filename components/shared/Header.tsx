"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary-700 ${
      pathname === path ? "text-primary-700 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="absolute md:fixed inset-x-0 top-2 sm:top-4 z-50 flex justify-between items-center px-3 sm:px-4 transition-all duration-300">
      {/* Desktop Header */}
      <div className="hidden lg:flex max-w-[1240px] mx-auto w-full bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-gray-100 px-4 md:px-8 h-16 xl:h-20 items-center justify-between relative">
        {/* Logo - Left aligned */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer z-20">
          <Image
            src="/infinconsultants_logo.svg"
            alt="INFIN Consultants Logo"
            width={120}
            height={96}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav - Absolutely Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Home with Dropdown */}
          <div className="relative group flex items-center gap-1 cursor-pointer h-full py-6">
            <Link
              href="/"
              className={`flex items-center gap-1 ${linkClass("/")}`}
            >
              Home
            </Link>
          </div>

          <Link href="/about" className={linkClass("/about")}>
            About Us
          </Link>

          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>

          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>

          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
        </nav>

        {/* Contact Button - Right aligned */}
        <div className="hidden lg:block z-20">
          <Link
            href="/contact"
            className="pl-6 pr-2 py-1.5 rounded-full bg-white border border-gray-200 text-gray-900 hover:border-primary-300 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <span className="font-semibold text-sm">Contact Us</span>
            <div className="w-9 h-9 rounded-full bg-primary-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 cursor-pointer lg:hidden"
      >
        <Image
          src="/test.png"
          alt="INFIN Consultants Logo"
          width={200}
          height={120}
          className="h-14 w-auto"
        />
      </Link>

      {/* Mobile Menu Toggle - only hamburger on mobile */}
      <button
        className="lg:hidden ml-auto p-1.5 sm:p-2 rounded-full bg-white/90 shadow-xs border border-gray-100 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav - Fullscreen overlay on mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white border-b border-gray-100 px-4 pt-16 sm:pt-20 pb-5 sm:pb-6 flex flex-col gap-3 sm:gap-4 shadow-xl overflow-y-auto z-40">
          <button
            className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-full bg-white/90 shadow-xs border border-gray-100 text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
          <Link
            href="/"
            className="text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 border-b border-gray-50 flex justify-between items-center"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <div className="mt-4">
            <Link
              href="/contact"
              className="w-full text-center py-3 sm:py-4 rounded-full bg-primary-600 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
