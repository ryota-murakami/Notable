import { expect, test } from './fixtures/coverage'

test.describe('Mock Note Persistence Debug', () => {
  test('should debug mock note persistence step by step', async ({ page }) => {
    // SKIPPED: Debug test expecting wrong selectors and persistence behavior
    // Listen for console messages from the browser
    const consoleMessages: string[] = []
    page.on('console', (msg) => {
      const message = `[${msg.type()}] ${msg.text()}`
      consoleMessages.push(message)
      console.info(`🌐 Browser: ${message}`)
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
    await page.goto('http://localhost:4378/app')
    await expect(page.getByTestId('app-shell')).toBeVisible()

    console.info('🔄 Step 2: Create first note')
    await page.getByRole('button', { name: 'New Note' }).click({ force: true })
    await expect(page.getByTestId('template-picker')).toBeVisible()
    await page
      .getByRole('button', { name: 'Blank Note' })
      .click({ force: true })

    // Get note URL and ID
    await page.waitForURL('**/notes/**')
    const firstNoteUrl = page.url()
    const firstNoteId = firstNoteUrl.split('/notes/')[1]
    console.info(
      `📝 First note created: ID=${firstNoteId}, URL=${firstNoteUrl}`
    )

    console.info(
      '🔄 Step 3: Fill first note content using JavaScript to trigger React events'
    )
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Method 2: Use JavaScript to set value and trigger React onChange events manually
    await page.evaluate(() => {
      const titleInput = document.querySelector(
        '[data-testid="note-title-input"]'
      ) as HTMLInputElement
      const contentTextarea = document.querySelector(
        '[data-testid="note-content-textarea"]'
      ) as HTMLTextAreaElement

      if (titleInput) {
        titleInput.value = 'Debug Note 1'
        titleInput.dispatchEvent(new Event('input', { bubbles: true }))
        titleInput.dispatchEvent(new Event('change', { bubbles: true }))
      }

      if (contentTextarea) {
        contentTextarea.value = 'Content of debug note 1'
        contentTextarea.dispatchEvent(new Event('input', { bubbles: true }))
        contentTextarea.dispatchEvent(new Event('change', { bubbles: true }))
      }
    })

    // Add a delay to ensure React state updates are processed
    await page.waitForTimeout(1000)

    // Verify content is filled
    await expect(page.getByTestId('note-title-input')).toHaveValue(
      'Debug Note 1'
    )
    await expect(page.getByTestId('note-content-textarea')).toHaveValue(
      'Content of debug note 1'
    )
    console.info('✅ First note content verified')

    console.info('🔄 Step 4: Navigate away to app')
    await page.goto('http://localhost:4378/app')
    await expect(page.getByTestId('app-shell')).toBeVisible()
    console.info('✅ Navigated away from first note')

    console.info('🔄 Step 5: Navigate back to first note')
    await page.goto(firstNoteUrl)
    await expect(page.getByTestId('note-editor')).toBeVisible()

    // Check if isTest() function is working correctly
    const isTestResult = await page.evaluate(() => {
      return document.cookie.includes('dev-auth-bypass=true')
    })
    console.info(`🧪 isTest() check result: ${isTestResult}`)

    // Check localStorage for mock notes
    const localStorageContent = await page.evaluate(() => {
      return localStorage.getItem('mock-notes-store')
    })
    console.info(`💾 localStorage content: ${localStorageContent}`)

    // Check what values we actually get
    const actualTitle = await page.getByTestId('note-title-input').inputValue()
    const actualContent = await page
      .getByTestId('note-content-textarea')
      .inputValue()
    console.info(`📊 Actual values after navigation back:`)
    console.info(`  Title: "${actualTitle}"`)
    console.info(`  Content: "${actualContent}"`)

    console.info('🔄 Step 6: Check if persistence worked')
    if (
      actualTitle === 'Debug Note 1' &&
      actualContent === 'Content of debug note 1'
    ) {
      console.info('🎉 SUCCESS: Mock note persistence is working!')
    } else {
      console.info('❌ FAILED: Mock note persistence is not working')
      console.info(`  Expected title: "Debug Note 1", got: "${actualTitle}"`)
      console.info(
        `  Expected content: "Content of debug note 1", got: "${actualContent}"`
      )
    }

    // Take screenshot for debugging
    await page.screenshot({ path: 'mock-note-persistence-debug.png' })
  })
})
