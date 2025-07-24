import { test, expect } from '@playwright/test'

test.describe('Keyboard Shortcuts', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/')

    // Bypass auth for testing
    await page.evaluate(() => {
      document.cookie = 'dev-auth-bypass=true; path=/'
    })

    // Reload to apply the bypass
    await page.reload()

    // Wait for the app to load
    await page.waitForTimeout(2000)
  })

  test('command palette opens with Cmd+Shift+P', async ({ page }) => {
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

  test('navigation shortcuts work with arrow keys', async ({ page }) => {
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

    // Wait for notes to load
    await page.waitForTimeout(1000)

    // Press down arrow
    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(500)

    // Press up arrow
    await page.keyboard.press('ArrowUp')
    await page.waitForTimeout(500)

    // Press j for next
    await page.keyboard.press('j')
    await page.waitForTimeout(500)

    // Press k for previous
    await page.keyboard.press('k')
    await page.waitForTimeout(500)
  })

  test('note management shortcuts', async ({ page }) => {
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Create new note with Cmd+N
    await page.keyboard.press(`${modifier}+N`)
    await expect(page.getByText(/new note|created/i)).toBeVisible({
      timeout: 5000,
    })

    // Save note with Cmd+S
    await page.keyboard.press(`${modifier}+S`)
    await expect(page.getByText(/saved/i)).toBeVisible({ timeout: 5000 })
  })

  test('view mode toggle with Cmd+E', async ({ page }) => {
    const modifier = process.platform === 'darwin' ? 'Meta' : 'Control'

    // Toggle view mode
    await page.keyboard.press(`${modifier}+E`)
    await expect(page.getByText(/view mode/i)).toBeVisible({ timeout: 5000 })

    // Toggle back to edit mode
    await page.keyboard.press(`${modifier}+E`)
    await expect(page.getByText(/edit mode/i)).toBeVisible({ timeout: 5000 })
  })

  test('sidebar toggle with Cmd+,', async ({ page }) => {
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

  test('multi-select mode with Cmd+M', async ({ page }) => {
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

  test('quick switch with number keys', async ({ page }) => {
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

  test('command palette search functionality', async ({ page }) => {
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

  test('keyboard shortcuts are properly registered', async ({ page }) => {
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
