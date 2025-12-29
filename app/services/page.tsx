import { ServiceHero } from "@/components/services/ServiceHero";
import { StatsStrip } from "@/components/shared/StatsStrip";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ServicesServer } from "@/services/services.service.server";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive pest control services from Nepal Pest Control. From pest control to pest control best practices, we offer expert pest control services tailored to your business needs.",
};

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default async function ServicesPage() {
  const queryClient = new QueryClient();

  // Prefetch the services data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["services"],
    queryFn: () => ServicesServer.getServices(),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceHero />
      <ServiceExplorer />
      <StatsStrip />
    </HydrationBoundary>
  );
}
