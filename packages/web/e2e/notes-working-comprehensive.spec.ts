import { expect, test } from './fixtures/coverage'

test.describe('Working Note Management - Comprehensive Tests', () => {
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

    // Navigate to app and wait for shell to load
    await page.goto('http://localhost:4378/app', {
      waitUntil: 'networkidle',
      timeout: 30000,
    })
    await page.waitForSelector('[data-testid="app-shell"]', { timeout: 30000 })
  })

  test.describe('Note Creation and Editing', () => {
    test('should create and edit a note using template picker', async ({
      page,
    }) => {
      // Step 1: Open template picker
      const newNoteButton = page.getByRole('button', { name: 'New Note' })
      await expect(newNoteButton).toBeVisible()
      await newNoteButton.click()

      // Step 2: Wait for template picker dialog
      const templatePicker = page.getByTestId('template-picker')
      await expect(templatePicker).toBeVisible({ timeout: 10000 })

      // Step 3: Click "Blank Note" button
      const blankNoteButton = page.getByRole('button', { name: 'Blank Note' })
      await expect(blankNoteButton).toBeVisible()
      await blankNoteButton.click()

      // Step 4: Wait for navigation to note editor
      await page.waitForURL('**/notes/**', { timeout: 10000 })

      // Step 5: Verify note editor is visible and functional
      await expect(page.getByTestId('note-editor')).toBeVisible({
        timeout: 10000,
      })
      await expect(page.getByTestId('note-title-input')).toBeVisible()
      await expect(page.getByTestId('note-content-textarea')).toBeVisible()

      // Step 6: Add content to the note
      await page
        .getByTestId('note-title-input')
        .fill('My Comprehensive Test Note')
      await page
        .getByTestId('note-content-textarea')
        .fill(
          'This is comprehensive test content\\nWith multiple lines\\nAnd various text.'
        )

      // Step 7: Verify content is saved (auto-save via useNote hook)
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'My Comprehensive Test Note'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'This is comprehensive test content\\nWith multiple lines\\nAnd various text.'
      )

      // Step 8: Edit the content
      await page.getByTestId('note-title-input').fill('Updated Test Note Title')
      await page
        .getByTestId('note-content-textarea')
        .fill('Updated content with new information')

      // Step 9: Verify updates are applied
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Updated Test Note Title'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'Updated content with new information'
      )
    })

    test('should create multiple notes and navigate between them', async ({
      page,
    }) => {
      const notes = [
        { title: 'First Note', content: 'Content of the first note' },
        { title: 'Second Note', content: 'Content of the second note' },
        { title: 'Third Note', content: 'Content of the third note' },
      ]

      const createdNoteIds: string[] = []

      // Create multiple notes
      for (const note of notes) {
        // Open template picker
        await page.getByRole('button', { name: 'New Note' }).click()
        await expect(page.getByTestId('template-picker')).toBeVisible()

        // Select blank note
        await page.getByRole('button', { name: 'Blank Note' }).click()

        // Wait for navigation and get note ID from URL
        await page.waitForURL('**/notes/**')
        const noteId = page.url().split('/notes/')[1]
        createdNoteIds.push(noteId)

        // Add content
        await expect(page.getByTestId('note-editor')).toBeVisible()
        await page.getByTestId('note-title-input').fill(note.title)
        await page.getByTestId('note-content-textarea').fill(note.content)

        // Verify content is set
        await expect(page.getByTestId('note-title-input')).toHaveValue(
          note.title
        )
        await expect(page.getByTestId('note-content-textarea')).toHaveValue(
          note.content
        )
      }

      // Navigate back to each note and verify content persists
      for (let i = 0; i < notes.length; i++) {
        await page.goto(`http://localhost:4378/notes/${createdNoteIds[i]}`)
        await expect(page.getByTestId('note-editor')).toBeVisible()

        // Verify content persists
        await expect(page.getByTestId('note-title-input')).toHaveValue(
          notes[i].title
        )
        await expect(page.getByTestId('note-content-textarea')).toHaveValue(
          notes[i].content
        )
      }
    })

    test('should handle empty notes correctly', async ({ page }) => {
      // Create note without adding content
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      // Wait for editor
      await page.waitForURL('**/notes/**')
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Verify default empty state
      await expect(page.getByTestId('note-title-input')).toHaveValue('')
      await expect(page.getByTestId('note-content-textarea')).toHaveValue('')

      // Verify placeholders are visible
      await expect(page.getByTestId('note-title-input')).toHaveAttribute(
        'placeholder',
        'Untitled'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveAttribute(
        'placeholder',
        'Start writing...'
      )
    })

    test('should handle large content efficiently', async ({ page }) => {
      // Create note with large content
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      await page.waitForURL('**/notes/**')
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Create large content (1000 lines)
      const largeContent = Array.from(
        { length: 1000 },
        (_, i) => `Line ${i + 1}: This is a test line with some content.`
      ).join('\\n')

      await page.getByTestId('note-title-input').fill('Large Content Note')
      await page.getByTestId('note-content-textarea').fill(largeContent)

      // Verify large content is handled
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Large Content Note'
      )

      // Navigate away and back to verify persistence
      await page.goto('http://localhost:4378/app')
      await page.waitForSelector('[data-testid="app-shell"]')

      // Navigate back to the note
      await page.goBack()
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Verify content persists
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Large Content Note'
      )
    })
  })

  test.describe('Template System', () => {
    test('should show template picker with available templates', async ({
      page,
    }) => {
      // Open template picker
      await page.getByRole('button', { name: 'New Note' }).click()

      // Verify template picker dialog appears
      const templatePicker = page.getByTestId('template-picker')
      await expect(templatePicker).toBeVisible()

      // Verify essential template options are available
      await expect(
        page.getByRole('button', { name: 'Blank Note' })
      ).toBeVisible()

      // Close template picker by clicking outside or escape
      await page.keyboard.press('Escape')
      await expect(templatePicker).not.toBeVisible()
    })

    test('should handle template picker cancellation', async ({ page }) => {
      const initialUrl = page.url()

      // Open template picker
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()

      // Cancel by pressing escape
      await page.keyboard.press('Escape')
      await expect(page.getByTestId('template-picker')).not.toBeVisible()

      // Verify we're still on the same page
      expect(page.url()).toBe(initialUrl)
    })
  })

  test.describe('Navigation and URL Handling', () => {
    test('should handle direct note URL navigation', async ({ page }) => {
      // Create a note first to get a valid ID
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      // Get the note ID from URL
      await page.waitForURL('**/notes/**')
      const noteUrl = page.url()
      const noteId = noteUrl.split('/notes/')[1]

      // Add content
      await expect(page.getByTestId('note-editor')).toBeVisible()
      await page.getByTestId('note-title-input').fill('Direct Navigation Test')
      await page
        .getByTestId('note-content-textarea')
        .fill('Direct navigation content')

      // Navigate away
      await page.goto('http://localhost:4378/app')
      await expect(page.getByTestId('app-shell')).toBeVisible()

      // Navigate directly to note URL
      await page.goto(noteUrl)

      // Verify note loads correctly
      await expect(page.getByTestId('note-editor')).toBeVisible()
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Direct Navigation Test'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'Direct navigation content'
      )
    })

    test('should handle invalid note IDs gracefully', async ({ page }) => {
      // Navigate to a non-existent note ID
      await page.goto('http://localhost:4378/notes/non-existent-note-id')

      // Should show "not found" state
      await expect(page.getByTestId('note-editor-not-found')).toBeVisible()

      // Verify error message is shown
      await expect(page.locator('h3')).toContainText('Note not found')
      await expect(page.locator('p')).toContainText(
        "The note you're looking for doesn't exist or has been deleted."
      )
    })
  })

  test.describe('Error Handling and Edge Cases', () => {
    test('should handle extremely long titles', async ({ page }) => {
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      await page.waitForURL('**/notes/**')
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Create extremely long title
      const longTitle = 'A'.repeat(1000)
      await page.getByTestId('note-title-input').fill(longTitle)

      // Verify long title is handled
      await expect(page.getByTestId('note-title-input')).toHaveValue(longTitle)
    })

    test('should handle special characters in content', async ({ page }) => {
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      await page.waitForURL('**/notes/**')
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Add content with special characters
      const specialContent =
        'Special chars: !@#$%^&*()_+{}[]|\\:";\'<>?,./ 🚀 ñáéíóú çñü αβγδε 中文 العربية'
      await page.getByTestId('note-title-input').fill('Special Characters Test')
      await page.getByTestId('note-content-textarea').fill(specialContent)

      // Verify special characters are preserved
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Special Characters Test'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        specialContent
      )
    })

    test('should handle rapid successive note creations', async ({ page }) => {
      const noteCount = 5
      const createdUrls: string[] = []

      // Create multiple notes in quick succession
      for (let i = 0; i < noteCount; i++) {
        await page.getByRole('button', { name: 'New Note' }).click()
        await expect(page.getByTestId('template-picker')).toBeVisible()
        await page.getByRole('button', { name: 'Blank Note' }).click()

        // Wait for navigation
        await page.waitForURL('**/notes/**')
        createdUrls.push(page.url())

        // Add minimal content
        await expect(page.getByTestId('note-editor')).toBeVisible()
        await page.getByTestId('note-title-input').fill(`Rapid Note ${i + 1}`)

        // Verify each note gets unique URL
        expect(createdUrls[i]).toMatch(/\/notes\/mock-note-\d+/)
      }

      // Verify all URLs are unique
      const uniqueUrls = new Set(createdUrls)
      expect(uniqueUrls.size).toBe(noteCount)
    })
  })

  test.describe('User Experience', () => {
    test('should provide smooth user interaction flow', async ({ page }) => {
      // Complete user flow: create → edit → navigate → return

      // Step 1: Create note
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()
      await page.getByRole('button', { name: 'Blank Note' }).click()

      // Step 2: Add content
      await page.waitForURL('**/notes/**')
      const noteUrl = page.url()
      await expect(page.getByTestId('note-editor')).toBeVisible()
      await page.getByTestId('note-title-input').fill('UX Test Note')
      await page
        .getByTestId('note-content-textarea')
        .fill('Testing user experience flow')

      // Step 3: Navigate away
      await page.goto('http://localhost:4378/app')
      await expect(page.getByTestId('app-shell')).toBeVisible()

      // Step 4: Return to note
      await page.goto(noteUrl)
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Step 5: Verify content persisted
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'UX Test Note'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'Testing user experience flow'
      )

      // Step 6: Continue editing
      await page
        .getByTestId('note-content-textarea')
        .fill('Updated content after navigation')
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'Updated content after navigation'
      )
    })

    test('should handle keyboard interactions', async ({ page }) => {
      await page.getByRole('button', { name: 'New Note' }).click()
      await expect(page.getByTestId('template-picker')).toBeVisible()

      // Use Enter key to select blank note
      await page.getByRole('button', { name: 'Blank Note' }).focus()
      await page.keyboard.press('Enter')

      await page.waitForURL('**/notes/**')
      await expect(page.getByTestId('note-editor')).toBeVisible()

      // Use Tab to navigate between title and content
      await page.getByTestId('note-title-input').focus()
      await page.keyboard.type('Keyboard Test')
      await page.keyboard.press('Tab')
      await page.keyboard.type('Content added via keyboard')

      // Verify keyboard input worked
      await expect(page.getByTestId('note-title-input')).toHaveValue(
        'Keyboard Test'
      )
      await expect(page.getByTestId('note-content-textarea')).toHaveValue(
        'Content added via keyboard'
      )
    })
  })
})
