import { blogsService } from "@/services/blogs.service";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost, PaginatedBlogResponse } from "@/types/blog";

export const useGetBlogs = () => {
  return useQuery<PaginatedBlogResponse>({
    queryKey: ["blogs"],
    queryFn: blogsService.getBlogs,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useGetBlogBySlug = (slug: string) => {
  return useQuery<BlogPost>({
    queryKey: ["blog", slug],
    queryFn: () => blogsService.getBlogBySlug(slug),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
