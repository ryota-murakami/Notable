import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',

  /* Global timeout for each test */
  timeout: process.env.CI ? 120000 : 30000, // 120s in CI, 30s locally

  /* Global expect timeout */
  expect: {
    timeout: process.env.CI ? 15000 : 5000, // 15s in CI, 5s locally
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
    navigationTimeout: process.env.CI ? 60000 : 15000,

    /* Action timeout */
    actionTimeout: process.env.CI ? 20000 : 5000,
  },

  /* Configure projects for major browsers */
  projects: process.env.CI
    ? [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
          // Only run critical paths in Firefox to save CI time
          testMatch: ['**/app.spec.ts', '**/auth.spec.ts'],
        },
      ]
    : [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },

        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },

        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },

        /* Test against mobile viewports. */
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 12'] },
        },

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
    command: process.env.CI ? 'npm run build && npm run start' : 'npm run dev',
    url: 'http://localhost:4378',
    reuseExistingServer: !process.env.CI,
    timeout: 600000, // 10 minutes for CI (increased for better reliability)
    stdout: 'pipe',
    stderr: 'pipe',
  },
})
