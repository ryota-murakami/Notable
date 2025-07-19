import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check that the page contains expected elements
    await expect(page).toHaveTitle(/Notable/)
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')

    // Test navigation elements exist
    const sidebar = page.locator('[data-testid="sidebar"]')
    await expect(sidebar).toBeVisible()
  })

  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/')

    // Find and click theme toggle
    const themeToggle = page.locator('[data-testid="theme-toggle"]')
    if (await themeToggle.isVisible()) {
      await themeToggle.click()

      // Check that dark mode class is applied
      const html = page.locator('html')
      await expect(html).toHaveClass(/dark/)
    }
  })
})
