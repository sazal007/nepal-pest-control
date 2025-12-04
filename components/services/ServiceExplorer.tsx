"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { useGetServices } from "@/hooks/use-services";

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

const truncateText = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max).trimEnd()}...` : text;

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
          viewport={{ once: true, amount: 0.4 }}
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {services.map((service) => {
            const plainDescription = truncateText(
              stripHtml(service.description || ""),
              140
            );

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="block"
              >
                <div className="bg-gray-50 p-10 rounded-3xl hover:bg-white hover:shadow-xl hover:border-primary-100 border border-transparent transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-white text-primary-600 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors overflow-hidden">
                    {service.thumbnail_image && (
                      <Image
                        src={service.thumbnail_image}
                        alt={
                          service.thumbnail_image_alt_description ||
                          service.title
                        }
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain transition-all duration-300 group-hover:invert group-hover:brightness-0"
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                    {plainDescription}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    Read More
                    <div className="w-5 h-5 rounded-full bg-primary-600 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                      <ArrowUpRight size={10} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
