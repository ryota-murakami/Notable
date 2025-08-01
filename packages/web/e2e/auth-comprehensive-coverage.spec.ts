import { expect, test } from './fixtures/coverage'

test.describe('Authentication Coverage Tests', () => {
  test('complete login flow with all edge cases', async ({ page }) => {
    await page.goto('/auth')

    // Test page title and metadata
    await expect(page).toHaveTitle(/Notable/)

    // Test login form elements
    await expect(page.locator('h2')).toContainText('Welcome to Notable')

    // Test OAuth providers
    const googleButton = page.locator(
      'button:has-text("Google"), button:has-text("Continue with Google")'
    )
    await expect(googleButton).toBeVisible()

    // Test email input validation
    const emailInput = page.locator(
      'input[type="email"], input[name="email"], input[placeholder*="email" i]'
    )
    if (await emailInput.isVisible()) {
      // Test empty email
      await emailInput.fill('')
      await emailInput.blur()

      // Test invalid email
      await emailInput.fill('invalid-email')
      await emailInput.blur()

      // Test valid email
      await emailInput.fill('test@example.com')
    }

    // Test password input if visible
    const passwordInput = page.locator(
      'input[type="password"], input[name="password"]'
    )
    if (await passwordInput.isVisible()) {
      // Test empty password
      await passwordInput.fill('')
      await passwordInput.blur()

      // Test short password
      await passwordInput.fill('123')
      await passwordInput.blur()

      // Test valid password
      await passwordInput.fill('ValidPassword123!')
    }

    // Test remember me checkbox if present
    const rememberMe = page.locator(
      'input[type="checkbox"][name*="remember"], label:has-text("Remember me")'
    )
    if (await rememberMe.isVisible()) {
      await rememberMe.click()
    }

    // Test forgot password link
    const forgotPassword = page.locator(
      'a:has-text("Forgot password"), button:has-text("Forgot password")'
    )
    if (await forgotPassword.isVisible()) {
      await forgotPassword.click()
      await page.goBack()
    }

    // Test sign up link
    const signUpLink = page.locator(
      'a:has-text("Sign up"), a:has-text("Create account"), button:has-text("Sign up")'
    )
    if (await signUpLink.isVisible()) {
      const href = await signUpLink.getAttribute('href')
      expect(href).toBeTruthy()
    }
  })

  test('authenticated user menu interactions', async ({ page }) => {
    // Set auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/app')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test user menu button (user-menu.tsx uses data-testid="user-menu-trigger")
    const userMenuButton = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuButton).toBeVisible()

    // Open user menu
    await userMenuButton.click()

    // Test menu items - user-menu.tsx only has Settings and Log out
    await expect(page.locator('text=Settings')).toBeVisible()
    await expect(page.locator('text=Log out')).toBeVisible()

    // Close menu by pressing Escape
    await page.keyboard.press('Escape')

    // Verify menu closed
    await expect(page.locator('text=Settings')).not.toBeVisible()
  })

  test('sign out flow and redirect', async ({ page }) => {
    // Set auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/app')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Open user menu
    const userMenuButton = page.locator('[data-testid="user-menu-trigger"]')
    await userMenuButton.click()

    // Click sign out
    const signOutButton = page.locator('text=Log out')
    await signOutButton.click()

    // Should redirect to auth page
    await expect(page).toHaveURL(/\/auth/)

    // Verify logged out state
    await expect(page.locator('h2')).toContainText('Welcome to Notable')
  })

  test('protected route redirects', async ({ page }) => {
    // Try to access protected routes without auth
    const protectedRoutes = ['/app', '/notes/123', '/settings', '/profile']

    for (const route of protectedRoutes) {
      await page.goto(route)

      // Should redirect to auth
      await expect(page).toHaveURL(/\/auth/)

      // Verify auth page loaded
      await expect(page.locator('h2')).toContainText('Welcome to Notable')
    }
  })

  test('auth persistence and session management', async ({ page, context }) => {
    // Set auth cookie
    await context.addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // First visit - should be authenticated
    await page.goto('/app')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Reload page - should remain authenticated
    await page.reload()
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // New page in same context - should be authenticated
    const newPage = await context.newPage()
    await newPage.goto('/app')
    await expect(newPage.locator('[data-testid="app-shell"]')).toBeVisible()
    await newPage.close()

    // Clear cookies - should be logged out
    await context.clearCookies()
    await page.reload()
    await expect(page).toHaveURL(/\/auth/)
  })

  test('user profile display and avatar', async ({ page }) => {
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/app')

    // Check user menu button shows initials
    const userMenuButton = page.locator('[data-testid="user-menu-trigger"]')
    await expect(userMenuButton).toBeVisible()

    // Open menu to see user info
    await userMenuButton.click()

    // The user menu shows user email in the dropdown
    const emailElement = page.locator('.text-xs.text-muted-foreground')
    if (await emailElement.isVisible()) {
      const email = await emailElement.textContent()
      expect(email).toBeTruthy()
    }

    // Close menu
    await page.keyboard.press('Escape')
  })

  test('keyboard shortcuts for user menu', async ({ page }) => {
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/app')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test keyboard navigation
    const userMenuButton = page.locator('[data-testid="user-menu-trigger"]')

    // Focus user menu button
    await userMenuButton.focus()

    // Open with Enter key
    await page.keyboard.press('Enter')

    // Verify menu opened
    await expect(page.locator('text=Settings')).toBeVisible()

    // Navigate with arrow keys
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowUp')

    // Close with Escape
    await page.keyboard.press('Escape')

    // Verify menu closed
    await expect(page.locator('text=Settings')).not.toBeVisible()
  })

  test('error handling for auth failures', async ({ page }) => {
    await page.goto('/auth')

    // Intercept auth API calls
    await page.route('**/auth/**', (route) => {
      route.fulfill({
        status: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      })
    })

    // Try to login
    const emailInput = page.locator('input[type="email"], input[name="email"]')
    const passwordInput = page.locator(
      'input[type="password"], input[name="password"]'
    )
    const submitButton = page
      .locator('button[type="submit"]')
      .filter({ hasText: 'Sign in' })

    if (
      (await emailInput.isVisible()) &&
      (await passwordInput.isVisible()) &&
      (await submitButton.isVisible())
    ) {
      await emailInput.fill('test@example.com')
      await passwordInput.fill('password123')
      await submitButton.click()

      // Should show error message
      await expect(page.locator('text=/error|failed|invalid/i')).toBeVisible({
        timeout: 10000,
      })
    }
  })
})
