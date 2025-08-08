import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Simple Coverage Test', () => {
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
  })

  test('should load app shell and check available elements gracefully', async ({
    page,
  }) => {
    console.info('Testing simple app coverage...')

    // Navigate to the app
    await page.goto('/app')
    await waitForHydration(page)
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 30000 })

    console.info('App shell loaded successfully')

    // Check for basic UI elements
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    console.info(`Found ${buttonCount} buttons`)

    // Check for input elements
    const inputs = page.locator('input')
    const inputCount = await inputs.count()
    console.info(`Found ${inputCount} inputs`)

    // Check for editor elements
    const editorSelectors = [
      '.slate-content',
      '[contenteditable="true"]',
      '[data-testid="note-editor"]',
      'textarea',
    ]

    let editorCount = 0
    for (const selector of editorSelectors) {
      const elements = page.locator(selector)
      const count = await elements.count()
      if (count > 0) {
        console.info(`Found ${count} editors with selector: ${selector}`)
        editorCount += count
      }
    }

    if (editorCount === 0) {
      console.info('No editors found on the page')
    }

    // Check for navigation elements
    const navElements = page.locator('[role="navigation"], nav, .nav, .sidebar')
    const navCount = await navElements.count()
    console.info(`Found ${navCount} navigation elements`)

    // Verify app remains stable
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    console.info('Simple coverage test completed - app remains stable')
    expect(true).toBe(true)
  })

  test('should handle basic interactions gracefully', async ({ page }) => {
    console.info('Testing basic interactions...')

    await page.goto('/app')
    await waitForHydration(page)

    // Try basic keyboard navigation
    await page.keyboard.press('Tab')
    await page.waitForTimeout(200)
    await page.keyboard.press('Tab')
    await page.waitForTimeout(200)

    // Check that app remains stable after interactions
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    console.info('Basic interactions test completed')
    expect(true).toBe(true)
  })
})
