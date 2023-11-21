/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "media-4.api-sports.io",
      },
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
    ],
  },
};

module.exports = nextConfig;
