import { Hero } from "@/components/about/Hero";
import { LogoStrip } from "@/components/shared/LogoStrip";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { StrategicPartnerSection } from "@/components/about/StrategicPartnerSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PrinciplesSection } from "@/components/about/PrinciplesSection";
import { VerticalProcessSection } from "@/components/about/VerticalProcessSection";
import { TeamGridSection } from "@/components/about/TeamGridSection";

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
