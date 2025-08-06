import { test } from '@playwright/test'

test('debug tag management panel', async ({ page }) => {
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

  // Wait for app to load
  await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

  // Navigate to tag management
  await page
    .getByRole('button', { name: /manage tags/i })
    .click({ force: true })
  await page.waitForSelector('[role="dialog"]')

  // Click on "Manage Tags" section
  await page
    .locator('[role="dialog"]')
    .getByRole('button', { name: /^Manage Tags$/ })
    .click({ force: true })
  await page.waitForTimeout(1000)

  // Take screenshot of manage tags section
  await page.screenshot({ path: 'manage-tags-section.png', fullPage: true })

  // Create new tag
  await page.getByRole('button', { name: /create tag/i }).click({ force: true })
  await page.waitForTimeout(1000)

  // Take screenshot of create dialog
  await page.screenshot({ path: 'create-tag-dialog.png', fullPage: true })

  // Fill in the form
  await page.getByPlaceholder(/tag name/i).fill('test-tag')
  await page.getByPlaceholder(/description/i).fill('A test tag for E2E testing')

  // Take screenshot before submitting
  await page.screenshot({ path: 'before-submit.png', fullPage: true })

  // Submit the form
  await page.getByRole('button', { name: /^create$/i }).click({ force: true })

  // Wait and take screenshot after submit
  await page.waitForTimeout(2000)
  await page.screenshot({ path: 'after-submit.png', fullPage: true })

  // Check for errors
  const errors = await page.getByRole('alert').all()
  console.info(`Found ${errors.length} alerts`)
  for (const error of errors) {
    const text = await error.textContent()
    console.info(`Alert: "${text}"`)
  }
})
