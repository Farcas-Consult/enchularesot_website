import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "enchula-resort-4376242942.s3.eu-west-1.amazonaws.com",
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
