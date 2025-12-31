"use client";

import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] lg:h-screen flex items-center pt-20 overflow-hidden bg-gray-900 justify-center">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <img
          src="/images/PestControlinkathmandu.png"
          alt="Pest Control Service"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
      </motion.div>

      <div className="px-4 sm:px-6 md:px-8 text-center z-10 text-white h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mt-6 sm:mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 sm:mb-6 tracking-tight break-words">
            Safe & Reliable <br />
            <span className="font-serif italic font-normal text-primary-400">
              Pest Control Services
            </span>
          </h1>
          <p className="mt-4 text-md sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Protecting your home and business with certified treatments and
            expert technicians.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
