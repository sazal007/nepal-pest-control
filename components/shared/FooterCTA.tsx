import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export const FooterCTA = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-blue-700 rounded-3xl overflow-hidden flex flex-col lg:flex-row relative">
          
          <div className="p-12 lg:p-20 lg:w-1/2 text-white relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">[CTA]</div>
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Collaborate with us <br/> to enhance your <br/> <span className="font-serif italic font-normal">offerings</span>
            </h2>
            
            <Button variant="white" className="mb-10 text-blue-900">Collaborate Now</Button>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={16} /> Work with businesses and professionals worldwide
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={16} /> One-time projects or ongoing partnerships
              </div>
              <div className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={16} /> Better outcomes for our clients and businesses
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img 
              src="https://picsum.photos/id/1011/800/800" 
              alt="Working together" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
