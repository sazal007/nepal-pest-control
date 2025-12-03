import { ServiceHero } from "@/components/services/ServiceHero";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { FAQSection } from "@/components/shared/FAQSection";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <StatsStrip />
      <ServiceExplorer />
      <FAQSection />
    </>
  );
}
