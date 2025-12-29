import BlogView from "./blog-view";
import { Metadata } from "next";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { blogsServiceServer } from "@/services/blogs.service.server";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with the latest insights from Nepal Pest Control. Read our expert articles on pest control services, pest control best practices, and industry trends.",
};

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

export default async function BlogPage() {
  const queryClient = new QueryClient();

  // Prefetch the blogs data with ISR
  await queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: () => blogsServiceServer.getBlogs(),
    staleTime: 3600 * 1000, // 1 hour in milliseconds (matches ISR revalidate)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogView />
    </HydrationBoundary>
  );
}
