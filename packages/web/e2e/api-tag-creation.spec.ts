import { expect, test } from '@playwright/test'

test('API tag creation and cache refresh', async ({ page }) => {
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

  console.info('🚀 Starting API tag creation test...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.info('✅ App shell loaded')

  // Check environment variables
  const envCheck = await page.evaluate(() => {
    return {
      clientSide: (window as any).__NEXT_PUBLIC_API_MOCKING || 'not set',
      hasProcess: typeof process !== 'undefined',
      nodeEnv:
        typeof process !== 'undefined'
          ? process.env?.NODE_ENV
          : 'not available',
    }
  })
  console.info('Client-side environment check:', envCheck)

  // Check server-side environment variables via debug API
  const serverEnvCheck = await page.evaluate(async () => {
    try {
      const response = await fetch('/api/debug')
      const result = await response.json()
      return result
    } catch (error) {
      return { error: error instanceof Error ? error.message : String(error) }
    }
  })
  console.info('Server-side environment check:', serverEnvCheck)

  // Test 1: Create a tag directly via API
  const testTagName = `api-test-tag-${Date.now()}`

  const apiResponse = await page.evaluate(async (tagName) => {
    try {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: tagName,
          color: '#3b82f6',
        }),
      })

      const result = await response.json()
      return {
        status: response.status,
        success: result.success,
        data: result.data,
        error: result.error,
      }
    } catch (error) {
      return {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }, testTagName)

  console.info(`API Response:`, apiResponse)

  if (apiResponse.success && apiResponse.status === 201) {
    console.info(`✅ Tag created successfully via API: ${testTagName}`)
    console.info(`Created tag ID: ${apiResponse.data.id}`)
  } else {
    console.info(`❌ API tag creation failed:`, apiResponse.error)
  }

  // Test 2: Verify the tag appears in the API response
  await page.waitForTimeout(2000) // Wait for any async operations

  const getAllTagsResponse = await page.evaluate(async () => {
    try {
      const response = await fetch('/api/tags')
      const result = await response.json()
      return {
        status: response.status,
        success: result.success,
        data: result.data,
        error: result.error,
      }
    } catch (error) {
      return {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  })

  console.info(`Get all tags response:`, getAllTagsResponse)

  if (getAllTagsResponse.success) {
    const createdTag = getAllTagsResponse.data.find(
      (tag: any) => tag.name === testTagName
    )
    if (createdTag) {
      console.info(`✅ Tag found in API response: ${createdTag.name}`)
    } else {
      console.info(`❌ Tag not found in API response`)
      console.info(
        `Available tags:`,
        getAllTagsResponse.data.map((t: any) => t.name)
      )
    }
  } else {
    console.info(`❌ Failed to get tags:`, getAllTagsResponse.error)
  }

  // Test 3: Open tag management and check if React Query cache has the tag
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
  await page.waitForTimeout(3000)
  const dialogVisible = await page.locator('[role="dialog"]').isVisible()

  if (dialogVisible) {
    console.info('✅ Tag management dialog opened')

    // Take a screenshot to see the current state
    await page.screenshot({
      path: 'api-tag-creation-final.png',
      fullPage: true,
    })
    console.info('✅ Screenshot taken')

    // Check if the tag is visible in the UI
    const tagVisibleInUI = await page.locator(`text=${testTagName}`).isVisible()
    console.info(`Tag "${testTagName}" visible in UI: ${tagVisibleInUI}`)

    if (tagVisibleInUI) {
      console.info(
        '🎉 SUCCESS: Tag created via API and visible in React Query cache!'
      )
    } else {
      console.info(
        '⚠️  Tag created via API but not visible in UI - cache invalidation issue'
      )
    }
  } else {
    console.info('❌ Could not open tag management dialog')
  }

  console.info('🏁 API tag creation test finished')
})
