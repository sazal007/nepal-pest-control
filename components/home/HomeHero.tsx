"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const HomeHero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Business Meeting"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <motion.div
          className="max-w-3xl mt-16 sm:mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-6xl font-semibold leading-tight md:leading-[1.05] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Providing Financial <br />
            Expertise & Intelligence for{" "}
            <span className="font-serif italic font-normal">
              Growing companies.
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          >
            XInfin is a leading provider of Process Automation, Financial
            Advisory, Accounting and Bookkeeping, Virtual CFO, Data Analysis,
            Data Visualization, Financial Modelling, and Reporting Requirements
            services on a global scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Button
              variant="white"
              className="text-primary-900 font-bold  xs:w-auto justify-center cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              Book a Free Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
