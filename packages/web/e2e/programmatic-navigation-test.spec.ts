import { expect, test } from '@playwright/test'

test('programmatic navigation debug test', async ({ page }) => {
  // Capture console messages and errors
  page.on('console', (msg) => {
    console.info(`[BROWSER] ${msg.type()}: ${msg.text()}`)
  })

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

  console.info('🚀 Testing programmatic navigation from Shell component...')

  // Navigate to the app
  await page.goto('http://localhost:4378/app')
  await page.waitForLoadState('networkidle')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.info('✅ App shell loaded at:', page.url())

  // Instead of clicking the New Note button, let's test the router directly
  // Inject a test function to simulate router.push()
  const navigationResult = await page.evaluate(async () => {
    // Try to get the Next.js router
    const router =
      (window as any).next?.router || (window as any).__NEXT_ROUTER__

    if (!router) {
      return { success: false, error: 'No Next.js router found' }
    }

    console.info('Router found:', !!router)
    console.info('Current route:', router.asPath || router.pathname)

    // Try to navigate programmatically
    try {
      const testNoteId = 'programmatic-test-note'
      const targetUrl = `/notes/${testNoteId}`

      console.info(`Attempting router.push to: ${targetUrl}`)

      // Try the navigation
      if (router.push) {
        await router.push(targetUrl)
        return {
          success: true,
          method: 'router.push',
          target: targetUrl,
          currentPath: router.asPath || router.pathname,
        }
      } else {
        return { success: false, error: 'router.push not available' }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        method: 'router.push',
      }
    }
  })

  console.info('Navigation result:', navigationResult)

  // Wait a moment for potential navigation
  await page.waitForTimeout(2000)

  const finalUrl = page.url()
  console.info('Final URL after programmatic navigation:', finalUrl)

  // Take screenshot
  await page.screenshot({
    path: 'programmatic-navigation-test.png',
    fullPage: true,
  })

  // Check if navigation worked
  if (finalUrl.includes('/notes/')) {
    console.info('🎉 SUCCESS: Programmatic navigation worked!')
  } else {
    console.info('❌ FAILURE: Programmatic navigation did not work')

    // Try alternative approach: manual navigation via window.location
    console.info('🔄 Trying manual navigation via window.location...')

    await page.evaluate(() => {
      window.location.href = '/notes/manual-test-note'
    })

    await page.waitForTimeout(2000)
    const manualUrl = page.url()
    console.info('Manual navigation result:', manualUrl)

    if (manualUrl.includes('/notes/')) {
      console.info('✅ Manual navigation worked - suggests router issue')
    } else {
      console.info('❌ Manual navigation also failed - deeper routing issue')
    }
  }

  console.info('🏁 Programmatic navigation test finished')
})
