"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Loader } from "@/components/ui/loader";
import { useGetBlogs } from "@/hooks/use-blogs";
import type { BlogPost } from "@/types/blog";

export const BlogSection = () => {
  const { data, isLoading, error } = useGetBlogs();
  const blogs = (data?.results ?? []) as BlogPost[];
  const featuredBlogs = blogs.slice(0, 4);

  return (
    <section id="blog" className="py-16 sm:py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="Strategic Insights That Drive Business Success"
            italicWord="Success"
            className="mb-0 max-w-xl"
          />
          <Link href="/blog">
            <Button className="w-full md:w-auto justify-center">
              View More Blogs
            </Button>
          </Link>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">
            Failed to load blogs.
          </div>
        ) : featuredBlogs.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No blogs available yet.
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group cursor-pointer"
              >
                <motion.div
                  className="rounded-2xl overflow-hidden mb-4 sm:mb-6 h-44 sm:h-48"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <img
                    src={
                      blog.thumbnail_image ??
                      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    }
                    alt={blog.thumbnail_image_alt_description ?? blog.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <h3 className="font-bold text-lg mb-3 leading-snug transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                  {blog.meta_description ??
                    "Read the full article for more insights."}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all">
                  Read More{" "}
                  <div className="p-1 bg-primary-600 rounded-full text-white">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
