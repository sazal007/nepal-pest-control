/**
 * Server-side FAQ service with ISR support
 */
import { serverGet } from "@/lib/server-fetch";
import { FAQ } from "@/types/faq";

const REVALIDATE_TIME = 3600; // 1 hour

export const faqServiceServer = {
  getFAQs: async (): Promise<FAQ[]> => {
    return serverGet<FAQ[]>("/api/faq/", REVALIDATE_TIME);
  },
};

