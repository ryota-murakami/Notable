import { expect, test } from '@playwright/test'

test('basic app functionality check', async ({ page }) => {
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

  console.info('🚀 Starting basic app check...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.info('✅ App shell loaded')

  // Check what buttons are available
  const buttons = await page.locator('button').allTextContents()
  console.info('Available buttons:', buttons)

  // Check specifically for New Note button
  const newNoteButton = page.locator('button', { hasText: 'New Note' })
  const isNewNoteVisible = await newNoteButton.isVisible()
  console.info(`New Note button visible: ${isNewNoteVisible}`)

  if (isNewNoteVisible) {
    console.info('✅ New Note button found')
  } else {
    console.info('❌ New Note button not found')

    // Try alternative selectors
    const newNoteByTestId = page.getByTestId('new-note-button')
    const isTestIdVisible = await newNoteByTestId.isVisible()
    console.info(`New Note by test-id visible: ${isTestIdVisible}`)

    const buttonWithPlus = page.locator('button:has(svg)')
    const plusButtonCount = await buttonWithPlus.count()
    console.info(`Buttons with icons: ${plusButtonCount}`)
  }

  // Take a screenshot
  await page.screenshot({ path: 'basic-app-check.png', fullPage: true })
  console.info('✅ Screenshot taken')

  console.info('🏁 Basic app check finished')
})
