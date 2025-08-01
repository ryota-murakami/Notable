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
    console.log('🔄 Step 1: Navigate to app')
    await page.goto('/app')

    console.log('🔄 Step 2: Wait for app shell to load')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    console.log('🔄 Step 3: Take screenshot of loaded app')
    await page.screenshot({ path: 'debug-app-loaded.png' })

    console.log('🔄 Step 4: Look for New Note button')
    const newNoteButton = page.locator('button:has-text("New Note")')
    await expect(newNoteButton).toBeVisible()
    console.log('✅ New Note button is visible')

    console.log(
      '🔄 Step 5: Check if template picker is already visible (should not be)'
    )
    const templatePicker = page.locator('[data-testid="template-picker"]')
    const isPickerVisible = await templatePicker.isVisible().catch(() => false)
    console.log(`📍 Template picker visible before click: ${isPickerVisible}`)

    console.log('🔄 Step 6: Click New Note button')
    await newNoteButton.click()

    console.log('🔄 Step 7: Wait a moment for any animations')
    await page.waitForTimeout(1000)

    console.log('🔄 Step 8: Take screenshot after click')
    await page.screenshot({ path: 'debug-after-click.png' })

    console.log('🔄 Step 9: Check if template picker appears')
    const isPickerVisibleAfter = await templatePicker
      .isVisible()
      .catch(() => false)
    console.log(
      `📍 Template picker visible after click: ${isPickerVisibleAfter}`
    )

    console.log('🔄 Step 10: Check all dialogs and overlays')
    const allDialogs = await page
      .locator('[role="dialog"], .dialog, [data-radix-dialog-content]')
      .count()
    console.log(`📍 Number of dialogs found: ${allDialogs}`)

    console.log('🔄 Step 11: List all elements with data-testid')
    const testIds = await page.$$eval('[data-testid]', (elements) =>
      elements.map((el) => el.getAttribute('data-testid'))
    )
    console.log('📋 Available test IDs:', testIds)

    console.log('🔄 Step 12: Check console for errors')
    const messages = await page.evaluate(() => {
      return (window.console && (window as any).__consoleLogs) || []
    })
    console.log('📋 Console messages:', messages)

    // If template picker is visible, interact with it
    if (isPickerVisibleAfter) {
      console.log('✅ Template picker is visible, checking Blank Note button')
      const blankButton = page.locator('button:has-text("Blank Note")')
      await expect(blankButton).toBeVisible()
      console.log('✅ Blank Note button found in template picker')
    } else {
      console.log('❌ Template picker is not visible')
      // Try to force it to appear by checking the React state
      await page.evaluate(() => {
        console.log('Current document body HTML:', document.body.innerHTML)
      })
    }
  })
})
