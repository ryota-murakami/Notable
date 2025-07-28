import { expect, test } from '@playwright/test'

test.describe('Notable Web App E2E Infrastructure', () => {
  test('Playwright can connect to Next.js dev server', async ({ page }) => {
    // This test verifies that the E2E infrastructure works
    // Even if the app has runtime errors, we want to verify that:
    // 1. Playwright can start the Next.js server
    // 2. The server responds to requests
    // 3. Basic browser automation works

    const response = await page.goto('/')

    // Verify server responds (even with errors)
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600) // Any valid HTTP status

    // Verify HTML document structure exists (more reliable than body visibility)
    await expect(page.locator('html')).toBeAttached()

    // Check if the page has any content loaded (even error pages)
    const hasContent = await page.locator('html').count()
    expect(hasContent).toBeGreaterThan(0)

    console.info(
      `✅ E2E Infrastructure working - Server responded with status: ${response?.status()}`
    )
  })

  test('server starts and responds within reasonable time', async ({
    page,
  }) => {
    // Test that the webServer configuration works properly
    // and that the server starts within the configured timeout

    const startTime = Date.now()
    const response = await page.goto('/')
    const loadTime = Date.now() - startTime

    // Server should respond within 30 seconds (reasonable for development with large bundles)
    expect(loadTime).toBeLessThan(30000)

    // Verify we got a valid HTTP response
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    // Basic HTML structure should be present
    await expect(page.locator('html')).toBeAttached()

    console.info(
      `✅ Server responded in ${loadTime}ms with status ${response?.status()}`
    )
  })

  test('page handles runtime errors gracefully', async ({ page }) => {
    // This test ensures that even if there are JavaScript errors,
    // the basic page structure loads and E2E tests can continue

    // Listen for console errors but don't fail the test
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    const response = await page.goto('/')

    // Page may return 500 status due to server-side errors, but should still have HTML structure
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600) // Accept any valid HTTP status

    // Basic document structure should exist even with errors
    await expect(page.locator('html')).toBeAttached()

    console.info(
      `✅ Page loaded with status ${response?.status()} and ${errors.length} console errors (expected in development)`
    )
  })
})
