/** @type {import('next').NextConfig} */

const { withPlaiceholder } = require("@plaiceholder/next")
const withPlugins = require('next-compose-plugins');
const withPWA = require("next-pwa")

const placeHolderConfig = withPlaiceholder()
const pwaConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
})
const nextConfig = {
  experimental: { externalDir: true, images: { allowFutureImage: true } },
  images: {
    domains: [
      "avatars.githubusercontent.com",
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

module.exports = withPlugins(
  [
    pwaConfig,
    placeHolderConfig,
  ], nextConfig
)
