import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FileText, Rocket, Lightbulb, Puzzle, ShieldCheck, ArrowUpRight } from 'lucide-react';

const servicesList = [
  {
    icon: FileText,
    title: "Risk Assessment",
    description: "We help you define clear goals and build winning strategies that drive measurable business growth.",
    link: "#"
  },
  {
    icon: Rocket,
    title: "Talent Strategy",
    description: "We help you define clear goals and build winning strategies that drive measurable business growth.",
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "Growth Planning",
    description: "We help you define clear goals and build winning strategies that drive measurable business growth.",
    link: "#"
  },
  {
    icon: Puzzle,
    title: "Performance Optimize",
    description: "We help you define clear goals and build winning strategies that drive measurable business growth.",
    link: "#"
  },
  {
    icon: ShieldCheck,
    title: "Business Analytics",
    description: "We help you define clear goals and build winning strategies that drive measurable business growth.",
    link: "#"
  }
];

export const ServiceExplorer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            tag="[Core Services]"
            title="Explore Services"
            italicWord="Services"
            className="mb-0"
          />
          <Button>Contact Us</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-3xl hover:bg-white hover:shadow-xl hover:border-primary-100 border border-transparent transition-all duration-300 group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <item.icon size={20} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                {item.description}
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Read More 
                <div className="w-5 h-5 rounded-full bg-primary-600 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={10} />
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
