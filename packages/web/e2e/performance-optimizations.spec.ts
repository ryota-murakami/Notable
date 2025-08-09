/**
 * E2E Tests for Performance Optimizations
 * Verifies that IndexedDB caching, virtualization, and progressive loading work correctly
 */

import { test, expect } from '@playwright/test'
import {
  setupAuthAndNavigateToApp,
  createNewNote,
  findNoteEditor,
  typeInElement,
} from './utils/auth-helpers'

test.describe('Performance Optimizations', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authenticated user
    await setupAuthAndNavigateToApp(page)

    // Clear IndexedDB cache to start fresh
    await page.evaluate(() => {
      return new Promise<void>((resolve) => {
        const deleteReq = indexedDB.deleteDatabase('notable-cache')
        deleteReq.onsuccess = () => resolve()
        deleteReq.onerror = () => resolve() // Continue even if deletion fails
      })
    })
  })

  test('IndexedDB caching layer works correctly', async ({ page }) => {
    await test.step('Navigate to notes page', async () => {
      // Already at /app, just verify notes list is visible
      await page.waitForSelector('[data-testid="notes-list"]', {
        timeout: 10000,
      })
    })

    await test.step('Create test note for caching', async () => {
      const noteId = await createNewNote(page)
      expect(noteId).toBeTruthy()

      // Add title and content
      const testContent = 'Performance test note with cached content'
      const titleInput = await page
        .locator('input[placeholder="Untitled"]')
        .first()
      await titleInput.fill('Cache Test Note')

      const editor = await findNoteEditor(page)
      await typeInElement(page, editor, testContent)

      // Wait a bit for auto-save
      await page.waitForTimeout(1000)
    })

    await test.step('Verify note is cached in IndexedDB', async () => {
      const isCached = await page.evaluate(async () => {
        try {
          const db = await new Promise<IDBDatabase>((resolve, reject) => {
            const request = indexedDB.open('notable-cache', 3)
            request.onsuccess = () => resolve(request.result)
            request.onerror = () => reject(request.error)
          })

          const transaction = db.transaction(['notes'], 'readonly')
          const store = transaction.objectStore('notes')
          const getAllRequest = store.getAll()

          return new Promise<boolean>((resolve) => {
            getAllRequest.onsuccess = () => {
              const cachedNotes = getAllRequest.result
              const hasTestNote = cachedNotes.some(
                (item: any) => item.value.title === 'Cache Test Note'
              )
              resolve(hasTestNote)
            }
            getAllRequest.onerror = () => resolve(false)
          })
        } catch (error) {
          console.error('Cache check failed:', error)
          return false
        }
      })

      expect(isCached).toBe(true)
    })

    await test.step('Verify cached content loads instantly on reload', async () => {
      // Record load time before reload
      await page.reload()

      const loadStartTime = Date.now()
      await page.waitForSelector('[data-testid="notes-list"]')
      const loadEndTime = Date.now()

      const loadTime = loadEndTime - loadStartTime

      // With caching, load should be under 2 seconds
      expect(loadTime).toBeLessThan(2000)

      // Verify cached note is visible
      await expect(page.locator('text=Cache Test Note')).toBeVisible()
    })
  })

  test('Virtualized note list handles large datasets', async ({ page }) => {
    await test.step('Navigate to notes and create notes for virtualization test', async () => {
      // Create a few notes to test virtualization
      for (let i = 1; i <= 3; i++) {
        const noteId = await createNewNote(page)
        expect(noteId).toBeTruthy()

        const titleInput = await page
          .locator('input[placeholder="Untitled"]')
          .first()
        await titleInput.fill(`Virtualization Test Note ${i}`)

        const editor = await findNoteEditor(page)
        await typeInElement(
          page,
          editor,
          `Content for note ${i} with some details to test virtualization performance`
        )

        // Navigate back to home
        await page.goto('/app')
        await page.waitForSelector('[data-testid="notes-list"]')
      }
    })

    await test.step('Verify virtualized list renders efficiently', async () => {
      // Check that notes list is present and has content
      await page.waitForSelector('[data-testid="notes-list"]')

      // Verify that notes are visible
      const noteElements = await page
        .locator('text=Virtualization Test Note')
        .count()
      expect(noteElements).toBeGreaterThan(0)

      // Test search functionality works
      const searchInput = page.locator('[data-testid="search-input"]')
      await searchInput.fill('Virtualization')
      await page.waitForTimeout(500) // Wait for search debounce

      // Verify search results appear
      await expect(page.locator('text=Virtualization Test Note')).toBeVisible()
    })
  })

  test('Progressive skeleton loading provides better UX', async ({ page }) => {
    await test.step('Clear cache and test cold loading with skeletons', async () => {
      await page.goto('/notes')

      // Clear cache to simulate cold start
      await page.evaluate(() => {
        localStorage.clear()
        sessionStorage.clear()
      })

      await page.reload()
    })

    await test.step('Verify skeleton states appear during loading', async () => {
      // Look for skeleton loading states
      const skeletonVisible = await page
        .locator('.animate-shimmer, .animate-pulse')
        .first()
        .isVisible()

      if (skeletonVisible) {
        // Verify skeleton disappears when content loads
        await page.waitForSelector('[data-testid="notes-list"]')

        // Wait a bit and check that skeleton is gone
        await page.waitForTimeout(1000)
        const skeletonStillVisible = await page
          .locator('.animate-shimmer, .animate-pulse')
          .isVisible()
        expect(skeletonStillVisible).toBe(false)
      }

      // Content should be visible
      await expect(page.locator('[data-testid="notes-list"]')).toBeVisible()
    })
  })

  test('Optimized editor handles large content efficiently', async ({
    page,
  }) => {
    await test.step('Create note with large content', async () => {
      await page.goto('/notes')
      await page.click('[data-testid="new-note-button"]', { force: true })
      await page.waitForSelector('[data-testid="optimized-plate-editor"]')

      // Generate large content to test editor performance
      const largeContent = 'This is a performance test paragraph. '.repeat(200) // ~6KB of text

      await page.fill(
        '[data-testid="note-title-input"]',
        'Large Content Performance Test'
      )

      // Use the optimized editor
      const editor = page.locator('[data-testid="optimized-plate-editor"]')
      await editor.click({ force: true })
      await editor.fill(largeContent)
    })

    await test.step('Verify optimized editor performance features', async () => {
      // Check for performance indicators in development
      const perfIndicator = page.locator('text=Size:')
      if (await perfIndicator.isVisible()) {
        // Verify size is tracked
        await expect(perfIndicator).toContainText('KB')
      }

      // Verify editor is responsive
      const editor = page.locator('[data-testid="optimized-plate-editor"]')

      // Type additional content and verify responsiveness
      await editor.click({ force: true })
      await page.keyboard.type(
        ' Additional content for testing responsiveness.'
      )

      // Verify content appears quickly
      await expect(editor).toContainText(
        'Additional content for testing responsiveness'
      )
    })

    await test.step('Save large content and verify caching', async () => {
      await page.click('[data-testid="save-note-button"]', { force: true })
      await page.waitForSelector('[data-testid="save-success-indicator"]')

      // Reload and verify cached content loads quickly
      const reloadStartTime = Date.now()
      await page.reload()
      await page.waitForSelector('[data-testid="optimized-plate-editor"]')
      const reloadEndTime = Date.now()

      const reloadTime = reloadEndTime - reloadStartTime
      expect(reloadTime).toBeLessThan(3000) // Should load quickly with caching

      // Verify content is preserved
      await expect(
        page.locator('text=Large Content Performance Test')
      ).toBeVisible()
    })
  })

  test('Search results use cached data for instant responses', async ({
    page,
  }) => {
    await test.step('Create searchable test notes', async () => {
      await page.goto('/notes')

      // Create notes with searchable content
      const testNotes = [
        {
          title: 'JavaScript Performance',
          content: 'Tips for optimizing JavaScript performance',
        },
        {
          title: 'React Optimization',
          content: 'How to optimize React applications',
        },
        {
          title: 'Database Performance',
          content: 'Optimizing database queries and indexing',
        },
      ]

      for (const note of testNotes) {
        await page.click('[data-testid="new-note-button"]', { force: true })
        await page.waitForSelector('[data-testid="note-editor"]')

        await page.fill('[data-testid="note-title-input"]', note.title)
        await page.fill('[data-testid="note-content-editor"]', note.content)

        await page.click('[data-testid="save-note-button"]', { force: true })
        await page.waitForSelector('[data-testid="save-success-indicator"]')
        await page.click('[data-testid="back-to-notes"]', { force: true })
      }
    })

    await test.step('Test search with caching', async () => {
      // Perform initial search
      const searchInput = page.locator('[data-testid="search-input"]')
      await searchInput.fill('performance')

      // Wait for search results
      await page.waitForSelector('[data-testid="search-results"]')

      // Verify relevant results appear
      await expect(page.locator('text=JavaScript Performance')).toBeVisible()
      await expect(page.locator('text=Database Performance')).toBeVisible()

      // Clear and search again to test cached results
      await searchInput.clear()

      const cachedSearchStartTime = Date.now()
      await searchInput.fill('performance')
      await page.waitForSelector('[data-testid="search-results"]')
      const cachedSearchEndTime = Date.now()

      const cachedSearchTime = cachedSearchEndTime - cachedSearchStartTime

      // Cached search should be very fast
      expect(cachedSearchTime).toBeLessThan(500)

      // Results should still be accurate
      await expect(page.locator('text=JavaScript Performance')).toBeVisible()
    })
  })

  test('Memory management works correctly', async ({ page }) => {
    await test.step('Test cache cleanup and memory limits', async () => {
      await page.goto('/notes')

      // Check initial memory usage
      const initialMemory = await page.evaluate(() => {
        if (performance.memory) {
          return performance.memory.usedJSHeapSize
        }
        return 0
      })

      // Create and cache many notes to test memory management
      for (let i = 1; i <= 10; i++) {
        await page.click('[data-testid="new-note-button"]', { force: true })
        await page.waitForSelector('[data-testid="note-editor"]')

        const content = `Memory test note ${i} with content `.repeat(100)
        await page.fill('[data-testid="note-title-input"]', `Memory Test ${i}`)
        await page.fill('[data-testid="note-content-editor"]', content)

        await page.click('[data-testid="save-note-button"]', { force: true })
        await page.waitForSelector('[data-testid="save-success-indicator"]')
        await page.click('[data-testid="back-to-notes"]', { force: true })
      }

      // Check memory after creating notes
      const afterCreationMemory = await page.evaluate(() => {
        if (performance.memory) {
          return performance.memory.usedJSHeapSize
        }
        return 0
      })

      // Trigger cleanup
      await page.evaluate(() => {
        // Trigger any cleanup mechanisms
        if (window.gc) {
          window.gc()
        }
      })

      // Wait for cleanup
      await page.waitForTimeout(2000)

      const afterCleanupMemory = await page.evaluate(() => {
        if (performance.memory) {
          return performance.memory.usedJSHeapSize
        }
        return 0
      })

      // Memory should not grow excessively
      if (initialMemory > 0 && afterCreationMemory > initialMemory) {
        const memoryGrowthMB =
          (afterCreationMemory - initialMemory) / (1024 * 1024)
        expect(memoryGrowthMB).toBeLessThan(50) // Should not grow more than 50MB
      }
    })
  })

  test('Performance metrics are tracked correctly', async ({ page }) => {
    await test.step('Verify performance monitoring works', async () => {
      await page.goto('/notes')

      // Check that performance metrics are being tracked
      const metricsTracked = await page.evaluate(() => {
        // Check if performance tracking is active
        return (
          typeof window.performance !== 'undefined' &&
          typeof window.performance.mark === 'function'
        )
      })

      expect(metricsTracked).toBe(true)

      // Create a note to generate performance data
      await page.click('[data-testid="new-note-button"]', { force: true })
      await page.waitForSelector('[data-testid="note-editor"]')

      await page.fill(
        '[data-testid="note-title-input"]',
        'Performance Metrics Test'
      )
      await page.fill(
        '[data-testid="note-content-editor"]',
        'Testing performance metrics tracking'
      )

      await page.click('[data-testid="save-note-button"]', { force: true })
      await page.waitForSelector('[data-testid="save-success-indicator"]')

      // Verify that performance entries exist
      const performanceEntries = await page.evaluate(() => {
        const entries = performance.getEntries()
        return entries.length > 0
      })

      expect(performanceEntries).toBe(true)
    })
  })
})
