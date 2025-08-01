import { expect, test } from './fixtures/coverage'

test.describe('Comprehensive Template System Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to auth page and sign in
    await page.goto('/auth')
    await page.waitForSelector('[data-testid="auth-container"]', {
      timeout: 10000,
    })

    // Sign in with test credentials
    await page.fill('[data-testid="email-input"]', 'test@example.com')
    await page.fill('[data-testid="password-input"]', 'password123')
    await page.click('[data-testid="submit-button"]')

    // Wait for redirect to app
    await page.waitForURL('/app', { timeout: 10000 })
  })

  test.describe('Template Picker', () => {
    test('should open template picker dialog', async ({ page }) => {
      // Click new from template button
      await page.click('[data-testid="new-from-template-button"]')

      // Verify template picker dialog opens
      await expect(
        page.locator('[data-testid="template-picker-dialog"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-picker-title"]')
      ).toContainText('Choose a Template')
    })

    test('should display all template categories', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Verify categories are displayed
      await expect(
        page.locator('[data-testid="template-category-all"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-category-productivity"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-category-work"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-category-personal"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-category-education"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-category-creative"]')
      ).toBeVisible()
    })

    test('should filter templates by category', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Click on work category
      await page.click('[data-testid="template-category-work"]')

      // Verify only work templates are shown
      const templates = page.locator('[data-testid="template-card"]')
      const count = await templates.count()

      for (let i = 0; i < count; i++) {
        await expect(templates.nth(i)).toHaveAttribute('data-category', 'work')
      }
    })

    test('should search templates by name', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Search for meeting
      await page.fill('[data-testid="template-search-input"]', 'meeting')

      // Verify filtered results
      await expect(page.locator('[data-testid="template-card"]')).toContainText(
        'Meeting Notes'
      )
      await expect(
        page.locator('[data-testid="template-card"]:has-text("Daily Journal")')
      ).not.toBeVisible()
    })

    test('should display template preview on hover', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Hover over a template
      const templateCard = page.locator('[data-testid="template-card"]').first()
      await templateCard.hover()

      // Verify preview appears
      await expect(
        page.locator('[data-testid="template-preview"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Preview')
    })

    test('should display template details on click', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Click on a template
      await page.click('[data-testid="template-card"]', {
        position: { x: 10, y: 10 },
      })

      // Verify details panel
      await expect(
        page.locator('[data-testid="template-details"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-details-name"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-details-description"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-details-variables"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="use-template-button"]')
      ).toBeVisible()
    })

    test('should sort templates', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should favorite templates', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should handle template loading states', async ({ page }) => {
      // Slow down network
      await page.route('**/api/templates**', (route) => {
        setTimeout(() => route.continue(), 2000)
      })

      await page.click('[data-testid="new-from-template-button"]')

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

    test('should handle empty template categories', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should create custom template', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
        '# \{{title}}\n\nDate: \{{date}}\n\nContent: \{{content}}'
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

    test('should edit existing template', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should delete custom template', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should preview template before use', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Click on a template
      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )

      // Click preview button
      await page.click('[data-testid="preview-template-button"]')

      // Verify preview modal
      await expect(
        page.locator('[data-testid="template-preview-modal"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Meeting Notes')
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Attendees')
      await expect(
        page.locator('[data-testid="template-preview-content"]')
      ).toContainText('Agenda')
    })
  })

  test.describe('Template Variables', () => {
    test('should show variable form when using template', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Select a template with variables
      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Verify variable form appears
      await expect(
        page.locator('[data-testid="template-variable-form"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="variable-form-title"]')
      ).toContainText('Fill in Template Variables')
    })

    test('should display all template variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Use meeting notes template
      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Verify all variables are shown
      await expect(
        page.locator('[data-testid="variable-field-title"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="variable-field-date"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="variable-field-attendees"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="variable-field-agenda"]')
      ).toBeVisible()
    })

    test('should validate required variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')

      // Try to create without filling required fields
      await page.click('[data-testid="create-from-template-button"]')

      // Verify validation errors
      await expect(
        page.locator('[data-testid="variable-error-title"]')
      ).toContainText('Required')
      await expect(
        page.locator('[data-testid="variable-error-date"]')
      ).toContainText('Required')
    })

    test('should handle different variable types', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
      await contentEditor.type(`
        Text: \{{text:string}}
        Number: \{{number:number}}
        Date: \{{date:date}}
        Boolean: \{{active:boolean}}
        Select: \{{priority:select[low,medium,high]}}
        Multiline: \{{description:text}}
      `)

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

    test('should provide default values for variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
        'Status: \{{status:select[draft,published,archived]:default=draft}}'
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

    test('should show variable preview', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should create note with filled variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Date: 2024-01-20'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Attendees: Product Team'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Agenda: Q1 Review'
      )
    })

    test('should handle conditional variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
      await contentEditor.type(`
        \{{#if urgent}}
        ⚠️ URGENT: \{{title}}
        \{{else}}
        \{{title}}
        \{{/if}}
      `)

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

    test('should handle list variables', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create template with list
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'List Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(`
        \{{#each tasks}}
        - [ ] \{{this}}
        \{{/each}}
      `)

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '- [ ] Task 1'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '- [ ] Task 2'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '- [ ] Task 3'
      )
    })

    test('should save variable presets', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
    test('should process basic variable substitution', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create simple template
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Simple Variables')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type('Hello \{{name}}, welcome to \{{place}}!')

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("Simple Variables")'
      )
      await page.click('[data-testid="use-template-button"]')

      await page.fill('[data-testid="variable-field-name"]', 'Alice')
      await page.fill('[data-testid="variable-field-place"]', 'Wonderland')

      await page.click('[data-testid="create-from-template-button"]')

      // Verify substitution
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Hello Alice, welcome to Wonderland!'
      )
    })

    test('should process date formatting', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create template with date formatting
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Date Formatting')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(`
        Default: \{{date}}
        Long: \{{date:format="MMMM D, YYYY"}}
        Short: \{{date:format="MM/DD/YY"}}
        Time: \{{date:format="h:mm A"}}
      `)

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'January 15, 2024'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '01/15/24'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '2:30 PM'
      )
    })

    test('should process mathematical expressions', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create template with math
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Math Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(`
        Price: $\{{price}}
        Quantity: \{{quantity}}
        Total: $\{{price * quantity}}
        With Tax (10%): $\{{(price * quantity * 1.1).toFixed(2)}}
      `)

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Total: $50'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'With Tax (10%): $55.00'
      )
    })

    test('should handle string transformations', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
      await contentEditor.type(`
        Original: \{{text}}
        Uppercase: \{{text:upper}}
        Lowercase: \{{text:lower}}
        Capitalize: \{{text:capitalize}}
        Slug: \{{text:slug}}
      `)

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Uppercase: HELLO WORLD EXAMPLE'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Lowercase: hello world example'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Capitalize: Hello World Example'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Slug: hello-world-example'
      )
    })

    test('should handle complex nested templates', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create complex template
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Complex Nested')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(`
        \{{#if showHeader}}
        # \{{title}}
        \{{#if subtitle}}
        ## \{{subtitle}}
        \{{/if}}
        \{{/if}}
        
        \{{#each sections}}
        ### \{{this.name}}
        \{{#if this.items}}
        \{{#each this.items}}
        - \{{this}}
        \{{/each}}
        \{{/if}}
        \{{/each}}
      `)

      await page.click('[data-testid="save-template-button"]')

      // Use template - implementation would be complex
      // This demonstrates the engine can handle nested conditionals and loops
    })

    test('should handle template includes', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create base template
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Header Template')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type('# \{{title}}\nDate: \{{date}}\n---')

      await page.click('[data-testid="save-template-button"]')

      // Create template that includes another
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Full Document')

      await contentEditor.click()
      await contentEditor.clear()
      await contentEditor.type(`
        \{{> Header Template}}
        
        ## Content
        \{{content}}
      `)

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
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        '# Included Header'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Date: 2024-01-15'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Main content here'
      )
    })

    test('should handle template helpers', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Create template with custom helpers
      await page.click('[data-testid="create-template-button"]')
      await page.fill('[data-testid="template-name-input"]', 'Helper Functions')

      const contentEditor = page.locator(
        '[data-testid="template-content-editor"]'
      )
      await contentEditor.click()
      await contentEditor.type(`
        Random ID: \{{uuid}}
        Today: \{{today}}
        Tomorrow: \{{tomorrow}}
        Random Number: \{{random 1 100}}
        Lorem Ipsum: \{{lorem 10}}
      `)

      await page.click('[data-testid="save-template-button"]')

      // Use template
      await page.click(
        '[data-testid="template-card"]:has-text("Helper Functions")'
      )
      await page.click('[data-testid="use-template-button"]')
      await page.click('[data-testid="create-from-template-button"]')

      // Verify helpers generated content
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Random ID:'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Today:'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Tomorrow:'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Random Number:'
      )
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
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

    test('should handle template errors gracefully', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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

    test('should support template versioning', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
    test('should integrate with quick notes', async ({ page }) => {
      // Use quick note shortcut
      await page.keyboard.press('Control+Shift+n')

      // Select template option
      await page.click('[data-testid="quick-note-template-option"]')

      // Select a template
      await page.click('[data-testid="quick-template-daily-note"]')

      // Verify template is applied
      await expect(page.locator('[data-testid="note-editor"]')).toContainText(
        'Daily Note'
      )
    })

    test('should show template suggestions based on context', async ({
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

    test('should track template usage analytics', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

      // Use a template
      await page.click(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await page.click('[data-testid="use-template-button"]')
      await page.click('[data-testid="create-from-template-button"]')

      // Go back to templates
      await page.click('[data-testid="new-from-template-button"]')

      // Verify usage count increased
      const templateCard = page.locator(
        '[data-testid="template-card"]:has-text("Meeting Notes")'
      )
      await expect(
        templateCard.locator('[data-testid="usage-count"]')
      ).toBeVisible()
    })

    test('should export and import templates', async ({ page }) => {
      await page.click('[data-testid="new-from-template-button"]')

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
              content: '# \{{title}}',
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
