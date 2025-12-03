import { Client } from "@/types/clients";
import { apiClient } from "@/api/axios";

export const clientsService = {
  getClients: async (): Promise<Client[]> => {
    const response = await apiClient.get("/api/our-client/");
    return response.data;
  },
};
