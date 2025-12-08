"use client";
import Image from "next/image";
import { useGetClients } from "@/hooks/use-clients";
import { Loader } from "../ui/loader";

export const LogoStrip = () => {
  const { data: clients, isLoading, error } = useGetClients();

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <>
      <style>{`
        .marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marqueeScroll linear infinite;
        }

        .marquee-inner {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .marquee-container:hover .marquee-wrapper {
          animation-play-state: paused;
        }

        .logo-item:hover {
          opacity: 1 !important;
          transform: scale(1.05);
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
      `}</style>
      <section className="py-10 sm:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Trusted by
          </p>
          <div className="marquee-container overflow-hidden w-full relative max-w-7xl mx-auto select-none">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
            <div
              className="marquee-wrapper will-change-transform"
              style={{ animationDuration: "45s" }}
            >
              <div className="marquee-inner">
                {clients.map((client, index) => (
                  <a
                    key={`${client.id}-first-${index}`}
                    href={client.url || "#"}
                    target={client.url ? "_blank" : undefined}
                    rel={client.url ? "noopener noreferrer" : undefined}
                    className="logo-item mx-4 md:mx-6 lg:mx-8 opacity-80 transition-all duration-300 shrink-0 flex items-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={110}
                      height={60}
                      className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                      draggable={false}
                    />
                  </a>
                ))}
              </div>
              <div className="marquee-inner">
                {clients.map((client, index) => (
                  <a
                    key={`${client.id}-second-${index}`}
                    href={client.url || "#"}
                    target={client.url ? "_blank" : undefined}
                    rel={client.url ? "noopener noreferrer" : undefined}
                    className="logo-item mx-4 md:mx-6 lg:mx-8 opacity-80 transition-all duration-300 shrink-0 flex items-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={110}
                      height={60}
                      className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                      draggable={false}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
};
