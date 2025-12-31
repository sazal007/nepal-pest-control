"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

interface WhoAreWeProps {
  onNavigate?: (page: string) => void;
}

export const WhoAreWe: React.FC<WhoAreWeProps> = ({ onNavigate }) => {
  const router = useRouter();

  return (
    <section id="who-we-are" className="pt-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Who We Are]"
              title="Your Trusted Pest Control & Hygiene Partner"
              italicWord="Pest Control & Hygiene Partner"
              className="mb-8"
            />

            <motion.p
              className="text-lg text-gray-900 font-medium mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Nepal Pest Control delivers safe, effective, and certified pest
              management services for homes, businesses, and industrial
              environments.
            </motion.p>

            <motion.p
              className="text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              With over 6 years of hands-on experience, our trained technicians
              follow approved treatment protocols to eliminate pests, maintain
              hygiene standards, and ensure compliance with local health and
              safety regulations — without disrupting your daily operations.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex gap-10 mb-8 border-t border-gray-200 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">6+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  250+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Clients Served
                </div>
              </div>
            </motion.div>

            <Button
              variant="outline"
              onClick={() =>
                onNavigate ? onNavigate("about") : router.push("/about")
              }
            >
              Learn More About Us
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:col-span-6 relative pl-0 md:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden h-[480px] w-full shadow-xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/images/home-who-we-are.png"
                alt="Professional Pest Control Technician"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10" />
            </motion.div>

            {/* Floating Compliance Card */}
            <motion.div
              className="absolute bottom-10 left-0 md:left-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Certified & Safety Compliant
                  </h4>
                  <p className="text-xs text-gray-500">
                    All treatments follow approved health, safety, and hygiene
                    standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
