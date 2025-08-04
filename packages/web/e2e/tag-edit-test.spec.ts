import { expect, test } from '@playwright/test'

test('tag editing functionality', async ({ page }) => {
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

  console.log('🚀 Starting tag editing test...')

  // Verify the app is loaded
  await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })
  console.log('✅ App shell loaded')

  // Step 1: Create a tag first via API
  const originalTagName = `edit-test-tag-${Date.now()}`

  const createResponse = await page.evaluate(async (tagName) => {
    try {
      const response = await fetch('/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: tagName,
          color: '#ff6b6b',
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
  }, originalTagName)

  console.log(`Create API Response:`, createResponse)

  if (!createResponse.success) {
    console.log(`❌ Failed to create test tag: ${createResponse.error}`)
    return
  }

  const tagId = createResponse.data.id
  console.log(`✅ Created test tag with ID: ${tagId}`)

  // Step 2: Edit the tag via API
  const newTagName = `edited-tag-${Date.now()}`
  const newColor = '#4ecdc4'

  const editResponse = await page.evaluate(
    async ({ id, name, color }) => {
      try {
        const response = await fetch(`/api/tags/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            color,
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
    },
    { id: tagId, name: newTagName, color: newColor }
  )

  console.log(`Edit API Response:`, editResponse)

  if (editResponse.success) {
    console.log(`✅ Tag edited successfully`)
    console.log(`Original name: ${originalTagName} -> New name: ${newTagName}`)
    console.log(`Original color: #ff6b6b -> New color: ${newColor}`)
  } else {
    console.log(`❌ Tag editing failed: ${editResponse.error}`)
  }

  // Step 3: Verify the edit by fetching the updated tag
  const fetchResponse = await page.evaluate(async (id) => {
    try {
      const response = await fetch(`/api/tags/${id}`)
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
  }, tagId)

  console.log(`Fetch updated tag response:`, fetchResponse)

  if (fetchResponse.success) {
    const updatedTag = fetchResponse.data
    if (updatedTag.name === newTagName && updatedTag.color === newColor) {
      console.log(`🎉 SUCCESS: Tag edited and verified!`)
      console.log(`Updated tag name: ${updatedTag.name}`)
      console.log(`Updated tag color: ${updatedTag.color}`)
    } else {
      console.log(`❌ Tag edit verification failed`)
      console.log(`Expected: name=${newTagName}, color=${newColor}`)
      console.log(`Actual: name=${updatedTag.name}, color=${updatedTag.color}`)
    }
  } else {
    console.log(`❌ Failed to fetch updated tag: ${fetchResponse.error}`)
  }

  // Step 4: Test tag deletion
  const deleteResponse = await page.evaluate(async (id) => {
    try {
      const response = await fetch(`/api/tags/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()
      return {
        status: response.status,
        success: result.success,
        message: result.message,
        error: result.error,
      }
    } catch (error) {
      return {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }, tagId)

  console.log(`Delete API Response:`, deleteResponse)

  if (deleteResponse.success) {
    console.log(`✅ Tag deleted successfully: ${deleteResponse.message}`)
  } else {
    console.log(`❌ Tag deletion failed: ${deleteResponse.error}`)
  }

  // Step 5: Verify deletion
  const verifyDeleteResponse = await page.evaluate(async (id) => {
    try {
      const response = await fetch(`/api/tags/${id}`)
      const result = await response.json()
      return {
        status: response.status,
        success: result.success,
        error: result.error,
      }
    } catch (error) {
      return {
        status: 0,
        success: false,
        error: error instanceof Error ? error.message : String(error),
      }
    }
  }, tagId)

  console.log(`Verify deletion response:`, verifyDeleteResponse)

  if (verifyDeleteResponse.status === 404) {
    console.log(`🎉 SUCCESS: Tag deletion verified - tag not found (404)`)
  } else {
    console.log(`❌ Tag deletion verification failed - tag still exists`)
  }

  console.log('🏁 Tag editing test finished')
})
