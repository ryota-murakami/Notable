import { test, expect } from '@playwright/test'

test('debug template picker navigation', async ({ page }) => {
  // Capture console messages from the browser
  page.on('console', (msg) => {
    console.log(`[BROWSER] ${msg.type()}: ${msg.text()}`)
  })

  // Capture page errors
  page.on('pageerror', (error) => {
    console.log(`[PAGE ERROR] ${error.message}`)
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

  console.log('🚀 Starting template picker debugging...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ App shell loaded')

  // Take screenshot before clicking
  await page.screenshot({ path: 'debug-before-click.png', fullPage: true })
  console.log('📸 Screenshot taken before clicking New Note')

  // Click new note button using JavaScript workaround
  const buttonClicked = await page.evaluate(() => {
    // Try data-testid first
    const testIdButton = document.querySelector(
      '[data-testid="new-note-button"]'
    ) as HTMLButtonElement
    if (testIdButton) {
      console.log('Found New Note button by test-id')
      testIdButton.click()
      return true
    }

    // Fallback to finding button by text
    const buttons = Array.from(document.querySelectorAll('button'))
    const newNoteButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'New Note'
    )

    if (newNoteButton) {
      console.log('Found New Note button by text')
      newNoteButton.click()
      return true
    }

    console.log('❌ New Note button not found')
    return false
  })

  if (!buttonClicked) {
    throw new Error('Could not find or click New Note button')
  }

  console.log('✅ New Note button clicked')

  // Wait a moment for any UI changes
  await page.waitForTimeout(1000)

  // Take screenshot after clicking
  await page.screenshot({ path: 'debug-after-click.png', fullPage: true })
  console.log('📸 Screenshot taken after clicking New Note')

  // Check if template picker dialog appears
  console.log('🔍 Checking for template picker dialog...')

  try {
    // Wait for template picker with shorter timeout
    const templatePicker = page.locator(
      '[role="dialog"]:has-text("Choose a Template")'
    )
    await templatePicker.waitFor({ state: 'visible', timeout: 3000 })
    console.log('✅ Template picker dialog found!')

    // Take screenshot of template picker
    await page.screenshot({ path: 'debug-template-picker.png', fullPage: true })
    console.log('📸 Template picker screenshot taken')

    // Check what buttons are available in the template picker
    const templateButtons = await page
      .locator('[role="dialog"] button')
      .allTextContents()
    console.log('Available template buttons:', templateButtons)

    // Try to click Blank Note using JavaScript
    const templateButtonClicked = await page.evaluate(() => {
      const buttons = Array.from(
        document.querySelectorAll('[role="dialog"] button')
      )
      console.log(
        'Buttons in template picker:',
        buttons.map((b) => b.textContent)
      )

      const blankNoteButton = buttons.find((btn) =>
        btn.textContent?.includes('Blank Note')
      )

      if (blankNoteButton) {
        console.log('Clicking Blank Note button')
        blankNoteButton.click()
        return true
      }

      console.log('❌ Blank Note button not found in template picker')
      return false
    })

    if (templateButtonClicked) {
      console.log('✅ Blank Note button clicked')
    } else {
      console.log('❌ Failed to click Blank Note button')
    }
  } catch (error) {
    console.log('❌ Template picker dialog not found:', error.message)

    // Check what's actually on screen
    const currentUrl = page.url()
    console.log('Current URL:', currentUrl)

    // Check if we're already on a note page
    if (currentUrl.includes('/notes/')) {
      console.log('🎉 Already navigated to note page!')
    } else {
      console.log('❌ Still on welcome page, checking for any dialogs...')

      // Check for any dialogs that might be present
      const dialogs = await page.locator('[role="dialog"]').count()
      console.log(`Found ${dialogs} dialog(s) on page`)

      if (dialogs > 0) {
        const dialogTexts = await page
          .locator('[role="dialog"]')
          .allTextContents()
        console.log('Dialog contents:', dialogTexts)
      }
    }
  }

  // Wait a bit more and check final state
  await page.waitForTimeout(2000)
  const finalUrl = page.url()
  console.log('Final URL:', finalUrl)

  // Take final screenshot
  await page.screenshot({ path: 'debug-final-state.png', fullPage: true })
  console.log('📸 Final state screenshot taken')

  console.log('🏁 Template picker debugging finished')
})
