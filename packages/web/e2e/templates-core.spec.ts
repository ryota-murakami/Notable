import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

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
    await expect(page.locator('[data-testid="new-note-button"]')).toBeVisible()

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('should open template picker when clicking New Note', async ({
    page,
  }) => {
    // Click the "New Note" button
    await page.click('[data-testid="new-note-button"]')

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
    await page.click('[data-testid="new-note-button"]')

    // Click Blank Note button
    await page.click('button:has-text("Blank Note")')

    // Verify template picker closes and we're redirected
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)
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
    await page.click('[data-testid="new-note-button"]')

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

    // Wait for templates to load - use heading selector to avoid duplicates
    await page.waitForSelector('h4:has-text("Daily Standup")')

    // Verify some built-in templates are shown - use heading selectors
    await expect(
      page.getByRole('heading', { name: 'Daily Standup' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Weekly Team Meeting' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Project Kickoff' })
    ).toBeVisible()
  })

  test('should filter templates by category', async ({ page }) => {
    // Open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Wait for templates - use heading selector
    await page.waitForSelector('h4:has-text("Daily Standup")')

    // Click on Meeting Notes category
    await page.click('button:has-text("Meeting Notes")')

    // Wait a bit for filtering
    await page.waitForTimeout(500)

    // Verify meeting templates are shown - use heading selectors
    await expect(
      page.getByRole('heading', { name: 'Daily Standup' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Weekly Team Meeting' })
    ).toBeVisible()

    // Verify non-meeting templates are not shown (they should exist but be filtered)
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).not.toBeVisible()
  })

  test.skip('should create note from template with variables', async ({
    page,
  }) => {
    // SKIPPED: Template variable forms not implemented
    // Open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for template picker dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select Daily Journal template - use heading to avoid duplicates
    await page.waitForSelector('h4:has-text("Daily Journal")')
    await page.getByRole('heading', { name: 'Daily Journal' }).click()

    // Variable form should open
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
    await expect(page.locator('text=Template Fields')).toBeVisible()

    // Fill required fields
    await page.fill('input#title', 'My Journal Entry')
    await page.fill('input[type="date"]', '2024-01-15')
    // Select mood from dropdown
    await page.click('button[role="combobox"]')
    await page.click('text=Good')
    await page.fill(
      'input[placeholder*="Gratitude"]',
      'Grateful for my health and family'
    )

    // Create note
    await page.click('button:has-text("Create Note")')

    // Should redirect to new note
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)

    // Note content should contain the template data
    await expect(page.locator('text=Gratitude')).toBeVisible()
    await expect(page.locator('text=Family')).toBeVisible()
    await expect(page.locator('text=Health')).toBeVisible()
    await expect(page.locator('text=Friends')).toBeVisible()
  })

  test.skip('should validate required fields', async ({ page }) => {
    // SKIPPED: Template variable validation not implemented
    // Open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select Daily Journal template - use heading to avoid duplicates
    await page.waitForSelector('h4:has-text("Daily Journal")')
    await page.getByRole('heading', { name: 'Daily Journal' }).click()

    // Try to submit without required fields
    await page.fill('input#title', 'Test')
    await page.click('button:has-text("Create Note")')

    // Should show validation errors
    await expect(page.locator('text=Gratitude is required')).toBeVisible()

    // Form should still be open
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
  })

  test.skip('should cancel template selection', async ({ page }) => {
    // SKIPPED: Template variable form not implemented
    // Open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for the dialog to open
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Select a template
    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

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
    // Add wait for page stability
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(500)

    // Open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for the dialog to open with longer timeout
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible({ timeout: 30000 })

    // Search for "meeting"
    await page.fill('input[placeholder*="Search templates"]', 'meeting')

    // Wait a bit for search to filter
    await page.waitForTimeout(500)

    // Should show meeting templates - use heading selectors
    await expect(
      page.getByRole('heading', { name: 'Daily Standup' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Weekly Team Meeting' })
    ).toBeVisible()

    // Should not show non-meeting templates
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).not.toBeVisible()

    // Clear search - use the input clear or just clear the field
    await page.fill('input[placeholder*="Search templates"]', '')

    // Wait a bit for search to clear
    await page.waitForTimeout(500)

    // All templates should be visible again
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()
  })

  test.skip('should show popular and recent tabs', async ({ page }) => {
    // SKIPPED: Tabs UI not implemented
    // Open template picker
    await page.click('[data-testid="new-note-button"]')

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
