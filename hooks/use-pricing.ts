import { pricingService } from "@/services/pricing.service";
import type { Pricing } from "@/types/pricing";
import { useQuery } from "@tanstack/react-query";

export const usePricing = () => {
  return useQuery<Pricing[]>({
    queryKey: ["pricing"],
    queryFn: () => pricingService.getPricingPlans(),
  });
};
