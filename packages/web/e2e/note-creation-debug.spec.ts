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

    console.info('🔄 Step 1: Navigate to app')
    await page.goto('http://localhost:4378/app', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })

    console.info('🔄 Step 2: Wait for app shell')
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    console.info('🔄 Step 3: Click New Note button')
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await expect(newNoteButton).toBeVisible()
    await newNoteButton.click()

    console.info('🔄 Step 4: Wait for template picker')
    const templatePicker = page.getByTestId('template-picker')
    await expect(templatePicker).toBeVisible({ timeout: 10000 })

    console.info('🔄 Step 5: Click Blank Note button')
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await expect(blankNoteButton).toBeVisible()

    // Get current URL before clicking
    const urlBeforeClick = page.url()
    console.info(`📍 URL before Blank Note click: ${urlBeforeClick}`)

    await blankNoteButton.click()

    console.info('🔄 Step 6: Wait for navigation and check results')
    // Wait for page to be ready after navigation
    await page.waitForLoadState('networkidle', { timeout: 10000 })
    await page.waitForTimeout(1000) // Reduced from 5000ms

    const urlAfterClick = page.url()
    console.info(`📍 URL after Blank Note click: ${urlAfterClick}`)

    // Check if URL changed to notes route
    const urlChanged = urlBeforeClick !== urlAfterClick
    console.info(`🔄 URL changed: ${urlChanged}`)

    if (urlChanged && urlAfterClick.includes('/notes/')) {
      console.info('✅ Successfully navigated to note editor!')

      // Check NoteEditor state
      const editorLoading = await page
        .getByTestId('note-editor-loading')
        .isVisible()
      const editorNotFound = await page
        .getByTestId('note-editor-not-found')
        .isVisible()
      const noteEditor = await page.getByTestId('note-editor').isVisible()

      console.info(`📝 Note editor loading: ${editorLoading}`)
      console.info(`📝 Note editor not found: ${editorNotFound}`)
      console.info(`📝 Note editor visible: ${noteEditor}`)

      if (noteEditor) {
        // Check for input elements
        const titleInput = await page
          .getByTestId('note-title-input')
          .isVisible()
        const contentTextarea = await page
          .getByTestId('note-content-textarea')
          .isVisible()
        console.info(`✏️ Title input visible: ${titleInput}`)
        console.info(`✏️ Content textarea visible: ${contentTextarea}`)
      }
    } else {
      console.info('❌ Navigation to note editor failed')

      // Check if there are any error messages
      const errorToasts = await page.locator('[role="alert"], .toast').count()
      console.info(`🚨 Error toasts visible: ${errorToasts}`)
    }

    // Print all console messages
    console.info('📋 Console messages:')
    consoleMessages.forEach((msg) => console.info(`  ${msg}`))

    console.info('🧭 Navigation events:')
    navigationEvents.forEach((event) => console.info(`  ${event}`))

    console.info('🚨 Failed requests:')
    failedRequests.forEach((req) => console.info(`  ${req}`))

    // Take final screenshot
    await page.screenshot({ path: 'note-creation-final.png' })
  })
})
