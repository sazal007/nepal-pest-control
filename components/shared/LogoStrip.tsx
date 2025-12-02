export const LogoStrip = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8">Trusted by nearly 5000+ paying customers</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using placeholder text/icons for logos as generic svg placeholders */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><div className="w-6 h-6 bg-gray-800 rounded-full"></div>Logoipsum</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><div className="w-6 h-6 bg-gray-800 rounded-full"></div>BrandName</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><div className="w-6 h-6 bg-gray-800 rounded-full"></div>Company</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><div className="w-6 h-6 bg-gray-800 rounded-full"></div>Business</div>
          <div className="flex items-center gap-2 font-bold text-xl text-gray-800"><div className="w-6 h-6 bg-gray-800 rounded-full"></div>Enterprise</div>
        </div>
      </div>
    </section>
  );
};
