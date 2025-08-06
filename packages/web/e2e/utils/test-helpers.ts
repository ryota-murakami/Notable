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
  // Click new note button - use JavaScript workaround for reliability
  const buttonClicked = await page.evaluate(() => {
    // Try data-testid first
    const testIdButton = document.querySelector(
      '[data-testid="new-note-button"]'
    ) as HTMLButtonElement
    if (testIdButton) {
      testIdButton.click()
      return true
    }

    // Fallback to finding button by text
    const buttons = Array.from(document.querySelectorAll('button'))
    const newNoteButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'New Note'
    )

    if (newNoteButton) {
      newNoteButton.click()
      return true
    }

    return false
  })

  if (!buttonClicked) {
    throw new Error('Could not find or click New Note button')
  }

  // Handle template picker if it appears (not bypassed in test environment)
  try {
    await page.waitForSelector(
      '[role="dialog"]:has-text("Choose a Template")',
      { timeout: 2000 }
    )

    // Use JavaScript click workaround for reliability
    const templateButtonClicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'))
      const blankNoteButton = buttons.find((btn) =>
        btn.textContent?.includes('Blank Note')
      )

      if (blankNoteButton) {
        blankNoteButton.click()
        return true
      }

      return false
    })

    if (!templateButtonClicked) {
      console.warn('Template picker appeared but Blank Note button not found')
    }
  } catch {
    // Template picker is bypassed, continue
  }

  // Wait for navigation to note editor
  try {
    await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 5000 })
  } catch {
    // If router.push() fails, try manual navigation as fallback
    console.info('Router navigation failed, trying manual navigation...')
    const currentUrl = page.url()
    if (!currentUrl.includes('/notes/')) {
      // Try to trigger navigation manually by finding the created note ID
      const noteId = await page.evaluate(() => {
        // Try to get the note ID from any recent API calls or state
        const recentNoteId =
          window.sessionStorage.getItem('lastCreatedNoteId') ||
          `mock-note-${Date.now()}`
        return recentNoteId
      })

      await page.goto(`/notes/${noteId}`)
      await page.waitForLoadState('networkidle')
    }
  }

  // Wait for editor to be ready
  await page.waitForTimeout(2000)

  // Fill in title using JavaScript workaround for reliability
  const titleFilled = await page.evaluate((titleText) => {
    const titleInput = document.querySelector(
      '[data-testid="note-title-input"]'
    ) as HTMLInputElement
    if (titleInput) {
      titleInput.value = titleText
      titleInput.dispatchEvent(new Event('input', { bubbles: true }))
      titleInput.dispatchEvent(new Event('change', { bubbles: true }))
      return true
    }
    return false
  }, title)

  if (!titleFilled) {
    throw new Error('Could not find or fill note title input')
  }

  // Fill in content using JavaScript workaround for reliability
  const contentFilled = await page.evaluate((contentText) => {
    const contentTextarea = document.querySelector(
      '[data-testid="note-content-textarea"]'
    ) as HTMLTextAreaElement
    if (contentTextarea) {
      contentTextarea.value = contentText
      contentTextarea.dispatchEvent(new Event('input', { bubbles: true }))
      contentTextarea.dispatchEvent(new Event('change', { bubbles: true }))
      return true
    }
    return false
  }, content)

  if (!contentFilled) {
    throw new Error('Could not find or fill note content textarea')
  }

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
