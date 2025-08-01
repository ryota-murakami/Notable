import { expect, test } from 'playwright-test-coverage'

test.describe('Comprehensive Tag Components Tests', () => {
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

    // Create a new note to work with tags
    await page.click('[data-testid="new-note-button"]')
    await page.waitForSelector('[data-testid="note-editor"]', {
      timeout: 10000,
    })
  })

  test.describe('Tag Input Component', () => {
    test('should render tag input with placeholder', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')
      await expect(tagInput).toBeVisible()
      await expect(tagInput).toHaveAttribute('placeholder', 'Add tags...')
    })

    test('should add tags by typing and pressing Enter', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add first tag
      await tagInput.click()
      await tagInput.type('javascript')
      await tagInput.press('Enter')

      // Verify tag is added
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("javascript")')
      ).toBeVisible()

      // Add second tag
      await tagInput.type('react')
      await tagInput.press('Enter')

      // Verify both tags are present
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(2)
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("react")')
      ).toBeVisible()
    })

    test('should add tags by typing and pressing comma', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('python,')

      // Verify tag is added
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("python")')
      ).toBeVisible()

      // Input should be cleared
      await expect(tagInput).toHaveValue('')
    })

    test('should add tags by typing and pressing Tab', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('typescript')
      await tagInput.press('Tab')

      // Verify tag is added
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("typescript")')
      ).toBeVisible()
    })

    test('should add multiple tags by pasting', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()

      // Paste multiple tags
      await page.evaluate(() => {
        navigator.clipboard.writeText('tag1, tag2, tag3')
      })
      await tagInput.press('Control+v')
      await tagInput.press('Enter')

      // Verify all tags are added
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(3)
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("tag1")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("tag2")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("tag3")')
      ).toBeVisible()
    })

    test('should prevent duplicate tags', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add a tag
      await tagInput.click()
      await tagInput.type('unique')
      await tagInput.press('Enter')

      // Try to add the same tag
      await tagInput.type('unique')
      await tagInput.press('Enter')

      // Should still have only one tag
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("unique")')
      ).toHaveCount(1)

      // Should show error message
      await expect(
        page.locator('[data-testid="tag-error"]:has-text("Tag already exists")')
      ).toBeVisible()
    })

    test('should validate tag format', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Try to add invalid tags
      await tagInput.click()

      // Empty tag
      await tagInput.press('Enter')
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(0)

      // Tag with only spaces
      await tagInput.type('   ')
      await tagInput.press('Enter')
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(0)

      // Tag with special characters
      await tagInput.type('tag@#$%')
      await tagInput.press('Enter')
      await expect(
        page.locator('[data-testid="tag-error"]:has-text("Invalid tag format")')
      ).toBeVisible()
    })

    test('should limit tag length', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Try to add a very long tag
      const longTag = 'a'.repeat(51)
      await tagInput.click()
      await tagInput.type(longTag)
      await tagInput.press('Enter')

      // Should show error
      await expect(
        page.locator('[data-testid="tag-error"]:has-text("Tag too long")')
      ).toBeVisible()
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(0)
    })

    test('should limit total number of tags', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add maximum number of tags (assuming 10)
      for (let i = 1; i <= 10; i++) {
        await tagInput.click()
        await tagInput.type(`tag${i}`)
        await tagInput.press('Enter')
      }

      // Try to add one more
      await tagInput.click()
      await tagInput.type('tag11')
      await tagInput.press('Enter')

      // Should show error
      await expect(
        page.locator(
          '[data-testid="tag-error"]:has-text("Maximum tags reached")'
        )
      ).toBeVisible()
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(10)
    })

    test('should show tag suggestions on focus', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Focus on input
      await tagInput.click()

      // Should show suggestions dropdown
      await expect(
        page.locator('[data-testid="tag-suggestions"]')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]')
      ).toHaveCount(5) // Assuming 5 suggestions
    })

    test('should filter tag suggestions while typing', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('jav')

      // Should show filtered suggestions
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]')
      ).toContainText('javascript')
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]')
      ).toContainText('java')

      // Should not show unrelated suggestions
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]:has-text("python")')
      ).toHaveCount(0)
    })

    test('should select suggestion with keyboard', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('typ')

      // Navigate suggestions with arrow keys
      await tagInput.press('ArrowDown')
      await expect(
        page.locator('[data-testid="tag-suggestion-item"].selected')
      ).toHaveCount(1)

      await tagInput.press('ArrowDown')
      await tagInput.press('ArrowUp')

      // Select with Enter
      await tagInput.press('Enter')

      // Verify tag is added
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("typescript")')
      ).toBeVisible()
    })

    test('should select suggestion with mouse', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('rea')

      // Click on suggestion
      await page.click('[data-testid="tag-suggestion-item"]:has-text("react")')

      // Verify tag is added
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("react")')
      ).toBeVisible()
    })

    test('should handle backspace to remove tags', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add some tags
      await tagInput.click()
      await tagInput.type('tag1')
      await tagInput.press('Enter')
      await tagInput.type('tag2')
      await tagInput.press('Enter')
      await tagInput.type('tag3')
      await tagInput.press('Enter')

      // Press backspace to remove last tag
      await tagInput.press('Backspace')

      // Should highlight last tag for deletion
      await expect(
        page.locator('[data-testid="tag-badge"]:last-child')
      ).toHaveClass(/highlighted/)

      // Press backspace again to delete
      await tagInput.press('Backspace')

      // Should have 2 tags left
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(2)
    })

    test('should clear all tags', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add some tags
      await tagInput.click()
      await tagInput.type('tag1')
      await tagInput.press('Enter')
      await tagInput.type('tag2')
      await tagInput.press('Enter')

      // Click clear all button
      await page.click('[data-testid="clear-all-tags"]')

      // Confirm in dialog
      await page.click('[data-testid="confirm-clear-tags"]')

      // Should have no tags
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(0)
    })

    test('should handle keyboard shortcuts', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()

      // Select all (should select all text in input)
      await tagInput.type('test')
      await tagInput.press('Control+a')
      await tagInput.type('replaced')
      await expect(tagInput).toHaveValue('replaced')

      // Escape should close suggestions
      await tagInput.press('Escape')
      await expect(
        page.locator('[data-testid="tag-suggestions"]')
      ).not.toBeVisible()
    })

    test('should persist tags on save', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add tags
      await tagInput.click()
      await tagInput.type('persistent1')
      await tagInput.press('Enter')
      await tagInput.type('persistent2')
      await tagInput.press('Enter')

      // Save note
      await page.keyboard.press('Control+s')

      // Navigate away and back
      await page.click('[data-testid="home-button"]')
      await page.click('[data-testid="note-list-item"]:first-child')

      // Tags should still be there
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("persistent1")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("persistent2")')
      ).toBeVisible()
    })
  })

  test.describe('Tag Badge Component', () => {
    test('should display tag name correctly', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('display-test')
      await tagInput.press('Enter')

      const tagBadge = page.locator(
        '[data-testid="tag-badge"]:has-text("display-test")'
      )
      await expect(tagBadge).toBeVisible()
      await expect(tagBadge).toHaveText('display-test')
    })

    test('should remove tag on click remove button', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('removable')
      await tagInput.press('Enter')

      // Click remove button on tag badge
      await page.hover('[data-testid="tag-badge"]:has-text("removable")')
      await page.click('[data-testid="tag-remove-button"]')

      // Tag should be removed
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("removable")')
      ).toHaveCount(0)
    })

    test('should handle click on tag badge', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      await tagInput.click()
      await tagInput.type('clickable')
      await tagInput.press('Enter')

      // Click on tag badge
      await page.click('[data-testid="tag-badge"]:has-text("clickable")')

      // Should navigate to tag page or filter by tag
      await expect(page).toHaveURL(/tag=clickable/)
    })

    test('should show tag color based on hash', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add multiple tags
      await tagInput.click()
      await tagInput.type('red-tag')
      await tagInput.press('Enter')
      await tagInput.type('blue-tag')
      await tagInput.press('Enter')
      await tagInput.type('green-tag')
      await tagInput.press('Enter')

      // Each tag should have a different background color
      const tag1 = page.locator('[data-testid="tag-badge"]:has-text("red-tag")')
      const tag2 = page.locator(
        '[data-testid="tag-badge"]:has-text("blue-tag")'
      )
      const tag3 = page.locator(
        '[data-testid="tag-badge"]:has-text("green-tag")'
      )

      const color1 = await tag1.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )
      const color2 = await tag2.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )
      const color3 = await tag3.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )

      expect(color1).not.toBe(color2)
      expect(color2).not.toBe(color3)
      expect(color1).not.toBe(color3)
    })

    test('should handle long tag names with ellipsis', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      const longTagName =
        'this-is-a-very-long-tag-name-that-should-be-truncated'
      await tagInput.click()
      await tagInput.type(longTagName)
      await tagInput.press('Enter')

      const tagBadge = page.locator('[data-testid="tag-badge"]').first()

      // Should have ellipsis
      await expect(tagBadge).toHaveCSS('text-overflow', 'ellipsis')
      await expect(tagBadge).toHaveCSS('overflow', 'hidden')

      // Should show full name on hover
      await tagBadge.hover()
      await expect(page.locator('[data-testid="tag-tooltip"]')).toContainText(
        longTagName
      )
    })

    test('should support drag and drop to reorder', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add multiple tags
      await tagInput.click()
      await tagInput.type('first')
      await tagInput.press('Enter')
      await tagInput.type('second')
      await tagInput.press('Enter')
      await tagInput.type('third')
      await tagInput.press('Enter')

      // Drag first tag to last position
      const firstTag = page.locator(
        '[data-testid="tag-badge"]:has-text("first")'
      )
      const thirdTag = page.locator(
        '[data-testid="tag-badge"]:has-text("third")'
      )

      await firstTag.dragTo(thirdTag)

      // Verify new order
      const tags = page.locator('[data-testid="tag-badge"]')
      await expect(tags.nth(0)).toContainText('second')
      await expect(tags.nth(1)).toContainText('third')
      await expect(tags.nth(2)).toContainText('first')
    })

    test('should handle keyboard navigation between badges', async ({
      page,
    }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add multiple tags
      await tagInput.click()
      await tagInput.type('nav1')
      await tagInput.press('Enter')
      await tagInput.type('nav2')
      await tagInput.press('Enter')
      await tagInput.type('nav3')
      await tagInput.press('Enter')

      // Tab to first tag
      await page.keyboard.press('Tab')
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("nav1")')
      ).toBeFocused()

      // Navigate with arrow keys
      await page.keyboard.press('ArrowRight')
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("nav2")')
      ).toBeFocused()

      await page.keyboard.press('ArrowRight')
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("nav3")')
      ).toBeFocused()

      // Delete with keyboard
      await page.keyboard.press('Delete')
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("nav3")')
      ).toHaveCount(0)
    })

    test('should support different badge sizes', async ({ page }) => {
      // Navigate to settings
      await page.click('[data-testid="settings-button"]')
      await page.click('[data-testid="settings-appearance"]')

      // Change tag size
      await page.click('[data-testid="tag-size-select"]')
      await page.click('[data-testid="tag-size-large"]')

      // Go back to note
      await page.click('[data-testid="close-settings"]')

      const tagInput = page.locator('[data-testid="tag-input"]')
      await tagInput.click()
      await tagInput.type('large-tag')
      await tagInput.press('Enter')

      const tagBadge = page.locator(
        '[data-testid="tag-badge"]:has-text("large-tag")'
      )
      const height = await tagBadge.evaluate(
        (el) => window.getComputedStyle(el).height
      )

      // Should be larger than default
      expect(parseInt(height)).toBeGreaterThan(24)
    })

    test('should animate badge addition and removal', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add tag
      await tagInput.click()
      await tagInput.type('animated')
      await tagInput.press('Enter')

      const tagBadge = page.locator(
        '[data-testid="tag-badge"]:has-text("animated")'
      )

      // Should have entrance animation
      await expect(tagBadge).toHaveClass(/animate-in/)

      // Remove tag
      await page.hover('[data-testid="tag-badge"]:has-text("animated")')
      await page.click('[data-testid="tag-remove-button"]')

      // Should have exit animation
      await expect(tagBadge).toHaveClass(/animate-out/)
    })

    test('should handle special characters in display', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add tags with special characters
      await tagInput.click()
      await tagInput.type('c++')
      await tagInput.press('Enter')
      await tagInput.type('c#')
      await tagInput.press('Enter')
      await tagInput.type('node.js')
      await tagInput.press('Enter')

      // Verify display
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("c++")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("c#")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("node.js")')
      ).toBeVisible()
    })

    test('should support tag categories', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add categorized tag
      await tagInput.click()
      await tagInput.type('language:javascript')
      await tagInput.press('Enter')

      const tagBadge = page.locator('[data-testid="tag-badge"]').first()

      // Should display category differently
      await expect(
        tagBadge.locator('[data-testid="tag-category"]')
      ).toContainText('language')
      await expect(tagBadge.locator('[data-testid="tag-value"]')).toContainText(
        'javascript'
      )
    })

    test('should handle tag badge interactions in read-only mode', async ({
      page,
    }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add tags
      await tagInput.click()
      await tagInput.type('readonly1')
      await tagInput.press('Enter')
      await tagInput.type('readonly2')
      await tagInput.press('Enter')

      // Save and switch to read mode
      await page.keyboard.press('Control+s')
      await page.click('[data-testid="toggle-edit-mode"]')

      // Remove buttons should not be visible
      await expect(
        page.locator('[data-testid="tag-remove-button"]')
      ).not.toBeVisible()

      // Clicking badge should still work
      await page.click('[data-testid="tag-badge"]:has-text("readonly1")')
      await expect(page).toHaveURL(/tag=readonly1/)
    })

    test('should export and import tags', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add tags
      await tagInput.click()
      await tagInput.type('export1')
      await tagInput.press('Enter')
      await tagInput.type('export2')
      await tagInput.press('Enter')

      // Export tags
      await page.click('[data-testid="tag-menu-button"]')
      await page.click('[data-testid="export-tags"]')

      // Verify download
      const download = await page.waitForEvent('download')
      expect(download.suggestedFilename()).toContain('tags')

      // Clear tags
      await page.click('[data-testid="clear-all-tags"]')
      await page.click('[data-testid="confirm-clear-tags"]')

      // Import tags
      await page.click('[data-testid="tag-menu-button"]')
      await page.click('[data-testid="import-tags"]')

      // Upload file
      const fileInput = page.locator('[data-testid="tag-import-input"]')
      await fileInput.setInputFiles({
        name: 'tags.json',
        mimeType: 'application/json',
        buffer: Buffer.from(JSON.stringify(['export1', 'export2'])),
      })

      // Verify tags are imported
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("export1")')
      ).toBeVisible()
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("export2")')
      ).toBeVisible()
    })
  })

  test.describe('Tag System Performance', () => {
    test('should handle many tags efficiently', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Add 50 tags
      for (let i = 1; i <= 50; i++) {
        await tagInput.click()
        await tagInput.type(`tag${i}`)
        await tagInput.press('Enter')
      }

      // All tags should be visible
      await expect(page.locator('[data-testid="tag-badge"]')).toHaveCount(50)

      // Scrolling should be smooth
      const tagContainer = page.locator('[data-testid="tag-container"]')
      await tagContainer.evaluate((el) => (el.scrollTop = 1000))
      await tagContainer.evaluate((el) => (el.scrollTop = 0))

      // Search should be fast
      await tagInput.type('tag25')
      await page.waitForTimeout(100) // Debounce

      // Should highlight matching tag
      await expect(
        page.locator('[data-testid="tag-badge"]:has-text("tag25")')
      ).toHaveClass(/highlighted/)
    })

    test('should lazy load tag suggestions', async ({ page }) => {
      const tagInput = page.locator('[data-testid="tag-input"]')

      // Focus to load initial suggestions
      await tagInput.click()

      // Should show loading indicator
      await expect(
        page.locator('[data-testid="tag-suggestions-loading"]')
      ).toBeVisible()

      // Should load suggestions
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]')
      ).toHaveCount(10) // First batch

      // Scroll to bottom
      const suggestions = page.locator('[data-testid="tag-suggestions"]')
      await suggestions.evaluate((el) => (el.scrollTop = el.scrollHeight))

      // Should load more suggestions
      await expect(
        page.locator('[data-testid="tag-suggestion-item"]')
      ).toHaveCount(20) // More loaded
    })
  })
})
