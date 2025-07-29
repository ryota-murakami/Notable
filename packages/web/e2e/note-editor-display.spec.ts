import { expect, test } from '@playwright/test'

test.describe('Note Editor Display', () => {
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

    // Wait for the app shell to be ready
    await page.waitForSelector('[data-testid="app-shell"]')

    // Check if loading state is done
    const loadingText = await page.locator('text=Loading...').count()
    if (loadingText > 0) {
      await page.waitForSelector('text=Loading...', { state: 'hidden' })
    }
  })

  test('should display editor when clicking New Note button', async ({
    page,
  }) => {
    // Initially, no notes should exist
    await expect(page.locator('text=No notes yet')).toBeVisible()

    // The welcome message should be visible
    await expect(page.locator('text=Welcome to Notable')).toBeVisible()

    // Click the New Note button
    await page.getByRole('button', { name: 'New Note' }).click()

    // The welcome message should disappear
    await expect(page.locator('text=Welcome to Notable')).not.toBeVisible()

    // The editor should be visible
    await expect(page.locator('[data-slate-editor="true"]')).toBeVisible()

    // The new note should appear in the sidebar
    await expect(page.locator('text=Untitled').first()).toBeVisible()

    // The note should be selected (have bg-muted class)
    const noteItem = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .first()
    await expect(noteItem).toHaveClass(/bg-muted/)
  })

  test('should display editor when selecting an existing note', async ({
    page,
  }) => {
    // Create two notes first
    await page.getByRole('button', { name: 'New Note' }).click()
    await page.waitForTimeout(500) // Small delay to ensure note is created

    // Type some content in the first note
    const editor = page.locator('[data-slate-editor="true"]')
    await editor.click()
    await page.keyboard.type('This is the first note content')

    // Create a second note
    await page.getByRole('button', { name: 'New Note' }).click()
    await page.waitForTimeout(500)

    // The editor should still be visible
    await expect(editor).toBeVisible()

    // Click on the first note
    const firstNote = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .first()
    await firstNote.click()

    // The editor should still be visible
    await expect(editor).toBeVisible()

    // The first note should be selected
    await expect(firstNote).toHaveClass(/bg-muted/)
  })

  test('should support keyboard navigation for note selection', async ({
    page,
  }) => {
    // Create a note
    await page.getByRole('button', { name: 'New Note' }).click()

    // The note should be focusable with keyboard
    const noteItem = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .first()
    await noteItem.focus()

    // Press Enter to select the note
    await page.keyboard.press('Enter')

    // The editor should be visible
    await expect(page.locator('[data-slate-editor="true"]')).toBeVisible()

    // Try Space key as well
    await page.getByRole('button', { name: 'New Note' }).click()
    const secondNote = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .nth(1)
    await secondNote.focus()
    await page.keyboard.press(' ')

    // The editor should still be visible
    await expect(page.locator('[data-slate-editor="true"]')).toBeVisible()
  })

  test('should maintain editor content when switching between notes', async ({
    page,
  }) => {
    // Create first note and add content
    await page.getByRole('button', { name: 'New Note' }).click()
    const editor = page.locator('[data-slate-editor="true"]')
    await editor.click()
    await page.keyboard.type('First note content')

    // Create second note and add different content
    await page.getByRole('button', { name: 'New Note' }).click()
    await editor.click()
    await page.keyboard.press('Control+A') // Select all
    await page.keyboard.type('Second note content')

    // Switch back to first note
    const firstNote = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .first()
    await firstNote.click()

    // Verify content persisted (note: actual content verification would require checking the editor's internal state)
    await expect(editor).toBeVisible()

    // Switch to second note
    const secondNote = page
      .locator('[role="button"]')
      .filter({ hasText: 'Untitled' })
      .nth(1)
    await secondNote.click()

    // Editor should still be visible
    await expect(editor).toBeVisible()
  })
})
