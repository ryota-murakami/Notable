import { expect, test } from './fixtures/coverage'

test.describe('Command Palette & Keyboard Shortcuts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')

    // Wait for the app to be fully loaded
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('should open command palette with Cmd+K', async ({ page }) => {
    // Open command palette with keyboard shortcut
    await page.keyboard.press('Meta+k')

    // Verify command palette is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(page.locator('input[placeholder*="command"]')).toBeVisible()
  })

  test('should open command palette with Ctrl+K on non-Mac', async ({
    page,
  }) => {
    // Open command palette with Ctrl+K (for Windows/Linux)
    await page.keyboard.press('Control+k')

    // Verify command palette is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(page.locator('input[placeholder*="command"]')).toBeVisible()
  })

  test('should show New Note command in palette', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Look for New Note command
    await expect(page.locator('text="New Note"')).toBeVisible()
    await expect(page.locator('text="Create a new note"')).toBeVisible()
  })

  test('should create new note via command palette', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Click on New Note command
    await page.locator('text="New Note"').click()

    // Verify we're now on a note page
    await expect(page.url()).toMatch(/\/notes\/mock-note-\d+/)

    // Verify the rich text editor is visible
    await expect(page.locator('[data-testid="rich-text-editor"]')).toBeVisible()
  })

  test('should create new note with Cmd+N shortcut', async ({ page }) => {
    // Create new note with keyboard shortcut
    await page.keyboard.press('Meta+n')

    // Verify we're now on a note page
    await expect(page.url()).toMatch(/\/notes\/mock-note-\d+/)

    // Verify the rich text editor is visible
    await expect(page.locator('[data-testid="rich-text-editor"]')).toBeVisible()
  })

  test('should show keyboard shortcuts dialog with Cmd+/', async ({ page }) => {
    // Open keyboard shortcuts dialog
    await page.keyboard.press('Meta+/')

    // Verify dialog is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(page.locator('text="Keyboard Shortcuts"')).toBeVisible()

    // Verify some expected shortcuts are shown
    await expect(page.locator('text="Create new note"')).toBeVisible()
    await expect(page.locator('text="Open command palette"')).toBeVisible()
  })

  test('should close dialogs with Escape key', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')
    await expect(page.locator('[role="dialog"]')).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.locator('[role="dialog"]')).not.toBeVisible()

    // Open keyboard shortcuts
    await page.keyboard.press('Meta+/')
    await expect(page.locator('text="Keyboard Shortcuts"')).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.locator('text="Keyboard Shortcuts"')).not.toBeVisible()
  })

  test('should show theme toggle command', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Look for theme toggle command
    await expect(page.locator('text="Switch Theme"')).toBeVisible()
    await expect(
      page.locator('text="Toggle between light, dark, and system themes"')
    ).toBeVisible()
  })

  test('should show search command', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Look for search command
    await expect(page.locator('text="Search Notes"')).toBeVisible()
  })

  test('should show keyboard shortcuts command', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Look for keyboard shortcuts command
    await expect(page.locator('text="Keyboard Shortcuts"')).toBeVisible()
    await expect(
      page.locator('text="View all available keyboard shortcuts"')
    ).toBeVisible()
  })

  test('should open keyboard shortcuts from command palette', async ({
    page,
  }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Click on keyboard shortcuts command
    await page.locator('text="Keyboard Shortcuts"').click()

    // Verify keyboard shortcuts dialog opens
    await expect(page.locator('text="Speed up your workflow"')).toBeVisible()
    await expect(page.locator('text="General"')).toBeVisible()
    await expect(page.locator('text="Navigation"')).toBeVisible()
  })
})
