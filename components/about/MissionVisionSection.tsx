import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check } from 'lucide-react';

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
    <section className="bg-white pb-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <SectionHeading 
              tag="[Our Mission]"
              title="Delivering innovative solutions for clients to achieve their financial goals"
              italicWord="goals"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              XInfin is a leading provider of Process Automation, Financial Advisory, Accounting and Bookkeeping, Virtual CFO, Data Analysis, Data Visualization, Financial Modelling, and Reporting Requirements services on a global scale.
            </p>
            <FeatureList items={[
              "We pride ourselves on delivering innovative solutions that help our clients streamline their operations",
              "We believe in the power of collaboration and partnerships to provide the best possible service",
              "We are always looking for opportunities to work with other businesses and professionals to enhance our offerings"
            ]} />
            <Button variant="blue">Collaborate With Us</Button>
          </div>
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" alt="Mission" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" alt="Vision" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              tag="[Our Vision]"
              title="Expanding our reach globally through collaboration"
              italicWord="globally"
            />
            <p className="text-gray-500 mb-8 leading-relaxed">
              We believe in the power of collaboration and partnerships to provide the best possible service to our clients. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach globally.
            </p>
            <FeatureList items={[
              "We are open to collaborating on projects with other businesses and professionals all over the world",
              "Whether it's a one-time project or an ongoing partnership, we believe that working together can lead to better outcomes",
              "We enhance our offerings and expand our reach globally"
            ]} />
            <Button variant="blue">Collaborate With Us</Button>
          </div>
        </div>

      </div>
    </section>
  );
};
