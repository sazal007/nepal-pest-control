export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  image: string;
  overview: string;
  content: {
    sections: Array<{
      heading?: string;
      paragraphs: string[];
      subsections?: Array<{
        heading: string;
        paragraphs: string[];
      }>;
    }>;
    quote?: {
      text: string;
      author: string;
      role: string;
      avatar: string;
    };
    secondaryImage?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-strategic-edge-insights-and-hub-for-pro-consultation",
    date: "September 15, 2025",
    title: "The Strategic Edge: Insights and a Hub for Pro Consultation.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80",
    overview: "Welcome to The Strategic Edge, your go-to destination for powerful insights, expert commentary, and forward-thinking strategies tailored for business leaders and decision-makers. Powered by Optimo's deep consulting expertise, this hub is more than just a blog — it's a knowledge platform designed to support your most critical business decisions.",
    content: {
      sections: [
        {
          heading: "What You Can Expect:",
          paragraphs: [
            "Optimo was founded with a clear purpose: to bridge the gap between ambitious business goals and effective execution. It began as a vision shared by a group of seasoned consultants who recognized a recurring challenge across industries—companies were rich in ideas but lacked the strategic direction and operational clarity to turn them into results.",
          ],
        },
        {
          heading: "Expert Articles",
          paragraphs: [
            "Optimo was founded with a clear purpose: to bridge the gap between ambitious business goals and effective execution. It began as a vision shared by a group of seasoned consultants who recognized a recurring challenge across industries—companies were rich in ideas but lacked the strategic.",
          ],
          subsections: [
            {
              heading: "Emerging Trends & Market Shifts",
              paragraphs: [
                "Stay ahead of industry evolution with expert breakdowns of emerging trends, market disruptions, and technological advancements that impact today's business landscape.Optimo was founded with a clear purpose: to bridge the gap between ambitious business goals and effective execution. It began as a vision shared by a group of seasoned consultants who recognized a recurring challenge across industries—companies were rich in ideas but lacked the strategic direction and operational clarity to turn them into results.",
              ],
            },
            {
              heading: "Data-Driven Insights",
              paragraphs: [
                "Get insights backed by research, performance metrics, and real consulting data to support informed and confident decision-making. We partnered with a client struggling with disconnected systems, inefficiencies, and workflow bottlenecks. Through a comprehensive review and hands-on process improvement, we closed critical operational gaps, implemented smarter tools, and streamlined day-to-day functions. The result? A more agile, efficient, and scalable operation—built for long-term success.",
              ],
            },
            {
              heading: "Delivering Tailored, Expert-Driven Solutions to Navigate Your Most Complex Business Challenges",
              paragraphs: [
                "Access downloadable tools, planning frameworks, and action-based checklists used by top consultants to accelerate execution. We help organizations turn ambition into action through forward-thinking strategies and sustainable growth solutions. Our mission is to equip companies with the tools, insights, and strategies to lead with confidence in a rapidly changing world. From digital transformation to strategic growth, we partner with businesses ready to shape what's next.",
              ],
            },
          ],
        },
        {
          heading: "Leadership & Organizational Culture",
          paragraphs: [
            "Optimo was founded with a clear purpose: to bridge the gap between ambitious business goals and effective execution. It began as a vision shared by a group of seasoned consultants who recognized a recurring challenge across industries—companies were rich in ideas but lacked the strategic direction and operational clarity to turn them into results.",
          ],
        },
        {
          heading: "Final Thoughts",
          paragraphs: [
            "At The Strategic Edge, we go beyond ideas — we deliver clarity, direction, and tools you can act on. Whether you're navigating transformation, scaling operations, or simply staying ahead in a fast-moving market, our insights are designed to fuel confident decision-making and long-term success.",
          ],
        },
      ],
      quote: {
        text: "At the heart of every great company lies a commitment to continuous improvement. We don't just grow for the sake of growth — we grow to create value, simplify complexity, and solve real problems for real people. Thanks for being part of the journey.",
        author: "Mr. Figo Nath",
        role: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      },
      secondaryImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    },
  },
  {
    slug: "the-growth-plan-playbook-toolkit",
    date: "September 3, 2025",
    title: "The Growth Plan: A Playbook Toolkit for Future Success and Scalability.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
    overview: "A comprehensive guide to scaling your business with proven strategies and actionable frameworks.",
    content: {
      sections: [
        {
          heading: "Introduction",
          paragraphs: [
            "The Growth Plan is your strategic toolkit designed to help future-proof your business and achieve sustainable scalability.",
          ],
        },
      ],
    },
  },
  {
    slug: "the-insight-engine-interactive-brief-reports",
    date: "September 3, 2025",
    title: "The Insight Engine: Interactive Brief Reports and Analysis.",
    image: "https://images.unsplash.com/photo-1553877606-3c1395fa9133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    overview: "Get concise, actionable takeaways in moments—built to help you move fast and make informed decisions.",
    content: {
      sections: [
        {
          heading: "Overview",
          paragraphs: [
            "The Insight Engine transforms complex data into clear, actionable insights that drive business decisions.",
          ],
        },
      ],
    },
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getRelatedBlogs(currentSlug: string, limit: number = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}

