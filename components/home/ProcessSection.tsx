"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquare, FileSearch, Cog } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Understand & Assess",
    desc: "We begin by understanding your financial goals, current processes, and challenges through comprehensive consultation to identify opportunities for improvement.",
  },
  {
    icon: FileSearch,
    title: "Design & Customize",
    desc: "We develop tailored solutions—from automation workflows to financial models and dashboards—that align with your specific business needs and objectives.",
  },
  {
    icon: Cog,
    title: "Implement & Support",
    desc: "We seamlessly integrate our solutions, provide training, and offer continuous support to ensure sustained success and ongoing optimization of your financial operations.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Our Proven Process to Drive Your Financial Success"
            italicWord="Success"
            className="max-w-2xl mb-16"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 group hover:border-primary-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-6 sm:mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <step.icon size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
