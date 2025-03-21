/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Fixes image loading issues
  },
};

module.exports = nextConfig;
