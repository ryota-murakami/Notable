import { Page } from '@playwright/test'

/**
 * Click an element using JavaScript evaluation
 * This bypasses Playwright's actionability checks and works around timeout issues
 */
export async function jsClick(page: Page, selector: string): Promise<void> {
  await page.evaluate((sel) => {
    const element = document.querySelector(sel)
    if (element instanceof HTMLElement) {
      element.click()
    } else {
      throw new Error(`Element not found: ${sel}`)
    }
  }, selector)
}

/**
 * Check if an element is clickable (not covered by other elements)
 */
export async function isElementClickable(page: Page, selector: string) {
  return await page.evaluate((sel) => {
    const element = document.querySelector(sel)
    if (!element) return { clickable: false, reason: 'Element not found' }

    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const elementAtPoint = document.elementFromPoint(centerX, centerY)

    const isClickable =
      element.contains(elementAtPoint) || element === elementAtPoint

    return {
      clickable: isClickable,
      elementInfo: {
        tagName: element.tagName,
        disabled: (element as any).disabled,
        visible: rect.width > 0 && rect.height > 0,
        position: { x: centerX, y: centerY },
      },
      elementAtPoint: elementAtPoint
        ? {
            tagName: elementAtPoint.tagName,
            className: elementAtPoint.className,
            id: elementAtPoint.id,
          }
        : null,
    }
  }, selector)
}

/**
 * Type text into an input field with proper waiting and validation
 * This bypasses Playwright's fill timeout issues by ensuring input is ready
 */
export async function jsType(
  page: Page,
  selector: string,
  text: string
): Promise<void> {
  // Wait for input to be visible and enabled
  const input = page.locator(selector)
  await input.waitFor({ state: 'visible', timeout: 10000 })
  await input.waitFor({ state: 'attached', timeout: 5000 })

  // Retry logic with multiple attempts
  let attempts = 0
  const maxAttempts = 5

  while (attempts < maxAttempts) {
    attempts++

    // Check if input is ready for typing
    const isReady = await page.evaluate((sel) => {
      const element = document.querySelector(sel) as
        | HTMLInputElement
        | HTMLTextAreaElement
      if (!element) return false

      return !element.disabled && !element.readOnly && element.isConnected
    }, selector)

    if (!isReady) {
      await page.waitForTimeout(200)
      continue
    }

    // Special handling for clearing input (empty string)
    if (text === '') {
      await page.evaluate((sel) => {
        const element = document.querySelector(sel) as
          | HTMLInputElement
          | HTMLTextAreaElement
        if (element) {
          element.focus()
          element.select() // Select all text first

          // Clear using multiple methods
          element.value = ''

          // Dispatch events to notify React of the change
          element.dispatchEvent(new Event('input', { bubbles: true }))
          element.dispatchEvent(new Event('change', { bubbles: true }))
          element.blur()
        }
      }, selector)

      // Verify clearing worked
      await page.waitForTimeout(100)
      const finalValue = await input.inputValue()
      if (finalValue === '') {
        return // Success!
      }
    } else {
      // Clear existing value and set new text using JavaScript with React event simulation
      await page.evaluate(
        ([sel, value]) => {
          const element = document.querySelector(sel) as
            | HTMLInputElement
            | HTMLTextAreaElement
          if (element) {
            // Focus the element
            element.focus()

            // For clearing (empty string), use more aggressive approach
            if (value === '') {
              // Select all text first
              element.select()
              element.setSelectionRange(0, element.value.length)

              // Dispatch events for deletion
              element.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Delete', bubbles: true })
              )
              element.dispatchEvent(
                new KeyboardEvent('keyup', { key: 'Delete', bubbles: true })
              )
            }

            // Clear existing value
            element.value = ''

            // Set new value using React's way
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              'value'
            )?.set

            if (nativeInputValueSetter && element instanceof HTMLInputElement) {
              nativeInputValueSetter.call(element, value)
            } else {
              element.value = value
            }

            // Dispatch comprehensive events for React
            element.dispatchEvent(new Event('focus', { bubbles: true }))
            element.dispatchEvent(new Event('input', { bubbles: true }))
            element.dispatchEvent(new Event('change', { bubbles: true }))
            element.dispatchEvent(new Event('blur', { bubbles: true }))
          }
        },
        [selector, text]
      )

      // Wait a bit for React to process
      await page.waitForTimeout(100)

      // Verify the value was set
      const finalValue = await input.inputValue()
      if (finalValue === text) {
        return // Success!
      }
    }

    console.warn(
      `jsType attempt ${attempts}: Expected "${text}" but got "${await input.inputValue()}" for ${selector}`
    )

    if (attempts < maxAttempts) {
      await page.waitForTimeout(300)
    }
  }

  throw new Error(
    `jsType failed after ${maxAttempts} attempts: Could not set "${text}" in ${selector}`
  )
}

