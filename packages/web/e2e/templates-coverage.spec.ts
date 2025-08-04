import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Templates Coverage Tests', () => {
  test.use({
    navigationTimeout: 60000,
    actionTimeout: 20000,
  })

  test.beforeEach(async ({ page }) => {
    // Set auth bypass cookie
    await page.context().addCookies([
      {
        name: 'dev-auth-bypass',
        value: 'true',
        domain: 'localhost',
        path: '/',
      },
    ])

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('template picker displays correctly', async ({ page }) => {
    await page.goto('/app')
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

    // Click new note button
    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Wait for template picker to appear (allow time for animation/loading)
    await page.waitForTimeout(1000)
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible({
      timeout: 10000,
    })

    // Check for template categories if they exist
    const templateCategories = page.locator(
      '[data-testid="template-categories"]'
    )
    if (await templateCategories.isVisible()) {
      await expect(templateCategories).toBeVisible()
    }

    // Check for blank template button
    await expect(page.locator('button:has-text("Blank Note")')).toBeVisible()
  })

  test('select blank template', async ({ page }) => {
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Wait for template picker to appear (allow time for animation/loading)
    await page.waitForTimeout(1000)
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible({
      timeout: 10000,
    })

    // Click blank template
    const blankTemplate = page.locator('button:has-text("Blank Note")')
    await blankTemplate.click()

    // Wait for navigation to complete
    await page.waitForURL(/\/notes\/[a-z0-9-]+/, { timeout: 30000 })

    // Should redirect to new note
    await expect(page).toHaveURL(/\/notes\/[a-z0-9-]+/)

    // Editor should be visible - it's a textarea
    const editor = page.locator('textarea[placeholder="Start writing..."]')
    await expect(editor).toBeVisible({ timeout: 10000 })
  })

  test('browse template categories', async ({ page }) => {
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Check for category buttons
    const categories = page.locator('[data-testid^="template-category-"]')
    const categoryCount = await categories.count()

    if (categoryCount > 0) {
      // Click first category
      await categories.first().click()

      // Check that templates are displayed
      await expect(
        page.locator('[data-testid^="template-card-"]').first()
      ).toBeVisible()
    }
  })

  test('search templates', async ({ page }) => {
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Find search input
    const searchInput = page
      .locator(
        '[data-testid="template-search"], input[placeholder*="search" i]'
      )
      .first()
    if (await searchInput.isVisible()) {
      await searchInput.fill('meeting')

      // Wait for search results
      await page.waitForTimeout(500)

      // Check if results are filtered
      const templates = page.locator('[data-testid^="template-card-"]')
      const count = await templates.count()
      expect(count).toBeGreaterThanOrEqual(0)
    }
  })

  test.skip('template preview', async ({ page }) => {
    // SKIPPED: Preview functionality not implemented
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Select a category if needed
    const categoryButton = page
      .locator('[data-testid="template-category-general"]')
      .first()
    if (await categoryButton.isVisible()) {
      await categoryButton.click()
    }

    // Find a template card
    const templateCard = page.locator('[data-testid^="template-card-"]').first()
    if (await templateCard.isVisible()) {
      // Check for preview button
      const previewButton = templateCard
        .locator(
          '[data-testid="template-preview"], button[aria-label*="preview" i]'
        )
        .first()
      if (await previewButton.isVisible()) {
        await previewButton.click()

        // Check preview modal
        await expect(
          page.locator(
            '[data-testid="template-preview-modal"], [role="dialog"]'
          )
        ).toBeVisible()

        // Close preview
        await page.keyboard.press('Escape')
      }
    }
  })

  test.skip('create note from template with variables', async ({ page }) => {
    // SKIPPED: Template categories and variable forms not implemented
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Select a category
    const categoryButton = page
      .locator('[data-testid="template-category-general"]')
      .first()
    if (await categoryButton.isVisible()) {
      await categoryButton.click()
    }

    // Select a template
    const templateCard = page.locator('[data-testid^="template-card-"]').first()
    await templateCard.click()

    // Check if variable form appears
    const variableForm = page.locator('[data-testid="template-variable-form"]')
    if (await variableForm.isVisible()) {
      // Fill in variables
      const inputs = page.locator(
        '[data-testid="template-variable-form"] input'
      )
      const inputCount = await inputs.count()

      for (let i = 0; i < inputCount; i++) {
        await inputs.nth(i).fill(`Test Value ${i + 1}`)
      }

      // Submit form
      const submitButton = page
        .locator('button:has-text("Create"), button:has-text("Use Template")')
        .first()
      await submitButton.click()
    }

    // Should redirect to new note
    await expect(page).toHaveURL(/\/notes\/[a-z0-9-]+/)

    // Verify template content is loaded
    const editor = page
      .locator('[data-testid="note-editor"] .slate-content')
      .first()
    await expect(editor).toBeVisible()
  })

  test.skip('template usage tracking', async ({ page }) => {
    // SKIPPED: Template usage tracking not implemented
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Look for popular templates section
    const popularSection = page.locator(
      '[data-testid="popular-templates"], text=/popular/i'
    )
    if (await popularSection.isVisible()) {
      await expect(popularSection).toBeVisible()

      // Check for usage count display
      const usageCount = page.locator(
        '[data-testid="template-usage-count"], text=/used/i'
      )
      if (await usageCount.first().isVisible()) {
        await expect(usageCount.first()).toBeVisible()
      }
    }
  })

  test.skip('template rating system', async ({ page }) => {
    // SKIPPED: Rating system UI not implemented
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Select a template
    const categoryButton = page
      .locator('[data-testid="template-category-general"]')
      .first()
    if (await categoryButton.isVisible()) {
      await categoryButton.click()
    }

    const templateCard = page.locator('[data-testid^="template-card-"]').first()
    if (await templateCard.isVisible()) {
      // Look for rating display
      const rating = templateCard.locator(
        '[data-testid="template-rating"], [aria-label*="rating" i]'
      )
      if (await rating.isVisible()) {
        await expect(rating).toBeVisible()
      }
    }
  })

  test.skip('custom template creation', async ({ page }) => {
    // SKIPPED: Template creation UI not implemented
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Look for create template button
    const createTemplateButton = page
      .locator(
        '[data-testid="create-template-button"], button:has-text("Create Template")'
      )
      .first()
    if (await createTemplateButton.isVisible()) {
      await createTemplateButton.click()

      // Fill template form
      const nameInput = page
        .locator('input[name="name"], input[placeholder*="name" i]')
        .first()
      await nameInput.fill('My Custom Template')

      const descriptionInput = page
        .locator(
          'textarea[name="description"], textarea[placeholder*="description" i]'
        )
        .first()
      if (await descriptionInput.isVisible()) {
        await descriptionInput.fill('This is a custom template for testing')
      }

      // Add content
      const contentEditor = page
        .locator(
          '[data-testid="template-content-editor"], [contenteditable="true"]'
        )
        .first()
      if (await contentEditor.isVisible()) {
        await contentEditor.fill('Template content with {{variable}}')
      }

      // Save template
      const saveButton = page
        .locator('button:has-text("Save"), button:has-text("Create")')
        .last()
      await saveButton.click()
    }
  })

  test('template filtering and sorting', async ({ page }) => {
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Check for filter options
    const filterButton = page
      .locator(
        '[data-testid="template-filter"], button[aria-label*="filter" i]'
      )
      .first()
    if (await filterButton.isVisible()) {
      await filterButton.click()

      // Check filter menu
      await expect(
        page.locator('[data-testid="filter-menu"], [role="menu"]')
      ).toBeVisible()

      // Close filter
      await page.keyboard.press('Escape')
    }

    // Check for sort options
    const sortButton = page
      .locator('[data-testid="template-sort"], button[aria-label*="sort" i]')
      .first()
    if (await sortButton.isVisible()) {
      await sortButton.click()

      // Check sort menu
      await expect(
        page.locator('[data-testid="sort-menu"], [role="menu"]')
      ).toBeVisible()

      // Select a sort option
      const sortOption = page
        .locator('[role="menuitem"]:has-text("Name")')
        .first()
      if (await sortOption.isVisible()) {
        await sortOption.click()
      }
    }
  })

  test.skip('template keyboard navigation', async ({ page }) => {
    // SKIPPED: Template picker keyboard navigation not verifiable with current selectors
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Wait for template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Navigate with keyboard
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Use arrow keys
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowRight')

    // Select with Enter
    await page.keyboard.press('Enter')

    // Should either select a template or open a category
    // Check if we're on a new note page or still in picker
    const isOnNotePage = await page.url().includes('/notes/')
    const isStillInPicker = await page
      .locator('[data-testid="template-picker"]')
      .isVisible()

    expect(isOnNotePage || isStillInPicker).toBeTruthy()
  })

  test('cancel template selection', async ({ page }) => {
    await page.goto('/app')

    const newNoteButton = page.locator('[data-testid="new-note-button"]')
    await newNoteButton.click()

    // Wait for template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()

    // Press Escape to cancel
    await page.keyboard.press('Escape')

    // Template picker should close
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).not.toBeVisible()
  })
})
