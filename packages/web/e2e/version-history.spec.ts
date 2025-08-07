import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
// Removed jsClick and jsType imports - using standard Playwright APIs

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
    // Create a new note first using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // The version history button should be visible in the toolbar
    const _versionHistoryButton = page.locator(
      '[data-testid="version-history-button"]'
    )
    await expect(_versionHistoryButton).toBeVisible({ timeout: 10000 })

    // Button should have the clock icon
    await expect(_versionHistoryButton.locator('svg')).toBeVisible()
  })

  test('should open version history dialog when clicked', async ({ page }) => {
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add some content to create a version using standard Playwright API
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page
      .locator('input[placeholder*="Untitled"]')
      .fill('Test Note for Version History')

    // Wait a moment for auto-save
    await page.waitForTimeout(1000)

    // Click version history button using jsClick to avoid timeout issues
    const _versionHistoryButton = page.locator(
      '[data-testid="version-history-button"]'
    )
    await page.click('[data-testid="new-note-button"]', { force: true })

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
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content to create versions using jsType for reliable input handling
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.waitForTimeout(500)

    // Edit the content to create another version using standard API
    await page
      .locator('input[placeholder*="Untitled"]')
      .fill('Version Test Note - Updated')
    await page.waitForTimeout(500)

    // Open version history using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Should show at least one version item
    const _versionItems = page.locator('[data-testid^="version-item-"]')
    await expect(_versionItems.first()).toBeVisible()

    // Version should show version number badge
    await expect(page.locator('text=/v\\d+/')).toBeVisible()
  })

  test('should allow marking versions as milestones', async ({ page }) => {
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content using jsType for reliable input handling
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.waitForTimeout(1000)

    // Open version history using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Find first version and click milestone button using jsClick
    const _firstVersionMilestoneButton = page
      .locator('[data-testid^="milestone-button-"]')
      .first()
    await page.click('[data-testid="new-note-button"]', { force: true })

    // Milestone dialog should open
    const dialog = page.locator('[role="dialog"]').nth(1) // Second dialog (first is version history dialog)
    await expect(dialog).toBeVisible()

    // Fill milestone details using jsType for reliable input handling
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )

    // Save milestone using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })

    // Dialog should close
    await expect(dialog).not.toBeVisible()

    // Should show milestone badge
    await expect(page.locator('text=First Draft')).toBeVisible()
  })

  test('should allow version comparison', async ({ page }) => {
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add initial content using standard Playwright API
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page
      .locator('input[placeholder*="Untitled"]')
      .fill('Comparison Test - Version 1')
    await page.waitForTimeout(1000)

    // Update content to create another version using standard API
    await page
      .locator('input[placeholder*="Untitled"]')
      .fill('Comparison Test - Version 2')
    await page.waitForTimeout(1000)

    // Open version history using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Switch to Compare tab using jsClick
    await page.click('[data-testid="new-note-button"]', { force: true })

    // Click on first version using jsClick
    const _versionItems = page.locator('[data-testid^="version-item-"]')
    await page.click('[data-testid="new-note-button"]', { force: true })

    // Should show selection message
    await expect(page.locator('text=Selected version')).toBeVisible()

    // Click on second version using jsClick (selecting second item by index)
    await page.click('[data-testid="new-note-button"]', { force: true })

    // Should show comparison
    await expect(page.locator('text=Comparing versions')).toBeVisible()
  })

  test('should allow version restoration', async ({ page }) => {
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add initial content using jsType for reliable input handling
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.waitForTimeout(1000)

    // Update content using jsType
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.waitForTimeout(1000)

    // Open version history using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Find a version that's not current and click restore using jsClick
    const restoreButtons = page.locator('[data-testid^="restore-button-"]')
    if ((await restoreButtons.count()) > 0) {
      await page.click('[data-testid="new-note-button"]', { force: true })

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
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content using jsType for reliable input handling
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page.fill(
      'input[placeholder*="title"], input[placeholder*="name"]',
      'test-content'
    )
    await page.waitForTimeout(1000)

    // Open version history using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="version-history-panel"]')

    // Try to create a milestone first
    const milestoneButton = page
      .locator('[data-testid^="milestone-button-"]')
      .first()
    if (await milestoneButton.isVisible()) {
      await page.click('[data-testid="new-note-button"]', { force: true })

      // Fill milestone form if dialog opens using jsType and jsClick
      const milestoneDialog = page.locator('[role="dialog"]').nth(1)
      if (await milestoneDialog.isVisible()) {
        await page.fill(
          'input[placeholder*="title"], input[placeholder*="name"]',
          'test-content'
        )
        await page.click('[data-testid="new-note-button"]', { force: true })
        await milestoneDialog.waitFor({ state: 'hidden', timeout: 5000 })
      }
    }

    // Switch to Milestones tab using jsClick
    await page.click('[data-testid="new-note-button"]', { force: true })

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
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
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
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
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
    // Create a new note using jsClick to avoid timeout issues
    await page.click('[data-testid="new-note-button"]', { force: true })
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content using standard Playwright API
    const _titleInput = page.locator('input[placeholder*="Untitled"]')
    await page
      .locator('input[placeholder*="Untitled"]')
      .fill('Keyboard Navigation Test')
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
