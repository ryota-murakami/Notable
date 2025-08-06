import { expect, test } from './fixtures/coverage'

test.describe('Editor Basic Coverage', () => {
  test('should debug template picker behavior', async ({ page }) => {
    // Listen for console messages and errors
    const consoleMessages: string[] = []
    const pageErrors: string[] = []

    page.on('console', (msg) => {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`)
    })

    page.on('pageerror', (error) => {
      pageErrors.push(
        `Page error: ${error instanceof Error ? error.message : String(error)}`
      )
    })

    page.on('requestfailed', (request) => {
      consoleMessages.push(
        `Failed request: ${request.method()} ${request.url()} - ${request.failure()?.errorText}`
      )
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

    // Try root route first
    await page.goto('http://localhost:4378/', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })

    // Take screenshot to see what's on page
    await page.screenshot({ path: 'page-state.png' })

    // Log page content for debugging
    const pageTitle = await page.title()
    const pageContent = await page.locator('body').textContent()
    console.info(`📄 Page title: ${pageTitle}`)
    console.info(
      `📄 Page content (first 200 chars): ${pageContent?.substring(0, 200)}`
    )

    // Check if there are any elements with testid
    const testIdElements = await page.locator('[data-testid]').count()
    console.info(`🔍 Elements with data-testid: ${testIdElements}`)

    // Wait for app shell
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 30000 })

    // Take screenshot before clicking
    await page.screenshot({ path: 'before-click.png' })

    // Check for new note button
    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await expect(newNoteButton).toBeVisible()

    console.info('📋 Clicking New Note button...')
    await newNoteButton.click({ force: true })

    // Wait for any modal or dialog to appear
    await page.waitForTimeout(3000)

    // Take screenshot after clicking
    await page.screenshot({ path: 'after-click.png' })

    // Check if template picker dialog exists
    const templatePickerExists = await page
      .locator('[role="dialog"]:has-text("Choose a Template")')
      .count()
    console.info(`🔍 Template picker dialogs found: ${templatePickerExists}`)

    // Check for any dialogs
    const dialogs = await page.locator('[role="dialog"]').count()
    console.info(`🔍 Total dialogs found: ${dialogs}`)

    // Check network requests to template APIs
    const templateRequests = consoleMessages.filter((msg) =>
      msg.includes('/api/templates')
    )
    console.info(`🌐 Template API requests: ${templateRequests.length}`)
    templateRequests.forEach((req) => console.info(`   ${req}`))

    // Print all console messages
    console.info('📝 Console messages:')
    consoleMessages.forEach((msg) => console.info(`   ${msg}`))

    // Print page errors
    if (pageErrors.length > 0) {
      console.info('❌ Page errors:')
      pageErrors.forEach((error) => console.info(`   ${error}`))
    }

    // If template picker is visible, great!
    if (templatePickerExists > 0) {
      console.info('✅ Template picker is working!')

      // First, try to see if templates are loaded
      const templateCards = await page
        .locator(
          '[data-testid*="template"], .template-card, [class*="template"]'
        )
        .count()
      console.info(`📋 Template cards visible: ${templateCards}`)

      // Check for specific template content
      const quickNoteTemplate = page.getByRole('heading', {
        name: 'Quick Note',
      })
      const quickNoteVisible = await quickNoteTemplate.isVisible()
      console.info(`📝 'Quick Note' template visible: ${quickNoteVisible}`)

      // Try clicking a template first (if visible)
      if (quickNoteVisible) {
        console.info('🖱️  Clicking Quick Note template...')
        // Click the template card itself, not just the heading
        const templateCard = quickNoteTemplate.locator('..').locator('..')
        await templateCard.click({ force: true })
        await page.waitForTimeout(3000)
        console.info(`🔗 URL after template click: ${page.url()}`)
      }

      // If templates aren't working, try blank note
      const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
      if (await blankNoteButton.isVisible()) {
        console.info('🖱️  Clicking Blank Note button...')
        await blankNoteButton.click({ force: true })
        await page.waitForTimeout(3000)
        const currentUrl = page.url()
        console.info(`🔗 Current URL after blank note: ${currentUrl}`)

        // Check if an editor appeared
        const editorVisible = await page
          .locator('[contenteditable="true"]')
          .isVisible()
        console.info(`✏️  Editor visible after blank note: ${editorVisible}`)
      }
    } else {
      console.info(
        '❌ Template picker not found - investigating API responses...'
      )
    }
  })
})
