"use client";

import Link from "next/link";
import Image from "next/image";
import { useGetBlogBySlug } from "@/hooks/use-blogs";
import { Loader } from "@/components/ui/loader";
import { sanitizeContent } from "@/lib/html-sanitizer";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";

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
        <nav className="mb-6">
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium text-center line-clamp-1">
              {blog.title}
            </li>
          </ol>
        </nav>

        <div className="text-center max-w-4xl mx-auto mb-8">
          {/* <span className="text-blue-600 font-bold tracking-wide uppercase text-xs mb-4 block">
            [Blog Details]
          </span> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15] mb-4">
            {blog.title}
          </h1>
          <div className="text-sm text-gray-500">
            {new Date(blog.created_at).toLocaleDateString()}
          </div>
          <div className="flex items-center justify-center gap-1 mt-4">
            <span className="text-gray-500 text-sm">Share this blog:</span>
            <FacebookShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              quote={blog.title}
              hashtag={"#nepalpestcontrol"}
            >
              <FacebookIcon size={27} round />
            </FacebookShareButton>
            <TwitterShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              title={blog.title}
              hashtags={["nepalpestcontrol"]}
            >
              <TwitterIcon size={27} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              title={blog.title}
              summary={blog.title}
            >
              <LinkedinIcon size={27} round />
            </LinkedinShareButton>
            <WhatsappShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              title={blog.title}
            >
              <WhatsappIcon size={27} round />
            </WhatsappShareButton>
            <RedditShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              title={blog.title}
            >
              <RedditIcon size={27} round />
            </RedditShareButton>
            <TelegramShareButton
              url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${blog.slug}`}
              title={blog.title}
            >
              <TelegramIcon size={27} round />
            </TelegramShareButton>
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

        <div className="max-w-4xl mx-auto space-y-6 prose prose-lg prose-gray">
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeContent(blog.content) }}
          />
        </div>
      </div>
    </div>
  );
}
