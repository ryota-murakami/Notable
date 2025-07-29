import { test, expect } from '@playwright/test'

test.describe('Block Editor', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a page with the block editor
    await page.goto('/notes/new')
    await page.waitForSelector('[data-testid="block-editor"]', {
      timeout: 10000,
    })
  })

  test.describe('Basic Block Operations', () => {
    test('should create a new paragraph block', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Type content in the editor
      await editor.click()
      await editor.type('This is a new paragraph block')

      // Verify the content is present
      await expect(editor).toContainText('This is a new paragraph block')
    })

    test('should create heading blocks using slash commands', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Open slash command menu
      await editor.click()
      await editor.type('/')

      // Wait for slash command menu to appear
      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })

      // Select heading 1
      await page.click('text="Heading 1"')

      // Type heading content
      await editor.type('This is a heading')

      // Verify heading is created
      const heading = page.locator('h1:has-text("This is a heading")')
      await expect(heading).toBeVisible()
    })

    test('should create bulleted list using slash commands', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Bulleted list"')

      // Type list items
      await editor.type('First item')
      await editor.press('Enter')
      await editor.type('Second item')

      // Verify list structure
      const list = page.locator('ul')
      await expect(list).toBeVisible()

      const listItems = page.locator('li')
      await expect(listItems).toHaveCount(2)
      await expect(listItems.first()).toContainText('First item')
      await expect(listItems.last()).toContainText('Second item')
    })

    test('should create numbered list using slash commands', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Numbered list"')

      await editor.type('First numbered item')
      await editor.press('Enter')
      await editor.type('Second numbered item')

      const orderedList = page.locator('ol')
      await expect(orderedList).toBeVisible()

      const listItems = page.locator('ol li')
      await expect(listItems).toHaveCount(2)
    })
  })

  test.describe('Advanced Block Types', () => {
    test('should create todo blocks with checkboxes', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="To-do list"')

      await editor.type('First task')
      await editor.press('Enter')
      await editor.type('Second task')

      // Verify todo blocks are created
      const todoBlocks = page.locator('.todo-block')
      await expect(todoBlocks).toHaveCount(2)

      // Verify checkboxes are present
      const checkboxes = page.locator('.todo-checkbox')
      await expect(checkboxes).toHaveCount(2)

      // Click first checkbox to check it
      await checkboxes.first().click()

      // Verify the checkbox is checked
      await expect(checkboxes.first()).toHaveAttribute('aria-checked', 'true')
    })

    test('should create code blocks with syntax highlighting', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Code"')

      // Type code content
      await editor.type(
        'function hello() {\n  console.log("Hello, world!");\n}'
      )

      // Verify code block is created
      const codeBlock = page.locator('.code-block-container')
      await expect(codeBlock).toBeVisible()

      // Verify code content
      const codeContent = page.locator('pre code')
      await expect(codeContent).toContainText('function hello()')
    })

    test('should create callout blocks with different types', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Callout"')

      await editor.type('This is an important callout')

      // Verify callout block is created
      const calloutBlock = page.locator('.callout-block')
      await expect(calloutBlock).toBeVisible()
      await expect(calloutBlock).toContainText('This is an important callout')

      // Test changing callout type
      const typeSelector = page.locator('.callout-block select')
      await typeSelector.selectOption('warning')

      // Verify the callout type changed (visual styling would change)
      await expect(typeSelector).toHaveValue('warning')
    })

    test('should create toggle blocks with collapsible content', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Toggle list"')

      // Add toggle title
      const titleInput = page.locator('.toggle-block input')
      await titleInput.fill('Expandable Section')

      // Add content inside toggle
      const toggleContent = page.locator('.toggle-block .prose')
      await toggleContent.click()
      await toggleContent.type('This content can be hidden')

      // Test toggle functionality
      const toggleButton = page.locator('.toggle-block button[aria-expanded]')

      // Initially expanded
      await expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

      // Click to collapse
      await toggleButton.click()
      await expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

      // Content should be hidden
      await expect(toggleContent).not.toBeVisible()

      // Click to expand again
      await toggleButton.click()
      await expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
      await expect(toggleContent).toBeVisible()
    })
  })

  test.describe('Slash Command System', () => {
    test('should open slash command menu when typing /', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      // Verify slash command menu appears
      const slashMenu = page.locator('.slash-command-menu', { timeout: 5000 })
      await expect(slashMenu).toBeVisible()

      // Verify default commands are present
      await expect(page.locator('text="Text"')).toBeVisible()
      await expect(page.locator('text="Heading 1"')).toBeVisible()
      await expect(page.locator('text="Bulleted list"')).toBeVisible()
    })

    test('should filter commands based on search query', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })

      // Type search query
      const searchInput = page.locator('.slash-command-menu input')
      await searchInput.type('head')

      // Verify only heading commands are visible
      await expect(page.locator('text="Heading 1"')).toBeVisible()
      await expect(page.locator('text="Heading 2"')).toBeVisible()
      await expect(page.locator('text="Heading 3"')).toBeVisible()

      // Verify non-heading commands are not visible
      await expect(page.locator('text="Bulleted list"')).not.toBeVisible()
    })

    test('should close slash command menu on escape', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })

      // Press escape to close
      await editor.press('Escape')

      // Verify menu is closed
      await expect(page.locator('.slash-command-menu')).not.toBeVisible()
    })

    test('should navigate commands with arrow keys', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })

      // Navigate with arrow keys
      await editor.press('ArrowDown')
      await editor.press('ArrowDown')

      // Press enter to select
      await editor.press('Enter')

      // Verify a command was executed (menu should close)
      await expect(page.locator('.slash-command-menu')).not.toBeVisible()
    })
  })

  test.describe('Block Selection and Interaction', () => {
    test('should show hover states on blocks', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Create a block
      await editor.click()
      await editor.type('This is a test block')

      // Find the block element
      const blockElement = page.locator('[data-slate-node="element"]').first()

      // Hover over the block
      await blockElement.hover()

      // Verify hover state is applied
      await expect(blockElement).toHaveClass(/block-hover/)
    })

    test('should select blocks on click', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Create multiple blocks
      await editor.click()
      await editor.type('First block')
      await editor.press('Enter')
      await editor.type('Second block')

      // Click on first block
      const firstBlock = page.locator('[data-slate-node="element"]').first()
      await firstBlock.click()

      // Verify selection state
      await expect(firstBlock).toHaveClass(/block-selected/)
    })
  })

  test.describe('Keyboard Shortcuts', () => {
    test('should create new block with Cmd+Enter', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('First block')

      // Create new block with shortcut
      await editor.press('Meta+Enter')

      // Type in new block
      await editor.type('Second block')

      // Verify both blocks exist
      const blocks = page.locator('[data-slate-node="element"]')
      await expect(blocks).toHaveCount(2)
    })

    test('should apply text formatting shortcuts', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('This text will be bold')

      // Select all text
      await editor.press('Meta+a')

      // Apply bold formatting
      await editor.press('Meta+b')

      // Verify bold formatting is applied
      const boldText = page.locator('strong')
      await expect(boldText).toContainText('This text will be bold')
    })
  })

  test.describe('Content Persistence', () => {
    test('should save and restore editor content', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Create content
      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="Heading 1"')
      await editor.type('Test Heading')

      await editor.press('Enter')
      await editor.type('This is a paragraph with some content.')

      // Trigger save (this would depend on your save implementation)
      await editor.press('Meta+s')

      // Reload the page
      await page.reload()
      await page.waitForSelector('[data-testid="block-editor"]', {
        timeout: 10000,
      })

      // Verify content is restored
      await expect(page.locator('h1')).toContainText('Test Heading')
      await expect(page.locator('p')).toContainText(
        'This is a paragraph with some content.'
      )
    })
  })

  test.describe('Error Handling', () => {
    test('should handle invalid slash commands gracefully', async ({
      page,
    }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })

      // Type invalid command
      const searchInput = page.locator('.slash-command-menu input')
      await searchInput.type('invalidcommand')

      // Verify "no commands found" message
      await expect(page.locator('text="No commands found"')).toBeVisible()
    })

    test('should recover from editor errors', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      // Create some content
      await editor.click()
      await editor.type('Test content before error')

      // Simulate an error condition (this would depend on your implementation)
      // For now, just verify the editor remains functional
      await editor.press('Enter')
      await editor.type('Content after potential error')

      // Verify editor is still functional
      await expect(editor).toContainText('Test content before error')
      await expect(editor).toContainText('Content after potential error')
    })
  })

  test.describe('Accessibility', () => {
    test('should be keyboard navigable', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('First block')
      await editor.press('Enter')
      await editor.type('Second block')

      // Navigate between blocks using keyboard
      await editor.press('ArrowUp')
      await editor.press('ArrowDown')

      // Verify navigation works (cursor should be in second block)
      await editor.type(' - additional text')
      await expect(editor).toContainText('Second block - additional text')
    })

    test('should have proper ARIA labels', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()
      await editor.type('/')

      await page.waitForSelector('.slash-command-menu', { timeout: 5000 })
      await page.click('text="To-do list"')

      await editor.type('Task item')

      // Verify todo checkbox has proper ARIA attributes
      const checkbox = page.locator('.todo-checkbox')
      await expect(checkbox).toHaveAttribute('role', 'checkbox')
      await expect(checkbox).toHaveAttribute('aria-checked', 'false')
    })
  })

  test.describe('Performance', () => {
    test('should handle large documents efficiently', async ({ page }) => {
      const editor = page.locator('[data-testid="block-editor"]')

      await editor.click()

      // Create many blocks to test performance
      for (let i = 0; i < 50; i++) {
        await editor.type(`Block ${i + 1} with some content`)
        await editor.press('Enter')
      }

      // Verify all blocks are created
      const blocks = page.locator('[data-slate-node="element"]')
      await expect(blocks).toHaveCount(50)

      // Test that the editor is still responsive
      await editor.press('Meta+a') // Select all
      await expect(page.locator('.slate-selected')).toHaveCount(50)
    })
  })
})
