import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
 
  experimental: {
    optimisticClientCache: true,
    optimizeCss: true,
    optimizePackageImports: [
      "react-datepicker",
      "axios",
      "swiper/react",
    ],
  },
};

export default nextConfig;
