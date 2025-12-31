"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pin } from "lucide-react";
import { useRouter } from "next/navigation";

export const AboutSection = () => {
  const router = useRouter();

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Trusted Pest Control Experts Serving Homes & Businesses Since 2016"
            italicWord="Trusted Pest Control Experts"
            className="max-w-4xl mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              At Nepal Pest Control, we provide safe, effective, and
              regulation-compliant pest management services for residential,
              commercial, and industrial spaces.
              <br />
              <br />
              Our certified technicians use proven treatment methods to
              eliminate pests, protect hygiene standards, and prevent future
              infestations — without disrupting your daily operations.
            </p>

            <div className="border-l-2 border-primary-700 pl-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-sm text-gray-500 font-medium">
                Successful Projects Completed
              </div>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden h-72 sm:h-96 md:h-[420px] w-full">
              <img
                src="/images/home-about.png"
                alt="Professional Pest Control Technician at Work"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="md:col-span-3 flex flex-col mt-10 md:mt-16 lg:mt-24"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
                <Pin size={16} fill="currentColor" />
              </div>

              <ul className="space-y-3 text-sm font-medium text-gray-800">
                <li>Residential Pest Control</li>
                <li>Commercial & Industrial Pest Management</li>
                <li>Termite & Rodent Control</li>
                <li>Hygiene & Sanitization Services</li>
              </ul>
            </div>

            <Button
              className="w-full justify-center"
              onClick={() => router.push("/appointment")}
            >
              Book a Free Inspection
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
