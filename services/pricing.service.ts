import apiClient from "@/api/axios";
import { Pricing } from "@/types/pricing";

export const pricingService = {
  getPricingPlans: async (): Promise<Pricing[]> => {
    const response = await apiClient.get("/api/our-pricing/");
    return response.data as Pricing[];
  },
};
