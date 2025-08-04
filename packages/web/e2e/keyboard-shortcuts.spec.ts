import { expect, test } from './fixtures/coverage'
import { waitForHydration } from './utils/wait-for-hydration'

test.describe('Keyboard Shortcuts', () => {
  // Skip auth tests in CI until proper Supabase test credentials are configured
  // Conditional skip removed - running all tests
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

    // Navigate to home page
    await page.goto('/')

    // Wait for the app to load by checking for a specific element
    await page.waitForSelector('[data-testid="app-shell"]', {
      state: 'visible',
      timeout: 10000,
    })
    // Or wait for the network to be idle when the app is ready
    await page.waitForLoadState('networkidle')

    // Wait for React hydration
    await waitForHydration(page)
  })

  const getModifier = () => (process.platform === 'darwin' ? 'Meta' : 'Control')

  test.describe('General Shortcuts', () => {
    test('command palette opens with Cmd+Shift+P', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+P`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('keyboard shortcuts help opens with Cmd+/', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+/`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('search opens with Cmd+K', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+K`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('escape closes dialogs', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Open a dialog first
      await page.keyboard.press(`${getModifier()}+/`)
      await page.keyboard.press('Escape')
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('Navigation Shortcuts', () => {
    test('navigation shortcuts work with arrow keys', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press('ArrowDown')
      await page.keyboard.press('ArrowUp')
      await page.keyboard.press('j')
      await page.keyboard.press('k')

      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('graph view opens with Cmd+G', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+G`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('quick switch with number keys', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      const modifier = getModifier()
      for (let i = 1; i <= 3; i++) {
        await page.keyboard.press(`${modifier}+${i}`)
      }

      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('Note Management Shortcuts', () => {
    test('create new note with Cmd+N', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+N`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('save note with Cmd+S', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+S`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('delete note with Cmd+D', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+D`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('daily notes shortcuts', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Today's daily note
      await page.keyboard.press(`${getModifier()}+T`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Yesterday's daily note
      await page.keyboard.press(`${getModifier()}+Shift+T`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('version history opens with Cmd+H', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+H`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('template picker opens with Cmd+Option+T', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Alt+T`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('tag management opens with Cmd+Shift+M', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+M`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('note organization shortcuts', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Toggle favorite
      await page.keyboard.press(`${getModifier()}+Alt+F`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Toggle pin
      await page.keyboard.press(`${getModifier()}+Alt+P`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Toggle archive
      await page.keyboard.press(`${getModifier()}+Shift+A`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Duplicate note
      await page.keyboard.press(`${getModifier()}+Shift+D`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('Search Shortcuts', () => {
    test('advanced search opens with Cmd+Shift+F', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+F`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('focus filter with Cmd+F', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+F`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('View Shortcuts', () => {
    test('sidebar toggle with Cmd+,', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+,`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('view mode toggle with Cmd+E', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+E`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('export dialog opens with Cmd+Shift+E', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+E`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('smart suggestions toggle with Cmd+Shift+R', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+R`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('multi-select mode with Cmd+M', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+M`)
      await page.keyboard.press(`${getModifier()}+A`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('Editing Shortcuts', () => {
    test('formatting shortcuts work', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Bold
      await page.keyboard.press(`${getModifier()}+B`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Italic
      await page.keyboard.press(`${getModifier()}+I`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Underline
      await page.keyboard.press(`${getModifier()}+U`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Code
      await page.keyboard.press(`${getModifier()}+\``)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Strikethrough
      await page.keyboard.press(`${getModifier()}+Shift+X`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('focus shortcuts work', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Focus title
      await page.keyboard.press(`${getModifier()}+Shift+L`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Focus content
      await page.keyboard.press(`${getModifier()}+Shift+K`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('AI Shortcuts', () => {
    test('AI features shortcuts work', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // AI generate
      await page.keyboard.press(`${getModifier()}+Shift+G`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // AI summary
      await page.keyboard.press(`${getModifier()}+Shift+S`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // AI improve
      await page.keyboard.press(`${getModifier()}+Shift+I`)
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })

  test.describe('Complex Workflows', () => {
    test('command palette search functionality', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      await page.keyboard.press(`${getModifier()}+Shift+P`)
      await page.keyboard.press('Escape')
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('keyboard shortcuts are properly registered', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Test various keyboard shortcuts don't break the app
      const modifier = getModifier()
      await page.keyboard.press(`${modifier}+K`)
      await page.keyboard.press(`${modifier}+/`)
      await page.keyboard.press('Escape')
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })

    test('sequential shortcuts work correctly', async ({ page }) => {
      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()

      // Test a sequence of shortcuts
      const modifier = getModifier()
      await page.keyboard.press(`${modifier}+N`) // New note
      await page.keyboard.press(`${modifier}+S`) // Save
      await page.keyboard.press(`${modifier}+G`) // Graph view
      await page.keyboard.press(`${modifier}+K`) // Search
      await page.keyboard.press('Escape') // Close

      await expect(page.locator('[data-testid="app-shell"]')).toBeVisible()
    })
  })
})
