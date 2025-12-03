"use client";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import type { Pricing } from "@/types/pricing";

interface PricingPlansProps {
  plans: Pricing[];
}

export const PricingPlans = ({ plans }: PricingPlansProps) => {
  return (
    <section className="pt-40 pb-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <SectionHeading
            // tag="[Pricing]"
            title="Smart Solutions Transparent Pricing"
            italicWord="Pricing"
            align="center"
            className="mb-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col min-h-[420px] transition-all duration-300 ${
                plan.is_popular
                  ? "bg-blue-700 text-white shadow-xl scale-105 z-10"
                  : "bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-lg"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p
                className={`text-sm mb-8 leading-relaxed ${
                  plan.is_popular ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight">
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.is_popular ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  /month
                </span>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature.id ?? feature.order}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.is_popular
                          ? "bg-white text-blue-700"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span
                      className={
                        plan.is_popular ? "text-blue-50" : "text-gray-600"
                      }
                    >
                      {feature.feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
