"use client";

import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquare, FileSearch, Cog } from "lucide-react";

export const VerticalProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startPoint = windowHeight * 0.8;
      const totalHeight = rect.height;

      const scrolled = startPoint - rect.top;
      const percentage = Math.min(
        1,
        Math.max(0, scrolled / (totalHeight * 0.8))
      );

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      id: "01",
      icon: MessageSquare,
      title: "Assessment & Inspection",
      desc: "We perform a thorough inspection of your home, office, or commercial space to identify pest infestations and understand your specific needs.",
    },
    {
      id: "02",
      icon: FileSearch,
      title: "Customized Pest Control Plan",
      desc: "Based on the inspection, we design a tailored pest management strategy using safe, effective, and environmentally responsible methods.",
    },
    {
      id: "03",
      icon: Cog,
      title: "Implementation & Ongoing Monitoring",
      desc: "Our team executes the plan, provides regular follow-ups, and monitors pest activity to ensure lasting protection and a safe environment.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
            <SectionHeading
              tag="[Our Process]"
              title="How We Protect Your Home & Business"
              italicWord="Protect"
            />
            <p className="text-gray-500 mb-8 max-w-md">
              Follow our simple three-step approach to safeguard your spaces
              from pests with professional, reliable, and long-lasting
              solutions.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12">
            {/* Background Line */}
            <div className="absolute left-[15px] md:left-[19px] top-8 bottom-20 w-0.5 bg-gray-100"></div>

            {/* Active Blue Line */}
            <div
              className="absolute left-[15px] md:left-[19px] top-8 w-0.5 bg-primary-600 transition-all duration-100 ease-out"
              style={{ height: `calc(${progress * 100}% - 60px)` }}
            ></div>

            <div className="space-y-12">
              {steps.map((step, idx) => {
                const threshold = idx / (steps.length - 0.5);
                const isActive = progress > threshold;

                return (
                  <div
                    key={idx}
                    className={`relative transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-50 translate-x-4"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[24px] md:-left-[36px] top-6 w-4 h-4 rounded-full border-4 transition-colors duration-500 ${
                        isActive
                          ? "bg-white border-primary-600 scale-125"
                          : "bg-gray-100 border-gray-100"
                      }`}
                    ></div>

                    <div
                      className={`p-8 rounded-2xl border transition-all duration-500 relative group overflow-hidden ${
                        isActive
                          ? "bg-white border-primary-100 shadow-md"
                          : "bg-gray-50 border-gray-50"
                      }`}
                    >
                      <div className="absolute top-4 right-4 text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">
                        {step.id}
                      </div>

                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                          isActive
                            ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        <step.icon size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
