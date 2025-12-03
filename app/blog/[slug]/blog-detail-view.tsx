"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useGetBlogBySlug } from "@/hooks/use-blogs";
import { Loader } from "@/components/ui/loader";

interface BlogDetailViewProps {
  slug: string;
}

export default function BlogDetailView({ slug }: BlogDetailViewProps) {
  const { data: blog, isLoading, error } = useGetBlogBySlug(slug);
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="pt-40 pb-0 bg-white">
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors w-fit"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="text-center max-w-4xl mx-auto mb-8">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs mb-4 block">
            [Blog Details]
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15] mb-4">
            {blog.title}
          </h1>
          <div className="text-sm text-gray-500">
            {new Date(blog.created_at).toLocaleDateString()}
          </div>
        </div>

        {blog.thumbnail_image && (
          <div className="rounded-3xl overflow-hidden h-[300px] md:h-[450px] w-full shadow-lg mb-10">
            <Image
              src={blog.thumbnail_image}
              alt={blog.thumbnail_image_alt_description ?? blog.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
}
