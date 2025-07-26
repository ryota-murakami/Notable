/* eslint-env jest, detox/detox */
import { by, device, element, expect, waitFor } from 'detox'

describe('Notes Management', () => {
  beforeAll(async () => {
    // Assume user is already authenticated for these tests
    // In real implementation, we would set up test authentication
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should display notes list', async () => {
    await expect(element(by.id('notes-list'))).toBeVisible()
    await expect(element(by.id('create-note-button'))).toBeVisible()
  })

  it('should create a new note', async () => {
    await element(by.id('create-note-button')).tap()

    // Should navigate to note editor
    await expect(element(by.id('note-editor'))).toBeVisible()
    await expect(element(by.id('note-title-input'))).toBeVisible()
    await expect(element(by.id('note-content-input'))).toBeVisible()
  })

  it('should allow typing in note title', async () => {
    await element(by.id('create-note-button')).tap()

    const testTitle = 'My Test Note'
    await element(by.id('note-title-input')).typeText(testTitle)

    await expect(element(by.id('note-title-input'))).toHaveText(testTitle)
  })

  it('should allow typing in note content', async () => {
    await element(by.id('create-note-button')).tap()

    const testContent = 'This is my test note content.'
    await element(by.id('note-content-input')).typeText(testContent)

    await expect(element(by.id('note-content-input'))).toHaveText(testContent)
  })

  it('should save note automatically', async () => {
    await element(by.id('create-note-button')).tap()

    await element(by.id('note-title-input')).typeText('Auto Save Test')
    await element(by.id('note-content-input')).typeText(
      'Testing auto save functionality'
    )

    // Wait for auto-save (typically happens after a few seconds of inactivity)
    await waitFor(element(by.id('save-indicator')))
      .toBeVisible()
      .withTimeout(5000)
  })

  it('should navigate back to notes list', async () => {
    await element(by.id('create-note-button')).tap()
    await element(by.id('back-button')).tap()

    await expect(element(by.id('notes-list'))).toBeVisible()
  })

  it('should display created note in list', async () => {
    // Create a note
    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Listed Note')
    await element(by.id('back-button')).tap()

    // Check if note appears in list
    await expect(element(by.text('Listed Note'))).toBeVisible()
  })

  it('should allow editing existing note', async () => {
    // Assume there's at least one note in the list
    await element(by.text('Listed Note')).tap()

    await expect(element(by.id('note-editor'))).toBeVisible()
    await expect(element(by.id('note-title-input'))).toHaveText('Listed Note')
  })

  it('should allow deleting a note', async () => {
    // Long press on note to show context menu
    await element(by.text('Listed Note')).longPress()

    await expect(element(by.text('Delete'))).toBeVisible()
    await element(by.text('Delete')).tap()

    // Confirm deletion
    await element(by.text('Confirm')).tap()

    // Note should no longer be visible
    await expect(element(by.text('Listed Note'))).not.toBeVisible()
  })
})
