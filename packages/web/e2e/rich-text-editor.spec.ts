import { expect, test } from '@playwright/test'

test.describe('Rich Text Editor', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app and ensure user is authenticated
    await page.goto('http://localhost:4378')

    // Wait for the page to load
    await page.waitForLoadState('networkidle')

    // Check if user is already authenticated or needs to sign in
    const signInButton = page.locator('text=Sign In')
    const isSignedIn = (await signInButton.count()) === 0

    if (!isSignedIn) {
      // Handle authentication - this might need to be adjusted based on your auth flow
      await signInButton.click()
      // Add authentication steps here if needed
      await page.waitForURL('**/app', { timeout: 10000 })
    }

    // Create a new note for testing
    const newNoteButton = page.locator(
      'button:has-text("New Note"), button[aria-label="New Note"], [data-testid="new-note-button"]'
    )
    if ((await newNoteButton.count()) > 0) {
      await newNoteButton.click()
    } else {
      // Alternative: use keyboard shortcut to create new note
      await page.keyboard.press('Meta+n')
    }

    // Wait for the editor to be ready
    await page.waitForSelector('input[placeholder="Untitled"]', {
      timeout: 5000,
    })
    await page.waitForSelector('[data-slate-editor="true"]', { timeout: 5000 })
  })

  test('should render title input and rich text editor', async ({ page }) => {
    // Check title input exists
    const titleInput = page.locator('input[placeholder="Untitled"]')
    await expect(titleInput).toBeVisible()

    // Check rich text editor exists
    const editor = page.locator('[data-slate-editor="true"]')
    await expect(editor).toBeVisible()

    // Check toolbar exists
    const toolbar = page.locator('.bg-background').first()
    await expect(toolbar).toBeVisible()
  })

  test('should allow entering and editing title', async ({ page }) => {
    const titleInput = page.locator('input[placeholder="Untitled"]')

    // Enter title
    await titleInput.fill('Test Note Title')
    await expect(titleInput).toHaveValue('Test Note Title')

    // Edit title
    await titleInput.selectText()
    await titleInput.fill('Updated Test Title')
    await expect(titleInput).toHaveValue('Updated Test Title')
  })

  test('should allow entering text in editor', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')

    // Click in editor and type
    await editor.click()
    await page.keyboard.type('This is a test paragraph.')

    // Verify text was entered
    await expect(editor).toContainText('This is a test paragraph.')
  })

  test('should apply bold formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const boldButton = page.locator('button:has-text("B")')

    // Click in editor and type
    await editor.click()
    await page.keyboard.type('This is ')

    // Apply bold formatting
    await boldButton.click()
    await page.keyboard.type('bold text')
    await boldButton.click() // Turn off bold
    await page.keyboard.type(' and regular text.')

    // Verify bold formatting
    const boldText = editor.locator('strong:has-text("bold text")')
    await expect(boldText).toBeVisible()

    // Verify regular text is not bold
    await expect(editor).toContainText('This is bold text and regular text.')
  })

  test('should apply italic formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const italicButton = page.locator('button:has-text("I")')

    await editor.click()
    await page.keyboard.type('This is ')

    // Apply italic formatting
    await italicButton.click()
    await page.keyboard.type('italic text')
    await italicButton.click() // Turn off italic
    await page.keyboard.type(' and regular text.')

    // Verify italic formatting
    const italicText = editor.locator('em:has-text("italic text")')
    await expect(italicText).toBeVisible()
  })

  test('should apply underline formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const underlineButton = page.locator('button:has-text("U")')

    await editor.click()
    await page.keyboard.type('This is ')

    // Apply underline formatting
    await underlineButton.click()
    await page.keyboard.type('underlined text')
    await underlineButton.click() // Turn off underline
    await page.keyboard.type(' and regular text.')

    // Verify underline formatting
    const underlineText = editor.locator('u:has-text("underlined text")')
    await expect(underlineText).toBeVisible()
  })

  test('should apply strikethrough formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const strikethroughButton = page.locator('button:has-text("S")')

    await editor.click()
    await page.keyboard.type('This is ')

    // Apply strikethrough formatting
    await strikethroughButton.click()
    await page.keyboard.type('struck text')
    await strikethroughButton.click() // Turn off strikethrough
    await page.keyboard.type(' and regular text.')

    // Verify strikethrough formatting
    const strikethroughText = editor.locator('s:has-text("struck text")')
    await expect(strikethroughText).toBeVisible()
  })

  test('should apply code formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const codeButton = page.locator('button:has-text("</>")')

    await editor.click()
    await page.keyboard.type('This is ')

    // Apply code formatting
    await codeButton.click()
    await page.keyboard.type('inline code')
    await codeButton.click() // Turn off code
    await page.keyboard.type(' and regular text.')

    // Verify code formatting
    const codeText = editor.locator('code:has-text("inline code")')
    await expect(codeText).toBeVisible()
  })

  test('should create heading 1', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const h1Button = page.locator('button:has-text("H1")')

    await editor.click()
    await h1Button.click()
    await page.keyboard.type('This is a heading 1')

    // Verify H1 element
    const h1Element = editor.locator('h1:has-text("This is a heading 1")')
    await expect(h1Element).toBeVisible()
  })

  test('should create heading 2', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const h2Button = page.locator('button:has-text("H2")')

    await editor.click()
    await h2Button.click()
    await page.keyboard.type('This is a heading 2')

    // Verify H2 element
    const h2Element = editor.locator('h2:has-text("This is a heading 2")')
    await expect(h2Element).toBeVisible()
  })

  test('should create heading 3', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const h3Button = page.locator('button:has-text("H3")')

    await editor.click()
    await h3Button.click()
    await page.keyboard.type('This is a heading 3')

    // Verify H3 element
    const h3Element = editor.locator('h3:has-text("This is a heading 3")')
    await expect(h3Element).toBeVisible()
  })

  test('should create blockquote', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const quoteButton = page.locator('button:has-text("Quote")')

    await editor.click()
    await quoteButton.click()
    await page.keyboard.type('This is a blockquote')

    // Verify blockquote element
    const blockquote = editor.locator(
      'blockquote:has-text("This is a blockquote")'
    )
    await expect(blockquote).toBeVisible()
  })

  test('should handle keyboard shortcuts for formatting', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')

    await editor.click()

    // Test bold shortcut (Cmd+B)
    await page.keyboard.type('Bold text: ')
    await page.keyboard.press('Meta+b')
    await page.keyboard.type('bold')
    await page.keyboard.press('Meta+b')
    await page.keyboard.type(' ')

    // Test italic shortcut (Cmd+I)
    await page.keyboard.type('Italic text: ')
    await page.keyboard.press('Meta+i')
    await page.keyboard.type('italic')
    await page.keyboard.press('Meta+i')
    await page.keyboard.type(' ')

    // Test underline shortcut (Cmd+U)
    await page.keyboard.type('Underline text: ')
    await page.keyboard.press('Meta+u')
    await page.keyboard.type('underlined')
    await page.keyboard.press('Meta+u')

    // Verify formatting was applied
    await expect(editor.locator('strong:has-text("bold")')).toBeVisible()
    await expect(editor.locator('em:has-text("italic")')).toBeVisible()
    await expect(editor.locator('u:has-text("underlined")')).toBeVisible()
  })

  test('should handle keyboard shortcuts for headings', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')

    await editor.click()

    // Test H1 shortcut (Cmd+Alt+1)
    await page.keyboard.press('Meta+Alt+1')
    await page.keyboard.type('Heading 1')
    await page.keyboard.press('Enter')

    // Test H2 shortcut (Cmd+Alt+2)
    await page.keyboard.press('Meta+Alt+2')
    await page.keyboard.type('Heading 2')
    await page.keyboard.press('Enter')

    // Test H3 shortcut (Cmd+Alt+3)
    await page.keyboard.press('Meta+Alt+3')
    await page.keyboard.type('Heading 3')

    // Verify heading elements
    await expect(editor.locator('h1:has-text("Heading 1")')).toBeVisible()
    await expect(editor.locator('h2:has-text("Heading 2")')).toBeVisible()
    await expect(editor.locator('h3:has-text("Heading 3")')).toBeVisible()
  })

  test('should auto-save content', async ({ page }) => {
    const titleInput = page.locator('input[placeholder="Untitled"]')
    const editor = page.locator('[data-slate-editor="true"]')

    // Enter title and content
    await titleInput.fill('Auto-save Test')
    await editor.click()
    await page.keyboard.type('This content should be auto-saved')

    // Wait for auto-save (assuming 1 second delay)
    await page.waitForTimeout(1500)

    // Refresh page and verify content persists
    await page.reload()
    await page.waitForLoadState('networkidle')

    // Check if content was saved (this might need adjustment based on your routing)
    await expect(page.locator('input[value="Auto-save Test"]')).toBeVisible({
      timeout: 10000,
    })
    await expect(
      page.locator(
        '[data-slate-editor="true"]:has-text("This content should be auto-saved")'
      )
    ).toBeVisible({ timeout: 10000 })
  })

  test('should handle multiple formatting on same text', async ({ page }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const boldButton = page.locator('button:has-text("B")')
    const italicButton = page.locator('button:has-text("I")')
    const underlineButton = page.locator('button:has-text("U")')

    await editor.click()
    await page.keyboard.type('This is ')

    // Apply multiple formatting
    await boldButton.click()
    await italicButton.click()
    await underlineButton.click()
    await page.keyboard.type('bold, italic, and underlined')

    // Turn off all formatting
    await boldButton.click()
    await italicButton.click()
    await underlineButton.click()
    await page.keyboard.type(' text.')

    // Verify all formatting is applied
    const formattedText = editor.locator(
      'strong em u:has-text("bold, italic, and underlined")'
    )
    await expect(formattedText).toBeVisible()
  })

  test('should maintain formatting when navigating between elements', async ({
    page,
  }) => {
    const editor = page.locator('[data-slate-editor="true"]')
    const h1Button = page.locator('button:has-text("H1")')
    const boldButton = page.locator('button:has-text("B")')

    await editor.click()

    // Create H1
    await h1Button.click()
    await page.keyboard.type('Main Title')
    await page.keyboard.press('Enter')

    // Create paragraph with bold text
    await boldButton.click()
    await page.keyboard.type('Bold paragraph text')

    // Verify both elements maintain their formatting
    await expect(editor.locator('h1:has-text("Main Title")')).toBeVisible()
    await expect(
      editor.locator('strong:has-text("Bold paragraph text")')
    ).toBeVisible()
  })
})
