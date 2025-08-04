import { test, expect } from '@playwright/test'

test('programmatic navigation debug test', async ({ page }) => {
  // Capture console messages and errors
  page.on('console', (msg) => {
    console.log(`[BROWSER] ${msg.type()}: ${msg.text()}`)
  })

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

  console.log('🚀 Testing programmatic navigation from Shell component...')

  // Navigate to the app
  await page.goto('http://localhost:4378/app')
  await page.waitForLoadState('networkidle')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ App shell loaded at:', page.url())

  // Instead of clicking the New Note button, let's test the router directly
  // Inject a test function to simulate router.push()
  const navigationResult = await page.evaluate(async () => {
    // Try to get the Next.js router
    const router =
      (window as any).next?.router || (window as any).__NEXT_ROUTER__

    if (!router) {
      return { success: false, error: 'No Next.js router found' }
    }

    console.log('Router found:', !!router)
    console.log('Current route:', router.asPath || router.pathname)

    // Try to navigate programmatically
    try {
      const testNoteId = 'programmatic-test-note'
      const targetUrl = `/notes/${testNoteId}`

      console.log(`Attempting router.push to: ${targetUrl}`)

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
        error: error.message,
        method: 'router.push',
      }
    }
  })

  console.log('Navigation result:', navigationResult)

  // Wait a moment for potential navigation
  await page.waitForTimeout(2000)

  const finalUrl = page.url()
  console.log('Final URL after programmatic navigation:', finalUrl)

  // Take screenshot
  await page.screenshot({
    path: 'programmatic-navigation-test.png',
    fullPage: true,
  })

  // Check if navigation worked
  if (finalUrl.includes('/notes/')) {
    console.log('🎉 SUCCESS: Programmatic navigation worked!')
  } else {
    console.log('❌ FAILURE: Programmatic navigation did not work')

    // Try alternative approach: manual navigation via window.location
    console.log('🔄 Trying manual navigation via window.location...')

    await page.evaluate(() => {
      window.location.href = '/notes/manual-test-note'
    })

    await page.waitForTimeout(2000)
    const manualUrl = page.url()
    console.log('Manual navigation result:', manualUrl)

    if (manualUrl.includes('/notes/')) {
      console.log('✅ Manual navigation worked - suggests router issue')
    } else {
      console.log('❌ Manual navigation also failed - deeper routing issue')
    }
  }

  console.log('🏁 Programmatic navigation test finished')
})
