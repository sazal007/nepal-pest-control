"use client";

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check, ArrowUpRight } from 'lucide-react';

export const PricingPlans = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter Plan",
      description: "Ideal for growing businesses ready to scale with a clear strategy.",
      price: "$80",
      features: [
        "1 strategy consultation session.",
        "Business performance review",
        "High-level action plan",
        "Email support (1 week)"
      ],
      cta: "Get started",
      featured: false
    },
    {
      name: "Growth Plan",
      description: "Perfect for growing teams that need advanced tools.",
      price: "$120",
      features: [
        "3 consulting sessions up to 6 hours",
        "Competitor & market analysis",
        "Customized strategic roadmap",
        "Email & chat support (1 month)"
      ],
      cta: "Get started",
      featured: true
    },
    {
      name: "Enterprise Plan",
      description: "Designed for scaling businesses that need full control and dedicated support.",
      price: "$260",
      features: [
        "Full business audit & KPI assessment",
        "Weekly consulting sessions (1 month)",
        "In-depth strategy development",
        "Dedicated consultant & support team"
      ],
      cta: "Get started",
      featured: false
    }
  ];

  return (
    <section className="pt-28 pb-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeading 
            tag="[Pricing]"
            title="Smart Solutions Transparent Pricing"
            italicWord="Pricing"
            align="center"
            className="mb-8"
          />
          
          <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 relative">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billing === 'monthly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${billing === 'yearly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.featured ? 'bg-blue-700 text-white shadow-xl scale-105 z-10' : 'bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-lg'}`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${plan.featured ? 'text-blue-100' : 'text-gray-500'}`}>{plan.description}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? 'text-blue-100' : 'text-gray-500'}`}>/month</span>
              </div>

              <div className="mb-8">
                {plan.featured ? (
                  <button className="w-full bg-white text-blue-800 font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                    {plan.cta} <div className="p-1 rounded-full bg-blue-700 text-white"><ArrowUpRight size={12}/></div>
                  </button>
                ) : (
                  <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                    {plan.cta} <div className="p-1 rounded-full bg-white text-blue-600"><ArrowUpRight size={12}/></div>
                  </button>
                )}
              </div>

              <ul className="space-y-4 mt-auto">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-white text-blue-700' : 'bg-blue-50 text-blue-600'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={plan.featured ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
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
