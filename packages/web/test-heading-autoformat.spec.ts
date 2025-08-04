import { expect, test } from '@playwright/test'

test.describe('Heading Autoformat', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/editor-test')
    await page.waitForLoadState('networkidle')
  })

  test('should create h1 with # space', async ({ page }) => {
    const editor = page.locator('[data-testid="block-editor"]')

    await editor.click()
    await editor.type('# ')
    await editor.type('Heading 1')

    await expect(page.locator('h1')).toContainText('Heading 1')
  })
})
