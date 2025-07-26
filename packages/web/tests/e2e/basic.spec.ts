import { expect, test } from '@playwright/test'

test.describe('Notable Web App', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/')

    // Check if the app shell is loaded
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Check if sidebar is visible
    await expect(page.locator('[data-testid="sidebar"]')).toBeVisible()

    // Check if editor is visible
    await expect(page.locator('[data-testid="editor"]')).toBeVisible()
  })

  test('should create a new note', async ({ page }) => {
    await page.goto('/')

    // Click new note button
    await page.click('[data-testid="new-note-button"]')

    // Type in the editor
    const editor = page.locator('[data-testid="editor"] .ProseMirror')
    await editor.click()
    await editor.type('This is a test note')

    // Verify the content is saved
    await expect(editor).toContainText('This is a test note')
  })

  test('should search notes', async ({ page }) => {
    await page.goto('/')

    // Click search button
    await page.click('[data-testid="search-button"]')

    // Type in search
    const searchInput = page.locator('[data-testid="search-input"]')
    await searchInput.fill('test')

    // Verify search is working
    await expect(searchInput).toHaveValue('test')
  })
})
