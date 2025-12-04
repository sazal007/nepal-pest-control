import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export const FooterCTA = () => {
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-primary-700 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col lg:flex-row relative">
          <div className="px-6 py-10 sm:p-10 lg:p-16 xl:p-20 lg:w-1/2 text-white relative z-10">
            {/* <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-80">
              [CTA]
            </div> */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
              Work with Experts to Grow Faster & Run{" "}
              <span className="font-serif italic font-normal">Smarter</span>
            </h2>

            <Button
              variant="white"
              className="mb-6 sm:mb-8 lg:mb-10 text-primary-900  xs:w-auto"
            >
              Get Started
            </Button>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Schedule a Free Consultation
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Discover Custom Solutions
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={16} /> Start Building Your Competitive
                Advantage
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 h-52 sm:h-64 lg:h-auto relative">
            <img
              src="https://picsum.photos/id/1011/800/800"
              alt="Working together"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
