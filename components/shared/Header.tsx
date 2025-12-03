"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
        {/* Logo - Left aligned */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer z-20">
          <div className="text-3xl font-bold text-blue-700 tracking-tight font-serif">
            OPTIMO
          </div>
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
            className="pl-6 pr-2 py-1.5 rounded-full bg-white border border-gray-200 text-gray-900 hover:border-blue-300 hover:shadow-md transition-all shadow-sm flex items-center gap-3 group"
          >
            <span className="font-semibold text-sm">Contact Us</span>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-600 z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

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
