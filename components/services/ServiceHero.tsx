"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ServiceHero = () => {
  return (
    <section className="pt-40 pb-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Our Services]"
            title="Innovative Solutions That Drive Success"
            italicWord="Success"
            align="center"
            className="mb-10 max-w-4xl mx-auto"
          />
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden h-[400px] md:h-[550px] w-full shadow-2xl relative group"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80"
            alt="Services Team Meeting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
        </motion.div>
      </div>
    </section>
  );
};
