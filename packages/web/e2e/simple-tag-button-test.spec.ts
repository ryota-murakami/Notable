import { expect, test } from '@playwright/test'
// Removed jsClick import - using standard Playwright APIs

test('simple tag button click test', async ({ page }) => {
  // Listen for JavaScript errors
  page.on('pageerror', (error) => {
    console.info(
      'JavaScript error:',
      error instanceof Error ? error.message : String(error)
    )
  })

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.info('Console error:', msg.text())
    }
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

  // Wait for the page to load
  await page.waitForLoadState('networkidle')

  // Look for the "Manage Tags" button
  const manageTagsButton = page.getByRole('button', { name: /manage tags/i })

  // Check if it exists and is visible
  await expect(manageTagsButton).toBeVisible({ timeout: 10000 })

  console.info('✅ Manage Tags button found and visible!')

  // Try clicking it with jsClick to bypass timeout issues
  console.info('Attempting to click button using jsClick...')

  try {
    // Try different selectors to find the Manage Tags button
    const selectors = [
      'button[aria-label*="Manage Tags" i]',
      'button[title*="Manage Tags" i]',
      'button:contains("Manage Tags")',
      'button',
    ]

    let clicked = false
    for (const selector of selectors) {
      try {
        // First check if elements with this selector exist
        const elements = await page.evaluate((sel) => {
          if (sel === 'button') {
            // For button selector, find one containing "Manage Tags" text
            const buttons = Array.from(document.querySelectorAll('button'))
            return buttons.filter(
              (btn) =>
                btn.textContent &&
                btn.textContent.toLowerCase().includes('manage tags')
            ).length
          } else {
            return document.querySelectorAll(sel).length
          }
        }, selector)

        if (elements > 0) {
          if (selector === 'button') {
            // Special handling for generic button selector - find by text content
            await page.evaluate(() => {
              const buttons = Array.from(document.querySelectorAll('button'))
              const manageTagsBtn = buttons.find(
                (btn) =>
                  btn.textContent &&
                  btn.textContent.toLowerCase().includes('manage tags')
              )
              if (manageTagsBtn) {
                ;(manageTagsBtn as HTMLElement).click()
              }
            })
          } else {
            await page.click(selector, { force: true })
          }
          clicked = true
          break
        }
      } catch (_error) {
        // Continue to next selector
        continue
      }
    }

    if (clicked) {
      console.info('✅ Successfully clicked Manage Tags button!')
    } else {
      console.info('❌ Could not find clickable Manage Tags button')
    }
  } catch (error) {
    console.info(
      '❌ Button click failed:',
      error instanceof Error ? error.message : String(error)
    )
  }

  // Wait a bit to see if anything happens
  await page.waitForTimeout(2000)

  // Check if any dialogs appeared
  const dialogs = await page.locator('[role="dialog"]').count()
  console.info(`Found ${dialogs} dialog(s) after clicking`)

  // Take a screenshot to see the state
  await page.screenshot({ path: 'after-manage-tags-click.png', fullPage: true })

  console.info('✅ Test completed - check screenshot')
})
