"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGetServices } from "@/hooks/use-services";

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

export const ServiceExplorer = () => {
  const { data: servicesData } = useGetServices();
  const services = servicesData?.results ?? [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: "-100px 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[Core Services]"
            title="Explore Services"
            italicWord="Services"
            className="mb-0"
          />
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const plainDescription = stripHtml(service.description || "");

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.08,
                  }}
                >
                  {service.thumbnail_image && (
                    <img
                      src={service.thumbnail_image}
                      alt={
                        service.thumbnail_image_alt_description || service.title
                      }
                      className="w-full h-48 object-cover rounded-t-xl mb-6"
                    />
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-2 leading-relaxed text-sm line-clamp-3">
                    {plainDescription}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
