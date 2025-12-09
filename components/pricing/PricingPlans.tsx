"use client";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import type { Pricing } from "@/types/pricing";
import { useRouter } from "next/navigation";

interface PricingPlansProps {
  plans: Pricing[];
}

export const PricingPlans = ({ plans }: PricingPlansProps) => {
  const router = useRouter();
  return (
    <section className="pt-40 pb-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Pricing]"
            title="Smart Solutions Transparent Pricing"
            italicWord="Pricing"
            align="center"
            className="mb-8"
          />
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {plans.map((plan, index) => {
              const isMiddle = index === 1;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={isMiddle ? "relative z-10 md:scale-110" : ""}
                >
                  <div
                    className={`relative backdrop-blur-lg h-full flex flex-col rounded-3xl ${
                      isMiddle
                        ? "bg-primary-600 text-white"
                        : "border border-gray-100 bg-white/50 text-[#231D4F]"
                    }`}
                  >
                    <div className="space-y-4 px-8 py-6 text-center">
                      <h3 className="text-2xl font-medium">{plan.name}</h3>
                      <p
                        className={`text-sm ${
                          isMiddle ? "text-white/80" : "text-[#848199]"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">
                            $ {plan.price}
                          </span>
                          <span
                            className={`ml-1 text-base ${
                              isMiddle ? "text-white/80" : "text-[#848199]"
                            }`}
                          >
                            /month
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 px-8 py-4 flex-1 flex flex-col">
                      <ul className="space-y-4 flex-1">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={feature.id ?? feature.order ?? idx}
                            className="flex items-center gap-3"
                          >
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 ${
                                isMiddle
                                  ? "bg-white/20"
                                  : "bg-[rgba(29,78,216,0.15)]"
                              }`}
                            >
                              <Check
                                className={`h-3 w-3 ${
                                  isMiddle ? "text-white" : "text-primary-700"
                                }`}
                              />
                            </div>
                            <span
                              className={`text-sm ${
                                isMiddle ? "text-white" : "text-[#231D4F]"
                              }`}
                            >
                              {feature.feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full bg-primary-600 px-4 py-2 rounded-full ${
                          isMiddle ? "text-black bg-white " : "text-white"
                        }`}
                        onClick={() => router.push("/contact")}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
