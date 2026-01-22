/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow placeholder images from common sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // For local development with placeholder images
    unoptimized: true,
  },
}

module.exports = nextConfig
