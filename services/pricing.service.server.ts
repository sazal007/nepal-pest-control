/**
 * Server-side pricing service with ISR support
 */
import { serverGet } from "@/lib/server-fetch";
import { Pricing } from "@/types/pricing";

const REVALIDATE_TIME = 3600; // 1 hour

export const pricingServiceServer = {
  getPricingPlans: async (): Promise<Pricing[]> => {
    return serverGet<Pricing[]>("/api/our-pricing/", REVALIDATE_TIME);
  },
};