/**
 * Wait for an input to be ready for interaction
 */
export async function waitForInputReady(
  page: Page,
  selector: string,
  timeout: number = 10000
): Promise<void> {
  const startTime = Date.now()

  while (Date.now() - startTime < timeout) {
    const isReady = await page.evaluate((sel) => {
      const element = document.querySelector(sel) as
        | HTMLInputElement
        | HTMLTextAreaElement
      if (!element) return false

      const rect = element.getBoundingClientRect()
      const isVisible = rect.width > 0 && rect.height > 0
      const isEditable = !element.disabled && !element.readOnly
      const isConnected = element.isConnected

      return isVisible && isEditable && isConnected
    }, selector)

    if (isReady) return

    await page.waitForTimeout(100)
  }

  throw new Error(`Input ${selector} not ready within ${timeout}ms`)
}

/**
 * Debug function to check what elements are present on the page
 */
async function debugPageElements(
  page: Page,
  description: string
): Promise<void> {
  console.log(`\n=== DEBUG: ${description} ===`)

  // Check if we're on the expected page
  const url = page.url()
  console.log(`Current URL: ${url}`)

  // Check for key elements
  const elementsToCheck = [
    '[data-testid="app-shell"]',
    '[data-testid="note-editor-container"]',
    '[data-testid="note-editor"]',
    '[placeholder="Untitled"]',
    'input[placeholder="Untitled"]',
    '[contenteditable="true"]',
    '.rich-text-editor',
    '.note-title-input',
    'main',
    'text="Loading note..."',
    'text="Note not found"',
  ]

  for (const selector of elementsToCheck) {
    const count = await page.locator(selector).count()
    const visible =
      count > 0
        ? await page
            .locator(selector)
            .first()
            .isVisible()
            .catch(() => false)
        : false
    console.log(`${selector}: ${count} found, first visible: ${visible}`)
  }

  // Get page title and basic info
  const title = await page.title()
  console.log(`Page title: ${title}`)

  // Get main content to see what's actually rendered
  const mainContent = await page
    .locator('main')
    .textContent()
    .catch(() => 'Could not get main content')
  console.log(`Main content: "${mainContent}"`)

  console.log('=== END DEBUG ===\n')
}

/**
 * Type text into a title input field with extended waiting
 * Specifically for note title inputs that may take longer to load
 */
export async function jsTypeTitle(
  page: Page,
  selector: string,
  text: string
): Promise<void> {
  // Wait longer for title inputs as they may load after navigation
  const input = page.locator(selector)

  // Wait for the page to be stable first
  await page.waitForLoadState('networkidle', { timeout: 15000 })

  // Debug what's on the page before trying to find the input
  await debugPageElements(page, `Before trying to find ${selector}`)

  // Wait for the input to appear and be ready
  try {
    await input.waitFor({ state: 'visible', timeout: 15000 })
    await input.waitFor({ state: 'attached', timeout: 10000 })

    // Wait a bit more for React hydration
    await page.waitForTimeout(1000)

    // Use jsType with the extended timeout
    await jsType(page, selector, text)
  } catch (error) {
    // If we can't find the expected selector, debug and try alternatives
    console.error(`Failed to find ${selector}:`, error)
    await debugPageElements(page, `After failing to find ${selector}`)

    // Try alternative selectors
    const alternatives = [
      'input[placeholder*="title"]',
      'input[placeholder*="Untitled"]',
      'input.note-title',
      '[data-testid="note-title-input"]',
      'input[type="text"]',
    ]

    for (const alt of alternatives) {
      const count = await page.locator(alt).count()
      if (count > 0) {
        console.log(`Found alternative selector: ${alt} (${count} elements)`)
        try {
          await jsType(page, alt, text)
          return
        } catch (altError) {
          console.log(`Alternative ${alt} also failed:`, altError)
        }
      }
    }

    throw error
  }
}

/**
 * Fill content in test note editor textarea
 */
export async function jsTypeContent(page: Page, text: string): Promise<void> {
  const selector = '[data-testid="note-content-textarea"]'
  const textarea = page.locator(selector)

  await textarea.waitFor({ state: 'visible', timeout: 10000 })
  await textarea.click()
  await jsType(page, selector, text)
}
