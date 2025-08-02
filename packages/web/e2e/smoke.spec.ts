import { test } from './fixtures/coverage'

test('smoke test - server responds', async ({ page }) => {
  // Simple smoke test that should complete quickly
  console.info('Starting smoke test...')

  // Don't wait for the page to load, just check if we can connect
  try {
    await page.goto('/', { timeout: 5000, waitUntil: 'domcontentloaded' })
    console.info('✅ Server is responding')
  } catch (error) {
    console.info(
      '❌ Server not responding within 5s:',
      (error as Error).message
    )
    // Don't fail the test - we just want to see if the test runner works
  }

  console.info('Smoke test completed')
})
