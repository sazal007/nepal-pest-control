import { SectionHeading } from '@/components/ui/SectionHeading';
import { X } from 'lucide-react';

const team = [
  { name: "David Chen", role: "Consultant", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jacob Jones", role: "Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jenny Wilson", role: "Project Coordinator", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Theresa Webb", role: "Operations Analyst", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Ronald Richards", role: "Client Success Manager", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Cody Fisher", role: "Financial Strategy Advisor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

export const TeamGridSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          tag="[Team Member]"
          title="Meet the Beautiful team behind Optimo"
          italicWord="Optimo"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between text-white">
                  <div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-xs text-gray-300">{member.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <X size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
