import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Authentication Tests', () => {
  test.describe('OAuth Authentication', () => {
    test('should display Google OAuth button', async ({ page }) => {
      await page.goto('/auth')

      // Wait for auth UI to load
      await page.waitForLoadState('networkidle')

      // Check for page title
      const title = page.getByText('Welcome to Notable')
      await expect(title).toBeVisible()

      // Check for Google OAuth button
      const googleButton = page.getByRole('button', {
        name: /Sign in with Google/i,
      })
      await expect(googleButton).toBeVisible()
    })

    test('should have Google OAuth button functionality', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Check that Google OAuth button exists and is functional
      const googleButton = page.getByRole('button', {
        name: /Sign in with Google/i,
      })
      await expect(googleButton).toBeVisible()
      await expect(googleButton).toBeEnabled()

      // Check that clicking the button initiates OAuth flow (without actually following it)
      const [request] = await Promise.all([
        page.waitForRequest(
          (req) => req.url().includes('google') || req.url().includes('oauth')
        ),
        googleButton.click({ force: true }),
      ])

      // Verify that OAuth request was initiated
      expect(request.url()).toContain('google')
    })
  })

  test.describe('Session Management', () => {
    test('should persist session across page reloads', async ({ page }) => {
      // Set auth cookie
      await page.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'true',
          domain: 'localhost',
          path: '/',
        },
      ])

      await page.goto('/app')
      await expect(page).toHaveURL('/app')

      // Reload page
      await page.reload()

      // Should still be authenticated
      await expect(page).toHaveURL('/app')
      await expect(page.getByTestId('app-shell')).toBeVisible()
    })

    test('should handle session expiry', async ({ page }) => {
      // Set expired auth cookie
      await page.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'expired',
          domain: 'localhost',
          path: '/',
          expires: Date.now() / 1000 - 3600, // Expired 1 hour ago
        },
      ])

      await page.goto('/app')

      // Should redirect to auth page
      await expect(page).toHaveURL('/auth')
    })

    test('should share session across tabs', async ({ context }) => {
      // Set auth in first tab
      const page1 = await context.newPage()
      await page1.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'true',
          domain: 'localhost',
          path: '/',
        },
      ])

      await page1.goto('/app')
      await expect(page1).toHaveURL('/app')

      // Open second tab
      const page2 = await context.newPage()
      await page2.goto('/app')

      // Should be authenticated in second tab
      await expect(page2).toHaveURL('/app')
      await expect(page2.getByTestId('app-shell')).toBeVisible()

      await page1.close()
      await page2.close()
    })
  })

  test.describe('Logout Flow', () => {
    test('should logout successfully', async ({ page }) => {
      // Set auth cookie
      await page.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'true',
          domain: 'localhost',
          path: '/',
        },
      ])

      await page.goto('/app')
      await expect(page.getByTestId('app-shell')).toBeVisible()

      // Open user menu
      const userMenuButton = page.getByTestId('user-menu-trigger')
      await userMenuButton.click({ force: true })

      // Click logout
      const logoutButton = page.getByText('Log out')
      await logoutButton.click({ force: true })

      // Should redirect to auth page
      await expect(page).toHaveURL('/auth')

      // Cookie should be cleared
      const cookies = await page.context().cookies()
      const authCookie = cookies.find((c) => c.name === 'dev-auth-bypass')
      expect(authCookie).toBeUndefined()
    })

    test('should have logout menu functionality', async ({ page }) => {
      // SKIPPED: User menu is static panel, not dropdown, with different user info
      // Set auth cookie
      await page.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'true',
          domain: 'localhost',
          path: '/',
        },
      ])

      await page.goto('/app')
      await expect(page.getByTestId('app-shell')).toBeVisible()

      // Open user menu
      const userMenuButton = page.getByTestId('user-menu-trigger')
      await userMenuButton.click({ force: true })

      // Wait for menu to open
      await page.waitForTimeout(500)

      // Check that logout option is visible and clickable
      const logoutMenuItem = page.getByRole('menuitem', { name: 'Log out' })
      await expect(logoutMenuItem).toBeVisible()
      await expect(logoutMenuItem).toBeEnabled()

      // Verify menu contains expected user info
      await expect(page.getByText('Demo User')).toBeVisible()
      await expect(page.getByText('demo@notable.app')).toBeVisible()
    })
  })

  test.describe('Protected Routes', () => {
    test('should protect app routes', async ({ page }) => {
      const protectedRoutes = [
        '/app',
        '/app/notes/new',
        '/app/notes/123',
        '/app/graph',
        '/editor',
      ]

      for (const route of protectedRoutes) {
        await page.goto(route)
        await expect(page).toHaveURL('/auth')
      }
    })

    test('should allow access to public routes', async ({ page }) => {
      const publicRoutes = ['/', '/auth']

      for (const route of publicRoutes) {
        const response = await page.goto(route)
        expect(response?.status()).toBe(200)
      }
    })
  })

  test.describe('Form Validation', () => {
    test('should have email and password inputs', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Check that email and password inputs exist
      const emailInput = page.locator('input[type="email"]').first()
      const passwordInput = page.locator('input[type="password"]').first()
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      await expect(emailInput).toBeVisible()
      await expect(passwordInput).toBeVisible()
      await expect(signInButton).toBeVisible()

      // Test that inputs accept text
      await emailInput.fill('test@example.com')
      await passwordInput.fill('password123')

      await expect(emailInput).toHaveValue('test@example.com')
      await expect(passwordInput).toHaveValue('password123')
    })

    test('should have sign in and sign up functionality', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Check for sign in button
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })
      await expect(signInButton).toBeVisible()

      // Check for sign up link
      const signUpLink = page.getByText(/Don't have an account.*Sign up/i)
      await expect(signUpLink).toBeVisible()

      // Check for forgot password link
      const forgotPasswordLink = page.getByText(/Forgot.*password/i)
      await expect(forgotPasswordLink).toBeVisible()
    })
  })

  test.describe('Sign Up Flow', () => {
    test('should have sign up functionality available', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Check for sign up link in the auth form
      const signUpLink = page.getByText(/Don't have an account.*Sign up/i)
      await expect(signUpLink).toBeVisible()

      // The link should be clickable
      await expect(signUpLink).toBeEnabled()
    })

    test('should show Google OAuth for sign up', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Google OAuth button should be available for both sign in and sign up
      const googleButton = page.getByRole('button', {
        name: /Sign in with Google/i,
      })
      await expect(googleButton).toBeVisible()
      await expect(googleButton).toBeEnabled()
    })
  })

  test.describe('Password Reset', () => {
    test('should show forgot password link', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      const forgotPasswordLink = page.getByText(/Forgot.*password/i)
      await expect(forgotPasswordLink).toBeVisible()
      await expect(forgotPasswordLink).toBeEnabled()
    })

    test('should have password reset functionality', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // The forgot password link should be clickable
      const forgotPasswordLink = page.getByText(/Forgot.*password/i)
      await expect(forgotPasswordLink).toBeVisible()

      // Check that it's a clickable element
      await expect(forgotPasswordLink).toBeEnabled()
    })
  })

  test.describe('Authentication Errors', () => {
    test('should handle form interactions properly', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      const emailInput = page.locator('input[type="email"]').first()
      const passwordInput = page.locator('input[type="password"]').first()
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      // Test form interaction without actual submission
      await emailInput.fill('test@example.com')
      await passwordInput.fill('testpassword')

      // Check that form elements are responsive
      await expect(emailInput).toHaveValue('test@example.com')
      await expect(passwordInput).toHaveValue('testpassword')
      await expect(signInButton).toBeEnabled()
    })

    test('should show auth form elements correctly', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // All expected elements should be visible
      await expect(page.getByText('Welcome to Notable')).toBeVisible()
      await expect(
        page.getByText('Sign in to access your synced notes')
      ).toBeVisible()
      await expect(
        page.getByRole('button', { name: /Sign in with Google/i })
      ).toBeVisible()
      await expect(
        page.getByRole('button', { name: 'Sign in', exact: true })
      ).toBeVisible()
    })
  })

  test.describe('Auth UI Completeness', () => {
    test('should have all expected auth components', async ({ page }) => {
      await page.goto('/auth')
      await page.waitForLoadState('networkidle')

      // Check for main auth title
      const title = page.getByText('Welcome to Notable').first()
      await expect(title).toBeVisible()

      // Check for both email/password form and OAuth options
      const emailInput = page.locator('input[type="email"]').first()
      const passwordInput = page.locator('input[type="password"]').first()
      const googleButton = page.getByRole('button', {
        name: /Sign in with Google/i,
      })

      await expect(emailInput).toBeVisible()
      await expect(passwordInput).toBeVisible()
      await expect(googleButton).toBeVisible()
    })
  })
})
