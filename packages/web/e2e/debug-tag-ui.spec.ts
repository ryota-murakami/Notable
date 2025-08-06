import { test } from '@playwright/test'

test('debug tag UI interaction', async ({ page }) => {
  // Listen to ALL console messages from the start
  page.on('console', (msg) => {
    console.info(`Console [${msg.type()}]:`, msg.text())
  })

  // Listen to network failures
  page.on('requestfailed', (request) => {
    console.info(
      `Request failed: ${request.method()} ${request.url()} - ${request.failure()?.errorText}`
    )
  })

  // Listen to responses
  page.on('response', (response) => {
    if (response.status() >= 400) {
      console.info(
        `HTTP Error: ${response.status()} ${response.statusText()} - ${response.url()}`
      )
    }
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

  // Navigate to the app
  await page.goto('http://localhost:4378/app')

  // Wait for app to load
  await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

  console.info('Before checking buttons on page')

  // List all buttons to see what's available
  const buttons = await page.locator('button').all()
  console.info('Found buttons:', buttons.length)

  for (let i = 0; i < Math.min(buttons.length, 10); i++) {
    const text = await buttons[i].textContent()
    const isVisible = await buttons[i].isVisible()
    console.info(`Button ${i}: "${text}" (visible: ${isVisible})`)
  }

  // Check what elements are actually on the page
  const allElements = await page.locator('*').count()
  console.info('Total elements on page:', allElements)

  // Check for specific elements that should be there
  const appShellExists = await page.locator('[data-testid="app-shell"]').count()
  const hasAppShell = await page
    .locator('[data-testid="app-shell"]')
    .isVisible()
  const hasSidebar = await page
    .locator('[role="navigation"], nav, aside')
    .count()
  const hasMain = await page.locator('main').count()

  console.info('App shell exists:', appShellExists, 'visible:', hasAppShell)
  console.info('Navigation/sidebar elements:', hasSidebar)
  console.info('Main elements:', hasMain)

  // Check if there are any React error boundaries or loading states
  const hasErrors = await page
    .locator('[role="alert"], .error, .loading')
    .count()
  const hasLoadingStates = await page
    .locator('[data-loading], .loading, .spinner')
    .count()

  console.info('Error elements:', hasErrors)
  console.info('Loading elements:', hasLoadingStates)

  // Check the actual HTML content
  const htmlContent = await page.content()
  const hasReactRoot = htmlContent.includes('__next')
  const hasDataTestid = htmlContent.includes('data-testid="app-shell"')

  console.info('Has React root (__next):', hasReactRoot)
  console.info('Has app-shell testid in HTML:', hasDataTestid)

  // Get the page content to see what's actually there
  const bodyText = await page.locator('body').textContent()
  console.info('Body text (first 200 chars):', bodyText?.substring(0, 200))

  // Take a screenshot to see the actual page
  await page.screenshot({ path: 'debug-page-content.png', fullPage: true })

  // Check if dialog exists before click
  const dialogsBefore = await page.locator('[role="dialog"]').count()
  console.info('Dialogs before click:', dialogsBefore)

  // Try to find the Manage Tags button with more permissive selectors
  const manageTagsButton1 = page.getByRole('button', { name: /manage tags/i })
  const manageTagsButton2 = page.locator('button:has-text("Manage Tags")')
  const manageTagsButton3 = page.locator('button', { hasText: 'Tags' })

  const count1 = await manageTagsButton1.count()
  const count2 = await manageTagsButton2.count()
  const count3 = await manageTagsButton3.count()

  console.info(
    'Button counts - name regex:',
    count1,
    'has-text:',
    count2,
    'hasText Tags:',
    count3
  )

  // If found, try clicking the button
  if (count2 > 0) {
    console.info('Clicking Manage Tags button...')
    await manageTagsButton2.click()
  } else if (count1 > 0) {
    console.info('Clicking Manage Tags button (regex)...')
    await manageTagsButton1.click()
  } else {
    console.info('Manage Tags button not found!')
  }

  // Wait a bit and check again
  await page.waitForTimeout(2000)

  // Check if dialog exists after click
  const dialogsAfter = await page.locator('[role="dialog"]').count()
  console.info('Dialogs after click:', dialogsAfter)

  // Try to find the specific dialog content
  const hasTagManagementDialog = await page
    .locator('text=Tag Management')
    .isVisible()
  console.info('Tag Management dialog visible:', hasTagManagementDialog)

  // Take a screenshot after clicking
  await page.screenshot({
    path: 'debug-tag-ui-after-click.png',
    fullPage: true,
  })

  // Check for any error messages
  const errorElements = await page.locator('[role="alert"]').count()
  console.info('Error alerts:', errorElements)

  // Add some client-side debugging
  await page.evaluate(() => {
    console.info(
      'Current React components on page:',
      Object.keys(window).filter((key) => key.startsWith('React'))
    )

    // Try to trigger a re-render check
    setTimeout(() => {
      const dialogs = document.querySelectorAll('[role="dialog"]')
      console.info('Dialogs found after timeout:', dialogs.length)
      dialogs.forEach((dialog, index) => {
        console.info(`Dialog ${index}:`, dialog.textContent?.substring(0, 100))
      })
    }, 1000)
  })
})
