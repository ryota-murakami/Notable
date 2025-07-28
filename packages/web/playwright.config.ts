import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import { config } from 'dotenv'
config({ path: '.env.test' })

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',

  /* Global timeout for each test */
  timeout: process.env.CI ? 60000 : 60000, // 60s for all environments

  /* Global expect timeout */
  expect: {
    timeout: process.env.CI ? 15000 : 10000, // 15s in CI, 10s locally
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* More aggressive retries on CI */
  retries: process.env.CI ? 3 : 0,

  /* Use 2 workers in CI for better parallelization */
  workers: process.env.CI ? 2 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:4378',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Screenshot on failure */
    screenshot: 'only-on-failure',

    /* Better navigation timeout */
    navigationTimeout: process.env.CI ? 30000 : 30000,

    /* Action timeout */
    actionTimeout: process.env.CI ? 10000 : 10000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chromium' },
    },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI ? 'NODE_ENV=test npm run build && NODE_ENV=test npm run start' : 'NODE_ENV=test npm run dev',
    url: 'http://localhost:4378',
    reuseExistingServer: !process.env.CI,
    timeout: 300000, // 5 minutes for CI (increased from 3 minutes)
    stdout: 'pipe',
    stderr: 'pipe',
    env: {
      NODE_ENV: 'test',
      PORT: '4378',
    },
  },
})
