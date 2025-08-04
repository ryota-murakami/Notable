import { expect, type Page } from '@playwright/test'

/**
 * Helper function to create a new note, handling the template picker dialog
 * @param page - Playwright page object
 * @param noteTitle - Optional title for the note
 * @param noteContent - Optional content for the note
 * @returns The note ID from the URL
 */
export async function createNewNote(
  page: Page,
  noteTitle?: string,
  noteContent?: string
): Promise<string> {
  // Click new note button - the button is visible but let's wait for it first
  await page.waitForSelector('[data-testid="new-note-button"]', {
    timeout: 5000,
  })
  await page.click('[data-testid="new-note-button"]')

  // Add small wait for any JS to process
  await page.waitForTimeout(500)

  // Handle template picker dialog
  try {
    // Wait for dialog to appear (short timeout)
    const dialogSelector = page
      .locator('[role="dialog"]')
      .filter({ hasText: 'Choose a Template' })
    await dialogSelector.waitFor({ timeout: 2000, state: 'visible' })

    // Click Blank Note button
    await page.click('button:has-text("Blank Note")')
  } catch {
    // Template picker didn't appear, which is fine
    // This can happen if the app is configured to skip it
  }

  // Check current URL before waiting for navigation
  const currentUrl = page.url()
  console.log('Current URL after clicking new note:', currentUrl)

  // Wait for navigation to note page
  await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 5000 })

  // Extract note ID from URL
  const url = page.url()
  const noteId = url.match(/\/notes\/([a-z0-9-]+)/)?.[1] || ''

  // Wait for the editor to be ready
  await page.waitForSelector('[data-testid="note-title-input"]', {
    timeout: 5000,
  })

  // Fill in title if provided
  if (noteTitle) {
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.clear()
    await titleInput.fill(noteTitle)
  }

  // Fill in content if provided
  if (noteContent) {
    const editor = page.locator('[data-testid="note-content-textarea"]')
    await editor.click()
    await editor.clear()
    await editor.type(noteContent)
  }

  // Wait for auto-save
  await page.waitForTimeout(1000)

  return noteId
}

/**
 * Helper function to navigate directly to a note by ID
 * @param page - Playwright page object
 * @param noteId - The note ID
 */
export async function navigateToNote(page: Page, noteId: string) {
  await page.goto(`http://localhost:4378/notes/${noteId}`)
  await page.waitForSelector('[data-testid="note-title-input"]', {
    timeout: 5000,
  })
}

/**
 * Helper function to create a note with rich content
 * @param page - Playwright page object
 * @param title - Note title
 * @param content - Array of content blocks
 */
export async function createRichNote(
  page: Page,
  title: string,
  content: Array<{ type: string; text: string }>
): Promise<string> {
  const noteId = await createNewNote(page, title)

  const editor = page.locator('[data-testid="note-content-textarea"]')
  await editor.click()
  await editor.clear()

  for (const block of content) {
    switch (block.type) {
      case 'heading1':
        await editor.type(`# ${block.text}`)
        await editor.press('Enter')
        break
      case 'heading2':
        await editor.type(`## ${block.text}`)
        await editor.press('Enter')
        break
      case 'paragraph':
        await editor.type(block.text)
        await editor.press('Enter')
        break
      case 'bold':
        await editor.type(`**${block.text}**`)
        break
      case 'italic':
        await editor.type(`*${block.text}*`)
        break
      case 'code':
        await editor.type(`\`\`\`\n${block.text}\n\`\`\``)
        await editor.press('Enter')
        break
      case 'list':
        await editor.type(`- ${block.text}`)
        await editor.press('Enter')
        break
    }
  }

  // Wait for auto-save
  await page.waitForTimeout(1000)

  return noteId
}

/**
 * Helper to add tags to a note
 * @param page - Playwright page object
 * @param tags - Array of tag names
 */
export async function addTagsToNote(page: Page, tags: string[]) {
  for (const tag of tags) {
    const tagInput = page.locator('[placeholder*="tag"]').first()
    await tagInput.click()
    await tagInput.type(tag)
    await tagInput.press('Enter')
    await page.waitForTimeout(200) // Small wait between tags
  }

  // Wait for tags to be saved
  await page.waitForTimeout(1000)
}
