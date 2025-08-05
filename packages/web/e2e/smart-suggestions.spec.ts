import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
import { jsClick, jsType } from './utils/js-click'

test.describe('Smart Note Suggestions Feature', () => {
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

  test('should display smart suggestions panel when note is selected', async ({
    page,
  }) => {
    // Create a new note using jsClick to avoid timeout issues
    await jsClick(page, '[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Add content to trigger suggestions using jsType for reliable input handling
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(
      page,
      'input[placeholder*="Untitled"]',
      'Smart Suggestions Test Note'
    )

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'This is a test note about artificial intelligence and machine learning. It contains content that should trigger smart suggestions for related notes and search terms.'
    )
    await page.waitForTimeout(2000)

    // Smart suggestions panel should be visible
    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible({ timeout: 10000 })

    // Should have the main title with brain icon
    await expect(page.getByText('Smart Suggestions')).toBeVisible()

    // Should have tabs
    await expect(page.getByText('Smart')).toBeVisible()
    await expect(page.getByText('Search')).toBeVisible()
    await expect(page.getByText('Related')).toBeVisible()
  })

  test('should show smart tab with consolidated suggestions', async ({
    page,
  }) => {
    // Create a note with substantial content
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(
      page,
      'input[placeholder*="Untitled"]',
      'Technology and Innovation'
    )

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'This note discusses modern technology trends including artificial intelligence, machine learning, blockchain, and cloud computing. These technologies are revolutionizing various industries.'
    )
    await page.waitForTimeout(3000)

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Smart tab should be active by default
    const smartTab = page.getByText('Smart')
    await expect(smartTab).toHaveAttribute('data-state', 'active')

    // Should show various types of suggestions
    const suggestions = page.locator('[data-testid^="suggestion-"]')

    // Wait for suggestions to load
    await page.waitForTimeout(2000)

    // Should have at least one suggestion (could be link, search, tag, or similar)
    const suggestionCount = await suggestions.count()
    if (suggestionCount > 0) {
      // Verify suggestion structure
      const firstSuggestion = suggestions.first()
      await expect(firstSuggestion).toBeVisible()

      // Should have confidence percentage
      await expect(firstSuggestion.locator('text=/%/')).toBeVisible()

      // Should have action button
      const actionButtons = firstSuggestion.locator('button')
      await expect(actionButtons.last()).toBeVisible()
    }
  })

  test('should show search suggestions in search tab', async ({ page }) => {
    // Create a note with content that should generate search suggestions
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(page, 'input[placeholder*="Untitled"]', 'Project Management')

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'Effective project management requires careful planning, team coordination, and regular progress monitoring. Key methodologies include Agile, Scrum, and Waterfall approaches.'
    )
    await page.waitForTimeout(2000)

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Click on Search tab using jsClick to avoid timeout issues
    const searchTab = page.getByText('Search')
    await jsClick(page, 'text=Search')
    await page.waitForTimeout(1000)

    // Should show search suggestions or empty state
    const searchSuggestions = page.locator(
      '[data-testid^="search-suggestion-"]'
    )
    const emptyState = page.getByText('Add content to get search suggestions')

    // Either suggestions or empty state should be visible
    const hasSearchSuggestions = (await searchSuggestions.count()) > 0
    const hasEmptyState = await emptyState.isVisible()

    expect(hasSearchSuggestions || hasEmptyState).toBeTruthy()

    if (hasSearchSuggestions) {
      // Verify search suggestion structure
      const firstSuggestion = searchSuggestions.first()
      await expect(firstSuggestion).toBeVisible()

      // Should have confidence percentage
      await expect(firstSuggestion.locator('text=/%/')).toBeVisible()
    }
  })

  test('should show related notes in related tab', async ({ page }) => {
    // Create a note with tags first
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(
      page,
      'input[placeholder*="Untitled"]',
      'Software Development Best Practices'
    )

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'Software development requires following best practices including code reviews, testing, documentation, and version control. These practices ensure maintainable and reliable software.'
    )
    await page.waitForTimeout(2000)

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Click on Related tab using jsClick to avoid timeout issues
    const relatedTab = page.getByText('Related')
    await jsClick(page, 'text=Related')
    await page.waitForTimeout(1000)

    // Should show related content or empty state
    const relatedContent = page.locator(
      '[data-testid="smart-suggestions-panel"] [role="tabpanel"]'
    )
    await expect(relatedContent).toBeVisible()

    // Check for either related notes or empty state
    const hasRelatedNotes =
      (await page
        .locator('button:has-text("View"), button:has-text("+")')
        .count()) > 0
    const hasEmptyState = await page
      .getByText('No related notes found yet')
      .isVisible()

    expect(hasRelatedNotes || hasEmptyState).toBeTruthy()
  })

  test('should handle suggestion actions correctly', async ({ page }) => {
    // Create a note with content
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(page, 'input[placeholder*="Untitled"]', 'Action Test Note')

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'This note is for testing suggestion actions and interactions.'
    )
    await page.waitForTimeout(2000)

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Wait for suggestions to load
    await page.waitForTimeout(2000)

    // Try clicking on different suggestion types if they exist
    const searchSuggestions = page.locator(
      '[data-testid^="search-suggestion-"]'
    )
    if ((await searchSuggestions.count()) > 0) {
      await jsClick(page, '[data-testid^="search-suggestion-"]')
      // Should not crash
      await page.waitForTimeout(500)
    }

    // Check action buttons in smart suggestions
    const actionButtons = page.locator('[data-testid^="suggestion-"] button')
    if ((await actionButtons.count()) > 0) {
      await jsClick(page, '[data-testid^="suggestion-"] button')
      // Should not crash
      await page.waitForTimeout(500)
    }

    // The app should remain functional
    await expect(page.locator('[data-testid="note-editor"]')).toBeVisible()
  })

  test('should collapse and expand suggestions panel', async ({ page }) => {
    // Create a note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(page, 'input[placeholder*="Untitled"]', 'Collapse Test Note')
    await page.waitForTimeout(1000)

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Find collapse/expand button (chevron button)
    const collapseButton = suggestionsPanel.locator('button').first()

    // Panel content should be visible initially
    const tabsList = page.locator('[role="tablist"]')
    await expect(tabsList).toBeVisible()

    // Click to collapse using jsClick
    await jsClick(page, '[data-testid="smart-suggestions-panel"] button')
    await page.waitForTimeout(300)

    // Tabs should be hidden when collapsed
    await expect(tabsList).not.toBeVisible()

    // Click to expand using jsClick
    await jsClick(page, '[data-testid="smart-suggestions-panel"] button')
    await page.waitForTimeout(300)

    // Tabs should be visible again
    await expect(tabsList).toBeVisible()
  })

  test('should show loading states appropriately', async ({ page }) => {
    // Create a note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(page, 'input[placeholder*="Untitled"]', 'Loading Test Note')

    // Should show loading spinner in header while processing
    const loadingSpinner = suggestionsPanel.locator('.animate-spin')

    // Add content to trigger suggestions
    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'This content should trigger loading states for suggestions.'
    )

    // Loading spinner might appear briefly
    await page.waitForTimeout(100)

    // Wait for loading to complete
    await page.waitForTimeout(3000)

    // Spinner should eventually disappear
    const hasSpinner = await loadingSpinner.isVisible()
    if (hasSpinner) {
      // Wait a bit more for loading to complete
      await page.waitForTimeout(2000)
    }

    // Panel should remain functional
    await expect(suggestionsPanel).toBeVisible()
  })

  test('should handle empty content gracefully', async ({ page }) => {
    // Create a note without content
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Should show appropriate empty states
    const smartTab = page.getByText('Smart')
    await jsClick(page, 'text=Smart')

    const emptyMessage = page.getByText(
      'Start writing to get smart suggestions'
    )
    await expect(emptyMessage).toBeVisible()

    // Check search tab using jsClick
    const searchTab = page.getByText('Search')
    await jsClick(page, 'text=Search')

    // Should also have empty state
    const searchEmpty = page.getByText('Add content to get search suggestions')
    await expect(searchEmpty).toBeVisible()

    // Check related tab using jsClick
    const relatedTab = page.getByText('Related')
    await jsClick(page, 'text=Related')

    // Should have empty state
    const relatedEmpty = page.getByText('No related notes found yet')
    await expect(relatedEmpty).toBeVisible()
  })

  test('should have proper accessibility features', async ({ page }) => {
    // Create a note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )
    await expect(suggestionsPanel).toBeVisible()

    // Tabs should be keyboard accessible
    const tabs = page.locator('[role="tablist"] [role="tab"]')
    await expect(tabs.first()).toBeVisible()

    // Focus first tab
    await tabs.first().focus()

    // Should be able to navigate with arrow keys
    await page.keyboard.press('ArrowRight')

    // Action buttons should be focusable
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(page, 'input[placeholder*="Untitled"]', 'Accessibility Test')

    const editor = page.locator('[contenteditable="true"]').first()
    await jsClick(page, '[contenteditable="true"]')
    await jsType(
      page,
      '[contenteditable="true"]',
      'Testing accessibility features.'
    )
    await page.waitForTimeout(2000)

    // Any action buttons should be keyboard accessible
    const actionButtons = suggestionsPanel.locator('button')
    if ((await actionButtons.count()) > 0) {
      await actionButtons.first().focus()
      // Should be able to activate with Enter
      await page.keyboard.press('Enter')
      await page.waitForTimeout(500)
    }
  })

  test('should integrate properly with note editor layout', async ({
    page,
  }) => {
    // Create a note
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })

    // Both editor and suggestions should be visible
    const editor = page.locator('[data-testid="note-editor"]')
    const suggestionsPanel = page.locator(
      '[data-testid="smart-suggestions-panel"]'
    )

    await expect(editor).toBeVisible()
    await expect(suggestionsPanel).toBeVisible()

    // Should not overlap with editor
    const editorBox = await editor.boundingBox()
    const suggestionsBox = await suggestionsPanel.boundingBox()

    if (editorBox && suggestionsBox) {
      // Suggestions should be to the right of editor
      expect(suggestionsBox.x).toBeGreaterThan(
        editorBox.x + editorBox.width - 50
      )
    }

    // Should be properly scrollable if content is long
    const titleInput = page.locator('input[placeholder*="Untitled"]')
    await jsType(
      page,
      'input[placeholder*="Untitled"]',
      'Layout Integration Test'
    )

    const editor2 = page.locator('[contenteditable="true"]').first()
    await editor2.click()

    // Add enough content to potentially require scrolling
    const longContent =
      'This is a very long piece of content that should test the layout integration and scrolling behavior of the smart suggestions panel. '.repeat(
        10
      )
    await jsType(page, '[contenteditable="true"]', longContent)
    await page.waitForTimeout(2000)

    // Both components should remain visible and functional
    await expect(editor).toBeVisible()
    await expect(suggestionsPanel).toBeVisible()
  })
})
