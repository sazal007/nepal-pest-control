export const Hero = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] lg:h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Office Meeting"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-white h-full flex flex-col justify-center">
        <div className="max-w-4xl mt-6 sm:mt-10">
          {/* <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase">
            [About Us]
          </span> */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-4 sm:mb-6 tracking-tight break-words">
            Intelligence That <br />
            Inspires{" "}
            <span className="font-serif italic font-normal text-primary-400">
              Growth
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
