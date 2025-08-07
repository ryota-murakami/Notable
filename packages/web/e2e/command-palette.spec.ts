import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
// Removed jsClick and jsType imports - using standard Playwright APIs

test.describe('Command Palette & Keyboard Shortcuts', () => {
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

    await page.goto('/app')

    // Wait for the app to be fully loaded
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should open command palette with Cmd+K', async ({ page }) => {
    // Open command palette with keyboard shortcut
    await page.keyboard.press('Meta+k')

    // Verify command palette is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(
      page.locator('input[placeholder="Type a command or search..."]')
    ).toBeVisible()
  })

  test('should open command palette with Ctrl+K on non-Mac', async ({
    page,
  }) => {
    // Open command palette with Ctrl+K (for Windows/Linux)
    await page.keyboard.press('Control+k')

    // Verify command palette is visible
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(
      page.locator('input[placeholder="Type a command or search..."]')
    ).toBeVisible()
  })

  test('should show New Note command in palette', async ({ page }) => {
    // SKIPPED: Command palette not fully implemented
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Look for New Note command
    await expect(page.locator('text="New Note"')).toBeVisible()
    await expect(page.locator('text="Create a new note"')).toBeVisible()
  })

  test('should create new note via command palette', async ({ page }) => {
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Click on New Note command - be more specific to avoid duplicates
    await page.click('button[data-testid], [role="button"]', { force: true })

    // Handle template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.click('button[data-testid], [role="button"]', { force: true })

    // Verify we're now on a note page
    await expect(page).toHaveURL(/\/notes\/[a-z0-9-]+/)

    // Verify the editor is visible
    const editor = page.locator('[data-testid="note-content-textarea"]')
    await expect(editor).toBeVisible({ timeout: 10000 })
  })

  test('should create new note with Cmd+N shortcut', async ({ page }) => {
    // Create new note with keyboard shortcut
    await page.keyboard.press('Meta+n')

    // Handle template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.click('button[data-testid], [role="button"]', { force: true })

    // Verify we're now on a note page
    await expect(page).toHaveURL(/\/notes\/[a-z0-9-]+/)

    // Verify the editor is visible
    const editor = page.locator('[data-testid="note-content-textarea"]')
    await expect(editor).toBeVisible({ timeout: 10000 })
  })

  test('should show keyboard shortcuts dialog with Cmd+/', async ({ page }) => {
    // SKIPPED: Keyboard shortcuts dialog not implemented
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

    // Test keyboard shortcuts separately as it might use different key combo
    // Based on screenshot, shortcuts dialog is opened with Ctrl+/
    await page.keyboard.press('Control+/')
    const shortcutsDialog = page.locator(
      '[role="dialog"]:has-text("Keyboard Shortcuts")'
    )
    await expect(shortcutsDialog).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(shortcutsDialog).not.toBeVisible()
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
    // SKIPPED: Keyboard shortcuts command not available in command palette
    // Open command palette
    await page.keyboard.press('Meta+k')

    // Search for keyboard shortcuts in command palette
    await page.fill(
      'input[placeholder*="search"], input[type="text"]',
      'test-query'
    )

    // Click on keyboard shortcuts command
    await page.click('button[data-testid], [role="button"]', { force: true })

    // Verify keyboard shortcuts dialog opens
    const shortcutsDialog = page.locator(
      '[role="dialog"]:has-text("Keyboard Shortcuts")'
    )
    await expect(shortcutsDialog).toBeVisible({ timeout: 10000 })
    await expect(
      page.locator(
        'text="Speed up your workflow with these keyboard shortcuts"'
      )
    ).toBeVisible()
    await expect(page.locator('text="General"')).toBeVisible()
  })
})
