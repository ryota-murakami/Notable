import { test, expect } from '@playwright/test'

test('simple shell test - check new note button', async ({ page }) => {
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

  // Look for the "New Note" button specifically by its test ID
  const newNoteButton = page.getByTestId('new-note-button')

  // Check if it exists and is visible
  await expect(newNoteButton).toBeVisible({ timeout: 10000 })

  // Check the text content
  await expect(newNoteButton).toHaveText('New Note')

  console.log('✅ New Note button found and visible!')
})
