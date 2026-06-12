import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
    ],
    
  },

  experimental: {
    scrollRestoration: true,

    optimisticClientCache: true,
    optimizeCss: true,
    optimizePackageImports: ["react-datepicker", "axios", "swiper/react"],
  },
};

export default nextConfig;
