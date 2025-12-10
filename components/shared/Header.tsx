"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useGetServices } from "@/hooks/use-services";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const { data: servicesData } = useGetServices();
  const services = servicesData?.results ?? [];

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary-800 ${
      pathname === path ? "text-primary-600 font-semibold" : "text-gray-600"
    }`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <header className="absolute md:fixed inset-x-0 top-2 sm:top-4 z-50 flex justify-between items-center px-3 sm:px-4 transition-all duration-300">
      {/* Desktop Header */}
      <div className="hidden lg:flex container mx-auto w-full bg-white/95 backdrop-blur-md rounded-full shadow-xs border border-gray-100 px-4 md:px-8 h-16 xl:h-20 items-center justify-between relative">
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
        <nav className="hidden lg:flex items-center gap-8">
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

          {/* Services with Dropdown */}
          <div
            ref={servicesRef}
            className="relative group flex items-center gap-1 cursor-pointer h-full py-6"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 ${linkClass("/services")} ${
                pathname.startsWith("/services")
                  ? "text-primary-700 font-semibold"
                  : ""
              }`}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {isServicesOpen && services.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                  <div className="py-2">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.03,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
          src={
            pathname.startsWith("/services") ||
            pathname.startsWith("/blog") ||
            pathname.startsWith("/pricing")
              ? "/infinconsultants_logo.svg"
              : "/test.png"
          }
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
          {/* Mobile Services with Dropdown */}
          <div className="border-b border-gray-50">
            <button
              className="w-full text-base sm:text-lg font-medium text-gray-800 py-2.5 sm:py-3 flex items-center justify-between"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {isServicesOpen && services.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pb-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block py-2 text-sm text-gray-600 hover:text-primary-700 transition-colors duration-200"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block py-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors duration-200"
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      View All Services
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
