import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pin } from "lucide-react";

export const StrategicPartnerSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeading
            // tag="[Our Process]"
            title="Infin Your Strategic Growth Partner"
            italicWord="Partner"
            align="center"
            className="mb-0"
          />
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[600px] w-full group">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
            alt="Infin Team"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white p-8 rounded-2xl shadow-xl max-w-xs md:max-w-sm">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
              <Pin size={18} fill="currentColor" />
            </div>
            <ul className="space-y-3">
              {[
                "Strategic Planning",
                "Operational Excellence",
                "Market Expansion",
                "Risk Management",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-gray-800 font-medium text-sm flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
