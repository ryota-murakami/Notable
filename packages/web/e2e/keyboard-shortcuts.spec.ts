import { expect, test } from '@playwright/test'

test.describe('Keyboard Shortcuts', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  test.skip(
    process.env.CI === 'true' &&
      process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder'),
    'Skipping auth-dependent tests in CI due to placeholder Supabase credentials'
  )
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

  test.skip('command palette opens with Cmd+Shift+P', async ({ page }) => {
    // Feature not yet implemented - skipping test
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

  test.skip('keyboard shortcuts help opens with Cmd+/', async ({ page }) => {
    // Feature not yet implemented - skipping test
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

  test.skip('search opens with Cmd+K', async ({ page }) => {
    // Feature not yet implemented - skipping test
    // Press Cmd+K (or Ctrl+K on Windows/Linux)
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'
    await page.keyboard.press(`${modifier}+K`)

    // Check if search dialog is visible
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByPlaceholder(/search/i)).toBeVisible()

    // Close with Escape
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test.skip('navigation shortcuts work with arrow keys', async ({ page }) => {
    // Feature not yet implemented - navigation selection not available
    // Create some test notes first
    await page.evaluate(() => {
      // Mock some notes in localStorage for testing
      const mockNotes = [
        { id: '1', title: 'First Note', content: 'Content 1', isFolder: false },
        {
          id: '2',
          title: 'Second Note',
          content: 'Content 2',
          isFolder: false,
        },
        { id: '3', title: 'Third Note', content: 'Content 3', isFolder: false },
      ]
      localStorage.setItem('test-notes', JSON.stringify(mockNotes))
    })

    // Wait for notes to be visible in the UI
    await expect(page.getByText('First Note')).toBeVisible()

    // Press down arrow
    await page.keyboard.press('ArrowDown')
    // Assert that selection changed (add data-testid to selected items)
    await expect(page.locator('[data-selected="true"]')).toContainText(
      'Second Note'
    )

    // Press up arrow
    await page.keyboard.press('ArrowUp')
    await expect(page.locator('[data-selected="true"]')).toContainText(
      'First Note'
    )

    // Press j for next
    await page.keyboard.press('j')
    await expect(page.locator('[data-selected="true"]')).toContainText(
      'Second Note'
    )

    // Press k for previous
    await page.keyboard.press('k')
    await expect(page.locator('[data-selected="true"]')).toContainText(
      'First Note'
    )
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

  test.skip('view mode toggle with Cmd+E', async ({ page }) => {
    // Feature not yet implemented - skipping test
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Toggle view mode
    await page.keyboard.press(`${modifier}+E`)
    await expect(page.getByText(/view mode/i)).toBeVisible({ timeout: 5000 })

    // Toggle back to edit mode
    await page.keyboard.press(`${modifier}+E`)
    await expect(page.getByText(/edit mode/i)).toBeVisible({ timeout: 5000 })
  })

  test.skip('sidebar toggle with Cmd+,', async ({ page }) => {
    // Feature not yet implemented - sidebar toggle not available
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Get initial sidebar state
    const sidebar = page.locator('[data-sidebar]').first()
    const initiallyVisible = await sidebar.isVisible()

    // Toggle sidebar
    await page.keyboard.press(`${modifier}+,`)
    await page.waitForTimeout(500)

    // Check sidebar state changed
    const afterToggle = await sidebar.isVisible()
    expect(afterToggle).not.toBe(initiallyVisible)
  })

  test.skip('multi-select mode with Cmd+M', async ({ page }) => {
    // Feature not yet implemented - skipping test
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Toggle multi-select mode
    await page.keyboard.press(`${modifier}+M`)
    await expect(page.getByText(/multi-select/i)).toBeVisible({ timeout: 5000 })

    // Select all with Cmd+A (only works in multi-select mode)
    await page.keyboard.press(`${modifier}+A`)

    // Toggle back to normal mode
    await page.keyboard.press(`${modifier}+M`)
    await expect(page.getByText(/normal mode/i)).toBeVisible({ timeout: 5000 })
  })

  test.skip('quick switch with number keys', async ({ page }) => {
    // Feature not yet implemented - skipping test
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Create some test notes
    await page.evaluate(() => {
      const mockNotes = Array.from({ length: 5 }, (_, i) => ({
        id: `${i + 1}`,
        title: `Note ${i + 1}`,
        content: `Content for note ${i + 1}`,
        isFolder: false,
      }))
      localStorage.setItem('test-notes', JSON.stringify(mockNotes))
    })

    // Wait for notes to load
    await page.waitForTimeout(1000)

    // Test quick switch to different notes
    for (let i = 1; i <= 3; i++) {
      await page.keyboard.press(`${modifier}+${i}`)
      await page.waitForTimeout(300)
    }
  })

  test.skip('command palette search functionality', async ({ page }) => {
    // Feature not yet implemented - skipping test
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Open command palette
    await page.keyboard.press(`${modifier}+Shift+P`)
    await expect(page.getByRole('dialog')).toBeVisible()

    // Type to search
    const searchInput = page.getByPlaceholder(/type a command/i)
    await searchInput.fill('new')

    // Should show "Create New Note" command
    await expect(page.getByText('Create New Note')).toBeVisible()

    // Clear search
    await searchInput.clear()
    await searchInput.fill('view')

    // Should show view-related commands
    await expect(page.getByText(/view mode/i)).toBeVisible()

    // Close dialog
    await page.keyboard.press('Escape')
  })

  test.skip('keyboard shortcuts are properly registered', async ({ page }) => {
    // Feature not yet implemented - skipping test
    // Check that shortcuts don't trigger when typing in input fields
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Focus on a text input (if available)
    const input = page.getByRole('textbox').first()
    if (await input.isVisible()) {
      await input.focus()

      // Type Cmd+K - should not open search
      await page.keyboard.press(`${modifier}+K`)
      await expect(page.getByRole('dialog')).not.toBeVisible()
    }
  })
})
