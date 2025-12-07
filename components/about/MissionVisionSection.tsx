"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <div className="mt-1 w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
          <Check size={12} />
        </div>
        <span className="text-gray-700 font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

export const MissionVisionSection = () => {
  const router = useRouter();
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Mission]"
              title="Empowering Your Financial Excellence"
              italicWord="Excellence"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              At XInfin, our mission is to empower businesses worldwide with
              innovative financial solutions that streamline operations, enhance
              decision-making, and drive sustainable growth.
            </p>
            <FeatureList
              items={[
                "Deliver accurate, real-time financial insights for better decisions",
                "Automate processes to reduce costs and improve efficiency",
                "Build lasting partnerships founded on trust and measurable results",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="XInfin Mission - Team Collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
              alt="XInfin Vision - Global Innovation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeading
              tag="[Our Vision]"
              title="Leading The Future of Global Financial Services"
              italicWord="Future"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              We envision becoming the global partner of choice for businesses
              seeking intelligent financial solutions, where technology and
              expertise converge to create lasting competitive advantages.
            </p>
            <FeatureList
              items={[
                "Pioneer innovative technologies that transform financial management",
                "Expand our global reach while maintaining personalized service",
                "Create a world where every business has access to CFO-level insights",
              ]}
            />
            <Button variant="blue" onClick={() => router.push("/contact")}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
