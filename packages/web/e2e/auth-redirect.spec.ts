import { expect, test } from './fixtures/coverage'

test.describe('Auth Route Middleware', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
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
    // Verify Supabase Auth UI is loaded by checking for form elements
    await expect(page.getByPlaceholder('Your email address')).toBeVisible()
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

    // Navigate directly to the app page (the auth bypass cookie prevents redirects from /)
    await page.goto('/app')

    // Should be on the app page
    await expect(page).toHaveURL('/app')
    // Wait for the authenticated app to load - check for the app shell which only appears when authenticated
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Verify we're not redirected to auth page (which would happen if auth failed)
    await expect(page).not.toHaveURL(/\/auth/)

    // Verify page title indicates we're in the app
    await expect(page).toHaveTitle(/Notable/)
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
