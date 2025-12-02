import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cases = [
  { title: "Revive & Rise", image: "https://picsum.photos/id/1033/400/600" },
  { title: "Scaling Made Simple", image: "https://picsum.photos/id/101/400/600" },
  { title: "Fast-Track Growth", image: "https://picsum.photos/id/1031/400/600" },
  { title: "Future-Proofing", image: "https://picsum.photos/id/1029/400/600" },
];

export const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <SectionHeading 
            title="How We Helped Clients Grow Smarter"
            italicWord="Smarter"
            className="mb-0"
          />
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ArrowLeft size={18}/></button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"><ArrowRight size={18}/></button>
          </div>
        </div>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0">
          {cases.map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[350px] h-[450px] relative rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-4 rounded-xl shadow-lg flex justify-between items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-semibold text-gray-900">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
