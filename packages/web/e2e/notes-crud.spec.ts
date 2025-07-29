import { test, expect } from '@playwright/test'

test.describe('Notes CRUD Operations', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('/')

    // Wait for the shell to load
    await expect(page.getByTestId('app-shell')).toBeVisible()
  })

  test('should create a new note', async ({ page }) => {
    console.info('Testing note creation')

    // Click the "New Note" button
    await page.getByRole('button', { name: 'New Note' }).click()

    // Wait for success toast or note to appear in the list
    await expect
      .soft(page.locator('text=Note created'))
      .toBeVisible({ timeout: 5000 })

    // Verify that a new note appears in the recent notes list
    const noteItems = page.locator(
      '[class*="space-y-1"] > div:has([class*="text-sm font-medium"])'
    )
    await expect(noteItems).toHaveCount(1)

    // Verify the note has the default title
    await expect(
      noteItems.first().locator('[class*="text-sm font-medium"]')
    ).toContainText('Untitled')
  })

  test('should display multiple created notes', async ({ page }) => {
    console.info('Testing multiple note creation')

    // Create first note
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect
      .soft(page.locator('text=Note created'))
      .toBeVisible({ timeout: 5000 })

    // Create second note
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect
      .soft(page.locator('text=Note created'))
      .toBeVisible({ timeout: 5000 })

    // Verify that both notes appear in the list
    const noteItems = page.locator(
      '[class*="space-y-1"] > div:has([class*="text-sm font-medium"])'
    )
    await expect(noteItems).toHaveCount(2)

    // Verify both have the default title
    for (let i = 0; i < 2; i++) {
      await expect(
        noteItems.nth(i).locator('[class*="text-sm font-medium"]')
      ).toContainText('Untitled')
    }
  })

  test('should show loading state when notes are being fetched', async ({
    page,
  }) => {
    console.info('Testing notes loading state')

    // The loading state might be too fast to catch in normal conditions
    // But we can verify the structure exists
    const recentSection = page.locator('text=Recent').locator('..')
    await expect(recentSection).toBeVisible()

    // Either loading text or actual notes should be visible
    const loadingOrNotes = page
      .locator(
        'text=Loading notes..., text=No notes yet, [class*="text-sm font-medium"]'
      )
      .first()
    await expect(loadingOrNotes).toBeVisible()
  })

  test('should display empty state when no notes exist', async ({ page }) => {
    console.info('Testing empty notes state')

    // Wait for the app to load and check for empty state
    await expect(
      page.locator('text=No notes yet. Create your first note to get started.')
    ).toBeVisible()
  })

  test('should show note creation date in the note list', async ({ page }) => {
    console.info('Testing note date display')

    // Create a note
    await page.getByRole('button', { name: 'New Note' }).click()
    await expect
      .soft(page.locator('text=Note created'))
      .toBeVisible({ timeout: 5000 })

    // Verify that the note shows a date
    const noteItem = page
      .locator('[class*="space-y-1"] > div:has([class*="text-sm font-medium"])')
      .first()
    const dateElement = noteItem.locator(
      '[class*="text-xs text-muted-foreground"]'
    )
    await expect(dateElement).toBeVisible()

    // Verify it contains a date (basic format check)
    const dateText = await dateElement.textContent()
    expect(dateText).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/)
  })

  test('should handle note creation errors gracefully', async ({ page }) => {
    console.info('Testing note creation error handling')

    // Mock a network error for note creation
    await page.route('/api/notes', (route) => {
      if (route.request().method() === 'POST') {
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Internal server error' }),
        })
      } else {
        route.continue()
      }
    })

    // Try to create a note
    await page.getByRole('button', { name: 'New Note' }).click()

    // Should show error message
    await expect(page.locator('text=Error creating note')).toBeVisible({
      timeout: 5000,
    })

    // No note should be added to the list
    await expect(
      page.locator('text=No notes yet. Create your first note to get started.')
    ).toBeVisible()
  })

  test('should handle network errors when fetching notes', async ({ page }) => {
    console.info('Testing notes fetch error handling')

    // Mock a network error for fetching notes
    await page.route('/api/notes*', (route) => {
      if (route.request().method() === 'GET') {
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Internal server error' }),
        })
      } else {
        route.continue()
      }
    })

    // Reload the page to trigger notes fetch
    await page.reload()
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Should show error toast
    await expect(page.locator('text=Error fetching notes')).toBeVisible({
      timeout: 5000,
    })
  })
})
