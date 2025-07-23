// import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for development testing
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

  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Fix CommonJS module issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    // Fix Supabase build issues by providing global polyfills
    if (isServer) {
      const webpack = config.plugins[0].constructor.webpack
      if (webpack && webpack.DefinePlugin) {
        config.plugins.push(
          new webpack.DefinePlugin({
            self: JSON.stringify('globalThis'),
          })
        )
      }
    }
    // Enhanced code splitting with more granular chunks
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: 5,
        },
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          priority: 25,
        },
        reactQuery: {
          name: 'react-query',
          test: /[\\/]node_modules[\\/]@tanstack[\\/]react-query/,
          chunks: 'all',
          priority: 24,
        },
        supabase: {
          name: 'supabase',
          test: /[\\/]node_modules[\\/]@supabase[\\/]/,
          chunks: 'all',
          priority: 20,
        },
        editor: {
          name: 'editor',
          test: /[\\/]node_modules[\\/](@udecode|@platejs|slate)[\\/]/,
          chunks: 'all',
          priority: 18,
        },
        radixUI: {
          name: 'radix-ui',
          test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
          chunks: 'all',
          priority: 15,
        },
        billing: {
          name: 'billing',
          test: /[\\/]node_modules[\\/](stripe|@stripe)[\\/]/,
          chunks: 'all',
          priority: 12,
        },
        performance: {
          name: 'performance',
          test: /[\\/]node_modules[\\/](web-vitals|react-window|react-virtualized)[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        ai: {
          name: 'ai',
          test: /[\\/]node_modules[\\/](@ai-sdk|ai)[\\/]/,
          chunks: 'all',
          priority: 8,
        },
      },
    }

    // Optimize for performance
    if (!isServer) {
      // Tree shaking for production
      if (process.env.NODE_ENV === 'production') {
        config.optimization.usedExports = true
        config.optimization.sideEffects = false
        config.optimization.providedExports = true
        config.optimization.concatenateModules = true
      }

      // Module resolution optimizations
      config.resolve.alias = {
        ...config.resolve.alias,
        // Reduce bundle size by using specific lodash imports
        lodash: 'lodash-es',
      }

      // Performance monitoring for build analysis
      if (process.env.ANALYZE_BUILD === 'true') {
        config.plugins.push(
          new config.plugins[0].constructor.webpack.BannerPlugin({
            banner: 'Build analysis mode - chunks info logged',
            raw: false,
            entryOnly: true,
          })
        )
      }
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

// Sentry configuration options
const sentryWebpackPluginOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Suppresses source map uploading logs during build
  silent: true,

  // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
  tunnelRoute: '/monitoring',

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  automaticVercelMonitors: true,
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
