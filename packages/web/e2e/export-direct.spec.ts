import { expect, test } from './fixtures/coverage'
import { createClient as _createClient } from '@/utils/supabase/client'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Direct Export Tests', () => {
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

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should export note with existing note', async ({ page }) => {
    // First, navigate to app to ensure auth works
    await page.goto('http://localhost:4378/app')

    // Create a note using evaluate to bypass UI
    const noteId = await page.evaluate(async () => {
      // Create note directly using the mock client
      const mockNote = {
        id: `test-note-${Date.now()}`,
        title: 'Export Test Note',
        content: JSON.stringify([
          {
            type: 'paragraph',
            children: [{ text: 'This is test content for export.' }],
          },
        ]),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: 'test-user',
        tags: [],
      }

      // Store in localStorage or session for mock client
      const notes = JSON.parse(localStorage.getItem('mock-notes') || '[]')
      notes.push(mockNote)
      localStorage.setItem('mock-notes', JSON.stringify(notes))

      return mockNote.id
    })

    // Navigate directly to the note
    await page.goto(`http://localhost:4378/notes/${noteId}`)

    // Wait for the page to load
    await page.waitForSelector('[data-testid="note-title-input"]', {
      timeout: 10000,
    })

    // Now test export functionality
    // Use the first export button (dropdown trigger)
    const exportButton = page.getByRole('button', {
      name: 'Export',
      exact: true,
    })
    await expect(exportButton).toBeVisible({ timeout: 5000 })

    // Click export button to open dropdown
    await exportButton.click()

    // Wait for dropdown to appear
    await page.waitForTimeout(500)

    // Check that dropdown opened
    const quickExport = page.locator('text="Quick Export"')
    await expect(quickExport).toBeVisible({ timeout: 5000 })

    const exportAsMarkdown = page.locator('text="Export as Markdown"')
    await expect(exportAsMarkdown).toBeVisible()

    // Set up mutation observer to detect download link creation
    await page.evaluate(() => {
      ;(window as any).exportDetected = new Promise((resolve) => {
        const observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
              if (node instanceof HTMLAnchorElement && node.download) {
                observer.disconnect()
                resolve({
                  success: true,
                  fileName: node.download,
                  href: node.href,
                })
              }
            }
          }
        })
        observer.observe(document.body, { childList: true })

        // Set timeout
        setTimeout(() => {
          observer.disconnect()
          resolve({ success: false, error: 'Timeout waiting for download' })
        }, 10000)
      })
    })

    // Click export as markdown
    await exportAsMarkdown.click()

    // Wait for the export to complete
    const exportResult = await page.evaluate(() => {
      return (window as any).exportDetected
    })

    // Verify export was successful
    if (exportResult && exportResult.success) {
      expect(exportResult.fileName).toContain('.md')
    } else {
      // Alternative: Check if a success toast appeared
      await expect(
        page.locator('text="Successfully exported to MARKDOWN"')
      ).toBeVisible({ timeout: 5000 })
    }
  })

  test('should open export dialog for advanced options', async ({ page }) => {
    // Navigate to app
    await page.goto('http://localhost:4378/app')

    // Create a note using evaluate
    const noteId = await page.evaluate(async () => {
      const mockNote = {
        id: `test-note-${Date.now()}`,
        title: 'Advanced Export Test',
        content: JSON.stringify([
          {
            type: 'heading',
            level: 1,
            children: [{ text: 'Test Heading' }],
          },
          {
            type: 'paragraph',
            children: [{ text: 'Test paragraph with **bold** text.' }],
          },
        ]),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        user_id: 'test-user',
        tags: ['test', 'export'],
      }

      const notes = JSON.parse(localStorage.getItem('mock-notes') || '[]')
      notes.push(mockNote)
      localStorage.setItem('mock-notes', JSON.stringify(notes))

      return mockNote.id
    })

    // Navigate to the note
    await page.goto(`http://localhost:4378/notes/${noteId}`)
    await page.waitForSelector('[data-testid="note-title-input"]', {
      timeout: 10000,
    })

    // Open export dropdown
    await page.click('button:has-text("Export")')

    // Click advanced options
    await page.click('text="Export with Options..."')

    // Check that dialog opened
    await expect(page.locator('[role="dialog"]')).toBeVisible({ timeout: 5000 })
    await expect(page.locator('text="Export Note"')).toBeVisible()

    // Check format options
    await expect(page.locator('text="MARKDOWN"')).toBeVisible()
    await expect(page.locator('text="PDF"')).toBeVisible()
    await expect(page.locator('text="HTML"')).toBeVisible()
    await expect(page.locator('text="REACT"')).toBeVisible()
  })
})
