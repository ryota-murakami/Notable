import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    // Disable watch mode by default
    watch: false,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    typecheck: {
      tsconfig: './tsconfig.vitest.json',
    },
    include: [
      '**/__tests__/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/?(*.){test,spec}.{js,ts,jsx,tsx}',
    ],
    exclude: [
      'node_modules',
      '.next',
      'e2e/**',
      'tests/e2e/**',
      '**/*.config.*',
      'dist',
      'coverage',
      '**/*.d.ts',
      '**/*.e2e.*', // Exclude E2E tests
    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '.next/',
        'e2e/',
        'tests/e2e/',
        '*.config.*',
        '**/*.d.ts',
        'coverage/**',
      ],
    },
    testTimeout: 10000,
    hookTimeout: 10000,
  },
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './components'),
      '@/lib': path.resolve(__dirname, './lib'),
      '@/hooks': path.resolve(__dirname, './hooks'),
      '@/types': path.resolve(__dirname, './types'),
      '@/store': path.resolve(__dirname, './store'),
      '@': path.resolve(__dirname, './'), // keep last
    },
  },
})
