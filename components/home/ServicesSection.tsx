"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Strategy Consulting",
    description: "Guiding individuals and businesses with smart financial planning, investment advice, and long-term wealth strategies.",
    points: ["Personalized Financial Planning", "Investment & Portfolio Guidance", "Risk Management & Wealth Protection"],
    image: "https://picsum.photos/id/1059/800/800"
  },
  {
    id: "02",
    title: "Market Insights and Analysis",
    description: "Deep dive analysis into market trends to position your business ahead of the curve.",
    points: ["Competitor Benchmarking", "Consumer Behavior Analysis", "Trend Forecasting"],
    image: "https://picsum.photos/id/1060/800/800"
  },
  {
    id: "03",
    title: "Wealth & Finance Advisory",
    description: "Comprehensive financial structures to optimize tax efficiency and capital allocation.",
    points: ["Capital Allocation", "Tax Optimization", "M&A Advisory"],
    image: "https://picsum.photos/id/1070/800/800"
  },
  {
    id: "04",
    title: "Digital Transformation",
    description: "Leveraging technology to streamline operations and enhance customer experiences.",
    points: ["Tech Stack Audit", "Digital Workflow Integration", "Data Security"],
    image: "https://picsum.photos/id/118/800/800"
  }
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-10 md:mb-16">
          <SectionHeading 
            title="Driving Growth Through Strategic Excellence"
            italicWord="Excellence"
            className="mb-0 max-w-xl"
          />
          <Button className="w-full md:w-auto md:inline-flex justify-center">
            Contact Us
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Accordion List */}
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`border-b border-gray-100 pb-6 cursor-pointer transition-all duration-300 group`}
                onClick={() => setActiveService(idx)}
              >
                <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-4">
                  <span className={`text-lg font-medium ${activeService === idx ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-600'}`}>
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

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeService === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-2 sm:pl-10 md:pl-14">
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 sm:space-y-3">
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
