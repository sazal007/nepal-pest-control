import { CreateNewsletterRequest, Newsletter } from "@/types/newsletter";
import { apiClient } from "@/api/axios";

export const createNewsletter = async (
  newsletterData: CreateNewsletterRequest
): Promise<Newsletter> => {
  const response = await apiClient.post("/api/newsletter/", newsletterData);
  return response.data;
};
