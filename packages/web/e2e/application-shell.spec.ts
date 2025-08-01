import { expect, test } from './fixtures/coverage'

test.describe('Application Shell', () => {
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

    // Navigate to the app directly
    await page.goto('/app')
  })

  test('should display the main application shell', async ({ page }) => {
    // Capture all console messages
    const consoleMessages: string[] = []
    page.on('console', (msg) => {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`)
    })

    // Wait for the app-shell to appear - this is the key test
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })

    // Give it a moment for console logs to appear
    await page.waitForTimeout(1000)

    console.info('Console messages:', consoleMessages)

    // Check sidebar structure - use more specific selectors
    await expect(
      page.getByRole('heading', { name: 'Notable', exact: true })
    ).toBeVisible()
    await expect(page.getByRole('button', { name: 'New Note' })).toBeVisible()
    await expect(page.getByText('Recent Notes')).toBeVisible()

    // Check main content area
    await expect(
      page.getByRole('heading', { name: 'Welcome to Notable' })
    ).toBeVisible()
    await expect(
      page.getByText('A modern note-taking experience')
    ).toBeVisible()
  })

  test('should display proper responsive layout', async ({ page }) => {
    // Check desktop layout
    const sidebar = page.locator('aside')
    await expect(sidebar).toBeVisible()
    await expect(sidebar).toHaveClass(/w-64/)

    // Check main content area
    const main = page.locator('main')
    await expect(main).toBeVisible()
    await expect(main).toHaveClass(/flex-1/)

    // Check header
    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(header).toHaveClass(/border-b/)
  })

  test('should display appropriate content based on notes existence', async ({
    page,
  }) => {
    // Check if there are existing notes in sidebar
    const notesSection = page.getByText('Recent Notes')
    await expect(notesSection).toBeVisible()

    // Count notes in sidebar
    const noteItems = page
      .locator('button')
      .filter({ hasText: /.+/ })
      .filter({ has: page.locator('svg[data-lucide="file-text"]') })
    const noteCount = await noteItems.count()

    if (noteCount === 0) {
      // Empty state should be shown
      await expect(
        page.getByText('No notes yet. Create your first note to get started.')
      ).toBeVisible()
      await expect(
        page.getByRole('button', { name: 'Create Your First Note' })
      ).toBeVisible()
    } else {
      // Notes exist, welcome message should be shown
      await expect(
        page.getByRole('heading', { name: 'Welcome to Notable' })
      ).toBeVisible()
      await expect(
        page.getByText('A modern note-taking experience')
      ).toBeVisible()
    }
  })

  test('should create a new note when clicking New Note button', async ({
    page,
  }) => {
    // Click the New Note button in sidebar
    await page.getByRole('button', { name: 'New Note' }).click()

    // Template picker should open - wait for the dialog and its content
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()

    // Click "Blank Note" button
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    // Should navigate to new note page
    await expect(page).toHaveURL(/\/notes\/[\w-]+/)

    // Should show note editor
    await expect(page.getByPlaceholder('Untitled')).toBeVisible()
  })

  test('should create a new note via various entry points', async ({
    page,
  }) => {
    // Try the empty state button first if it exists, otherwise use sidebar button
    const createFirstNoteButton = page.getByRole('button', {
      name: 'Create Your First Note',
    })
    const newNoteButton = page.getByRole('button', { name: 'New Note' })

    const createFirstExists = (await createFirstNoteButton.count()) > 0

    if (createFirstExists) {
      await createFirstNoteButton.click()
    } else {
      await newNoteButton.click()
    }

    // Template picker should open - wait for the dialog and its content
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()

    // Click "Blank Note" button
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    // Should navigate to new note page
    await expect(page).toHaveURL(/\/notes\/[\w-]+/)

    // Should show note editor
    await expect(page.getByPlaceholder('Untitled')).toBeVisible()
  })

  test('should navigate back to app home from note editor', async ({
    page,
  }) => {
    // Create a new note
    await page.getByRole('button', { name: 'New Note' }).click()

    // Handle template picker
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)

    // Navigate back to app home
    await page.goto('/app')

    // Should show welcome message
    await expect(page.getByText('Welcome to Notable')).toBeVisible()
  })

  test('should display notes in sidebar after creation', async ({ page }) => {
    // Create a new note
    await page.getByRole('button', { name: 'New Note' }).click()

    // Handle template picker
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)

    // Add title to the note
    const titleInput = page.getByPlaceholder('Untitled')
    await titleInput.fill('Test Note Title')

    // Wait for auto-save
    await page.waitForTimeout(1000)

    // Navigate back to app home
    await page.goto('/app')

    // Should see the note in the sidebar
    await expect(page.getByText('Test Note Title')).toBeVisible()

    // Should no longer show empty state
    await expect(
      page.getByText('No notes yet. Create your first note to get started.')
    ).not.toBeVisible()
  })

  test('should navigate to note when clicking note in sidebar', async ({
    page,
  }) => {
    // Create a new note first
    await page.getByRole('button', { name: 'New Note' }).click()

    // Handle template picker
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)

    // Add title to the note
    const titleInput = page.getByPlaceholder('Untitled')
    await titleInput.fill('Clickable Note')

    // Wait for auto-save
    await page.waitForTimeout(1000)

    // Navigate back to app home
    await page.goto('/app')

    // Click on the note in sidebar
    await page.getByText('Clickable Note').click()

    // Should navigate to the note
    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)
    await expect(page.locator('input[value="Clickable Note"]')).toBeVisible()
  })

  test('should show user menu in header', async ({ page }) => {
    // Check if user menu is visible (correct selector from auth tests)
    const userMenu = page.getByTestId('user-menu-trigger')
    await expect(userMenu).toBeVisible()
  })

  test('should maintain layout consistency across different screen sizes', async ({
    page,
  }) => {
    // Test desktop layout
    await page.setViewportSize({ width: 1200, height: 800 })
    await expect(page.getByTestId('app-shell')).toHaveClass(/flex/)

    // Sidebar should be visible
    const sidebar = page.locator('aside')
    await expect(sidebar).toBeVisible()

    // Test tablet-like layout
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.getByTestId('app-shell')).toBeVisible()

    // Test mobile layout
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByTestId('app-shell')).toBeVisible()
  })

  test('should handle loading states properly', async ({ page }) => {
    // Navigate to app
    await page.goto('/app')

    // The shell should eventually be visible (no infinite loading)
    await expect(page.getByTestId('app-shell')).toBeVisible({ timeout: 10000 })

    // Should not show loading spinner indefinitely
    const spinner = page.locator('[data-testid="loading-spinner"]')
    if (await spinner.isVisible()) {
      await expect(spinner).not.toBeVisible({ timeout: 5000 })
    }
  })

  test('should handle keyboard navigation', async ({ page }) => {
    // Create a note first
    await page.getByRole('button', { name: 'New Note' }).click()

    // Handle template picker
    await expect(page.locator('[data-testid="template-picker"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Blank Note' })).toBeVisible()
    const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
    await blankNoteButton.click()

    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)

    const titleInput = page.getByPlaceholder('Untitled')
    await titleInput.fill('Keyboard Test Note')
    await page.waitForTimeout(1000)

    // Navigate back
    await page.goto('/app')

    // Use keyboard to navigate to New Note button
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')

    // Should be able to activate with Enter
    const newNoteButton = page.getByRole('button', { name: 'New Note' })
    await newNoteButton.focus()
    await page.keyboard.press('Enter')

    // Should navigate to new note
    await expect(page).toHaveURL(/\/notes\/[a-f0-9-]+/)
  })

  test('should display semantic HTML structure', async ({ page }) => {
    // Check for proper semantic elements
    await expect(page.locator('aside')).toBeVisible() // Sidebar
    await expect(page.locator('header')).toBeVisible() // Header
    await expect(page.locator('main')).toBeVisible() // Main content

    // Check heading hierarchy
    await expect(
      page.locator('h1').filter({ hasText: 'Notable' })
    ).toBeVisible()
    await expect(
      page.locator('h2').filter({ hasText: 'Welcome to Notable' })
    ).toBeVisible()
    await expect(
      page.locator('h3').filter({ hasText: 'Recent Notes' })
    ).toBeVisible()
  })
})
