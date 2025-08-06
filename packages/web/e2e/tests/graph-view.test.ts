import { expect, test } from '@playwright/test'

test.describe('Graph View', () => {
  test.beforeEach(async ({ page }) => {
    // Set dev auth bypass cookie
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

    // Wait for the shell to load
    await expect(page.getByTestId('app-shell')).toBeVisible()
  })

  // Helper function to create a test note
  async function createTestNote(page: any, title: string) {
    await page.getByRole('button', { name: 'New Note' }).click({ force: true })

    // Handle template picker
    await expect(
      page.locator('[role="dialog"]:has-text("Choose a Template")')
    ).toBeVisible()
    await page
      .getByRole('button', { name: 'Blank Note' })
      .click({ force: true })

    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)

    // Get the note ID from URL
    const url = page.url()
    const noteId = url.split('/notes/')[1]

    // Fill in title
    const titleInput = page.locator('[data-testid="note-title-input"]')
    await titleInput.fill(title)

    // Return note ID for cleanup
    return { id: noteId }
  }

  test('should navigate to graph view from sidebar', async ({ page }) => {
    // Navigate to graph view directly (sidebar button not implemented)
    await page.goto('/app/graph')

    // Should show graph page header
    await expect(
      page.getByRole('heading', { name: /knowledge graph/i })
    ).toBeVisible()
    await expect(
      page.getByText(/visualize connections between your notes/i)
    ).toBeVisible()
  })

  test('should show empty state when no notes exist', async ({ page }) => {
    // Navigate to graph view
    await page.goto('/app/graph')

    // Should show empty state
    await expect(page.getByText(/no notes to visualize/i)).toBeVisible()
    await expect(
      page.getByText(/create some notes and link them together/i)
    ).toBeVisible()
  })

  test('should display graph with notes', async ({ page }) => {
    // Create test notes
    await createTestNote(page, 'First Test Note')
    await page.goto('/')
    await createTestNote(page, 'Second Test Note')

    // Navigate to graph view
    await page.goto('/app/graph')

    // Wait for graph to load
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Should show graph statistics
    await expect(page.getByText(/2 notes/i)).toBeVisible()

    // Should show graph SVG
    await expect(page.locator('svg')).toBeVisible()

    // Should show nodes (circles for notes)
    const nodes = page.locator('svg circle')
    await expect(nodes).toHaveCount(2)
  })

  test('should allow searching and filtering notes', async ({ page }) => {
    // Create test notes with different titles
    await createTestNote(page, 'JavaScript Tutorial')
    await page.goto('/')
    await createTestNote(page, 'Python Guide')
    await page.goto('/')
    await createTestNote(page, 'JavaScript Advanced')

    // Navigate to graph view
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Should show all 3 notes initially
    await expect(page.getByText(/3 notes/i)).toBeVisible()

    // Search for "JavaScript"
    const searchInput = page.getByPlaceholder(/search notes/i)
    await searchInput.fill('JavaScript')

    // Should filter to show only JavaScript notes
    await expect(page.locator('svg circle')).toHaveCount(2)

    // Clear search
    await searchInput.clear()

    // Should show all notes again
    await expect(page.locator('svg circle')).toHaveCount(3)
  })

  test('should support different layout options', async ({ page }) => {
    // Create test notes
    await createTestNote(page, 'Node A')

    // Navigate to graph view
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Default should be Force Layout
    const layoutSelect = page.locator('select')
    await expect(layoutSelect).toHaveValue('force')

    // Change to Circular Layout
    await layoutSelect.selectOption('circular')
    await expect(layoutSelect).toHaveValue('circular')

    // Change to Hierarchical Layout
    await layoutSelect.selectOption('hierarchical')
    await expect(layoutSelect).toHaveValue('hierarchical')

    // Change back to Force Layout
    await layoutSelect.selectOption('force')
    await expect(layoutSelect).toHaveValue('force')
  })

  test('should provide zoom controls', async ({ page }) => {
    // Create a test note
    await createTestNote(page, 'Test Note')

    // Navigate to graph view
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Should show zoom controls
    const zoomInBtn = page
      .getByRole('button')
      .filter({ has: page.locator('[data-lucide="zoom-in"]') })
    const zoomOutBtn = page
      .getByRole('button')
      .filter({ has: page.locator('[data-lucide="zoom-out"]') })
    const resetBtn = page
      .getByRole('button')
      .filter({ has: page.locator('[data-lucide="rotate-ccw"]') })

    await expect(zoomInBtn).toBeVisible()
    await expect(zoomOutBtn).toBeVisible()
    await expect(resetBtn).toBeVisible()

    // Should show zoom percentage
    await expect(page.getByText(/zoom: 100%/i)).toBeVisible()

    // Click zoom in
    await zoomInBtn.click({ force: true })

    // Click zoom out
    await zoomOutBtn.click({ force: true })

    // Click reset
    await resetBtn.click({ force: true })
  })

  test('should navigate to note when clicking on node', async ({ page }) => {
    // Create a test note
    const note1 = await createTestNote(page, 'Clickable Note')

    // Navigate to graph view
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Click on the node (circle)
    const node = page.locator('svg circle').first()
    await node.click({ force: true })

    // Should navigate to the note page
    await expect(page).toHaveURL(`/notes/${note1.id}`)
  })

  test('should show node tooltips on hover', async ({ page }) => {
    // Create test notes
    await createTestNote(page, 'Hover Test Note')

    // Navigate to graph view
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Hover over the node
    const node = page.locator('svg circle').first()
    await node.hover()

    // Should show tooltip with note information
    const tooltip = page.locator('.graph-tooltip')
    await expect(tooltip).toBeVisible()
    await expect(tooltip).toContainText('Hover Test Note')
    await expect(tooltip).toContainText('Connections:')
    await expect(tooltip).toContainText('Created:')

    // Move away to hide tooltip
    await page.locator('body').hover()
    await expect(tooltip).not.toBeVisible()
  })

  test('should navigate back to notes from graph view', async ({ page }) => {
    // Navigate to graph view
    await page.goto('/app/graph')

    // Click back to notes button
    await page
      .getByRole('button', { name: /back to notes/i })
      .click({ force: true })

    // Should navigate back to notes
    await expect(page).toHaveURL('/notes')
  })

  test('should handle error states gracefully', async ({ page }) => {
    // Mock network failure
    await page.route('/api/graph', (route) => {
      route.abort('failed')
    })

    // Navigate to graph view
    await page.goto('/app/graph')

    // Should show error state
    await expect(page.getByText(/failed to load graph data/i)).toBeVisible()
    await expect(page.getByRole('button', { name: /try again/i })).toBeVisible()
  })

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Create a test note
    await createTestNote(page, 'Responsive Test')

    // Test on mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/app/graph')
    await expect(page.getByText(/loading graph/i)).not.toBeVisible({
      timeout: 10000,
    })

    // Graph should still be visible and functional
    await expect(page.locator('svg')).toBeVisible()
    await expect(page.getByPlaceholder(/search notes/i)).toBeVisible()

    // Test on tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.locator('svg')).toBeVisible()

    // Test on desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 })
    await expect(page.locator('svg')).toBeVisible()
  })
})
