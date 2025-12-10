import { clientsService } from "@/services/clients.service";
import { Client } from "@/types/clients";
import { useQuery } from "@tanstack/react-query";

export const useGetClients = () => {
  return useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: () => clientsService.getClients(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
