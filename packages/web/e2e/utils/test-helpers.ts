import { type Page } from '@playwright/test'

export async function loginAsTestUser(page: Page) {
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

  // Wait for app shell to be visible
  await page.waitForSelector('[data-testid="app-shell"]', {
    state: 'visible',
    timeout: 10000,
  })
}

export async function createTestNote(
  page: Page,
  title: string,
  content: string
): Promise<{ id: string; title: string; content: string }> {
  // Click new note button
  await page.click('[data-testid="new-note-button"]')

  // Handle template picker
  await page.waitForSelector('[role="dialog"]:has-text("Choose a Template")')
  await page.click('button:has-text("Blank Note")')

  // Wait for navigation to note editor
  await page.waitForURL(/\/notes\/[a-z0-9-]+/)

  // Wait for editor to be ready
  await page.waitForTimeout(2000)

  // Fill in title
  const titleInput = page.locator('[data-testid="note-title-input"]')
  await titleInput.fill(title)

  // Fill in content in the rich text editor
  const editor = page.locator('[data-testid="note-content-textarea"]')
  await editor.click()
  await editor.type(content)

  // Save note (assuming auto-save or save button)
  await page.waitForTimeout(1000)

  // Extract the note ID from the URL
  const url = page.url()
  const match = url.match(/\/notes\/([a-z0-9-]+)/)
  const id = match ? match[1] : `test-note-${Date.now()}`

  // Return note object
  return {
    id,
    title,
    content,
  }
}

export async function cleanupTestData(page: Page) {
  // Clean up test data after tests
  await page.evaluate(() => {
    // Clear any test data from local storage or send cleanup request
    localStorage.clear()
  })
}
