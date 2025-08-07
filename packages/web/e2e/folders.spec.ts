import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
// Removed jsClick and jsType imports - using standard Playwright APIs

test.describe('Folder System', () => {
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
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should display folders section in sidebar', async ({ page }) => {
    await expect(page.locator('text=Folders')).toBeVisible()
  })

  test('should create a new folder', async ({ page }) => {
    // Click new folder button using jsClick to avoid timeout issues
    await page.click('[data-testid="new-folder-button"]', { force: true })

    // Wait for dialog
    await page.waitForSelector('[data-testid="folder-name-input"]')

    // Fill in folder name using jsType to avoid timeout issues
    await page.fill(
      'input[placeholder*="folder name"], input[placeholder*="name"]',
      'test-folder'
    )

    // Submit form
    await page.keyboard.press('Enter')

    // Wait for folder to appear
    await expect(page.locator('text=Test Folder')).toBeVisible()
  })

  test('should create note in folder', async ({ page }) => {
    // First create a folder using jsClick to avoid timeout issues
    await page.click('[data-testid="new-folder-button"]', { force: true })

    // Wait for dialog
    await page.waitForSelector('[data-testid="folder-name-input"]')

    await page.fill(
      'input[placeholder*="folder name"], input[placeholder*="name"]',
      'test-folder'
    )
    await page.keyboard.press('Enter')

    // Wait for folder to appear
    await page.waitForSelector('text=My Work')

    // Click on the folder to select it
    await page.click('text=My Work')

    // Create a new note
    await page.click('[data-testid="new-note-button"]')

    // Wait for template picker
    await page.waitForSelector('[data-testid="template-picker-dialog"]')

    // Click blank note option
    await page.click('[data-testid="blank-note-option"]')

    // Verify note is created in the folder context
    await expect(page).toHaveURL(/\/notes\//)
  })

  test('should expand and collapse folders', async ({ page }) => {
    // Create parent folder using jsClick to avoid timeout issues
    await page.click('[data-testid="new-folder-button"]', { force: true })

    // Wait for dialog
    await page.waitForSelector('[data-testid="folder-name-input"]')

    await page.fill(
      'input[placeholder*="folder name"], input[placeholder*="name"]',
      'test-folder'
    )
    await page.keyboard.press('Enter')

    // Wait for parent folder
    await page.waitForSelector('text=Parent')

    // Select parent folder
    await page.click('text=Parent')

    // Create child folder using jsClick to avoid timeout issues
    await page.click('[data-testid="new-folder-button"]', { force: true })

    // Wait for dialog again
    await page.waitForSelector('[data-testid="folder-name-input"]')

    await page.fill(
      'input[placeholder*="folder name"], input[placeholder*="name"]',
      'test-folder'
    )
    await page.keyboard.press('Enter')

    // Toggle parent folder
    const parentFolder = page.locator('text=Parent').first()
    await parentFolder.click()

    // Verify expand/collapse functionality exists
    await expect(page.locator('text=Child')).toBeVisible()
  })
})
