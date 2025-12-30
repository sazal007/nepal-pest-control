"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const HomeHero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/647e19832ff041718f9f0756/1690211428966-YRW7VDYW0PFLU0XZZVC3/image-asset.jpeg"
          alt="Pest Control"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-900/80 to-transparent" /> */}
      </motion.div>

      <div className="container mx-auto px-3 sm:px-4 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mt-6 sm:mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Credibility Badge */}
          <motion.div
            className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-8 text-[10px] sm:text-xs font-bold tracking-wide sm:tracking-widest text-blue-100 uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full max-w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shrink-0"></span>
            <span className="whitespace-nowrap">6+ Years</span>
            <span className="hidden min-[360px]:inline">Experience</span>
            <span className="hidden min-[360px]:inline"> • </span>
            <span className="hidden min-[360px]:inline">250+ Clients</span>
            <span className="hidden min-[420px]:inline">Worldwide</span>
            <span className="min-[360px]:hidden"> • 250+</span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Professional Pest Control, <br />
            Compliance &{" "}
            <span className="text-blue-400">Pest Control Services</span> <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic font-normal text-white">
              — All in One Place.
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-md md:text-lg text-gray-300 mb-6 sm:mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          >
            We help businesses stay compliant, manage pest control, and grow —
            so you can focus on running your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <Button
              variant="white"
              className="font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 text-gray-900 w-full sm:w-auto"
              onClick={() => router.push("/services")}
            >
              Explore Services
            </Button>
            <Button
              variant="primary"
              className="font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
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
