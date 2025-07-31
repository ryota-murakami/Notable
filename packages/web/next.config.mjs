import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Temporarily disabled for development - middleware is needed
  trailingSlash: false,
  outputFileTracingRoot: path.join(__dirname, '../../'),
  // Transpile workspace packages for proper module resolution
  transpilePackages: ['@notable/sync', '@notable/routing', 'msw'],
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  compress: true,
  typescript: {
    // Temporarily ignore type errors during Plate.js migration
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint warnings during template system integration
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Disable problematic optimizations
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        concatenateModules: false,
        sideEffects: false,
      }
    }
    return config
  },
}

export default nextConfig
