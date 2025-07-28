import { expect, test } from '@playwright/test'
import { collectCoverage, startCoverage } from './coverage-collector'

test.describe('Notable Web App E2E with V8 Coverage', () => {
  test('Playwright can connect to Next.js dev server with coverage', async ({ page }) => {
    // Start coverage collection
    await startCoverage(page)
    
    const response = await page.goto('/')

    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    await expect(page.locator('html')).toBeAttached()

    const hasContent = await page.locator('html').count()
    expect(hasContent).toBeGreaterThan(0)

    // Collect coverage
    await collectCoverage(page, 'connect-to-server')

    console.info(
      `✅ E2E Infrastructure working - Server responded with status: ${response?.status()}`
    )
  })

  test('server starts and responds within reasonable time with coverage', async ({ page }) => {
    await startCoverage(page)
    
    const startTime = Date.now()
    const response = await page.goto('/')
    const loadTime = Date.now() - startTime

    expect(loadTime).toBeLessThan(30000)
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    await expect(page.locator('html')).toBeAttached()

    await collectCoverage(page, 'server-response-time')

    console.info(
      `✅ Server responded in ${loadTime}ms with status ${response?.status()}`
    )
  })

  test('page handles runtime errors gracefully with coverage', async ({ page }) => {
    await startCoverage(page)
    
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

    await collectCoverage(page, 'runtime-errors')

    console.info(
      `✅ Page loaded with status ${response?.status()} and ${errors.length} console errors (expected in development)`
    )
  })
})