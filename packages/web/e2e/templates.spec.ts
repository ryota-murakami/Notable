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
    await page.click('button:has-text("New Note")')

    // Verify template picker dialog opens
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Verify categories are loaded
    await expect(page.locator('text=CATEGORIES')).toBeVisible()
    await expect(page.locator('button:has-text("All Templates")')).toBeVisible()
  })

  test('should display built-in templates in categories', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text="Daily Journal"')

    // Verify built-in templates are displayed (use heading selectors to avoid duplicates)
    await expect(
      page.getByRole('heading', { name: 'Daily Standup' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Project Kickoff' })
    ).toBeVisible()

    // Verify template cards have proper metadata
    await expect(page.locator('text=Built-in').first()).toBeVisible()
  })

  test('should filter templates by category', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text="Daily Journal"')

    // Verify all category sections are visible initially
    await expect(page.locator('text="📝Personal"')).toBeVisible()
    await expect(page.locator('text="👥Meeting Notes"')).toBeVisible()
    await expect(page.locator('text="📁Projects"')).toBeVisible()

    // Click on meeting category in sidebar to filter
    await page.click('button:has-text("Meeting Notes")')
    await page.waitForTimeout(500) // Wait for filter to apply

    // Verify meeting templates are still displayed
    await expect(page.locator('text="Daily Standup"')).toBeVisible()
    await expect(page.locator('text="Weekly Team Meeting"')).toBeVisible()
  })

  test('should search templates', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    // Wait for template picker to open and templates to load
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page.waitForSelector('text="Daily Journal"')

    // Search for "journal" templates
    await page.fill('input[placeholder*="Search templates"]', 'journal')
    await page.waitForTimeout(500) // Wait for search to apply

    // Verify search results (use heading selector to avoid duplicates)
    await expect(
      page.getByRole('heading', { name: 'Daily Journal' })
    ).toBeVisible()

    // Verify non-matching templates are hidden
    const visibleCards = await page
      .locator('[role="button"]:has(.text-sm.font-medium):visible')
      .count()
    expect(visibleCards).toBeLessThanOrEqual(2) // Should show only journal-related templates
  })

  test('should create note from template with variables', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    // Wait for templates to load and select a simple template
    await page.waitForSelector('[data-testid="template-card-project-kickoff"]')

    // Select a template with variables - force click
    await page
      .locator('[data-testid="template-card-project-kickoff"]')
      .click({ force: true })

    // Should open variable form
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()

    // Fill required fields
    await page.fill('input[id="title"]', 'My Test Project')
    await page.fill('input[name="project_name"]', 'Test Project')
    await page.fill('input[name="project_lead"]', 'John Doe')
    await page.fill('input[name="start_date"]', '2024-01-01')
    await page.fill('input[name="end_date"]', '2024-12-31')
    await page.fill(
      'textarea[name="project_description"]',
      'This is a test project'
    )

    // Submit the form
    await page.click('button:has-text("Create Note")')

    // Verify redirect to the new note
    await page.waitForURL(/\/notes\/\w+/)

    // Verify template content was processed
    await expect(page.locator('text=Project: Test Project')).toBeVisible()
    await expect(page.locator('text=John Doe')).toBeVisible()
    await expect(page.locator('text=This is a test project')).toBeVisible()
  })

  test('should create note from daily journal template with all variables', async ({
    page,
  }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    // Wait for templates to load and select daily journal template
    await page.waitForSelector('[data-testid="template-card-daily-journal"]')
    await page
      .locator('[data-testid="template-card-daily-journal"]')
      .scrollIntoViewIfNeeded()
    await page.click('[data-testid="template-card-daily-journal"]')

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
    await page.waitForURL(/\/notes\/\w+/)

    // Verify template variables were processed correctly
    await expect(page.locator('text=Journal Entry')).toBeVisible()
    await expect(page.locator('text=Good health')).toBeVisible()
    await expect(page.locator('text=Supportive family')).toBeVisible()
    await expect(page.locator('text=Meaningful work')).toBeVisible()
    await expect(page.locator('text=Had a great day!')).toBeVisible()
  })

  test('should validate required template variables', async ({ page }) => {
    // Click New Note to open template picker
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-daily-journal"]')
    await page
      .locator('[data-testid="template-card-daily-journal"]')
      .scrollIntoViewIfNeeded()
    await page.click('[data-testid="template-card-daily-journal"]')

    // Try to submit without filling required fields
    await page.fill('input[id="title"]', 'Test Journal')
    // Intentionally leave gratitude fields empty

    await page.click('button:has-text("Create Note")')

    // Verify validation errors are shown
    await expect(page.locator('text=Gratitude 1 is required')).toBeVisible()
    await expect(page.locator('text=Gratitude 2 is required')).toBeVisible()
    await expect(page.locator('text=Gratitude 3 is required')).toBeVisible()

    // Verify form doesn't submit
    await expect(
      page.locator('[role="dialog"]:has-text("Create from Template")')
    ).toBeVisible()
  })

  test('should handle different variable types correctly', async ({ page }) => {
    // Click New Note to open template picker directly
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-project-kickoff"]')
    await page.click('[data-testid="template-card-project-kickoff"]')

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

  test('should handle template engine processing correctly', async ({
    page,
  }) => {
    // Click New Note to open template picker directly
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-daily-journal"]')
    await page.click('[data-testid="template-card-daily-journal"]')

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
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-daily-journal"]')

    // Test Popular tab
    await page.click('text=Popular')
    await page.waitForSelector('[data-testid="template-card"]')

    // Should show popular templates with usage stats
    const popularCard = page.locator('[data-testid^="template-card-"]').first()
    await expect(popularCard.locator('text=uses')).toBeVisible()

    // Test Recent tab
    await page.click('text=Recent')
    await page.waitForSelector('[data-testid="template-card"]')

    // Should show recently added templates
    const recentCards = await page
      .locator('[data-testid^="template-card-"]')
      .count()
    expect(recentCards).toBeGreaterThan(0)
  })

  test('should cancel template creation', async ({ page }) => {
    // Click New Note to open template picker directly
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-daily-journal"]')
    await page.click('[data-testid="template-card-daily-journal"]')

    // Cancel the variable form
    await page.click('button:has-text("Cancel")')

    // Verify form is closed and we're back to template picker
    await expect(
      page.locator('dialog:has-text("Create from Template")')
    ).not.toBeVisible()
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
  })

  test('should create blank note from template picker', async ({ page }) => {
    // Click New Note to open template picker directly
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('button:has-text("Blank Note")')
    await page.click('button:has-text("Blank Note")')

    // Verify template picker closes and we navigate to new note
    await expect(
      page.locator('dialog:has-text("Choose a Template")')
    ).not.toBeVisible()
    // Should be redirected to note editor or creation flow
    await page.waitForTimeout(1000) // Wait for navigation
  })

  test('should show template variable form with proper validation', async ({
    page,
  }) => {
    // Click New Note to open template picker directly
    await page.click('button:has-text("New Note")')

    await page.waitForSelector('[data-testid="template-card-project-kickoff"]')
    await page.click('[data-testid="template-card-project-kickoff"]')

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
test.describe('Template Engine Processing', () => {
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
