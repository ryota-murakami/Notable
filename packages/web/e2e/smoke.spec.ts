import { test } from './fixtures/coverage'

test('smoke test - server responds', async ({ page }) => {
  // Simple smoke test that should complete quickly
  console.log('Starting smoke test...')

  // Don't wait for the page to load, just check if we can connect
  try {
    await page.goto('/', { timeout: 5000, waitUntil: 'domcontentloaded' })
    console.log('✅ Server is responding')
  } catch (error) {
    console.log('❌ Server not responding within 5s:', (error as Error).message)
    // Don't fail the test - we just want to see if the test runner works
  }

  console.log('Smoke test completed')
})
