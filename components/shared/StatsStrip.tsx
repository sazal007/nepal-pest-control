import { Folder, Sun, Users, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Folder, value: "250+", label: "Over 300+ clients complete high-impact projects.", color: "bg-blue-100 text-blue-600" },
  { icon: Sun, value: "98%", label: "Trusted by hundreds of clients who rate our work highly.", color: "bg-indigo-100 text-indigo-600" },
  { icon: Users, value: "50+", label: "Our ability to adapt and deliver impactful solutions across.", color: "bg-violet-100 text-violet-600" },
  { icon: Lightbulb, value: "20+", label: "Building on years of experience, we provide trusted guidance.", color: "bg-sky-100 text-sky-600" },
];

export const StatsStrip = () => {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
            With a <span className="font-bold text-blue-600">98% client</span> <span className="font-serif italic font-normal">satisfaction</span>, <br />
            our strategies have led to <span className="font-bold text-blue-600">$50M+ in revenue</span>
          </h2>
          <p className="mt-6 text-gray-500 text-sm">Our strategic approach is designed to align with your business goals, helping you scale faster</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-3">{stat.value}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
