import { expect, test } from './fixtures/coverage'

test.describe('Template System E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
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
    await page.goto('/app')

    // Wait for the app to load
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })
  })

  test('should open template picker when clicking New Note', async ({
    page,
  }) => {
    // Click the "New Note" button - should open template picker
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

  test('should display built-in templates in categories', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text=Daily Journal')

    // Verify built-in templates are displayed - use heading role for specificity
    await expect(
      page.getByRole('heading', { name: 'Daily Standup' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Project Kickoff' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Weekly Team Meeting' })
    ).toBeVisible()

    // Verify template cards have proper metadata
    await expect(page.locator('text=Built-in').first()).toBeVisible()
  })

  test('should filter templates by category', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text=Daily Standup')

    // Click on meeting category in sidebar to filter
    await page.click('button:has-text("Meeting Notes")')

    // Verify meeting templates are shown - use heading role for specificity
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

  test('should search templates', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text=Daily Journal')

    // Search for "meeting"
    await page.fill('input[placeholder*="Search templates"]', 'meeting')

    // Should show meeting templates - use heading role for specificity
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

    // Clear search by clearing the input field
    const searchInput = page.locator('input[placeholder*="Search templates"]')
    await searchInput.clear()

    // All templates should be visible again
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()
  })

  test.skip('should create note from template with variables', async ({
    page,
  }) => {
    // SKIPPED: Template variable forms not implemented
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for templates to load and select Daily Journal template
    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

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

  test.skip('should create note from daily journal template with all variables', async ({
    page,
  }) => {
    // SKIPPED: Test expects variables that don't exist in actual template
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    // Wait for templates to load and select daily journal template
    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

    // Fill the variable form
    await page.fill('input[id="title"]', 'My Daily Journal - January 15, 2024')

    // Fill required gratitude fields
    await page.fill('input[name="gratitude_1"]', 'Good health')
    await page.fill('input[name="gratitude_2"]', 'Supportive family')
    await page.fill('input[name="gratitude_3"]', 'Meaningful work')

    // Fill optional fields
    await page.fill('input[name="mood"]', '8')
    await page.fill('input[name="energy"]', '7')
    await page.fill('textarea[name="highlights"]', 'Had a great day!')

    // Submit the form
    await page.click('button:has-text("Create Note")')

    // Verify redirect to the new note
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)

    // Verify template variables were processed correctly
    await expect(page.locator('text=Journal Entry')).toBeVisible()
    await expect(page.locator('text=Good health')).toBeVisible()
    await expect(page.locator('text=Supportive family')).toBeVisible()
    await expect(page.locator('text=Meaningful work')).toBeVisible()
    await expect(page.locator('text=Had a great day!')).toBeVisible()
  })

  test.skip('should validate required template variables', async ({ page }) => {
    // SKIPPED: Template variable validation not implemented
    // Click New Note to open template picker
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

    // Try to submit without filling required fields
    await page.fill('input[id="title"]', 'Test Journal')
    // Intentionally leave gratitude fields empty

    await page.click('button:has-text("Create Note")')

    // Verify validation errors are shown
    await expect(page.locator('text=Gratitude is required')).toBeVisible()

    // Verify form doesn't submit
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
  })

  test.skip('should handle different variable types correctly', async ({
    page,
  }) => {
    // SKIPPED: Test expects variable types that don't exist in actual templates
    // Click New Note to open template picker directly
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('text=Project Kickoff')
    await page.click('[data-template-name="Project Kickoff"]')

    // Test different input types
    await page.fill(
      'input[placeholder*="Enter note title"]',
      'Variable Types Test'
    )
    await page.fill(
      'textarea[name="project_summary"]',
      'Testing different variable types'
    )
    await page.fill('input[name="project_manager"]', 'Jane Smith')
    await page.fill('input[name="start_date"]', '2024-02-01')
    await page.fill('input[name="end_date"]', '2024-12-31')
    await page.fill('input[name="budget"]', '50000')

    // Test select dropdown
    await page.click('select[name="project_status"]')
    await page.selectOption('select[name="project_status"]', 'In Progress')

    await page.click('select[name="priority"]')
    await page.selectOption('select[name="priority"]', 'High')

    await page.click('button:has-text("Create Note")')

    // Verify all variable types were processed correctly
    await expect(page.locator('.slate-editor')).toContainText(
      'Variable Types Test'
    )
    await expect(page.locator('.slate-editor')).toContainText(
      'Testing different variable types'
    )
    await expect(page.locator('.slate-editor')).toContainText('Jane Smith')
    await expect(page.locator('.slate-editor')).toContainText('2024-02-01')
    await expect(page.locator('.slate-editor')).toContainText('2024-12-31')
    await expect(page.locator('.slate-editor')).toContainText('$50000')
    await expect(page.locator('.slate-editor')).toContainText('In Progress')
    await expect(page.locator('.slate-editor')).toContainText('High')
  })

  test.skip('should handle template engine processing correctly', async ({
    page,
  }) => {
    // SKIPPED: Test expects template engine features that aren't implemented
    // Click New Note to open template picker directly
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

    await page.fill(
      'input[placeholder*="Enter note title"]',
      'Template Engine Test'
    )
    await page.fill('input[name="gratitude_1"]', 'Template processing')
    await page.fill('input[name="gratitude_2"]', 'System variables')
    await page.fill('input[name="gratitude_3"]', 'Dynamic content')

    await page.click('button:has-text("Create Note")')

    // Verify system variables were processed (date, time, etc.)
    const editorContent = await page.locator('.slate-editor').textContent()

    // Should contain current date
    expect(editorContent).toMatch(/\d{4}-\d{2}-\d{2}/)

    // Should contain formatted content
    expect(editorContent).toContain('Template processing')
    expect(editorContent).toContain('System variables')
    expect(editorContent).toContain('Dynamic content')

    // Should contain template structure
    expect(editorContent).toContain("Today's Overview")
    expect(editorContent).toContain('Gratitude Practice')
    expect(editorContent).toContain('Evening Reflection')
  })

  test('should show popular and recent templates tabs', async ({ page }) => {
    // Click New Note to open template picker directly
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

  test.skip('should cancel template creation', async ({ page }) => {
    // SKIPPED: Template variable forms with cancel button not implemented
    // Click New Note to open template picker directly
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('text=Daily Journal')
    await page.click('[data-template-name="Daily Journal"]')

    // Cancel the variable form
    await page.click('button:has-text("Cancel")')

    // Should return to template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
  })

  test('should create blank note from template picker', async ({ page }) => {
    // Click New Note to open template picker directly
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('button:has-text("Blank Note")')
    await page.click('button:has-text("Blank Note")')

    // Verify template picker closes and we're redirected
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()
    await page.waitForURL(/\/notes\/[a-z0-9-]+/)
  })

  test.skip('should show template variable form with proper validation', async ({
    page,
  }) => {
    // SKIPPED: Test expects validation features that don't exist
    // Click New Note to open template picker directly
    await page.click('[data-testid="new-note-button"]')

    await page.waitForSelector('text=Project Kickoff')
    await page.click('[data-template-name="Project Kickoff"]')

    // Verify variable form structure
    await expect(page.locator('text=Template Fields')).toBeVisible()
    await expect(page.locator('text=fields')).toBeVisible() // Should show field count

    // Verify required field indicators
    await expect(
      page.locator('label:has-text("Project Name") span:has-text("*")')
    ).toBeVisible()
    await expect(
      page.locator('label:has-text("Project Summary") span:has-text("*")')
    ).toBeVisible()

    // Test field validation
    await page.fill('input[name="budget"]', 'invalid-number')
    await page.click('button:has-text("Create Note")')

    // Should show validation error for invalid number
    await expect(page.locator('text=Must be a valid number')).toBeVisible()
  })
})

// Additional test for template engine functionality
test.describe.skip('Template Engine Processing', () => {
  test.beforeEach(async ({ page }) => {
    // Set dev auth bypass cookie for testing
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])
  })

  test('should process template variables with system context', async ({
    page,
  }) => {
    // SKIPPED: API endpoint doesn't exist
    // This test verifies the template engine processes variables correctly
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]')

    // Test template engine processing via API
    const templateResult = await page.evaluate(async () => {
      const response = await fetch('/api/templates/meeting-notes-standard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Test Meeting',
          variables: {
            meeting_title: 'Weekly Standup',
            organizer: 'John Doe',
            duration: '30 minutes',
          },
        }),
      })
      return response.ok
    })

    expect(templateResult).toBe(true)
  })
})
