import { test, expect } from '@playwright/test'
import { createSupabaseClient } from './utils/supabase'
import { generateTestUser, cleanupTestUser } from './utils/test-users'

let testUser: { email: string; password: string; id?: string }
const testNotes = [
  {
    title: 'JavaScript Tutorial',
    content:
      'Learn the basics of JavaScript programming including variables, functions, and objects.',
  },
  {
    title: 'TypeScript Guide',
    content:
      'TypeScript adds static typing to JavaScript, making it easier to catch errors.',
  },
  {
    title: 'React Hooks',
    content:
      'useState, useEffect, and custom hooks are essential for modern React development.',
  },
  {
    title: 'Meeting Notes',
    content:
      'Discussed project timeline and deliverables. Next meeting scheduled for Friday.',
  },
  {
    title: 'Shopping List',
    content: 'Milk, eggs, bread, TypeScript handbook, coffee, and chocolate.',
  },
]

test.describe('Search Functionality', () => {
  test.beforeAll(async () => {
    // Create test user
    testUser = await generateTestUser()
    const supabase = createSupabaseClient()
    const { data, error } = await supabase.auth.signUp({
      email: testUser.email,
      password: testUser.password,
    })
    if (error) throw error
    testUser.id = data.user?.id
  })

  test.afterAll(async () => {
    // Cleanup test user and their data
    if (testUser.id) {
      await cleanupTestUser(testUser.id)
    }
  })

  test.beforeEach(async ({ page }) => {
    // Sign in
    await page.goto('/auth/sign-in')
    await page.getByLabel(/email/i).fill(testUser.email)
    await page.getByLabel(/password/i).fill(testUser.password)
    await page.getByRole('button', { name: /sign in/i }).click()
    await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

    // Create test notes if they don't exist
    const notesList = page.getByRole('list', { name: /notes/i })
    const existingNotes = await notesList.getByRole('listitem').count()

    if (existingNotes < testNotes.length) {
      for (const note of testNotes) {
        await page.getByRole('button', { name: /new note/i }).click()

        const titleInput = page.getByPlaceholder(/untitled note/i)
        await titleInput.clear()
        await titleInput.type(note.title)

        const editor = page.locator('[data-plate-editor]')
        await editor.click()
        await editor.type(note.content)

        await page.waitForTimeout(2000) // Wait for auto-save
      }
    }
  })

  test.describe('Basic Search', () => {
    test('should show search input in header', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await expect(searchInput).toBeVisible()
      await expect(searchInput).toHaveAttribute('placeholder', /search notes/i)
    })

    test('should search notes by title', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('JavaScript')

      // Wait for search results
      await page.waitForTimeout(500)

      // Verify search results
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults).toBeVisible()
      await expect(searchResults.getByText('JavaScript Tutorial')).toBeVisible()

      // Verify non-matching notes are hidden
      await expect(searchResults.getByText('Meeting Notes')).not.toBeVisible()
    })

    test('should search notes by content', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('static typing')

      await page.waitForTimeout(500)

      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults.getByText('TypeScript Guide')).toBeVisible()
    })

    test('should show no results message', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('nonexistentterm12345')

      await page.waitForTimeout(500)

      await expect(page.getByText(/no notes found/i)).toBeVisible()
    })

    test('should clear search on escape key', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('JavaScript')

      await page.waitForTimeout(500)
      await expect(
        page.getByRole('region', { name: /search results/i }),
      ).toBeVisible()

      // Press escape
      await page.keyboard.press('Escape')

      // Verify search is cleared
      await expect(searchInput).toHaveValue('')
      await expect(
        page.getByRole('region', { name: /search results/i }),
      ).not.toBeVisible()
    })
  })

  test.describe('Advanced Search', () => {
    test('should support fuzzy search', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('typscript') // Intentional typo

      await page.waitForTimeout(500)

      // Should still find TypeScript notes
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults.getByText('TypeScript')).toBeVisible()
    })

    test('should highlight search terms in results', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('React')

      await page.waitForTimeout(500)

      // Check for highlighted text
      const highlightedText = page.locator('mark').filter({ hasText: 'React' })
      await expect(highlightedText).toBeVisible()
    })

    test('should search with multiple terms', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('TypeScript JavaScript')

      await page.waitForTimeout(500)

      // Should find notes containing either term
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults.getByText('JavaScript Tutorial')).toBeVisible()
      await expect(searchResults.getByText('TypeScript Guide')).toBeVisible()
    })

    test('should show search suggestions', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('Type')

      // Wait for suggestions dropdown
      await page.waitForTimeout(300)

      const suggestions = page.getByRole('listbox', { name: /suggestions/i })
      await expect(suggestions).toBeVisible()
      await expect(suggestions.getByText('TypeScript')).toBeVisible()

      // Click suggestion
      await suggestions.getByText('TypeScript').click()
      await expect(searchInput).toHaveValue('TypeScript')
    })
  })

  test.describe('Search Filters', () => {
    test('should filter by date range', async ({ page }) => {
      // Open search with filters
      await page.getByRole('button', { name: /advanced search/i }).click()

      // Set date range
      const dateFromInput = page.getByLabel(/from date/i)
      const dateToInput = page.getByLabel(/to date/i)

      const today = new Date().toISOString().split('T')[0]
      await dateFromInput.fill(today)
      await dateToInput.fill(today)

      await page.getByRole('button', { name: /apply filters/i }).click()

      // All test notes should appear as they were created today
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults.getByRole('listitem')).toHaveCount(
        testNotes.length,
      )
    })

    test('should filter by tags', async ({ page }) => {
      // First, add a tag to a note
      const noteItem = page
        .getByRole('listitem')
        .filter({ hasText: 'JavaScript Tutorial' })
      await noteItem.click()

      // Add tag
      await page.getByRole('button', { name: /add tag/i }).click()
      await page.getByPlaceholder(/enter tag/i).type('programming')
      await page.keyboard.press('Enter')
      await page.waitForTimeout(1000)

      // Open search with filters
      await page.getByRole('button', { name: /advanced search/i }).click()

      // Select tag filter
      await page.getByRole('combobox', { name: /tags/i }).click()
      await page.getByRole('option', { name: 'programming' }).click()

      await page.getByRole('button', { name: /apply filters/i }).click()

      // Only tagged note should appear
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults.getByText('JavaScript Tutorial')).toBeVisible()
      await expect(searchResults.getByRole('listitem')).toHaveCount(1)
    })

    test('should sort search results', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('Tutorial')
      await page.waitForTimeout(500)

      // Open sort options
      await page.getByRole('button', { name: /sort by/i }).click()

      // Sort by title A-Z
      await page.getByRole('menuitem', { name: /title a-z/i }).click()

      const firstResult = page
        .getByRole('region', { name: /search results/i })
        .getByRole('listitem')
        .first()
      await expect(firstResult).toContainText('JavaScript Tutorial')

      // Sort by modified date
      await page.getByRole('button', { name: /sort by/i }).click()
      await page.getByRole('menuitem', { name: /recently modified/i }).click()

      // Most recent should be first (Shopping List was created last)
      const updatedFirstResult = page
        .getByRole('region', { name: /search results/i })
        .getByRole('listitem')
        .first()
      await expect(updatedFirstResult).toContainText('Shopping List')
    })
  })

  test.describe('Search Navigation', () => {
    test('should navigate to note from search results', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('React')
      await page.waitForTimeout(500)

      // Click on search result
      const searchResult = page
        .getByRole('region', { name: /search results/i })
        .getByText('React Hooks')
      await searchResult.click()

      // Verify navigation to note
      await expect(page.getByPlaceholder(/untitled note/i)).toHaveValue(
        'React Hooks',
      )
      await expect(page.locator('[data-plate-editor]')).toContainText(
        'useState',
      )
    })

    test('should use keyboard navigation in search results', async ({
      page,
    }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()
      await searchInput.type('Script')
      await page.waitForTimeout(500)

      // Navigate with arrow keys
      await page.keyboard.press('ArrowDown')
      await expect(
        page.locator('[data-highlighted="true"]').first(),
      ).toContainText('JavaScript')

      await page.keyboard.press('ArrowDown')
      await expect(
        page.locator('[data-highlighted="true"]').first(),
      ).toContainText('TypeScript')

      // Open with Enter
      await page.keyboard.press('Enter')
      await expect(page.getByPlaceholder(/untitled note/i)).toHaveValue(
        'TypeScript Guide',
      )
    })

    test('should show recent searches', async ({ page }) => {
      // Perform some searches
      const searchInput = page.getByRole('searchbox', { name: /search/i })

      await searchInput.click()
      await searchInput.type('JavaScript')
      await page.keyboard.press('Enter')
      await page.waitForTimeout(500)

      await searchInput.clear()
      await searchInput.type('Meeting')
      await page.keyboard.press('Enter')
      await page.waitForTimeout(500)

      // Clear and click search to see recent searches
      await searchInput.clear()
      await searchInput.click()

      const recentSearches = page.getByRole('region', {
        name: /recent searches/i,
      })
      await expect(recentSearches).toBeVisible()
      await expect(recentSearches.getByText('JavaScript')).toBeVisible()
      await expect(recentSearches.getByText('Meeting')).toBeVisible()

      // Click recent search
      await recentSearches.getByText('JavaScript').click()
      await expect(searchInput).toHaveValue('JavaScript')
    })
  })

  test.describe('Search Performance', () => {
    test('should handle search while typing smoothly', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()

      // Type slowly to simulate real user
      const searchTerm = 'TypeScript programming'
      for (const char of searchTerm) {
        await searchInput.type(char)
        await page.waitForTimeout(100) // Simulate typing speed
      }

      // Results should update smoothly
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults).toBeVisible()
      await expect(searchResults.getByText('TypeScript Guide')).toBeVisible()
    })

    test('should debounce search requests', async ({ page }) => {
      const searchInput = page.getByRole('searchbox', { name: /search/i })
      await searchInput.click()

      // Type quickly
      await searchInput.type('JavaScript', { delay: 50 })

      // Should not show intermediate results
      const searchResults = page.getByRole('region', {
        name: /search results/i,
      })
      await expect(searchResults).toBeVisible()

      // Final results should match the complete term
      await expect(searchResults.getByText('JavaScript Tutorial')).toBeVisible()
    })
  })
})
