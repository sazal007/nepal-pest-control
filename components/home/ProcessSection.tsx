"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGetServices } from "@/hooks/use-services";

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

export const ProcessSection = () => {
  const { data: servicesData } = useGetServices();

  // Get 6 random services
  const randomServices = useMemo(() => {
    const allServices = servicesData?.results ?? [];
    if (allServices.length === 0) return [];

    // Create a deterministic shuffle based on a seed
    // This ensures stable results across re-renders
    const shuffled = [...allServices].sort((a, b) => {
      const hashA = (a.id * 123) % 1000;
      const hashB = (b.id * 123) % 1000;
      return hashA - hashB;
    });

    return shuffled.slice(0, 6);
  }, [servicesData]);
  return (
    <section id="process" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeading
            tag="[What We Offer]"
            title="Accounting & Finance Services for Your Business"
            italicWord="Business"
            align="center"
            className="mb-4"
          />
        </motion.div>

        {randomServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomServices.map((service, idx) => {
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
                      <div className="relative w-full h-48 mb-6 rounded-t-xl overflow-hidden">
                        <Image
                          src={service.thumbnail_image}
                          alt={
                            service.thumbnail_image_alt_description ||
                            service.title
                          }
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
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
        ) : (
          <div className="text-center text-gray-500 py-10">
            Loading services...
          </div>
        )}
      </div>
    </section>
  );
};
