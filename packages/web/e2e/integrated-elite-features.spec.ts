import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Integrated Elite Features', () => {
  // SKIPPED: Elite features not implemented in current version
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

    // Use /app route directly to avoid redirect
    await page.goto('/app', { timeout: 30000 })
    await expect(page.locator('[data-testid="app-shell"]')).toBeVisible({
      timeout: 30000,
    })

    // Wait for React hydration
    await waitForHydration(page)
  })

  test('Enhanced Global Search - Complete AI Search Experience', async ({
    page,
  }) => {
    // Test Enhanced Global Search in main header
    const searchInput = page
      .locator('input[placeholder*="Search notes with AI"]')
      .first()
    await expect(searchInput).toBeVisible()

    // Test different search modes
    await searchInput.click({ force: true })

    // Test search mode selector is visible
    const searchModeButton = page.locator(
      '[role="button"]:has(svg[class~="h-3"][class~="w-3"])'
    )
    await expect(searchModeButton).toBeVisible()

    // Test semantic search mode
    await searchModeButton.click({ force: true })
    await page.locator('text=AI Semantic Search').click({ force: true })

    // Perform semantic search
    await searchInput.fill('machine learning concepts')

    // Wait for semantic search results
    await expect(page.locator('text=semantic matches')).toBeVisible({
      timeout: 10000,
    })
    await expect(page.locator('text=AI-powered')).toBeVisible()

    // Verify AI match indicators
    await expect(page.locator('text=AI Match')).toBeVisible()
    await expect(page.locator('[class*="text-purple"]')).toBeVisible()

    // Test hybrid search mode
    await searchModeButton.click({ force: true })
    await page.locator('text=Hybrid Search').click({ force: true })

    await searchInput.fill('project management')

    // Should show both keyword and semantic results
    await expect(page.locator('text=keyword matches')).toBeVisible({
      timeout: 10000,
    })
    await expect(page.locator('text=semantic matches')).toBeVisible({
      timeout: 10000,
    })

    // Test filter functionality
    const filterButton = page
      .locator(
        '[role="button"]:has(svg[data-testid*="filter" i], svg[class*="filter" i], svg[stroke*="filter" i])'
      )
      .first()
    await filterButton.click({ force: true })

    // Verify filters panel opens
    await expect(page.locator('text=Tags')).toBeVisible()
    await expect(page.locator('text=Clear Filters')).toBeVisible()
  })

  test('Enhanced AI Toolbar - Complete Content Generation Suite', async ({
    page,
  }) => {
    // Create a new note first
    await page.locator('text=New Note').click({ force: true })
    await page.locator('text=Create Blank Note').click({ force: true })

    // Wait for note editor to load
    await expect(page.locator('[data-testid="note-editor"]')).toBeVisible()

    // Add some content to work with
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('AI Content Generation Test')

    const contentTextarea = page.locator(
      '[data-testid="note-content-textarea"]'
    )
    await contentTextarea.fill(
      'This note explores various AI applications in software development.'
    )

    // Test Enhanced AI Toolbar visibility
    await expect(page.locator('text=AI Content Tools')).toBeVisible()

    // Test all content generation types
    const generationTypes = [
      { button: 'Continue Writing', expectedText: 'AI-generated continuation' },
      { button: 'Brainstorm Ideas', expectedText: 'Brainstorming Ideas' },
      { button: 'Answer Question', expectedText: 'Answer to your question' },
      { button: 'Create Outline', expectedText: 'Introduction' },
      { button: 'Generate Ideas', expectedText: 'Creative Ideas' },
    ]

    for (const { button, expectedText } of generationTypes) {
      // Open content generation dialog
      await page
        .locator('button', { hasText: 'Generate Content' })
        .click({ force: true })

      // Select generation type
      await page.locator('button', { hasText: button }).click({ force: true })

      // Add a prompt
      await page
        .locator('textarea[placeholder*="describe what you need"]')
        .fill('Help me understand AI concepts better')

      // Generate content
      await page
        .locator('button', { hasText: 'Generate' })
        .click({ force: true })

      // Wait for generation to complete
      await expect(page.locator(`text=${expectedText}`)).toBeVisible({
        timeout: 15000,
      })

      // Insert generated content
      await page
        .locator('button', { hasText: 'Insert Content' })
        .click({ force: true })

      // Verify content was inserted
      const updatedContent = await contentTextarea.inputValue()
      expect(updatedContent.length).toBeGreaterThan(50) // Content should be expanded

      // Close dialog for next iteration
      await page
        .locator('button:has-text("Close"), [aria-label="Close"]')
        .first()
        .click({ force: true })
    }

    // Test traditional AI features still work
    await page
      .locator('button', { hasText: 'Summarize' })
      .click({ force: true })
    await expect(page.locator('text=This is a concise summary')).toBeVisible({
      timeout: 10000,
    })

    await page.locator('button', { hasText: 'Rewrite' }).click({ force: true })
    await expect(
      page.locator('text=This is the rewritten version')
    ).toBeVisible({ timeout: 10000 })
  })

  test('Smart Linking Panel - Auto-Discovery and Link Creation', async ({
    page,
  }) => {
    // Create a new note first
    await page.locator('text=New Note').click({ force: true })
    await page.locator('text=Create Blank Note').click({ force: true })

    // Wait for note editor to load
    await expect(page.locator('[data-testid="note-editor"]')).toBeVisible()

    // Add content that should generate smart links
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('Neural Networks in Machine Learning')

    const contentTextarea = page.locator(
      '[data-testid="note-content-textarea"]'
    )
    await contentTextarea.fill(
      'Deep learning models use neural networks to process complex data patterns. These algorithms are fundamental to modern AI systems.'
    )

    // Test Smart Linking Panel visibility
    await expect(page.locator('text=Smart Connections')).toBeVisible()
    await expect(page.locator('text=AI-discovered connections')).toBeVisible()

    // Wait for auto-linking suggestions to load
    await expect(
      page.locator('text=Machine Learning Best Practices')
    ).toBeVisible({ timeout: 15000 })

    // Verify connection details
    await expect(page.locator('text=89%')).toBeVisible() // Similarity score
    await expect(page.locator('text=topical')).toBeVisible() // Connection type
    await expect(
      page.locator('text=Both notes discuss AI algorithms')
    ).toBeVisible() // Reason

    // Test link creation
    const firstSuggestion = page
      .locator('button')
      .filter({ hasText: 'Machine Learning Best Practices' })
      .first()

    // Create link to first suggestion
    await firstSuggestion
      .locator('button', { hasText: 'Link' })
      .click({ force: true })

    // Verify link was added to content
    const updatedContent = await contentTextarea.inputValue()
    expect(updatedContent).toContain(
      '[Machine Learning Best Practices](/notes/auto-link-1)'
    )

    // Test navigation to related note
    await firstSuggestion
      .locator('button', { hasText: 'Open' })
      .click({ force: true })

    // Should navigate to the linked note (in real app, this would change the URL)
    // For now, just verify the click was registered
    await expect(firstSuggestion).toBeVisible()

    // Test multiple connection types
    await expect(page.locator('text=conceptual')).toBeVisible()
    await expect(page.locator('text=methodological')).toBeVisible()

    // Test similarity threshold filtering
    const allSuggestions = page.locator(
      '[data-testid*="smart-link"], .smart-connection, [class*="connection"]'
    )
    const suggestionCount = await allSuggestions.count()
    expect(suggestionCount).toBeGreaterThan(0)
    expect(suggestionCount).toBeLessThanOrEqual(5) // Should respect limit
  })

  test('Integrated Workflow - Complete Elite Experience', async ({ page }) => {
    // Test complete workflow using all elite features together

    // 1. Start with Enhanced Global Search
    const searchInput = page
      .locator('input[placeholder*="Search notes with AI"]')
      .first()

    // Switch to semantic search
    const searchModeButton = page.locator(
      '[role="button"]:has(svg[class~="h-3"][class~="w-3"])'
    )
    await searchModeButton.click({ force: true })
    await page.locator('text=AI Semantic Search').click({ force: true })

    // Search for AI-related content
    await searchInput.fill('artificial intelligence applications')
    await expect(page.locator('text=semantic matches')).toBeVisible({
      timeout: 10000,
    })

    // 2. Create new note from search context
    await page.locator('text=New Note').click({ force: true })
    await page.locator('text=Create Blank Note').click({ force: true })

    await expect(page.locator('[data-testid="note-editor"]')).toBeVisible()

    // 3. Use Enhanced AI Toolbar for content generation
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('AI Applications in Healthcare')

    const contentTextarea = page.locator(
      '[data-testid="note-content-textarea"]'
    )
    await contentTextarea.fill(
      'Exploring how AI transforms medical diagnosis and treatment.'
    )

    // Generate brainstorming ideas
    await page
      .locator('button', { hasText: 'Generate Content' })
      .click({ force: true })
    await page
      .locator('button', { hasText: 'Brainstorm Ideas' })
      .click({ force: true })
    await page
      .locator('textarea[placeholder*="describe what you need"]')
      .fill('innovative AI applications in healthcare')
    await page.locator('button', { hasText: 'Generate' }).click({ force: true })

    await expect(page.locator('text=Brainstorming Ideas')).toBeVisible({
      timeout: 15000,
    })
    await page
      .locator('button', { hasText: 'Insert Content' })
      .click({ force: true })

    // 4. Verify Smart Linking Panel discovers connections
    await expect(page.locator('text=Smart Connections')).toBeVisible()
    await expect(
      page.locator('text=AI Applications in Healthcare')
    ).toBeVisible({ timeout: 15000 })

    // Verify connection to previously searched content
    await expect(
      page.locator(
        'text=artificial intelligence is revolutionizing medical diagnosis'
      )
    ).toBeVisible()

    // 5. Test cross-feature integration
    // Create a link from Smart Linking Panel
    const healthcareSuggestion = page
      .locator('button')
      .filter({ hasText: 'AI Applications in Healthcare' })
      .first()
    await healthcareSuggestion
      .locator('button', { hasText: 'Link' })
      .click({ force: true })

    // Verify content was enhanced with AI-generated ideas and smart links
    const finalContent = await contentTextarea.inputValue()
    expect(finalContent).toContain('Brainstorming Ideas')
    expect(finalContent).toContain('[AI Applications in Healthcare]')
    expect(finalContent.length).toBeGreaterThan(200) // Significantly expanded

    // 6. Test that all components remain functional together
    await expect(page.locator('text=AI Content Tools')).toBeVisible()
    await expect(page.locator('text=Smart Connections')).toBeVisible()
    await expect(searchInput).toBeVisible()

    // All features should be working simultaneously without conflicts
    await page
      .locator('button', { hasText: 'Summarize' })
      .click({ force: true })
    await expect(page.locator('text=This is a concise summary')).toBeVisible({
      timeout: 10000,
    })
  })

  test('Elite Features Performance and Error Handling', async ({ page }) => {
    // Test that elite features handle errors gracefully and perform well

    // Create note for testing
    await page.locator('text=New Note').click({ force: true })
    await page.locator('text=Create Blank Note').click({ force: true })
    await expect(page.locator('[data-testid="note-editor"]')).toBeVisible()

    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill('Performance Test Note')

    const contentTextarea = page.locator(
      '[data-testid="note-content-textarea"]'
    )
    await contentTextarea.fill(
      'Testing elite features performance and error handling capabilities.'
    )

    // Test AI features with empty content (should handle gracefully)
    await contentTextarea.fill('')

    await page
      .locator('button', { hasText: 'Summarize' })
      .click({ force: true })
    // Should handle empty content gracefully, not crash
    await page.waitForTimeout(2000)

    // Test search with special characters
    const searchInput = page
      .locator('input[placeholder*="Search notes with AI"]')
      .first()
    await searchInput.fill('!@#$%^&*(){}[]')

    // Should not crash or show errors
    await page.waitForTimeout(2000)
    await expect(searchInput).toBeVisible()

    // Test rapid interactions (stress test)
    const searchModeButton = page.locator(
      '[role="button"]:has(svg[class~="h-3"][class~="w-3"])'
    )

    // Rapidly switch search modes
    for (let i = 0; i < 3; i++) {
      await searchModeButton.click({ force: true })
      await page.locator('text=Keyword Search').click({ force: true })
      await searchModeButton.click({ force: true })
      await page.locator('text=AI Semantic Search').click({ force: true })
    }

    // Should remain stable
    await expect(searchInput).toBeVisible()
    await expect(page.locator('text=Smart Connections')).toBeVisible()
    await expect(page.locator('text=AI Content Tools')).toBeVisible()

    // Test that loading states are properly shown
    await searchInput.fill('complex search query')
    await expect(page.locator('[class*="animate-spin"]')).toBeVisible()
  })
})
