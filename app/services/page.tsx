import { ServiceHero } from "@/components/services/ServiceHero";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceExplorer />
      <StatsStrip />
    </>
  );
}
