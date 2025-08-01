import { expect, test } from './fixtures/coverage'

test.describe('Advanced Search System', () => {
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
  })

  test('should open advanced search with global search trigger', async ({
    page,
  }) => {
    // Click the global search trigger
    await page.click('[data-testid="global-search-trigger"]')

    // Verify advanced search dialog opens
    await expect(page.locator('[role="dialog"]')).toBeVisible()
    await expect(
      page.locator('[data-testid="advanced-search-dialog"]')
    ).toBeVisible()

    // Verify search input is focused
    await expect(page.locator('[data-testid="search-input"]')).toBeFocused()
  })

  test('should search notes by content', async ({ page }) => {
    // Create a test note
    await page.click('text=New Note')
    await page.waitForTimeout(500)

    // Add content to the note
    const noteTitle = 'Test Note for Search'
    const noteContent =
      'This is a test note with searchable content about TypeScript and React'

    // Wait for editor to be ready
    await page.waitForSelector('[data-plate-selectable="true"]', {
      timeout: 10000,
    })

    // Add title and content
    await page.fill('[placeholder="Untitled"]', noteTitle)
    await page.click('[data-plate-selectable="true"]')
    await page.keyboard.type(noteContent)
    await page.waitForTimeout(1000) // Wait for auto-save

    // Open search
    await page.click('[data-testid="global-search-trigger"]')

    // Search for TypeScript
    await page.fill('[data-testid="search-input"]', 'TypeScript')
    await page.waitForTimeout(300) // Debounce

    // Verify search results
    await expect(
      page.locator('[data-testid="search-result"]').first()
    ).toContainText(noteTitle)
    await expect(
      page.locator('[data-testid="search-highlight"]')
    ).toContainText('TypeScript')
  })

  test('should filter search by tags', async ({ page }) => {
    // Create a note with tags
    await page.click('text=New Note')
    await page.waitForTimeout(500)

    // Add title and tag
    await page.fill('[placeholder="Untitled"]', 'Tagged Note')
    await page.fill('[placeholder="Add tags..."]', 'important')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(1000)

    // Open search
    await page.click('[data-testid="global-search-trigger"]')

    // Click filter button
    await page.click('[data-testid="search-filters-button"]')

    // Select tag filter
    await page.click('[data-testid="tag-filter-option"]')
    await page.click('text=important')

    // Verify filtered results
    await expect(page.locator('[data-testid="search-result"]')).toContainText(
      'Tagged Note'
    )
    await expect(page.locator('[data-testid="active-filter"]')).toContainText(
      'important'
    )
  })

  test('should show search suggestions', async ({ page }) => {
    // Create multiple notes
    const notes = [
      {
        title: 'React Hooks Guide',
        content: 'useState, useEffect, useContext',
      },
      {
        title: 'React Performance',
        content: 'React.memo, useMemo, useCallback',
      },
      { title: 'TypeScript Basics', content: 'Types, Interfaces, Generics' },
    ]

    for (const note of notes) {
      await page.click('text=New Note')
      await page.waitForTimeout(500)
      await page.fill('[placeholder="Untitled"]', note.title)
      await page.click('[data-plate-selectable="true"]')
      await page.keyboard.type(note.content)
      await page.waitForTimeout(1000)
    }

    // Open search
    await page.click('[data-testid="global-search-trigger"]')

    // Type partial query
    await page.fill('[data-testid="search-input"]', 'Rea')
    await page.waitForTimeout(300)

    // Verify suggestions appear
    await expect(page.locator('[data-testid="search-suggestion"]')).toHaveCount(
      2
    )
    await expect(
      page.locator('[data-testid="search-suggestion"]').first()
    ).toContainText('React')
  })

  test('should save and load search history', async ({ page }) => {
    // Perform a search
    await page.click('[data-testid="global-search-trigger"]')
    await page.fill('[data-testid="search-input"]', 'test search query')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(500)

    // Close search
    await page.keyboard.press('Escape')

    // Reopen search
    await page.click('[data-testid="global-search-trigger"]')

    // Click history tab
    await page.click('[data-testid="search-history-tab"]')

    // Verify search appears in history
    await expect(
      page.locator('[data-testid="search-history-item"]')
    ).toContainText('test search query')

    // Click to rerun search
    await page.click('[data-testid="search-history-item"]')
    await expect(page.locator('[data-testid="search-input"]')).toHaveValue(
      'test search query'
    )
  })

  test('should save searches', async ({ page }) => {
    // Open search and enter query
    await page.click('[data-testid="global-search-trigger"]')
    await page.fill('[data-testid="search-input"]', 'important documents')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(500)

    // Save search
    await page.click('[data-testid="save-search-button"]')
    await page.fill('[data-testid="save-search-name"]', 'My Important Docs')
    await page.click('[data-testid="confirm-save-search"]')

    // Navigate to saved searches
    await page.click('[data-testid="saved-searches-tab"]')

    // Verify saved search appears
    await expect(
      page.locator('[data-testid="saved-search-item"]')
    ).toContainText('My Important Docs')
    await expect(
      page.locator('[data-testid="saved-search-query"]')
    ).toContainText('important documents')
  })

  test('should navigate to note from search results', async ({ page }) => {
    // Create a note
    await page.click('text=New Note')
    await page.waitForTimeout(500)
    const noteTitle = 'Navigation Test Note'
    await page.fill('[placeholder="Untitled"]', noteTitle)
    await page.waitForTimeout(1000)

    // Search for the note
    await page.click('[data-testid="global-search-trigger"]')
    await page.fill('[data-testid="search-input"]', noteTitle)
    await page.waitForTimeout(300)

    // Click search result
    await page.click('[data-testid="search-result"]')

    // Verify navigation
    await expect(page).toHaveURL(/\/notes\//)
    await expect(page.locator('[placeholder="Untitled"]')).toHaveValue(
      noteTitle
    )

    // Verify search dialog closed
    await expect(
      page.locator('[data-testid="advanced-search-dialog"]')
    ).not.toBeVisible()
  })

  test('should handle empty search results', async ({ page }) => {
    // Search for non-existent content
    await page.click('[data-testid="global-search-trigger"]')
    await page.fill('[data-testid="search-input"]', 'xyznonexistentquery123')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(500)

    // Verify empty state
    await expect(
      page.locator('[data-testid="search-empty-state"]')
    ).toBeVisible()
    await expect(
      page.locator('[data-testid="search-empty-state"]')
    ).toContainText('No results found')
  })

  test('should support keyboard navigation', async ({ page }) => {
    // Create multiple notes
    for (let i = 1; i <= 3; i++) {
      await page.click('text=New Note')
      await page.waitForTimeout(500)
      await page.fill('[placeholder="Untitled"]', `Note ${i}`)
      await page.waitForTimeout(1000)
    }

    // Open search
    await page.click('[data-testid="global-search-trigger"]')
    await page.fill('[data-testid="search-input"]', 'Note')
    await page.waitForTimeout(300)

    // Navigate with arrow keys
    await page.keyboard.press('ArrowDown')
    await expect(
      page.locator('[data-testid="search-result"][data-selected="true"]')
    ).toHaveCount(1)

    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowUp')

    // Select with Enter
    const selectedText = await page
      .locator('[data-testid="search-result"][data-selected="true"]')
      .textContent()
    await page.keyboard.press('Enter')

    // Verify navigation
    await expect(page.locator('[placeholder="Untitled"]')).toHaveValue(
      selectedText?.trim() || ''
    )
  })

  test('should close search with Escape key', async ({ page }) => {
    // Open search
    await page.click('[data-testid="global-search-trigger"]')
    await expect(
      page.locator('[data-testid="advanced-search-dialog"]')
    ).toBeVisible()

    // Press Escape
    await page.keyboard.press('Escape')

    // Verify search closed
    await expect(
      page.locator('[data-testid="advanced-search-dialog"]')
    ).not.toBeVisible()
  })
})
