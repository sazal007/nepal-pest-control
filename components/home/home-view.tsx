"use client";

import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhoAreWe } from "@/components/home/WhoAreWe";
import { usePricing } from "@/hooks/use-pricing";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { TeamGridSection } from "../about/TeamGridSection";
import { ScheduleConsultation } from "./ScheduleConsultation";
import { FAQSection } from "../shared/FAQSection";

export default function HomeView() {
  const { data: pricing } = usePricing();

  const order: Record<string, number> = {
    "Start Up": 0,
    Essential: 1,
    Plus: 2,
  };

  const sortedPricing = pricing
    ? [...pricing].sort((a, b) => (order[a.name] ?? 99) - (order[b.name] ?? 99))
    : [];

  return (
    <>
      <HomeHero />
      <AboutSection />
      <ProcessSection />
      <WhoAreWe />
      {sortedPricing.length > 0 && <PricingPlans plans={sortedPricing} />}
      <ServicesSection />
      <ScheduleConsultation />
      <TestimonialsSection />
      <TeamGridSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}
