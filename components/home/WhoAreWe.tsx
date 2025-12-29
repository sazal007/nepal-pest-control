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
    <section id="about" className="pt-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionHeading
                tag="[Who We Are]"
                title="Your Trusted Financial & Compliance Partner"
                italicWord="Partner"
                className="mb-8"
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-900 font-medium mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              Nepal Pest Control offers end-to-end pest control, compliance, and
              business formation support designed for modern businesses.
            </motion.p>

            <motion.p
              className="text-gray-500 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              With over 6+ years of cumulative experience and a portfolio of
              250+ clients globally, we bring professionalism, integrity, and a
              client-centric approach to every engagement. Our mission is
              simple: to handle the complexities of pest control and regulation
              so you can focus entirely on growth.
            </motion.p>

            <motion.div
              className="flex gap-8 mb-8 border-t border-gray-100 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">6+</div>
                <div className="text-sm text-gray-600 font-medium">
                  Years Pest Control Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-1">
                  250+
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Global Pest Control Clients
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              <Button
                variant="outline"
                onClick={() =>
                  onNavigate ? onNavigate("about") : router.push("/about")
                }
              >
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image/Card */}
          <motion.div
            className="md:col-span-6 relative pl-0 md:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden h-[500px] w-full shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Pest Control Analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-10 left-0 md:left-2 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    100% Pest Control Compliant
                  </h4>
                  <p className="text-xs text-gray-500">
                    We navigate complex pest control regulatory landscapes so
                    you don&apos;t have to.
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
