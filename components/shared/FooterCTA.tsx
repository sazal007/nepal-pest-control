"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const FooterCTA = () => {
  const router = useRouter();
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="bg-primary-700 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="px-6 py-10 sm:p-10 lg:p-16 xl:p-20 lg:w-1/2 text-white relative z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          >
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6 leading-tight">
              Professional Pest Control Services <br />
              for Homes & Businesses <br />
              <span className="font-serif italic font-normal">
                Safe. Certified. Reliable.
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <Button
                variant="white"
                className="mb-6 sm:mb-8 lg:mb-10 text-primary-600 xs:w-auto cursor-pointer"
                onClick={() => router.push("/appointment")}
              >
                Book a Free Inspection
              </Button>
            </motion.div>

            <motion.div
              className="space-y-2 sm:space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Free Site Inspection & Assessment
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Safe & Effective Pest Treatments
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Fast Response & Trusted Service
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 h-52 sm:h-64 relative"
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/images/cta.png" />
            <div className="absolute inset-0 bg-primary-900/20"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
