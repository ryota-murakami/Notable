import { test, expect } from '@playwright/test'
import { createSupabaseClient } from './utils/supabase'
import { generateTestUser, cleanupTestUser } from './utils/test-users'

let testUser: { email: string; password: string; id?: string }

test.describe('Note Management', () => {
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
    // Cleanup test user and their data
    if (testUser.id) {
      await cleanupTestUser(testUser.id)
    }
  })

  test.beforeEach(async ({ page }) => {
    // Sign in before each test
    await page.goto('/auth/sign-in')
    await page.getByLabel(/email/i).fill(testUser.email)
    await page.getByLabel(/password/i).fill(testUser.password)
    await page.getByRole('button', { name: /sign in/i }).click()
    await expect(page).toHaveURL('/dashboard', { timeout: 10000 })
  })

  test.describe('Note Creation', () => {
    test('should create a new note from the sidebar', async ({ page }) => {
      // Click the new note button
      await page.getByRole('button', { name: /new note/i }).click()

      // Verify a new note is created with default title
      await expect(page.getByText('Untitled Note')).toBeVisible()

      // Verify the editor is focused
      const editor = page.locator('[data-plate-editor]')
      await expect(editor).toBeFocused()
    })

    test('should create a note with title and content', async ({ page }) => {
      // Create new note
      await page.getByRole('button', { name: /new note/i }).click()

      // Type title
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('My Test Note')

      // Type content in Plate editor
      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await editor.type(
        '# Welcome to my note\n\nThis is a test note with **bold** and *italic* text.',
      )

      // Wait for auto-save
      await page.waitForTimeout(2000)

      // Verify note appears in sidebar
      await expect(
        page.getByRole('listitem').filter({ hasText: 'My Test Note' }),
      ).toBeVisible()
    })

    test('should support markdown shortcuts in Plate editor', async ({
      page,
    }) => {
      // Create new note
      await page.getByRole('button', { name: /new note/i }).click()

      const editor = page.locator('[data-plate-editor]')
      await editor.click()

      // Test heading shortcut
      await editor.type('## Heading 2')
      await page.keyboard.press('Enter')
      await expect(page.locator('h2')).toHaveText('Heading 2')

      // Test list shortcut
      await editor.type('- Item 1')
      await page.keyboard.press('Enter')
      await editor.type('Item 2')
      await expect(page.locator('ul li')).toHaveCount(2)

      // Test code block
      await page.keyboard.press('Enter')
      await editor.type('```')
      await page.keyboard.press('Enter')
      await editor.type('const hello = "world";')
      await page.keyboard.press('Enter')
      await editor.type('```')
      await expect(page.locator('pre code')).toContainText(
        'const hello = "world";',
      )
    })

    test('should insert images and handle media', async ({ page }) => {
      // Create new note
      await page.getByRole('button', { name: /new note/i }).click()

      const editor = page.locator('[data-plate-editor]')
      await editor.click()

      // Open media toolbar
      await page.getByRole('button', { name: /insert image/i }).click()

      // Insert image via URL
      const urlInput = page.getByPlaceholder(/paste image url/i)
      await urlInput.fill('https://via.placeholder.com/300x200')
      await page.getByRole('button', { name: /insert/i }).click()

      // Verify image is inserted
      await expect(
        page.locator('img[src="https://via.placeholder.com/300x200"]'),
      ).toBeVisible()
    })
  })

  test.describe('Note Editing', () => {
    test('should edit an existing note', async ({ page }) => {
      // Create a note first
      await page.getByRole('button', { name: /new note/i }).click()
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Note to Edit')
      await page.waitForTimeout(2000) // Wait for auto-save

      // Click on the note in sidebar to ensure it's selected
      await page
        .getByRole('listitem')
        .filter({ hasText: 'Note to Edit' })
        .click()

      // Edit the title
      await titleInput.clear()
      await titleInput.type('Edited Note Title')

      // Edit the content
      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await page.keyboard.press('Control+A')
      await editor.type('This content has been completely replaced.')

      // Wait for auto-save
      await page.waitForTimeout(2000)

      // Verify changes are reflected in sidebar
      await expect(
        page.getByRole('listitem').filter({ hasText: 'Edited Note Title' }),
      ).toBeVisible()
    })

    test('should handle formatting toolbar', async ({ page }) => {
      // Create new note
      await page.getByRole('button', { name: /new note/i }).click()

      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await editor.type('Test text for formatting')

      // Select all text
      await page.keyboard.press('Control+A')

      // Apply bold
      await page.getByRole('button', { name: /bold/i }).click()
      await expect(page.locator('strong')).toContainText(
        'Test text for formatting',
      )

      // Apply italic
      await page.getByRole('button', { name: /italic/i }).click()
      await expect(page.locator('strong em')).toContainText(
        'Test text for formatting',
      )

      // Apply code
      await page.getByRole('button', { name: /code/i }).click()
      await expect(page.locator('code')).toContainText(
        'Test text for formatting',
      )
    })

    test('should support collaborative features', async ({ page }) => {
      // Create new note
      await page.getByRole('button', { name: /new note/i }).click()
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Collaborative Note')

      // Add a comment
      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await editor.type('This is a paragraph with a comment.')

      // Select text for comment
      await editor.dblclick()
      await page.getByRole('button', { name: /add comment/i }).click()

      // Type comment
      const commentInput = page.getByPlaceholder(/add a comment/i)
      await commentInput.type('This needs review')
      await page.keyboard.press('Enter')

      // Verify comment indicator appears
      await expect(page.locator('[data-comment-count]')).toBeVisible()
    })
  })

  test.describe('Note Organization', () => {
    test('should delete a note', async ({ page }) => {
      // Create a note to delete
      await page.getByRole('button', { name: /new note/i }).click()
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Note to Delete')
      await page.waitForTimeout(2000) // Wait for auto-save

      // Open note menu
      const noteItem = page
        .getByRole('listitem')
        .filter({ hasText: 'Note to Delete' })
      await noteItem.hover()
      await noteItem.getByRole('button', { name: /more options/i }).click()

      // Click delete
      await page.getByRole('menuitem', { name: /delete/i }).click()

      // Confirm deletion
      await page.getByRole('button', { name: /delete/i }).click()

      // Verify note is removed from sidebar
      await expect(noteItem).not.toBeVisible()
    })

    test('should move note to folder', async ({ page }) => {
      // Create a folder first
      await page.getByRole('button', { name: /new folder/i }).click()
      const folderInput = page.getByPlaceholder(/folder name/i)
      await folderInput.type('Test Folder')
      await page.keyboard.press('Enter')

      // Create a note
      await page.getByRole('button', { name: /new note/i }).click()
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Note to Move')
      await page.waitForTimeout(2000)

      // Drag note to folder
      const noteItem = page
        .getByRole('listitem')
        .filter({ hasText: 'Note to Move' })
      const folderItem = page
        .getByRole('treeitem')
        .filter({ hasText: 'Test Folder' })

      await noteItem.dragTo(folderItem)

      // Verify note is in folder
      await folderItem.click() // Expand folder
      await expect(
        folderItem.locator('~ *').filter({ hasText: 'Note to Move' }),
      ).toBeVisible()
    })

    test('should duplicate a note', async ({ page }) => {
      // Create a note
      await page.getByRole('button', { name: /new note/i }).click()
      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Original Note')

      const editor = page.locator('[data-plate-editor]')
      await editor.click()
      await editor.type('This is the original content.')
      await page.waitForTimeout(2000)

      // Duplicate the note
      const noteItem = page
        .getByRole('listitem')
        .filter({ hasText: 'Original Note' })
      await noteItem.hover()
      await noteItem.getByRole('button', { name: /more options/i }).click()
      await page.getByRole('menuitem', { name: /duplicate/i }).click()

      // Verify duplicate is created
      await expect(
        page.getByRole('listitem').filter({ hasText: 'Original Note (Copy)' }),
      ).toBeVisible()
    })
  })

  test.describe('Note Navigation', () => {
    test('should navigate between notes using keyboard', async ({ page }) => {
      // Create multiple notes
      for (let i = 1; i <= 3; i++) {
        await page.getByRole('button', { name: /new note/i }).click()
        const titleInput = page.getByPlaceholder(/untitled note/i)
        await titleInput.clear()
        await titleInput.type(`Note ${i}`)
        await page.waitForTimeout(1000)
      }

      // Focus on sidebar
      await page.getByRole('navigation', { name: /notes/i }).click()

      // Navigate with arrow keys
      await page.keyboard.press('ArrowUp')
      await expect(page.locator('[data-selected="true"]')).toContainText(
        'Note 2',
      )

      await page.keyboard.press('ArrowUp')
      await expect(page.locator('[data-selected="true"]')).toContainText(
        'Note 1',
      )

      // Open note with Enter
      await page.keyboard.press('Enter')
      await expect(page.getByPlaceholder(/untitled note/i)).toHaveValue(
        'Note 1',
      )
    })

    test('should use breadcrumb navigation', async ({ page }) => {
      // Create folder structure
      await page.getByRole('button', { name: /new folder/i }).click()
      let folderInput = page.getByPlaceholder(/folder name/i)
      await folderInput.type('Parent Folder')
      await page.keyboard.press('Enter')

      // Create note in folder
      const folderItem = page
        .getByRole('treeitem')
        .filter({ hasText: 'Parent Folder' })
      await folderItem.hover()
      await folderItem.getByRole('button', { name: /new note/i }).click()

      const titleInput = page.getByPlaceholder(/untitled note/i)
      await titleInput.clear()
      await titleInput.type('Nested Note')

      // Verify breadcrumb shows hierarchy
      await expect(
        page.getByRole('navigation', { name: /breadcrumb/i }),
      ).toContainText('Parent Folder')
      await expect(
        page.getByRole('navigation', { name: /breadcrumb/i }),
      ).toContainText('Nested Note')

      // Navigate using breadcrumb
      await page.getByRole('link', { name: 'Parent Folder' }).click()
      await expect(
        page.getByRole('heading', { name: 'Parent Folder' }),
      ).toBeVisible()
    })
  })
})
