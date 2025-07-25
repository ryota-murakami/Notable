import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: false, // Electron tests should run sequentially
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // Only run one worker for Electron tests
  reporter: 'list',
  use: {
    // Global test settings
    actionTimeout: 30000,
    navigationTimeout: 30000,
  },
  projects: [
    {
      name: 'electron',
      testDir: './e2e/tests',
      use: {
        // Electron-specific settings
        headless: false, // Electron requires headed mode
      },
    },
  ],
  // Increase timeout for Electron app startup
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
})