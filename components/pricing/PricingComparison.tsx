import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { PricingPackages } from "./pricing-pakage";

export const PricingComparison = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          // tag="[]"
          title="Specialized Engagement Models"
          italicWord="Models"
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {PricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl px-6 py-7 md:px-8 md:py-9 border border-slate-200/80 shadow-md h-full"
            >
              <div className="grid grid-cols-1 gap-8 items-start">
                {/* Header Info (top) */}
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                    {pkg.category}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 w-fit">
                    {pkg.model}
                  </div>
                  {/* <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                    &quot;{pkg.tagline}&quot;
                  </p> */}

                  <div className="bg-slate-50 p-4 md:p-5 rounded-xl border border-slate-100">
                    <div className="text-[11px] text-slate-400 mb-1 uppercase tracking-[0.16em] font-semibold">
                      Pricing Structure
                    </div>
                    <div className="text-base md:text-2xl font-semibold text-primary-600 flex gap-2 flex-col">
                      {pkg.price1}
                      <span className="">{pkg.price2}</span>
                    </div>
                  </div>
                </div>

                {/* Inclusions List (below) */}
                <div className="pt-1">
                  <h4 className="font-semibold text-slate-400 mb-3 text-xs uppercase tracking-[0.18em]">
                    Inclusions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                    {pkg.inclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[18px] h-4 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] md:text-sm text-slate-600 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
