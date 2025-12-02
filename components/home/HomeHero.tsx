import { Button } from '@/components/ui/Button';

export const HomeHero = () => {
  return (
    <section className="relative min-h-[600px] lg:h-[80vh] flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Business Meeting" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <div className="max-w-3xl mt-10">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            Delivering innovative solutions <br />
            for clients to achieve their <span className="font-serif italic font-normal">financial goals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            We believe in the power of collaboration and partnerships to provide the best possible service to our clients. We are always looking for opportunities to work with other businesses and professionals to enhance our offerings and expand our reach.
          </p>
          <Button variant="white" className="text-blue-900 font-bold">Learn more about us</Button>
        </div>
      </div>
    </section>
  );
};
