import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getBlogBySlug } from "@/lib/blog-data";
import { BlogGrid } from "@/components/blog/BlogGrid";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pt-12 pb-0 bg-white">
      {/* Article Header */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors w-fit"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs mb-4 block">
            [Blog Details]
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15]">
            {blog.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden h-[400px] md:h-[600px] w-full shadow-lg mb-16">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          {/* Overview Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              {blog.overview}
            </p>
          </div>

          {/* Content Sections */}
          {blog.content.sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              {section.heading && (
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-gray-500 leading-relaxed mb-8 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.subsections?.map((subsection, subIdx) => (
                <div key={subIdx} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {subsection.heading}
                  </h3>
                  {subsection.paragraphs.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-gray-500 leading-relaxed mb-8 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {/* Quote Block - Show after first section if quote exists */}
              {idx === 0 && blog.content.quote && (
                <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border-l-4 border-blue-600 mb-12">
                  <p className="text-xl md:text-2xl font-serif italic text-gray-900 mb-6 leading-relaxed">
                    &quot;{blog.content.quote.text}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={blog.content.quote.avatar}
                      alt={blog.content.quote.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900">
                        {blog.content.quote.author}
                      </div>
                      <div className="text-xs text-gray-500">
                        {blog.content.quote.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Secondary Image - Show after second section if exists */}
              {idx === 1 && blog.content.secondaryImage && (
                <div className="rounded-3xl overflow-hidden h-[400px] w-full shadow-md mb-12">
                  <Image
                    src={blog.content.secondaryImage}
                    alt="Team Strategy"
                    width={1200}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <BlogGrid />
      </div>
    </div>
  );
}
