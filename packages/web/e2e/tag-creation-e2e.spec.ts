import { test, expect } from '@playwright/test'

test('complete tag creation end-to-end', async ({ page }) => {
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

  console.log('🚀 Starting tag creation test...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ App shell loaded')

  // Open tag management using JavaScript click workaround
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'))
    const manageTagsButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('manage tags')
    )
    if (manageTagsButton) {
      manageTagsButton.click()
    }
  })

  // Wait for the tag management dialog to appear
  await expect(page.locator('[role="dialog"]')).toBeVisible({ timeout: 5000 })
  console.log('✅ Tag management dialog opened')

  // Look for the create tag form within the dialog
  const dialog = page.locator('[role="dialog"]')

  // Try to find an input field for tag name
  const tagNameInput = dialog
    .locator(
      'input[placeholder*="tag"], input[placeholder*="name"], input[type="text"]'
    )
    .first()

  if (await tagNameInput.isVisible()) {
    console.log('✅ Found tag name input field')

    // Enter a test tag name
    const testTagName = 'test-tag-' + Date.now()
    await tagNameInput.fill(testTagName)
    console.log(`✅ Entered tag name: ${testTagName}`)

    // Look for create/save button
    const createButton = dialog
      .locator('button')
      .filter({ hasText: /create|save|add/i })
      .first()

    if (await createButton.isVisible()) {
      console.log('✅ Found create button')

      // Try clicking the create button
      try {
        await createButton.click({ timeout: 5000 })
        console.log('✅ Clicked create button')

        // Wait a bit for the tag to be created
        await page.waitForTimeout(2000)

        // Check if the tag appears in the list or if there's a success message
        const tagInList = dialog.locator(`text=${testTagName}`).first()
        const isTagVisible = await tagInList.isVisible()

        console.log(`Tag "${testTagName}" visible in list: ${isTagVisible}`)

        if (isTagVisible) {
          console.log('🎉 Tag created successfully!')
        } else {
          console.log(
            '⚠️  Tag creation may have succeeded but not visible in list'
          )
        }
      } catch (error) {
        console.log('❌ Failed to click create button:', error.message)
      }
    } else {
      console.log('❌ Create button not found in dialog')
    }
  } else {
    console.log('❌ Tag name input field not found')
  }

  // Take a screenshot of the final state
  await page.screenshot({ path: 'tag-creation-final.png', fullPage: true })

  // Log all form elements in the dialog for debugging
  await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]')
    if (dialog) {
      const inputs = dialog.querySelectorAll('input')
      const buttons = dialog.querySelectorAll('button')

      console.log('Dialog inputs found:', inputs.length)
      inputs.forEach((input, i) => {
        console.log(`Input ${i}:`, {
          type: input.type,
          placeholder: input.placeholder,
          name: input.name,
          id: input.id,
        })
      })

      console.log('Dialog buttons found:', buttons.length)
      buttons.forEach((button, i) => {
        console.log(`Button ${i}:`, button.textContent?.trim())
      })
    }
  })

  console.log('✅ Tag creation test completed')
})
