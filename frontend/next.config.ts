import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
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
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);