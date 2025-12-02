import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';

const articles = [
  {
    title: "The Growth Plan: A Playbook Toolkit for Future Success and Scalability.",
    desc: "We help you identify growth opportunities, refine your strategy...",
    image: "https://picsum.photos/id/1/600/400"
  },
  {
    title: "The Strategic Edge: Insights and a Hub for Pro Consultation.",
    desc: "The Growth Plan is your strategic toolkit designed to help future-proof your...",
    image: "https://picsum.photos/id/1078/600/400"
  },
  {
    title: "The Insight Engine: Interactive Brief Reports and Analysis.",
    desc: "Get concise, actionable takeaways in moments—built to help you move...",
    image: "https://picsum.photos/id/5/600/400"
  },
  {
    title: "Sharp insights for forward-thinking businesses.",
    desc: "Each edition breaks down complex ideas into actionable insights, helping...",
    image: "https://picsum.photos/id/20/600/400"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading 
            title="Strategic Insights That Drive Business Success"
            italicWord="Success"
            className="mb-0 max-w-xl"
          />
          <Link href="/blog">
            <Button>View More Blogs</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href="/blog" className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-6 h-48">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug group-hover:text-blue-700 transition-colors">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{article.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all">
                Read More <div className="p-1 bg-blue-700 rounded-full text-white"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
