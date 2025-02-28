/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@repo/shared-stuff'],
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
