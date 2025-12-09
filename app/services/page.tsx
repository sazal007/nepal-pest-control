import { ServiceHero } from "@/components/services/ServiceHero";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Xinfin Consulting",
  description: "Services for Xinfin Consulting",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceExplorer />
      <StatsStrip />
    </>
  );
}
