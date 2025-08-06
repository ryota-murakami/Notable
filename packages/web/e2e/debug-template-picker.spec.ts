import { expect, test } from '@playwright/test'

test('debug template picker navigation', async ({ page }) => {
  // Capture console messages from the browser
  page.on('console', (msg) => {
    console.info(`[BROWSER] ${msg.type()}: ${msg.text()}`)
  })

  // Capture page errors
  page.on('pageerror', (error) => {
    console.info(
      `[PAGE ERROR] ${error instanceof Error ? error.message : String(error)}`
    )
  })

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
  await page.goto('http://localhost:4378/app')
  await page.waitForLoadState('networkidle')

  console.info('🚀 Starting template picker debugging...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.info('✅ App shell loaded')

  // Take screenshot before clicking
  await page.screenshot({ path: 'debug-before-click.png', fullPage: true })
  console.info('📸 Screenshot taken before clicking New Note')

  // Click new note button using JavaScript workaround
  const buttonClicked = await page.evaluate(() => {
    // Try data-testid first
    const testIdButton = document.querySelector(
      '[data-testid="new-note-button"]'
    ) as HTMLButtonElement
    if (testIdButton) {
      console.info('Found New Note button by test-id')
      testIdButton.click()
      return true
    }

    // Fallback to finding button by text
    const buttons = Array.from(document.querySelectorAll('button'))
    const newNoteButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'New Note'
    )

    if (newNoteButton) {
      console.info('Found New Note button by text')
      newNoteButton.click()
      return true
    }

    console.info('❌ New Note button not found')
    return false
  })

  if (!buttonClicked) {
    throw new Error('Could not find or click New Note button')
  }

  console.info('✅ New Note button clicked')

  // Wait a moment for any UI changes
  await page.waitForTimeout(1000)

  // Take screenshot after clicking
  await page.screenshot({ path: 'debug-after-click.png', fullPage: true })
  console.info('📸 Screenshot taken after clicking New Note')

  // Check if template picker dialog appears
  console.info('🔍 Checking for template picker dialog...')

  try {
    // Wait for template picker with shorter timeout
    const templatePicker = page.locator(
      '[role="dialog"]:has-text("Choose a Template")'
    )
    await templatePicker.waitFor({ state: 'visible', timeout: 3000 })
    console.info('✅ Template picker dialog found!')

    // Take screenshot of template picker
    await page.screenshot({ path: 'debug-template-picker.png', fullPage: true })
    console.info('📸 Template picker screenshot taken')

    // Check what buttons are available in the template picker
    const templateButtons = await page
      .locator('[role="dialog"] button')
      .allTextContents()
    console.info('Available template buttons:', templateButtons)

    // Try to click Blank Note using JavaScript
    const templateButtonClicked = await page.evaluate(() => {
      const buttons = Array.from(
        document.querySelectorAll('[role="dialog"] button')
      )
      console.info(
        'Buttons in template picker:',
        buttons.map((b) => b.textContent)
      )

      const blankNoteButton = buttons.find((btn) =>
        btn.textContent?.includes('Blank Note')
      )

      if (blankNoteButton) {
        console.info('Clicking Blank Note button')
        ;(blankNoteButton as HTMLElement).click()
        return true
      }

      console.info('❌ Blank Note button not found in template picker')
      return false
    })

    if (templateButtonClicked) {
      console.info('✅ Blank Note button clicked')
    } else {
      console.info('❌ Failed to click Blank Note button')
    }
  } catch (error) {
    console.info(
      '❌ Template picker dialog not found:',
      error instanceof Error ? error.message : String(error)
    )

    // Check what's actually on screen
    const currentUrl = page.url()
    console.info('Current URL:', currentUrl)

    // Check if we're already on a note page
    if (currentUrl.includes('/notes/')) {
      console.info('🎉 Already navigated to note page!')
    } else {
      console.info('❌ Still on welcome page, checking for any dialogs...')

      // Check for any dialogs that might be present
      const dialogs = await page.locator('[role="dialog"]').count()
      console.info(`Found ${dialogs} dialog(s) on page`)

      if (dialogs > 0) {
        const dialogTexts = await page
          .locator('[role="dialog"]')
          .allTextContents()
        console.info('Dialog contents:', dialogTexts)
      }
    }
  }

  // Wait a bit more and check final state
  await page.waitForTimeout(2000)
  const finalUrl = page.url()
  console.info('Final URL:', finalUrl)

  // Take final screenshot
  await page.screenshot({ path: 'debug-final-state.png', fullPage: true })
  console.info('📸 Final state screenshot taken')

  console.info('🏁 Template picker debugging finished')
})
