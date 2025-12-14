"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus, Minus } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Innovation Through Technology",
    content:
      "We leverage cutting-edge automation and analytics tools to transform traditional financial processes into streamlined, efficient systems that save time and reduce errors.",
  },
  {
    id: "02",
    title: "Partnership & Collaboration",
    content:
      "We believe in building lasting relationships with our clients and partners worldwide. Your success is our success, and we work alongside you every step of the way.",
  },
  {
    id: "03",
    title: "Data-Driven Insights",
    content:
      "Every decision should be backed by solid data. We transform complex financial information into clear, actionable insights through advanced analytics and visualization.",
  },
  {
    id: "04",
    title: "Quality & Accuracy First",
    content:
      "Financial precision is non-negotiable. We maintain the highest standards in every service we deliver, ensuring your books, reports, and models are always accurate and reliable.",
  },
  {
    id: "05",
    title: "Global Reach, Personal Touch",
    content:
      "While we serve clients globally, we never lose sight of individual needs. We customize our solutions to align with your specific business goals and industry requirements.",
  },
];

export const PrinciplesSection = () => {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Principles]"
              title="The Core Values that Drive Excellence"
              italicWord="Excellence"
              className="mb-12"
            />
            <p className="text-gray-500 mb-12">
              At XInfin, our principles reflect our commitment to delivering
              exceptional financial solutions through innovation, collaboration,
              and unwavering attention to quality.
            </p>

            <div className="space-y-4">
              {principles.map((p) => (
                <motion.div
                  key={p.id}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                    activeId === p.id
                      ? "shadow-md border-primary-100"
                      : "border border-transparent"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setActiveId(activeId === p.id ? "" : p.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-gray-400">
                        [{p.id}]
                      </span>
                      <span
                        className={`text-lg font-semibold ${
                          activeId === p.id
                            ? "text-primary-600"
                            : "text-gray-900"
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        activeId === p.id
                          ? "bg-primary-600 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {activeId === p.id ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={
                      activeId === p.id
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16 text-gray-500 text-sm leading-relaxed">
                      {p.content}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="h-full min-h-[600px] rounded-3xl overflow-hidden relative shadow-2xl lg:mt-0"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="XInfin Core Principles"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
