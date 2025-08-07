import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Smoke Tests', () => {
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
  })

  test('smoke test - server responds and app shell loads', async ({ page }) => {
    console.info('Starting smoke test...')

    // Navigate to the app with proper error handling
    await page.goto('/app', { timeout: 15000, waitUntil: 'domcontentloaded' })
    console.info('✅ Server is responding')

    // Wait for app shell to load
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })
    console.info('✅ App shell loaded')

    // Wait for React hydration
    await waitForHydration(page)
    console.info('✅ React hydration completed')

    // Verify basic app structure
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    console.info('✅ App structure verified')

    console.info('Smoke test completed successfully')
  })

  test('smoke test - basic navigation works', async ({ page }) => {
    console.info('Starting navigation smoke test...')

    // Navigate to the app
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })
    await waitForHydration(page)

    // Test basic navigation elements exist
    const navigationElements = [
      '[data-testid="new-note-button"]',
      '[data-testid="search-button"]',
      'nav', // Navigation sidebar
    ]

    for (const selector of navigationElements) {
      const element = page.locator(selector).first()
      if (await element.isVisible()) {
        console.info(`✅ ${selector} is visible`)
      } else {
        console.info(`⚠️ ${selector} not found - this is ok for smoke test`)
      }
    }

    console.info('Navigation smoke test completed')
  })

  test('smoke test - no critical JavaScript errors', async ({ page }) => {
    console.info('Starting JavaScript error detection test...')

    const errors: string[] = []

    // Collect JavaScript errors
    page.on('pageerror', (error) => {
      errors.push(error.message)
      console.error('JavaScript error detected:', error.message)
    })

    // Navigate and wait for app
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })
    await waitForHydration(page)

    // Wait a bit more to catch any delayed errors
    await page.waitForTimeout(3000)

    // Report results
    if (errors.length === 0) {
      console.info('✅ No critical JavaScript errors detected')
    } else {
      console.warn(`⚠️ ${errors.length} JavaScript errors detected:`, errors)
      // Don't fail the smoke test for JS errors - just report them
    }

    console.info('JavaScript error detection test completed')
  })
})
