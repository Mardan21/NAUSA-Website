import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.placeholder',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
