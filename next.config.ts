import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // на Vercel не зупиняти білд через ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // (опціонально) якщо хочеш, щоб TS-помилки не зривали білд продакшена:
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
