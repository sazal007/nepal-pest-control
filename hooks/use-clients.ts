import { clientsService } from "@/services/clients.service";
import { Client } from "@/types/clients";
import { useQuery } from "@tanstack/react-query";

export const useGetClients = () => {
  return useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: () => clientsService.getClients(),
  });
};
