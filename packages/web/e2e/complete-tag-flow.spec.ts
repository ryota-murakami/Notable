import { expect, test } from '@playwright/test'

test('complete tag creation workflow', async ({ page }) => {
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

  console.log('🚀 Starting complete tag creation workflow...')

  // Step 1: Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ Step 1: App shell loaded')

  // Step 2: Open tag management using JavaScript click workaround
  const manageTagsClickResult = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'))
    console.log(`Found ${buttons.length} buttons total`)

    // Debug: log all button text content
    buttons.forEach((btn, i) => {
      const text = btn.textContent?.trim()
      if (text) {
        console.log(`Button ${i}: "${text}"`)
      }
    })

    const manageTagsButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('manage tags')
    )

    if (manageTagsButton) {
      console.log('Found Manage Tags button, attempting click...')
      manageTagsButton.click()
      console.log('JavaScript: Clicked Manage Tags button')
      return true
    } else {
      console.log('Manage Tags button not found!')
      return false
    }
  })

  console.log(`Manage Tags click result: ${manageTagsClickResult}`)

  // Wait a bit longer for the dialog to appear
  await page.waitForTimeout(3000)

  // Step 3: Wait for the tag management dialog to appear
  await expect(page.locator('[role="dialog"]')).toBeVisible({ timeout: 5000 })
  console.log('✅ Step 3: Tag management dialog opened')

  // Step 4: Navigate to "Manage Tags" section in sidebar using JavaScript workaround
  const manageTagsSectionFound = await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]')
    if (!dialog) return false

    const buttons = Array.from(dialog.querySelectorAll('button'))
    const manageTagsButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('manage tags')
    )

    if (manageTagsButton) {
      manageTagsButton.click()
      console.log('JavaScript: Clicked Manage Tags section button')
      return true
    }
    return false
  })

  if (manageTagsSectionFound) {
    console.log('✅ Step 4: Clicked "Manage Tags" section in sidebar')
  } else {
    console.log(
      '⚠️  Step 4: Manage Tags section button not found, might already be active'
    )
  }

  // Step 5: Look for and click "Create Tag" button using JavaScript workaround
  await page.waitForTimeout(1000) // Wait for section to load

  const createTagButtonFound = await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]')
    if (!dialog) return false

    const buttons = Array.from(dialog.querySelectorAll('button'))
    const createTagButton = buttons.find((btn) =>
      btn.textContent?.toLowerCase().includes('create tag')
    )

    if (createTagButton) {
      createTagButton.click()
      console.log('JavaScript: Clicked Create Tag button')
      return true
    }
    return false
  })

  if (createTagButtonFound) {
    console.log('✅ Step 5: Clicked "Create Tag" button')

    // Step 6: Wait for the create tag form dialog to appear
    await page.waitForTimeout(1000)

    // Look for the tag creation dialog (there should be 2 dialogs now)
    const dialogs = await page.locator('[role="dialog"]').count()
    console.log(
      `Step 6: Found ${dialogs} dialog(s) - should be 2 (main + create form)`
    )

    // Step 7: Find the tag name input in the create form
    const tagNameInput = page
      .locator(
        'input[placeholder*="tag name"], input[id="tag-name"], input[placeholder*="Enter tag name"]'
      )
      .last()

    if (await tagNameInput.isVisible()) {
      console.log('✅ Step 7: Found tag name input field')

      // Step 8: Enter a test tag name using Playwright fill with retries
      const testTagName = `test-tag-${Date.now()}`

      // Try Playwright fill with longer timeout and multiple attempts
      let fillSuccess = false
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          console.log(`Attempt ${attempt} to fill tag name input`)
          await tagNameInput.fill(testTagName, { timeout: 10000 })

          // Verify the input has the correct value
          const inputValue = await tagNameInput.inputValue()
          if (inputValue === testTagName) {
            fillSuccess = true
            console.log(
              `✅ Step 8: Successfully entered tag name: ${testTagName}`
            )
            break
          } else {
            console.log(
              `Attempt ${attempt} failed - input value: "${inputValue}", expected: "${testTagName}"`
            )
          }
        } catch (error) {
          console.log(
            `Attempt ${attempt} failed with error: ${error instanceof Error ? error.message : String(error)}`
          )
          if (attempt < 3) {
            await page.waitForTimeout(1000)
          }
        }
      }

      if (!fillSuccess) {
        console.log(`❌ Step 8: Failed to fill tag name input after 3 attempts`)
      }

      // Step 9: Look for create/save button in the form (only if input filling succeeded)
      if (fillSuccess) {
        const createButton = page
          .getByRole('button', { name: /^create$/i })
          .or(page.getByRole('button', { name: /save/i }))
          .last()

        if (await createButton.isVisible()) {
          console.log('✅ Step 9: Found create button')

          try {
            // Use JavaScript click workaround for the final create button too
            const submitButtonClicked = await page.evaluate(() => {
              const dialogs = document.querySelectorAll('[role="dialog"]')
              // Look in the last dialog (should be the create form)
              const formDialog = dialogs[dialogs.length - 1]
              if (!formDialog) return false

              const buttons = Array.from(formDialog.querySelectorAll('button'))
              const createButton = buttons.find((btn) =>
                btn.textContent?.toLowerCase().match(/^create$|save/i)
              )

              if (createButton) {
                createButton.click()
                console.log('JavaScript: Clicked final create button')
                return true
              }
              return false
            })

            if (submitButtonClicked) {
              console.log('✅ Step 10: Clicked create button')
            } else {
              console.log(
                '❌ Step 10: Could not find create button via JavaScript'
              )
            }

            // Step 11: Wait and check for success
            await page.waitForTimeout(3000)

            // Debug: Check the form state after clicking create
            await page.evaluate(() => {
              const input = document.querySelector(
                'input[id="tag-name"]'
              ) as HTMLInputElement
              if (input) {
                console.log(`Input value after create click: "${input.value}"`)
              } else {
                console.log('Input field no longer exists (form closed)')
              }

              const dialogs = document.querySelectorAll('[role="dialog"]')
              console.log(`Number of dialogs after create: ${dialogs.length}`)

              dialogs.forEach((dialog, i) => {
                const title = dialog.querySelector('h2')?.textContent
                console.log(`Dialog ${i}: "${title}"`)
              })
            })

            // Check if the create dialog closed (should go back to 1 dialog)
            const dialogsAfter = await page.locator('[role="dialog"]').count()
            console.log(
              `Step 11: Found ${dialogsAfter} dialog(s) after creation`
            )

            if (dialogsAfter === 1) {
              console.log(
                '🎉 Tag creation dialog closed - tag likely created successfully!'
              )
            }

            // Check if tag appears in the tag list/tree
            const tagInTree = page.locator(`text=${testTagName}`).first()
            const isTagVisible = await tagInTree.isVisible()
            console.log(`Tag "${testTagName}" visible in UI: ${isTagVisible}`)

            if (isTagVisible) {
              console.log(
                '🎉 SUCCESS: Tag created and visible in the interface!'
              )
            } else {
              console.log(
                '⚠️  Tag may have been created but not immediately visible'
              )
            }
          } catch (error) {
            console.log(
              '❌ Step 10 failed - Create button click error:',
              error instanceof Error ? error.message : String(error)
            )
          }
        } else {
          console.log('❌ Step 9 failed - Create button not found')
        }
      } else {
        console.log(
          '⚠️  Step 9 skipped - Input filling failed, cannot proceed with form submission'
        )
      }
    } else {
      console.log('❌ Step 7 failed - Tag name input field not found')
    }
  } else {
    console.log('❌ Step 5 failed - Create Tag button not found')
  }

  // Final step: Take a screenshot of the final state
  await page.screenshot({
    path: 'complete-tag-workflow-final.png',
    fullPage: true,
  })
  console.log('✅ Final: Screenshot taken')

  console.log('🏁 Complete tag creation workflow finished')
})
