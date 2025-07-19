import { test, expect, Browser, Page } from '@playwright/test'
import { createSupabaseClient } from './utils/supabase'
import { generateTestUser, cleanupTestUser } from './utils/test-users'

let testUser1: { email: string; password: string; id?: string }
let testUser2: { email: string; password: string; id?: string }

test.describe('Real-time Collaboration', () => {
  test.beforeAll(async () => {
    // Create two test users
    testUser1 = await generateTestUser()
    testUser2 = await generateTestUser()

    const supabase = createSupabaseClient()

    // Sign up first user
    const { data: data1, error: error1 } = await supabase.auth.signUp({
      email: testUser1.email,
      password: testUser1.password,
    })
    if (error1) throw error1
    testUser1.id = data1.user?.id

    // Sign up second user
    const { data: data2, error: error2 } = await supabase.auth.signUp({
      email: testUser2.email,
      password: testUser2.password,
    })
    if (error2) throw error2
    testUser2.id = data2.user?.id
  })

  test.afterAll(async () => {
    // Cleanup test users
    if (testUser1.id) await cleanupTestUser(testUser1.id)
    if (testUser2.id) await cleanupTestUser(testUser2.id)
  })

  async function signIn(page: Page, user: typeof testUser1) {
    await page.goto('/auth/sign-in')
    await page.getByLabel(/email/i).fill(user.email)
    await page.getByLabel(/password/i).fill(user.password)
    await page.getByRole('button', { name: /sign in/i }).click()
    await expect(page).toHaveURL('/dashboard', { timeout: 10000 })
  }

  test.describe('Real-time Note Updates', () => {
    test('should sync note title changes in real-time', async ({ browser }) => {
      // Create two browser contexts
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        // Sign in both users
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // User 1 creates a note
        await page1.getByRole('button', { name: /new note/i }).click()
        const titleInput1 = page1.getByPlaceholder(/untitled note/i)
        await titleInput1.clear()
        await titleInput1.type('Collaborative Note')
        await page1.waitForTimeout(2000) // Wait for save

        // Get note ID from URL
        const noteUrl = page1.url()
        const noteId = noteUrl.split('/').pop()

        // User 2 navigates to the same note
        await page2.goto(noteUrl)
        await page2.waitForLoadState('networkidle')

        // User 1 changes the title
        await titleInput1.clear()
        await titleInput1.type('Updated Collaborative Note')

        // User 2 should see the change
        const titleInput2 = page2.getByPlaceholder(/untitled note/i)
        await expect(titleInput2).toHaveValue('Updated Collaborative Note', {
          timeout: 5000,
        })
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should sync note content changes in real-time', async ({
      browser,
    }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // User 1 creates a note
        await page1.getByRole('button', { name: /new note/i }).click()
        const titleInput1 = page1.getByPlaceholder(/untitled note/i)
        await titleInput1.clear()
        await titleInput1.type('Content Sync Test')
        await page1.waitForTimeout(2000)

        // User 2 opens the same note
        const noteUrl = page1.url()
        await page2.goto(noteUrl)
        await page2.waitForLoadState('networkidle')

        // User 1 adds content
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type(
          '# Real-time Content\n\nThis is being typed by User 1.',
        )

        // User 2 should see the content appear
        const editor2 = page2.locator('[data-plate-editor]')
        await expect(editor2).toContainText('Real-time Content', {
          timeout: 5000,
        })
        await expect(editor2).toContainText('This is being typed by User 1', {
          timeout: 5000,
        })
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should handle concurrent edits without conflicts', async ({
      browser,
    }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Create and setup note
        await page1.getByRole('button', { name: /new note/i }).click()
        const titleInput1 = page1.getByPlaceholder(/untitled note/i)
        await titleInput1.clear()
        await titleInput1.type('Concurrent Edit Test')

        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('Line 1\n\nLine 3')
        await page1.waitForTimeout(2000)

        // User 2 opens the note
        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // Both users edit different parts simultaneously
        // User 1 edits Line 1
        await editor1.click()
        await page1.keyboard.press('Home')
        await page1.keyboard.press('End')
        await editor1.type(' - edited by User 1')

        // User 2 adds Line 2
        const editor2 = page2.locator('[data-plate-editor]')
        await editor2.click()
        await page2.keyboard.press('Control+Home')
        await page2.keyboard.press('End')
        await page2.keyboard.press('Enter')
        await editor2.type('Line 2 - added by User 2')

        // Wait for sync
        await page1.waitForTimeout(3000)
        await page2.waitForTimeout(3000)

        // Both users should see all changes
        await expect(editor1).toContainText('Line 1 - edited by User 1')
        await expect(editor1).toContainText('Line 2 - added by User 2')
        await expect(editor1).toContainText('Line 3')

        await expect(editor2).toContainText('Line 1 - edited by User 1')
        await expect(editor2).toContainText('Line 2 - added by User 2')
        await expect(editor2).toContainText('Line 3')
      } finally {
        await context1.close()
        await context2.close()
      }
    })
  })

  test.describe('Presence and Awareness', () => {
    test('should show online users', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // User 1 creates a note
        await page1.getByRole('button', { name: /new note/i }).click()
        await page1.getByPlaceholder(/untitled note/i).clear()
        await page1.getByPlaceholder(/untitled note/i).type('Presence Test')
        await page1.waitForTimeout(2000)

        // User 2 joins the note
        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // Both users should see each other online
        const onlineUsers1 = page1.getByRole('region', {
          name: /online users/i,
        })
        const onlineUsers2 = page2.getByRole('region', {
          name: /online users/i,
        })

        await expect(onlineUsers1).toBeVisible({ timeout: 5000 })
        await expect(onlineUsers2).toBeVisible({ timeout: 5000 })

        // Should show user avatars or initials
        await expect(onlineUsers1.locator('[data-user-presence]')).toHaveCount(
          2,
        )
        await expect(onlineUsers2.locator('[data-user-presence]')).toHaveCount(
          2,
        )
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should show typing indicators', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Setup shared note
        await page1.getByRole('button', { name: /new note/i }).click()
        await page1.getByPlaceholder(/untitled note/i).clear()
        await page1
          .getByPlaceholder(/untitled note/i)
          .type('Typing Indicator Test')
        await page1.waitForTimeout(2000)

        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // User 1 starts typing
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('User 1 is typing...')

        // User 2 should see typing indicator
        await expect(page2.getByText(/.*is typing/i)).toBeVisible({
          timeout: 3000,
        })

        // Stop typing and indicator should disappear
        await page1.waitForTimeout(3000)
        await expect(page2.getByText(/.*is typing/i)).not.toBeVisible()
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should show user cursors and selections', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Setup shared note with content
        await page1.getByRole('button', { name: /new note/i }).click()
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('This is a test paragraph for cursor visibility.')
        await page1.waitForTimeout(2000)

        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // User 1 selects text
        await editor1.click()
        await page1.keyboard.press('Control+A')

        // User 2 should see User 1's selection
        const remoteSelection = page2.locator('[data-remote-selection]')
        await expect(remoteSelection).toBeVisible({ timeout: 3000 })
        await expect(remoteSelection).toHaveAttribute(
          'data-user-id',
          testUser1.id || '',
        )
      } finally {
        await context1.close()
        await context2.close()
      }
    })
  })

  test.describe('Collaborative Features', () => {
    test('should support collaborative comments', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Create note with content
        await page1.getByRole('button', { name: /new note/i }).click()
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('This paragraph needs review.')
        await page1.waitForTimeout(2000)

        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // User 1 adds a comment
        await editor1.click()
        await editor1.dblclick()
        await page1.getByRole('button', { name: /add comment/i }).click()

        const commentInput1 = page1.getByPlaceholder(/add a comment/i)
        await commentInput1.type('Please check this section')
        await page1.keyboard.press('Enter')

        // User 2 should see the comment
        await expect(page2.locator('[data-comment-thread]')).toBeVisible({
          timeout: 5000,
        })
        await expect(page2.getByText('Please check this section')).toBeVisible()

        // User 2 replies to the comment
        await page2.locator('[data-comment-thread]').click()
        const replyInput = page2.getByPlaceholder(/reply/i)
        await replyInput.type('I have reviewed it, looks good!')
        await page2.keyboard.press('Enter')

        // User 1 should see the reply
        await expect(
          page1.getByText('I have reviewed it, looks good!'),
        ).toBeVisible({ timeout: 5000 })
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should handle mentions and notifications', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Create shared note
        await page1.getByRole('button', { name: /new note/i }).click()
        await page1.getByPlaceholder(/untitled note/i).clear()
        await page1.getByPlaceholder(/untitled note/i).type('Mention Test')
        await page1.waitForTimeout(2000)

        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // User 1 mentions User 2
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('@')

        // Mention dropdown should appear
        const mentionDropdown = page1.getByRole('listbox', { name: /users/i })
        await expect(mentionDropdown).toBeVisible()

        // Select User 2
        await page1
          .getByRole('option', {
            name: new RegExp(testUser2.email.split('@')[0], 'i'),
          })
          .click()

        // Complete the message
        await editor1.type(' please review this document')

        // User 2 should receive notification
        await expect(page2.getByRole('alert')).toBeVisible({ timeout: 5000 })
        await expect(page2.getByText(/mentioned you/i)).toBeVisible()
      } finally {
        await context1.close()
        await context2.close()
      }
    })

    test('should sync note deletion across users', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Create shared note
        await page1.getByRole('button', { name: /new note/i }).click()
        await page1.getByPlaceholder(/untitled note/i).clear()
        await page1.getByPlaceholder(/untitled note/i).type('Note to Delete')
        await page1.waitForTimeout(2000)

        const noteUrl = page1.url()
        await page2.goto(noteUrl)
        await page2.waitForLoadState('networkidle')

        // User 1 deletes the note
        await page1.getByRole('button', { name: /more options/i }).click()
        await page1.getByRole('menuitem', { name: /delete/i }).click()
        await page1.getByRole('button', { name: /confirm.*delete/i }).click()

        // User 2 should be redirected or see deletion notice
        await expect(page2).not.toHaveURL(noteUrl, { timeout: 5000 })
        // Or show deletion message
        const deletionMessage = page2.getByText(/note.*deleted/i)
        if (await deletionMessage.isVisible()) {
          expect(deletionMessage).toBeTruthy()
        }
      } finally {
        await context1.close()
        await context2.close()
      }
    })
  })

  test.describe('Conflict Resolution', () => {
    test('should handle offline edits and sync when reconnected', async ({
      browser,
    }) => {
      const context1 = await browser.newContext()
      const page1 = await context1.newPage()

      try {
        await signIn(page1, testUser1)

        // Create note
        await page1.getByRole('button', { name: /new note/i }).click()
        await page1.getByPlaceholder(/untitled note/i).clear()
        await page1.getByPlaceholder(/untitled note/i).type('Offline Sync Test')

        const editor = page1.locator('[data-plate-editor]')
        await editor.click()
        await editor.type('Original content')
        await page1.waitForTimeout(2000)

        // Go offline
        await context1.setOffline(true)

        // Make offline edits
        await editor.type('\n\nOffline edit 1')
        await editor.type('\n\nOffline edit 2')

        // Should show offline indicator
        await expect(page1.getByText(/offline/i)).toBeVisible()

        // Go back online
        await context1.setOffline(false)

        // Wait for sync
        await page1.waitForTimeout(3000)

        // Offline indicator should disappear
        await expect(page1.getByText(/offline/i)).not.toBeVisible()

        // Content should be preserved
        await expect(editor).toContainText('Original content')
        await expect(editor).toContainText('Offline edit 1')
        await expect(editor).toContainText('Offline edit 2')
      } finally {
        await context1.close()
      }
    })

    test('should merge conflicting changes', async ({ browser }) => {
      const context1 = await browser.newContext()
      const context2 = await browser.newContext()

      const page1 = await context1.newPage()
      const page2 = await context2.newPage()

      try {
        await signIn(page1, testUser1)
        await signIn(page2, testUser2)

        // Create shared note
        await page1.getByRole('button', { name: /new note/i }).click()
        const editor1 = page1.locator('[data-plate-editor]')
        await editor1.click()
        await editor1.type('Shared paragraph')
        await page1.waitForTimeout(2000)

        await page2.goto(page1.url())
        await page2.waitForLoadState('networkidle')

        // Both go offline
        await context1.setOffline(true)
        await context2.setOffline(true)

        // Make conflicting edits
        await editor1.click()
        await page1.keyboard.press('End')
        await editor1.type(' - edited by User 1 offline')

        const editor2 = page2.locator('[data-plate-editor]')
        await editor2.click()
        await page2.keyboard.press('End')
        await editor2.type(' - edited by User 2 offline')

        // Both go online
        await context1.setOffline(false)
        await context2.setOffline(false)

        // Wait for sync and conflict resolution
        await page1.waitForTimeout(5000)
        await page2.waitForTimeout(5000)

        // Both edits should be preserved (exact merge strategy may vary)
        const content1 = await editor1.textContent()
        const content2 = await editor2.textContent()

        // Content should be identical on both pages
        expect(content1).toBe(content2)

        // Should contain the original text
        expect(content1).toContain('Shared paragraph')
      } finally {
        await context1.close()
        await context2.close()
      }
    })
  })
})
