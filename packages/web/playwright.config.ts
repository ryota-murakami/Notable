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

  /* Global timeout for each test - increased for initial compilation */
  timeout: process.env.CI ? 120000 : 90000, // 120s in CI, 90s locally

  /* Global expect timeout */
  expect: {
    timeout: process.env.CI ? 30000 : 20000, // 30s in CI, 20s locally
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* More aggressive retries on CI */
  retries: process.env.CI ? 3 : 0,

  workers: process.env.CI ? 2 : 6,

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

    /* Better navigation timeout - increased for initial compilation */
    navigationTimeout: process.env.CI ? 60000 : 45000,

    /* Action timeout */
    actionTimeout: process.env.CI ? 10000 : 5000,
  },

  /* Configure projects for major browsers - simplified for CI speed */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Temporarily disable other browsers to speed up CI and prevent hanging
    // TODO: Re-enable firefox and mobile testing after core issues are resolved
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4378',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes for CI
    stdout: 'pipe',
    stderr: 'pipe',
  },
})
