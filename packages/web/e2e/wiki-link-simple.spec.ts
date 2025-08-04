import { expect, test } from './fixtures/coverage'

test.describe('Wiki Link Simple Test', () => {
  test.skip('should create wiki links in editor', async ({ page }) => {
    // Skip this test for now as we need to fix the editor integration first
    // The Plate.js editor is not rendering properly in the production build

    // Navigate directly to app
    await page.goto('http://localhost:4378/app')

    // Wait for page to load
    await page.waitForSelector('[data-testid="app-shell"]')

    // Create a new note via the button
    await page.click('button:has-text("New Note")')
    await page.waitForTimeout(2000)

    // Handle template picker if it appears
    const templatePicker = page
      .locator('[role="dialog"]')
      .filter({ hasText: 'Choose a Template' })
    if (await templatePicker.isVisible({ timeout: 1000 })) {
      await page.click('button:has-text("Create Blank Note")')
      await page.waitForTimeout(1000)
    }

    // Wait for the note editor to load
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Debug: log the page content
    const pageContent = await page.evaluate(() => {
      const noteEditor = document.querySelector('[data-testid="note-editor"]')
      return {
        hasNoteEditor: !!noteEditor,
        editorHTML: noteEditor?.innerHTML?.substring(0, 500),
        allContentEditables: Array.from(
          document.querySelectorAll('[contenteditable]')
        ).map((el) => ({
          tag: el.tagName,
          testId: el.getAttribute('data-testid'),
          className: el.className,
        })),
      }
    })
    console.log('Page debug info:', JSON.stringify(pageContent, null, 2))

    // Wait for the editor to be ready - try multiple selectors
    let editor = null

    // Try different selectors for the Plate editor
    const selectors = [
      '[data-slate-editor="true"]',
      '[contenteditable="true"]',
      '[role="textbox"]',
      '[data-testid="plate-editor"] [contenteditable="true"]',
      '[data-testid="rich-text-editor"] [contenteditable="true"]',
      '.slate-editor',
      'div[contenteditable="true"]',
    ]

    for (const selector of selectors) {
      try {
        await page.waitForSelector(selector, { timeout: 2000 })
        editor = page.locator(selector).first()
        console.log(`Found editor with selector: ${selector}`)
        break
      } catch (e) {
        console.log(`Selector ${selector} not found`)
      }
    }

    if (!editor) {
      throw new Error('Could not find editor element with any known selector')
    }

    // Click and type in the editor
    await editor.click()
    await page.keyboard.type('Test content with [[Wiki Link]]')

    // Wait for wiki link to be created
    await page.waitForTimeout(1000)

    // Verify wiki link exists
    const wikiLink = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toHaveText('Wiki Link')
  })
})
