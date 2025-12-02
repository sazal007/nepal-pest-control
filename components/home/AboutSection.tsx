import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Pin } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionHeading 
          title="About XINFIN"
          italicWord="XINFIN"
          className="max-w-4xl mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Text */}
          <div className="md:col-span-3">
            <p className="text-gray-500 text-sm leading-relaxed mb-12">
              XInfin is a leading provider of Process Automation, Financial Advisory, Accounting and Bookkeeping, Virtual CFO, Data Analysis, Data Visualization, Financial Modelling, and Reporting Requirements services on a global scale.
            </p>

            <div className="border-l-2 border-gray-900 pl-6">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                We pride ourselves on delivering innovative solutions that help our clients streamline their operations and achieve their financial goals.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We believe in the power of collaboration and partnerships to provide the best possible service to our clients. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach globally.
              </p>
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
                <li className="flex items-center gap-2">Process Automation</li>
                <li className="flex items-center gap-2">Financial Advisory</li>
                <li className="flex items-center gap-2">Virtual CFO</li>
                <li className="flex items-center gap-2">Data Analysis</li>
              </ul>
            </div>
            
            <Button className="w-full justify-center">Collaborate With Us</Button>
          </div>

        </div>
      </div>
    </section>
  );
};
