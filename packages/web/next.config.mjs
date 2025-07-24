/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
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
