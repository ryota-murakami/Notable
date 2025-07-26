/* eslint-env jest, detox/detox */
import { by, device, element, expect } from 'detox'

describe('Authentication Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show authentication screen on first launch', async () => {
    await expect(element(by.text('Welcome to Notable'))).toBeVisible()
    await expect(element(by.text('Sign In'))).toBeVisible()
    await expect(element(by.text('Sign Up'))).toBeVisible()
  })

  it('should navigate to sign up screen', async () => {
    await element(by.text('Sign Up')).tap()
    await expect(element(by.text('Create Account'))).toBeVisible()
    await expect(element(by.id('email-input'))).toBeVisible()
    await expect(element(by.id('password-input'))).toBeVisible()
    await expect(element(by.id('confirm-password-input'))).toBeVisible()
  })

  it('should navigate to sign in screen', async () => {
    await element(by.text('Sign In')).tap()
    await expect(element(by.text('Welcome Back'))).toBeVisible()
    await expect(element(by.id('email-input'))).toBeVisible()
    await expect(element(by.id('password-input'))).toBeVisible()
    await expect(element(by.id('sign-in-button'))).toBeVisible()
  })

  it('should show Google OAuth button', async () => {
    await element(by.text('Sign In')).tap()
    await expect(element(by.id('google-signin-button'))).toBeVisible()
  })

  it('should validate email format', async () => {
    await element(by.text('Sign In')).tap()
    await element(by.id('email-input')).typeText('invalid-email')
    await element(by.id('password-input')).typeText('password123')
    await element(by.id('sign-in-button')).tap()

    await expect(
      element(by.text('Please enter a valid email address'))
    ).toBeVisible()
  })

  it('should require password', async () => {
    await element(by.text('Sign In')).tap()
    await element(by.id('email-input')).typeText('test@example.com')
    await element(by.id('sign-in-button')).tap()

    await expect(element(by.text('Password is required'))).toBeVisible()
  })

  it('should show loading state during authentication', async () => {
    await element(by.text('Sign In')).tap()
    await element(by.id('email-input')).typeText('test@example.com')
    await element(by.id('password-input')).typeText('password123')
    await element(by.id('sign-in-button')).tap()

    // Should show loading indicator
    await expect(element(by.id('loading-indicator'))).toBeVisible()
  })
})
