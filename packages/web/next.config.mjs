// import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to enable middleware for authentication
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

  // Production optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
  },

  // Externalize server-only packages
  serverExternalPackages: ['winston', 'winston-daily-rotate-file'],

  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Prevent winston from being bundled on the client
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        winston: false,
        'winston-daily-rotate-file': false,
      }
    }
    // Optimize bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          priority: 20,
        },
        supabase: {
          name: 'supabase',
          test: /[\\/]node_modules[\\/]@supabase[\\/]/,
          chunks: 'all',
          priority: 15,
        },
        editor: {
          name: 'editor',
          test: /[\\/]node_modules[\\/](@udecode|slate|@radix-ui)[\\/]/,
          chunks: 'all',
          priority: 10,
        },
      },
    }

    // Tree shaking for production
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
    }

    return config
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

// Bundle analyzer integration
let finalConfig = nextConfig

// Apply bundle analyzer if enabled
if (process.env.ANALYZE === 'true') {
  const { default: withBundleAnalyzer } = await import('@next/bundle-analyzer')
  const analyzer = withBundleAnalyzer({
    enabled: true,
  })
  finalConfig = analyzer(nextConfig)
}

export default finalConfig
