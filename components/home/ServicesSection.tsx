"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Process Automation Services",
    description: "Our process automation services help businesses automate their repetitive tasks, reducing manual errors and improving efficiency. We can help you identify areas where automation can be implemented and provide customized solutions to meet your business needs.",
    points: ["Task Automation", "Workflow Optimization", "Error Reduction"],
    image: "https://picsum.photos/id/1059/800/800"
  },
  {
    id: "02",
    title: "Accounting and Bookkeeping Services",
    description: "We provide bookkeeping services to help you keep track of your financial transactions and maintain accurate records. Our team of experienced professionals will ensure that your books are up to date and organized.",
    points: ["Financial Transaction Tracking", "Accurate Record Maintenance", "Professional Bookkeeping"],
    image: "https://picsum.photos/id/1060/800/800"
  },
  {
    id: "03",
    title: "Virtual CFO Services",
    description: "Our Virtual CFO services provide small and mid-sized businesses with the financial expertise they need to make informed decisions and grow their business without the cost of a full-time CFO. Our experienced team of financial professionals can help with budgeting, forecasting, cash flow management, and financial reporting.",
    points: ["Budgeting & Forecasting", "Cash Flow Management", "Financial Reporting"],
    image: "https://picsum.photos/id/1070/800/800"
  },
  {
    id: "04",
    title: "Data Analysis & Reporting",
    description: "Our data analysis service helps you identify trends and opportunities in your financial data, enabling you to make strategic business decisions. We use the latest tools and techniques to analyze your data and provide you with actionable insights that can help you make informed business decisions.",
    points: ["Trend Identification", "Strategic Insights", "Data-Driven Decisions"],
    image: "https://picsum.photos/id/118/800/800"
  }
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading 
            title="Our Services"
            italicWord="Services"
            className="mb-0 max-w-xl"
          />
          <Button className="hidden md:inline-flex">Collaborate With Us</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Accordion List */}
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`border-b border-gray-100 pb-6 cursor-pointer transition-all duration-300 group`}
                onClick={() => setActiveService(idx)}
              >
                <div className="flex items-center gap-6 mb-4">
                  <span className={`text-lg font-medium ${activeService === idx ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    [{service.id}]
                  </span>
                  <h3 className={`text-2xl font-medium ${activeService === idx ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {service.title}
                  </h3>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-14">
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                          <Check size={16} className="text-blue-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={services[activeService].image} 
              alt={services[activeService].title} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Gradient Overlay for subtle text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
};
