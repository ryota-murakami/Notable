import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: false, // Electron tests should run sequentially
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 3 : 1, // More retries for CI stability
  workers: 1, // Only run one worker for Electron tests
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    // Global test settings - longer timeouts for CI
    actionTimeout: process.env.CI ? 45000 : 30000,
    navigationTimeout: process.env.CI ? 45000 : 30000,
  },
  projects: [
    {
      name: 'electron',
      testDir: './e2e/tests',
      use: {
        // Electron-specific settings - headless mode is handled by our utility functions
      },
    },
  ],
  // Increase timeout for Electron app startup - longer for CI
  timeout: process.env.CI ? 120000 : 60000,
  expect: {
    timeout: process.env.CI ? 15000 : 10000,
  },
})