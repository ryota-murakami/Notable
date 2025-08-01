import { expect, test } from './fixtures/coverage'

test.describe('Note Creation Debug', () => {
  test('should debug note creation flow step by step', async ({ page }) => {
    // Track console and navigation events
    const consoleMessages: string[] = []
    const navigationEvents: string[] = []
    const failedRequests: string[] = []

    page.on('console', (msg) => {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`)
    })

    page.on('framenavigated', (frame) => {
      if (frame === page.mainFrame()) {
        navigationEvents.push(`Navigated to: ${frame.url()}`)
      }
    })

    // Track failed network requests
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push(
          `${response.status()} ${response.request().method()} ${response.url()}`
        )
      }
    })

    // Set dev auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    console.log('🔄 Step 1: Navigate to app')
    await page.goto('http://localhost:4378/app', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })

    console.log('🔄 Step 2: Wait for app shell')
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    console.log('🔄 Step 3: Click New Note button')
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
    await newNoteButton.click()

    console.log('🔄 Step 4: Wait for template picker')
    const templatePicker = page.getByTestId('template-picker')
    await expect(templatePicker).toBeVisible({ timeout: 10000 })

    console.log('🔄 Step 5: Click Blank Note button')
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await expect(blankNoteButton).toBeVisible()

    // Get current URL before clicking
    const urlBeforeClick = page.url()
    console.log(`📍 URL before Blank Note click: ${urlBeforeClick}`)

    await blankNoteButton.click()

    console.log('🔄 Step 6: Wait for navigation and check results')
    await page.waitForTimeout(5000) // Wait for any navigation/loading

    const urlAfterClick = page.url()
    console.log(`📍 URL after Blank Note click: ${urlAfterClick}`)

    // Check if URL changed to notes route
    const urlChanged = urlBeforeClick !== urlAfterClick
    console.log(`🔄 URL changed: ${urlChanged}`)

    if (urlChanged && urlAfterClick.includes('/notes/')) {
      console.log('✅ Successfully navigated to note editor!')

      // Check NoteEditor state
      const editorLoading = await page
        .getByTestId('note-editor-loading')
        .isVisible()
      const editorNotFound = await page
        .getByTestId('note-editor-not-found')
        .isVisible()
      const noteEditor = await page.getByTestId('note-editor').isVisible()

      console.log(`📝 Note editor loading: ${editorLoading}`)
      console.log(`📝 Note editor not found: ${editorNotFound}`)
      console.log(`📝 Note editor visible: ${noteEditor}`)

      if (noteEditor) {
        // Check for input elements
        const titleInput = await page
          .getByTestId('note-title-input')
          .isVisible()
        const contentTextarea = await page
          .getByTestId('note-content-textarea')
          .isVisible()
        console.log(`✏️ Title input visible: ${titleInput}`)
        console.log(`✏️ Content textarea visible: ${contentTextarea}`)
      }
    } else {
      console.log('❌ Navigation to note editor failed')

      // Check if there are any error messages
      const errorToasts = await page.locator('[role="alert"], .toast').count()
      console.log(`🚨 Error toasts visible: ${errorToasts}`)
    }

    // Print all console messages
    console.log('📋 Console messages:')
    consoleMessages.forEach((msg) => console.log(`  ${msg}`))

    console.log('🧭 Navigation events:')
    navigationEvents.forEach((event) => console.log(`  ${event}`))

    console.log('🚨 Failed requests:')
    failedRequests.forEach((req) => console.log(`  ${req}`))

    // Take final screenshot
    await page.screenshot({ path: 'note-creation-final.png' })
  })
})
