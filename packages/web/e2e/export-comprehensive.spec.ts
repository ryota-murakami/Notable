import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Export Functionality Tests', () => {
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
    await page.goto('/app')

    // Create a test note with rich content
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })
    await page.fill('[data-testid="note-title"]', 'Export Test Note')

    const editor = page.locator('[data-testid="note-editor"] .slate-content')
    await editor.click()
    await editor.type(`# Heading 1

This is a paragraph with **bold** and *italic* text.

## Heading 2

- Bullet item 1
- Bullet item 2
  - Nested item

1. Numbered item 1
2. Numbered item 2

> This is a blockquote

\`\`\`javascript
const code = "example";
console.log(code);
\`\`\`

[Link to example](https://example.com)

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
`)

    await page.keyboard.press('Control+s')
  })

  test.describe('Export Dialog', () => {
    test('should open export dialog', async ({ page }) => {
      // Click export button
      await page.click('[data-testid="export-button"]')

      // Verify dialog opens
      await expect(page.locator('[data-testid="export-dialog"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="export-dialog-title"]')
      ).toContainText('Export Note')
    })

    test('should display all export format options', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Verify all format options are available
      await expect(
        page.locator('[data-testid="export-format-markdown"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-format-html"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-format-pdf"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-format-docx"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-format-txt"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-format-json"]')
      ).toBeVisible()
    })

    test('should show format descriptions', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Hover over format options to see descriptions
      await page.hover('[data-testid="export-format-markdown"]')
      await expect(
        page.locator('[data-testid="format-tooltip"]')
      ).toContainText('Preserves formatting with Markdown syntax')

      await page.hover('[data-testid="export-format-pdf"]')
      await expect(
        page.locator('[data-testid="format-tooltip"]')
      ).toContainText('Print-ready document format')
    })

    test('should allow format selection', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Select PDF format
      await page.click('[data-testid="export-format-pdf"]')
      await expect(
        page.locator('[data-testid="export-format-pdf"]')
      ).toHaveClass(/selected/)

      // Change to HTML
      await page.click('[data-testid="export-format-html"]')
      await expect(
        page.locator('[data-testid="export-format-html"]')
      ).toHaveClass(/selected/)
      await expect(
        page.locator('[data-testid="export-format-pdf"]')
      ).not.toHaveClass(/selected/)
    })

    test('should display export options', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Verify export options section
      await expect(page.locator('[data-testid="export-options"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="include-metadata-option"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="include-tags-option"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="include-attachments-option"]')
      ).toBeVisible()
    })
  })

  test.describe('Markdown Export', () => {
    test('should export as Markdown', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-markdown"]')
      await page.click('[data-testid="export-confirm"]')

      // Wait for download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.md')

      // Verify content (would need to read file in real test)
      const path = await download.path()
      expect(path).toBeTruthy()
    })

    test('should preserve Markdown formatting', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-markdown"]')

      // Preview export
      await page.click('[data-testid="export-preview-button"]')

      // Verify preview shows proper Markdown
      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('# Heading 1')
      await expect(preview).toContainText('**bold**')
      await expect(preview).toContainText('*italic*')
      await expect(preview).toContainText('```javascript')
      await expect(preview).toContainText(
        '[Link to example](https://example.com)'
      )
    })

    test('should include front matter with metadata', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-markdown"]')
      await page.check('[data-testid="include-metadata-option"]')

      // Preview
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('---')
      await expect(preview).toContainText('title: Export Test Note')
      await expect(preview).toContainText('created:')
      await expect(preview).toContainText('modified:')
      await expect(preview).toContainText('---')
    })

    test('should include tags in front matter', async ({ page }) => {
      // Add tags to note
      const tagInput = page.locator('[data-testid="tag-input"]')
      await tagInput.click()
      await tagInput.type('export-test')
      await tagInput.press('Enter')
      await tagInput.type('markdown')
      await tagInput.press('Enter')

      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-markdown"]')
      await page.check('[data-testid="include-tags-option"]')

      // Preview
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('tags: [export-test, markdown]')
    })
  })

  test.describe('HTML Export', () => {
    test('should export as HTML', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-html"]')
      await page.click('[data-testid="export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.html')
    })

    test('should include CSS styling', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-html"]')
      await page.check('[data-testid="include-styling-option"]')

      // Preview
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('<style>')
      await expect(preview).toContainText('</style>')
    })

    test('should create standalone HTML document', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-html"]')
      await page.check('[data-testid="standalone-html-option"]')

      // Preview
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('<!DOCTYPE html>')
      await expect(preview).toContainText('<html')
      await expect(preview).toContainText('<head>')
      await expect(preview).toContainText('<body>')
      await expect(preview).toContainText('</html>')
    })

    test('should preserve HTML structure', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-html"]')

      // Preview
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('<h1>Heading 1</h1>')
      await expect(preview).toContainText('<strong>bold</strong>')
      await expect(preview).toContainText('<em>italic</em>')
      await expect(preview).toContainText('<blockquote>')
      await expect(preview).toContainText(
        '<pre><code class="language-javascript">'
      )
      await expect(preview).toContainText('<table>')
    })
  })

  test.describe('PDF Export', () => {
    test('should export as PDF', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')
      await page.click('[data-testid="export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.pdf')
    })

    test('should show PDF options', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')

      // Verify PDF-specific options
      await expect(page.locator('[data-testid="pdf-page-size"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="pdf-orientation"]')
      ).toBeVisible()
      await expect(page.locator('[data-testid="pdf-margins"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="pdf-header-footer"]')
      ).toBeVisible()
    })

    test('should configure PDF page size', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')

      // Change page size
      await page.click('[data-testid="pdf-page-size"]')
      await page.click('[data-testid="page-size-a4"]')

      // Verify selection
      await expect(page.locator('[data-testid="pdf-page-size"]')).toContainText(
        'A4'
      )

      // Try other sizes
      await page.click('[data-testid="pdf-page-size"]')
      await page.click('[data-testid="page-size-letter"]')
      await expect(page.locator('[data-testid="pdf-page-size"]')).toContainText(
        'Letter'
      )
    })

    test('should configure PDF orientation', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')

      // Toggle orientation
      await page.click('[data-testid="pdf-orientation-landscape"]')
      await expect(
        page.locator('[data-testid="pdf-orientation-landscape"]')
      ).toBeChecked()

      await page.click('[data-testid="pdf-orientation-portrait"]')
      await expect(
        page.locator('[data-testid="pdf-orientation-portrait"]')
      ).toBeChecked()
    })

    test('should include headers and footers', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')

      // Enable headers/footers
      await page.check('[data-testid="pdf-header-footer"]')

      // Configure header
      await page.fill('[data-testid="pdf-header-text"]', 'Export Test Note')
      await page.check('[data-testid="pdf-header-page-numbers"]')

      // Configure footer
      await page.fill('[data-testid="pdf-footer-text"]', '© 2024 Notable')
      await page.check('[data-testid="pdf-footer-date"]')
    })
  })

  test.describe('Other Formats', () => {
    test('should export as plain text', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-txt"]')
      await page.click('[data-testid="export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.txt')
    })

    test('should export as DOCX', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-docx"]')
      await page.click('[data-testid="export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.docx')
    })

    test('should export as JSON', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-json"]')

      // Preview JSON structure
      await page.click('[data-testid="export-preview-button"]')

      const preview = page.locator('[data-testid="export-preview-content"]')
      await expect(preview).toContainText('"title": "Export Test Note"')
      await expect(preview).toContainText('"content":')
      await expect(preview).toContainText('"created":')
      await expect(preview).toContainText('"modified":')

      await page.click('[data-testid="export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toBe('Export Test Note.json')
    })
  })

  test.describe('Batch Export', () => {
    test('should export multiple notes', async ({ page }) => {
      // Create additional notes
      for (let i = 1; i <= 3; i++) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('[data-testid="note-editor"]')
        await page.fill('[data-testid="note-title"]', `Export Note ${i}`)
        await page.keyboard.press('Control+s')
      }

      // Go to notes list
      await page.click('[data-testid="notes-list-button"]')

      // Select multiple notes
      await page.click('[data-testid="select-mode-button"]')
      await page.check('[data-testid="note-checkbox-export-test-note"]')
      await page.check('[data-testid="note-checkbox-export-note-1"]')
      await page.check('[data-testid="note-checkbox-export-note-2"]')

      // Click batch export
      await page.click('[data-testid="batch-export-button"]')

      // Verify batch export dialog
      await expect(
        page.locator('[data-testid="batch-export-dialog"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="selected-notes-count"]')
      ).toContainText('3 notes selected')
    })

    test('should export as zip archive', async ({ page }) => {
      // Select multiple notes (setup from previous test)
      await page.click('[data-testid="notes-list-button"]')
      await page.click('[data-testid="select-mode-button"]')
      await page.check('[data-testid="note-checkbox-export-test-note"]')
      await page.check('[data-testid="note-checkbox-export-note-1"]')

      await page.click('[data-testid="batch-export-button"]')

      // Select zip format
      await page.click('[data-testid="batch-export-format-zip"]')
      await page.click('[data-testid="batch-export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.zip')
    })

    test('should export with folder structure', async ({ page }) => {
      // Create notes in folders
      await page.click('[data-testid="new-folder-button"]')
      await page.fill('[data-testid="folder-name-input"]', 'Export Folder')
      await page.keyboard.press('Enter')

      await page.click('[data-testid="folder-export-folder"]')
      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Folder Note')
      await page.keyboard.press('Control+s')

      // Export with folder structure
      await page.click('[data-testid="notes-list-button"]')
      await page.click('[data-testid="select-all-button"]')
      await page.click('[data-testid="batch-export-button"]')

      await page.check('[data-testid="preserve-folder-structure"]')
      await page.click('[data-testid="batch-export-confirm"]')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('Notable-Export')
    })
  })

  test.describe('Export Settings', () => {
    test('should save export preferences', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Configure preferences
      await page.click('[data-testid="export-format-markdown"]')
      await page.check('[data-testid="include-metadata-option"]')
      await page.check('[data-testid="include-tags-option"]')

      // Save as default
      await page.click('[data-testid="save-export-preferences"]')

      // Close and reopen
      await page.click('[data-testid="export-cancel"]')
      await page.click('[data-testid="export-button"]')

      // Verify preferences are saved
      await expect(
        page.locator('[data-testid="export-format-markdown"]')
      ).toHaveClass(/selected/)
      await expect(
        page.locator('[data-testid="include-metadata-option"]')
      ).toBeChecked()
      await expect(
        page.locator('[data-testid="include-tags-option"]')
      ).toBeChecked()
    })

    test('should create export presets', async ({ page }) => {
      await page.click('[data-testid="export-button"]')

      // Configure export
      await page.click('[data-testid="export-format-pdf"]')
      await page.click('[data-testid="pdf-page-size"]')
      await page.click('[data-testid="page-size-a4"]')
      await page.check('[data-testid="pdf-header-footer"]')

      // Save as preset
      await page.click('[data-testid="save-as-preset"]')
      await page.fill('[data-testid="preset-name-input"]', 'Print Ready PDF')
      await page.click('[data-testid="save-preset-confirm"]')

      // Load preset
      await page.click('[data-testid="export-cancel"]')
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="load-preset-button"]')
      await page.click('[data-testid="preset-print-ready-pdf"]')

      // Verify preset loaded
      await expect(
        page.locator('[data-testid="export-format-pdf"]')
      ).toHaveClass(/selected/)
      await expect(page.locator('[data-testid="pdf-page-size"]')).toContainText(
        'A4'
      )
      await expect(
        page.locator('[data-testid="pdf-header-footer"]')
      ).toBeChecked()
    })
  })

  test.describe('Export Progress', () => {
    test('should show progress for large exports', async ({ page }) => {
      // Create a large note
      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Large Note')

      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()

      // Add lots of content
      for (let i = 0; i < 100; i++) {
        await editor.type(`Paragraph ${i} with some content\n`)
      }

      await page.keyboard.press('Control+s')

      // Export as PDF (slow)
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')
      await page.click('[data-testid="export-confirm"]')

      // Verify progress indicator
      await expect(
        page.locator('[data-testid="export-progress"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-progress-bar"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="export-progress-text"]')
      ).toContainText('Exporting')
    })

    test('should allow canceling export', async ({ page }) => {
      // Start a large export
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')
      await page.click('[data-testid="export-confirm"]')

      // Cancel export
      await page.click('[data-testid="export-cancel-progress"]')

      // Verify export was cancelled
      await expect(
        page.locator('[data-testid="export-cancelled-notification"]')
      ).toBeVisible()
    })
  })

  test.describe('Export Error Handling', () => {
    test('should handle export failures', async ({ page }) => {
      // Simulate network error
      await page.route('**/api/export**', (route) => route.abort())

      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')
      await page.click('[data-testid="export-confirm"]')

      // Verify error message
      await expect(page.locator('[data-testid="export-error"]')).toBeVisible()
      await expect(page.locator('[data-testid="export-error"]')).toContainText(
        'Export failed'
      )

      // Retry option
      await expect(page.locator('[data-testid="export-retry"]')).toBeVisible()
    })

    test('should validate export options', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-pdf"]')

      // Try invalid margin value
      await page.fill('[data-testid="pdf-margin-top"]', '-10')
      await page.click('[data-testid="export-confirm"]')

      // Verify validation error
      await expect(page.locator('[data-testid="margin-error"]')).toContainText(
        'Margin must be positive'
      )
    })
  })

  test.describe('Export Integration', () => {
    test('should integrate with cloud storage', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-markdown"]')

      // Click cloud export
      await page.click('[data-testid="export-to-cloud"]')

      // Verify cloud options
      await expect(
        page.locator('[data-testid="cloud-provider-google-drive"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="cloud-provider-dropbox"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="cloud-provider-onedrive"]')
      ).toBeVisible()

      // Select Google Drive
      await page.click('[data-testid="cloud-provider-google-drive"]')

      // Would trigger OAuth flow in real implementation
      await expect(
        page.locator('[data-testid="cloud-auth-button"]')
      ).toBeVisible()
    })

    test('should support export automation', async ({ page }) => {
      // Go to settings
      await page.click('[data-testid="settings-button"]')
      await page.click('[data-testid="settings-export"]')

      // Configure auto-export
      await page.check('[data-testid="enable-auto-export"]')
      await page.click('[data-testid="auto-export-frequency"]')
      await page.click('[data-testid="frequency-daily"]')
      await page.click('[data-testid="auto-export-format"]')
      await page.click('[data-testid="format-markdown"]')

      // Save settings
      await page.click('[data-testid="save-export-settings"]')

      // Verify saved
      await expect(
        page.locator('[data-testid="settings-saved-notification"]')
      ).toBeVisible()
    })

    test('should export with templates', async ({ page }) => {
      await page.click('[data-testid="export-button"]')
      await page.click('[data-testid="export-format-html"]')

      // Use custom template
      await page.click('[data-testid="use-custom-template"]')
      await page.click('[data-testid="template-select"]')
      await page.click('[data-testid="template-professional"]')

      // Preview with template
      await page.click('[data-testid="export-preview-button"]')

      // Verify template is applied
      await expect(
        page.locator('[data-testid="export-preview-content"]')
      ).toHaveClass(/professional-template/)
    })
  })
})
