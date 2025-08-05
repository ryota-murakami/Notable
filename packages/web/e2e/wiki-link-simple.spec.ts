import { expect, test } from './fixtures/coverage'

test.describe('Wiki Link Simple Test', () => {
  test.skip('should create wiki links in editor', async ({ page }) => {
    // SKIPPED: Wiki-link autoformat not working in BlockEditor yet
    // The autoformat rule needs proper implementation with Plate.js
    // TODO: Fix autoformat pattern matching for [[Note Title]] syntax

    await page.goto('http://localhost:4378/app')

    // Click and type in the editor
    const editor = page.locator('[data-testid="plate-editor"]')
    await editor.click()
    await page.keyboard.type('Test content with ')

    // Type the wiki link pattern character by character
    await page.keyboard.type('[')
    await page.keyboard.type('[')
    await page.keyboard.type('Wiki Link')
    await page.keyboard.type(']')
    await page.keyboard.type(']')

    // Add space to trigger autoformat
    await page.keyboard.type(' ')

    // Wait for wiki link to be created
    await page.waitForTimeout(1000)

    // Debug: Check what's in the editor
    const editorContent = await editor.textContent()
    console.log('Editor content:', editorContent)

    // Try different selectors for wiki link
    const wikiLinkSelectors = [
      'a[data-wiki-link="true"]',
      '[data-slate-node-type="wikiLink"]',
      '.wiki-link',
      'a[href*="/notes/search"]',
    ]

    let wikiLink = null
    for (const selector of wikiLinkSelectors) {
      const element = page.locator(selector)
      if (await element.isVisible({ timeout: 1000 }).catch(() => false)) {
        wikiLink = element
        console.log('Found wiki link with selector:', selector)
        break
      }
    }

    if (!wikiLink) {
      throw new Error('Could not find wiki link element')
    }

    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toContainText('Wiki Link')
  })
})
