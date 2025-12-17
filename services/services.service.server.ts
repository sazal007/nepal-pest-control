/**
 * Server-side services service with ISR support
 * Use this in Server Components and Server Actions
 */
import { serverGet } from "@/lib/server-fetch";
import { PaginatedServicesResponse, ServicesPost } from "@/types/services";

// ISR revalidation times (in seconds)
const REVALIDATE_TIMES = {
  SERVICES_LIST: 3600, // 1 hour
  SERVICE_DETAIL: 3600, // 1 hour
} as const;

export const ServicesServer = {
  /**
   * Get all services with ISR (1 hour revalidation)
   */
  getServices: async (): Promise<PaginatedServicesResponse> => {
    return serverGet<PaginatedServicesResponse>(
      "/api/service/",
      REVALIDATE_TIMES.SERVICES_LIST
    );
  },

  /**
   * Get service by slug with ISR (1 hour revalidation)
   */
  getService: async (slug: string): Promise<ServicesPost> => {
    return serverGet<ServicesPost>(
      `/api/service/${slug}/`,
      REVALIDATE_TIMES.SERVICE_DETAIL
    );
  },
};

