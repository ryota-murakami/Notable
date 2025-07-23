#!/usr/bin/env node

import { z } from 'zod'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Environment variable schema
const envSchema = z.object({
  // Next.js
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NEXT_PUBLIC_APP_DESCRIPTION: z.string().min(1),

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  SUPABASE_JWT_SECRET: z.string().min(1),

  // Database
  DATABASE_URL: z.string().startsWith('postgresql://'),

  // Authentication
  NEXT_PUBLIC_SITE_URL: z.string().url(),

  // OAuth (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),

  // Email
  RESEND_API_KEY: z.string().min(1),
  EMAIL_FROM: z.string().email(),

  // File Storage
  UPLOADTHING_SECRET: z.string().min(1),
  UPLOADTHING_APP_ID: z.string().min(1),

  // Analytics
  NEXT_PUBLIC_VERCEL_ANALYTICS_ID: z.string().optional(),
  VERCEL_SPEED_INSIGHTS_ID: z.string().optional(),

  // Error Tracking
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
  SENTRY_ORG: z.string().optional(),
  SENTRY_PROJECT: z.string().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),

  // PostHog
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().optional(),

  // Redis
  REDIS_URL: z.string().startsWith('redis://').optional(),

  // OpenTelemetry
  OTEL_SERVICE_NAME: z.string().optional(),
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string().url().optional(),
  OTEL_EXPORTER_OTLP_HEADERS: z.string().optional(),

  // Feature Flags
  NEXT_PUBLIC_ENABLE_PWA: z
    .enum(['true', 'false'])
    .transform((val) => val === 'true')
    .optional(),
  NEXT_PUBLIC_ENABLE_OFFLINE_MODE: z
    .enum(['true', 'false'])
    .transform((val) => val === 'true')
    .optional(),
  NEXT_PUBLIC_ENABLE_AI_FEATURES: z
    .enum(['true', 'false'])
    .transform((val) => val === 'true')
    .optional(),

  // API Keys
  API_SECRET_KEY: z.string().min(32),
  WEBHOOK_SECRET: z.string().min(16),

  // Rate Limiting
  RATE_LIMIT_WINDOW: z.string().transform(Number).optional(),
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).optional(),

  // Edge Config
  EDGE_CONFIG: z.string().url().optional(),
  EDGE_CONFIG_ITEM_KEY: z.string().optional(),
})

type EnvConfig = z.infer<typeof envSchema>

// Color utilities for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function validateEnvironment(env: NodeJS.ProcessEnv): {
  success: boolean
  data?: EnvConfig
  errors?: z.ZodError
} {
  try {
    const data = envSchema.parse(env)
    return { success: true, data }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error }
    }
    throw error
  }
}

function checkDatabaseConnection(databaseUrl: string): Promise<boolean> {
  return new Promise((resolve) => {
    const { Client } = require('pg')
    const client = new Client({ connectionString: databaseUrl })

    client
      .connect()
      .then(() => {
        client.end()
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}

async function checkSupabaseConnection(
  url: string,
  anonKey: string
): Promise<boolean> {
  try {
    const response = await fetch(`${url}/rest/v1/`, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
    })
    return response.ok
  } catch {
    return false
  }
}

async function checkRedisConnection(redisUrl: string): Promise<boolean> {
  try {
    const { createClient } = require('redis')
    const client = createClient({ url: redisUrl })
    await client.connect()
    await client.ping()
    await client.quit()
    return true
  } catch {
    return false
  }
}

async function main() {
  log('\n🔍 Validating environment configuration...\n', 'cyan')

  // Load environment variables
  const envFile = process.argv[2] || '.env.production'
  const envPath = path.resolve(process.cwd(), envFile)

  if (!fs.existsSync(envPath)) {
    log(`❌ Environment file not found: ${envPath}`, 'red')
    process.exit(1)
  }

  log(`📄 Loading environment from: ${envFile}`, 'blue')
  dotenv.config({ path: envPath })

  // Validate schema
  const validation = validateEnvironment(process.env)

  if (!validation.success) {
    log('\n❌ Environment validation failed:\n', 'red')
    validation.errors?.issues.forEach((issue) => {
      log(`  • ${issue.path.join('.')}: ${issue.message}`, 'red')
    })
    process.exit(1)
  }

  log('✅ Environment schema validation passed', 'green')

  const config = validation.data!

  // Connection tests
  log('\n🔌 Testing connections...\n', 'cyan')

  // Test database
  log('  Testing database connection...', 'yellow')
  const dbConnected = await checkDatabaseConnection(config.DATABASE_URL)
  if (dbConnected) {
    log('  ✅ Database connection successful', 'green')
  } else {
    log('  ❌ Database connection failed', 'red')
  }

  // Test Supabase
  log('  Testing Supabase connection...', 'yellow')
  const supabaseConnected = await checkSupabaseConnection(
    config.NEXT_PUBLIC_SUPABASE_URL,
    config.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  if (supabaseConnected) {
    log('  ✅ Supabase connection successful', 'green')
  } else {
    log('  ❌ Supabase connection failed', 'red')
  }

  // Test Redis if configured
  if (config.REDIS_URL) {
    log('  Testing Redis connection...', 'yellow')
    const redisConnected = await checkRedisConnection(config.REDIS_URL)
    if (redisConnected) {
      log('  ✅ Redis connection successful', 'green')
    } else {
      log('  ❌ Redis connection failed', 'red')
    }
  }

  // Security checks
  log('\n🔒 Security checks...\n', 'cyan')

  // Check API key strength
  if (config.API_SECRET_KEY.length < 32) {
    log('  ⚠️  API_SECRET_KEY should be at least 32 characters', 'yellow')
  } else {
    log('  ✅ API_SECRET_KEY length is sufficient', 'green')
  }

  // Check if production URLs are properly set
  if (config.NEXT_PUBLIC_APP_URL.includes('localhost')) {
    log('  ⚠️  NEXT_PUBLIC_APP_URL contains localhost', 'yellow')
  }

  // Feature flags summary
  log('\n🚩 Feature flags:\n', 'cyan')
  log(`  • PWA: ${config.NEXT_PUBLIC_ENABLE_PWA ? 'Enabled' : 'Disabled'}`)
  log(
    `  • Offline Mode: ${config.NEXT_PUBLIC_ENABLE_OFFLINE_MODE ? 'Enabled' : 'Disabled'}`
  )
  log(
    `  • AI Features: ${config.NEXT_PUBLIC_ENABLE_AI_FEATURES ? 'Enabled' : 'Disabled'}`
  )

  // Analytics configuration
  log('\n📊 Analytics configuration:\n', 'cyan')
  const analytics = []
  if (config.NEXT_PUBLIC_VERCEL_ANALYTICS_ID) analytics.push('Vercel Analytics')
  if (config.NEXT_PUBLIC_SENTRY_DSN) analytics.push('Sentry')
  if (config.NEXT_PUBLIC_POSTHOG_KEY) analytics.push('PostHog')
  if (config.OTEL_SERVICE_NAME) analytics.push('OpenTelemetry')

  if (analytics.length > 0) {
    log(`  ✅ Configured: ${analytics.join(', ')}`, 'green')
  } else {
    log('  ⚠️  No analytics services configured', 'yellow')
  }

  log('\n✨ Environment validation complete!\n', 'green')
}

// Run validation
main().catch((error) => {
  log(`\n❌ Unexpected error: ${error.message}`, 'red')
  process.exit(1)
})
