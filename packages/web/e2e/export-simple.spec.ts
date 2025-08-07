import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
// Removed jsClick import - using standard Playwright APIs

test.describe('Simple Export Tests', () => {
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

    // Navigate to app first, then wait for hydration
    await page.goto('/app', { timeout: 30000 })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration after navigation
    await waitForHydration(page)
  })

  test('should display export button in RichTextEditor', async ({ page }) => {
    // App is already loaded in beforeEach
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Click new note button using jsClick to avoid timeouts
    await page.click('$1')

    // Wait for template picker dialog to appear
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible({ timeout: 5000 })

    // Click Blank Note button using jsClick for reliable interaction
    await page.click('$1')

    // Verify template picker closes
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()

    // Wait for navigation
    await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 5000 })

    // Now we should be on a note page with RichTextEditor
    // Check if export button exists
    const exportButton = page.locator('button:has-text("Export")')
    await expect(exportButton).toBeVisible({ timeout: 5000 })

    // Click export button to open dropdown
    await exportButton.click()

    // Check that dropdown opened
    await expect(page.locator('text="Quick Export"')).toBeVisible()
    await expect(page.locator('text="Export as Markdown"')).toBeVisible()
  })

  test('should export as markdown from dropdown', async ({ page }) => {
    // App is already loaded in beforeEach
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Click new note button using jsClick to avoid timeouts
    await page.click('$1')

    // Wait for template picker dialog to appear
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible({ timeout: 5000 })

    // Click Blank Note button using jsClick for reliable interaction
    await page.click('$1')

    // Verify template picker closes
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()

    // Wait for navigation
    await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 5000 })

    // Add some content
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('Test Export Note')

    const editor = page.locator('[data-testid="note-content-textarea"]')
    await editor.click()
    await editor.type('This is test content for export.')

    // Wait for auto-save
    await page.waitForTimeout(1000)

    // Export as markdown
    await page.click('$1')
    await page.click('$1')

    // Wait for download
    const download = await page.waitForEvent('download', { timeout: 5000 })
    expect(download.suggestedFilename()).toContain('.md')
  })
})
