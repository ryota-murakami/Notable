import { test, expect } from '@playwright/test'

test.describe('Auth Route Middleware', () => {
  test('should allow access to /auth without redirect loop', async ({
    page,
  }) => {
    // Navigate to auth page
    await page.goto('/auth')

    // Verify we're on the auth page and not redirected (with or without trailing slash)
    await expect(page.url()).toMatch(/\/auth\/?$/)

    // Verify auth page content is visible
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: 'Demo Login (Testing)' })
    ).toBeVisible()
  })

  test('should redirect unauthenticated users from home to auth', async ({
    page,
  }) => {
    // Clear any auth cookies
    await page.context().clearCookies()

    // Try to navigate to home page
    await page.goto('/')

    // Should be redirected to auth (with or without trailing slash)
    await expect(page.url()).toMatch(/\/auth\/?$/)
  })

  test('should allow authenticated users to access home', async ({ page }) => {
    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to home page
    await page.goto('/')

    // Should stay on home page
    await expect(page).toHaveURL('/')
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
  })

  test('should not apply middleware to static assets', async ({ page }) => {
    // Test that static assets load without auth
    const response = await page.request.get('/favicon.ico')
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
  })

  test('should not apply middleware to API routes', async ({ page }) => {
    // Mock API route should be accessible without auth
    const response = await page.request.get('/api/health', {
      failOnStatusCode: false,
    })
    // API route might not exist, but shouldn't redirect to auth
    expect([200, 404]).toContain(response.status())
  })
})
