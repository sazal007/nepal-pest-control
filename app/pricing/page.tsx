import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { FAQSection } from "@/components/shared/FAQSection";
import { FooterCTA } from "@/components/shared/FooterCTA";

export default function PricingPage() {
  return (
    <>
      <PricingPlans />
      <PricingComparison />
      <FAQSection />
      <FooterCTA />
    </>
  );
}
