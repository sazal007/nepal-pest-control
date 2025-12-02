import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const blogs = [
  {
    date: "September 3, 2025",
    title: "The Growth Plan: A Playbook Toolkit for Future Success and Scalability.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
  },
  {
    date: "September 15, 2025",
    title: "The Strategic Edge: Insights and a Hub for Pro Consultation.",
    linkText: "Read More",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80"
  },
  {
    date: "September 3, 2025",
    title: "The Insight Engine: Interactive Brief Reports and Analysis.",
    image: "https://images.unsplash.com/photo-1553877606-3c1395fa9133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    date: "September 3, 2025",
    title: "Sharp insights for forward-thinking businesses.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    date: "September 3, 2025",
    title: "Fresh takes on strategy, leadership, and change your future.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    date: "September 3, 2025",
    title: "Guidance, trends, and direction for your modern businesses.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    date: "September 3, 2025",
    title: "Concise, actionable insights for today's business decision-makers.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
  },
  {
    date: "September 3, 2025",
    title: "Fresh ideas to scale, lead, and continuously innovate with confidence.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    date: "September 3, 2025",
    title: "A sharp strategic view on long-term business growth opportunities.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  }
];

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
          {blogs.map((blog, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full">
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
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
