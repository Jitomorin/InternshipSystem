/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dummyimage.com'], // Add the hostname(s) you want to allow
  },
}

module.exports = nextConfig
