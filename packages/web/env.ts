import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// In CI environments, we need to allow builds without all env vars
const isCI = process.env.CI === 'true'
// In Vercel preview deployments, we need to allow builds without all env vars
const isVercelPreview =
  process.env.VERCEL === '1' && process.env.VERCEL_ENV !== 'production'
// In test environments, we need to allow builds without all env vars
const isTest =
  process.env.NODE_ENV === 'test' ||
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    CI: z.string().optional(), // Only CI can be optional
    DATABASE_URL:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().url().min(1),
    SUPABASE_SERVICE_ROLE_KEY:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    SUPABASE_JWT_SECRET:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    GOOGLE_CLIENT_ID:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    GOOGLE_CLIENT_SECRET:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    RESEND_API_KEY:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    EMAIL_FROM:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().email(),
    UPLOADTHING_SECRET:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    UPLOADTHING_APP_ID:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    OPENAI_API_KEY:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    JWT_SECRET:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    SENTRY_DSN:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().url().min(1),
    SENTRY_ORG:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    SENTRY_PROJECT:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    SENTRY_AUTH_TOKEN:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    REDIS_URL: z.string().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z
      .string()
      .url()
      .default(
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'http://localhost:3000'
      ),
    NEXT_PUBLIC_SITE_URL: z
      .string()
      .url()
      .default(
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : 'http://localhost:3000'
      ),
    NEXT_PUBLIC_SUPABASE_URL:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().url().min(1),
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().min(1),
    NEXT_PUBLIC_SENTRY_DSN:
      isCI || isVercelPreview || isTest
        ? z.string().optional()
        : z.string().url().min(1),
    NEXT_PUBLIC_API_MOCKING: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Server
    NODE_ENV: process.env.NODE_ENV,
    CI: process.env.CI,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    REDIS_URL: process.env.REDIS_URL,
    // Client
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'),
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000'),
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
  },
  /**
   * Never skip validation - we handle CI properly with optional schemas
   */
  skipValidation: false,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
})

// Re-export the type for backwards compatibility
export type EnvironmentConfig = typeof env

// Helper function for backwards compatibility
export function getConfig(): EnvironmentConfig {
  return env
}

// Helper function for backwards compatibility
export function validateEnvironment(_isServer = false): void {
  // t3-env automatically validates on import, so this is a no-op
  // kept for backwards compatibility
}
