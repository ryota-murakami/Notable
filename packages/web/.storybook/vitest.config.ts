import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
import { storybookNextJsPlugin } from '@storybook/experimental-nextjs-vite/vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [storybookNextJsPlugin(), storybookTest()],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
    },
    include: ['**/*.stories.tsx'],
    setupFiles: ['./.storybook/vitest.setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['design-system/components/**/*.tsx'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
    },
  },
})
