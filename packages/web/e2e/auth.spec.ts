import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('should redirect to auth page when not authenticated', async ({
    page,
  }) => {
    // Navigate to home page
    await page.goto('/')

    // Should be redirected to auth page
    await expect(page).toHaveURL('/auth')

    // Auth page should be visible
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
    await expect(page.getByText('Sign in to access your notes')).toBeVisible()
  })

  test('should display sign in and sign up tabs', async ({ page }) => {
    await page.goto('/auth')

    // Check tabs are visible
    await expect(page.getByRole('tab', { name: 'Sign In' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Sign Up' })).toBeVisible()

    // Sign In tab should be selected by default
    await expect(page.getByRole('tab', { name: 'Sign In' })).toHaveAttribute(
      'data-state',
      'active'
    )
  })

  test('should show sign in form elements', async ({ page }) => {
    await page.goto('/auth')

    // Check form elements
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()

    // Check OAuth buttons
    await expect(page.getByRole('button', { name: 'Google' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'GitHub' })).toBeVisible()
  })

  test('should switch to sign up tab', async ({ page }) => {
    await page.goto('/auth')

    // Click sign up tab
    await page.getByRole('tab', { name: 'Sign Up' }).click()

    // Sign Up tab should be active
    await expect(page.getByRole('tab', { name: 'Sign Up' })).toHaveAttribute(
      'data-state',
      'active'
    )

    // Should show sign up button
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible()
  })

  test('should validate email input', async ({ page }) => {
    await page.goto('/auth')

    // Try to submit without email
    await page.getByRole('button', { name: 'Sign In' }).click()

    // HTML5 validation should prevent submission
    const emailInput = page.getByLabel('Email')
    const validationMessage = await emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    )
    expect(validationMessage).toBeTruthy()
  })

  test('should validate password input', async ({ page }) => {
    await page.goto('/auth')

    // Fill email but not password
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByRole('button', { name: 'Sign In' }).click()

    // HTML5 validation should prevent submission
    const passwordInput = page.getByLabel('Password')
    const validationMessage = await passwordInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    )
    expect(validationMessage).toBeTruthy()
  })

  test('should handle sign in errors gracefully', async ({ page }) => {
    await page.goto('/auth')

    // Fill in invalid credentials
    await page.getByLabel('Email').fill('invalid@example.com')
    await page.getByLabel('Password').fill('wrongpassword')

    // Click sign in
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Should show loading state
    await expect(
      page.getByRole('button', { name: 'Signing in...' })
    ).toBeVisible()

    // Should eventually show error (wait for it)
    await page.waitForTimeout(2000)

    // Should be back to Sign In button (not loading)
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()
  })

  test('should disable form during submission', async ({ page }) => {
    await page.goto('/auth')

    // Fill form
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByLabel('Password').fill('password123')

    // Click sign in
    await page.getByRole('button', { name: 'Sign In' }).click()

    // Check inputs are disabled during submission
    await expect(page.getByLabel('Email')).toBeDisabled()
    await expect(page.getByLabel('Password')).toBeDisabled()
    await expect(
      page.getByRole('button', { name: 'Signing in...' })
    ).toBeDisabled()
  })

  test('should not have infinite redirect loop', async ({ page }) => {
    // Track redirects
    const redirects: string[] = []

    page.on('response', (response) => {
      if (response.status() >= 300 && response.status() < 400) {
        redirects.push(response.url())
      }
    })

    // Navigate to home
    await page.goto('/')

    // Wait a bit to ensure no infinite loop
    await page.waitForTimeout(2000)

    // Should have only one redirect (from / to /auth)
    expect(redirects.length).toBeLessThanOrEqual(1)

    // Should end up on auth page
    await expect(page).toHaveURL('/auth')
  })

  test('auth page should be accessible directly', async ({ page }) => {
    // Navigate directly to auth page
    const response = await page.goto('/auth')

    // Should load successfully
    expect(response?.status()).toBe(200)

    // Should show auth page
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
  })
})
