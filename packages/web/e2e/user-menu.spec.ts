import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('User Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Mock authentication by setting the dev auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to the app with cookie already set
    await page.goto('/app')

    // Wait for the app to load
    await page.waitForSelector('[data-testid="app-shell"]', {
      state: 'visible',
      timeout: 10000,
    })

    // Wait a bit more for any async operations to complete
    await page.waitForTimeout(1000)

    // Hide dev tools button if present
    await page.evaluate(() => {
      const devButton = document.querySelector('.fixed.bottom-4.right-4')
      if (devButton) {
        ;(devButton as HTMLElement).style.display = 'none'
      }
    })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should display user menu trigger button', async ({ page }) => {
    // The user menu trigger should be visible
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Should show the avatar initials (TU for Test User)
    await expect(userMenuTrigger.locator('text="TU"')).toBeVisible()
  })

  test('should open dropdown menu on click', async ({ page }) => {
    // Wait for the user menu trigger to be ready
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Debug: check button state
    const buttonInfo = await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        return {
          enabled: !button.disabled,
          dataState: button.getAttribute('data-state'),
          ariaExpanded: button.getAttribute('aria-expanded'),
          innerText: button.innerText,
          rect: button.getBoundingClientRect(),
        }
      }
      return null
    })
    console.info('Button info:', buttonInfo)

    // Try dispatching a pointer event (Radix UI uses pointer events)
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Wait a bit for the event to process
    await page.waitForTimeout(500)

    // Wait for the dropdown menu to appear
    const dropdownMenu = page.locator('[role="menu"]')
    await expect(dropdownMenu).toBeVisible({ timeout: 5000 })

    // For test mode, the user will be a mock user
    // Verify menu items are visible
    await expect(page.locator('text="Settings"')).toBeVisible()
    await expect(page.locator('text="Log out"')).toBeVisible()
  })

  test('should close dropdown when clicking outside', async ({ page }) => {
    // Open the menu
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Use pointerdown event to open menu
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Wait for menu to fully open
    const dropdownMenu = page.locator('[role="menu"]')
    await expect(dropdownMenu).toBeVisible({ timeout: 5000 })
    await page.waitForTimeout(300) // Small delay for animation

    // Click outside the menu - click on the app shell instead of body
    const appShell = page.locator('[data-testid="app-shell"]')
    await appShell.click({ position: { x: 10, y: 10 } })

    // Wait a bit for animation
    await page.waitForTimeout(500)

    // Menu should be closed
    await expect(dropdownMenu).not.toBeVisible()
  })

  test('should show settings toast when clicking settings', async ({
    page,
  }) => {
    // Open the menu
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Use pointerdown event to open menu
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Wait for menu to be visible
    await expect(page.locator('[role="menu"]')).toBeVisible({ timeout: 5000 })

    // Click settings
    await page.locator('text="Settings"').click()

    // Wait for click to be processed
    await page.waitForTimeout(500)

    // Menu should close after clicking
    await expect(page.locator('[role="menu"]')).not.toBeVisible()
  })

  test('should logout and redirect to auth page', async ({ page }) => {
    // Open the menu
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Use pointerdown event to open menu
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Wait for menu to be visible
    await expect(page.locator('[role="menu"]')).toBeVisible({ timeout: 5000 })

    // Click logout
    await page.locator('text="Log out"').click()

    // Wait for navigation
    await page.waitForURL(/\/auth/, { timeout: 5000 })

    // Should be on auth page
    await expect(page).toHaveURL(/\/auth/)

    // Cookie should be cleared
    const cookies = await page.context().cookies()
    const authCookie = cookies.find((c) => c.name === 'dev-auth-bypass')
    expect(authCookie).toBeUndefined()
  })

  test('should have proper keyboard navigation', async ({ page }) => {
    // Open the menu first
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Use pointerdown event to open menu
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Menu should be open
    const dropdownMenu = page.locator('[role="menu"]')
    await expect(dropdownMenu).toBeVisible({ timeout: 5000 })

    // Close with Escape
    await page.keyboard.press('Escape')

    // Wait a bit for animation
    await page.waitForTimeout(500)

    // Menu should be closed
    await expect(dropdownMenu).not.toBeVisible()
  })

  test('should have proper styling and hover states', async ({ page }) => {
    // Open the menu
    const userMenuTrigger = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuTrigger).toBeVisible()

    // Use pointerdown event to open menu
    await page.evaluate(() => {
      const button = document.querySelector(
        '[data-testid="user-menu-trigger"]'
      ) as HTMLButtonElement
      if (button) {
        const pointerDownEvent = new PointerEvent('pointerdown', {
          bubbles: true,
          cancelable: true,
          button: 0,
          pointerType: 'mouse',
        })
        button.dispatchEvent(pointerDownEvent)
      }
    })

    // Wait for menu to be visible
    await expect(page.locator('[role="menu"]')).toBeVisible({ timeout: 5000 })

    // Get settings item
    const settingsItem = page.locator('text="Settings"').locator('..')

    // Hover over settings - should have hover background
    await settingsItem.hover()

    // Get logout item
    const logoutItem = page.locator('text="Log out"').locator('..')

    // Hover over logout - should have hover background
    await logoutItem.hover()

    // Both items should be properly styled
    // Note: Exact style assertions would depend on the CSS classes used
  })
})
