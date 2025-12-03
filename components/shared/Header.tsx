"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-blue-700 ${
      pathname === path ? "text-blue-700 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-between px-4 transition-all duration-300">
      {/* Desktop Header */}
      <div className="hidden lg:flex max-w-[1240px] mx-auto w-full bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-gray-100 px-4 md:px-8 h-20 items-center justify-between relative">
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
            className="pl-6 pr-2 py-1.5 rounded-full bg-white border border-gray-200 text-gray-900 hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-3 group"
          >
            <span className="font-semibold text-sm">Contact Us</span>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle - only hamburger on mobile */}
      <button
        className="lg:hidden ml-auto p-2 rounded-full bg-white/90 shadow-xs border border-gray-100 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl h-[calc(100vh-80px)] overflow-y-auto z-40">
          <Link
            href="/"
            className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50 flex justify-between items-center"
            onClick={() => setIsOpen(false)}
          >
            Home <ChevronDown size={16} />
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-medium text-gray-800 py-3 border-b border-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <div className="mt-4">
            <Link
              href="/contact"
              className="w-full text-center py-4 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2"
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
