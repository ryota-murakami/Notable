/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // New Next.js 15 configurations
  experimental: {
    optimizePackageImports: [
      '@tiptap/react',
      '@tiptap/extension-bullet-list',
      '@tiptap/extension-heading',
      '@tiptap/extension-link',
      '@tiptap/extension-list-item',
      '@tiptap/extension-ordered-list',
      '@tiptap/extension-placeholder',
      '@tiptap/extension-task-item',
      '@tiptap/extension-task-list',
      '@tiptap/extension-image',
      '@tiptap/starter-kit',
      'lucide-react'
    ],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

export default nextConfig
