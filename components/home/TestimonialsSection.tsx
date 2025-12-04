import { SectionHeading } from '@/components/ui/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "From the first meeting, they were invested in our success. Their structured process and sharp strategy helped us turn a struggling department into a high-performing unit.",
    author: "Arlene McCoy",
    role: "Janitor",
    avatar: "https://picsum.photos/id/32/100/100"
  },
  {
    quote: "They provided clarity where we had confusion, and structure where we had chaos. It's been one of the best investments we've made as a company.",
    author: "Jane Cooper",
    role: "Mechanic",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    quote: "One of the things that impressed us most was their transparency and communication. We were kept in the loop at every stage of the project.",
    author: "Annette Black",
    role: "Construction worker",
    avatar: "https://picsum.photos/id/65/100/100"
  },
  {
    quote: "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth opportunities. We saw measurable results.",
    author: "Cameron Williamson",
    role: "Stocking associate",
    avatar: "https://picsum.photos/id/91/100/100"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading 
          title="Proven What Our Clients Say"
          italicWord="Say"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100"
            >
              <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-6">
                <Quote size={18} fill="currentColor" />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:mb-8 min-h-[80px] sm:min-h-[100px]">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.author}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
