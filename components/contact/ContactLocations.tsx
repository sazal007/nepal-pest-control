import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin } from "lucide-react";

export const ContactLocations = () => {
  return (
    <section className="pt-40 pb-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left Text and Cards */}
          <div className="lg:col-span-5 pt-4">
            <SectionHeading
              tag="[Visit Us]"
              title="Office Location"
              italicWord="Location"
              className="mb-6"
            />
            <p className="text-gray-500 mb-10 leading-relaxed text-sm">
              Our office is conveniently located in the heart of theses cities,
              providing easy access for clients and partners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                  <MapPin size={16} fill="currentColor" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">
                  USA Headquarter
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Los Angeles, CA 90017 <br /> United States
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                  <MapPin size={16} fill="currentColor" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">
                  Europe Headquarter
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Ireland , County Dublin D02 <br /> ABC1
                </p>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-1 h-56 rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dublin"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                Dublin
              </div>
            </div>

            <div className="col-span-1 h-56 rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Los Angeles"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                Los Angeles
              </div>
            </div>

            <div className="col-span-2 h-56 rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Remote"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                Remote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
