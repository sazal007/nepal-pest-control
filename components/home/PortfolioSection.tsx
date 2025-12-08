"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cases = [
  {
    title: "Quality Services",
    description:
      "Choose us for unparalleled quality services. We pride ourselves on delivering solutions that not only meet but exceed your expectations. Our commitment to excellence ensures that your projects are executed with the highest standards, providing you with the quality results you deserve.",
    image: "https://picsum.photos/id/1033/400/600",
  },
  {
    title: "Dynamic Team",
    description:
      "Opt for our services and gain access to a dynamic team of experts. Our professionals bring a diverse range of skills and experiences to the table. With a forward-thinking approach, our team is dedicated to staying at the forefront of industry trends, guaranteeing you innovative solutions that make a difference.",
    image: "https://picsum.photos/id/101/400/600",
  },
  {
    title: "Competitive Price",
    description:
      "Select us for competitive and economical pricing. We understand the importance of value for money. Our pricing strategy is designed to offer you cost-effective solutions without compromising on the quality of our services. Enjoy affordability without sacrificing excellence.",
    image: "https://picsum.photos/id/1031/400/600",
  },
  {
    title: "Innovation and Technology",
    description:
      "Optimize your business with our commitment to innovation and technology. We embrace the latest advancements to deliver services that are at the forefront of industry standards. Our dedication to leveraging cutting-edge technologies ensures your business benefits from the most innovative solutions available.",
    image: "https://picsum.photos/id/1029/400/600",
  },
];

export const PortfolioSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350; // md:min-w-[350px]
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350; // md:min-w-[350px]
      const gap = 24; // gap-6 = 1.5rem = 24px
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-10 md:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            title="How We Helped Clients Grow Smarter"
            italicWord="Smarter"
            className="mb-0"
          />
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 sm:p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Scroll Container */}
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] md:min-w-[350px] h-[450px] relative rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-semibold text-gray-900 block">
                    {item.title}
                  </span>
                  <p className="text-sm text-gray-600 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-in-out overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
