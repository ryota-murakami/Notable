import { expect, test } from '@playwright/test'

test('direct route navigation test', async ({ page }) => {
  // Set dev auth bypass cookie for testing
  await page.context().addCookies([
    {
      name: 'dev-auth-bypass',
      value: 'true',
      domain: 'localhost',
      path: '/',
    },
  ])

  console.log('🚀 Testing direct route navigation...')

  // Try to navigate directly to a note URL
  const testNoteId = 'test-note-direct'
  const noteUrl = `http://localhost:4378/notes/${testNoteId}`

  console.log(`📍 Navigating directly to: ${noteUrl}`)

  try {
    await page.goto(noteUrl)
    await page.waitForLoadState('networkidle')

    console.log(`✅ Successfully navigated to: ${page.url()}`)

    // Check if we get the note editor or an error page
    const hasNoteEditor = await page
      .locator('[data-testid="note-editor-container"]')
      .isVisible()
    const hasNotFound = await page.locator('text="Note not found"').isVisible()
    const hasError = await page.locator('text="404"').isVisible()

    console.log(`Note editor visible: ${hasNoteEditor}`)
    console.log(`Not found message: ${hasNotFound}`)
    console.log(`404 error: ${hasError}`)

    // Take screenshot
    await page.screenshot({ path: 'direct-route-test.png', fullPage: true })
    console.log('📸 Screenshot taken')

    if (hasNoteEditor) {
      console.log('🎉 SUCCESS: Note editor loaded!')
    } else if (hasNotFound) {
      console.log(
        "✅ EXPECTED: Note not found (route works, but note doesn't exist)"
      )
    } else if (hasError) {
      console.log('❌ FAILURE: 404 error - route not working')
    } else {
      console.log('❓ UNKNOWN: Unexpected page state')
    }
  } catch (error) {
    console.log(
      `❌ Navigation failed: ${error instanceof Error ? error.message : String(error)}`
    )
    await page.screenshot({
      path: 'direct-route-test-error.png',
      fullPage: true,
    })
  }

  console.log('🏁 Direct route test finished')
})
