import { expect, test } from './fixtures/coverage'
import {
  cleanupTestData,
  createTestNote,
  loginAsTestUser,
} from './utils/test-helpers'

test.describe('Bi-directional Linking', () => {
  test.beforeEach(async ({ page }) => {
    await loginAsTestUser(page)
  })

  test.afterEach(async ({ page }) => {
    await cleanupTestData(page)
  })

  test.skip('should create wiki links using [[Note Title]] syntax', async ({
    page,
  }) => {
    // SKIPPED: Wiki links not implemented
    // Create two test notes
    const note1 = await createTestNote(
      page,
      'Source Note',
      'This is the source note.'
    )
    const note2 = await createTestNote(
      page,
      'Target Note',
      'This is the target note.'
    )

    // Navigate to source note
    await page.goto(`/notes/${note1.id}`)

    // Wait for editor to load
    await page.waitForSelector(
      '[data-testid="note-editor"] [contenteditable="true"]'
    )

    // Type wiki link syntax
    const editor = page
      .locator('[data-testid="note-editor"] [contenteditable="true"]')
      .first()
    await editor.click()
    await editor.type(' This links to [[Target Note]].')

    // Verify wiki link is created
    const wikiLink = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toHaveText('Target Note')

    // Verify link is clickable and navigates correctly
    await wikiLink.click()
    await expect(page).toHaveURL(`/notes/${note2.id}`)
  })

  test.skip('should show backlinks in target note', async ({ page }) => {
    // SKIPPED: Backlinks panel not implemented
    // Create two test notes
    const note1 = await createTestNote(
      page,
      'Source Note',
      'This is the source note.'
    )
    const note2 = await createTestNote(
      page,
      'Target Note',
      'This is the target note.'
    )

    // Navigate to source note and create link
    await page.goto(`/notes/${note1.id}`)
    await page.waitForSelector(
      '[data-testid="note-editor"] [contenteditable="true"]'
    )

    const editor = page
      .locator('[data-testid="note-editor"] [contenteditable="true"]')
      .first()
    await editor.click()
    await editor.type(' This links to [[Target Note]].')

    // Wait for auto-save
    await page.waitForTimeout(2000)

    // Navigate to target note
    await page.goto(`/notes/${note2.id}`)

    // Verify backlinks panel shows the link
    const backlinksPanel = page.locator('[data-testid="backlinks-panel"]')
    await expect(backlinksPanel).toBeVisible()

    const backlinkItem = backlinksPanel.locator('text=Source Note')
    await expect(backlinkItem).toBeVisible()

    // Verify backlink is clickable
    await backlinkItem.click()
    await expect(page).toHaveURL(`/notes/${note1.id}`)
  })

  test.skip('should handle multiple links in same note', async ({ page }) => {
    // SKIPPED: Wiki links not implemented
    // Create three test notes
    const note1 = await createTestNote(
      page,
      'Main Note',
      'This is the main note.'
    )
    await createTestNote(page, 'First Target', 'First target note.')
    await createTestNote(page, 'Second Target', 'Second target note.')

    // Navigate to main note
    await page.goto(`/notes/${note1.id}`)
    await page.waitForSelector('[data-plate-editor]')

    // Create multiple wiki links
    const editor = page.locator('[data-plate-editor]')
    await editor.click()
    await editor.type(' Links to [[First Target]] and [[Second Target]].')

    // Verify both links are created
    const wikiLinks = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLinks).toHaveCount(2)

    const firstLink = wikiLinks.nth(0)
    const secondLink = wikiLinks.nth(1)

    await expect(firstLink).toHaveText('First Target')
    await expect(secondLink).toHaveText('Second Target')
  })

  test.skip('should show link count in backlinks panel', async ({ page }) => {
    // SKIPPED: Backlinks count not implemented
    // Create notes
    const note1 = await createTestNote(page, 'Source 1', 'First source note.')
    const note2 = await createTestNote(page, 'Source 2', 'Second source note.')
    const note3 = await createTestNote(page, 'Target Note', 'Target note.')

    // Create links from both source notes to target
    await page.goto(`/notes/${note1.id}`)
    await page.waitForSelector('[data-plate-editor]')
    let editor = page.locator('[data-plate-editor]')
    await editor.click()
    await editor.type(' Links to [[Target Note]].')

    await page.goto(`/notes/${note2.id}`)
    await page.waitForSelector('[data-plate-editor]')
    editor = page.locator('[data-plate-editor]')
    await editor.click()
    await editor.type(' Also links to [[Target Note]].')

    // Wait for auto-save
    await page.waitForTimeout(2000)

    // Navigate to target note
    await page.goto(`/notes/${note3.id}`)

    // Verify link count badge shows 2
    const linksBadge = page.locator('[data-testid="backlinks-panel"] .badge')
    await expect(linksBadge).toHaveText('2')
  })

  test.skip('should handle non-existent note links gracefully', async ({
    page,
  }) => {
    // SKIPPED: Wiki links not implemented
    // Create one test note
    const note1 = await createTestNote(
      page,
      'Source Note',
      'This is the source note.'
    )

    // Navigate to source note
    await page.goto(`/notes/${note1.id}`)
    await page.waitForSelector('[data-plate-editor]')

    // Create link to non-existent note
    const editor = page.locator('[data-plate-editor]')
    await editor.click()
    await editor.type(' Links to [[Non Existent Note]].')

    // Verify link is still created but points to search
    const wikiLink = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLink).toBeVisible()
    await expect(wikiLink).toHaveText('Non Existent Note')

    // Verify link points to search URL
    const linkHref = await wikiLink.getAttribute('href')
    expect(linkHref).toContain('/notes/search?title=Non%20Existent%20Note')
  })

  test.skip('should update links when note title changes', async ({ page }) => {
    // SKIPPED: Wiki links and title updates not implemented
    // Create two test notes
    const note1 = await createTestNote(
      page,
      'Source Note',
      'This is the source note.'
    )
    const note2 = await createTestNote(
      page,
      'Original Title',
      'Target note content.'
    )

    // Create link using original title
    await page.goto(`/notes/${note1.id}`)
    await page.waitForSelector(
      '[data-testid="note-editor"] [contenteditable="true"]'
    )

    const editor = page
      .locator('[data-testid="note-editor"] [contenteditable="true"]')
      .first()
    await editor.click()
    await editor.type(' Links to [[Original Title]].')

    // Change title of target note
    await page.goto(`/notes/${note2.id}`)
    await page.waitForSelector('input[placeholder="Untitled"]')

    const titleInput = page.locator('input[placeholder="Untitled"]')
    await titleInput.fill('Updated Title')
    await page.keyboard.press('Enter')

    // Wait for auto-save
    await page.waitForTimeout(2000)

    // Navigate back to source note
    await page.goto(`/notes/${note1.id}`)

    // Verify old link text still exists (links don't auto-update)
    const wikiLink = page.locator('a[data-wiki-link="true"]')
    await expect(wikiLink).toHaveText('Original Title')

    // But verify it still navigates to correct note
    await wikiLink.click()
    await expect(page).toHaveURL(`/notes/${note2.id}`)
  })
})
