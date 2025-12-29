import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { blogsServiceServer } from "@/services/blogs.service.server";
import BlogDetailView from "./blog-detail-view";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await blogsServiceServer.getBlogBySlug(slug);

    const title = blog.title;
    const description = `Read ${blog.title} on Nepal Pest Control's blog. Expert insights on pest control services, pest control best practices, and industry trends.`;
    const image = blog.thumbnail_image || "/nepalpestcontrol_logo.png";
    const url = `https://www.nepalpestcontrol.com/blog/${slug}`;

    return {
      title,
      description,
      authors: blog.author
        ? [{ name: `${blog.author.first_name} ${blog.author.last_name}` }]
        : undefined,
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
            alt: blog.thumbnail_image_alt_description || blog.title,
          },
        ],
        locale: "en_US",
        type: "article",
        authors: blog.author
          ? [`${blog.author.first_name} ${blog.author.last_name}`]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} - Nepal Pest Control`,
        description,
        images: [image],
        creator: "@nepalpestcontrol",
      },
      alternates: {
        canonical: url,
      },
    };
  } catch {
    return {
      title: "Blog Post - Nepal Pest Control",
      description: "Read expert insights from Nepal Pest Control",
    };
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();

  // Prefetch the blog data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogsServiceServer.getBlogBySlug(slug),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogDetailView slug={slug} />
    </HydrationBoundary>
  );
}
