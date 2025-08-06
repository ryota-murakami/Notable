import { test } from '@playwright/test'

test('debug note loading issue', async ({ page }) => {
  // Capture all console messages and errors
  page.on('console', (msg) => {
    console.info(`[BROWSER] ${msg.type()}: ${msg.text()}`)
  })

  page.on('pageerror', (error) => {
    console.info(
      `[PAGE ERROR] ${error instanceof Error ? error.message : String(error)}`
    )
    console.info(`[PAGE ERROR STACK] ${error.stack}`)
  })

  // Set dev auth bypass cookie for testing
  await page.context().addCookies([
    {
      name: 'dev-auth-bypass',
      value: 'true',
      domain: 'localhost',
      path: '/',
    },
  ])

  console.info('🚀 Testing note loading directly...')

  // Navigate directly to a mock note ID
  const mockNoteId = `mock-note-${Date.now()}`
  await page.goto(`http://localhost:4378/notes/${mockNoteId}`)
  await page.waitForLoadState('networkidle')

  console.info(`📍 Navigated to note: ${mockNoteId}`)
  console.info(`📍 Current URL: ${page.url()}`)

  // Wait a bit for React to render
  await page.waitForTimeout(3000)

  // Check what's actually on the page
  const pageContent = await page.content()
  console.info('📄 Page title:', await page.title())
  console.info(
    '📄 Page contains "Loading note":',
    pageContent.includes('Loading note')
  )
  console.info(
    '📄 Page contains "note-title-input":',
    pageContent.includes('note-title-input')
  )
  console.info(
    '📄 Page contains "note-content-textarea":',
    pageContent.includes('note-content-textarea')
  )

  // Try to find elements
  const titleInput = page.locator('[data-testid="note-title-input"]')
  const contentTextarea = page.locator('[data-testid="note-content-textarea"]')
  const loadingSpinner = page.locator('text=Loading note...')
  const noteEditor = page.locator('[data-testid="note-editor-container"]')

  const titleVisible = await titleInput.isVisible().catch(() => false)
  const contentVisible = await contentTextarea.isVisible().catch(() => false)
  const loadingVisible = await loadingSpinner.isVisible().catch(() => false)
  const editorVisible = await noteEditor.isVisible().catch(() => false)

  console.info(`🔍 Element visibility:`)
  console.info(`  - Title input: ${titleVisible}`)
  console.info(`  - Content textarea: ${contentVisible}`)
  console.info(`  - Loading spinner: ${loadingVisible}`)
  console.info(`  - Note editor container: ${editorVisible}`)

  // Take screenshot
  await page.screenshot({ path: 'debug-note-loading.png', fullPage: true })

  // Try to get more debugging info from the page
  const debugInfo = await page.evaluate(() => {
    return {
      location: window.location.href,
      testMode: (window as any).__NEXT_PUBLIC_API_MOCKING === 'enabled',
      devAuthBypass: document.cookie.includes('dev-auth-bypass=true'),
      elements: {
        appShell: !!document.querySelector('[data-testid="app-shell"]'),
        noteEditor: !!document.querySelector(
          '[data-testid="note-editor-container"]'
        ),
        titleInput: !!document.querySelector(
          '[data-testid="note-title-input"]'
        ),
        contentTextarea: !!document.querySelector(
          '[data-testid="note-content-textarea"]'
        ),
        loadingText:
          document.body.textContent?.includes('Loading note...') || false,
        richTextEditor: !!document.querySelector(
          '[data-testid="rich-text-editor"]'
        ),
        noteEditorContainer: !!document.querySelector(
          '[data-testid="note-editor"]'
        ),
      },
      textContent: `${document.body.textContent?.substring(0, 500)}...`, // First 500 chars
      reactVersion: (window as any).React?.version || 'not found',
    }
  })

  console.info('🔧 Debug info:', JSON.stringify(debugInfo, null, 2))

  console.info('🏁 Debug test finished')
})
