import { expect, test } from './fixtures/coverage'

// Trigger fresh E2E workflow run after fixing "Welcome to Notable" issue

test.describe('Authentication Flow', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
  test('should redirect to auth page when not authenticated', async ({
    page,
  }) => {
    // Navigate to home page
    await page.goto('/')

    // Should be redirected to auth page
    await expect(page).toHaveURL('/auth')

    // Auth page should be visible - wait for content to load
    await expect(page.getByText('Welcome to Notable')).toBeVisible({
      timeout: 5000,
    })
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible({ timeout: 5000 })
  })

  test('should display Supabase auth UI', async ({ page }) => {
    await page.goto('/auth')

    // Wait for auth form to load and check for sign in form elements
    await expect(page.getByPlaceholder('Your email address')).toBeVisible()
    await expect(page.getByPlaceholder('Your password')).toBeVisible()

    // Check for auth buttons - Supabase Auth UI renders these
    await expect(
      page.getByRole('button', { name: 'Sign in', exact: true })
    ).toBeVisible()

    // Check for sign up link (Supabase Auth UI shows this as a link, not a button)
    await expect(
      page.getByRole('link', { name: /Don't have an account\? Sign up/i })
    ).toBeVisible()

    // Check for OAuth divider (which appears when OAuth providers are configured)
    // The Google OAuth button might not appear if OAuth isn't configured in test environment
    const oauthDivider = page.getByText('or continue with')
    if (await oauthDivider.isVisible().catch(() => false)) {
      // If OAuth is configured, check for the Google button
      await expect(
        page.getByRole('button', { name: /Continue with Google/i })
      ).toBeVisible()
    }
  })

  test('should not have infinite redirect loop', async ({ page }) => {
    // This test verifies that with API mocking enabled (test environment),
    // navigation doesn't result in infinite redirect loops

    // Track redirects to ensure no infinite loop
    const redirects: string[] = []
    let redirectCount = 0

    page.on('response', (response) => {
      if (response.status() >= 300 && response.status() < 400) {
        redirectCount++
        redirects.push(response.url())

        // If we hit more than 10 redirects, something is wrong
        if (redirectCount > 10) {
          throw new Error(`Too many redirects detected: ${redirectCount}`)
        }
      }
    })

    // Navigate to root
    await page.goto('/')

    // Wait for navigation to complete
    await page.waitForTimeout(2000)

    // In test mode with API mocking, users are auto-authenticated via dev-auth-bypass
    // So we should end up on the app page, not auth page
    // The key thing is no infinite redirect loop (redirectCount should be reasonable)
    expect(redirectCount).toBeLessThanOrEqual(3)
    console.log(`Redirect count: ${redirectCount}`)
    console.log(`Redirects: ${redirects.join(', ')}`)
    console.log(`Final URL: ${page.url()}`)

    // In test environment, user should be authenticated and go to /app
    await expect(page).toHaveURL('/app')
  })

  test('auth page should be accessible directly', async ({ page }) => {
    // Navigate directly to auth page
    const response = await page.goto('/auth')

    // Should load successfully
    expect(response?.status()).toBe(200)

    // Should show auth page - wait for content to load
    await expect(page.getByText('Welcome to Notable')).toBeVisible({
      timeout: 5000,
    })
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible({ timeout: 5000 })
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

    // Navigate directly to the app page (the auth bypass cookie prevents redirects)
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
})
