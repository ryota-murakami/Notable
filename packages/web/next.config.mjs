/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Electron
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  reactStrictMode: true,
  compress: true,

  // Bundle optimization - simplified
  webpack: (config, { isServer, webpack }) => {
    // Fix CommonJS module issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        url: false,
        buffer: 'buffer',
        process: 'process/browser',
      }

      // Add essential webpack plugins for module resolution
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      )
    }

    return config
  },
}

export default nextConfig
