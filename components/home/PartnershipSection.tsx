"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRouter } from "next/navigation";

const TAB_CONTENT = [
  {
    id: 0,
    title: "Deep Collaboration",
    body: "We work as an embedded partner, not an outside consultant—joining your leadership conversations, aligning with your roadmap, and staying close to your decision-making so we can move quickly together.",
  },
  {
    id: 1,
    title: "Expertise",
    body: "Our team brings cross-industry experience in strategy, operations, and finance, giving you access to senior-level insight without adding permanent headcount to your organization.",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    body: "Every engagement is designed around your context, constraints, and goals—from diagnostics and strategy through implementation—so the outcomes are practical, actionable, and measurable.",
  },
];

export const PartnershipSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image Card */}
          <motion.div
            className="relative h-72 sm:h-80 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8fHww"
              alt="Partner Portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full bg-linear-to-t from-gray-900/90 via-gray-900/50 to-transparent">
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What to Know What&apos;s Possible
                </h3>
                <Button
                  variant="white"
                  className="text-xs py-2 px-4 h-10 cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              title="The Value Behind Our Partnership"
              italicWord="Partnership"
              className="mb-8"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 sm:mb-10 lg:mb-12">
              At Nepal Pest Control, our partnerships are built around long-term
              value—not one-off projects. Explore how we show up for you across
              each phase of the relationship.
            </p>

            {/* Tab-like List */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-gray-100 mb-6 ">
              {TAB_CONTENT.map(({ id, title }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`pb-3 sm:pb-4 flex items-center gap-2 transition-colors cursor-pointer ${
                      isActive
                        ? "text-gray-700"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-primary-600" : "bg-gray-200"
                      }`}
                    ></span>
                    {title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <p className="text-sm text-gray-600 leading-relaxed">
                {TAB_CONTENT[activeTab].body}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
