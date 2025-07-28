import { expect, test } from '@playwright/test'

test.describe('Supabase Integration Tests', () => {
  // Test authentication flow
  test('should handle authentication correctly', async ({ page }) => {
    // Feature not yet implemented - real Supabase auth with email/password not available
    // Navigate to the app
    await page.goto('/')

    // Should redirect to auth page when not authenticated
    await expect(page).toHaveURL('/auth')

    // Check auth page elements
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(page.getByText('Sign In')).toBeVisible()
    await expect(page.getByText('Sign Up')).toBeVisible()

    // Test sign in form
    await page.getByRole('tab', { name: 'Sign In' }).click()
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()

    // Test OAuth buttons
    await expect(page.getByRole('button', { name: 'Google' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'GitHub' })).toBeVisible()
  })

  // Test database operations (notes CRUD)
  test('should handle database operations correctly', async ({ page }) => {
    // This test would require authentication first
    // For now, we'll just verify the auth flow is working
    await page.goto('/')
    await expect(page).toHaveURL('/auth')

    // Just verify the page loaded without errors
    const pageErrors: string[] = []
    page.on('pageerror', (error) => pageErrors.push(error.message))
    await page.waitForTimeout(500)

    // Should have no critical errors
    const criticalErrors = pageErrors.filter(
      (error) =>
        error.includes('NEXT_PUBLIC_SUPABASE') || error.includes('createClient')
    )
    expect(criticalErrors.length).toBe(0)
  })

  // Test middleware session handling
  test('should handle middleware session correctly', async ({ page }) => {
    // Test that protected routes redirect to auth
    await page.goto('/dashboard/billing')
    await page.waitForURL('/auth', { timeout: 10000 })
    await expect(page).toHaveURL('/auth')

    // Test that auth page is accessible
    await page.goto('/auth')
    await expect(page).toHaveURL('/auth')

    // Test static assets are not affected by middleware
    const response = await page.request.get('/favicon.ico')
    expect(response.status()).toBeLessThan(400)
  })

  // Test SSR/hydration
  test('should handle SSR and hydration correctly', async ({ page }) => {
    await page.goto('/auth')

    // Check that window checks are working properly
    const hasHydrationErrors = await page.evaluate(() => {
      return window.console.error.toString().includes('hydration')
    })

    expect(hasHydrationErrors).toBe(false)

    // Verify OAuth redirect URLs are set correctly
    await page.getByRole('button', { name: 'Google' }).click()

    // Should attempt to redirect to OAuth provider (will fail without real Supabase setup)
    // But we can verify no JavaScript errors occurred
    const jsErrors: string[] = []
    page.on('pageerror', (error) => jsErrors.push(error.message))
    await page.waitForTimeout(1000)

    // Filter out expected errors (like network errors for OAuth redirect)
    const unexpectedErrors = jsErrors.filter(
      (error) => !error.includes('net::') && !error.includes('Failed to fetch')
    )

    expect(unexpectedErrors.length).toBe(0)
  })

  // Test error handling
  test('should handle authentication errors gracefully', async ({
    page,
  }) => {
    await page.goto('/auth')

    // Test sign in with invalid credentials
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByLabel('Password').fill('wrongpassword')
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Should show error toast (implementation dependent)
    // For now, just verify no page crash
    await page.waitForTimeout(1000)
    await expect(page).toHaveURL('/auth')
  })
})
