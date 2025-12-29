import PricingView from "./pricing-view";
import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { pricingServiceServer } from "@/services/pricing.service.server";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing for Nepal Pest Control - Professional Pest Control Services",
};

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default async function PricingPage() {
  const queryClient = new QueryClient();

  // Prefetch the pricing data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["pricing"],
    queryFn: () => pricingServiceServer.getPricingPlans(),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PricingView />
    </HydrationBoundary>
  );
}
