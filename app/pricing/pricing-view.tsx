"use client";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { Loader } from "@/components/ui/loader";
import { usePricing } from "@/hooks/use-pricing";

export default function PricingView() {
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
      <PricingPlans plans={sortedPricing} />
      <PricingComparison />
    </>
  );
}
