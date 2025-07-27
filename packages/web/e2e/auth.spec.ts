import { expect, test } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should redirect to auth page when not authenticated', async ({
    page,
  }) => {
    // Navigate to home page
    await page.goto('/')

    // Should be redirected to auth page (with trailing slash)
    await expect(page).toHaveURL('/auth/')

    // Auth page should be visible
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible()
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
    // Track redirects
    const redirects: string[] = []

    page.on('response', (response) => {
      if (response.status() >= 300 && response.status() < 400) {
        redirects.push(response.url())
      }
    })

    // Navigate to home
    await page.goto('/')

    // Wait a bit to ensure no infinite loop
    await page.waitForTimeout(2000)

    // Should have only one redirect (from / to /auth)
    expect(redirects.length).toBeLessThanOrEqual(1)

    // Should end up on auth page (with trailing slash)
    await expect(page).toHaveURL('/auth/')
  })

  test('auth page should be accessible directly', async ({ page }) => {
    // Navigate directly to auth page
    const response = await page.goto('/auth')

    // Should load successfully
    expect(response?.status()).toBe(200)

    // Should show auth page
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible()
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
})
