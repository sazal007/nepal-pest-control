"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const HomeHero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[600px] lg:h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Corporate Finance"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Credibility Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-blue-100 uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            6+ Years Experience • 250+ Clients Worldwide
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Professional Accounting, <br />
            Compliance & <span className="text-blue-400">
              Business Setup
            </span>{" "}
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-serif italic font-normal text-white">
              — All in One Place.
            </span>
          </motion.h1>

          <motion.p
            className="text-md md:text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          >
            We help businesses stay compliant, manage finances, and grow — so
            you can focus on running your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Button
              variant="white"
              className="font-bold text-base px-8 py-4 text-gray-900"
              onClick={() => router.push("/services")}
            >
              Explore Services
            </Button>
            <Button
              variant="primary"
              className="font-bold text-base px-8 py-4 bg-blue-600 hover:bg-blue-700"
              onClick={() => router.push("/contact")}
            >
              Get a Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
