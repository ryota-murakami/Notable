import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Editor Functionality Tests', () => {
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

    // Navigate directly to the app page
    await page.goto('/app', { timeout: 30000 })

    // Wait for the authenticated app to load
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    // Create a new note to access the editor
    await page.getByRole('button', { name: 'New Note' }).click()

    // Wait for navigation to note page
    await page.waitForURL(/\/notes\//, { timeout: 10000 })

    // Wait for editor to be ready
    await page.waitForTimeout(2000)
  })

  test.describe('Text Formatting', () => {
    test('should apply all text formats', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      // Type text
      await editor.click()
      await editor.type('Bold text')

      // Select text
      await editor.press('Control+a')

      // Apply bold
      await page.keyboard.press('Control+b')

      // Verify bold is applied
      await expect(page.locator('strong')).toContainText('Bold text')

      // Test italic
      await editor.press('Control+a')
      await page.keyboard.press('Control+i')
      await expect(page.locator('em')).toContainText('Bold text')

      // Test underline
      await editor.press('Control+a')
      await page.keyboard.press('Control+u')
      await expect(page.locator('u')).toContainText('Bold text')

      // Test strikethrough
      await editor.press('Control+a')
      await page.keyboard.press('Control+Shift+x')
      await expect(page.locator('s')).toContainText('Bold text')

      // Test code
      await editor.press('Control+a')
      await page.keyboard.press('Control+e')
      await expect(page.locator('code')).toContainText('Bold text')

      // Test superscript
      await editor.press('Control+a')
      await page.keyboard.press('Control+.')
      await expect(page.locator('sup')).toContainText('Bold text')

      // Test subscript
      await editor.press('Control+a')
      await page.keyboard.press('Control+,')
      await expect(page.locator('sub')).toContainText('Bold text')
    })

    test('should combine multiple formats', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('Combined formatting')

      // Select and apply multiple formats
      await editor.press('Control+a')
      await page.keyboard.press('Control+b')
      await page.keyboard.press('Control+i')

      // Verify both formats are applied
      const formattedText = page.locator('strong em, em strong')
      await expect(formattedText).toContainText('Combined formatting')
    })

    test('should toggle formats on and off', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('Toggle test')

      // Apply bold
      await editor.press('Control+a')
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toContainText('Toggle test')

      // Toggle bold off
      await page.keyboard.press('Control+b')
      await expect(page.locator('strong')).toHaveCount(0)
      await expect(editor).toContainText('Toggle test')
    })
  })

  test.describe('Headings', () => {
    test('should create all heading levels', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      // Test H1
      await editor.click()
      await editor.type('# Heading 1')
      await editor.press('Enter')
      await expect(page.locator('h1')).toContainText('Heading 1')

      // Test H2
      await editor.type('## Heading 2')
      await editor.press('Enter')
      await expect(page.locator('h2')).toContainText('Heading 2')

      // Test H3
      await editor.type('### Heading 3')
      await editor.press('Enter')
      await expect(page.locator('h3')).toContainText('Heading 3')

      // Test H4
      await editor.type('#### Heading 4')
      await editor.press('Enter')
      await expect(page.locator('h4')).toContainText('Heading 4')

      // Test H5
      await editor.type('##### Heading 5')
      await editor.press('Enter')
      await expect(page.locator('h5')).toContainText('Heading 5')

      // Test H6
      await editor.type('###### Heading 6')
      await editor.press('Enter')
      await expect(page.locator('h6')).toContainText('Heading 6')
    })

    test('should convert text to heading via toolbar', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('Convert to heading')
      await editor.press('Control+a')

      // Click heading dropdown in toolbar
      await page.click('[data-testid="heading-dropdown"]')
      await page.click('[data-testid="heading-1"]')

      await expect(page.locator('h1')).toContainText('Convert to heading')
    })
  })

  test.describe('Lists', () => {
    test('should create bullet list', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('- First item')
      await editor.press('Enter')
      await editor.type('Second item')
      await editor.press('Enter')
      await editor.type('Third item')

      await expect(page.locator('ul li')).toHaveCount(3)
    })

    test('should create numbered list', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('1. First item')
      await editor.press('Enter')
      await editor.type('Second item')
      await editor.press('Enter')
      await editor.type('Third item')

      await expect(page.locator('ol li')).toHaveCount(3)
    })

    test('should create task list', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('- [ ] Unchecked task')
      await editor.press('Enter')
      await editor.type('- [x] Checked task')

      const checkboxes = page.locator('input[type="checkbox"]')
      await expect(checkboxes).toHaveCount(2)
      await expect(checkboxes.first()).not.toBeChecked()
      await expect(checkboxes.last()).toBeChecked()
    })

    test('should indent and outdent lists', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('- Parent item')
      await editor.press('Enter')
      await editor.press('Tab')
      await editor.type('Child item')

      // Verify nested list structure
      await expect(page.locator('ul ul li')).toContainText('Child item')

      // Outdent
      await editor.press('Shift+Tab')
      await expect(page.locator('ul > li').last()).toContainText('Child item')
    })
  })

  test.describe('Links', () => {
    test('should create link from selection', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('Click here')
      await editor.press('Control+a')

      // Open link dialog
      await page.keyboard.press('Control+k')

      // Fill link URL
      await page.fill('[data-testid="link-url-input"]', 'https://example.com')
      await page.click('[data-testid="link-submit"]')

      // Verify link is created
      const link = page.locator('a[href="https://example.com"]')
      await expect(link).toContainText('Click here')
    })

    test('should edit existing link', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('[Example](https://example.com)')
      await editor.press('Enter')

      // Click on the link
      await page.click('a[href="https://example.com"]')

      // Edit link
      await page.keyboard.press('Control+k')
      await page.fill('[data-testid="link-url-input"]', 'https://newurl.com')
      await page.click('[data-testid="link-submit"]')

      // Verify link is updated
      const link = page.locator('a[href="https://newurl.com"]')
      await expect(link).toContainText('Example')
    })

    test('should remove link', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('[Example](https://example.com)')
      await editor.press('Enter')

      // Click on the link
      await page.click('a[href="https://example.com"]')

      // Remove link
      await page.keyboard.press('Control+Shift+k')

      // Verify link is removed
      await expect(page.locator('a')).toHaveCount(0)
      await expect(editor).toContainText('Example')
    })
  })

  test.describe('Blockquotes', () => {
    test('should create blockquote', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('> This is a quote')
      await editor.press('Enter')

      await expect(page.locator('blockquote')).toContainText('This is a quote')
    })

    test('should create nested blockquote', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('> Level 1')
      await editor.press('Enter')
      await editor.type('> > Level 2')

      await expect(page.locator('blockquote blockquote')).toContainText(
        'Level 2'
      )
    })
  })

  test.describe('Code Blocks', () => {
    test('should create code block', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('```')
      await editor.press('Enter')
      await editor.type('const hello = "world";')
      await editor.press('Enter')
      await editor.type('```')

      await expect(page.locator('pre code')).toContainText(
        'const hello = "world";'
      )
    })

    test('should create code block with language', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('```javascript')
      await editor.press('Enter')
      await editor.type('function greet() { return "Hello"; }')
      await editor.press('Enter')
      await editor.type('```')

      const codeBlock = page.locator('pre code')
      await expect(codeBlock).toContainText(
        'function greet() { return "Hello"; }'
      )
      await expect(codeBlock).toHaveAttribute('class', /language-javascript/)
    })
  })

  test.describe('Tables', () => {
    test('should create table', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Insert table via toolbar
      await page.click('[data-testid="table-button"]')
      await page.click('[data-testid="table-3x3"]')

      // Verify table structure
      await expect(page.locator('table')).toBeVisible()
      await expect(page.locator('tr')).toHaveCount(3)
      await expect(page.locator('td')).toHaveCount(9)
    })

    test('should add table rows and columns', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Insert table
      await page.click('[data-testid="table-button"]')
      await page.click('[data-testid="table-2x2"]')

      // Click in a cell
      await page.click('td:first-child')

      // Add row
      await page.click('[data-testid="add-row-below"]')
      await expect(page.locator('tr')).toHaveCount(3)

      // Add column
      await page.click('[data-testid="add-column-right"]')
      await expect(page.locator('tr:first-child td')).toHaveCount(3)
    })
  })

  test.describe('Media Embeds', () => {
    test('should embed images', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('![Alt text](https://example.com/image.jpg)')
      await editor.press('Enter')

      const image = page.locator('img[src="https://example.com/image.jpg"]')
      await expect(image).toBeVisible()
      await expect(image).toHaveAttribute('alt', 'Alt text')
    })

    test('should embed videos', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Insert video via toolbar
      await page.click('[data-testid="media-button"]')
      await page.click('[data-testid="embed-video"]')

      // Fill video URL
      await page.fill(
        '[data-testid="video-url-input"]',
        'https://youtube.com/watch?v=123'
      )
      await page.click('[data-testid="embed-submit"]')

      // Verify video embed
      await expect(page.locator('.video-embed')).toBeVisible()
    })
  })

  test.describe('Advanced Features', () => {
    test('should support mentions', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('@')

      // Wait for mention dropdown
      await page.waitForSelector('[data-testid="mention-dropdown"]')

      // Select a mention
      await page.click('[data-testid="mention-item"]:first-child')

      // Verify mention is inserted
      await expect(page.locator('.mention')).toBeVisible()
    })

    test('should support hashtags', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('#important')
      await editor.press('Space')

      // Verify hashtag is styled
      await expect(page.locator('.hashtag')).toContainText('#important')
    })

    test('should support keyboard shortcuts', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Test save shortcut
      await editor.type('Content to save')
      await page.keyboard.press('Control+s')

      // Verify save indicator appears
      await expect(page.locator('[data-testid="save-indicator"]')).toBeVisible()

      // Test undo/redo
      await editor.type(' More content')
      await page.keyboard.press('Control+z')
      await expect(editor).not.toContainText('More content')

      await page.keyboard.press('Control+Shift+z')
      await expect(editor).toContainText('More content')
    })
  })

  test.describe('Editor Toolbar', () => {
    test('should show formatting buttons', async ({ page }) => {
      // Verify all toolbar buttons are present
      await expect(page.locator('[data-testid="bold-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="italic-button"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="underline-button"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="strikethrough-button"]')
      ).toBeVisible()
      await expect(page.locator('[data-testid="code-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="link-button"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="heading-dropdown"]')
      ).toBeVisible()
      await expect(page.locator('[data-testid="list-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="quote-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="table-button"]')).toBeVisible()
      await expect(page.locator('[data-testid="media-button"]')).toBeVisible()
    })

    test('should toggle format via toolbar buttons', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('Toolbar test')
      await editor.press('Control+a')

      // Click bold button
      await page.click('[data-testid="bold-button"]')
      await expect(page.locator('strong')).toContainText('Toolbar test')

      // Click italic button
      await page.click('[data-testid="italic-button"]')
      await expect(page.locator('em')).toContainText('Toolbar test')
    })

    test('should show active format states', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()
      await editor.type('**Bold text**')

      // Click inside bold text
      await page.click('strong')

      // Verify bold button is active
      await expect(page.locator('[data-testid="bold-button"]')).toHaveClass(
        /active/
      )
    })
  })

  test.describe('Copy/Paste', () => {
    test('should paste plain text', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Copy text to clipboard
      await page.evaluate(() => {
        navigator.clipboard.writeText('Pasted text')
      })

      // Paste
      await page.keyboard.press('Control+v')

      await expect(editor).toContainText('Pasted text')
    })

    test('should paste formatted text', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Copy HTML to clipboard
      await page.evaluate(() => {
        const html = '<strong>Bold</strong> and <em>italic</em> text'
        const blob = new Blob([html], { type: 'text/html' })
        // eslint-disable-next-line no-undef
        const data = new DataTransfer()
        data.items.add(
          new File([blob], 'clipboard.html', { type: 'text/html' })
        )
        navigator.clipboard.write([
          // eslint-disable-next-line no-undef
          new ClipboardItem({
            'text/html': blob,
          }),
        ])
      })

      // Paste
      await page.keyboard.press('Control+v')

      await expect(page.locator('strong')).toContainText('Bold')
      await expect(page.locator('em')).toContainText('italic')
    })
  })

  test.describe('Performance', () => {
    test('should handle large documents', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Type a large amount of content
      const content = 'Lorem ipsum dolor sit amet. '.repeat(100)
      await editor.type(content)

      // Verify content is rendered
      await expect(editor).toContainText('Lorem ipsum')

      // Test that editor is still responsive
      await editor.press('Control+a')
      await page.keyboard.press('Control+b')

      await expect(page.locator('strong')).toBeVisible()
    })

    test('should handle rapid typing', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      await editor.click()

      // Type rapidly
      const text = 'abcdefghijklmnopqrstuvwxyz'
      for (const char of text) {
        await page.keyboard.type(char)
      }

      // Verify all characters are typed
      await expect(editor).toContainText(text)
    })
  })

  test.describe('Accessibility', () => {
    test('should have proper ARIA labels', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      // Verify editor has proper role
      await expect(editor).toHaveAttribute('role', 'textbox')
      await expect(editor).toHaveAttribute('aria-multiline', 'true')

      // Verify toolbar buttons have labels
      await expect(page.locator('[data-testid="bold-button"]')).toHaveAttribute(
        'aria-label',
        'Bold'
      )
      await expect(
        page.locator('[data-testid="italic-button"]')
      ).toHaveAttribute('aria-label', 'Italic')
    })

    test('should be keyboard navigable', async ({ page }) => {
      const editor = page.locator('.slate-content').first()

      // Tab to toolbar
      await page.keyboard.press('Tab')
      await expect(page.locator('[data-testid="bold-button"]')).toBeFocused()

      // Navigate toolbar with arrow keys
      await page.keyboard.press('ArrowRight')
      await expect(page.locator('[data-testid="italic-button"]')).toBeFocused()

      // Tab to editor
      await page.keyboard.press('Tab')
      await expect(editor).toBeFocused()
    })
  })
})
