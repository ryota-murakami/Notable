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
  console.info('✅ App shell is visible!')

  // Verify the button exists
  await expect(page.getByRole('button', { name: /manage tags/i })).toBeVisible()
  console.info('✅ Manage Tags button is visible!')

  // Try direct JavaScript execution to trigger the tag management dialog
  await page.evaluate(() => {
    // Find all React Fiber nodes and look for state setters
    const rootElement = document.querySelector('#__next')
    if (rootElement && (rootElement as any)._reactInternalFiber) {
      console.info('Found React fiber node')
    }

    // Try to find and click the button via DOM
    const buttons = Array.from(document.querySelectorAll('button'))
    const manageTagsButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('manage tags')
    )

    if (manageTagsButton) {
      console.info('Found Manage Tags button via DOM search')
      manageTagsButton.click()
      console.info('Clicked button via JavaScript')
    } else {
      console.info('Could not find button via DOM search')
    }
  })

  console.info('Executed JavaScript to click button')

  // Wait a bit and check for dialog
  await page.waitForTimeout(3000)

  const dialogs = await page.locator('[role="dialog"]').count()
  console.info(`Found ${dialogs} dialog(s) after JavaScript click`)

  // Check if TagManagementPanel dialog appeared
  const tagDialog = page.locator('text=Tag Management')
  const isTagDialogVisible = await tagDialog.isVisible()
  console.info(`Tag Management dialog visible: ${isTagDialogVisible}`)

  // Take a screenshot
  await page.screenshot({ path: 'after-js-click.png', fullPage: true })
  console.info('✅ Test completed - check screenshot and console output')
})
