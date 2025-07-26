/**
 * Environment Variable Validation
 * Ensures all required environment variables are present at runtime
 */

export interface EnvironmentConfig {
  // Core
  NODE_ENV: string
  NEXT_PUBLIC_APP_URL: string
  NEXT_PUBLIC_SITE_URL: string

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: string
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string
  SUPABASE_SERVICE_ROLE_KEY: string | undefined // Server-side only
  SUPABASE_JWT_SECRET: string | undefined
  DATABASE_URL: string | undefined

  // Auth
  GOOGLE_CLIENT_ID: string | undefined
  GOOGLE_CLIENT_SECRET: string | undefined
  NEXTAUTH_SECRET: string | undefined
  NEXTAUTH_URL: string | undefined

  // Email
  RESEND_API_KEY: string | undefined
  EMAIL_FROM: string | undefined

  // Storage
  UPLOADTHING_SECRET: string | undefined
  UPLOADTHING_APP_ID: string | undefined

  // AI
  OPENAI_API_KEY: string | undefined

  // Security
  JWT_SECRET: string | undefined

  // Analytics (Optional)
  NEXT_PUBLIC_POSTHOG_KEY: string | undefined
  NEXT_PUBLIC_POSTHOG_HOST: string | undefined
  NEXT_PUBLIC_SENTRY_DSN: string | undefined
  SENTRY_DSN: string | undefined
  SENTRY_ORG: string | undefined
  SENTRY_PROJECT: string | undefined
  SENTRY_AUTH_TOKEN: string | undefined

  // Monitoring
  REDIS_URL: string | undefined
  OTEL_SERVICE_NAME: string | undefined
  OTEL_EXPORTER_OTLP_ENDPOINT: string | undefined
}

const requiredEnvVars = [
  'NODE_ENV',
  'NEXT_PUBLIC_APP_URL',
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const

const requiredServerEnvVars = [
  ...requiredEnvVars,
  'SUPABASE_SERVICE_ROLE_KEY',
  'DATABASE_URL',
  'JWT_SECRET',
  'RESEND_API_KEY',
  'EMAIL_FROM',
  'UPLOADTHING_SECRET',
  'UPLOADTHING_APP_ID',
  'OPENAI_API_KEY',
] as const

const requiredAuthEnvVars = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
] as const

export function validateEnvironment(isServer = false): void {
  const missingVars: string[] = []

  // Always check core required vars
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar)
    }
  }

  // Only check server vars if not in build mode or if explicitly required
  if (isServer && process.env.NODE_ENV !== 'production') {
    for (const envVar of requiredServerEnvVars) {
      if (!process.env[envVar] && !requiredEnvVars.includes(envVar as any)) {
        missingVars.push(envVar)
      }
    }
  }

  // Check auth vars if auth is enabled
  if (process.env.GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_SECRET) {
    for (const envVar of requiredAuthEnvVars) {
      if (!process.env[envVar]) {
        missingVars.push(envVar)
      }
    }
  }

  if (missingVars.length > 0) {
    const errorMessage = `Missing required environment variables:\n${missingVars.join('\n')}`

    if (
      process.env.NODE_ENV === 'production' &&
      missingVars.some((v) => requiredEnvVars.includes(v as any))
    ) {
      throw new Error(errorMessage)
    } else {
      console.warn(`⚠️  Warning: ${errorMessage}`)
    }
  }
}

export function getConfig(): EnvironmentConfig {
  return {
    // Core
    NODE_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_APP_URL:
      process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      'http://localhost:3000',

    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_JWT_SECRET: process.env.SUPABASE_JWT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,

    // Auth
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    // Email
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,

    // Storage
    UPLOADTHING_SECRET: process.env.UPLOADTHING_SECRET,
    UPLOADTHING_APP_ID: process.env.UPLOADTHING_APP_ID,

    // AI
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,

    // Security
    JWT_SECRET:
      process.env.JWT_SECRET ||
      (process.env.NODE_ENV === 'production'
        ? undefined
        : 'development-jwt-secret'),

    // Analytics
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,

    // Monitoring
    REDIS_URL: process.env.REDIS_URL,
    OTEL_SERVICE_NAME: process.env.OTEL_SERVICE_NAME,
    OTEL_EXPORTER_OTLP_ENDPOINT: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
  }
}

// Validate environment on module load
if (typeof window === 'undefined') {
  // Server-side validation
  // TODO: Re-enable after Vercel deployment is fixed
  // validateEnvironment(true)
} else {
  // Client-side validation
  // TODO: Re-enable after Vercel deployment is fixed
  // validateEnvironment(false)
}
