"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export const HomeHero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-[520px] sm:min-h-[620px] lg:h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/pest-control.png"
          alt="Professional Pest Control Services in Nepal"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            10+ Years Experience • 250+ Clients Served
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Certified Pest Control &{" "}
            <span className="text-blue-400">Hygiene Solutions</span> You Can
            Trust
          </motion.h1>

          {/* SEO Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-300 mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          >
            Professional pest control, sanitation, and compliance services for
            homes, businesses, and regulated environments across Nepal.
          </motion.p>

          {/* Supporting Value Text
          <motion.p
            className="text-sm sm:text-base text-gray-400 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Government-certified technicians delivering safe, effective, and
            regulation-compliant pest management — without long-term contracts.
          </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <Button
              variant="white"
              className="font-bold px-8 py-4 text-gray-900"
              onClick={() => router.push("/services")}
            >
              View Services
            </Button>

            <Button
              variant="primary"
              className="font-bold px-8 py-4 bg-blue-600 hover:bg-blue-700"
              onClick={() => router.push("/appointment")}
            >
              Get a Free Inspection
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
