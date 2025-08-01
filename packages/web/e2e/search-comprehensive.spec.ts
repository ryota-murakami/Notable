import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Search Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to auth page and sign in
    await page.goto('/auth')
    await page.waitForSelector('[data-testid="auth-container"]', {
      timeout: 10000,
    })

    // Sign in with test credentials
    await page.fill('[data-testid="email-input"]', 'test@example.com')
    await page.fill('[data-testid="password-input"]', 'password123')
    await page.click('[data-testid="submit-button"]')

    // Wait for redirect to app
    await page.waitForURL('/app', { timeout: 10000 })
  })

  test.describe('Basic Search', () => {
    test('should open search with keyboard shortcut', async ({ page }) => {
      // Press search shortcut
      await page.keyboard.press('Control+k')

      // Verify search dialog opens
      await expect(page.locator('[data-testid="search-dialog"]')).toBeVisible()

      // Verify search input is focused
      await expect(page.locator('[data-testid="search-input"]')).toBeFocused()
    })

    test('should search notes by title', async ({ page }) => {
      // Create test notes
      const notes = ['JavaScript Tutorial', 'Python Guide', 'TypeScript Basics']

      for (const title of notes) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill('[data-testid="note-title"]', title)
        await page.keyboard.press('Control+s')
      }

      // Open search
      await page.keyboard.press('Control+k')

      // Search for "Script"
      await page.fill('[data-testid="search-input"]', 'Script')

      // Verify results
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(2)
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'JavaScript Tutorial'
      )
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'TypeScript Basics'
      )
    })

    test('should search notes by content', async ({ page }) => {
      // Create note with specific content
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'React Hooks')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()
      await editor.type(
        'useEffect is a powerful hook for handling side effects'
      )
      await page.keyboard.press('Control+s')

      // Search for content
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'useEffect')

      // Verify result
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'React Hooks'
      )
      await expect(
        page.locator('[data-testid="search-result-preview"]')
      ).toContainText('useEffect is a powerful')
    })

    test('should highlight search terms in results', async ({ page }) => {
      // Create note
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Search Highlighting Test')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()
      await editor.type('This is a test of search highlighting functionality')
      await page.keyboard.press('Control+s')

      // Search
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'highlighting')

      // Verify highlighting
      await expect(
        page.locator('[data-testid="search-highlight"]')
      ).toContainText('highlighting')
      await expect(page.locator('[data-testid="search-highlight"]')).toHaveCSS(
        'background-color',
        'rgb(255, 239, 213)'
      )
    })

    test('should show no results message', async ({ page }) => {
      // Search for non-existent content
      await page.keyboard.press('Control+k')
      await page.fill(
        '[data-testid="search-input"]',
        'NonExistentSearchTerm123'
      )

      // Verify no results message
      await expect(
        page.locator('[data-testid="no-search-results"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="no-search-results"]')
      ).toContainText('No results found')
    })

    test('should navigate search results with keyboard', async ({ page }) => {
      // Create multiple notes
      for (let i = 1; i <= 3; i++) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill('[data-testid="note-title"]', `Test Note ${i}`)
        await page.keyboard.press('Control+s')
      }

      // Open search
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Test Note')

      // Navigate with arrow keys
      await page.keyboard.press('ArrowDown')
      await expect(
        page.locator('[data-testid="search-result"]:nth-child(1)')
      ).toHaveClass(/selected/)

      await page.keyboard.press('ArrowDown')
      await expect(
        page.locator('[data-testid="search-result"]:nth-child(2)')
      ).toHaveClass(/selected/)

      await page.keyboard.press('ArrowUp')
      await expect(
        page.locator('[data-testid="search-result"]:nth-child(1)')
      ).toHaveClass(/selected/)

      // Select with Enter
      await page.keyboard.press('Enter')

      // Verify navigation to note
      await expect(page.locator('[data-testid="note-title"]')).toHaveValue(
        'Test Note 1'
      )
    })
  })

  test.describe('Advanced Search', () => {
    test('should open advanced search dialog', async ({ page }) => {
      // Open search
      await page.keyboard.press('Control+k')

      // Click advanced search button
      await page.click('[data-testid="advanced-search-button"]')

      // Verify advanced search dialog
      await expect(
        page.locator('[data-testid="advanced-search-dialog"]')
      ).toBeVisible()
      await expect(page.locator('[data-testid="search-filters"]')).toBeVisible()
    })

    test('should filter by date range', async ({ page }) => {
      // Create notes on different dates
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Old Note')
      await page.keyboard.press('Control+s')

      // Open advanced search
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')

      // Set date filter
      await page.click('[data-testid="date-filter-toggle"]')
      await page.fill('[data-testid="date-from"]', '2024-01-01')
      await page.fill('[data-testid="date-to"]', '2024-12-31')

      // Apply filter
      await page.click('[data-testid="apply-filters"]')

      // Verify filtered results
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(0)
    })

    test('should filter by tags', async ({ page }) => {
      // Create notes with tags
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Tagged Note')

      // Add tags
      await page.click('[data-testid="tag-input"]')
      await page.type('important')
      await page.keyboard.press('Enter')
      await page.type('work')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Control+s')

      // Open advanced search
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')

      // Filter by tag
      await page.click('[data-testid="tag-filter-toggle"]')
      await page.click('[data-testid="tag-filter-important"]')
      await page.click('[data-testid="apply-filters"]')

      // Verify results
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'Tagged Note'
      )
    })

    test('should filter by note type', async ({ page }) => {
      // Create different types of notes
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Regular Note')
      await page.keyboard.press('Control+s')

      // Create from template
      await page.click('[data-testid="new-from-template-button"]')
      await page.click('[data-testid="template-meeting-notes"]')
      await page.fill('[data-testid="note-title"]', 'Meeting Note')
      await page.keyboard.press('Control+s')

      // Open advanced search
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')

      // Filter by type
      await page.click('[data-testid="type-filter-toggle"]')
      await page.click('[data-testid="type-filter-template"]')
      await page.click('[data-testid="apply-filters"]')

      // Verify results
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'Meeting Note'
      )
    })

    test('should use boolean operators', async ({ page }) => {
      // Create notes
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'JavaScript and React')
      await page.keyboard.press('Control+s')

      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'JavaScript without React')
      await page.keyboard.press('Control+s')

      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Python and Django')
      await page.keyboard.press('Control+s')

      // Search with AND operator
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')
      await page.fill('[data-testid="search-query"]', 'JavaScript AND React')
      await page.click('[data-testid="search-button"]')

      // Verify results
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'JavaScript and React'
      )

      // Search with OR operator
      await page.fill('[data-testid="search-query"]', 'JavaScript OR Python')
      await page.click('[data-testid="search-button"]')

      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(3)

      // Search with NOT operator
      await page.fill('[data-testid="search-query"]', 'JavaScript NOT React')
      await page.click('[data-testid="search-button"]')

      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'JavaScript without React'
      )
    })

    test('should search with regular expressions', async ({ page }) => {
      // Create notes
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Test123')
      await page.keyboard.press('Control+s')

      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Test456')
      await page.keyboard.press('Control+s')

      // Search with regex
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')
      await page.click('[data-testid="regex-toggle"]')
      await page.fill('[data-testid="search-query"]', 'Test\\d{3}')
      await page.click('[data-testid="search-button"]')

      // Verify results
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(2)
    })
  })

  test.describe('Search History', () => {
    test('should save search history', async ({ page }) => {
      // Perform searches
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'First search')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Escape')

      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Second search')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Escape')

      // Open search and check history
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="search-history-button"]')

      // Verify history
      await expect(
        page.locator('[data-testid="search-history-item"]')
      ).toHaveCount(2)
      await expect(
        page.locator('[data-testid="search-history-item"]').first()
      ).toContainText('Second search')
      await expect(
        page.locator('[data-testid="search-history-item"]').last()
      ).toContainText('First search')
    })

    test('should reuse search from history', async ({ page }) => {
      // Perform a search
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Historical search')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Escape')

      // Open search and select from history
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="search-history-button"]')
      await page.click(
        '[data-testid="search-history-item"]:has-text("Historical search")'
      )

      // Verify search input is filled
      await expect(page.locator('[data-testid="search-input"]')).toHaveValue(
        'Historical search'
      )
    })

    test('should clear search history', async ({ page }) => {
      // Perform searches
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Search to clear')
      await page.keyboard.press('Enter')
      await page.keyboard.press('Escape')

      // Open search history
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="search-history-button"]')

      // Clear history
      await page.click('[data-testid="clear-history-button"]')
      await page.click('[data-testid="confirm-clear-history"]')

      // Verify history is cleared
      await expect(
        page.locator('[data-testid="search-history-empty"]')
      ).toBeVisible()
    })
  })

  test.describe('Saved Searches', () => {
    test('should save a search', async ({ page }) => {
      // Perform advanced search
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')
      await page.fill('[data-testid="search-query"]', 'Important project notes')

      // Add filters
      await page.click('[data-testid="tag-filter-toggle"]')
      await page.click('[data-testid="tag-filter-work"]')

      // Save search
      await page.click('[data-testid="save-search-button"]')
      await page.fill('[data-testid="saved-search-name"]', 'Work Projects')
      await page.click('[data-testid="confirm-save-search"]')

      // Verify saved
      await expect(
        page.locator('[data-testid="search-saved-notification"]')
      ).toBeVisible()
    })

    test('should load saved search', async ({ page }) => {
      // Create and save a search first
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')
      await page.fill('[data-testid="search-query"]', 'Saved query')
      await page.click('[data-testid="save-search-button"]')
      await page.fill('[data-testid="saved-search-name"]', 'My Saved Search')
      await page.click('[data-testid="confirm-save-search"]')
      await page.keyboard.press('Escape')

      // Open saved searches
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="saved-searches-button"]')

      // Load saved search
      await page.click(
        '[data-testid="saved-search-item"]:has-text("My Saved Search")'
      )

      // Verify search is loaded
      await expect(page.locator('[data-testid="search-query"]')).toHaveValue(
        'Saved query'
      )
    })

    test('should delete saved search', async ({ page }) => {
      // Create and save a search
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="advanced-search-button"]')
      await page.fill('[data-testid="search-query"]', 'To delete')
      await page.click('[data-testid="save-search-button"]')
      await page.fill('[data-testid="saved-search-name"]', 'Delete Me')
      await page.click('[data-testid="confirm-save-search"]')
      await page.keyboard.press('Escape')

      // Open saved searches
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="saved-searches-button"]')

      // Delete saved search
      await page.hover(
        '[data-testid="saved-search-item"]:has-text("Delete Me")'
      )
      await page.click('[data-testid="delete-saved-search"]')
      await page.click('[data-testid="confirm-delete"]')

      // Verify deleted
      await expect(
        page.locator('[data-testid="saved-search-item"]:has-text("Delete Me")')
      ).toHaveCount(0)
    })
  })

  test.describe('Search Suggestions', () => {
    test('should show search suggestions', async ({ page }) => {
      // Create notes with common terms
      const titles = [
        'React Components',
        'React Hooks',
        'React Context',
        'Vue Components',
      ]

      for (const title of titles) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill('[data-testid="note-title"]', title)
        await page.keyboard.press('Control+s')
      }

      // Open search and type partial term
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Rea')

      // Verify suggestions
      await expect(
        page.locator('[data-testid="search-suggestion"]')
      ).toHaveCount(3)
      await expect(
        page.locator('[data-testid="search-suggestion"]')
      ).toContainText('React')
    })

    test('should autocomplete from suggestions', async ({ page }) => {
      // Create note
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'TypeScript Interfaces')
      await page.keyboard.press('Control+s')

      // Open search and type partial
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Type')

      // Select suggestion
      await page.click(
        '[data-testid="search-suggestion"]:has-text("TypeScript")'
      )

      // Verify autocomplete
      await expect(page.locator('[data-testid="search-input"]')).toHaveValue(
        'TypeScript'
      )
    })
  })

  test.describe('Search Performance', () => {
    test('should handle large search results efficiently', async ({ page }) => {
      // Create many notes
      for (let i = 0; i < 50; i++) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill(
          '[data-testid="note-title"]',
          `Performance Test Note ${i}`
        )
        await page.keyboard.press('Control+s')
      }

      // Search for all notes
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Performance Test')

      // Verify pagination
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(
        20
      ) // First page
      await expect(
        page.locator('[data-testid="search-pagination"]')
      ).toBeVisible()

      // Navigate to next page
      await page.click('[data-testid="search-next-page"]')
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(
        20
      )
    })

    test('should debounce search input', async ({ page }) => {
      // Open search
      await page.keyboard.press('Control+k')

      // Type quickly
      await page
        .locator('[data-testid="search-input"]')
        .pressSequentially('test search query', { delay: 50 })

      // Verify search doesn't trigger for each character
      await page.waitForTimeout(300) // Wait for debounce

      // Verify only one search request was made
      await expect(page.locator('[data-testid="search-loading"]')).toHaveCount(
        0
      )
    })
  })

  test.describe('Search Integration', () => {
    test('should integrate with command palette', async ({ page }) => {
      // Open command palette
      await page.keyboard.press('Control+Shift+p')

      // Search for search command
      await page.fill('[data-testid="command-input"]', 'search')

      // Verify search commands
      await expect(page.locator('[data-testid="command-item"]')).toContainText(
        'Search notes'
      )
      await expect(page.locator('[data-testid="command-item"]')).toContainText(
        'Advanced search'
      )
      await expect(page.locator('[data-testid="command-item"]')).toContainText(
        'Search history'
      )

      // Execute search command
      await page.click('[data-testid="command-item"]:has-text("Search notes")')

      // Verify search opens
      await expect(page.locator('[data-testid="search-dialog"]')).toBeVisible()
    })

    test('should update search index on note changes', async ({ page }) => {
      // Create a note
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Original Title')
      await page.keyboard.press('Control+s')

      // Search for original title
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Original')
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)
      await page.keyboard.press('Escape')

      // Update note title
      await page.click(
        '[data-testid="note-list-item"]:has-text("Original Title")'
      )
      await page.fill('[data-testid="note-title"]', 'Updated Title')
      await page.keyboard.press('Control+s')

      // Search for updated title
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Updated')
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)

      // Original should not be found
      await page.fill('[data-testid="search-input"]', 'Original')
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(0)
    })

    test('should search within current folder', async ({ page }) => {
      // Create folder structure
      await page.click('[data-testid="new-folder-button"]')
      await page.fill('[data-testid="folder-name-input"]', 'Work')
      await page.keyboard.press('Enter')

      // Create note in folder
      await page.click('[data-testid="folder-Work"]')
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Work Note')
      await page.keyboard.press('Control+s')

      // Go back to root
      await page.click('[data-testid="folder-root"]')

      // Create note in root
      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Root Note')
      await page.keyboard.press('Control+s')

      // Navigate to Work folder
      await page.click('[data-testid="folder-Work"]')

      // Search with folder filter
      await page.keyboard.press('Control+k')
      await page.click('[data-testid="search-in-folder-toggle"]')
      await page.fill('[data-testid="search-input"]', 'Note')

      // Verify only Work folder note is shown
      await expect(page.locator('[data-testid="search-result"]')).toHaveCount(1)
      await expect(page.locator('[data-testid="search-result"]')).toContainText(
        'Work Note'
      )
    })
  })

  test.describe('Search Export', () => {
    test('should export search results', async ({ page }) => {
      // Create notes
      for (let i = 1; i <= 3; i++) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill('[data-testid="note-title"]', `Export Test ${i}`)
        await page.keyboard.press('Control+s')
      }

      // Search
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Export Test')

      // Export results
      await page.click('[data-testid="export-search-results"]')
      await page.click('[data-testid="export-format-csv"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('search-results')
      expect(download.suggestedFilename()).toContain('.csv')
    })
  })

  test.describe('Search Accessibility', () => {
    test('should have proper ARIA labels', async ({ page }) => {
      // Open search
      await page.keyboard.press('Control+k')

      // Verify ARIA labels
      await expect(
        page.locator('[data-testid="search-dialog"]')
      ).toHaveAttribute('role', 'dialog')
      await expect(
        page.locator('[data-testid="search-dialog"]')
      ).toHaveAttribute('aria-label', 'Search notes')
      await expect(
        page.locator('[data-testid="search-input"]')
      ).toHaveAttribute('aria-label', 'Search query')
      await expect(
        page.locator('[data-testid="search-results"]')
      ).toHaveAttribute('role', 'listbox')
    })

    test('should announce search results', async ({ page }) => {
      // Create a note
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'Accessibility Test')
      await page.keyboard.press('Control+s')

      // Search
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="search-input"]', 'Accessibility')

      // Verify aria-live announcement
      await expect(
        page.locator('[data-testid="search-status"]')
      ).toHaveAttribute('aria-live', 'polite')
      await expect(page.locator('[data-testid="search-status"]')).toContainText(
        '1 result found'
      )
    })
  })
})
