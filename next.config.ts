import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [{
      hostname: 'ap-south-1.graphassets.com',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
