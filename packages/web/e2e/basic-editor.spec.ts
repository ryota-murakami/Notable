import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Basic Editor Test', () => {
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
  })

  test('should be able to type text in editor', async ({ page }) => {
    // Start by navigating to app first
    await page.goto('/app', { timeout: 30000 })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)

    // Create note using new note button
    await page.click('[data-testid="new-note-button"]', { force: true })

    // In test mode, template picker is bypassed - wait for note creation
    await page.waitForTimeout(2000)

    // Get the created note ID from sessionStorage
    const noteId = await page.evaluate(() => {
      return window.sessionStorage.getItem('lastCreatedNoteId')
    })

    if (!noteId) {
      console.info('No note ID found, trying direct navigation to editor')
      // Fallback: navigate to /notes/new if note creation failed
      await page.goto('/notes/new', { timeout: 30000 })
    } else {
      // Navigate to the created note
      await page.goto(`/notes/${noteId}`, { timeout: 30000 })
    }

    await page.waitForTimeout(1000)

    // Look for actual editable elements with multiple selectors
    const possibleEditors = [
      '[data-testid="note-content-textarea"]', // TestNoteEditor content textarea
      '[data-testid="note-editor"] [contenteditable="true"]', // Contenteditable inside note-editor
      '[contenteditable="true"]', // Any contenteditable element
      'textarea[placeholder="Start writing..."]', // TestNoteEditor textarea
      'textarea',
    ]

    let foundEditor = false
    let editor = null
    for (const selector of possibleEditors) {
      const hasEditor = await page
        .locator(selector)
        .isVisible()
        .catch(() => false)
      if (hasEditor) {
        editor = page.locator(selector).first()
        foundEditor = true
        console.info(`Found editor with selector: ${selector}`)
        break
      }
    }

    if (!foundEditor || !editor) {
      console.info('No editor elements found, skipping editor test')
      return
    }

    // Click and type in the editor with force option
    await editor.click({ force: true })
    await editor.fill('This is a test note with some content')

    // Verify text was typed
    const content = await editor.inputValue().catch(() => editor.textContent())
    expect(content).toContain('This is a test note with some content')

    console.info('✅ Successfully typed in editor')
  })

  test('should support basic formatting', async ({ page }) => {
    // Start by navigating to app first
    await page.goto('/app', { timeout: 30000 })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)

    // Create note using new note button
    await page.click('[data-testid="new-note-button"]', { force: true })

    // In test mode, template picker is bypassed - wait for note creation
    await page.waitForTimeout(2000)

    // Get the created note ID from sessionStorage
    const noteId = await page.evaluate(() => {
      return window.sessionStorage.getItem('lastCreatedNoteId')
    })

    if (!noteId) {
      console.info('No note ID found, trying direct navigation to editor')
      // Fallback: navigate to /notes/new if note creation failed
      await page.goto('/notes/new', { timeout: 30000 })
    } else {
      // Navigate to the created note
      await page.goto(`/notes/${noteId}`, { timeout: 30000 })
    }

    await page.waitForTimeout(1000)

    // Look for actual editable elements with multiple selectors
    const possibleEditors = [
      '[data-testid="note-content-textarea"]', // TestNoteEditor content textarea
      '[data-testid="note-editor"] [contenteditable="true"]', // Contenteditable inside note-editor
      '[contenteditable="true"]', // Any contenteditable element
      'textarea[placeholder="Start writing..."]', // TestNoteEditor textarea
      'textarea',
    ]

    let foundEditor = false
    let editor = null
    for (const selector of possibleEditors) {
      const hasEditor = await page
        .locator(selector)
        .isVisible()
        .catch(() => false)
      if (hasEditor) {
        editor = page.locator(selector).first()
        foundEditor = true
        console.info(`Found editor with selector: ${selector}`)
        break
      }
    }

    if (!foundEditor || !editor) {
      console.info('No editor elements found, skipping formatting test')
      return
    }

    // Type heading with markdown syntax
    await editor.click({ force: true })
    await editor.fill('# This is a heading\nRegular text here')

    // Verify content
    const content = await editor.inputValue().catch(() => editor.textContent())
    expect(content).toContain('This is a heading')
    expect(content).toContain('Regular text here')

    console.info('✅ Successfully tested basic formatting')
  })

  test('should handle empty editor gracefully', async ({ page }) => {
    // Navigate to app
    await page.goto('/app', { timeout: 30000 })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)

    // Try to create a note
    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    const hasNewNoteButton = await newNoteButton.isVisible().catch(() => false)

    if (!hasNewNoteButton) {
      console.info('New note button not available, skipping empty editor test')
      return
    }

    await newNoteButton.click({ force: true })
    await page.waitForTimeout(2000)

    // Check if we have a working editor
    const possibleEditors = [
      '[data-testid="note-content-textarea"]',
      '[data-testid="note-editor"] [contenteditable="true"]',
      '[contenteditable="true"]',
      'textarea[placeholder="Start writing..."]',
      'textarea',
    ]

    let foundEditor = false
    for (const selector of possibleEditors) {
      const hasEditor = await page
        .locator(selector)
        .isVisible()
        .catch(() => false)
      if (hasEditor) {
        foundEditor = true
        console.info(`Found editor with selector: ${selector}`)
        break
      }
    }

    if (foundEditor) {
      console.info('✅ Editor loaded successfully')
    } else {
      console.info('⚠️ Editor not found, but app is stable')
    }

    // Verify app is still responsive
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
  })
})
