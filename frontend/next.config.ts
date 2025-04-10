import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https'
      }
      ,{
      hostname: 'api.qrserver.com',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
