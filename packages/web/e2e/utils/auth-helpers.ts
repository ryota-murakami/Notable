import { type Page } from '@playwright/test'
import { waitForHydration } from './wait-for-hydration'

/**
 * Centralized authentication bypass setup for E2E tests
 * This replaces all inline setupAuth functions across test files
 */
export async function authBypassSetup(page: Page): Promise<void> {
  // Set dev auth bypass cookie for testing
  await page.context().addCookies([
    {
      name: 'dev-auth-bypass',
      value: 'true',
      domain: 'localhost',
      path: '/',
    },
  ])
}

/**
 * Complete authentication setup with navigation and verification
 * Use this when you need to both authenticate and navigate to the app
 */
export async function setupAuthAndNavigateToApp(page: Page): Promise<void> {
  await authBypassSetup(page)

  // Navigate to the app
  await page.goto('/app', { waitUntil: 'networkidle' })

  // Wait for app shell to be visible - with flexible timeout
  await page.waitForSelector('[data-testid="app-shell"]', {
    state: 'visible',
    timeout: 30000,
  })

  // Wait for React hydration after navigation
  await waitForHydration(page)
}

/**
 * Create a new note with proper handling of template picker bypass
 * This handles the test mode where template picker is bypassed
 */
export async function createNewNote(page: Page): Promise<string | null> {
  // Click the new note button
  const newNoteButton = page.locator('[data-testid="new-note-button"]')
  await newNoteButton.waitFor({ state: 'visible', timeout: 10000 })
  await newNoteButton.click()

  // In test mode, template picker might be bypassed
  // Try to wait for template picker, but don't fail if it doesn't appear
  try {
    await page.waitForSelector(
      '[role="dialog"]:has-text("Choose a Template")',
      {
        timeout: 3000,
      }
    )

    // Template picker appeared - click Blank Note
    const blankNoteButton = page.locator('button:has-text("Blank Note")')
    await blankNoteButton.click()
  } catch {
    // Template picker is bypassed in test mode, continue
    console.info('Template picker bypassed in test mode')
  }

  // Wait for navigation to note page
  try {
    await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 10000 })
  } catch {
    console.warn("Note navigation timeout - checking if we're on a note page")
  }

  // Extract note ID from URL if we successfully navigated
  const currentUrl = page.url()
  const match = currentUrl.match(/\/notes\/([a-z0-9-]+)/)
  return match ? match[1] : null
}

/**
 * Find and interact with the note editor
 * This handles various editor implementations and selectors
 */
export async function findNoteEditor(page: Page) {
  // Try multiple selectors for the editor in order of preference
  const editorSelectors = [
    '[data-testid="note-editor"] [contenteditable="true"]',
    '[contenteditable="true"]',
    '.rich-text-editor [contenteditable="true"]',
    'div[contenteditable="true"]',
    'textarea[data-testid="note-content-textarea"]',
    'textarea.note-content',
  ]

  for (const selector of editorSelectors) {
    const editor = page.locator(selector).first()
    const isVisible = await editor.isVisible().catch(() => false)

    if (isVisible) {
      return editor
    }
  }

  throw new Error('Could not find note editor with any known selector')
}

/**
 * Find and interact with the note title input
 * This handles various title input implementations
 */
export async function findNoteTitleInput(page: Page) {
  // Try multiple selectors for the title input
  const titleSelectors = [
    '[data-testid="note-title-input"]',
    'input[placeholder="Untitled"]',
    'input[placeholder*="title" i]',
    'input.note-title',
    'h1[contenteditable="true"]',
    'div[contenteditable="true"][data-placeholder*="title" i]',
  ]

  for (const selector of titleSelectors) {
    const titleInput = page.locator(selector).first()
    const isVisible = await titleInput.isVisible().catch(() => false)

    if (isVisible) {
      return titleInput
    }
  }

  throw new Error('Could not find note title input with any known selector')
}

/**
 * Type text in an element with retries and proper event handling
 * This replaces any remaining jsType usage
 */
export async function typeInElement(
  page: Page,
  element: any,
  text: string,
  options: { clear?: boolean } = {}
): Promise<void> {
  if (options.clear) {
    await element.click()
    await page.keyboard.press('Meta+a') // Select all
    await page.keyboard.press('Backspace') // Clear
  }

  await element.click()
  await element.fill(text)

  // Trigger events for React
  await element.dispatchEvent('input')
  await element.dispatchEvent('change')
}

/**
 * Wait for an element to be ready for interaction
 * This provides a consistent way to wait for elements across tests
 */
export async function waitForElement(
  page: Page,
  selector: string,
  options: {
    timeout?: number
    state?: 'visible' | 'attached' | 'detached' | 'hidden'
  } = {}
) {
  const { timeout = 10000, state = 'visible' } = options

  const element = page.locator(selector)
  await element.waitFor({ state, timeout })
  return element
}

/**
 * Gracefully check if an element exists without throwing errors
 * Use this for optional UI elements that might not be present
 */
export async function checkElementExists(
  page: Page,
  selector: string,
  timeout: number = 2000
): Promise<boolean> {
  try {
    await page.waitForSelector(selector, { timeout })
    return true
  } catch {
    return false
  }
}
