"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrendingUp } from "lucide-react";

export const StrategicPartnerSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="XInfin Your Strategic Financial Partner"
            italicWord="Partner"
            align="center"
            className="mb-0"
          />
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden h-[420px] sm:h-[520px] lg:h-[600px] w-full group"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
            alt="XInfin Team Collaboration"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Card */}
          <motion.div
            className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 bg-white p-5 sm:p-7 md:p-8 rounded-2xl shadow-xl max-w-xs md:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center mb-6">
              <TrendingUp size={18} />
            </div>
            <ul className="space-y-3">
              {[
                "Financial Strategy & Planning",
                "Process Automation Solutions",
                "Real-Time Data Analytics",
                "Virtual CFO Services",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-800 font-medium text-sm flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
