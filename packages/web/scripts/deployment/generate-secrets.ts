#!/usr/bin/env node

import * as crypto from 'crypto'
import * as fs from 'fs'
import * as path from 'path'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

function generateSecret(length: number = 32): string {
  return crypto.randomBytes(length).toString('base64url')
}

function _generateApiKey(): string {
  const prefix = 'sk_prod'
  const secret = crypto.randomBytes(24).toString('base64url')
  return `${prefix}_${secret}`
}

function generateJWT(): string {
  return crypto.randomBytes(64).toString('base64url')
}

async function main() {
  console.log('\n🔐 Notable Secret Generator\n')
  console.log(
    'This tool will help you generate secure secrets for your production environment.\n'
  )

  const secrets: Record<string, string> = {}

  // Generate API secrets
  console.log('🔑 Generating API secrets...')
  secrets.API_SECRET_KEY = generateSecret(32)
  secrets.WEBHOOK_SECRET = generateSecret(16)
  secrets.SUPABASE_JWT_SECRET = generateJWT()

  console.log('✅ API secrets generated\n')

  // Ask for service configuration
  const useRedis = await question('Will you use Redis for caching? (y/n): ')
  if (useRedis.toLowerCase() === 'y') {
    const redisPassword = generateSecret(24)
    console.log(`\n🔐 Redis password: ${redisPassword}`)
    console.log('Use this password when setting up your Redis instance.\n')
  }

  const useSentry = await question(
    'Will you use Sentry for error tracking? (y/n): '
  )
  if (useSentry.toLowerCase() === 'y') {
    console.log(
      '\n🔗 Visit https://sentry.io to create a project and get your DSN'
    )
    console.log(
      "You'll need: DSN, Organization slug, Project name, and Auth token\n"
    )
  }

  const usePostHog = await question(
    'Will you use PostHog for analytics? (y/n): '
  )
  if (usePostHog.toLowerCase() === 'y') {
    console.log(
      '\n📈 Visit https://posthog.com to create a project and get your API key\n'
    )
  }

  // Generate example env file
  console.log('\n📄 Generating example secrets file...')

  const secretsContent = `# Generated Secrets - Store these securely!
# Generated on: ${new Date().toISOString()}

# API Keys
API_SECRET_KEY=${secrets.API_SECRET_KEY}
WEBHOOK_SECRET=${secrets.WEBHOOK_SECRET}

# Supabase JWT Secret
SUPABASE_JWT_SECRET=${secrets.SUPABASE_JWT_SECRET}

# OAuth Secrets (generate these in respective provider dashboards)
GOOGLE_CLIENT_SECRET=<get-from-google-cloud-console>
GITHUB_CLIENT_SECRET=<get-from-github-settings>

# Email Service
RESEND_API_KEY=<get-from-resend-dashboard>

# File Storage
UPLOADTHING_SECRET=<get-from-uploadthing-dashboard>

# Error Tracking
SENTRY_AUTH_TOKEN=<get-from-sentry-settings>

# Security Headers
NEXT_PUBLIC_CSP_REPORT_URI=<your-csp-report-endpoint>

# Additional Notes:
# - Never commit these values to version control
# - Store them securely in your password manager
# - Add them to Vercel environment variables via dashboard or CLI
# - Rotate these secrets periodically
`

  const outputPath = path.join(process.cwd(), '.env.secrets')
  fs.writeFileSync(outputPath, secretsContent)

  console.log(`✅ Secrets file generated at: ${outputPath}`)
  console.log('\n⚠️  IMPORTANT: This file contains sensitive data!')
  console.log('   - Add .env.secrets to .gitignore immediately')
  console.log('   - Copy these values to your password manager')
  console.log('   - Delete this file after securing the values\n')

  // Add to .gitignore if not already present
  const gitignorePath = path.join(process.cwd(), '.gitignore')
  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8')
    if (!gitignoreContent.includes('.env.secrets')) {
      fs.appendFileSync(gitignorePath, '\n# Generated secrets\n.env.secrets\n')
      console.log('✅ Added .env.secrets to .gitignore\n')
    }
  }

  // Vercel deployment instructions
  console.log('🚀 To deploy to Vercel:\n')
  console.log('1. Install Vercel CLI: npm i -g vercel')
  console.log('2. Run: vercel env pull to sync existing variables')
  console.log('3. Add secrets via dashboard or CLI:')
  console.log('   vercel env add API_SECRET_KEY production')
  console.log('   vercel env add WEBHOOK_SECRET production')
  console.log('   vercel env add SUPABASE_JWT_SECRET production')
  console.log('\n4. Deploy: vercel --prod\n')

  rl.close()
}

main().catch((error) => {
  console.error('❌ Error:', error.message)
  rl.close()
  process.exit(1)
})
