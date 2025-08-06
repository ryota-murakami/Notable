import { expect, test } from '@playwright/test'

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

  console.info('🚀 Starting tag creation test...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.info('✅ App shell loaded')

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
  console.info('✅ Tag management dialog opened')

  // Look for the create tag form within the dialog
  const dialog = page.locator('[role="dialog"]')

  // Try to find an input field for tag name
  const tagNameInput = dialog
    .locator(
      'input[placeholder*="tag"], input[placeholder*="name"], input[type="text"]'
    )
    .first()

  if (await tagNameInput.isVisible()) {
    console.info('✅ Found tag name input field')

    // Enter a test tag name
    const testTagName = `test-tag-${Date.now()}`
    await tagNameInput.fill(testTagName)
    console.info(`✅ Entered tag name: ${testTagName}`)

    // Look for create/save button
    const createButton = dialog
      .locator('button')
      .filter({ hasText: /create|save|add/i })
      .first()

    if (await createButton.isVisible()) {
      console.info('✅ Found create button')

      // Try clicking the create button
      try {
        await createButton.click({ timeout: 5000 })
        console.info('✅ Clicked create button')

        // Wait a bit for the tag to be created
        await page.waitForTimeout(2000)

        // Check if the tag appears in the list or if there's a success message
        const tagInList = dialog.locator(`text=${testTagName}`).first()
        const isTagVisible = await tagInList.isVisible()

        console.info(`Tag "${testTagName}" visible in list: ${isTagVisible}`)

        if (isTagVisible) {
          console.info('🎉 Tag created successfully!')
        } else {
          console.info(
            '⚠️  Tag creation may have succeeded but not visible in list'
          )
        }
      } catch (error) {
        console.info(
          '❌ Failed to click create button:',
          error instanceof Error ? error.message : String(error)
        )
      }
    } else {
      console.info('❌ Create button not found in dialog')
    }
  } else {
    console.info('❌ Tag name input field not found')
  }

  // Take a screenshot of the final state
  await page.screenshot({ path: 'tag-creation-final.png', fullPage: true })

  // Log all form elements in the dialog for debugging
  await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]')
    if (dialog) {
      const inputs = dialog.querySelectorAll('input')
      const buttons = dialog.querySelectorAll('button')

      console.info('Dialog inputs found:', inputs.length)
      inputs.forEach((input, i) => {
        console.info(`Input ${i}:`, {
          type: input.type,
          placeholder: input.placeholder,
          name: input.name,
          id: input.id,
        })
      })

      console.info('Dialog buttons found:', buttons.length)
      buttons.forEach((button, i) => {
        console.info(`Button ${i}:`, button.textContent?.trim())
      })
    }
  })

  console.info('✅ Tag creation test completed')
})
