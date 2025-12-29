"use client";
import React from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { useRouter } from "next/navigation";

interface BlogHeroProps {
  latestBlog?: BlogPost | null;
  onBlogClick?: (blog: BlogPost) => void;
}

export const BlogHero: React.FC<BlogHeroProps> = ({
  latestBlog,
  onBlogClick,
}) => {
  const router = useRouter();

  if (!latestBlog) return null;

  const image =
    latestBlog.thumbnail_image ??
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80";

  const authorName =
    latestBlog.author &&
    (`${latestBlog.author.first_name} ${latestBlog.author.last_name}`.trim() ||
      latestBlog.author.username);

  const createdDate = new Date(latestBlog.created_at).toLocaleDateString();

  return (
    <section className="pt-40 pb-12 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Blog]"
            title="The Nepal Pest Control Growth Insights Blog"
            italicWord="Blog"
            align="center"
            className="mb-0"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onClick={() => {
            if (onBlogClick) onBlogClick(latestBlog);
            router.push(`/blog/${latestBlog.slug}`);
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[350px] lg:h-auto">
              <img
                src={image}
                alt={
                  latestBlog.thumbnail_image_alt_description ?? latestBlog.title
                }
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {latestBlog.title}
              </h2>
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-sm">
                      {authorName ?? "Nepal Pest Control Team"}
                    </div>
                    <div className="text-xs text-gray-500">{createdDate}</div>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary-600 transition-colors group">
                  Read More
                  <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
