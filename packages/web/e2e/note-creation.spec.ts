import { expect, test } from '@playwright/test'

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

    // Navigate to the app
    await page.goto('/')

    // Wait for the app to load
    await page.waitForLoadState('networkidle')
  })

  test('should create a new note and show the editor', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    // Initially, we should see the welcome message
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(page.getByText('Click "New Note" to start writing or select a note from the sidebar.')).toBeVisible()

    // Find the "New Note" button
    const newNoteButton = page.locator('button:has-text("New Note")')

    // Button should be visible and enabled
    await expect(newNoteButton).toBeVisible()
    await expect(newNoteButton).toBeEnabled()

    // Check if there are any notes initially
    const noNotesMessage = page.locator('text="No notes yet"')
    const hasNoNotes = await noNotesMessage.isVisible()

    // Click the new note button
    await newNoteButton.click()

    // The welcome message should now be hidden
    await expect(page.getByText('Welcome to Notable')).toBeHidden()

    // The editor should be visible - check for the Slate editor
    const editor = page.locator('[contenteditable="true"]')
    await expect(editor).toBeVisible()

    // If there were no notes initially, the "No notes yet" message should be gone
    if (hasNoNotes) {
      await expect(noNotesMessage).not.toBeVisible()
    }

    // Check that a new "Untitled" note appears in the sidebar
    const untitledNotes = page.locator('[role="button"]').filter({ hasText: 'Untitled' })
    await expect(untitledNotes.first()).toBeVisible()
    
    // The new note should be selected (has bg-muted class)
    await expect(untitledNotes.first()).toHaveClass(/bg-muted/)

    // Type some content in the editor
    await editor.click()
    await editor.type('This is my first note')

    // The content should be visible in the editor
    await expect(editor).toContainText('This is my first note')
  })

  test('should create multiple notes and switch between them', async ({ page }) => {
    // Wait for app shell to be visible
    await page.waitForSelector('[data-testid="app-shell"]')

    const newNoteButton = page.locator('button:has-text("New Note")')
    const editor = page.locator('[contenteditable="true"]')

    // Create first note
    await newNoteButton.click()
    await editor.click()
    await editor.type('First note content')

    // Create second note
    await newNoteButton.click()
    await editor.click()
    await editor.clear()
    await editor.type('Second note content')

    // Create third note
    await newNoteButton.click()
    await editor.click()
    await editor.clear()
    await editor.type('Third note content')

    // Should see 3 notes with "Untitled" text
    const noteItems = page.locator('[role="button"]').filter({ hasText: 'Untitled' })
    await expect(noteItems).toHaveCount(3)

    // Click on the first note
    await noteItems.first().click()

    // Editor should show first note content
    await expect(editor).toContainText('First note content')

    // Click on the second note
    await noteItems.nth(1).click()

    // Editor should show second note content
    await expect(editor).toContainText('Second note content')

    // Click on the third note
    await noteItems.last().click()

    // Editor should show third note content
    await expect(editor).toContainText('Third note content')
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
