import apiClient from "@/api/axios";
import { PaginatedServicesResponse, ServicesPost } from "@/types/services";

export const Services = {
  getServices: async (): Promise<PaginatedServicesResponse> => {
    const response = await apiClient.get("/api/service/");
    return response.data as PaginatedServicesResponse;
  },
  getService: async (slug: string): Promise<ServicesPost> => {
    const response = await apiClient.get(`/api/service/${slug}/`);
    return response.data as ServicesPost;
  },
};
