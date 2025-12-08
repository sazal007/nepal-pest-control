import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ScheduleConsultation } from "@/components/home/ScheduleConsultation";
import { FAQSection } from "@/components/shared/FAQSection";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <StatsStrip />
      <ServicesSection />
      <ProcessSection />
      <PartnershipSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ScheduleConsultation />
      <FAQSection />
      <BlogSection />
    </>
  );
}
