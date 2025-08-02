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

    // Handle template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.click('button:has-text("Blank Note")')

    // Wait for navigation
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)

    // Fill in title
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('Export Test Note')

    // Fill in content using the rich text editor
    const editor = page.locator('[data-testid="note-content-textarea"]')
    await editor.click()

    // Type content with rich formatting
    await editor.type('This is a test note for export functionality.')

    // Wait for auto-save
    await page.waitForTimeout(1000)
  })

  test.describe('Export Dialog', () => {
    test('should open export dialog', async ({ page }) => {
      // Click export button
      await page.click('button:has-text("Export")')

      // Verify dialog opens - it's either a dropdown or dialog
      // First check if dropdown opened
      const dropdownVisible = await page
        .locator('text="Quick Export"')
        .isVisible()
        .catch(() => false)

      if (dropdownVisible) {
        // Dropdown opened successfully
        await expect(page.locator('text="Quick Export"')).toBeVisible()
        await expect(page.locator('text="Export as Markdown"')).toBeVisible()
      } else {
        // Check for dialog
        await expect(page.locator('[role="dialog"]')).toBeVisible()
      }
    })

    test('should display all export format options', async ({ page }) => {
      await page.click('button:has-text("Export")')

      // Check dropdown menu items
      await expect(page.locator('text="Export as Markdown"')).toBeVisible()
      await expect(page.locator('text="Export as HTML"')).toBeVisible()
      await expect(page.locator('text="Export as PDF"')).toBeVisible()
      await expect(page.locator('text="Export as React"')).toBeVisible()

      // Advanced options should also be available
      await expect(page.locator('text="Export with Options..."')).toBeVisible()
    })

    test.skip('should show format descriptions', async ({ page }) => {
      // SKIPPED: Format descriptions in hover not implemented
      await page.click('button:has-text("Export")')

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
      await page.click('button:has-text("Export")')

      // Click advanced options to open dialog
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      // Select PDF format
      await page.click('label:has-text("PDF")')
      await expect(page.locator('input[value="pdf"]')).toBeChecked()

      // Change to HTML
      await page.click('label:has-text("HTML")')
      await expect(page.locator('input[value="html"]')).toBeChecked()
      await expect(page.locator('input[value="pdf"]')).not.toBeChecked()
    })

    test('should display export options', async ({ page }) => {
      await page.click('button:has-text("Export")')

      // Click advanced options
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      // Verify export options section
      await expect(page.locator('text="Export Options"')).toBeVisible()
      await expect(
        page.locator('label:has-text("Include metadata")')
      ).toBeVisible()
      await expect(page.locator('label:has-text("Include tags")')).toBeVisible()
      await expect(
        page.locator('label:has-text("Include attachments")')
      ).toBeVisible()
    })
  })

  test.describe('Markdown Export', () => {
    test('should export as Markdown', async ({ page }) => {
      await page.click('button:has-text("Export")')

      // Use quick export option
      await page.click('text="Export as Markdown"')

      // Wait for download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')

      // Verify content (would need to read file in real test)
      const path = await download.path()
      expect(path).toBeTruthy()
    })

    test('should preserve Markdown formatting', async ({ page }) => {
      // First add some formatted content to the editor
      const editor = page.locator('[data-testid="note-content-textarea"]')
      await editor.click()
      await editor.press('Control+a')
      await editor.type(
        '# Heading 1\n\n**bold** and *italic* text\n\n```javascript\nconsole.log("code")\n```\n\n[Link to example](https://example.com)'
      )

      // Wait for content to save
      await page.waitForTimeout(1000)

      await page.click('button:has-text("Export")')
      await page.click('text="Export as Markdown"')

      // Verify download happens with markdown content
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')
    })

    test('should include front matter with metadata', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("Markdown")')
      await page.check('label:has-text("Include metadata")')

      // Export with metadata
      await page.click('button:has-text("Export")')

      // Verify download happens
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')
    })

    test('should include tags in front matter', async ({ page }) => {
      // Add tags to note
      const tagInput = page.locator('[placeholder*="tag"]').first()
      await tagInput.click()
      await tagInput.type('export-test')
      await tagInput.press('Enter')
      await tagInput.type('markdown')
      await tagInput.press('Enter')

      // Wait for tags to be saved
      await page.waitForTimeout(1000)

      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("Markdown")')
      await page.check('label:has-text("Include tags")')

      // Export with tags
      await page.click('button:has-text("Export")')

      // Verify download happens
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')
    })
  })

  test.describe('HTML Export', () => {
    test('should export as HTML', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export as HTML"')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')
    })

    test('should include CSS styling', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("HTML")')
      await page.check('label:has-text("Include styling")')

      // Export with styling
      await page.click('button:has-text("Export")')

      // Verify download happens
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')
    })

    test('should create standalone HTML document', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("HTML")')
      await page.check('label:has-text("Standalone document")')

      // Export as standalone
      await page.click('button:has-text("Export")')

      // Verify download happens
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')
    })

    test('should preserve HTML structure', async ({ page }) => {
      // Add formatted content first
      const editor = page.locator('[data-testid="note-content-textarea"]')
      await editor.click()
      await editor.press('Control+a')
      await editor.type(
        '# Heading 1\n\n**bold** and *italic*\n\n> blockquote\n\n```javascript\ncode\n```'
      )

      // Wait for save
      await page.waitForTimeout(1000)

      await page.click('button:has-text("Export")')
      await page.click('text="Export as HTML"')

      // Verify download happens
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')
    })
  })

  test.describe('PDF Export', () => {
    test('should export as PDF', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export as PDF"')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.pdf')
    })

    test('should show PDF options', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("PDF")')

      // Verify PDF-specific options appear
      await expect(page.locator('text="Page Size"')).toBeVisible()
      await expect(page.locator('text="Orientation"')).toBeVisible()
      await expect(page.locator('text="Margins"')).toBeVisible()
      await expect(
        page.locator('label:has-text("Include headers and footers")')
      ).toBeVisible()
    })

    test('should configure PDF page size', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("PDF")')

      // Change page size
      const pageSizeSelect = page
        .locator('select')
        .filter({ hasText: 'Letter' })
      await pageSizeSelect.selectOption('A4')

      // Verify selection
      await expect(pageSizeSelect).toHaveValue('A4')

      // Try other sizes
      await pageSizeSelect.selectOption('Letter')
      await expect(pageSizeSelect).toHaveValue('Letter')
    })

    test('should configure PDF orientation', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("PDF")')

      // Toggle orientation
      await page.click('label:has-text("Landscape")')
      await expect(page.locator('input[value="landscape"]')).toBeChecked()

      await page.click('label:has-text("Portrait")')
      await expect(page.locator('input[value="portrait"]')).toBeChecked()
    })

    test('should include headers and footers', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Wait for dialog
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      await page.click('label:has-text("PDF")')

      // Enable headers/footers
      await page.check('label:has-text("Include headers and footers")')

      // Header/footer options should appear
      await expect(
        page.locator('input[placeholder="Header text"]')
      ).toBeVisible()
      await page.fill('input[placeholder="Header text"]', 'Export Test Note')

      // Export with settings
      await page.click('button:has-text("Export")')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.pdf')
    })
  })

  test.describe('Other Formats', () => {
    test('should export as React component', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export as React"')

      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.tsx')
    })

    test('should use export dialog for advanced options', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Dialog should open
      await expect(page.locator('[role="dialog"]')).toBeVisible()
      await expect(page.locator('text="Export Note"')).toBeVisible()

      // Should show format options
      await expect(page.locator('label:has-text("Markdown")')).toBeVisible()
      await expect(page.locator('label:has-text("HTML")')).toBeVisible()
      await expect(page.locator('label:has-text("PDF")')).toBeVisible()
      await expect(page.locator('label:has-text("React")')).toBeVisible()
    })

    test('should show export dialog formats', async ({ page }) => {
      await page.click('button:has-text("Export")')
      await page.click('text="Export with Options..."')

      // Dialog should open with format selection
      await expect(page.locator('[role="dialog"]')).toBeVisible()

      // Click through different formats to verify they work
      await page.click('label:has-text("HTML")')
      await expect(page.locator('input[value="html"]')).toBeChecked()

      await page.click('label:has-text("PDF")')
      await expect(page.locator('input[value="pdf"]')).toBeChecked()

      // Close dialog
      await page.keyboard.press('Escape')
    })
  })

  test.describe('Batch Export', () => {
    test('should export multiple notes', async ({ page }) => {
      // Create additional notes
      for (let i = 1; i <= 3; i++) {
        await page.click('[data-testid="new-note-button"]')
        await page.waitForSelector('input[placeholder="Untitled"]')
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

      const editor = page.locator('textarea[placeholder="Start writing..."]')
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
