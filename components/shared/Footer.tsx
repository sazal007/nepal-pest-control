"use client";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import SocialIcons from "./social-icons";
import { useNewsletter } from "@/hooks/use-newsletter";
import { xinfinAddress, xinfinEmail, xinfinPhone } from "@/constants/contact";

export const Footer = () => {
  return (
    <footer className="w-full bg-primary-950 text-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative bg-white/70 backdrop:backdrop-blur-lg p-4 rounded-lg">
                <Image
                  src="/infinconsultants_logo.svg"
                  alt="Infin Consultants"
                  width={170}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-slate-300/80 text-sm leading-relaxed">
              With many years of experience and expertise, we have been
              recognized through the awards achieved, and we customize solutions
              to meet the specific needs of small businesses.
            </p>

            <SocialIcons />
          </motion.div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-300/80">
              <FooterLink href="#">Process Automation</FooterLink>
              <FooterLink href="#">Reporting Requirements</FooterLink>
              <FooterLink href="#">Virtual CFO Services</FooterLink>
              <FooterLink href="#">Financial Modeling</FooterLink>
              <FooterLink href="#">Accounting & Bookkeeping</FooterLink>
              <FooterLink href="#">Dashboard Preparation</FooterLink>
              <FooterLink href="#">Data Analysis and Reporting</FooterLink>
              <FooterLink href="#">Exel and Google Sheets Automation</FooterLink>
              <FooterLink href="#">Budgeting and Financial</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Info
            </h3>
            <div className="space-y-6 text-sm">
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  Address:
                </p>
                <p className="text-slate-300/80 leading-relaxed max-w-[220px]">
                  {xinfinAddress}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  Email:
                </p>
                <a
                  href={`mailto:${xinfinEmail}`}
                  className="text-slate-300/80 hover:text-white transition-colors"
                >
                  {xinfinEmail}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  Phone:
                </p>
                <a
                  href={`tel:${xinfinPhone}`}
                  className="text-slate-300/80 hover:text-white transition-colors"
                >
                  {xinfinPhone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Newsletter
            </h3>
            <p className="text-slate-300/80 text-sm mb-6 leading-relaxed">
              Join our subscribers list to get latest news and special offers.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
          <p className="text-center md:text-left">
            Copyright {new Date().getFullYear()}. All rights reserved by{" "}
            <span className="text-white font-medium">XInfin</span>
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <a
      href={href}
      className="block hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  </li>
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
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full bg-white text-slate-900 px-4 py-3 text-sm outline-none placeholder:text-slate-500 rounded-l-sm focus:bg-white transition-colors"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-primary-600 hover:bg-primary-900 text-white px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-r-sm disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap min-w-[110px] flex justify-center items-center"
      >
        {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : "Subscribe"}
      </button>
    </form>
  );
};
