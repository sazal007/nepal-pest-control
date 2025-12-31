"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Loader } from "@/components/ui/loader";
import { useGetServiceBySlug, useGetServices } from "@/hooks/use-services";
import { sanitizeContent } from "@/lib/html-sanitizer";
import { AboutCleaning } from "@/components/services/AboutCleaning";
import { AboutPestControl } from "@/components/services/AboutPestControl";

export default function ServiceDetailView({ slug }: { slug: string }) {
  const { data: service, isLoading, error } = useGetServiceBySlug(slug);
  const { data: servicesData } = useGetServices();

  // Get 4 random services excluding the current one
  const randomServices = useMemo(() => {
    if (!servicesData?.results || !service) return [];

    const otherServices = servicesData.results.filter(
      (s) => s.slug !== service.slug
    );

    // Create a deterministic shuffle based on service IDs and current slug
    // This ensures stable results across re-renders
    const seed = service.id;
    const shuffled = [...otherServices].sort((a, b) => {
      const hashA = (a.id * seed) % 1000;
      const hashB = (b.id * seed) % 1000;
      return hashA - hashB;
    });

    return shuffled.slice(0, 4);
  }, [servicesData, service]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Failed to load service details.
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Service not found.
      </div>
    );
  }


  return (
    <div className=" pb-0 bg-white">
      {/* Breadcrumb Navigation */}
      {/* <div className="container mx-auto px-4 md:px-8 mb-6">
        <nav>
          <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium text-center line-clamp-1">
              {service.title}
            </li>
          </ol>
        </nav>
      </div> */}

      {/* Hero Banner with Overlay */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.thumbnail_image || "/pest-control.png"}
            alt={service.thumbnail_image_alt_description || service.title || ""}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark Overlay at Bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 md:px-8 pb-8 md:pb-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4">
                {service.title}
              </h1>
              {/* {service.meta_description && (
                <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                  {service.meta_description}
                </p>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Specialized About Sections */}
      {slug === "cleaning" && (
        <div className="mb-16">
          <AboutCleaning />
        </div>
      )}
      {slug === "pest-control" && (
        <div className="mb-16">
          <AboutPestControl />
        </div>
      )}

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-8">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <div
                className=" leading-relaxed text-lg prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{
                  __html: sanitizeContent(service.description),
                }}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 sticky top-32 space-y-4">
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Let&apos;s build something great together.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Average
                  response rate 1 hour
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Proven
                  track of results
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Dedicated
                  and honest team
                </div>
              </div>

              <Link href="/appointment">
                <Button className="w-full justify-center">Book a Call</Button>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
              <p className="text-gray-500 text-sm mb-6">
                Check out our other services.
              </p>
              {randomServices.length > 0 ? (
                <div className="space-y-2">
                  {randomServices.map((randomService) => (
                    <Link
                      key={randomService.id}
                      href={`/services/${randomService.slug}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ChevronRight size={10} className="text-gray-600" />{" "}
                      {randomService.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Loading services...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Services */}
      <div className="bg-gray-50">
        <ServiceExplorer />
      </div>
    </div>
  );
}
