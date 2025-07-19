import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/signin')
  })

  test('should display sign in page', async ({ page }) => {
    await expect(page).toHaveTitle(/Sign In/)
    await expect(page.getByRole('heading', { name: /sign in/i })).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/password/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible()
  })

  test('should show validation errors for empty fields', async ({ page }) => {
    await page.getByRole('button', { name: /sign in/i }).click()

    await expect(page.getByText(/email is required/i)).toBeVisible()
    await expect(page.getByText(/password is required/i)).toBeVisible()
  })

  test('should show error for invalid email', async ({ page }) => {
    await page.getByLabel(/email/i).fill('invalid-email')
    await page.getByLabel(/password/i).fill('password123')
    await page.getByRole('button', { name: /sign in/i }).click()

    await expect(page.getByText(/please enter a valid email/i)).toBeVisible()
  })

  test('should navigate to sign up page', async ({ page }) => {
    await page.getByText(/don't have an account/i).click()

    await expect(page).toHaveURL('/auth/signup')
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible()
  })

  test('should sign in with valid credentials', async ({ page }) => {
    // This test requires test user credentials to be set up
    const testEmail = process.env.TEST_USER_EMAIL || 'test@example.com'
    const testPassword = process.env.TEST_USER_PASSWORD || 'testpassword123'

    await page.getByLabel(/email/i).fill(testEmail)
    await page.getByLabel(/password/i).fill(testPassword)
    await page.getByRole('button', { name: /sign in/i }).click()

    // Should redirect to dashboard after successful login
    await expect(page).toHaveURL('/dashboard', { timeout: 10000 })
  })

  test('should show error for invalid credentials', async ({ page }) => {
    await page.getByLabel(/email/i).fill('wrong@example.com')
    await page.getByLabel(/password/i).fill('wrongpassword')
    await page.getByRole('button', { name: /sign in/i }).click()

    await expect(page.getByText(/invalid email or password/i)).toBeVisible()
  })

  test('should toggle password visibility', async ({ page }) => {
    const passwordInput = page.getByLabel(/password/i)
    const toggleButton = page.getByRole('button', {
      name: /toggle password visibility/i,
    })

    // Initially password should be hidden
    await expect(passwordInput).toHaveAttribute('type', 'password')

    // Click toggle to show password
    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')

    // Click again to hide password
    await toggleButton.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })

  test('should handle forgot password flow', async ({ page }) => {
    await page.getByText(/forgot password/i).click()

    await expect(page).toHaveURL('/auth/forgot-password')
    await expect(
      page.getByRole('heading', { name: /reset password/i }),
    ).toBeVisible()

    // Enter email
    await page.getByLabel(/email/i).fill('test@example.com')
    await page.getByRole('button', { name: /send reset link/i }).click()

    // Should show success message
    await expect(page.getByText(/check your email/i)).toBeVisible()
  })
})

test.describe('Sign Up Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/signup')
  })

  test('should display sign up page', async ({ page }) => {
    await expect(page).toHaveTitle(/Sign Up/)
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible()
    await expect(page.getByLabel(/name/i)).toBeVisible()
    await expect(page.getByLabel(/email/i)).toBeVisible()
    await expect(page.getByLabel(/password/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /sign up/i })).toBeVisible()
  })

  test('should validate password requirements', async ({ page }) => {
    await page.getByLabel(/password/i).fill('weak')
    await page.getByLabel(/password/i).blur()

    await expect(
      page.getByText(/password must be at least 8 characters/i),
    ).toBeVisible()
  })

  test('should show password strength indicator', async ({ page }) => {
    const passwordInput = page.getByLabel(/password/i)

    // Weak password
    await passwordInput.fill('password')
    await expect(page.getByText(/weak/i)).toBeVisible()

    // Medium password
    await passwordInput.fill('Password123')
    await expect(page.getByText(/medium/i)).toBeVisible()

    // Strong password
    await passwordInput.fill('P@ssw0rd123!')
    await expect(page.getByText(/strong/i)).toBeVisible()
  })

  test('should navigate to sign in page', async ({ page }) => {
    await page.getByText(/already have an account/i).click()

    await expect(page).toHaveURL('/auth/signin')
    await expect(page.getByRole('heading', { name: /sign in/i })).toBeVisible()
  })
})

test.describe('Protected Routes', () => {
  test('should redirect to sign in when accessing protected route', async ({
    page,
  }) => {
    await page.goto('/dashboard')

    // Should redirect to sign in
    await expect(page).toHaveURL('/auth/signin')
    await expect(page.getByRole('heading', { name: /sign in/i })).toBeVisible()
  })

  test('should maintain redirect after sign in', async ({ page }) => {
    // Try to access protected route
    await page.goto('/dashboard/settings')

    // Should redirect to sign in with return URL
    await expect(page).toHaveURL(/\/auth\/signin\?from=/)

    // Sign in with test credentials
    const testEmail = process.env.TEST_USER_EMAIL || 'test@example.com'
    const testPassword = process.env.TEST_USER_PASSWORD || 'testpassword123'

    await page.getByLabel(/email/i).fill(testEmail)
    await page.getByLabel(/password/i).fill(testPassword)
    await page.getByRole('button', { name: /sign in/i }).click()

    // Should redirect back to original destination
    await expect(page).toHaveURL('/dashboard/settings', { timeout: 10000 })
  })
})

test.describe('OAuth Sign In', () => {
  test('should display OAuth providers', async ({ page }) => {
    await page.goto('/auth/signin')

    await expect(
      page.getByRole('button', { name: /sign in with google/i }),
    ).toBeVisible()
    await expect(
      page.getByRole('button', { name: /sign in with github/i }),
    ).toBeVisible()
  })

  test('should open OAuth popup for Google', async ({ page, context }) => {
    await page.goto('/auth/signin')

    // Listen for popup
    const popupPromise = context.waitForEvent('page')

    await page.getByRole('button', { name: /sign in with google/i }).click()

    const popup = await popupPromise
    await expect(popup).toHaveURL(/accounts\.google\.com/)

    await popup.close()
  })
})
