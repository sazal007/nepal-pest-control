import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export const BlogGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionHeading 
          tag="[Blogs]"
          title="Popular Blogs"
          italicWord="Blogs"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
          {blogPosts.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-sm">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="text-sm text-gray-500 mb-3">{blog.date}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6 leading-snug group-hover:text-blue-700 transition-colors flex-grow">
                {blog.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-3 transition-all mt-auto">
                Read More 
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
};
