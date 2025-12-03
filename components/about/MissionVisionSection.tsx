import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
          <Check size={12} />
        </div>
        <span className="text-gray-700 font-medium">{item}</span>
      </li>
    ))}
  </ul>
);

export const MissionVisionSection = () => {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
          <div>
            <SectionHeading
              tag="[Our Mission]"
              title="Built to Drive Real Business Growth"
              italicWord="Growth"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              At Infin, our mission is to empower businesses with strategic
              solutions that drive growth, efficiency, and transformation.
            </p>
            <FeatureList
              items={[
                "Deliver results-driven strategies aligned with your goals",
                "Empower organizations to grow and lead in a changing market",
                "Foster partnerships built on trust and measurable impact",
              ]}
            />
            <Button variant="blue">Get Started</Button>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              tag="[Our Vision]"
              title="Shaping The Future of Business Success"
              italicWord="Success"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              At Infin, our vision is to empower businesses with strategic
              solutions that drive growth, efficiency, and transformation.
            </p>
            <FeatureList
              items={[
                "Innovate continuously to stay ahead in a changing market",
                "Empower businesses to lead with confidence and clarity",
                "Build sustainable growth through forward-thinking strategies",
              ]}
            />
            <Button variant="blue">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
