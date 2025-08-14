import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https' as const,
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/nausa/**',
      },
    ],
  },
};

export default nextConfig;
