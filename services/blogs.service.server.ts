/**
 * Server-side blog service with ISR support
 * Use this in Server Components and Server Actions
 */
import { serverGet } from "@/lib/server-fetch";
import { BlogPost, PaginatedBlogResponse } from "@/types/blog";

// ISR revalidation times (in seconds)
const REVALIDATE_TIMES = {
  BLOG_LIST: 3600, // 1 hour
  BLOG_DETAIL: 3600, // 1 hour
} as const;

export const blogsServiceServer = {
  /**
   * Get all blogs with ISR (1 hour revalidation)
   */
  getBlogs: async (): Promise<PaginatedBlogResponse> => {
    return serverGet<PaginatedBlogResponse>(
      "/api/blogs/",
      REVALIDATE_TIMES.BLOG_LIST
    );
  },

  /**
   * Get blog by slug with ISR (1 hour revalidation)
   */
  getBlogBySlug: async (slug: string): Promise<BlogPost> => {
    return serverGet<BlogPost>(
      `/api/blogs/${slug}/`,
      REVALIDATE_TIMES.BLOG_DETAIL
    );
  },
};
