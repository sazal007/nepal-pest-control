import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Calendar } from 'lucide-react';

export const ComplexChallenges = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionHeading 
          title="Expert Solutions for Complex Challenges"
          italicWord="Challenges"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-7 h-[500px] rounded-3xl overflow-hidden relative">
            <img 
              src="https://picsum.photos/id/318/1200/800" 
              alt="Consultation" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blue Card Side */}
          <div className="lg:col-span-5">
            <div className="bg-blue-700 text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Calendar size={20} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                  This is some text inside of our team is available during the hours below and happy to accommodate custom appointments as needed.
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm border-b border-blue-600/30 pb-3">
                    <span className="text-blue-200">Monday - Thursday</span>
                    <span className="font-medium">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-blue-600/30 pb-3">
                    <span className="text-blue-200">Friday</span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-200">Saturday & Sunday</span>
                    <span className="font-medium">08:30 - 19:30</span>
                  </div>
                </div>

                <Button variant="white" className="w-full justify-center">Get Appointment</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
