import { ServiceHero } from "@/components/services/ServiceHero";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive financial services from XInfin Consulting. From tax planning and auditing to virtual CFO services and process automation, we offer expert Chartered Accountant services tailored to your business needs.",
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
