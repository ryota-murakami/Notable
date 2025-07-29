import { type Page } from '@playwright/test'

export async function loginAsTestUser(page: Page) {
  // Mock authentication for tests
  await page.goto('/auth/mock-login')
  // Implementation will depend on your auth system
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
