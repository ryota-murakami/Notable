import { test, expect } from '@playwright/test'
import { execSync } from 'child_process'
import path from 'path'

/**
 * E2E test to verify deployment environment variable validation
 * Tests the implementation of Issue #274
 */

test.describe('Deployment Environment Variable Validation', () => {
  test('build fails when required environment variables are missing in production', async () => {
    // Save original env
    const originalEnv = { ...process.env }

    try {
      // Clear all environment variables to simulate missing config
      delete process.env.DATABASE_URL
      delete process.env.SUPABASE_SERVICE_ROLE_KEY
      delete process.env.SUPABASE_JWT_SECRET
      delete process.env.GOOGLE_CLIENT_ID
      delete process.env.GOOGLE_CLIENT_SECRET
      delete process.env.RESEND_API_KEY
      delete process.env.EMAIL_FROM
      delete process.env.NEXT_PUBLIC_SUPABASE_URL
      delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      delete process.env.NEXT_PUBLIC_SENTRY_DSN

      // Ensure we're not in CI or Vercel preview mode
      delete process.env.CI
      delete process.env.VERCEL
      ;(process.env as any).NODE_ENV = 'production'

      // Attempt to build - this should fail
      let buildFailed = false
      let errorMessage = ''

      try {
        execSync('pnpm build', {
          cwd: path.join(__dirname, '..'),
          env: process.env,
          stdio: 'pipe',
        })
      } catch (error: any) {
        buildFailed = true
        errorMessage =
          error.stdout?.toString() || error.stderr?.toString() || ''
      }

      // Verify build failed with environment variable validation error
      expect(buildFailed).toBe(true)
      expect(errorMessage).toContain('Invalid environment variables')
      expect(errorMessage).toContain('Required')

      // Verify specific missing variables are reported
      expect(errorMessage).toMatch(/SUPABASE_SERVICE_ROLE_KEY.*Required/s)
      expect(errorMessage).toMatch(/GOOGLE_CLIENT_ID.*Required/s)
      expect(errorMessage).toMatch(/EMAIL_FROM.*Required/s)
    } finally {
      // Restore original env
      process.env = originalEnv
    }
  })

  test('build succeeds in CI environment with minimal variables', async () => {
    // Save original env
    const originalEnv = { ...process.env }

    try {
      // Set CI environment
      process.env.CI = 'true'
      ;(process.env as any).NODE_ENV = 'test'

      // Only provide the required public variables
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'

      // Clear server-side variables
      delete process.env.DATABASE_URL
      delete process.env.SUPABASE_SERVICE_ROLE_KEY
      delete process.env.SUPABASE_JWT_SECRET
      delete process.env.GOOGLE_CLIENT_ID
      delete process.env.GOOGLE_CLIENT_SECRET
      delete process.env.RESEND_API_KEY
      delete process.env.EMAIL_FROM

      // Attempt to build - this should succeed in CI
      let buildSucceeded = true
      let output = ''

      try {
        output = execSync('pnpm build', {
          cwd: path.join(__dirname, '..'),
          env: process.env,
          stdio: 'pipe',
        }).toString()
      } catch (error: any) {
        buildSucceeded = false
        output = error.stdout?.toString() || error.stderr?.toString() || ''
      }

      // Verify build succeeded
      expect(buildSucceeded).toBe(true)
      expect(output).not.toContain('Invalid environment variables')
    } finally {
      // Restore original env
      process.env = originalEnv
    }
  })

  test('build succeeds in Vercel preview environment with minimal variables', async () => {
    // Save original env
    const originalEnv = { ...process.env }

    try {
      // Set Vercel preview environment
      process.env.VERCEL = '1'
      process.env.VERCEL_ENV = 'preview'
      ;(process.env as any).NODE_ENV = 'production'

      // Only provide the required public variables
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'

      // Clear server-side variables
      delete process.env.DATABASE_URL
      delete process.env.SUPABASE_SERVICE_ROLE_KEY
      delete process.env.SUPABASE_JWT_SECRET
      delete process.env.GOOGLE_CLIENT_ID
      delete process.env.GOOGLE_CLIENT_SECRET
      delete process.env.RESEND_API_KEY
      delete process.env.EMAIL_FROM

      // Attempt to build - this should succeed in Vercel preview
      let buildSucceeded = true
      let output = ''

      try {
        output = execSync('pnpm build', {
          cwd: path.join(__dirname, '..'),
          env: process.env,
          stdio: 'pipe',
        }).toString()
      } catch (error: any) {
        buildSucceeded = false
        output = error.stdout?.toString() || error.stderr?.toString() || ''
      }

      // Verify build succeeded
      expect(buildSucceeded).toBe(true)
      expect(output).not.toContain('Invalid environment variables')
    } finally {
      // Restore original env
      process.env = originalEnv
    }
  })

  test('build fails in Vercel production with missing required variables', async () => {
    // Save original env
    const originalEnv = { ...process.env }

    try {
      // Set Vercel production environment
      process.env.VERCEL = '1'
      process.env.VERCEL_ENV = 'production'
      ;(process.env as any).NODE_ENV = 'production'

      // Only provide the public variables
      process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key'

      // Clear required server-side variables
      delete process.env.SUPABASE_SERVICE_ROLE_KEY
      delete process.env.SUPABASE_JWT_SECRET
      delete process.env.GOOGLE_CLIENT_ID
      delete process.env.GOOGLE_CLIENT_SECRET
      delete process.env.RESEND_API_KEY
      delete process.env.EMAIL_FROM

      // Attempt to build - this should fail in production
      let buildFailed = false
      let errorMessage = ''

      try {
        execSync('pnpm build', {
          cwd: path.join(__dirname, '..'),
          env: process.env,
          stdio: 'pipe',
        })
      } catch (error: any) {
        buildFailed = true
        errorMessage =
          error.stdout?.toString() || error.stderr?.toString() || ''
      }

      // Verify build failed with environment variable validation error
      expect(buildFailed).toBe(true)
      expect(errorMessage).toContain('Invalid environment variables')
      expect(errorMessage).toContain('Required')
    } finally {
      // Restore original env
      process.env = originalEnv
    }
  })
})
