"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Plus, Minus } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Client-Centered Thinking",
    content:
      "We put our clients first—understanding their goals, challenges, and customers to deliver tailored solutions that create real value.",
  },
  {
    id: "02",
    title: "Creative with Purpose",
    content:
      "Creativity isn't just about looks; it's about problem-solving. We design strategies that are innovative yet grounded in results.",
  },
  {
    id: "03",
    title: "Data-Driven Decisions",
    content:
      "We rely on data, not guesswork. Our strategies are backed by deep analysis to ensure accuracy and impact.",
  },
  {
    id: "04",
    title: "Collaboration Over Ego",
    content:
      "We believe the best results come from working together. We foster an environment of open communication and teamwork.",
  },
  {
    id: "05",
    title: "Always Evolving",
    content:
      "The business landscape changes fast, and so do we. We stay ahead of trends to keep your business competitive.",
  },
];

export const PrinciplesSection = () => {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              tag="[Our Principles]"
              title="The Core Principles that Guide Us"
              italicWord="Guide Us"
              className="mb-12"
            />
            <p className="text-gray-500 mb-12">
              At Infin, our mission is to empower businesses with strategic
              solutions that drive growth, efficiency, and transformation.
            </p>

            <div className="space-y-4">
              {principles.map((p) => (
                <div
                  key={p.id}
                  className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                    activeId === p.id
                      ? "shadow-md border-blue-100"
                      : "border border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setActiveId(activeId === p.id ? "" : p.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-gray-400">
                        [{p.id}]
                      </span>
                      <span
                        className={`text-lg font-semibold ${
                          activeId === p.id ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {p.title}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        activeId === p.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {activeId === p.id ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeId === p.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pl-16 text-gray-500 text-sm leading-relaxed">
                      {p.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-full min-h-[600px] rounded-3xl overflow-hidden relative shadow-2xl lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Principles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
