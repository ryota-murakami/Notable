import { expect, test } from './fixtures/coverage'

test.describe('Template Picker Debug', () => {
  test.use({
    navigationTimeout: 60000,
    actionTimeout: 20000,
  })

  test.beforeEach(async ({ page }) => {
    // Set auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])
  })

  test('should debug template picker visibility step by step', async ({
    page,
  }) => {
    console.info('🔄 Step 1: Navigate to app')
    await page.goto('/app')

    console.info('🔄 Step 2: Wait for app shell to load')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    console.info('🔄 Step 3: Take screenshot of loaded app')
    await page.screenshot({ path: 'debug-app-loaded.png' })

    console.info('🔄 Step 4: Look for New Note button')
    const newNoteButton = page.locator('button:has-text("New Note")')
    await expect(newNoteButton).toBeVisible()
    console.info('✅ New Note button is visible')

    console.info(
      '🔄 Step 5: Check if template picker is already visible (should not be)'
    )
    const templatePicker = page.locator('[data-testid="template-picker"]')
    const isPickerVisible = await templatePicker.isVisible().catch(() => false)
    console.info(`📍 Template picker visible before click: ${isPickerVisible}`)

    console.info('🔄 Step 6: Click New Note button')
    await newNoteButton.click()

    console.info('🔄 Step 7: Wait a moment for any animations')
    await page.waitForTimeout(1000)

    console.info('🔄 Step 8: Take screenshot after click')
    await page.screenshot({ path: 'debug-after-click.png' })

    console.info('🔄 Step 9: Check if template picker appears')
    const isPickerVisibleAfter = await templatePicker
      .isVisible()
      .catch(() => false)
    console.info(
      `📍 Template picker visible after click: ${isPickerVisibleAfter}`
    )

    console.info('🔄 Step 10: Check all dialogs and overlays')
    const allDialogs = await page
      .locator('[role="dialog"], .dialog, [data-radix-dialog-content]')
      .count()
    console.info(`📍 Number of dialogs found: ${allDialogs}`)

    console.info('🔄 Step 11: List all elements with data-testid')
    const testIds = await page.$$eval('[data-testid]', (elements) =>
      elements.map((el) => el.getAttribute('data-testid'))
    )
    console.info('📋 Available test IDs:', testIds)

    console.info('🔄 Step 12: Check console for errors')
    const messages = await page.evaluate(() => {
      return (window.console && (window as any).__consoleLogs) || []
    })
    console.info('📋 Console messages:', messages)

    // If template picker is visible, interact with it
    if (isPickerVisibleAfter) {
      console.info('✅ Template picker is visible, checking Blank Note button')
      const blankButton = page.locator('button:has-text("Blank Note")')
      await expect(blankButton).toBeVisible()
      console.info('✅ Blank Note button found in template picker')
    } else {
      console.info('❌ Template picker is not visible')
      // Try to force it to appear by checking the React state
      await page.evaluate(() => {
        console.info('Current document body HTML:', document.body.innerHTML)
      })
    }
  })
})
