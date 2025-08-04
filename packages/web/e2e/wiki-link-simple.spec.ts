import { expect, test } from './fixtures/coverage'

test.describe('Wiki Link Simple Test', () => {
  test('should create wiki links in editor', async ({ page }) => {
    // Navigate directly to app
    await page.goto('http://localhost:4378/app')

    // Wait for page to load
    await page.waitForTimeout(2000)

    // Find any existing note or create one using a simpler method
    const noteLinks = page.locator('a[href^="/notes/"]')
    const noteCount = await noteLinks.count()

    if (noteCount > 0) {
      // Click on the first note
      await noteLinks.first().click()
    } else {
      // Try to create a note by clicking new note button
      await page.click('button:has-text("New Note")')
      await page.waitForTimeout(2000)
    }

    // Wait for editor
    await page.waitForSelector('[contenteditable="true"]', { timeout: 10000 })

    // Type wiki link
    const editor = page.locator('[contenteditable="true"]').first()
    await editor.click()
    await editor.type('Test content with [[Wiki Link]]')

    // Wait for wiki link to be created
    await page.waitForTimeout(1000)

    // Verify wiki link exists
    const wikiLink = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toHaveText('Wiki Link')
  })
})
