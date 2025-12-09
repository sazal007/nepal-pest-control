"use client";

import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ScheduleConsultation } from "@/components/home/ScheduleConsultation";
import { BlogSection } from "@/components/home/BlogSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhoAreWe } from "@/components/home/WhoAreWe";
import { usePricing } from "@/hooks/use-pricing";
import { Loader } from "lucide-react";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { TeamGridSection } from "../about/TeamGridSection";

export default function HomeView() {
  const { data: pricing, isLoading, error } = usePricing();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  if (!pricing) return null;

  const order: Record<string, number> = {
    "Start Up": 0,
    Essential: 1,
    Plus: 2,
  };

  const sortedPricing = [...pricing].sort(
    (a, b) => (order[a.name] ?? 99) - (order[b.name] ?? 99)
  );
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ProcessSection />
      {/* <StatsStrip /> */}
      <WhoAreWe />
      <PricingPlans plans={sortedPricing} />
      {/* <PartnershipSection /> */}
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <TestimonialsSection />
      <TeamGridSection />
      {/* <ScheduleConsultation /> */}
      <BlogSection />
    </>
  );
}
