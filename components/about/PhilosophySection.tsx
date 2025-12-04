"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Target, LineChart, Cog } from "lucide-react";
import { useRouter } from "next/navigation";

export const PhilosophySection = () => {
  const router = useRouter();
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Row - Spans Full Width */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1]">
              We Believe In Results With <br /> Smart{" "}
              <span className="font-serif italic font-normal">
                Financial Solutions.
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0 mb-1">
            <Button
              variant="blue"
              className="px-8 py-3 text-sm rounded-full"
              onClick={() => router.push("/contact")}
            >
              Get Started
            </Button>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Text & Cards */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="max-w-3xl pr-4">
              <p className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed font-medium">
                At XInfin, we believe that financial clarity drives business
                success. We combine cutting-edge technology with expert
                financial guidance to streamline your operations and fuel
                growth.
              </p>
              <p className="text-sm md:text-base text-gray-500 mb-10 leading-relaxed">
                Our approach blends automation, data-driven insights, and
                personalized financial strategy to transform complex challenges
                into actionable solutions that deliver measurable, lasting
                results for your business.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: Target,
                    title: "Strategic Financial Planning",
                    desc: "Aligning financial goals with your business vision for sustainable growth.",
                  },
                  {
                    icon: LineChart,
                    title: "Data-Driven Insights",
                    desc: "Transforming financial data into actionable intelligence for better decisions.",
                  },
                  {
                    icon: Cog,
                    title: "Process Automation",
                    desc: "Streamlining operations through smart technology and efficient systems.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-full hover:shadow-md transition-shadow"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-4">
                      <item.icon size={18} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-end pl-0 lg:pl-4"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Image - Constrained width */}
            <div className="relative w-full max-w-[380px] mt-2 lg:mt-0">
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Financial Expert"
                  className="w-full h-full object-cover"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
