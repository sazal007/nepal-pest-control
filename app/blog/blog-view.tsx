"use client";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { useGetBlogs } from "@/hooks/use-blogs";
import type { BlogPost } from "@/types/blog";
import { Loader } from "@/components/ui/loader";

export default function BlogView() {
  const { data, isLoading, error } = useGetBlogs();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  const blogs = (data?.results ?? []) as BlogPost[];

  return (
    <>
      <BlogHero latestBlog={blogs[0]} />
      <BlogGrid blogs={blogs} />
    </>
  );
}
