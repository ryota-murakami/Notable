import { expect, test } from './fixtures/coverage'

test('simple app shell test', async ({ page }) => {
  // Set dev auth bypass cookie for testing
  await page.context().addCookies([
    {
      name: 'dev-auth-bypass',
      value: 'true',
      domain: 'localhost',
      path: '/',
    },
  ])

  // Navigate to the app with longer timeout
  await page.goto('/app', { timeout: 60000, waitUntil: 'networkidle' })

  // Wait for the app shell to be visible
  await expect(page.locator('[data-testid="app-shell"]')).toBeVisible({
    timeout: 30000,
  })

  // Check if new note button exists
  await expect(page.locator('[data-testid="new-note-button"]')).toBeVisible()
})
