"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import { useGetTeam } from "@/hooks/use-team";
import type { TEAM } from "@/types/team-member";
import { useRouter } from "next/navigation";

// const team = [
//   {
//     name: "Yagya Raj Bogati",
//     role: "FOUNDER & CEO",
//     image: "/team-members/Yagya-Raj-Bogati.png",
//   },
//   {
//     name: "Aastha Sapkota",
//     role: "CO-FOUNDER & CFO",
//     image: "/team-members/Aastha-Sapkota.png",
//   },
//   {
//     name: "Nischal Adhikari",
//     role: "CHIEF OPERATING OFFICER",
//     image: "/team-members/Nischal-Adhikari.png",
//   },
//   {
//     name: "Umesh Kattel",
//     role: "ANALYTICS & REPORTING MANAGER",
//     image: "/team-members/Umesh-Kattel.png",
//   },
// ];

type TeamMember = {
  id?: string;
  name: string;
  role: string;
  image: string;
};

export const TeamGridSection = () => {
  const { data: teamData } = useGetTeam();
  const router = useRouter();
  // Use API data if available and has items, otherwise fallback to static data
  const members: TeamMember[] =
    teamData && teamData.length > 0
      ? teamData.map((member: TEAM) => ({
          id: member.id?.toString(),
          name: member.name,
          role: member.role,
          image: member.photo,
        }))
      : [];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Our Team]"
            title="Meet the team behind Nepal Pest Control"
            italicWord="Nepal Pest Control"
            align="center"
            className="mb-16"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {members.map((member, idx) => (
            <motion.div
              key={member.id ?? idx}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() =>
                member.id && router.push(`/team-member/${member.id}`)
              }
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between text-white">
                  <div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-xs text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
