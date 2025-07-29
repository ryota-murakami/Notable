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
  // Navigate to notes page
  await page.goto('/notes')

  // Click new note button
  await page.click('[data-testid="new-note-button"]')

  // Fill in note details
  await page.fill('[data-testid="note-title"]', title)
  await page.fill('[data-testid="note-content"]', content)

  // Save note (assuming auto-save or save button)
  await page.waitForTimeout(1000)

  // Return mock note object
  return {
    id: `test-note-${Date.now()}`,
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
