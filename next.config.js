/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = {
  experimental: { externalDir: true, images: { allowFutureImage: true } },
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "via.placeholder.com",
      "photos.petfinder.com",
      "dl5zpyw5k3jeb.cloudfront.net",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlaiceholder(nextConfig)
