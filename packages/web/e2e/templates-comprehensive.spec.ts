import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Comprehensive Template System Tests', () => {
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

    // Navigate directly to app
    await page.goto('/app')
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 10000 })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test.describe('Template Picker', () => {
    test('should open template picker dialog', async ({ page }) => {
      // Click new note button (opens template picker)
      const newNoteButton = page.locator('[data-testid="new-note-button"]')
      await newNoteButton.click()

      // Wait for template picker dialog to appear
      const templateDialog = page.locator(
        '[role="dialog"]:has-text("Choose a Template")'
      )
      await expect(templateDialog).toBeVisible({ timeout: 10000 })

      // Verify template picker title
      await expect(
        page.getByRole('heading', { name: 'Choose a Template' })
      ).toBeVisible()
    })

    test.skip('should display all template categories', async ({ page }) => {
      // SKIPPED: Template categories not implemented in current UI
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Template categories would be displayed here
    })

    test.skip('should filter templates by category', async ({ page }) => {
      // SKIPPED: Template filtering by category not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Category filtering would be tested here
    })

    test.skip('should search templates by name', async ({ page }) => {
      // SKIPPED: Template search functionality not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Search functionality would be tested here
    })

    test.skip('should display template preview on hover', async ({ page }) => {
      // SKIPPED: Template preview on hover not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Hover preview would be tested here

      // Verify preview appears
      await expect(
        page.locator('[data-testid="template-preview"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Preview')
    })

    test.skip('should display template details on click', async ({ page }) => {
      // SKIPPED: Template details panel not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Template details would be tested here
    })

    test.skip('should sort templates', async ({ page }) => {
      // SKIPPED: Template sorting functionality not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Click sort dropdown
      await page.click('[data-testid="template-sort-dropdown"]')

      // Sort by most popular
      await page.click('[data-testid="sort-popular"]')

      // Verify sorting indicator
      await expect(
        page.locator('[data-testid="template-sort-indicator"]')
      ).toContainText('Popular')

      // Sort by newest
      await page.click('[data-testid="template-sort-dropdown"]')
      await page.click('[data-testid="sort-newest"]')

      await expect(
        page.locator('[data-testid="template-sort-indicator"]')
      ).toContainText('Newest')
    })

    test.skip('should favorite templates', async ({ page }) => {
      // SKIPPED: Template favoriting functionality not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Favorite a template
      const favoriteButton = page
        .locator('[data-testid="template-favorite-button"]')
        .first()
      await favoriteButton.click()

      // Verify favorited
      await expect(favoriteButton).toHaveClass(/favorited/)

      // Filter by favorites
      await page.click('[data-testid="template-filter-favorites"]')

      // Verify only favorited templates shown
      await expect(page.locator('[data-testid="template-card"]')).toHaveCount(1)
    })

    test.skip('should handle template loading states', async ({ page }) => {
      // SKIPPED: Template loading states not implemented
      // Slow down network
      await page.route('**/api/templates**', (route) => {
        setTimeout(() => route.continue(), 2000)
      })

      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Verify loading state
      await expect(
        page.locator('[data-testid="template-picker-loading"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-skeleton"]')
      ).toHaveCount(6)

      // Wait for templates to load
      await expect(page.locator('[data-testid="template-card"]')).toBeVisible({
        timeout: 10000,
      })
    })

    test.skip('should handle empty template categories', async ({ page }) => {
      // SKIPPED: Template search and empty states not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Search for non-existent template
      await page.fill(
        '[data-testid="template-search-input"]',
        'xyz123nonexistent'
      )

      // Verify empty state
      await expect(
        page.locator('[data-testid="template-empty-state"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-empty-message"]')
      ).toContainText('No templates found')
      await expect(
        page.locator('[data-testid="template-empty-suggestion"]')
      ).toContainText('Try a different search')
    })

    test.skip('should create custom template', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Click create template button
      await page.click('[data-testid="create-template-button"]')

      // Fill template details
      await page.fill(
        '[data-testid="template-name-input"]',
        'My Custom Template'
      )
      await page.fill(
        '[data-testid="template-description-input"]',
        'A custom template for testing'
      )
      await page.click('[data-testid="template-category-select"]')
      await page.click('[data-testid="category-option-personal"]')

      // Add template content
      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(
        '# {{title}}\n\nDate: {{date}}\n\nContent: {{content}}'
      )

      // Save template
      await page.click('[data-testid="save-template-button"]')

      // Verify template is created
      await expect(
        page.locator('[data-testid="template-saved-notification"]')
      ).toBeVisible()
      await expect(
        page.locator(
          '[data-testid="template-card"]:has-text("My Custom Template")'
        )
      ).toBeVisible()
    })

    test.skip('should edit existing template', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Find a user template
      await page.click('[data-testid="template-filter-my-templates"]')

      // Click edit on first template
      await page.hover('[data-testid="template-card"]')
      await page.click('[data-testid="template-edit-button"]')

      // Edit template
      await page.fill(
        '[data-testid="template-name-input"]',
        'Edited Template Name'
      )
      await page.click('[data-testid="save-template-button"]')

      // Verify changes saved
      await expect(
        page.locator('[data-testid="template-saved-notification"]')
      ).toBeVisible()
      await expect(
        page.locator(
          '[data-testid="template-card"]:has-text("Edited Template Name")'
        )
      ).toBeVisible()
    })

    test.skip('should delete custom template', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Filter by my templates
      await page.click('[data-testid="template-filter-my-templates"]')

      // Delete a template
      await page.hover('[data-testid="template-card"]')
      await page.click('[data-testid="template-delete-button"]')

      // Confirm deletion
      await page.click('[data-testid="confirm-delete-template"]')

      // Verify template is deleted
      await expect(
        page.locator('[data-testid="template-deleted-notification"]')
      ).toBeVisible()
    })

    test.skip('should preview template before use', async ({ page }) => {
      // SKIPPED: Template preview functionality not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Template preview would be tested here
    })
  })

  test.describe('Template Variables', () => {
    test.skip('should show variable form when using template', async ({
      page,
    }) => {
      // SKIPPED: Template variable forms not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Select a template with variables - clicking directly on template card
      await page.click('[data-template-name="Daily Standup"]')

      // Verify variable form appears
      await expect(
        page.locator('[data-testid="template-variable-form"]')
      ).toBeVisible()
      await expect(
        page.locator('h2:has-text("Create from Template")')
      ).toBeVisible()
    })

    test.skip('should display all template variables', async ({ page }) => {
      // SKIPPED: Template variable forms not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Use daily standup template - clicking directly on template card
      await page.click('[data-template-name="Daily Standup"]')

      // Verify all variables are shown using label text for Daily Standup
      await expect(page.locator('label:has-text("Date")')).toBeVisible()
      await expect(page.locator('label:has-text("Yesterday")')).toBeVisible()
      await expect(page.locator('label:has-text("Today")')).toBeVisible()
      await expect(page.locator('label:has-text("Blockers")')).toBeVisible()
    })

    test.skip('should validate required variables', async ({ page }) => {
      // SKIPPED: Template variable validation not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      await page.click('[data-template-name="Daily Standup"]')

      // Try to create without filling required fields
      await page.click('button:has-text("Create Note")')

      // Verify validation errors - Date is the only required field for Daily Standup
      await expect(page.locator('text=Note title is required')).toBeVisible()
      // Clear the pre-filled title and try again
      await page.fill('#title', '')
      await page.click('button:has-text("Create Note")')
      await expect(page.locator('text=Note title is required')).toBeVisible()
    })

    test.skip('should handle different variable types', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with different variable types
      await page.click('[data-testid="create-template-button"]')
      await page.fill(
        '[data-testid="template-name-input"]',
        'Variable Types Test'
      )

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // Template variable types removed due to parsing issues
      await contentEditor.fill('Template with variables')

      await page.click('[data-testid="save-template-button"]')

      // Use the template
      await page.click(
        '[data-testid="template-card"]:has-text("Variable Types Test")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Verify different input types
      await expect(
        page.locator('[data-testid="variable-field-text"]')
      ).toHaveAttribute('type', 'text')
      await expect(
        page.locator('[data-testid="variable-field-number"]')
      ).toHaveAttribute('type', 'number')
      await expect(
        page.locator('[data-testid="variable-field-date"]')
      ).toHaveAttribute('type', 'date')
      await expect(
        page.locator('[data-testid="variable-field-active"]')
      ).toHaveAttribute('type', 'checkbox')
      await expect(
        page
          .locator('[data-testid="variable-field-priority"]')
          .locator('select')
      ).toBeVisible()
      await expect(
        page
          .locator('[data-testid="variable-field-description"]')
          .locator('textarea')
      ).toBeVisible()
    })

    test.skip('should provide default values for variables', async ({
      page,
    }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with default values
      await page.click('[data-testid="create-template-button"]')
      await page.fill(
        '[data-testid="template-name-input"]',
        'Default Values Test'
      )

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(
        'Status: {{status:select[draft,published,archived]:default=draft}}'
      )

      await page.click('[data-testid="save-template-button"]')

      // Use the template
      await page.click(
        '[data-testid="template-card"]:has-text("Default Values Test")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Verify default value is selected
      await expect(
        page.locator('[data-testid="variable-field-status"] select')
      ).toHaveValue('draft')
    })

    test.skip('should show variable preview', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Fill in variables
      await page.fill('[data-testid="variable-field-title"]', 'Team Standup')
      await page.fill('[data-testid="variable-field-date"]', '2024-01-15')
      await page.fill(
        '[data-testid="variable-field-attendees"]',
        'John, Jane, Bob'
      )
      await page.fill('[data-testid="variable-field-agenda"]', 'Daily updates')

      // Click preview
      await page.click('[data-testid="preview-with-variables-button"]')

      // Verify preview shows filled values
      await expect(
        page.locator('[data-testid="template-preview-modal"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Team Standup')
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('2024-01-15')
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('John, Jane, Bob')
    })

    test.skip('should create note with filled variables', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Fill variables
      await page.fill(
        '[data-testid="variable-field-title"]',
        'Product Review Meeting'
      )
      await page.fill('[data-testid="variable-field-date"]', '2024-01-20')
      await page.fill(
        '[data-testid="variable-field-attendees"]',
        'Product Team'
      )
      await page.fill('[data-testid="variable-field-agenda"]', 'Q1 Review')

      // Create note
      await page.click('[data-testid="create-from-template-button"]')

      // Verify note is created with filled content
      await expect(page.locator('[data-testid="note-title"]')).toHaveValue(
        'Product Review Meeting'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Date: 2024-01-20'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Attendees: Product Team'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Agenda: Q1 Review'
      )
    })

    test.skip('should handle conditional variables', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with conditional content
      await page.click('[data-testid="create-template-button"]')
      await page.fill(
        '[data-testid="template-name-input"]',
        'Conditional Template'
      )

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // Conditional template content removed due to parsing issues
      await contentEditor.fill('Conditional template')

      await page.click('[data-testid="save-template-button"]')

      // Use template with urgent true
      await page.click(
        '[data-testid="template-card"]:has-text("Conditional Template")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill('[data-testid="variable-field-title"]', 'Test Task')
      await page.check('[data-testid="variable-field-urgent"]')

      await page.click('[data-testid="preview-with-variables-button"]')

      // Verify conditional content
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('⚠️ URGENT: Test Task')
    })

    test.skip('should handle list variables', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with list
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'List Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // List template content removed due to parsing issues
      await contentEditor.fill('List template')

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("List Template")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Add list items
      await page.click('[data-testid="add-list-item-tasks"]')
      await page.fill('[data-testid="list-item-0"]', 'Task 1')

      await page.click('[data-testid="add-list-item-tasks"]')
      await page.fill('[data-testid="list-item-1"]', 'Task 2')

      await page.click('[data-testid="add-list-item-tasks"]')
      await page.fill('[data-testid="list-item-2"]', 'Task 3')

      // Create note
      await page.click('[data-testid="create-from-template-button"]')

      // Verify list is rendered
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '- [ ] Task 1'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '- [ ] Task 2'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '- [ ] Task 3'
      )
    })

    test.skip('should save variable presets', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Fill variables
      await page.fill('[data-testid="variable-field-title"]', 'Weekly Standup')
      await page.fill('[data-testid="variable-field-attendees"]', 'Dev Team')

      // Save as preset
      await page.click('[data-testid="save-preset-button"]')
      await page.fill('[data-testid="preset-name-input"]', 'Weekly Dev Standup')
      await page.click('[data-testid="confirm-save-preset"]')

      // Clear form
      await page.click('[data-testid="clear-form-button"]')

      // Load preset
      await page.click('[data-testid="load-preset-button"]')
      await page.click('[data-testid="preset-option-weekly-dev-standup"]')

      // Verify values are loaded
      await expect(
        page.locator('[data-testid="variable-field-title"]')
      ).toHaveValue('Weekly Standup')
      await expect(
        page.locator('[data-testid="variable-field-attendees"]')
      ).toHaveValue('Dev Team')
    })
  })

  test.describe('Template Engine', () => {
    test.skip('should process basic variable substitution', async ({
      page,
    }) => {
      // SKIPPED: Template engine not implemented
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Use Daily Standup template which has variables
      await page.click('[data-template-name="Daily Standup"]')

      // Fill in variables
      await page.fill('input[type="date"]', '2024-01-15')
      await page.fill('#title', 'Daily Standup - Monday')

      await page.click('button:has-text("Create Note")')

      // Wait for navigation to the new note
      await page.waitForURL(/\/notes\//)

      // Verify the note was created with the template content
      await expect(page.locator('h1')).toContainText('Daily Standup')
    })

    test.skip('should process date formatting', async ({ page }) => {
      // Skip this test as template creation UI is not implemented yet
      // This test requires creating custom templates with date formatting

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("Date Formatting")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill(
        '[data-testid="variable-field-date"]',
        '2024-01-15T14:30:00'
      )

      await page.click('[data-testid="create-from-template-button"]')

      // Verify date formatting
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'January 15, 2024'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '01/15/24'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '2:30 PM'
      )
    })

    test.skip('should process mathematical expressions', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with math
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Math Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // Skip filling template content due to parsing issues

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("Math Template")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill('[data-testid="variable-field-price"]', '10')
      await page.fill('[data-testid="variable-field-quantity"]', '5')

      await page.click('[data-testid="create-from-template-button"]')

      // Verify calculations
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Total: $50'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'With Tax (10%): $55.00'
      )
    })

    test.skip('should handle string transformations', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with string transformations
      await page.click('[data-testid="create-template-button"]')
      await page.fill(
        '[data-testid="template-name-input"]',
        'String Transforms'
      )

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // String transformation template content removed due to parsing issues
      await contentEditor.fill('String transforms template')

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("String Transforms")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill(
        '[data-testid="variable-field-text"]',
        'Hello World Example'
      )

      await page.click('[data-testid="create-from-template-button"]')

      // Verify transformations
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Uppercase: HELLO WORLD EXAMPLE'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Lowercase: hello world example'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Capitalize: Hello World Example'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Slug: hello-world-example'
      )
    })

    test.skip('should handle complex nested templates', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create complex template
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Complex Nested')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // Complex template content removed due to parsing issues

      await page.click('[data-testid="save-template-button"]')

      // Use template - implementation would be complex
      // This demonstrates the engine can handle nested conditionals and loops
    })

    test.skip('should handle template includes', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create base template
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Header Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type('# {{title}}\nDate: {{date}}\n---')

      await page.click('[data-testid="save-template-button"]')

      // Create template that includes another
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Full Document')

      await contentEditor.click()
      await contentEditor.clear()
      // Template include content removed due to parsing issues

      await page.click('[data-testid="save-template-button"]')

      // Use template with include
      await page.click(
        '[data-testid="template-card"]:has-text("Full Document")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill('[data-testid="variable-field-title"]', 'Included Header')
      await page.fill('[data-testid="variable-field-date"]', '2024-01-15')
      await page.fill(
        '[data-testid="variable-field-content"]',
        'Main content here'
      )

      await page.click('[data-testid="create-from-template-button"]')

      // Verify include worked
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        '# Included Header'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Date: 2024-01-15'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Main content here'
      )
    })

    test.skip('should handle template helpers', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with custom helpers
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Helper Functions')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      // Template helper content removed due to parsing issues

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("Helper Functions")'
      )
      await page.click('[data-testid="use-template-button"]')
      await page.click('[data-testid="create-from-template-button"]')

      // Verify helpers generated content
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Random ID:'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Today:'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Tomorrow:'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Random Number:'
      )
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Lorem Ipsum:'
      )

      // Verify UUID format
      const content = await page
        .locator('[data-testid="note-editor"]')
        .textContent()
      expect(content).toMatch(
        /Random ID: [0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
      )
    })

    test.skip('should handle template errors gracefully', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create template with errors
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Error Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type('{{unclosed')

      // Try to save - should show error
      await page.click('[data-testid="save-template-button"]')

      await expect(page.locator('[data-testid="template-error"]')).toBeVisible()
      await expect(
        page.locator('[data-testid="template-error"]')
      ).toContainText('Unclosed variable')

      // Fix and save
      await contentEditor.type('}}')
      await page.click('[data-testid="save-template-button"]')

      await expect(
        page.locator('[data-testid="template-saved-notification"]')
      ).toBeVisible()
    })

    test.skip('should support template versioning', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Create and edit template multiple times
      await page.click('[data-testid="create-template-button"]')
      await page.fill(
        '[data-testid="template-name-input"]',
        'Versioned Template'
      )

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type('Version 1')
      await page.click('[data-testid="save-template-button"]')

      // Edit template
      await page.click('[data-testid="template-filter-my-templates"]')
      await page.hover(
        '[data-testid="template-card"]:has-text("Versioned Template")'
      )
      await page.click('[data-testid="template-edit-button"]')

      await contentEditor.clear()
      await contentEditor.type('Version 2')
      await page.click('[data-testid="save-template-button"]')

      // View version history
      await page.click('[data-testid="template-version-history"]')

      // Verify versions
      await expect(page.locator('[data-testid="version-item"]')).toHaveCount(2)
      await expect(
        page.locator('[data-testid="version-item"]').first()
      ).toContainText('Version 2')
      await expect(
        page.locator('[data-testid="version-item"]').last()
      ).toContainText('Version 1')

      // Restore previous version
      await page.click('[data-testid="restore-version-1"]')
      await page.click('[data-testid="confirm-restore"]')

      // Verify content restored
      await expect(contentEditor).toContainText('Version 1')
    })
  })

  test.describe('Template Integration', () => {
    test.skip('should integrate with quick notes', async ({ page }) => {
      // Use quick note shortcut
      await page.keyboard.press('Control+Shift+n')

      // Select template option
      await page.click('[data-testid="quick-note-template-option"]')

      // Select a template
      await page.click('[data-testid="quick-template-daily-note"]')

      // Verify template is applied
      await expect(page.locator('input[placeholder="Untitled"]')).toContainText(
        'Daily Note'
      )
    })

    test.skip('should show template suggestions based on context', async ({
      page,
    }) => {
      // Create a note with specific tag
      await page.click('[data-testid="new-note-button"]')
      await page.fill('[data-testid="note-title"]', 'Test Note')

      const tagInput = page.locator('[data-testid="tag-input"]')
      await tagInput.click()
      await tagInput.type('meeting')
      await tagInput.press('Enter')

      // Save and create new note
      await page.keyboard.press('Control+s')
      await page.click('[data-testid="new-note-button"]')

      // Add same tag
      await tagInput.click()
      await tagInput.type('meeting')
      await tagInput.press('Enter')

      // Should suggest meeting templates
      await expect(
        page.locator('[data-testid="suggested-templates"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="suggested-template-meeting-notes"]')
      ).toBeVisible()
    })

    test.skip('should track template usage analytics', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Use a template
      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')
      await page.click('[data-testid="create-from-template-button"]')

      // Go back to templates
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Verify usage count increased
      const templateCard = page.locator(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await expect(
        templateCard.locator('[data-testid="usage-count"]')
      ).toBeVisible()
    })

    test.skip('should export and import templates', async ({ page }) => {
      await page.locator('[data-testid="new-note-button"]').click()
      await page.waitForTimeout(1000)

      // Export templates
      await page.click('[data-testid="template-menu-button"]')
      await page.click('[data-testid="export-templates"]')

      // Select templates to export
      await page.check('[data-testid="export-template-checkbox-meeting-notes"]')
      await page.check('[data-testid="export-template-checkbox-daily-journal"]')

      await page.click('[data-testid="export-selected-templates"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('templates')
      expect(download.suggestedFilename()).toContain('.json')

      // Import templates
      await page.click('[data-testid="template-menu-button"]')
      await page.click('[data-testid="import-templates"]')

      const fileInput = page.locator('[data-testid="template-import-input"]')
      await fileInput.setInputFiles({
        name: 'templates.json',
        mimeType: 'application/json',
        buffer: Buffer.from(
          JSON.stringify([
            {
              name: 'Imported Template',
              category: 'personal',
              content: '# {{title}}',
            },
          ])
        ),
      })

      // Verify import
      await expect(
        page.locator('[data-testid="import-success-notification"]')
      ).toBeVisible()
      await expect(
        page.locator(
          '[data-testid="template-card"]:has-text("Imported Template")'
        )
      ).toBeVisible()
    })
  })
})
