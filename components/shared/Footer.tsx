"use client";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import SocialIcons from "./social-icons";
import { useNewsletter } from "@/hooks/use-newsletter";
import { useGetServices } from "@/hooks/use-services";
import {
  nepalpestcontrolAddress,
  nepalpestcontrolEmail,
  nepalpestcontrolPhone,
  nepalpestcontrolHotline,
} from "@/constants/contact";
import { footerConfig } from "@/config/footer.config";

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
              <div className="relative">
                <Image
                  src={footerConfig.logo.src}
                  alt={footerConfig.logo.alt}
                  width={footerConfig.logo.width}
                  height={footerConfig.logo.height}
                  className={footerConfig.logo.className}
                  priority
                />
              </div>
            </div>

            <p className="text-slate-300/80 text-sm leading-relaxed">
              {footerConfig.company.description}
            </p>

            <SocialIcons />
          </motion.div>

          <ServicesSection />

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              {footerConfig.sections.contact.title}
            </h3>
            <div className="space-y-6 text-sm">
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  {footerConfig.sections.contact.labels.address}
                </p>
                <p className="text-slate-300/80 leading-relaxed max-w-[220px]">
                  {nepalpestcontrolAddress}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  {footerConfig.sections.contact.labels.email}
                </p>
                <a
                  href={`mailto:${nepalpestcontrolEmail}`}
                  className="text-slate-300/80 hover:text-white transition-colors"
                >
                  {nepalpestcontrolEmail}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  {footerConfig.sections.contact.labels.phone}
                </p>
                <div className="space-y-2">
                  {nepalpestcontrolPhone.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-slate-300/80 hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-white font-semibold uppercase text-xs tracking-wider">
                  Hotline
                </p>
                <div className="space-y-2">
                  {nepalpestcontrolHotline.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-slate-300/80 hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              {footerConfig.sections.newsletter.title}
            </h3>
            <p className="text-slate-300/80 text-sm mb-6 leading-relaxed">
              {footerConfig.sections.newsletter.description}
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
          <p className="text-center md:text-left">
            Copyright {footerConfig.copyright.year}.{" "}
            {footerConfig.copyright.text}{" "}
            <span className="text-white font-medium">
              {footerConfig.company.name}
            </span>
          </p>
          <div className="flex space-x-6">
            {footerConfig.footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
    <Link
      href={href}
      className="block hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

const ServicesSection = () => {
  const { data: servicesData, isLoading } = useGetServices();
  const services = servicesData?.results ?? [];

  return (
    <div>
      <h3 className="text-white text-xl font-semibold mb-6">
        {footerConfig.sections.services.title}
      </h3>
      {isLoading ? (
        <div className="flex items-center justify-start">
          <Loader2 className="h-5 w-5 animate-spin text-slate-300/80" />
        </div>
      ) : services.length > 0 ? (
        <ul className="space-y-3 text-sm text-slate-300/80">
          {services.map((service) => (
            <FooterLink key={service.id} href={`/services/${service.slug}`}>
              {service.title}
            </FooterLink>
          ))}
        </ul>
      ) : (
        <p className="text-slate-300/80 text-sm">
          {footerConfig.sections.services.emptyMessage}
        </p>
      )}
    </div>
  );
};

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
        placeholder={footerConfig.sections.newsletter.placeholder}
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
        {isPending ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          footerConfig.sections.newsletter.buttonText
        )}
      </button>
    </form>
  );
};
