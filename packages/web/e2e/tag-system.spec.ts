import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
// Removed jsClick and jsType imports - using standard Playwright APIs

/**
 * Comprehensive E2E Tests for Tag System
 *
 * Tests cover all aspects of Issue #249: Implement Comprehensive Tag System
 * - Basic tag CRUD operations
 * - Hierarchical tag management
 * - Tag filtering and search
 * - Bulk tag operations
 * - Tag cloud visualization
 * - Keyboard shortcuts
 * - Tag statistics and analytics
 */

test.describe('Tag System', () => {
  test.beforeEach(async ({ page }) => {
    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate to the app
    await page.goto('http://localhost:4378/app')

    // Wait for app to load
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test.describe('Basic Tag Operations', () => {
    test('should create a new tag', async ({ page }) => {
      // Navigate to tag management using JavaScript evaluation for better reliability
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Wait for the dialog to appear
      await page.waitForSelector('[role="dialog"]')

      // Click on "Manage Tags" section in the dialog sidebar using JavaScript evaluation
      await page.evaluate(() => {
        const dialogButtons = Array.from(
          document.querySelectorAll('[role="dialog"] button')
        )
        const manageTagsBtn = dialogButtons.find(
          (btn) => btn.textContent && btn.textContent.trim() === 'Manage Tags'
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Create new tag using JavaScript evaluation
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const createTagBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('create tag')
        )
        if (createTagBtn) {
          ;(createTagBtn as HTMLElement).click()
        }
      })

      // Wait for the create dialog to appear
      await page.waitForSelector('[role="dialog"]')

      // Fill in the form using jsType to avoid timeout issues
      await page.fill('$1', '$2')
      await jsType(
        page,
        'textarea[placeholder="Enter tag description..."]',
        'A test tag for E2E testing'
      )

      // Submit the form by clicking the Create button in the dialog using JavaScript evaluation
      await page.evaluate(() => {
        const dialogButtons = Array.from(
          document.querySelectorAll('[role="dialog"] button')
        )
        const createBtn = dialogButtons.find(
          (btn) =>
            btn.textContent && btn.textContent.toLowerCase().trim() === 'create'
        )
        if (createBtn) {
          ;(createBtn as HTMLElement).click()
        }
      })

      // Wait for the tag creation dialog to close and the main tag management to refresh
      await page.waitForTimeout(3000)

      // Take a screenshot to see what's on screen
      await page.screenshot({ path: 'tag-created.png', fullPage: true })

      // Verify tag appears in the tag hierarchy section
      await expect(
        page.locator('[data-testid="tag-tree"]').getByText('test-tag')
      ).toBeVisible({ timeout: 10000 })

      // Alternative: check if it appears anywhere on the page
      await expect(page.getByText('test-tag')).toBeVisible({ timeout: 10000 })
    })

    test('should edit an existing tag', async ({ page }) => {
      // Assume tag exists from previous test or setup
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Find and edit tag
      await page
        .getByTestId('tag-item-test-tag')
        .getByRole('button', { name: /edit/i })
        .click()
      await page.getByPlaceholder(/tag name/i).fill('updated-test-tag')
      await page.getByPlaceholder(/description/i).fill('Updated description')
      await page.getByRole('button', { name: /save/i }).click()

      // Verify changes
      await expect(page.getByText('updated-test-tag')).toBeVisible()
      await expect(page.getByText('Updated description')).toBeVisible()
    })

    test('should delete a tag', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Delete tag
      await page
        .getByTestId('tag-item-updated-test-tag')
        .getByRole('button', { name: /delete/i })
        .click()
      await page.getByRole('button', { name: /confirm/i }).click()

      // Verify tag is removed
      await expect(page.getByText('updated-test-tag')).not.toBeVisible()
    })
  })

  test.describe('Hierarchical Tag Management', () => {
    test('should create parent-child tag relationships', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Create parent tag
      await page.getByRole('button', { name: /create tag/i }).click()
      await page.getByPlaceholder(/tag name/i).fill('Development')
      await page.getByRole('button', { name: /create/i }).click()

      // Create child tag
      await page.getByRole('button', { name: /create tag/i }).click()
      await page.getByPlaceholder(/tag name/i).fill('Frontend')
      await page
        .getByLabel(/parent tag/i)
        .selectOption({ label: 'Development' })
      await page.getByRole('button', { name: /create/i }).click()

      // Verify hierarchy in tag tree
      await page.getByTestId('tag-tree-view').click()
      await expect(page.getByTestId('tag-tree-item-Development')).toBeVisible()
      await expect(
        page.getByTestId('tag-tree-item-Development-Frontend')
      ).toBeVisible()
    })

    test('should display tag hierarchy correctly', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })
      await page.getByTestId('tag-tree-view').click()

      // Verify parent tag is expandable
      const parentTag = page.getByTestId('tag-tree-item-Development')
      await expect(
        parentTag.getByRole('button', { name: /expand/i })
      ).toBeVisible()

      // Expand and verify child tags
      await parentTag.getByRole('button', { name: /expand/i }).click()
      await expect(
        page.getByTestId('tag-tree-item-Development-Frontend')
      ).toBeVisible()
    })

    test('should support tag path navigation', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Navigate to nested tag
      await page.getByTestId('tag-tree-item-Development-Frontend').click()

      // Verify breadcrumb path
      await expect(page.getByTestId('tag-breadcrumb')).toContainText(
        'Development / Frontend'
      )
    })
  })

  test.describe('Tag Search and Filtering', () => {
    test('should filter notes by tags using search', async ({ page }) => {
      // Create a note with tags
      await page.getByRole('button', { name: /new note/i }).click()
      await page.getByPlaceholder(/note title/i).fill('Test Note with Tags')

      // Add tags using tag input
      await page.getByTestId('tag-input').click()
      await page.getByTestId('tag-input').fill('Development')
      await page.keyboard.press('Enter')
      await page.getByTestId('tag-input').fill('Frontend')
      await page.keyboard.press('Enter')

      // Save note
      await page.keyboard.press('Control+S')

      // Test search by tag
      await page.getByTestId('global-search').click()
      await page.getByTestId('global-search').fill('tag:Development')

      // Verify filtered results
      await expect(
        page.getByTestId('search-result-Test Note with Tags')
      ).toBeVisible()
    })

    test('should use advanced tag filtering in search', async ({ page }) => {
      await page.getByTestId('global-search').click()
      await page.getByRole('button', { name: /filters/i }).click()

      // Select tags in filter panel
      await page.getByTestId('tag-filter-Development').click()
      await page.getByTestId('tag-filter-Frontend').click()

      // Apply filters
      await page.getByRole('button', { name: /apply filters/i }).click()

      // Verify filtered results show only notes with selected tags
      const results = page.getByTestId('search-results')
      await expect(results.getByTestId('tag-badge-Development')).toBeVisible()
      await expect(results.getByTestId('tag-badge-Frontend')).toBeVisible()
    })
  })

  test.describe('Bulk Tag Operations', () => {
    test('should add tags to multiple notes', async ({ page }) => {
      // Select multiple notes in the note list
      await page.getByTestId('note-list-item').first().click()
      await page.keyboard.press('Control+Click')
      await page.getByTestId('note-list-item').nth(1).click()

      // Open bulk operations
      await page.getByRole('button', { name: /bulk operations/i }).click()
      await page.getByRole('menuitem', { name: /manage tags/i }).click()

      // Add tags to selected notes
      await page.getByLabel(/operation/i).selectOption('add')
      await page.getByTestId('bulk-tag-input').fill('Bulk-Added')
      await page.keyboard.press('Enter')

      // Execute bulk operation
      await page.getByRole('button', { name: /execute/i }).click()

      // Verify completion
      await expect(page.getByText(/operation completed/i)).toBeVisible()
      await expect(page.getByText(/processed: 2/i)).toBeVisible()
    })

    test('should remove tags from multiple notes', async ({ page }) => {
      // Select notes with existing tags
      await page.getByTestId('note-list-item').first().click()
      await page.keyboard.press('Control+Click')
      await page.getByTestId('note-list-item').nth(1).click()

      // Open bulk operations
      await page.getByRole('button', { name: /bulk operations/i }).click()
      await page.getByRole('menuitem', { name: /manage tags/i }).click()

      // Remove tags from selected notes
      await page.getByLabel(/operation/i).selectOption('remove')
      await page.getByTestId('bulk-tag-input').fill('Bulk-Added')
      await page.keyboard.press('Enter')

      // Execute bulk operation
      await page.getByRole('button', { name: /execute/i }).click()

      // Verify completion
      await expect(page.getByText(/operation completed/i)).toBeVisible()
    })

    test('should replace all tags on multiple notes', async ({ page }) => {
      // Select multiple notes
      await page.getByTestId('note-list-item').first().click()
      await page.keyboard.press('Control+Click')
      await page.getByTestId('note-list-item').nth(1).click()

      // Open bulk operations
      await page.getByRole('button', { name: /bulk operations/i }).click()
      await page.getByRole('menuitem', { name: /manage tags/i }).click()

      // Replace all tags
      await page.getByLabel(/operation/i).selectOption('replace')
      await page.getByTestId('bulk-tag-input').fill('Replaced-Tag')
      await page.keyboard.press('Enter')

      // Execute bulk operation
      await page.getByRole('button', { name: /execute/i }).click()

      // Verify completion and new tags
      await expect(page.getByText(/operation completed/i)).toBeVisible()
    })
  })

  test.describe('Tag Cloud Visualization', () => {
    test('should display tag cloud with proper sizing', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Verify tag cloud is visible
      await expect(page.getByTestId('tag-cloud')).toBeVisible()

      // Check that frequently used tags appear larger
      const frequentTag = page.getByTestId('tag-cloud-item-Development')
      const lessUsedTag = page.getByTestId('tag-cloud-item-Frontend')

      // Verify size differences (frequent tags should have larger font size)
      const frequentTagSize = await frequentTag.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      )
      const lessUsedTagSize = await lessUsedTag.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      )

      expect(parseFloat(frequentTagSize)).toBeGreaterThan(
        parseFloat(lessUsedTagSize)
      )
    })

    test('should support different tag cloud layouts', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Test cloud layout
      await page.getByTestId('layout-selector').selectOption('cloud')
      await expect(page.getByTestId('tag-cloud')).toHaveClass(/cloud-layout/)

      // Test list layout
      await page.getByTestId('layout-selector').selectOption('list')
      await expect(page.getByTestId('tag-cloud')).toHaveClass(/list-layout/)

      // Test grid layout
      await page.getByTestId('layout-selector').selectOption('grid')
      await expect(page.getByTestId('tag-cloud')).toHaveClass(/grid-layout/)
    })

    test('should show tag usage analytics', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Verify analytics display
      await expect(page.getByTestId('total-tags-count')).toBeVisible()
      await expect(page.getByTestId('active-tags-count')).toBeVisible()
      await expect(page.getByTestId('total-usage-count')).toBeVisible()
      await expect(page.getByTestId('trending-tags-count')).toBeVisible()

      // Verify trending indicator
      await expect(page.getByTestId('trending-tag-indicator')).toBeVisible()
    })
  })

  test.describe('Tag Keyboard Shortcuts', () => {
    test('should open tag picker with Cmd+T', async ({ page }) => {
      // Focus on a note
      await page.getByTestId('note-editor').click()

      // Use keyboard shortcut
      await page.keyboard.press('Meta+t') // Cmd+T on Mac, Ctrl+T on Windows/Linux

      // Verify tag picker opens
      await expect(page.getByTestId('tag-picker-dialog')).toBeVisible()
    })

    test('should open tag management with Cmd+Shift+T', async ({ page }) => {
      await page.keyboard.press('Meta+Shift+t')

      // Verify tag management panel opens
      await expect(page.getByTestId('tag-management-panel')).toBeVisible()
    })

    test('should use quick tag shortcuts', async ({ page }) => {
      // Focus on a note
      await page.getByTestId('note-editor').click()

      // Use quick tag shortcut (Cmd+1 for "work" tag)
      await page.keyboard.press('Meta+1')

      // Verify "work" tag is added
      await expect(page.getByTestId('tag-badge-work')).toBeVisible()
    })

    test('should clear all tags with keyboard shortcut', async ({ page }) => {
      // Focus on a note with tags
      await page.getByTestId('note-editor').click()

      // Use clear all tags shortcut
      await page.keyboard.press('Meta+Shift+Backspace')

      // Verify tags are cleared
      await expect(page.getByTestId('tag-badge')).not.toBeVisible()
    })
  })

  test.describe('Command Palette Tag Operations', () => {
    test('should access tag operations through command palette', async ({
      page,
    }) => {
      // Open command palette
      await page.keyboard.press('Meta+k')

      // Search for tag operations
      await page.getByPlaceholder(/command/i).fill('tag')

      // Verify tag-related commands appear
      await expect(page.getByRole('option', { name: /add tag/i })).toBeVisible()
      await expect(
        page.getByRole('option', { name: /manage tags/i })
      ).toBeVisible()
      await expect(
        page.getByRole('option', { name: /create tag/i })
      ).toBeVisible()
      await expect(
        page.getByRole('option', { name: /filter by tag/i })
      ).toBeVisible()
    })

    test('should execute tag operations via command palette', async ({
      page,
    }) => {
      // Open command palette
      await page.keyboard.press('Meta+k')

      // Execute "Add Tag" command
      await page.getByPlaceholder(/command/i).fill('add tag')
      await page.getByRole('option', { name: /add tag/i }).click()

      // Verify tag picker opens
      await expect(page.getByTestId('tag-picker-dialog')).toBeVisible()
    })
  })

  test.describe('Tag Statistics and Analytics', () => {
    test('should display comprehensive tag statistics', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Verify all statistics are displayed
      const stats = [
        'total-tags-count',
        'active-tags-count',
        'total-usage-count',
        'trending-tags-count',
      ]

      for (const stat of stats) {
        await expect(page.getByTestId(stat)).toBeVisible()
        await expect(page.getByTestId(stat)).not.toContainText('0') // Should have some data
      }
    })

    test('should show tag usage trends over time', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Switch to different time periods
      await page.getByTestId('trending-period-selector').selectOption('week')
      await expect(page.getByTestId('trending-tags-count')).toBeVisible()

      await page.getByTestId('trending-period-selector').selectOption('month')
      await expect(page.getByTestId('trending-tags-count')).toBeVisible()

      await page.getByTestId('trending-period-selector').selectOption('year')
      await expect(page.getByTestId('trending-tags-count')).toBeVisible()
    })

    test('should provide detailed tag information', async ({ page }) => {
      await page.getByRole('button', { name: /tag analytics/i }).click()

      // Hover over a tag to see details
      await page.getByTestId('tag-cloud-item-Development').hover()

      // Verify tooltip with detailed information
      await expect(page.getByTestId('tag-tooltip')).toBeVisible()
      await expect(page.getByTestId('tag-tooltip')).toContainText('Development')
      await expect(page.getByTestId('tag-tooltip')).toContainText(
        /used \d+ times/i
      )
      await expect(page.getByTestId('tag-tooltip')).toContainText(/last used/i)
    })
  })

  test.describe('Tag Integration with Notes', () => {
    test('should add tags while editing a note', async ({ page }) => {
      // Create or open a note
      await page.getByRole('button', { name: /new note/i }).click()
      await page.getByPlaceholder(/note title/i).fill('Integration Test Note')

      // Add tags using the tag input
      await page.getByTestId('tag-input').click()
      await page.getByTestId('tag-input').fill('Integration')
      await page.keyboard.press('Enter')

      // Verify tag appears
      await expect(page.getByTestId('tag-badge-Integration')).toBeVisible()

      // Save note
      await page.keyboard.press('Meta+s')

      // Verify persistence
      await page.reload()
      await expect(page.getByTestId('tag-badge-Integration')).toBeVisible()
    })

    test('should support hashtag syntax in note content', async ({ page }) => {
      await page.getByRole('button', { name: /new note/i }).click()

      // Type content with hashtags
      await page.getByTestId('note-editor').click()
      await page
        .getByTestId('note-editor')
        .fill('This is a note about #Development and #Frontend work')

      // Verify hashtags are detected and converted to tags
      await page.keyboard.press('Meta+s') // Save to trigger tag processing

      await expect(page.getByTestId('tag-badge-Development')).toBeVisible()
      await expect(page.getByTestId('tag-badge-Frontend')).toBeVisible()
    })

    test('should filter notes by tags in sidebar', async ({ page }) => {
      // Open tag filter in sidebar
      await page.getByTestId('sidebar-tags-section').click()

      // Click on a tag to filter
      await page.getByTestId('sidebar-tag-Development').click()

      // Verify note list is filtered
      const noteList = page.getByTestId('note-list')
      await expect(noteList.getByTestId('tag-badge-Development')).toBeVisible()

      // Verify filter indicator
      await expect(page.getByTestId('active-filter-Development')).toBeVisible()
    })
  })

  test.describe('Tag Performance and Error Handling', () => {
    test('should handle large numbers of tags efficiently', async ({
      page,
    }) => {
      // Create many tags quickly (stress test)
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      const startTime = Date.now()

      // Create 50 tags rapidly
      for (let i = 0; i < 50; i++) {
        await page.getByRole('button', { name: /create tag/i }).click()
        await page.getByPlaceholder(/tag name/i).fill(`stress-test-${i}`)
        await page.getByRole('button', { name: /create/i }).click()
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      // Verify reasonable performance (should complete within 30 seconds)
      expect(duration).toBeLessThan(30000)

      // Verify all tags were created
      await expect(page.getByText('stress-test-49')).toBeVisible()
    })

    test('should handle tag operation errors gracefully', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Try to create a tag with invalid characters
      await page.getByRole('button', { name: /create tag/i }).click()
      await page.getByPlaceholder(/tag name/i).fill('invalid@tag#name!')
      await page.getByRole('button', { name: /create/i }).click()

      // Verify error message appears
      await expect(page.getByText(/invalid tag name/i)).toBeVisible()
      await expect(page.getByTestId('error-message')).toBeVisible()
    })

    test('should handle network errors during tag operations', async ({
      page,
      context,
    }) => {
      // Simulate network failure
      await context.setOffline(true)

      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })
      await page.getByRole('button', { name: /create tag/i }).click()
      await page.getByPlaceholder(/tag name/i).fill('offline-tag')
      await page.getByRole('button', { name: /create/i }).click()

      // Verify offline handling
      await expect(page.getByText(/network error/i)).toBeVisible()
      await expect(page.getByText(/retry when online/i)).toBeVisible()

      // Restore network and retry
      await context.setOffline(false)
      await page.getByRole('button', { name: /retry/i }).click()

      // Verify operation succeeds
      await expect(page.getByText('offline-tag')).toBeVisible()
    })
  })

  test.describe('Tag Accessibility', () => {
    test('should support keyboard navigation in tag management', async ({
      page,
    }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Navigate using keyboard
      await page.keyboard.press('Tab') // Focus first tag
      await page.keyboard.press('ArrowDown') // Move to next tag
      await page.keyboard.press('Enter') // Select/edit tag

      // Verify keyboard navigation works
      await expect(page.getByTestId('tag-edit-dialog')).toBeVisible()
    })

    test('should provide proper ARIA labels and roles', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Verify ARIA attributes
      const tagList = page.getByRole('list', { name: /tag list/i })
      await expect(tagList).toBeVisible()

      const tagItems = tagList.getByRole('listitem')
      await expect(tagItems.first()).toHaveAttribute('aria-label')
    })

    test('should support screen readers', async ({ page }) => {
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'))
        const manageTagsBtn = buttons.find(
          (btn) =>
            btn.textContent &&
            btn.textContent.toLowerCase().includes('manage tags')
        )
        if (manageTagsBtn) {
          ;(manageTagsBtn as HTMLElement).click()
        }
      })

      // Verify live regions for dynamic updates
      await expect(page.getByRole('status')).toBeVisible() // For status updates
      await expect(page.getByRole('alert')).toBeAttached() // For error messages
    })
  })
})

