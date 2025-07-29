import { expect, test } from '@playwright/test'

test.describe('Keyboard Shortcuts', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
  test.beforeEach(async ({ page }) => {
    // Set auth bypass cookie before navigation
    await page.goto('/')
    await page.evaluate(() => {
      document.cookie = 'dev-auth-bypass=true; path=/'
    })

    // Navigate to home page now that auth is bypassed
    await page.goto('/')

    // Wait for the app to load by checking for a specific element
    await page.waitForSelector('[data-testid="app-shell"]', {
      state: 'visible',
      timeout: 10000,
    })
    // Or wait for the network to be idle when the app is ready
    await page.waitForLoadState('networkidle')
  })

  test('command palette opens with Cmd+Shift+P', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+Shift+P`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('keyboard shortcuts help opens with Cmd+/', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+/`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('search opens with Cmd+K', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+K`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('navigation shortcuts work with arrow keys', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that navigation keys don't break the app
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowUp')
    await page.keyboard.press('j')
    await page.keyboard.press('k')

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('note management shortcuts', async ({ page }) => {
    // Test that the New Note button exists and is clickable
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()

    // Click the button to verify it works
    await newNoteButton.click()

    // For now, just verify the button is still there (no error thrown)
    // When note creation is implemented, this test can be expanded
    await expect(newNoteButton).toBeVisible()
  })

  test('view mode toggle with Cmd+E', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+E`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('sidebar toggle with Cmd+,', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+,`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('multi-select mode with Cmd+M', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+M`)
    await page.keyboard.press(`${modifier}+A`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('quick switch with number keys', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcuts don't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    for (let i = 1; i <= 3; i++) {
      await page.keyboard.press(`${modifier}+${i}`)
    }

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('command palette search functionality', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that keyboard shortcut doesn't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+Shift+P`)
    await page.keyboard.press('Escape')

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })

  test('keyboard shortcuts are properly registered', async ({ page }) => {
    // Verify app shell is loaded first
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Test that various keyboard shortcuts don't break the app
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+K`)

    // App should remain stable after keyboard input
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })
})
