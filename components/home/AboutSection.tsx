import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pin } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionHeading 
          title="Since 2016, we're a team of all in all experienced consultations, combine for strategic instant."
          italicWord="experienced"
          className="max-w-4xl mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Text */}
          <div className="md:col-span-3">
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              At Optimo, We help businesses navigate complexity unlock to growth achieve lasting transformation with a team of experienced consultations, We can combine for strategic instant.
            </p>

            <div className="border-l-2 border-gray-900 pl-6">
              <div className="text-6xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-sm text-gray-500 font-medium">Successful Projects Delivered</div>
            </div>
          </div>

          {/* Center Image */}
          <div className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden h-[400px] w-full">
              <img 
                src="https://picsum.photos/id/1001/800/800" 
                alt="Team Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="md:col-span-3 flex flex-col justify-between h-full">
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Pin size={16} fill="currentColor" />
              </div>
              <ul className="space-y-3 text-sm font-medium text-gray-800">
                <li className="flex items-center gap-2">Strategic Planning</li>
                <li className="flex items-center gap-2">Operational Excellence</li>
                <li className="flex items-center gap-2">Market Expansion</li>
                <li className="flex items-center gap-2">Risk Management</li>
              </ul>
            </div>
            
            <Button className="w-full justify-center">Book a Free Call</Button>
          </div>

        </div>
      </div>
    </section>
  );
};
