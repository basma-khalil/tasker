import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    // For SVGs as React components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      exclude: /public/, // Exclude the public folder to let Next.js handle it
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
