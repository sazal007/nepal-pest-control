import { Button } from "@/components/ui/Button";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:h-screen flex items-center overflow-hidden bg-gray-900">
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <div className="max-w-3xl mt-16 sm:mt-10">
          <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[1.05] mb-4 sm:mb-6">
            Navigate Business <br />
            with{" "}
            <span className="font-serif italic font-normal">Confidence</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
            Expert strategic consulting to drive sustainable growth, operational
            innovation, and lasting business transformation across industries
            and markets.
          </p>
          <Button
            variant="white"
            className="text-primary-900 font-bold  xs:w-auto justify-center"
          >
            Book a Free Call
          </Button>
        </div>
      </div>
    </section>
  );
};
