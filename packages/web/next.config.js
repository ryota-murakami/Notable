/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'lib', 'utils'],
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/themes', 'lucide-react'],
  },
  images: {
    domains: ['localhost'],
  },
  transpilePackages: ['@notable/sync'],
}

// Enable instrumentation for coverage collection when COVERAGE env is set
if (process.env.COVERAGE === '1') {
  nextConfig.distDir = '.next_coverage'
  nextConfig.webpack = (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['istanbul'],
          },
        },
      })
    }
    return config
  }
}

export default nextConfig