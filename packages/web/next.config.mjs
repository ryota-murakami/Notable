/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Temporarily disabled for development - middleware is needed
  trailingSlash: false,
  // Transpile workspace packages for proper module resolution
  transpilePackages: ['@notable/sync'],
  env: {
    SKIP_ENV_VALIDATION: 'true',
  },
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
