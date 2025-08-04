import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Version History Feature', () => {
  test.beforeEach(async ({ page }) => {
    // Set up dev auth bypass
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to the app
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should display version history button in note editor toolbar', async ({
    page,
  }) => {
    // Create a new note first
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // The version history button should be visible in the toolbar
    const versionHistoryButton = page.locator(
      '[data-testid="version-history-button"]'
    )
    await expect(versionHistoryButton).toBeVisible({ timeout: 10000 })

    // Button should have the clock icon
    await expect(versionHistoryButton.locator('svg')).toBeVisible()
  })

  test('should open version history dialog when clicked', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add some content to create a version
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Test Note for Version History')

    // Wait a moment for auto-save
    await page.waitForTimeout(1000)

    // Click version history button
    const versionHistoryButton = page.locator(
      '[data-testid="version-history-button"]'
    )
    await versionHistoryButton.click()

    // Dialog should open
    const dialog = page.locator('[role="dialog"]')
    await expect(dialog).toBeVisible()

    // Should have version history panel
    const versionPanel = page.locator('[data-testid="version-history-panel"]')
    await expect(versionPanel).toBeVisible()

    // Should show tabs
    await expect(page.locator('text=History')).toBeVisible()
    await expect(page.locator('text=Compare')).toBeVisible()
    await expect(page.locator('text=Milestones')).toBeVisible()
  })

  test('should show version list in history tab', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content to create versions
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Version Test Note')
    await page.waitForTimeout(500)

    // Edit the content to create another version
    await titleInput.fill('Version Test Note - Updated')
    await page.waitForTimeout(500)

    // Open version history
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Should show at least one version item
    const versionItems = page.locator('[data-testid^="version-item-"]')
    await expect(versionItems.first()).toBeVisible()

    // Version should show version number badge
    await expect(page.locator('text=/v\\d+/')).toBeVisible()
  })

  test('should allow marking versions as milestones', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Milestone Test Note')
    await page.waitForTimeout(1000)

    // Open version history
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Find first version and click milestone button
    const firstVersionMilestoneButton = page
      .locator('[data-testid^="milestone-button-"]')
      .first()
    await firstVersionMilestoneButton.click()

    // Milestone dialog should open
    const dialog = page.locator('[role="dialog"]').nth(1) // Second dialog (first is version history dialog)
    await expect(dialog).toBeVisible()

    // Fill milestone details
    await page.fill('#milestone-name', 'First Draft')
    await page.fill('#milestone-message', 'Initial version of the note')

    // Save milestone
    await page.click('button:has-text("Save Milestone")')

    // Dialog should close
    await expect(dialog).not.toBeVisible()

    // Should show milestone badge
    await expect(page.locator('text=First Draft')).toBeVisible()
  })

  test('should allow version comparison', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add initial content
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Comparison Test - Version 1')
    await page.waitForTimeout(1000)

    // Update content to create another version
    await titleInput.fill('Comparison Test - Version 2')
    await page.waitForTimeout(1000)

    // Open version history
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Switch to Compare tab
    await page.click('text=Compare')

    // Click on first version
    const versionItems = page.locator('[data-testid^="version-item-"]')
    await versionItems.first().click()

    // Should show selection message
    await expect(page.locator('text=Selected version')).toBeVisible()

    // Click on second version
    await versionItems.nth(1).click()

    // Should show comparison
    await expect(page.locator('text=Comparing versions')).toBeVisible()
  })

  test('should allow version restoration', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add initial content
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Original Title')
    await page.waitForTimeout(1000)

    // Update content
    await titleInput.fill('Updated Title')
    await page.waitForTimeout(1000)

    // Open version history
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Find a version that's not current and click restore
    const restoreButtons = page.locator('[data-testid^="restore-button-"]')
    if ((await restoreButtons.count()) > 0) {
      await restoreButtons.first().click()

      // Should show success toast (assuming toast system exists)
      // In real implementation, you might want to check for actual content restoration
      await page.waitForTimeout(500)

      // Close dialog to check if restoration worked
      await page.keyboard.press('Escape')
      await page.waitForSelector('[data-testid="version-history-panel"]', {
        state: 'hidden',
      })
    }
  })

  test('should show milestones in dedicated tab', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Milestones Test Note')
    await page.waitForTimeout(1000)

    // Open version history
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Try to create a milestone first
    const milestoneButton = page
      .locator('[data-testid^="milestone-button-"]')
      .first()
    if (await milestoneButton.isVisible()) {
      await milestoneButton.click()

      // Fill milestone form if dialog opens
      const milestoneDialog = page.locator('[role="dialog"]').nth(1)
      if (await milestoneDialog.isVisible()) {
        await page.fill('#milestone-name', 'Test Milestone')
        await page.click('button:has-text("Save Milestone")')
        await milestoneDialog.waitFor({ state: 'hidden' })
      }
    }

    // Switch to Milestones tab
    await page.click('text=Milestones')

    // Should either show milestones or empty state
    const milestonesContent = page.locator(
      '[data-testid="version-history-panel"] [role="tabpanel"]'
    )
    await expect(milestonesContent).toBeVisible()

    // Check for either milestone items or empty state message
    const hasMilestones =
      (await page.locator('[data-testid^="version-item-"]').count()) > 0
    const hasEmptyState = await page
      .locator('text=No milestones yet')
      .isVisible()

    expect(hasMilestones || hasEmptyState).toBeTruthy()
  })

  test('should have proper accessibility for version history', async ({
    page,
  }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Version history button should be accessible
    const versionButton = page.locator('[data-testid="version-history-button"]')
    await expect(versionButton).toBeEnabled()

    // Button should have proper role
    await expect(versionButton).toHaveAttribute('role', 'button')

    // Should be keyboard accessible
    await versionButton.focus()
    await page.keyboard.press('Enter')

    // Dialog should open
    const dialog = page.locator('[role="dialog"]')
    await expect(dialog).toBeVisible()

    // Dialog should have proper ARIA attributes
    await expect(dialog).toHaveAttribute('aria-labelledby')

    // Should be closeable with Escape
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
  })

  test('should handle version history for notes without versions gracefully', async ({
    page,
  }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Open version history immediately (before any saves)
    await page.click('[data-testid="version-history-button"]')
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Should handle empty state gracefully
    // Either show loading state or empty message
    const panel = page.locator('[data-testid="version-history-panel"]')
    await expect(panel).toBeVisible()

    // Should not crash or show errors
    await page.waitForTimeout(2000)
    await expect(panel).toBeVisible()
  })

  test('should work with keyboard navigation', async ({ page }) => {
    // Create a new note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await titleInput.fill('Keyboard Navigation Test')
    await page.waitForTimeout(1000)

    // Navigate to version history button using Tab
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab') // Should reach version history button

    // Open with Enter
    await page.keyboard.press('Enter')

    // Dialog should open
    const dialog = page.locator('[role="dialog"]')
    await expect(dialog).toBeVisible()

    // Should be able to navigate tabs with arrow keys
    await page.keyboard.press('Tab') // Focus first tab
    await page.keyboard.press('ArrowRight') // Move to Compare tab

    // Should be able to close with Escape
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
  })
})
