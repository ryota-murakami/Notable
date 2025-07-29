import { expect, test } from '@playwright/test'

test.describe('Keyboard Shortcuts', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
  test.beforeEach(async ({ page }) => {
    // Set auth bypass cookie before navigation
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to app page now that auth is bypassed
    await page.goto('/app')

    // Wait for the app to load by checking for a specific element
    await page.waitForSelector('[data-testid="app-shell"]', {
      state: 'visible',
      timeout: 10000,
    })
    // Or wait for the network to be idle when the app is ready
    await page.waitForLoadState('networkidle')
  })

  test('command palette opens with Cmd+Shift+P', async ({ page }) => {
    // Wait for any existing modals to close
    await page.waitForTimeout(500)

    // Press Cmd+Shift+P (or Ctrl+Shift+P on Windows/Linux)
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+Shift+P`)

    // Check if command palette is visible
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByText('Command Palette')).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('keyboard shortcuts help opens with Cmd+/', async ({ page }) => {
    // Wait for any existing modals to close
    await page.waitForTimeout(500)

    // Press Cmd+/ (or Ctrl+/ on Windows/Linux)
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+/`)

    // Check if keyboard shortcuts dialog is visible
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByText('Keyboard Shortcuts')).toBeVisible()

    // Should show different categories
    await expect(page.getByRole('tab', { name: 'General' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Navigation' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Notes' })).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('search opens with Cmd+K', async ({ page }) => {
    // Wait for any existing modals to close
    await page.waitForTimeout(500)

    // Press Cmd+K (or Ctrl+K on Windows/Linux)
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+K`)

    // Check if command palette dialog is visible (which includes search)
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByPlaceholder(/command/i)).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('navigation shortcuts work with arrow keys', async ({ page }) => {
    // For now, just test that arrow keys don't cause errors and that the New Note button is still functional
    // Full navigation will be implemented when notes are displayed

    // Press arrow keys - should not cause errors
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowUp')
    await page.keyboard.press('j')
    await page.keyboard.press('k')

    // Verify app is still functional
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()

    // Test that navigation doesn't interfere with button clicks
    await newNoteButton.click()
    await expect(newNoteButton).toBeVisible()
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
    // For now, test that the keyboard shortcut doesn't cause errors
    // Full view/edit mode toggle will be implemented when note editing is available
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Press the shortcut - should not cause errors
    await page.keyboard.press(`${modifier}+E`)

    // Verify app is still functional
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
  })

  test('sidebar toggle with Cmd+,', async ({ page }) => {
    // For now, test that the keyboard shortcut doesn't cause errors
    // Sidebar toggle functionality will be implemented later
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Press the shortcut - should not cause errors
    await page.keyboard.press(`${modifier}+,`)

    // Verify app is still functional
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
  })

  test('multi-select mode with Cmd+M', async ({ page }) => {
    // For now, test that the keyboard shortcut doesn't cause errors
    // Multi-select mode will be implemented when note selection is available
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Press the shortcut - should not cause errors
    await page.keyboard.press(`${modifier}+M`)

    // Verify app is still functional
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
  })

  test('quick switch with number keys', async ({ page }) => {
    // For now, test that the keyboard shortcuts don't cause errors
    // Quick switch will be implemented when multiple notes are displayed
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Press number shortcuts - should not cause errors
    for (let i = 1; i <= 3; i++) {
      await page.keyboard.press(`${modifier}+${i}`)
    }

    // Verify app is still functional
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
  })

  test('command palette search functionality', async ({ page }) => {
    // Wait for any existing modals to close
    await page.waitForTimeout(500)

    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Open command palette
    await page.keyboard.press(`${modifier}+Shift+P`)
    await expect(page.getByRole('dialog')).toBeVisible()

    // Type to search
    const searchInput = page.getByPlaceholder(/command/i)
    await searchInput.fill('new')

    // Should show "New Note" command
    await expect(page.getByText('New Note')).toBeVisible()

    // Close dialog
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('keyboard shortcuts are properly registered', async ({ page }) => {
    // Test that shortcuts don't trigger when typing in input fields
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Open command palette first
    await page.keyboard.press(`${modifier}+Shift+P`)
    await expect(page.getByRole('dialog')).toBeVisible()

    // Focus on the search input inside command palette
    const input = page.getByPlaceholder(/command/i)
    await input.focus()

    // Type Cmd+K while focused in input - should not open another dialog
    await page.keyboard.press(`${modifier}+K`)
    // Should still have only one dialog open
    const dialogs = page.getByRole('dialog')
    await expect(dialogs).toHaveCount(1)

    // Close dialog
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })
})
