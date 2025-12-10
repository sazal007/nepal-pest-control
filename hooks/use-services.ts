import { useQuery } from "@tanstack/react-query";
import { PaginatedServicesResponse, ServicesPost } from "@/types/services";
import { Services } from "@/services/services.service";

export const useGetServices = () => {
  return useQuery<PaginatedServicesResponse>({
    queryKey: ["services"],
    queryFn: Services.getServices,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useGetServiceBySlug = (slug: string) => {
  return useQuery<ServicesPost>({
    queryKey: ["service", slug],
    queryFn: () => Services.getService(slug),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
