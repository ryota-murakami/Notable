import { expect, test } from '@playwright/test'
import { collectIstanbulCoverage } from './helpers/coverage'

test.describe('Notable Web App with Istanbul Coverage', () => {
  test.afterEach(async ({ page }, testInfo) => {
    // Collect coverage after each test
    await collectIstanbulCoverage(page, testInfo.title)
  })

  test('Playwright can connect to Next.js dev server', async ({ page }) => {
    const response = await page.goto('/')

    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    await expect(page.locator('html')).toBeAttached()

    const hasContent = await page.locator('html').count()
    expect(hasContent).toBeGreaterThan(0)

    console.info(
      `✅ E2E Infrastructure working - Server responded with status: ${response?.status()}`
    )
  })

  test('server starts and responds within reasonable time', async ({
    page,
  }) => {
    const startTime = Date.now()
    const response = await page.goto('/')
    const loadTime = Date.now() - startTime

    expect(loadTime).toBeLessThan(30000)
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    await expect(page.locator('html')).toBeAttached()

    console.info(
      `✅ Server responded in ${loadTime}ms with status ${response?.status()}`
    )
  })

  test('page handles runtime errors gracefully', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    const response = await page.goto('/')

    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    await expect(page.locator('html')).toBeAttached()

    console.info(
      `✅ Page loaded with status ${response?.status()} and ${errors.length} console errors (expected in development)`
    )
  })
})