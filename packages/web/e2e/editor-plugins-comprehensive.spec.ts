import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Editor Plugins Tests', () => {
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

    // Wait for redirect to app
    await page.waitForURL('/app', { timeout: 10000 })

    // Create a new note to access the editor
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })
  })

  test.describe('Basic Marks Kit', () => {
    test('should apply all basic text marks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      // Test bold mark
      await editor.click()
      await editor.type('Bold text')
      await editor.press('Control+a')
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toContainText('Bold text')

      // Test italic mark
      await editor.press('Control+a')
      await page.keyboard.press('Control+i')
      await expect(page.locator('em')).toContainText('Bold text')

      // Test underline mark
      await editor.press('Control+a')
      await page.keyboard.press('Control+u')
      await expect(page.locator('u')).toContainText('Bold text')

      // Test strikethrough mark
      await editor.press('Control+a')
      await page.keyboard.press('Control+Shift+x')
      await expect(page.locator('s')).toContainText('Bold text')

      // Test code mark
      await editor.press('Control+a')
      await page.keyboard.press('Control+e')
      await expect(page.locator('code')).toContainText('Bold text')

      // Test highlight mark
      await editor.press('Control+a')
      await page.keyboard.press('Control+h')
      await expect(page.locator('mark')).toContainText('Bold text')
    })

    test('should toggle marks on and off', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Toggle test')
      await editor.press('Control+a')

      // Apply bold
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toBeVisible()

      // Toggle bold off
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toHaveCount(0)

      // Apply multiple marks
      await page.keyboard.press('Control+b')
      await page.keyboard.press('Control+i')
      await expect(page.locator('strong em')).toBeVisible()

      // Remove one mark
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toHaveCount(0)
      await expect(page.locator('em')).toBeVisible()
    })

    test('should apply marks via toolbar buttons', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Toolbar marks test')
      await editor.press('Control+a')

      // Click bold button
      await page.click('[data-testid="toolbar-bold"]')
      await expect(page.locator('strong')).toContainText('Toolbar marks test')

      // Click italic button
      await page.click('[data-testid="toolbar-italic"]')
      await expect(page.locator('em')).toContainText('Toolbar marks test')

      // Click underline button
      await page.click('[data-testid="toolbar-underline"]')
      await expect(page.locator('u')).toContainText('Toolbar marks test')
    })

    test('should clear all marks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Clear marks test')
      await editor.press('Control+a')

      // Apply multiple marks
      await page.keyboard.press('Control+b')
      await page.keyboard.press('Control+i')
      await page.keyboard.press('Control+u')

      // Clear all marks
      await page.keyboard.press('Control+\\')

      // Verify all marks are removed
      await expect(page.locator('strong')).toHaveCount(0)
      await expect(page.locator('em')).toHaveCount(0)
      await expect(page.locator('u')).toHaveCount(0)
    })
  })

  test.describe('Basic Blocks Kit', () => {
    test('should create all heading levels', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      // Test heading 1
      await editor.click()
      await editor.type('# Heading 1')
      await editor.press('Enter')
      await expect(page.locator('h1')).toContainText('Heading 1')

      // Test heading 2
      await editor.type('## Heading 2')
      await editor.press('Enter')
      await expect(page.locator('h2')).toContainText('Heading 2')

      // Test heading 3
      await editor.type('### Heading 3')
      await editor.press('Enter')
      await expect(page.locator('h3')).toContainText('Heading 3')

      // Test heading 4
      await editor.type('#### Heading 4')
      await editor.press('Enter')
      await expect(page.locator('h4')).toContainText('Heading 4')

      // Test heading 5
      await editor.type('##### Heading 5')
      await editor.press('Enter')
      await expect(page.locator('h5')).toContainText('Heading 5')

      // Test heading 6
      await editor.type('###### Heading 6')
      await editor.press('Enter')
      await expect(page.locator('h6')).toContainText('Heading 6')
    })

    test('should create lists', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      // Test bullet list
      await editor.click()
      await editor.type('- First item')
      await editor.press('Enter')
      await editor.type('Second item')
      await editor.press('Enter')
      await editor.type('Third item')

      await expect(page.locator('ul li')).toHaveCount(3)

      // Test numbered list
      await editor.press('Enter')
      await editor.press('Enter')
      await editor.type('1. First numbered')
      await editor.press('Enter')
      await editor.type('Second numbered')

      await expect(page.locator('ol li')).toHaveCount(2)

      // Test nested lists
      await editor.press('Enter')
      await editor.press('Tab')
      await editor.type('Nested item')

      await expect(page.locator('ol ol li')).toContainText('Nested item')
    })

    test('should create blockquotes', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('> This is a quote')
      await editor.press('Enter')

      await expect(page.locator('blockquote')).toContainText('This is a quote')

      // Test nested blockquote
      await editor.type('> > Nested quote')
      await editor.press('Enter')

      await expect(page.locator('blockquote blockquote')).toContainText(
        'Nested quote'
      )
    })

    test('should create code blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('```')
      await editor.press('Enter')
      await editor.type('const hello = "world";')
      await editor.press('Enter')
      await editor.type('console.log(hello);')
      await editor.press('Enter')
      await editor.type('```')

      await expect(page.locator('pre code')).toContainText(
        'const hello = "world";'
      )

      // Test code block with language
      await editor.press('Enter')
      await editor.press('Enter')
      await editor.type('```javascript')
      await editor.press('Enter')
      await editor.type('function greet() { return "Hello"; }')
      await editor.press('Enter')
      await editor.type('```')

      const codeBlock = page.locator('pre code').last()
      await expect(codeBlock).toContainText('function greet')
      await expect(codeBlock).toHaveAttribute('class', /language-javascript/)
    })

    test('should create horizontal rules', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Text above')
      await editor.press('Enter')
      await editor.type('---')
      await editor.press('Enter')
      await editor.type('Text below')

      await expect(page.locator('hr')).toBeVisible()
    })
  })

  test.describe('Advanced Blocks Kit', () => {
    test('should create callout blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-callout"]')

      // Verify callout block is created
      await expect(page.locator('[data-testid="callout-block"]')).toBeVisible()

      // Type in callout
      await page.locator('[data-testid="callout-content"]').click()
      await page
        .locator('[data-testid="callout-content"]')
        .type('This is an important callout')

      // Change callout type
      await page.click('[data-testid="callout-type-select"]')
      await page.click('[data-testid="callout-type-warning"]')

      await expect(page.locator('[data-testid="callout-block"]')).toHaveClass(
        /warning/
      )
    })

    test('should create toggle blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-toggle"]')

      // Add toggle title
      await page.fill('[data-testid="toggle-title"]', 'Click to expand')

      // Add content
      const toggleContent = page.locator('[data-testid="toggle-content"]')
      await toggleContent.click()
      await toggleContent.type('Hidden content here')

      // Test toggle functionality
      const toggleButton = page.locator('[data-testid="toggle-button"]')

      // Collapse
      await toggleButton.click()
      await expect(toggleContent).not.toBeVisible()

      // Expand
      await toggleButton.click()
      await expect(toggleContent).toBeVisible()
    })

    test('should create table blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-table"]')

      // Select table size
      await page.click('[data-testid="table-size-3x3"]')

      // Verify table is created
      await expect(page.locator('table')).toBeVisible()
      await expect(page.locator('tr')).toHaveCount(3)
      await expect(page.locator('td')).toHaveCount(9)

      // Type in cells
      const firstCell = page.locator('td').first()
      await firstCell.click()
      await firstCell.type('Cell 1')

      // Navigate with Tab
      await page.keyboard.press('Tab')
      await page.keyboard.type('Cell 2')

      // Add row
      await page.click('[data-testid="table-add-row"]')
      await expect(page.locator('tr')).toHaveCount(4)

      // Add column
      await page.click('[data-testid="table-add-column"]')
      await expect(page.locator('tr:first-child td')).toHaveCount(4)
    })

    test('should create todo blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-todo"]')

      // Type todo item
      await page.keyboard.type('First task')
      await page.keyboard.press('Enter')
      await page.keyboard.type('Second task')

      // Verify todo blocks
      const checkboxes = page.locator('[data-testid="todo-checkbox"]')
      await expect(checkboxes).toHaveCount(2)

      // Check first item
      await checkboxes.first().click()
      await expect(checkboxes.first()).toBeChecked()

      // Verify strikethrough on checked item
      await expect(
        page.locator('[data-testid="todo-item"]:has-text("First task")')
      ).toHaveClass(/completed/)
    })

    test('should create column layout', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-columns"]')

      // Select 2-column layout
      await page.click('[data-testid="columns-2"]')

      // Verify columns are created
      await expect(
        page.locator('[data-testid="column-container"]')
      ).toBeVisible()
      await expect(page.locator('[data-testid="column"]')).toHaveCount(2)

      // Type in first column
      const firstColumn = page.locator('[data-testid="column"]').first()
      await firstColumn.click()
      await firstColumn.type('Left column content')

      // Type in second column
      const secondColumn = page.locator('[data-testid="column"]').last()
      await secondColumn.click()
      await secondColumn.type('Right column content')
    })
  })

  test.describe('Link Plugin', () => {
    test('should create links', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Visit our website')

      // Select "website"
      await editor.press('Control+a')
      await page.keyboard.press('Control+Shift+ArrowLeft')
      await page.keyboard.press('Control+Shift+ArrowLeft')

      // Open link dialog
      await page.keyboard.press('Control+k')

      // Fill link URL
      await page.fill('[data-testid="link-url-input"]', 'https://example.com')
      await page.fill('[data-testid="link-title-input"]', 'Example Website')
      await page.click('[data-testid="link-submit"]')

      // Verify link is created
      const link = page.locator('a[href="https://example.com"]')
      await expect(link).toContainText('website')
      await expect(link).toHaveAttribute('title', 'Example Website')
    })

    test('should create links with markdown syntax', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('[Example](https://example.com)')
      await editor.press('Space')

      // Verify link is created
      await expect(page.locator('a[href="https://example.com"]')).toContainText(
        'Example'
      )
    })

    test('should edit existing links', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('[Old Link](https://old.com)')
      await editor.press('Space')

      // Click on the link
      await page.click('a[href="https://old.com"]')

      // Edit link
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="link-url-input"]', 'https://new.com')
      await page.click('[data-testid="link-submit"]')

      // Verify link is updated
      await expect(page.locator('a[href="https://new.com"]')).toContainText(
        'Old Link'
      )
    })

    test('should remove links', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('[Remove Me](https://remove.com)')
      await editor.press('Space')

      // Click on the link
      await page.click('a[href="https://remove.com"]')

      // Remove link
      await page.keyboard.press('Control+Shift+k')

      // Verify link is removed but text remains
      await expect(page.locator('a')).toHaveCount(0)
      await expect(editor).toContainText('Remove Me')
    })

    test('should open link in new tab', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('[External](https://external.com)')
      await editor.press('Space')

      // Right-click on link
      await page
        .locator('a[href="https://external.com"]')
        .click({ button: 'right' })

      // Click open in new tab
      await page.click('[data-testid="link-open-new-tab"]')

      // Verify link has target="_blank"
      await expect(
        page.locator('a[href="https://external.com"]')
      ).toHaveAttribute('target', '_blank')
    })
  })

  test.describe('Enhanced Editor Kit', () => {
    test('should support find and replace', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Find this text. This text should be found.')

      // Open find and replace
      await page.keyboard.press('Control+f')

      // Search for "this"
      await page.fill('[data-testid="find-input"]', 'this')

      // Verify matches are highlighted
      await expect(
        page.locator('[data-testid="search-highlight"]')
      ).toHaveCount(2)

      // Navigate between matches
      await page.click('[data-testid="find-next"]')
      await page.click('[data-testid="find-previous"]')

      // Replace
      await page.fill('[data-testid="replace-input"]', 'that')
      await page.click('[data-testid="replace-current"]')

      // Replace all
      await page.click('[data-testid="replace-all"]')

      // Verify replacements
      await expect(editor).toContainText(
        'Find that text. That text should be found.'
      )
    })

    test('should support emoji picker', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('Hello ')

      // Open emoji picker
      await page.keyboard.press('Control+Shift+e')

      // Search for emoji
      await page.fill('[data-testid="emoji-search"]', 'smile')

      // Select emoji
      await page.click('[data-testid="emoji-item"]:first-child')

      // Verify emoji is inserted
      await expect(editor).toContainText('Hello 😊')
    })

    test('should support word count', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('This is a test sentence with seven words.')

      // Verify word count is displayed
      await expect(page.locator('[data-testid="word-count"]')).toContainText(
        '8 words'
      )
      await expect(
        page.locator('[data-testid="character-count"]')
      ).toContainText('42 characters')

      // Select text to see selection count
      await editor.press('Control+a')
      await expect(
        page.locator('[data-testid="selection-word-count"]')
      ).toContainText('8 words selected')
    })

    test('should support export to different formats', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('# Export Test')
      await editor.press('Enter')
      await editor.type('This content will be exported.')

      // Open export menu
      await page.click('[data-testid="editor-export-button"]')

      // Export as Markdown
      await page.click('[data-testid="export-markdown"]')
      let download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.md')

      // Export as HTML
      await page.click('[data-testid="editor-export-button"]')
      await page.click('[data-testid="export-html"]')
      download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.html')

      // Export as PDF
      await page.click('[data-testid="editor-export-button"]')
      await page.click('[data-testid="export-pdf"]')
      download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('.pdf')
    })

    test('should support print preview', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('# Print Preview Test')
      await editor.press('Enter')
      await editor.type('This document will be printed.')

      // Open print preview
      await page.keyboard.press('Control+p')

      // Verify print preview dialog
      await expect(
        page.locator('[data-testid="print-preview-dialog"]')
      ).toBeVisible()

      // Verify print options
      await expect(
        page.locator('[data-testid="print-layout-option"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="print-margins-option"]')
      ).toBeVisible()

      // Close preview
      await page.click('[data-testid="print-preview-close"]')
    })
  })

  test.describe('Slash Command Kit', () => {
    test('should show slash command menu', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')

      // Verify menu appears
      await expect(
        page.locator('[data-testid="slash-command-menu"]')
      ).toBeVisible()

      // Verify command categories
      await expect(
        page.locator('[data-testid="slash-category-basic"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="slash-category-advanced"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="slash-category-media"]')
      ).toBeVisible()
    })

    test('should filter slash commands', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')

      // Type to filter
      await editor.type('head')

      // Verify only heading commands are visible
      await expect(
        page.locator('[data-testid="slash-command-heading1"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="slash-command-heading2"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="slash-command-table"]')
      ).not.toBeVisible()
    })

    test('should insert blocks via slash commands', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      // Test image insertion
      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-image"]')

      // Fill image URL
      await page.fill(
        '[data-testid="image-url-input"]',
        'https://example.com/image.jpg'
      )
      await page.fill('[data-testid="image-alt-input"]', 'Test Image')
      await page.click('[data-testid="image-insert"]')

      // Verify image is inserted
      const image = page.locator('img[src="https://example.com/image.jpg"]')
      await expect(image).toBeVisible()
      await expect(image).toHaveAttribute('alt', 'Test Image')

      // Test video embed
      await editor.press('Enter')
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')
      await page.click('[data-testid="slash-command-video"]')

      // Fill video URL
      await page.fill(
        '[data-testid="video-url-input"]',
        'https://youtube.com/watch?v=123'
      )
      await page.click('[data-testid="video-embed"]')

      // Verify video is embedded
      await expect(
        page.locator('[data-testid="video-embed-container"]')
      ).toBeVisible()
    })

    test('should navigate slash menu with keyboard', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')

      // Navigate with arrow keys
      await page.keyboard.press('ArrowDown')
      await expect(
        page.locator('[data-testid="slash-command-item"].selected')
      ).toHaveCount(1)

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowUp')

      // Select with Enter
      await page.keyboard.press('Enter')

      // Verify command was executed
      await expect(
        page.locator('[data-testid="slash-command-menu"]')
      ).not.toBeVisible()
    })

    test('should close slash menu on Escape', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()
      await editor.type('/')
      await page.waitForSelector('[data-testid="slash-command-menu"]')

      // Press Escape
      await page.keyboard.press('Escape')

      // Verify menu is closed
      await expect(
        page.locator('[data-testid="slash-command-menu"]')
      ).not.toBeVisible()

      // Verify slash is removed
      await expect(editor).toHaveText('')
    })
  })

  test.describe('Plugin Integration', () => {
    test('should support plugin settings', async ({ page }) => {
      // Open settings
      await page.click('[data-testid="settings-button"]')
      await page.click('[data-testid="settings-editor"]')

      // Verify plugin settings
      await expect(
        page.locator('[data-testid="plugin-settings-marks"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="plugin-settings-blocks"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="plugin-settings-enhanced"]')
      ).toBeVisible()

      // Toggle a plugin
      await page.click('[data-testid="plugin-toggle-emoji"]')

      // Verify plugin is disabled
      const editor = page.locator('[data-testid="note-editor"] .slate-content')
      await editor.click()
      await page.keyboard.press('Control+Shift+e')

      // Emoji picker should not appear
      await expect(
        page.locator('[data-testid="emoji-picker"]')
      ).not.toBeVisible()
    })

    test('should handle plugin errors gracefully', async ({ page }) => {
      const editor = page.locator('[data-testid="note-editor"] .slate-content')

      await editor.click()

      // Simulate plugin error
      await page.evaluate(() => {
        window.dispatchEvent(
          new CustomEvent('plugin:error', {
            detail: { plugin: 'test-plugin', error: 'Plugin failed to load' },
          })
        )
      })

      // Verify error notification
      await expect(
        page.locator('[data-testid="plugin-error-notification"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="plugin-error-notification"]')
      ).toContainText('Plugin failed to load')

      // Editor should still be functional
      await editor.type('Editor still works')
      await expect(editor).toContainText('Editor still works')
    })
  })
})
