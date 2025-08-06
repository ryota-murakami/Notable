import { expect, test } from './fixtures/coverage'

test.describe('Basic Editor Test', () => {
  test('should be able to type text in editor', async ({ page }) => {
    // Navigate directly to new note page
    await page.goto('http://localhost:4378/notes/new')

    // Wait for the editor to be ready
    await page.waitForSelector('[contenteditable="true"]', { timeout: 5000 })
    const editor = page.locator('[contenteditable="true"]').first()

    // Click and type in the editor
    await editor.click({ force: true })
    await page.keyboard.type('This is a test note with some content')

    // Verify text was typed
    const content = await editor.textContent()
    expect(content).toContain('This is a test note with some content')
  })

  test('should support basic formatting', async ({ page }) => {
    // Navigate directly to new note page
    await page.goto('http://localhost:4378/notes/new')

    // Wait for the editor to be ready
    await page.waitForSelector('[contenteditable="true"]', { timeout: 5000 })
    const editor = page.locator('[contenteditable="true"]').first()

    // Type heading with markdown syntax
    await editor.click({ force: true })
    await page.keyboard.type('# This is a heading')
    await page.keyboard.press('Enter')
    await page.keyboard.type('Regular text here')

    // Verify content
    const content = await editor.textContent()
    expect(content).toContain('This is a heading')
    expect(content).toContain('Regular text here')
  })
})
