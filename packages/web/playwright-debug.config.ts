import { defineConfig, devices } from '@playwright/test'

/**
 * Simplified Playwright config for debugging timeout issues
 * This config removes complex setup and focuses on identifying bottlenecks
 */
export default defineConfig({
  testDir: './e2e',

  /* Much longer timeout for debugging */
  timeout: 300000, // 5 minutes

  /* Simplified expect timeout */
  expect: {
    timeout: 60000, // 1 minute
  },

  /* No parallel execution to avoid resource contention */
  fullyParallel: false,
  workers: 1,

  /* No retries to see actual failures */
  retries: 0,

  /* Simple reporter */
  reporter: 'list',

  /* Shared settings */
  use: {
    baseURL: 'http://localhost:4378',

    /* Screenshots for all failures */
    screenshot: 'only-on-failure',

    /* Longer navigation timeout */
    navigationTimeout: 120000, // 2 minutes

    /* Longer action timeout */
    actionTimeout: 30000, // 30 seconds
  },

  /* Single browser project */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Simplified web server with test environment */
  webServer: {
    command: 'NODE_ENV=test pnpm start',
    url: 'http://localhost:4378',
    reuseExistingServer: true, // Don't restart if already running
    timeout: 180000, // 3 minutes
    stdout: 'pipe',
    stderr: 'pipe',
    env: {
      /* Load test environment */
      NODE_ENV: 'test',
      NEXT_PUBLIC_API_MOCKING: 'enabled',
      DATABASE_URL:
        'postgresql://postgres:testpassword@localhost:5433/notable_test',
      NEXT_PUBLIC_SUPABASE_URL: 'https://placeholder.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'placeholder-anon-key',
      NEXT_PUBLIC_APP_URL: 'http://localhost:4378',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:4378',
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
      NEXT_PUBLIC_SENTRY_DSN: 'https://placeholder@sentry.io/123456',
      SENTRY_DSN: 'https://placeholder@sentry.io/123456',
      SENTRY_ORG: 'test-org',
      SENTRY_PROJECT: 'test-project',
      SENTRY_AUTH_TOKEN: 'test-sentry-auth-token',
    },
  },
})