test.describe('Tag System Integration', () => {
  // SKIPPED: Tag system not implemented
  test('should integrate with search functionality', async ({ page }) => {
    // Test tag-based search
    await page.getByTestId('global-search').click()
    await page.getByTestId('global-search').fill('tag:Development')

    // Verify search results are filtered by tag
    await expect(page.getByTestId('search-results')).toBeVisible()
    await expect(page.getByTestId('tag-badge-Development')).toBeVisible()
  })

  test('should integrate with export functionality', async ({ page }) => {
    // Open a note with tags
    await page.getByTestId('note-with-tags').click()

    // Export note
    await page.getByRole('button', { name: /export/i }).click()
    await page.getByRole('menuitem', { name: /markdown/i }).click()

    // Verify tags are included in export
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: /download/i }).click()
    const download = await downloadPromise

    // Verify exported content includes tags
    const _exportedPath = await download.path()
    // Note: In real implementation, you'd read the file and verify tag content
  })

  test('should sync tag data across browser tabs', async ({ context }) => {
    // Open two tabs
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto('http://localhost:4378/')
    await page2.goto('http://localhost:4378/')

    // Create tag in first tab
    await page1.getByRole('button', { name: /manage tags/i }).click()
    await page1.getByRole('button', { name: /create tag/i }).click()
    await page1.getByPlaceholder(/tag name/i).fill('sync-test-tag')
    await page1.getByRole('button', { name: /create/i }).click()

    // Verify tag appears in second tab
    await page2.getByRole('button', { name: /manage tags/i }).click()
    await expect(page2.getByText('sync-test-tag')).toBeVisible({
      timeout: 5000,
    })
  })
})
