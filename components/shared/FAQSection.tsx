"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Plus, Minus } from "lucide-react";
import { useGetFAQs } from "@/hooks/use-faq";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FAQSection = () => {
  const { data: faqsData, isLoading } = useGetFAQs();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqsData || [];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              Friendly Asked <br />{" "}
              <span className="font-serif italic font-normal">Questions.</span>
            </h2>
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 mb-5 sm:mb-6">
              <h4 className="font-bold text-base sm:text-lg mb-2">
                Still have a question?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                Our team is ready to assist you with anything you need.
              </p>
              <Button className="w-full sm:w-auto justify-center">
                Make a Call
              </Button>
            </div>
          </div>

          <motion.div
            className="space-y-0 lg:col-span-8"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {isLoading ? (
              <div className="text-center py-8 text-gray-500">
                Loading FAQs...
              </div>
            ) : (
              faqs.map((faq, idx) => {
                const isOpen = openIndex === faq.id;
                const isLast = idx === faqs.length - 1;

                return (
                  <motion.div
                    key={faq.id}
                    className={`overflow-hidden transition-all duration-300 ${
                      !isLast ? "border-b border-gray-200" : ""
                    }`}
                    variants={fadeInUp}
                    initial={false}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === faq.id ? null : faq.id)
                      }
                      className="flex w-full items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 rounded-full p-2 transition-all duration-300 ease-in-out ${
                          isOpen ? "bg-opacity-10" : "border bg-white"
                        }`}
                        style={{
                          backgroundColor: isOpen
                            ? "rgba(59, 130, 246, 0.1)"
                            : "transparent",
                          borderColor: isOpen
                            ? "transparent"
                            : "rgb(59, 130, 246)",
                          color: "rgb(59, 130, 246)",
                        }}
                      >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-sm leading-relaxed text-gray-500">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
