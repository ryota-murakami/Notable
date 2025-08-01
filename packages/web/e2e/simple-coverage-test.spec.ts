import { expect, test } from './fixtures/coverage'

test.describe('Simple Coverage Test', () => {
  test('should load app shell and check available elements', async ({
    page,
  }) => {
    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Navigate directly to the app page
    await page.goto('/app', { timeout: 30000 })

    // Wait for the authenticated app to load
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    // Log what we can see
    console.log('App shell loaded')

    // Check what buttons are available
    const buttons = await page.getByRole('button').all()
    console.log(`Found ${buttons.length} buttons`)

    for (let i = 0; i < buttons.length; i++) {
      const text = await buttons[i].textContent()
      console.log(`Button ${i}: ${text}`)
    }

    // Check if editor exists on the page already
    const editors = await page.locator('.slate-content').all()
    console.log(`Found ${editors.length} editors`)

    // Check for any inputs
    const inputs = await page.locator('input').all()
    console.log(`Found ${inputs.length} inputs`)

    // Take a screenshot to see what's on the page
    await page.screenshot({ path: 'app-loaded.png' })
  })
})
