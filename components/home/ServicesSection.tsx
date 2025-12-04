"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Process Automation Services",
    description:
      "Streamline your operations by automating repetitive financial tasks, reducing manual errors, and freeing up your team to focus on strategic growth.",
    points: [
      "Workflow Automation & Integration",
      "Error Reduction & Efficiency Gains",
      "Custom Solutions for Your Business",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "02",
    title: "Virtual CFO Services",
    description:
      "Get CFO-level financial expertise without the full-time cost. We provide strategic financial guidance, budgeting, forecasting, and cash flow management.",
    points: [
      "Strategic Financial Planning",
      "Budgeting & Cash Flow Management",
      "Financial Reporting & Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "03",
    title: "Data Analytics & Dashboards",
    description:
      "Transform complex financial data into clear, actionable insights with customized dashboards and real-time analytics that drive informed decision-making.",
    points: [
      "Interactive Financial Dashboards",
      "Real-Time Performance Tracking",
      "Advanced Data Visualization",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "04",
    title: "Financial Modelling & Reporting",
    description:
      "Build comprehensive financial models for strategic planning, scenario analysis, and forecasting. We deliver customized reports that meet your specific business needs.",
    points: [
      "Dynamic Financial Models",
      "Scenario & Sensitivity Analysis",
      "Custom Management Reports",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Driving Growth Through Strategic Excellence"
            italicWord="Excellence"
            className="mb-0 max-w-xl"
          />
          <Button className="w-full md:w-auto md:inline-flex justify-center">
            Contact Us
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Accordion List */}
          <motion.div
            className="space-y-6 mt-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`border-b border-gray-100 pb-6 cursor-pointer transition-all duration-300 group`}
                onClick={() => setActiveService(idx)}
              >
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  <span
                    className={`text-lg font-medium ${
                      activeService === idx
                        ? "text-primary-700"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    [{service.id}]
                  </span>
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-medium ${
                      activeService === idx
                        ? "text-gray-900"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={
                    activeService === idx
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-2 sm:pl-10 md:pl-14 pt-1 pb-2">
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 sm:space-y-3">
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-medium text-gray-800"
                        >
                          <Check size={16} className="text-primary-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            key={services[activeService].image}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={services[activeService].image}
              alt={services[activeService].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Gradient Overlay for subtle text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
