import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ServicesServer } from "@/services/services.service.server";
import ServiceDetailView from "./service-detail-view";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const service = await ServicesServer.getService(slug);

    const title = service.meta_title || service.title;
    const description =
      service.meta_description ||
      `Learn more about ${service.title} at Nepal Pest Control. Expert pest control professionals providing professional pest control services.`;
    const image = service.thumbnail_image || "/nepalpestcontrol_logo.png";
    const url = `https://www.nepalpestcontrol.com/services/${slug}`;

    return {
      title,
      description,
      openGraph: {
        title: `${title} - Nepal Pest Control`,
        description,
        url,
        siteName: "Nepal Pest Control",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: service.thumbnail_image_alt_description || service.title,
          },
        ],
        locale: "en_US",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} - Nepal Pest Control`,
        description,
        images: [image],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch {
    return {
      title: "Service - Nepal Pest Control",
      description: "Expert pest control services from Nepal Pest Control",
    };
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // Prefetch the service data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["service", slug],
    queryFn: () => ServicesServer.getService(slug),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceDetailView slug={slug} />
    </HydrationBoundary>
  );
}
