/**
 * Server-side testimonial service with ISR support
 */
import { serverGet } from "@/lib/server-fetch";
import { Testimonial } from "@/types/testimonials";

const REVALIDATE_TIME = 3600; // 1 hour

export const testimonialServiceServer = {
  getTestimonials: async (): Promise<Testimonial[]> => {
    return serverGet<Testimonial[]>("/api/testimonial/", REVALIDATE_TIME);
  },
};

