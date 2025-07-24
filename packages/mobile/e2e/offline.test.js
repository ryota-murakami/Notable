/* eslint-env jest, detox/detox */
const { device, element, by, waitFor, expect } = require('detox')

describe('Offline Functionality', () => {
  beforeAll(async () => {
    // Assume user is authenticated
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show offline indicator when disconnected', async () => {
    // Simulate network disconnection
    await device.setNetworkConnection(false)

    await expect(element(by.id('offline-indicator'))).toBeVisible()
    await expect(element(by.text('You are offline'))).toBeVisible()
  })

  it('should allow creating notes while offline', async () => {
    await device.setNetworkConnection(false)

    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Offline Note')
    await element(by.id('note-content-input')).typeText('Created while offline')

    // Note should be saved locally
    await expect(element(by.id('save-indicator'))).toBeVisible()
  })

  it('should allow editing notes while offline', async () => {
    // First create a note while online
    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Online Note')
    await element(by.id('back-button')).tap()

    // Go offline and edit the note
    await device.setNetworkConnection(false)
    await element(by.text('Online Note')).tap()
    await element(by.id('note-content-input')).typeText(' - edited offline')

    await expect(element(by.id('save-indicator'))).toBeVisible()
  })

  it('should sync changes when back online', async () => {
    // Create note offline
    await device.setNetworkConnection(false)
    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Sync Test')
    await element(by.id('back-button')).tap()

    // Go back online
    await device.setNetworkConnection(true)

    // Should show sync indicator
    await waitFor(element(by.id('sync-indicator')))
      .toBeVisible()
      .withTimeout(5000)

    // Offline indicator should disappear
    await expect(element(by.id('offline-indicator'))).not.toBeVisible()
  })

  it('should show conflict resolution dialog for conflicted notes', async () => {
    // This test would require setting up a conflict scenario
    // Typically involves editing the same note offline and online

    // Simulate conflict resolution
    await expect(element(by.text('Conflict Resolution'))).toBeVisible()
    await expect(element(by.text('Keep Local Version'))).toBeVisible()
    await expect(element(by.text('Keep Server Version'))).toBeVisible()
    await expect(element(by.text('Merge Changes'))).toBeVisible()
  })

  it('should allow searching cached notes while offline', async () => {
    await device.setNetworkConnection(false)

    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('offline')

    // Should still show cached search results
    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(3000)
  })

  afterEach(async () => {
    // Restore network connection
    await device.setNetworkConnection(true)
  })
})
