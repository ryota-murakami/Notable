import { expect, test } from '@playwright/test'

test('direct tag management test', async ({ page }) => {
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

  // Verify the shell component is there
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ App shell is visible!')

  // Verify the button exists
  await expect(page.getByRole('button', { name: /manage tags/i })).toBeVisible()
  console.log('✅ Manage Tags button is visible!')

  // Try direct JavaScript execution to trigger the tag management dialog
  await page.evaluate(() => {
    // Find all React Fiber nodes and look for state setters
    const rootElement = document.querySelector('#__next')
    if (rootElement && (rootElement as any)._reactInternalFiber) {
      console.log('Found React fiber node')
    }

    // Try to find and click the button via DOM
    const buttons = Array.from(document.querySelectorAll('button'))
    const manageTagsButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('manage tags')
    )

    if (manageTagsButton) {
      console.log('Found Manage Tags button via DOM search')
      manageTagsButton.click()
      console.log('Clicked button via JavaScript')
    } else {
      console.log('Could not find button via DOM search')
    }
  })

  console.log('Executed JavaScript to click button')

  // Wait a bit and check for dialog
  await page.waitForTimeout(3000)

  const dialogs = await page.locator('[role="dialog"]').count()
  console.log(`Found ${dialogs} dialog(s) after JavaScript click`)

  // Check if TagManagementPanel dialog appeared
  const tagDialog = page.locator('text=Tag Management')
  const isTagDialogVisible = await tagDialog.isVisible()
  console.log(`Tag Management dialog visible: ${isTagDialogVisible}`)

  // Take a screenshot
  await page.screenshot({ path: 'after-js-click.png', fullPage: true })
  console.log('✅ Test completed - check screenshot and console output')
})
