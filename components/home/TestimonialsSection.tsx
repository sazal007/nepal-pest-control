"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { SectionHeading } from "../ui/SectionHeading";

const testimonials = [
  {
    author: {
      name: "Arlene McCoy",
      handle: "CEO, TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "From the first meeting, they were invested in our success. Their structured process and sharp strategy helped us turn a struggling department into a high-performing unit.",
  },
  {
    author: {
      name: "Jane Cooper",
      handle: "Director, InnovateLabs",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "They provided clarity where we had confusion, and structure where we had chaos. It's been one of the best investments we've made as a company.",
  },
  {
    author: {
      name: "Annette Black",
      handle: "VP Operations, GrowthCo",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "One of the things that impressed us most was their transparency and communication. We were kept in the loop at every stage of the project.",
  },
  {
    author: {
      name: "Cameron Williamson",
      handle: "Founder, ScaleUp",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Their strategic insight and hands-on approach helped us streamline operations and unlock new growth opportunities. We saw measurable results.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="reviews"
      className={cn(
        "bg-gray-50/50 text-foreground",
        "py-12 sm:py-24 md:py-32 px-0"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionHeading
          title="Proven What Our Clients Say"
          italicWord="Say"
          align="center"
          className="mb-16"
        />
      </motion.div>
      <motion.div
        className="mx-auto flex max-w-7xl w-full flex-col items-center justify-center overflow-hidden px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] gap-[(--gap)] flex-row [--duration:45s]">
            <div className="flex shrink-0 justify-around gap-[(--gap)] animate-[marquee_var(--duration)_linear_infinite] flex-row group-hover:[animation-play-state:paused]">
              {/* First set */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`set1-${i}`} {...testimonial} />
              ))}
              {/* Duplicate set for seamless loop */}
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={`set2-${i}`} {...testimonial} />
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-background sm:block" />
        </div>
      </motion.div>
    </section>
  );
};
