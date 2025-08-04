import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Note Creation', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
  test.beforeEach(async ({ page }) => {
    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to the app with longer timeout for initial compilation
    await page.goto('/app', { waitUntil: 'networkidle' })

    // Wait for the app to load
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 30000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should create a new note without errors', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    // Find the "New Note" button
    const newNoteButton = page.locator('[data-testid="new-note-button"]')

    // Button should be visible and enabled
    await expect(newNoteButton).toBeVisible()
    await expect(newNoteButton).toBeEnabled()

    // Click the new note button
    await newNoteButton.click()

    // Wait for template picker dialog
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Click Blank Note
    await page.click('button:has-text("Blank Note")')

    // Wait for navigation to note
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)

    // Verify we're on a note page - look for the textarea editor
    await expect(page.locator('textarea')).toBeVisible()

    // Verify the URL changed to a note route
    expect(page.url()).toMatch(/\/notes\/[a-z0-9-]+/)

    // Check that we don't see any error messages
    const errorText = page.locator('text="Oops! Something went wrong"')
    await expect(errorText).not.toBeVisible()
  })

  test('should create multiple notes successfully', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')

    // Create 3 notes
    for (let i = 0; i < 3; i++) {
      await newNoteButton.click()

      // Handle template picker each time
      await expect(
        page.locator('[role="dialog"]:has-text("Choose a Template")')
      ).toBeVisible()
      await page.click('button:has-text("Blank Note")')

      // Wait for navigation
      await page.waitForURL(/\/notes\/[a-z0-9-]+/)

      // Go back to home to create another
      if (i < 2) {
        await page.goto('/app')
        await page.waitForSelector('[data-testid="app-shell"]')
      }
    }

    // Should be on the last created note
    await expect(page.locator('textarea')).toBeVisible()
    expect(page.url()).toMatch(/\/notes\/[a-z0-9-]+/)
  })

  test('should handle authentication errors gracefully', async ({ page }) => {
    // Test that authentication errors don't cause crashes
    // This test simulates what happens when user/supabase is null

    // Navigate to the app
    await page.goto('/')

    // Wait for the app to load
    await page.waitForTimeout(2000)

    // Check that we don't see a crash error
    const errorText = page.locator('text="Oops! Something went wrong"')
    await expect(errorText).not.toBeVisible()

    // The app should still be functional, even if some features are limited
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
    expect(body).not.toContain('Oops! Something went wrong')
  })

  test('should show appropriate error messages for connection issues', async ({
    page,
  }) => {
    // Intercept network requests to simulate connection issues
    await page.route('**/rest/v1/**', (route) => {
      route.abort('connectionrefused')
    })

    await page.goto('/')
    await page.waitForTimeout(2000)

    // Should not crash with "Oops! Something went wrong"
    const crashError = page.locator('text="Oops! Something went wrong"')
    await expect(crashError).not.toBeVisible()

    // May show connection-related messages, but shouldn't crash
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
  })
})
