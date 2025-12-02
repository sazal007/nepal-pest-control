"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const PartnershipSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image Card */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden group">
            <img 
              src="https://picsum.photos/id/1005/800/1000" 
              alt="Partner Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Collaborate Now</h3>
                <Button variant="white" className="text-xs py-2 px-4 h-10">Collaborate Now</Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <SectionHeading 
              title="Collaborate with us"
              italicWord="us"
              className="mb-8"
            />
            <p className="text-gray-500 leading-relaxed mb-12">
              We believe in the power of collaboration and partnerships to provide the best possible service to our clients. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach. We are open to collaborating on projects with other businesses and professionals all over the world. Whether it's a one-time project or an ongoing partnership, we believe that working together can lead to better outcomes for our clients and our businesses.
            </p>

            {/* Tab-like List */}
            <div className="flex border-b border-gray-100 mb-8">
              <button 
                onClick={() => setActiveTab(0)}
                className={`pb-4 border-b-2 mr-8 flex items-center gap-2 ${activeTab === 0 ? 'border-blue-600 text-blue-800 font-semibold' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Deep Collaboration
              </button>
              <button 
                onClick={() => setActiveTab(1)}
                className={`pb-4 mr-8 ${activeTab === 1 ? 'text-gray-700' : 'text-gray-400 hover:text-gray-700'} transition-colors`}
              >
                Expertise
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`pb-4 ${activeTab === 2 ? 'text-gray-700' : 'text-gray-400 hover:text-gray-700'} transition-colors`}
              >
                Tailored Solutions
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                We believe in the power of collaboration and partnerships to provide the best possible service to our clients. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
