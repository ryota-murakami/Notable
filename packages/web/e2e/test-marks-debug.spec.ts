import { expect, test } from '@playwright/test'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Debug Marks Test', () => {
  // SKIPPED: Debug test for rich text marks not applicable to textarea
  test.beforeEach(async ({ page }) => {
    // Set dev auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/notes/new')
    await page.waitForSelector('[data-testid="block-editor"]', {
      timeout: 10000,
    })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('debug text selection and marks', async ({ page }) => {
    const editor = page.locator('[data-testid="block-editor"]')

    // Click into editor
    await editor.click()

    // Type some text
    await editor.type('Test text for marks')

    // Debug: check the HTML structure after typing
    const htmlAfterTyping = await editor.innerHTML()
    console.info('HTML after typing:', htmlAfterTyping)

    // Select all text - try triple click instead
    await editor.click({ clickCount: 3 })

    // Wait a bit for selection
    await page.waitForTimeout(500)

    // Apply bold using keyboard shortcut
    await page.keyboard.press('Control+b')

    // Wait for the mark to be applied
    await page.waitForTimeout(500)

    // Debug: check the HTML structure after applying bold
    const htmlAfterBold = await editor.innerHTML()
    console.info('HTML after bold:', htmlAfterBold)

    // Check if strong element exists
    const strongElements = await page.locator('strong').count()
    console.info('Number of strong elements:', strongElements)

    // If strong exists, check its content
    if (strongElements > 0) {
      const strongContent = await page.locator('strong').first().textContent()
      console.info('Strong element content:', JSON.stringify(strongContent))
      console.info(
        'Strong element inner HTML:',
        await page.locator('strong').first().innerHTML()
      )
    }

    // Check the whole editor text content
    const wholeText = await editor.textContent()
    console.info('Whole editor text:', JSON.stringify(wholeText))

    // Just verify that strong element exists for now
    await expect(page.locator('strong')).toHaveCount(1)
  })

  test('test marks with fresh text', async ({ page }) => {
    const editor = page.locator('[data-testid="block-editor"]')

    // Click into editor
    await editor.click()

    // First apply the mark
    await page.keyboard.press('Control+b')

    // Then type text
    await editor.type('This should be bold')

    // Check if the text is wrapped in strong
    await expect(page.locator('strong')).toContainText('This should be bold')
  })
})
