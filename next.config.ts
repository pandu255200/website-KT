/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  experimental: {
    //largePageDataBytes: 128 * 1000, // 128KB by default
    largePageDataBytes: 128 * 100000,
  },
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fixes image loading issues
  },
};
 
module.exports = nextConfig;
