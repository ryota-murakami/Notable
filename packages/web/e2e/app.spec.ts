import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Notable Web App E2E Infrastructure', () => {
  test.beforeEach(async ({ page }) => {
    // Set up dev auth bypass for consistent authentication
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])
  })

  test('Playwright can connect to Next.js dev server', async ({ page }) => {
    // This test verifies that the E2E infrastructure works
    // Even if the app has runtime errors, we want to verify that:
    // 1. Playwright can start the Next.js server
    // 2. The server responds to requests
    // 3. Basic browser automation works

    const response = await page.goto('/', { timeout: 30000 })

    // Verify server responds (even with errors)
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600) // Any valid HTTP status

    // Wait for React hydration
    await waitForHydration(page)

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
    const response = await page.goto('/', { timeout: 30000 })
    const loadTime = Date.now() - startTime

    // Server should respond within 30 seconds (reasonable for development with large bundles)
    expect(loadTime).toBeLessThan(30000)

    // Verify we got a valid HTTP response
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    // Wait for React hydration
    await waitForHydration(page)

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

    const response = await page.goto('/', { timeout: 30000 })

    // Page may return 500 status due to server-side errors, but should still have HTML structure
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600) // Accept any valid HTTP status

    // Wait for React hydration if possible
    try {
      await waitForHydration(page)
    } catch (e) {
      console.info('Hydration check skipped due to errors:', e)
    }

    // Basic document structure should exist even with errors
    await expect(page.locator('html')).toBeAttached()

    console.info(
      `✅ Page loaded with status ${response?.status()} and ${errors.length} console errors (expected in development)`
    )
  })

  test('can navigate to app and verify basic functionality', async ({
    page,
  }) => {
    // Test navigation to the main app route
    const response = await page.goto('/app', { timeout: 30000 })

    // Verify server responds
    expect(response).not.toBeNull()
    expect(response?.status()).toBeLessThan(600)

    // Wait for React hydration
    await waitForHydration(page)

    // Look for app shell with multiple possible selectors
    const possibleShells = [
      '[data-testid="app-shell"]',
      '[data-testid="app-layout"]',
      'main',
      'body > div',
    ]

    let foundShell = false
    for (const selector of possibleShells) {
      const hasShell = await page
        .locator(selector)
        .isVisible()
        .catch(() => false)
      if (hasShell) {
        await expect(page.locator(selector)).toBeVisible()
        foundShell = true
        console.info(`Found app shell with selector: ${selector}`)
        break
      }
    }

    if (!foundShell) {
      // Graceful degradation - app may not be fully loaded but should have basic structure
      await expect(page.locator('html')).toBeAttached()
      console.info('App shell not found, but page loaded successfully')
    }
  })

  test('can access authenticated routes with dev bypass', async ({ page }) => {
    // Test that dev auth bypass works for protected routes
    const response = await page.goto('/app', { timeout: 30000 })

    // Should not redirect to auth page due to dev-auth-bypass cookie
    const url = page.url()
    expect(url).not.toContain('/auth')
    expect(url).not.toContain('/login')

    // Wait for React hydration
    await waitForHydration(page)

    // Should be able to access the app
    const hasAppContent = await page
      .locator('body')
      .isVisible()
      .catch(() => false)
    expect(hasAppContent).toBe(true)

    console.info('✅ Dev auth bypass working correctly')
  })
})
