"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export const ScheduleConsultation = () => {
  const router = useRouter();

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Schedule a Free Pest Control Inspection"
            italicWord="Free Pest Control Inspection"
            align="center"
            className="mb-16 max-w-4xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-7 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/appointment.png"
              alt="Pest Control Technician Inspection"
              className="w-full h-full "
            />
          </motion.div>

          {/* Booking Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-primary-700 text-white p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden shadow-xl">
              {/* Decorative Shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-bl-full opacity-50" />

              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={20} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  Book Your Service Visit
                </h3>

                <p className="text-primary-100 text-sm mb-8 leading-relaxed">
                  Our certified technicians are available for inspections and
                  pest control services at a time that works best for you. Safe
                  treatments, professional service, and reliable results.
                </p>

                <div className="space-y-4 mb-10 text-sm">
                  <div className="flex justify-between border-b border-primary-600/30 pb-3">
                    <span className="text-primary-200">Monday – Friday</span>
                    <span className="font-medium">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary-200">Saturday</span>
                    <span className="font-medium">09:00 – 17:00</span>
                  </div>
                </div>

                <Button
                  variant="white"
                  className="w-full justify-center"
                  onClick={() => router.push("/appointment")}
                >
                  Request a Free Inspection
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
