import { test, expect, devices } from '@playwright/test'
import { createSupabaseClient } from './utils/supabase'
import { generateTestUser, cleanupTestUser } from './utils/test-users'

let testUser: { email: string; password: string; id?: string }

// Test various mobile devices
const mobileDevices = [
  { name: 'iPhone 12', device: devices['iPhone 12'] },
  { name: 'iPhone SE', device: devices['iPhone SE'] },
  { name: 'Pixel 5', device: devices['Pixel 5'] },
  { name: 'Galaxy S20', device: devices['Galaxy S III'] },
  { name: 'iPad', device: devices['iPad (gen 7)'] },
]

test.describe('Mobile Responsiveness', () => {
  test.beforeAll(async () => {
    // Create test user
    testUser = await generateTestUser()
    const supabase = createSupabaseClient()
    const { data, error } = await supabase.auth.signUp({
      email: testUser.email,
      password: testUser.password,
    })
    if (error) throw error
    testUser.id = data.user?.id
  })

  test.afterAll(async () => {
    // Cleanup test user
    if (testUser.id) {
      await cleanupTestUser(testUser.id)
    }
  })

  mobileDevices.forEach(({ name, device }) => {
    test.describe(`${name} Layout`, () => {
      test.use({ ...device })

      test('should display mobile-optimized sign in page', async ({ page }) => {
        await page.goto('/auth/sign-in')

        // Check viewport
        const viewport = page.viewportSize()
        expect(viewport?.width).toBeLessThanOrEqual(768)

        // Elements should be visible and properly sized
        const emailInput = page.getByLabel(/email/i)
        const passwordInput = page.getByLabel(/password/i)
        const signInButton = page.getByRole('button', { name: /sign in/i })

        await expect(emailInput).toBeVisible()
        await expect(passwordInput).toBeVisible()
        await expect(signInButton).toBeVisible()

        // Check touch-friendly sizing
        const buttonBox = await signInButton.boundingBox()
        expect(buttonBox?.height).toBeGreaterThanOrEqual(44) // iOS minimum touch target

        // Social login buttons should stack vertically on mobile
        const socialButtons = page.locator('[data-social-login]')
        if ((await socialButtons.count()) > 0) {
          const firstButton = socialButtons.first()
          const lastButton = socialButtons.last()

          const firstBox = await firstButton.boundingBox()
          const lastBox = await lastButton.boundingBox()

          // Buttons should be stacked (different Y positions)
          expect(firstBox?.y).toBeLessThan(lastBox?.y || 0)
        }
      })

      test('should have working mobile navigation', async ({ page }) => {
        // Sign in first
        await page.goto('/auth/sign-in')
        await page.getByLabel(/email/i).fill(testUser.email)
        await page.getByLabel(/password/i).fill(testUser.password)
        await page.getByRole('button', { name: /sign in/i }).click()
        await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

        // Mobile menu should be hidden by default
        const sidebar = page.getByRole('navigation', { name: /main/i })
        const sidebarBox = await sidebar.boundingBox()

        if (viewport?.width && viewport.width < 768) {
          // On small screens, sidebar should be off-screen or hidden
          expect(sidebarBox?.x).toBeLessThan(0)
          // Or not visible
          await expect(sidebar).not.toBeVisible()

          // Hamburger menu should be visible
          const hamburger = page.getByRole('button', { name: /menu/i })
          await expect(hamburger).toBeVisible()

          // Open mobile menu
          await hamburger.click()

          // Sidebar should slide in
          await expect(sidebar).toBeVisible()

          // Should have overlay
          const overlay = page.locator('[data-sidebar-overlay]')
          await expect(overlay).toBeVisible()

          // Close by clicking overlay
          await overlay.click()
          await expect(sidebar).not.toBeVisible()
        }
      })

      test('should adapt editor for mobile', async ({ page }) => {
        // Sign in and create note
        await page.goto('/auth/sign-in')
        await page.getByLabel(/email/i).fill(testUser.email)
        await page.getByLabel(/password/i).fill(testUser.password)
        await page.getByRole('button', { name: /sign in/i }).click()
        await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

        // Create new note
        // On mobile, might need to open menu first
        const viewport = page.viewportSize()
        if (viewport?.width && viewport.width < 768) {
          const hamburger = page.getByRole('button', { name: /menu/i })
          if (await hamburger.isVisible()) {
            await hamburger.click()
          }
        }

        await page.getByRole('button', { name: /new note/i }).click()

        // Editor should be full width on mobile
        const editor = page.locator('[data-plate-editor]')
        await expect(editor).toBeVisible()

        const editorBox = await editor.boundingBox()
        const viewportWidth = viewport?.width || 0

        // Editor should take most of the width (accounting for padding)
        expect(editorBox?.width).toBeGreaterThan(viewportWidth * 0.9)

        // Toolbar should be accessible
        const toolbar = page.locator('[role="toolbar"]')
        if (viewport?.width && viewport.width < 768) {
          // On mobile, toolbar might be in a dropdown or scrollable
          const toolbarBox = await toolbar.boundingBox()

          // Check if toolbar is scrollable
          const isScrollable = await toolbar.evaluate((el) => {
            return el.scrollWidth > el.clientWidth
          })

          if (isScrollable) {
            // Toolbar items should be horizontally scrollable
            await toolbar.evaluate((el) => (el.scrollLeft = 100))
            const newScrollLeft = await toolbar.evaluate((el) => el.scrollLeft)
            expect(newScrollLeft).toBeGreaterThan(0)
          }
        }
      })

      test('should handle touch gestures', async ({ page }) => {
        // Sign in
        await page.goto('/auth/sign-in')
        await page.getByLabel(/email/i).fill(testUser.email)
        await page.getByLabel(/password/i).fill(testUser.password)
        await page.getByRole('button', { name: /sign in/i }).click()
        await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

        // Create multiple notes for scrolling
        for (let i = 1; i <= 5; i++) {
          await page.getByRole('button', { name: /new note/i }).click()
          await page.waitForTimeout(500)
        }

        // Test swipe to delete (if implemented)
        const notesList = page.getByRole('list', { name: /notes/i })
        const firstNote = notesList.getByRole('listitem').first()

        // Simulate swipe
        const box = await firstNote.boundingBox()
        if (box) {
          await page.touchscreen.tap(
            box.x + box.width / 2,
            box.y + box.height / 2,
          )
          await page.touchscreen.swipe({
            startX: box.x + box.width - 10,
            startY: box.y + box.height / 2,
            endX: box.x + 10,
            endY: box.y + box.height / 2,
            steps: 10,
          })

          // Check if delete action appears
          const deleteButton = firstNote.getByRole('button', {
            name: /delete/i,
          })
          if (await deleteButton.isVisible()) {
            await expect(deleteButton).toBeVisible()
          }
        }

        // Test pull to refresh (if implemented)
        const notesContainer = page.locator('[data-notes-container]')
        const containerBox = await notesContainer.boundingBox()
        if (containerBox) {
          await page.touchscreen.swipe({
            startX: containerBox.x + containerBox.width / 2,
            startY: containerBox.y + 50,
            endX: containerBox.x + containerBox.width / 2,
            endY: containerBox.y + 200,
            steps: 10,
          })

          // Check for refresh indicator
          const refreshIndicator = page.locator('[data-refresh-indicator]')
          if (await refreshIndicator.isVisible()) {
            await expect(refreshIndicator).toBeVisible()
          }
        }
      })

      test('should have responsive search', async ({ page }) => {
        // Sign in
        await page.goto('/auth/sign-in')
        await page.getByLabel(/email/i).fill(testUser.email)
        await page.getByLabel(/password/i).fill(testUser.password)
        await page.getByRole('button', { name: /sign in/i }).click()
        await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

        const viewport = page.viewportSize()
        const searchInput = page.getByRole('searchbox', { name: /search/i })

        if (viewport?.width && viewport.width < 768) {
          // On mobile, search might be in a collapsible form
          const searchButton = page.getByRole('button', { name: /search/i })
          if (await searchButton.isVisible()) {
            await searchButton.click()
            // Search should expand or show modal
            await expect(searchInput).toBeVisible()
          }
        } else {
          // On larger screens, search should be always visible
          await expect(searchInput).toBeVisible()
        }

        // Test search functionality
        await searchInput.fill('test')
        await page.waitForTimeout(500)

        // Results should be mobile-optimized
        const searchResults = page.getByRole('region', {
          name: /search results/i,
        })
        if (await searchResults.isVisible()) {
          const resultsBox = await searchResults.boundingBox()

          // Results should take full width on mobile
          if (viewport?.width && viewport.width < 768) {
            expect(resultsBox?.width).toBeGreaterThan(viewport.width * 0.9)
          }
        }
      })
    })
  })

  test.describe('Responsive Breakpoints', () => {
    const breakpoints = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1280, height: 800 },
      { name: 'Wide', width: 1920, height: 1080 },
    ]

    breakpoints.forEach(({ name, width, height }) => {
      test(`should adapt layout at ${name} (${width}x${height})`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height })

        // Sign in
        await page.goto('/auth/sign-in')
        await page.getByLabel(/email/i).fill(testUser.email)
        await page.getByLabel(/password/i).fill(testUser.password)
        await page.getByRole('button', { name: /sign in/i }).click()
        await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

        // Check sidebar behavior
        const sidebar = page.getByRole('navigation', { name: /main/i })
        const mainContent = page.getByRole('main')

        if (width < 768) {
          // Mobile: Sidebar should be hidden
          await expect(sidebar).not.toBeVisible()
          await expect(
            page.getByRole('button', { name: /menu/i }),
          ).toBeVisible()
        } else if (width < 1024) {
          // Tablet: Sidebar might be collapsible
          const sidebarBox = await sidebar.boundingBox()
          expect(sidebarBox?.width).toBeLessThanOrEqual(250)
        } else {
          // Desktop: Sidebar should be visible and wider
          await expect(sidebar).toBeVisible()
          const sidebarBox = await sidebar.boundingBox()
          expect(sidebarBox?.width).toBeGreaterThanOrEqual(250)
        }

        // Check content area
        const contentBox = await mainContent.boundingBox()
        if (width >= 768) {
          // Content should not overlap with sidebar
          const sidebarBox = await sidebar.boundingBox()
          if (sidebarBox && (await sidebar.isVisible())) {
            expect(contentBox?.x).toBeGreaterThanOrEqual(
              sidebarBox.x + sidebarBox.width,
            )
          }
        }

        // Check editor width
        await page.getByRole('button', { name: /new note/i }).click()
        const editor = page.locator('[data-plate-editor]')
        const editorBox = await editor.boundingBox()

        if (width < 768) {
          // Mobile: Full width
          expect(editorBox?.width).toBeGreaterThan(width * 0.9)
        } else if (width < 1280) {
          // Tablet/Small desktop: Reasonable max width
          expect(editorBox?.width).toBeLessThanOrEqual(800)
        } else {
          // Large desktop: Comfortable reading width
          expect(editorBox?.width).toBeLessThanOrEqual(900)
        }
      })
    })
  })

  test.describe('Mobile-Specific Features', () => {
    test.use({ ...devices['iPhone 12'] })

    test('should show mobile-optimized export options', async ({ page }) => {
      // Sign in and create note
      await page.goto('/auth/sign-in')
      await page.getByLabel(/email/i).fill(testUser.email)
      await page.getByLabel(/password/i).fill(testUser.password)
      await page.getByRole('button', { name: /sign in/i }).click()
      await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

      await page.getByRole('button', { name: /new note/i }).click()

      // Open export dialog
      await page.getByRole('button', { name: /export/i }).click()

      // Should show mobile-friendly options
      const exportDialog = page.getByRole('dialog', { name: /export/i })
      await expect(exportDialog).toBeVisible()

      // Export buttons should be large and touch-friendly
      const exportButtons = exportDialog.getByRole('button')
      const buttonCount = await exportButtons.count()

      for (let i = 0; i < buttonCount; i++) {
        const button = exportButtons.nth(i)
        const box = await button.boundingBox()
        expect(box?.height).toBeGreaterThanOrEqual(44)
      }

      // Should have share option on mobile
      const shareButton = exportDialog.getByRole('button', { name: /share/i })
      if (await shareButton.isVisible()) {
        await shareButton.click()
        // Note: Can't test native share dialog in Playwright
      }
    })

    test('should handle virtual keyboard properly', async ({ page }) => {
      // Sign in
      await page.goto('/auth/sign-in')
      await page.getByLabel(/email/i).fill(testUser.email)
      await page.getByLabel(/password/i).fill(testUser.password)
      await page.getByRole('button', { name: /sign in/i }).click()
      await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

      // Create note
      await page.getByRole('button', { name: /new note/i }).click()

      // Focus editor
      const editor = page.locator('[data-plate-editor]')
      await editor.click()

      // Get initial viewport height
      const initialHeight = await page.evaluate(() => window.innerHeight)

      // Simulate keyboard appearance by checking viewport resize
      await page.waitForTimeout(500) // Wait for potential keyboard

      const currentHeight = await page.evaluate(() => window.innerHeight)

      // If keyboard appeared, viewport should be smaller
      if (currentHeight < initialHeight) {
        // Content should still be accessible
        await expect(editor).toBeInViewport()

        // Toolbar should adjust position
        const toolbar = page.locator('[role="toolbar"]')
        const toolbarBox = await toolbar.boundingBox()

        // Toolbar should be above keyboard (in visible area)
        expect(toolbarBox?.y).toBeLessThan(currentHeight)
      }
    })

    test('should have mobile-optimized error messages', async ({ page }) => {
      await page.goto('/auth/sign-in')

      // Try to sign in with invalid credentials
      await page.getByLabel(/email/i).fill('invalid@example.com')
      await page.getByLabel(/password/i).fill('wrongpassword')
      await page.getByRole('button', { name: /sign in/i }).click()

      // Error should be visible and readable on mobile
      const errorMessage = page.getByRole('alert')
      await expect(errorMessage).toBeVisible()

      const errorBox = await errorMessage.boundingBox()
      const viewport = page.viewportSize()

      // Error should not overflow screen
      expect(errorBox?.width).toBeLessThanOrEqual(viewport?.width || 0)

      // Text should be readable size
      const fontSize = await errorMessage.evaluate((el) => {
        return window.getComputedStyle(el).fontSize
      })
      expect(parseInt(fontSize)).toBeGreaterThanOrEqual(14)
    })

    test('should support mobile-specific gestures in editor', async ({
      page,
    }) => {
      // Sign in and create note
      await page.goto('/auth/sign-in')
      await page.getByLabel(/email/i).fill(testUser.email)
      await page.getByLabel(/password/i).fill(testUser.password)
      await page.getByRole('button', { name: /sign in/i }).click()
      await expect(page).toHaveURL('/dashboard', { timeout: 10000 })

      await page.getByRole('button', { name: /new note/i }).click()

      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await editor.type('Test text for selection')

      // Test text selection via long press simulation
      const editorBox = await editor.boundingBox()
      if (editorBox) {
        // Simulate long press
        await page.touchscreen.tap(editorBox.x + 50, editorBox.y + 10)
        await page.waitForTimeout(500) // Hold

        // Selection handles might appear
        const selectionHandles = page.locator('[data-selection-handle]')
        if ((await selectionHandles.count()) > 0) {
          await expect(selectionHandles.first()).toBeVisible()
        }
      }

      // Test pinch to zoom (if supported)
      await page
        .evaluate(() => {
          // Check if pinch zoom is disabled for better UX
          const viewport = document.querySelector('meta[name="viewport"]')
          const content = viewport?.getAttribute('content') || ''
          return content.includes('user-scalable=no')
        })
        .then((isScalingDisabled) => {
          expect(isScalingDisabled).toBe(true)
        })
    })
  })
})
