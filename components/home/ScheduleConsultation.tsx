"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

export const ScheduleConsultation = () => {
  const router = useRouter();
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Hire YOur Virtual CFO, Helps Your in Financial Growth"
            italicWord="Helps Your in Financial Growth"
            align="center"
            className="mb-16 max-w-4xl mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Side */}
          <motion.div
            className="lg:col-span-7 h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://picsum.photos/id/318/1200/800"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Blue Card Side */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-primary-700 text-white p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600 rounded-bl-full opacity-50"></div>

              <div className="relative z-10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Calendar size={20} />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-primary-100 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                  This is some text inside of our team is available during the
                  hours below and happy to accommodate custom appointments as
                  needed.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  <div className="flex justify-between text-xs sm:text-sm border-b border-primary-600/30 pb-2.5 sm:pb-3">
                    <span className="text-primary-200">Monday - Thursday</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm border-b border-primary-600/30 pb-2.5 sm:pb-3">
                    <span className="text-primary-200">Friday</span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-primary-200">Saturday & Sunday</span>
                    <span className="font-medium">08:30 - 19:30</span>
                  </div>
                </div>

                <Button
                  variant="white"
                  className="w-full justify-center"
                  onClick={() => router.push("/appointment")}
                >
                  Get Appointment
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
