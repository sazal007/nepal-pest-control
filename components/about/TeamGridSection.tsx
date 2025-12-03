import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const team = [
  {
    name: "Yagya Raj Bogati",
    role: "FOUNDER & CEO",
    image: "/team-members/Yagya-Raj-Bogati.png",
  },
  {
    name: "Aastha Sapkota",
    role: "CO-FOUNDER & CFO",
    image: "/team-members/Aastha-Sapkota.png",
  },
  {
    name: "Nischal Adhikari",
    role: "CHIEF OPERATING OFFICER",
    image: "/team-members/Nischal-Adhikari.png",
  },
  {
    name: "Umesh Kattel",
    role: "ANALYTICS & REPORTING MANAGER",
    image: "/team-members/Umesh-Kattel.png",
  },
];

export const TeamGridSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          tag="[Our Team]"
          title="Meet the team behind Infin"
          italicWord="Infin"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between text-white">
                  <div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-xs text-gray-300">{member.role}</p>
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
