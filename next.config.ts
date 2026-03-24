import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "nepal-pest-control.nepdora.baliyoventures.com",
      },
      {
        protocol: "https",
        hostname: "sgp1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "himalayancrm.sgp1.cdn.digitaloceanspaces.com",
      },
    ],
  },
  // ISR is configured per-page using the `revalidate` export
  // See individual page files for revalidation times (default: 3600 seconds / 1 hour)
};

export default nextConfig;
