import { expect, test } from '@playwright/test'

test('simple tag button click test', async ({ page }) => {
  // Listen for JavaScript errors
  page.on('pageerror', (error) => {
    console.log(
      'JavaScript error:',
      error instanceof Error ? error.message : String(error)
    )
  })

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log('Console error:', msg.text())
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

  console.log('✅ Manage Tags button found and visible!')

  // Try clicking it with force and see what happens
  console.log('Attempting to click button...')

  try {
    await manageTagsButton.click({ force: true, timeout: 15000 })
    console.log('✅ Manage Tags button clicked successfully!')
  } catch (error) {
    console.log(
      '❌ Click failed:',
      error instanceof Error ? error.message : String(error)
    )

    // Try alternative click methods
    try {
      console.log('Trying with dispatchEvent...')
      await manageTagsButton.dispatchEvent('click')
      console.log('✅ dispatchEvent click worked!')
    } catch (error2) {
      console.log(
        '❌ dispatchEvent also failed:',
        error2 instanceof Error ? error2.message : String(error2)
      )
    }
  }

  // Wait a bit to see if anything happens
  await page.waitForTimeout(2000)

  // Check if any dialogs appeared
  const dialogs = await page.locator('[role="dialog"]').count()
  console.log(`Found ${dialogs} dialog(s) after clicking`)

  // Take a screenshot to see the state
  await page.screenshot({ path: 'after-manage-tags-click.png', fullPage: true })

  console.log('✅ Test completed - check screenshot')
})
