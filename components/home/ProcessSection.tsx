import { SectionHeading } from '@/components/ui/SectionHeading';
import { Search, Puzzle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discover & Diagnose",
    desc: "We start by understanding your business, identifying pain points, and analyzing."
  },
  {
    icon: Puzzle,
    title: "Strategize & Plan",
    desc: "We develop tailored, data-driven strategies designed to solve challenges, align."
  },
  {
    icon: Rocket,
    title: "Execute & Optimize",
    desc: "We work alongside your team to implement solutions, monitor progress and refine."
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading 
          title="Our Proven Process to Drive Your Success"
          italicWord="Success"
          className="max-w-2xl mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-100 group hover:border-primary-200 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-6 sm:mb-8 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <step.icon size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
