import { test as base, type Page } from '@playwright/test'

type TestFixtures = {
  isolatedPage: Page
}

/**
 * Custom fixture for isolated testing
 * Provides a page with clean state for each test
 */
export const test = base.extend<TestFixtures>({
  isolatedPage: async ({ page }, use) => {
    // Clear cookies and localStorage before each test
    await page.context().clearCookies()
    await page.evaluate(() => {
      localStorage.clear()
      sessionStorage.clear()
    })

    // Set up test isolation metadata
    await page.evaluate(() => {
      ;(window as any).__TEST_ISOLATION__ = {
        testId: Math.random().toString(36).substring(2),
        timestamp: Date.now(),
      }
    })

    await use(page)

    // Clean up after test
    await page.evaluate(() => {
      localStorage.clear()
      sessionStorage.clear()
    })
  },
})

export { expect } from '@playwright/test'
