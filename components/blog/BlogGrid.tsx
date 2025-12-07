import { motion } from "motion/react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogGridProps {
  blogs: BlogPost[];
}

export const BlogGrid = ({ blogs }: BlogGridProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Blogs]"
            title="Popular Blogs"
            italicWord="Blogs"
            className="mb-12"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-sm">
                <img
                  src={
                    blog.thumbnail_image ??
                    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                  }
                  alt={blog.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="text-sm text-gray-500 mb-3">
                {new Date(blog.created_at).toLocaleDateString()}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 leading-snug group-hover:text-primary-700 transition-colors grow">
                {blog.title}
              </h3>

              <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-3 transition-all mt-auto">
                Read More
                <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
