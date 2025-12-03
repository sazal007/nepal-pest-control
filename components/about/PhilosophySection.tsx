import { Button } from "@/components/ui/Button";
import { Puzzle, TrendingUp, Lightbulb } from "lucide-react";

export const PhilosophySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Row - Spans Full Width */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-4xl">
            {/* <span className="text-blue-600 font-bold tracking-wide uppercase text-xs mb-3 block">[More About Us]</span> */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.1]">
              We Believe In Results With <br /> Smart{" "}
              <span className="font-serif italic font-normal">Consulting.</span>
            </h2>
          </div>
          <div className="flex-shrink-0 mb-1">
            <Button variant="blue" className="px-8 py-3 text-sm rounded-full">
              Get Started
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Text & Cards */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl pr-4">
              <p className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed font-medium">
                At Infin, we believe that real business growth is rooted in
                strategy, insight, and execution. As a results-driven consulting
                firm for you.
              </p>
              <p className="text-sm md:text-base text-gray-500 mb-10 leading-relaxed">
                Our approach blends deep industry insight, extensive experience,
                and strategic thinking to solve complex challenges, innovation,
                and deliver measurable, lasting business value
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: Puzzle,
                    title: "Strategic Planning",
                    desc: "Defining goals and strategies for sustainable",
                  },
                  {
                    icon: TrendingUp,
                    title: "Operational Growth",
                    desc: "Driving efficiency and scalable performance.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Strategic Planning",
                    desc: "Transforming businesses through technology.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start h-full hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                      <item.icon size={18} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex flex-col items-end pl-0 lg:pl-4">
            {/* Image - Constrained width */}
            <div className="relative w-full max-w-[380px] mt-2 lg:mt-0">
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Senior Consultant"
                  className="w-full h-full object-cover"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
