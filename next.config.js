/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['dummyimage.com'], // Add the hostname(s) you want to allow
  },
}

module.exports = nextConfig
