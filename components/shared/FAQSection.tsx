"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: "How quickly can we see results?", answer: "Results typically vary based on the project scope, but most clients see initial impact within 30 days." },
  { question: "Is a credit card required for registration?", answer: "Yes! After you choose your desired template, site title, and subscription plan, we will personalize your site to reflect the template you selected, including your own text and visuals." },
  { question: "Do you work with startups or established businesses?", answer: "We work with both! Our strategies are tailored to the specific stage and needs of your business." },
  { question: "What industries do you specialize in?", answer: "We have broad experience across tech, retail, finance, and healthcare sectors." },
  { question: "How do you measure success of a consulting engagement?", answer: "We set clear KPIs at the beginning of every engagement and track progress transparently." },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6">
              Friendly Asked <br />{" "}
              <span className="font-serif italic font-normal">Questions.</span>
            </h2>
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 mb-5 sm:mb-6">
              <h4 className="font-bold text-base sm:text-lg mb-2">
                Still have a question?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                Our team is ready to assist you with anything you need.
              </p>
              <Button className="w-full sm:w-auto justify-center">Make a Call</Button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-4 sm:p-6 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <div className={`p-1 rounded-full ${openIndex === idx ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
