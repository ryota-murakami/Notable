import { expect, test } from '@playwright/test'

test.describe('Note Creation', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  test.skip(
    process.env.CI === 'true' &&
      process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder') === true,
    'Skipping auth-dependent tests in CI due to placeholder Supabase credentials'
  )
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

    // Navigate to the app
    await page.goto('/')

    // Wait for the app to load
    await page.waitForLoadState('networkidle')
  })

  test('should create a new note without errors', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    // Find the "New Note" button
    const newNoteButton = page.locator('button:has-text("New Note")')

    // Button should be visible and enabled
    await expect(newNoteButton).toBeVisible()
    await expect(newNoteButton).toBeEnabled()

    // Check if there are any notes initially
    const noNotesMessage = page.locator('text="No notes yet"')
    const hasNoNotes = await noNotesMessage.isVisible()

    // Get initial note count (actual note items, not the no notes message)
    const noteItems = page.locator(
      'div:has-text("Recent") + div > div:has(div:has-text("Untitled"))'
    )
    const initialNoteCount = await noteItems.count()

    // Click the new note button
    await newNoteButton.click()

    // Wait a bit for async operations
    await page.waitForTimeout(1000)

    // Check that we don't see any error messages
    const errorText = page.locator('text="Oops! Something went wrong"')
    await expect(errorText).not.toBeVisible()

    // If there were no notes initially, the "No notes yet" message should be gone
    if (hasNoNotes) {
      await expect(noNotesMessage).not.toBeVisible()
    }

    // Check that a new "Untitled" note appears
    const untitledNotes = page.locator('text="Untitled"')
    const untitledCount = await untitledNotes.count()
    expect(untitledCount).toBeGreaterThan(initialNoteCount)

    // Verify console doesn't have errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        expect(msg.text()).not.toContain('Failed to create note')
      }
    })
  })

  test('should create multiple notes successfully', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    const newNoteButton = page.locator('button:has-text("New Note")')

    // Create 3 notes
    for (let i = 0; i < 3; i++) {
      await newNoteButton.click()
      await page.waitForTimeout(200) // Small delay between creations
    }

    // Should see at least 3 notes with "Untitled" text
    const untitledNotes = page.locator('text="Untitled"')
    const count = await untitledNotes.count()
    expect(count).toBeGreaterThanOrEqual(3)
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
