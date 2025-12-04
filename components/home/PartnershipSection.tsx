"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const PartnershipSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image Card */}
          <div className="relative h-72 sm:h-80 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
            <img
              src="https://picsum.photos/id/1005/800/1000"
              alt="Partner Portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full bg-linear-to-t from-gray-900/90 via-gray-900/50 to-transparent">
              <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  What to Know What's Possible
                </h3>
                <Button variant="white" className="text-xs py-2 px-4 h-10">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <SectionHeading
              title="The Value Behind Our Partnership"
              italicWord="Partnership"
              className="mb-8"
            />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 sm:mb-10 lg:mb-12">
              At Infin, Our partnership goes beyond delivering solutions—it's
              about building trust, aligning with your goals. We go beyond
              consulting to become your strategic partner—delivering tailored
              solutions, expert insight, and measurable results.
            </p>

            {/* Tab-like List */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-gray-100 mb-6 sm:mb-8">
              <button
                onClick={() => setActiveTab(0)}
                className={`pb-3 sm:pb-4 border-b-2 flex items-center gap-2 ${
                  activeTab === 0
                    ? "border-primary-600 text-primary-800 font-semibold"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                Deep Collaboration
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`pb-3 sm:pb-4 ${
                  activeTab === 1
                    ? "text-gray-700"
                    : "text-gray-400 hover:text-gray-700"
                } transition-colors`}
              >
                Expertise
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`pb-3 sm:pb-4 ${
                  activeTab === 2
                    ? "text-gray-700"
                    : "text-gray-400 hover:text-gray-700"
                } transition-colors`}
              >
                Tailored Solutions
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                We work as an extension of your team—immersing ourselves in your
                goals, challenges, and vision to ensure aligned outcomes. We
                believe great results come from working closely together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
