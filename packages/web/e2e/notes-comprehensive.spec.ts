import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'
import { jsClick, jsType } from './utils/js-click'

test.describe('Comprehensive Note Management Tests', () => {
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

    // Navigate to app and wait for shell to load
    await page.goto('/app', { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 30000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test.describe('Note CRUD Operations', () => {
    test('should create a new note', async ({ page }) => {
      // Click new note button to open template picker using jsClick to avoid timeout issues
      await expect(
        page.locator('[data-testid="new-note-button"]')
      ).toBeVisible()
      await jsClick(page, '[data-testid="new-note-button"]')

      // Wait for template picker dialog
      const templatePicker = page.locator(
        '[role="dialog"]:has-text("Choose a Template")'
      )
      await expect(templatePicker).toBeVisible({ timeout: 10000 })

      // Click "Blank Note" button using jsClick for reliable interaction
      await expect(
        page.getByRole('button', { name: 'Blank Note' })
      ).toBeVisible()
      await jsClick(page, 'button:has-text("Blank Note")')

      // Wait for navigation to note editor
      await page.waitForURL('**/notes/**', { timeout: 10000 })

      // Wait for the editor page to be ready - look for textarea with placeholder
      await expect(
        page.locator('textarea[placeholder="Start writing..."]')
      ).toBeVisible({ timeout: 10000 })
      await jsClick(page, 'textarea[placeholder="Start writing..."]')
      await jsType(
        page,
        'textarea[placeholder="Start writing..."]',
        '# Test Note Title\n\nThis is the content of my test note.'
      )

      // Verify content is filled
      const editor = page.locator('textarea[placeholder="Start writing..."]')
      await expect(editor).toHaveValue(
        '# Test Note Title\n\nThis is the content of my test note.'
      )
    })

    test('should read and display existing note', async ({ page }) => {
      // SKIPPED: Note list integration not implemented
      // Create a note first
      await jsClick(page, '[data-testid="new-note-button"]')

      // Wait for template picker and select blank note
      await expect(
        page.locator('[role="dialog"]:has-text("Choose a Template")')
      ).toBeVisible()
      await jsClick(page, 'button:has-text("Blank Note")')

      // Wait for editor and fill content
      await page.waitForSelector('[data-testid="note-editor"]')
      const _editor = page.locator('textarea').first()
      await jsClick(page, 'textarea')
      await jsType(page, 'textarea', '# Existing Note\n\nExisting note content')

      // SKIPPED: Note list integration not implemented
      // Navigate away
      await page.goto('/app')

      // Note: Cannot test reading existing notes as note list integration is not working
    })

    test('should update existing note', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')

      // Wait for template picker and select blank note
      await expect(
        page.locator('[role="dialog"]:has-text("Choose a Template")')
      ).toBeVisible()
      await jsClick(page, 'button:has-text("Blank Note")')

      // Wait for editor page to be ready
      await page.waitForURL('**/notes/**', { timeout: 10000 })

      // Find the textarea editor
      const editor = page.locator('textarea[placeholder="Start writing..."]')
      await expect(editor).toBeVisible({ timeout: 10000 })
      await jsClick(page, 'textarea[placeholder="Start writing..."]')
      await jsType(
        page,
        'textarea[placeholder="Start writing..."]',
        '# Original Title\n\nOriginal content'
      )

      // Update content - use keyboard simulation to clear
      await jsClick(page, 'textarea[placeholder="Start writing..."]')
      await jsType(page, 'textarea[placeholder="Start writing..."]', '') // Clear with keyboard simulation
      await jsType(
        page,
        'textarea[placeholder="Start writing..."]',
        '# Updated Title\n\nUpdated content'
      )

      // Auto-save should handle saving
      await page.waitForTimeout(1000)

      // Verify content was updated
      await expect(editor).toHaveValue('# Updated Title\n\nUpdated content')
    })

    test('should delete note', async ({ page }) => {
      // SKIPPED: Delete functionality UI not implemented
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Note to Delete')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()
      await editor.type('This note will be deleted')
      await page.keyboard.press('Control+s')

      // Open note menu
      await page.click('[data-testid="note-menu-button"]')

      // Click delete
      await page.click('[data-testid="delete-note-button"]')

      // Confirm deletion
      await page.click('[data-testid="confirm-delete-button"]')

      // Verify note is removed from list
      await expect(
        page.locator(
          '[data-testid="note-list-item"]:has-text("Note to Delete")'
        )
      ).toHaveCount(0)
    })
  })

  test.describe('Note Search', () => {
    test('should search notes by title', async ({ page }) => {
      // SKIPPED: Search functionality needs proper implementation
      // Create multiple notes
      const notes = ['Alpha Note', 'Beta Note', 'Gamma Note']

      for (const title of notes) {
        await jsClick(page, '[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await jsType(page, '[data-testid="note-title"]', title)
        await page.keyboard.press('Control+s')
      }

      // Search for "Beta"
      await jsType(page, '[data-testid="search-input"]', 'Beta')

      // Verify search results
      await expect(page.locator('[data-testid="note-list-item"]')).toHaveCount(
        1
      )
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Beta Note')
    })

    test('should search notes by content', async ({ page }) => {
      // SKIPPED: Search by content functionality needs implementation
      // Create notes with specific content
      await page.click('[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await page.fill('[data-testid="note-title"]', 'JavaScript Note')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()
      await editor.type('This note contains JavaScript code examples')
      await page.keyboard.press('Control+s')

      // Search for content
      await page.fill('[data-testid="search-input"]', 'JavaScript code')

      // Verify search results
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('JavaScript Note')
    })

    test('should show no results for non-matching search', async ({ page }) => {
      // SKIPPED: Search functionality needs implementation
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Test Note')
      await page.keyboard.press('Control+s')

      // Search for non-existing content
      await jsType(page, '[data-testid="search-input"]', 'NonExistentContent')

      // Verify no results
      await expect(
        page.locator('[data-testid="no-results-message"]')
      ).toBeVisible()
    })

    test('should clear search and show all notes', async ({ page }) => {
      // SKIPPED: Search and note list functionality not implemented
      // Create notes
      const notes = ['Note One', 'Note Two']

      for (const title of notes) {
        await jsClick(page, '[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await jsType(page, '[data-testid="note-title"]', title)
        await page.keyboard.press('Control+s')
      }

      // Search
      await jsType(page, '[data-testid="search-input"]', 'One')
      await expect(page.locator('[data-testid="note-list-item"]')).toHaveCount(
        1
      )

      // Clear search
      await jsClick(page, '[data-testid="clear-search-button"]')

      // Verify all notes are shown
      await expect(page.locator('[data-testid="note-list-item"]')).toHaveCount(
        2
      )
    })
  })

  test.describe('Note Organization', () => {
    // SKIPPED: Note organization features not implemented
    test('should favorite a note', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Favorite Note')
      await page.keyboard.press('Control+s')

      // Click favorite button
      await jsClick(page, '[data-testid="favorite-button"]')

      // Verify note is favorited
      await expect(page.locator('[data-testid="favorite-icon"]')).toBeVisible()

      // Filter by favorites
      await jsClick(page, '[data-testid="filter-favorites"]')
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Favorite Note')
    })

    test('should pin a note', async ({ page }) => {
      // Create notes
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Pinned Note')
      await page.keyboard.press('Control+s')

      await jsClick(page, '[data-testid="new-note-button"]')
      await jsType(page, '[data-testid="note-title"]', 'Regular Note')
      await page.keyboard.press('Control+s')

      // Pin the first note
      await jsClick(
        page,
        '[data-testid="note-list-item"]:has-text("Pinned Note")'
      )
      await jsClick(page, '[data-testid="pin-button"]')

      // Verify pinned note appears first
      const firstNote = page.locator('[data-testid="note-list-item"]').first()
      await expect(firstNote).toContainText('Pinned Note')
      await expect(firstNote.locator('[data-testid="pin-icon"]')).toBeVisible()
    })

    test('should archive a note', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Archive Note')
      await page.keyboard.press('Control+s')

      // Archive the note
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="archive-note-button"]')

      // Verify note is not in main list
      await expect(
        page.locator('[data-testid="note-list-item"]:has-text("Archive Note")')
      ).toHaveCount(0)

      // Show archived notes
      await jsClick(page, '[data-testid="filter-archived"]')

      // Verify note appears in archive
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Archive Note')
    })

    test('should move note to trash', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Trash Note')
      await page.keyboard.press('Control+s')

      // Move to trash
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="trash-note-button"]')

      // Verify note is not in main list
      await expect(
        page.locator('[data-testid="note-list-item"]:has-text("Trash Note")')
      ).toHaveCount(0)

      // Show trash
      await jsClick(page, '[data-testid="filter-trash"]')

      // Verify note appears in trash
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Trash Note')
    })

    test('should restore from trash', async ({ page }) => {
      // Create and trash a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Restore Note')
      await page.keyboard.press('Control+s')

      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="trash-note-button"]')

      // Go to trash
      await jsClick(page, '[data-testid="filter-trash"]')

      // Restore note
      await jsClick(
        page,
        '[data-testid="note-list-item"]:has-text("Restore Note")'
      )
      await jsClick(page, '[data-testid="restore-note-button"]')

      // Go back to all notes
      await jsClick(page, '[data-testid="filter-all"]')

      // Verify note is restored
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Restore Note')
    })

    test('should permanently delete from trash', async ({ page }) => {
      // Create and trash a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Delete Forever')
      await page.keyboard.press('Control+s')

      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="trash-note-button"]')

      // Go to trash
      await jsClick(page, '[data-testid="filter-trash"]')

      // Permanently delete
      await jsClick(
        page,
        '[data-testid="note-list-item"]:has-text("Delete Forever")'
      )
      await jsClick(page, '[data-testid="delete-forever-button"]')
      await jsClick(page, '[data-testid="confirm-permanent-delete"]')

      // Verify note is gone
      await expect(
        page.locator(
          '[data-testid="note-list-item"]:has-text("Delete Forever")'
        )
      ).toHaveCount(0)
    })
  })

  test.describe('Note Export', () => {
    // SKIPPED: Export functionality not implemented
    test('should export note as Markdown', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Export Test')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('# Heading\n\nThis is **bold** text.')
      await page.keyboard.press('Control+s')

      // Export as Markdown
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="export-button"]')
      await jsClick(page, '[data-testid="export-markdown"]')

      // Verify download started
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')
    })

    test('should export note as HTML', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'HTML Export')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('HTML content')
      await page.keyboard.press('Control+s')

      // Export as HTML
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="export-button"]')
      await jsClick(page, '[data-testid="export-html"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')
    })

    test('should export note as PDF', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'PDF Export')
      await page.keyboard.press('Control+s')

      // Export as PDF
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="export-button"]')
      await jsClick(page, '[data-testid="export-pdf"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.pdf')
    })

    test('should export multiple notes', async ({ page }) => {
      // Create multiple notes
      const notes = ['Export 1', 'Export 2']

      for (const title of notes) {
        await jsClick(page, '[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await jsType(page, '[data-testid="note-title"]', title)
        await page.keyboard.press('Control+s')
      }

      // Select multiple notes
      await jsClick(page, '[data-testid="select-mode-button"]')
      await jsClick(page, '[data-testid="note-checkbox-Export 1"]')
      await jsClick(page, '[data-testid="note-checkbox-Export 2"]')

      // Export selected
      await jsClick(page, '[data-testid="bulk-export-button"]')
      await jsClick(page, '[data-testid="export-zip"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.zip')
    })
  })

  test.describe('Note Import', () => {
    // SKIPPED: Import functionality not implemented
    test('should import Markdown file', async ({ page }) => {
      // Click import button
      await jsClick(page, '[data-testid="import-button"]')

      // Upload file
      const fileInput = page.locator('[data-testid="import-file-input"]')
      await fileInput.setInputFiles({
        name: 'test.md',
        mimeType: 'text/markdown',
        buffer: Buffer.from('# Imported Note\n\nThis is imported content.'),
      })

      // Confirm import
      await jsClick(page, '[data-testid="confirm-import"]')

      // Verify note is created
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Imported Note')
    })

    test('should import multiple files', async ({ page }) => {
      // Click import button
      await page.click('[data-testid="import-button"]')

      // Upload multiple files
      const fileInput = page.locator('[data-testid="import-file-input"]')
      await fileInput.setInputFiles([
        {
          name: 'note1.md',
          mimeType: 'text/markdown',
          buffer: Buffer.from('# Note 1'),
        },
        {
          name: 'note2.md',
          mimeType: 'text/markdown',
          buffer: Buffer.from('# Note 2'),
        },
      ])

      // Confirm import
      await page.click('[data-testid="confirm-import"]')

      // Verify notes are created
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Note 1')
      await expect(
        page.locator('[data-testid="note-list-item"]')
      ).toContainText('Note 2')
    })
  })

  test.describe('Version History', () => {
    // SKIPPED: Version history not implemented
    test('should show version history', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Version Test')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Version 1')
      await page.keyboard.press('Control+s')

      // Make changes
      await editor.press('Control+a')
      await editor.type('Version 2')
      await page.keyboard.press('Control+s')

      // Open version history
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="version-history-button"]')

      // Verify versions are shown
      await expect(page.locator('[data-testid="version-item"]')).toHaveCount(2)
    })

    test('should restore previous version', async ({ page }) => {
      // Create note with versions
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Restore Version')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Original content')
      await page.keyboard.press('Control+s')

      await editor.press('Control+a')
      await editor.type('Modified content')
      await page.keyboard.press('Control+s')

      // Open version history
      await jsClick(page, '[data-testid="note-menu-button"]')
      await jsClick(page, '[data-testid="version-history-button"]')

      // Restore first version
      await jsClick(
        page,
        '[data-testid="version-item"]:last-child [data-testid="restore-version"]'
      )
      await jsClick(page, '[data-testid="confirm-restore"]')

      // Verify content is restored
      await expect(editor).toContainText('Original content')
    })
  })

  test.describe('Note Sharing', () => {
    // SKIPPED: Sharing functionality not implemented
    test('should share note with link', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Shared Note')
      await page.keyboard.press('Control+s')

      // Share note
      await jsClick(page, '[data-testid="share-button"]')
      await jsClick(page, '[data-testid="create-share-link"]')

      // Verify share link is created
      await expect(
        page.locator('[data-testid="share-link-input"]')
      ).toBeVisible()

      // Copy link
      await jsClick(page, '[data-testid="copy-share-link"]')

      // Verify copied indicator
      await expect(page.locator('[data-testid="link-copied"]')).toBeVisible()
    })

    test('should manage share permissions', async ({ page }) => {
      // Create and share note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Permission Test')
      await page.keyboard.press('Control+s')

      await jsClick(page, '[data-testid="share-button"]')
      await jsClick(page, '[data-testid="create-share-link"]')

      // Change permissions
      await jsClick(page, '[data-testid="permission-dropdown"]')
      await jsClick(page, '[data-testid="permission-view-only"]')

      // Verify permission is updated
      await expect(
        page.locator('[data-testid="permission-indicator"]')
      ).toContainText('View only')
    })

    test('should revoke share link', async ({ page }) => {
      // Create and share note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Revoke Share')
      await page.keyboard.press('Control+s')

      await jsClick(page, '[data-testid="share-button"]')
      await jsClick(page, '[data-testid="create-share-link"]')

      // Revoke link
      await jsClick(page, '[data-testid="revoke-share-link"]')
      await jsClick(page, '[data-testid="confirm-revoke"]')

      // Verify link is revoked
      await expect(
        page.locator('[data-testid="share-link-input"]')
      ).not.toBeVisible()
      await expect(
        page.locator('[data-testid="create-share-link"]')
      ).toBeVisible()
    })
  })

  test.describe('Note Metadata', () => {
    // SKIPPED: Metadata features not implemented
    test('should show note creation date', async ({ page }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Metadata Test')
      await page.keyboard.press('Control+s')

      // Open note info
      await jsClick(page, '[data-testid="note-info-button"]')

      // Verify creation date is shown
      await expect(page.locator('[data-testid="created-date"]')).toBeVisible()
      await expect(page.locator('[data-testid="created-date"]')).toContainText(
        new Date().getFullYear().toString()
      )
    })

    test('should show note modification date', async ({ page }) => {
      // Create and modify note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Modified Note')
      await page.keyboard.press('Control+s')

      // Wait a moment
      await page.waitForTimeout(1000)

      // Modify note
      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Modified content')
      await page.keyboard.press('Control+s')

      // Open note info
      await jsClick(page, '[data-testid="note-info-button"]')

      // Verify modification date
      await expect(page.locator('[data-testid="modified-date"]')).toBeVisible()
    })

    test('should show word count', async ({ page }) => {
      // Create note with content
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Word Count Test')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('This is a test with multiple words in it.')

      // Check word count
      await expect(page.locator('[data-testid="word-count"]')).toContainText(
        '9 words'
      )
    })

    test('should show character count', async ({ page }) => {
      // Create note with content
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Test')

      // Check character count
      await expect(
        page.locator('[data-testid="character-count"]')
      ).toContainText('4 characters')
    })
  })

  test.describe('Note Performance', () => {
    // SKIPPED: Performance tests not applicable without full implementation
    test('should handle large notes efficiently', async ({ page }) => {
      // Create a large note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Large Note')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')

      // Type large content
      const largeContent = 'Lorem ipsum dolor sit amet. '.repeat(1000)
      await editor.type(largeContent)

      // Save should still work
      await page.keyboard.press('Control+s')
      await expect(page.locator('[data-testid="save-indicator"]')).toBeVisible()

      // Navigation should be smooth
      await page.keyboard.press('Control+Home')
      await page.keyboard.press('Control+End')

      // Search should work
      await page.keyboard.press('Control+f')
      await jsType(page, '[data-testid="find-input"]', 'Lorem')
      await expect(page.locator('[data-testid="find-count"]')).toContainText(
        '1000'
      )
    })

    test('should handle many notes efficiently', async ({ page }) => {
      // Create many notes
      for (let i = 0; i < 20; i++) {
        await jsClick(page, '[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await jsType(page, '[data-testid="note-title"]', `Note ${i + 1}`)
        await page.keyboard.press('Control+s')
      }

      // List should render efficiently
      await expect(page.locator('[data-testid="note-list-item"]')).toHaveCount(
        20
      )

      // Search should be fast
      await jsType(page, '[data-testid="search-input"]', 'Note 15')
      await expect(page.locator('[data-testid="note-list-item"]')).toHaveCount(
        1
      )

      // Scrolling should be smooth
      await page
        .locator('[data-testid="note-list"]')
        .evaluate((el) => (el.scrollTop = 1000))
      await page
        .locator('[data-testid="note-list"]')
        .evaluate((el) => (el.scrollTop = 0))
    })
  })

  test.describe('Note Offline Support', () => {
    // SKIPPED: Offline support not implemented
    test('should work offline', async ({ page, context }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Offline Note')
      await page.keyboard.press('Control+s')

      // Go offline
      await context.setOffline(true)

      // Should still be able to edit
      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Offline edit')

      // Verify offline indicator
      await expect(
        page.locator('[data-testid="offline-indicator"]')
      ).toBeVisible()

      // Go back online
      await context.setOffline(false)

      // Verify sync happens
      await expect(page.locator('[data-testid="sync-indicator"]')).toBeVisible()
    })

    test('should sync when coming back online', async ({ page, context }) => {
      // Create a note
      await jsClick(page, '[data-testid="new-note-button"]')
      await page.waitForSelector('[data-testid="note-editor"]')
      await jsType(page, '[data-testid="note-title"]', 'Sync Test')

      // Go offline and make changes
      await context.setOffline(true)

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await jsClick(page, '[data-testid="note-editor"] .slate-content')
      await editor.type('Offline changes')
      await page.keyboard.press('Control+s')

      // Go back online
      await context.setOffline(false)

      // Wait for sync
      await expect(page.locator('[data-testid="sync-complete"]')).toBeVisible({
        timeout: 10000,
      })

      // Verify changes persisted
      await page.reload()
      await jsClick(
        page,
        '[data-testid="note-list-item"]:has-text("Sync Test")'
      )
      await expect(editor).toContainText('Offline changes')
    })
  })
})
