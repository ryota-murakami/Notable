import { expect, test } from 'playwright-test-coverage'

test.describe('Comprehensive Authentication Tests', () => {
  test.describe('OAuth Authentication', () => {
    test('should display Google OAuth button', async ({ page }) => {
      await page.goto('/auth')

      // Wait for auth UI to load
      await page.waitForLoadState('networkidle')

      // Check for OAuth section
      const oauthSection = page.getByText('or continue with')
      await expect(oauthSection).toBeVisible()

      // Check for Google OAuth button
      const googleButton = page.getByRole('button', { name: /Google/i })
      await expect(googleButton).toBeVisible()
    })

    test('should handle OAuth redirect flow', async ({ page }) => {
      await page.goto('/auth')

      // Mock OAuth response
      await page.route('**/auth/callback**', async (route) => {
        await route.fulfill({
          status: 302,
          headers: {
            Location: '/app',
          },
        })
      })

      // Click Google OAuth button
      const googleButton = page.getByRole('button', { name: /Google/i })
      await googleButton.click()

      // Should redirect to app after OAuth callback
      await expect(page).toHaveURL(/\/app/)
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
      const userMenuButton = page.getByTestId('user-menu-button')
      await userMenuButton.click()

      // Click logout
      const logoutButton = page.getByText('Logout')
      await logoutButton.click()

      // Should redirect to auth page
      await expect(page).toHaveURL('/auth')

      // Cookie should be cleared
      const cookies = await page.context().cookies()
      const authCookie = cookies.find((c) => c.name === 'dev-auth-bypass')
      expect(authCookie).toBeUndefined()
    })

    test('should clear all user data on logout', async ({ page }) => {
      // Set auth and mock user data
      await page.context().addCookies([
        {
          name: 'dev-auth-bypass',
          value: 'true',
          domain: 'localhost',
          path: '/',
        },
      ])

      // Add some local storage data
      await page.goto('/app')
      await page.evaluate(() => {
        localStorage.setItem(
          'user-preferences',
          JSON.stringify({ theme: 'dark' })
        )
        localStorage.setItem('draft-note', 'Test content')
      })

      // Logout
      const userMenuButton = page.getByTestId('user-menu-button')
      await userMenuButton.click()
      await page.getByText('Logout').click()

      // Check local storage is cleared
      const localStorage = await page.evaluate(() => {
        return {
          preferences: localStorage.getItem('user-preferences'),
          draft: localStorage.getItem('draft-note'),
        }
      })

      expect(localStorage.preferences).toBeNull()
      expect(localStorage.draft).toBeNull()
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
    test('should validate email format', async ({ page }) => {
      await page.goto('/auth')

      const emailInput = page.getByPlaceholder('Your email address')
      const passwordInput = page.getByPlaceholder('Your password')
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      // Invalid email
      await emailInput.fill('invalid-email')
      await passwordInput.fill('password123')
      await signInButton.click()

      // Should show error
      await expect(page.getByText(/invalid email/i)).toBeVisible()
    })

    test('should require password', async ({ page }) => {
      await page.goto('/auth')

      const emailInput = page.getByPlaceholder('Your email address')
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      // Only email, no password
      await emailInput.fill('test@example.com')
      await signInButton.click()

      // Should show error
      await expect(page.getByText(/password is required/i)).toBeVisible()
    })
  })

  test.describe('Sign Up Flow', () => {
    test('should navigate to sign up', async ({ page }) => {
      await page.goto('/auth')

      const signUpLink = page.getByRole('link', {
        name: /Don't have an account\? Sign up/i,
      })
      await signUpLink.click()

      // Should show sign up form
      await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible()
    })

    test('should validate sign up form', async ({ page }) => {
      await page.goto('/auth')

      // Navigate to sign up
      await page
        .getByRole('link', { name: /Don't have an account\? Sign up/i })
        .click()

      const emailInput = page.getByPlaceholder('Your email address')
      const passwordInput = page.getByPlaceholder('Your password')
      const signUpButton = page.getByRole('button', { name: 'Sign up' })

      // Test weak password
      await emailInput.fill('newuser@example.com')
      await passwordInput.fill('123')
      await signUpButton.click()

      // Should show password strength error
      await expect(
        page.getByText(/password.*too.*weak|password.*must.*be/i)
      ).toBeVisible()
    })
  })

  test.describe('Password Reset', () => {
    test('should show forgot password link', async ({ page }) => {
      await page.goto('/auth')

      const forgotPasswordLink = page.getByText(/forgot.*password/i)
      await expect(forgotPasswordLink).toBeVisible()
    })

    test('should handle password reset flow', async ({ page }) => {
      await page.goto('/auth')

      const forgotPasswordLink = page.getByText(/forgot.*password/i)
      await forgotPasswordLink.click()

      // Should show reset form
      const emailInput = page.getByPlaceholder('Your email address')
      await expect(emailInput).toBeVisible()

      const resetButton = page.getByRole('button', { name: /reset.*password/i })
      await expect(resetButton).toBeVisible()

      // Submit reset request
      await emailInput.fill('test@example.com')
      await resetButton.click()

      // Should show success message
      await expect(page.getByText(/check.*email|reset.*sent/i)).toBeVisible()
    })
  })

  test.describe('Authentication Errors', () => {
    test('should handle network errors gracefully', async ({ page }) => {
      // Block auth requests
      await page.route('**/auth/**', (route) => route.abort('failed'))

      await page.goto('/auth')

      const emailInput = page.getByPlaceholder('Your email address')
      const passwordInput = page.getByPlaceholder('Your password')
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      await emailInput.fill('test@example.com')
      await passwordInput.fill('password123')
      await signInButton.click()

      // Should show error message
      await expect(
        page.getByText(/network.*error|connection.*failed/i)
      ).toBeVisible()
    })

    test('should handle invalid credentials', async ({ page }) => {
      await page.goto('/auth')

      // Mock auth failure
      await page.route('**/auth/signin', (route) => {
        route.fulfill({
          status: 401,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Invalid credentials' }),
        })
      })

      const emailInput = page.getByPlaceholder('Your email address')
      const passwordInput = page.getByPlaceholder('Your password')
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      await emailInput.fill('test@example.com')
      await passwordInput.fill('wrongpassword')
      await signInButton.click()

      // Should show error
      await expect(
        page.getByText(/invalid.*credentials|wrong.*password/i)
      ).toBeVisible()
    })
  })

  test.describe('Rate Limiting', () => {
    test('should handle rate limiting', async ({ page }) => {
      await page.goto('/auth')

      // Mock rate limit response
      await page.route('**/auth/signin', (route) => {
        route.fulfill({
          status: 429,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Too many requests' }),
        })
      })

      const emailInput = page.getByPlaceholder('Your email address')
      const passwordInput = page.getByPlaceholder('Your password')
      const signInButton = page.getByRole('button', {
        name: 'Sign in',
        exact: true,
      })

      await emailInput.fill('test@example.com')
      await passwordInput.fill('password123')
      await signInButton.click()

      // Should show rate limit message
      await expect(
        page.getByText(/too.*many.*requests|rate.*limit/i)
      ).toBeVisible()
    })
  })
})
