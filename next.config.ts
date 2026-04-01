import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roofez.net",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
