import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { Services } from "@/services/services.service";
import ServiceDetailView from "./service-detail-view";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const service = await Services.getService(slug);

    const title = service.meta_title || service.title;
    const description =
      service.meta_description ||
      `Learn more about ${service.title} at XInfin Consulting. Expert Chartered Accountants providing professional financial services.`;
    const image = service.thumbnail_image || "/infinconsultants_logo.svg";
    const url = `https://www.infinconsultants.com/services/${slug}`;

    return {
      title,
      description,
      openGraph: {
        title: `${title} - XInfin Consulting`,
        description,
        url,
        siteName: "XInfin Consulting",
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
        title: `${title} - XInfin Consulting`,
        description,
        images: [image],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch {
    return {
      title: "Service - XInfin Consulting",
      description: "Expert financial services from XInfin Consulting",
    };
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // Prefetch the service data
  await queryClient.prefetchQuery({
    queryKey: ["service", slug],
    queryFn: () => Services.getService(slug),
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServiceDetailView slug={slug} />
    </HydrationBoundary>
  );
}
