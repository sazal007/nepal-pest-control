"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Scale,
  Calculator,
  TrendingUp,
  BarChart,
  FileCheck,
  Cpu,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Scale,
    title: "Business Formation & Regulatory",
    description:
      "Company incorporation, entity-setup, licensing & regulatory compliance handled professionally.",
    image:
      "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Complete bookkeeping, transaction tracking, payroll, and accurate financial records management.",
    image:
      "https://plus.unsplash.com/premium_photo-1661306425417-7eef17153be1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: TrendingUp,
    title: "Virtual CFO & Advisory",
    description:
      "Budgeting, forecasting, cash-flow management and strategic financial planning for growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: BarChart,
    title: "Financial Modelling & Data Analytics",
    description:
      "Custom financial models, data-driven reports, and dashboard insights for informed decisions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FileCheck,
    title: "Compliance & Statutory Reporting",
    description:
      "Tax compliance, regulatory filings, and statutory reports handled with precision and care.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description:
      "Automate repetitive financial and administrative tasks to save time, reduce errors and improve efficiency.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ProcessSection = () => {
  const router = useRouter();
  return (
    <section id="process" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[What We Offer]"
            title="Accounting & Finance Services for Your Business"
            italicWord="Business"
            align="center"
            className="mb-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.08 }}
              onClick={() => router.push("/services")}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl mb-6"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-2 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
