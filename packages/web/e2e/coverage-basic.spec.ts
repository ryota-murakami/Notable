import { expect, test } from 'playwright-test-coverage'

test.describe('Basic Coverage Test', () => {
  test('should trigger some code coverage', async ({ page }) => {
    // Navigate to auth page first
    await page.goto('/auth')

    // Wait for auth page to load
    await expect(page.getByText('Welcome to Notable')).toBeVisible({
      timeout: 10000,
    })

    // This should trigger the auth page component code
    await expect(
      page.getByText('Sign in to access your synced notes')
    ).toBeVisible()

    // Navigate to home page - should redirect to auth
    await page.goto('/')
    await expect(page).toHaveURL('/auth')
  })

  test('should access app with auth bypass', async ({ page }) => {
    // Set dev auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to app
    await page.goto('/app')

    // Should see app shell
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    // Should see welcome message
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(
      page.getByText('A modern note-taking experience')
    ).toBeVisible()
  })
})
