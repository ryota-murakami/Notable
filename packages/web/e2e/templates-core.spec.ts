import { expect, test } from './fixtures/coverage'

test.describe('Template System Core Tests', () => {
  test('debug - check API auth', async ({ page }) => {
    // Set auth cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Try to access template API directly
    const response = await page.goto('/api/templates/categories')
    console.log('Direct API access status:', response?.status())

    const body = await response?.text()
    console.log('API response body:', body)
  })
  test.beforeEach(async ({ page }) => {
    // Set auth cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'Lax',
      },
    ])

    // Navigate to the app
    await page.goto('/app')

    // Wait for the app to load
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('button', { name: 'New Note' })).toBeVisible()
  })

  test('should open template picker when clicking New Note', async ({
    page,
  }) => {
    // Click the "New Note" button
    await page.click('button:has-text("New Note")')

    // Verify template picker dialog opens
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Verify key elements are present
    await expect(
      page.locator('text=Get started quickly with professional templates')
    ).toBeVisible()
    await expect(page.locator('button:has-text("Blank Note")')).toBeVisible()
    await expect(
      page.locator('input[placeholder*="Search templates"]')
    ).toBeVisible()
  })

  test('should create blank note from template picker', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Click Blank Note button
    await page.click('button:has-text("Blank Note")')

    // Verify template picker closes and we're redirected
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()
    await page.waitForURL(/\/notes\/\w+/)
  })

  test('should display built-in templates', async ({ page }) => {
    // Monitor API responses
    const apiResponses: any[] = []
    page.on('response', (response) => {
      if (response.url().includes('/api/templates')) {
        apiResponses.push({
          url: response.url(),
          status: response.status(),
          ok: response.ok(),
        })
      }
    })

    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Wait a bit for API calls
    await page.waitForTimeout(2000)

    // Log API responses
    console.log('Template API responses:', apiResponses)

    // Check if we see "No templates found"
    const noTemplatesVisible = await page
      .locator('text=No templates found')
      .isVisible()
    console.log('No templates found visible:', noTemplatesVisible)

    // Wait for templates to load
    await page.waitForSelector('text=Daily Standup')

    // Verify some built-in templates are shown
    await expect(page.locator('text=Daily Standup')).toBeVisible()
    await expect(page.locator('text=Weekly Team Meeting')).toBeVisible()
    await expect(page.locator('text=Daily Journal')).toBeVisible()
    await expect(page.locator('text=Project Kickoff')).toBeVisible()
  })

  test('should filter templates by category', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Wait for templates
    await page.waitForSelector('text=Daily Standup')

    // Click on Meeting Notes category
    await page.click('button:has-text("Meeting Notes")')

    // Verify meeting templates are shown
    await expect(page.locator('text=Daily Standup')).toBeVisible()
    await expect(page.locator('text=Weekly Team Meeting')).toBeVisible()

    // Verify non-meeting templates are not shown (they should exist but be filtered)
    await expect(page.locator('text=Daily Journal')).not.toBeVisible()
  })

  test('should create note from template with variables', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for template picker dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select Daily Journal template
    await page.waitForSelector('text=Daily Journal')
    await page.click('div:has-text("Daily Journal").group')

    // Variable form should open
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
    await expect(page.locator('text=Template Fields')).toBeVisible()

    // Fill required fields
    await page.fill('input#title', 'My Journal Entry')
    await page.fill('input[name="gratitude_1"]', 'Family')
    await page.fill('input[name="gratitude_2"]', 'Health')
    await page.fill('input[name="gratitude_3"]', 'Friends')
    await page.fill('input[name="mood"]', '8')
    await page.fill('input[name="energy"]', '7')
    await page.fill('textarea[name="highlights"]', 'Had a productive day')

    // Create note
    await page.click('button:has-text("Create Note")')

    // Should redirect to new note
    await page.waitForURL(/\/notes\/\w+/)

    // Note content should contain the template data
    await expect(page.locator('text=Gratitude')).toBeVisible()
    await expect(page.locator('text=Family')).toBeVisible()
    await expect(page.locator('text=Health')).toBeVisible()
    await expect(page.locator('text=Friends')).toBeVisible()
  })

  test('should validate required fields', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select Daily Journal template
    await page.waitForSelector('text=Daily Journal')
    await page.click('div:has-text("Daily Journal").group')

    // Try to submit without required fields
    await page.fill('input#title', 'Test')
    await page.click('button:has-text("Create Note")')

    // Should show validation errors
    await expect(page.locator('text=Gratitude 1 is required')).toBeVisible()

    // Form should still be open
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
  })

  test('should cancel template selection', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select a template
    await page.waitForSelector('text=Daily Journal')
    await page.click('div:has-text("Daily Journal").group')

    // Cancel the form
    await page.click('button:has-text("Cancel")')

    // Should return to template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Press Escape to close template picker
    await page.keyboard.press('Escape')

    // Template picker should close
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()
  })

  test('should search templates', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Search for "meeting"
    await page.fill('input[placeholder*="Search templates"]', 'meeting')

    // Should show meeting templates
    await expect(page.locator('text=Daily Standup')).toBeVisible()
    await expect(page.locator('text=Weekly Team Meeting')).toBeVisible()

    // Should not show non-meeting templates
    await expect(page.locator('text=Daily Journal')).not.toBeVisible()

    // Clear search
    await page.click('button[aria-label*="Clear"]')

    // All templates should be visible again
    await expect(page.locator('text=Daily Journal')).toBeVisible()
  })

  test('should show popular and recent tabs', async ({ page }) => {
    // Open template picker
    await page.click('button:has-text("New Note")')

    // Check tabs exist
    await expect(
      page.locator('button[role="tab"]:has-text("Browse")')
    ).toBeVisible()
    await expect(
      page.locator('button[role="tab"]:has-text("Popular")')
    ).toBeVisible()
    await expect(
      page.locator('button[role="tab"]:has-text("Recent")')
    ).toBeVisible()

    // Click Popular tab
    await page.click('button[role="tab"]:has-text("Popular")')
    await expect(page.locator('text=Most Popular Templates')).toBeVisible()

    // Click Recent tab
    await page.click('button[role="tab"]:has-text("Recent")')
    await expect(page.locator('text=Recently Added')).toBeVisible()
  })
})
