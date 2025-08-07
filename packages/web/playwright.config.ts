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

  /* Global timeout for each test - optimized after fixing click issues */
  timeout: process.env.CI ? 60000 : 45000, // 60s in CI, 45s locally (reduced from 120s/90s)

  /* Global expect timeout - optimized */
  expect: {
    timeout: process.env.CI ? 15000 : 10000, // 15s in CI, 10s locally (reduced from 30s/20s)
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Faster test execution settings */
  maxFailures: process.env.CI ? 10 : undefined, // Stop after 10 failures in CI
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Reduced retries for faster CI execution */
  retries: process.env.CI ? 1 : 0, // Reduced from 3 to 1

  /* Optimized workers for better CI performance */
  workers: process.env.CI ? 4 : 6, // Increased from 2 to 4 for CI

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

    /* Video recording only on retry for debugging */
    video: process.env.CI ? 'retain-on-failure' : 'off',

    /* Browser launch options for performance */
    launchOptions: {
      args: process.env.CI
        ? [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--disable-gpu',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-features=TranslateUI',
            '--disable-ipc-flooding-protection',
          ]
        : [],
    },

    /* Optimized navigation timeout */
    navigationTimeout: process.env.CI ? 30000 : 20000, // Reduced from 60s/45s to 30s/20s

    /* Optimized action timeout */
    actionTimeout: process.env.CI ? 5000 : 3000, // Reduced from 10s/5s to 5s/3s
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
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:4378',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // 2 minutes for CI server startup
    // In CI, redirect to 'inherit' for better debugging visibility
    stdout: process.env.CI ? 'inherit' : 'pipe',
    stderr: process.env.CI ? 'inherit' : 'pipe',
    env: {
      // CRITICAL: Use NODE_ENV=test to enable test mode features
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
