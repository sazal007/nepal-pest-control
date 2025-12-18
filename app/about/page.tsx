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
    "Xinfin is a professional accounting, compliance and business setup company that provides exceptional financial services. We are a leading financial consulting firm that offers a wide range of services to businesses of all sizes.",
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
