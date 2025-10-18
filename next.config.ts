// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow remote images used above. Add any other domains you need.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
