import { expect, test } from '@playwright/test'

test.describe('Simple Folder Test', () => {
  test('should render folder button', async ({ page }) => {
    await page.goto('http://localhost:4378/app')

    // Wait for app to load
    await page.waitForTimeout(2000)

    // Check if folder section exists
    const folderSection = await page.locator('text=Folders').isVisible()
    console.log('Folder section visible:', folderSection)

    // Check if new folder button exists
    const button = await page
      .locator('[data-testid="new-folder-button"]')
      .isVisible()
    console.log('New folder button visible:', button)

    // Try to click it
    if (button) {
      await page
        .locator('[data-testid="new-folder-button"]')
        .click({ timeout: 2000 })
      console.log('Button clicked')

      // Check if dialog appears
      const dialog = await page.locator('role=dialog').isVisible()
      console.log('Dialog visible:', dialog)
    }
  })
})
