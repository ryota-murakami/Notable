import { test, expect } from '@playwright/test'

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
    expect(response!.status()).toBeLessThan(600) // Any valid HTTP status

    // Verify page loads basic structure
    await expect(page.locator('body')).toBeVisible()

    console.log(
      `✅ E2E Infrastructure working - Server responded with status: ${response!.status()}`,
    )
  })

  test('server starts and responds within timeout', async ({ page }) => {
    // Test that the webServer configuration works properly
    // and that the server starts within the configured timeout

    const startTime = Date.now()
    await page.goto('/')
    const loadTime = Date.now() - startTime

    // Server should respond quickly (under 10 seconds)
    expect(loadTime).toBeLessThan(10000)

    // Basic DOM should be present
    await expect(page.locator('html')).toBeVisible()

    console.log(`✅ Server responded in ${loadTime}ms`)
  })
})
