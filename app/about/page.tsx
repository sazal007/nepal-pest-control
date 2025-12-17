import { Hero } from "@/components/about/Hero";
import { LogoStrip } from "@/components/shared/LogoStrip";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { StrategicPartnerSection } from "@/components/about/StrategicPartnerSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PrinciplesSection } from "@/components/about/PrinciplesSection";
import { VerticalProcessSection } from "@/components/about/VerticalProcessSection";
import { TeamGridSection } from "@/components/about/TeamGridSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about XInfin Consulting - a trusted team of Chartered Accountants dedicated to providing exceptional financial services. Discover our mission, vision, values, and the experienced professionals who make us a leading financial consulting firm.",
};

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default function AboutPage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <PhilosophySection />
      <StrategicPartnerSection />
      <MissionVisionSection />
      <PrinciplesSection />
      <VerticalProcessSection />
      <TeamGridSection />
    </>
  );
}
