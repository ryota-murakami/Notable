import { defineConfig, devices } from '@playwright/test'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',

  /* Global setup/teardown */
  globalSetup: path.resolve(__dirname, './e2e/fixtures/global-setup.ts'),
  globalTeardown: path.resolve(__dirname, './e2e/fixtures/global-teardown.ts'),

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

    /* Enable downloads in tests */
    acceptDownloads: true,

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
      use: {
        ...devices['Desktop Chrome'],
        acceptDownloads: true,
      },
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
    command: 'NODE_ENV=test pnpm dev',
    url: 'http://localhost:4378',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes for CI
    stdout: 'pipe',
    stderr: 'pipe',
    env: {
      // CRITICAL: Ensure NODE_ENV=test for environment validation
      NODE_ENV: 'test',
      NEXT_PUBLIC_API_MOCKING: 'enabled',
      DATABASE_URL:
        'postgresql://postgres:testpassword@localhost:5433/notable_test',
      NEXT_PUBLIC_SUPABASE_URL: 'https://placeholder.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'placeholder-anon-key',
      NEXT_PUBLIC_APP_URL: 'http://localhost:4378',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:4378',

      // Required server env vars (placeholder values for testing)
      SUPABASE_SERVICE_ROLE_KEY: 'test-service-role-key',
      SUPABASE_JWT_SECRET: 'test-jwt-secret',
      GOOGLE_CLIENT_ID: 'test-google-client-id',
      GOOGLE_CLIENT_SECRET: 'test-google-client-secret',
      RESEND_API_KEY: 'test-resend-api-key',
      EMAIL_FROM: 'test@example.com',
      UPLOADTHING_SECRET: 'test-uploadthing-secret',
      UPLOADTHING_APP_ID: 'test-uploadthing-app-id',
      OPENAI_API_KEY: 'test-openai-api-key',
      JWT_SECRET: 'test-jwt-secret-for-app',

      // Test-specific configuration
      NEXT_PUBLIC_BYPASS_TEMPLATE_PICKER: 'true',

      // Sentry configuration (placeholder values for testing)
      NEXT_PUBLIC_SENTRY_DSN: 'https://placeholder@sentry.io/123456',
      SENTRY_DSN: 'https://placeholder@sentry.io/123456',
      SENTRY_ORG: 'test-org',
      SENTRY_PROJECT: 'test-project',
      SENTRY_AUTH_TOKEN: 'test-sentry-auth-token',
    },
  },
})
