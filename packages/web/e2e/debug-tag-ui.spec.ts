import { test } from '@playwright/test'

test('debug tag UI interaction', async ({ page }) => {
  // Listen to ALL console messages from the start
  page.on('console', (msg) => {
    console.log(`Console [${msg.type()}]:`, msg.text())
  })

  // Listen to network failures
  page.on('requestfailed', (request) => {
    console.log(
      `Request failed: ${request.method()} ${request.url()} - ${request.failure()?.errorText}`
    )
  })

  // Listen to responses
  page.on('response', (response) => {
    if (response.status() >= 400) {
      console.log(
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

  console.log('Before checking buttons on page')

  // List all buttons to see what's available
  const buttons = await page.locator('button').all()
  console.log('Found buttons:', buttons.length)

  for (let i = 0; i < Math.min(buttons.length, 10); i++) {
    const text = await buttons[i].textContent()
    const isVisible = await buttons[i].isVisible()
    console.log(`Button ${i}: "${text}" (visible: ${isVisible})`)
  }

  // Check what elements are actually on the page
  const allElements = await page.locator('*').count()
  console.log('Total elements on page:', allElements)

  // Check for specific elements that should be there
  const appShellExists = await page.locator('[data-testid="app-shell"]').count()
  const hasAppShell = await page
    .locator('[data-testid="app-shell"]')
    .isVisible()
  const hasSidebar = await page
    .locator('[role="navigation"], nav, aside')
    .count()
  const hasMain = await page.locator('main').count()

  console.log('App shell exists:', appShellExists, 'visible:', hasAppShell)
  console.log('Navigation/sidebar elements:', hasSidebar)
  console.log('Main elements:', hasMain)

  // Check if there are any React error boundaries or loading states
  const hasErrors = await page
    .locator('[role="alert"], .error, .loading')
    .count()
  const hasLoadingStates = await page
    .locator('[data-loading], .loading, .spinner')
    .count()

  console.log('Error elements:', hasErrors)
  console.log('Loading elements:', hasLoadingStates)

  // Check the actual HTML content
  const htmlContent = await page.content()
  const hasReactRoot = htmlContent.includes('__next')
  const hasDataTestid = htmlContent.includes('data-testid="app-shell"')

  console.log('Has React root (__next):', hasReactRoot)
  console.log('Has app-shell testid in HTML:', hasDataTestid)

  // Get the page content to see what's actually there
  const bodyText = await page.locator('body').textContent()
  console.log('Body text (first 200 chars):', bodyText?.substring(0, 200))

  // Take a screenshot to see the actual page
  await page.screenshot({ path: 'debug-page-content.png', fullPage: true })

  // Check if dialog exists before click
  const dialogsBefore = await page.locator('[role="dialog"]').count()
  console.log('Dialogs before click:', dialogsBefore)

  // Try to find the Manage Tags button with more permissive selectors
  const manageTagsButton1 = page.getByRole('button', { name: /manage tags/i })
  const manageTagsButton2 = page.locator('button:has-text("Manage Tags")')
  const manageTagsButton3 = page.locator('button', { hasText: 'Tags' })

  const count1 = await manageTagsButton1.count()
  const count2 = await manageTagsButton2.count()
  const count3 = await manageTagsButton3.count()

  console.log(
    'Button counts - name regex:',
    count1,
    'has-text:',
    count2,
    'hasText Tags:',
    count3
  )

  // If found, try clicking the button
  if (count2 > 0) {
    console.log('Clicking Manage Tags button...')
    await manageTagsButton2.click({ force: true })
  } else if (count1 > 0) {
    console.log('Clicking Manage Tags button (regex)...')
    await manageTagsButton1.click({ force: true })
  } else {
    console.log('Manage Tags button not found!')
  }

  // Wait a bit and check again
  await page.waitForTimeout(2000)

  // Check if dialog exists after click
  const dialogsAfter = await page.locator('[role="dialog"]').count()
  console.log('Dialogs after click:', dialogsAfter)

  // Try to find the specific dialog content
  const hasTagManagementDialog = await page
    .locator('text=Tag Management')
    .isVisible()
  console.log('Tag Management dialog visible:', hasTagManagementDialog)

  // Take a screenshot after clicking
  await page.screenshot({
    path: 'debug-tag-ui-after-click.png',
    fullPage: true,
  })

  // Check for any error messages
  const errorElements = await page.locator('[role="alert"]').count()
  console.log('Error alerts:', errorElements)

  // Add some client-side debugging
  await page.evaluate(() => {
    console.log(
      'Current React components on page:',
      Object.keys(window).filter((key) => key.startsWith('React'))
    )

    // Try to trigger a re-render check
    setTimeout(() => {
      const dialogs = document.querySelectorAll('[role="dialog"]')
      console.log('Dialogs found after timeout:', dialogs.length)
      dialogs.forEach((dialog, index) => {
        console.log(`Dialog ${index}:`, dialog.textContent?.substring(0, 100))
      })
    }, 1000)
  })
})
