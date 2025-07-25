/* eslint-env jest, detox/detox */
const { device, element, by, waitFor, expect } = require('detox')

describe('Performance Tests', () => {
  beforeAll(async () => {
    // Assume user is authenticated
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should launch app within acceptable time', async () => {
    const startTime = Date.now()

    await device.launchApp({ newInstance: true })
    await waitFor(element(by.id('main-screen')))
      .toBeVisible()
      .withTimeout(10000)

    const launchTime = Date.now() - startTime

    // App should launch within 5 seconds
    expect(launchTime).toBeLessThan(5000)
    console.log(`App launch time: ${launchTime}ms`)
  })

  it('should navigate between screens quickly', async () => {
    const startTime = Date.now()

    await element(by.id('search-tab')).tap()
    await waitFor(element(by.id('search-input')))
      .toBeVisible()
      .withTimeout(2000)

    const navigationTime = Date.now() - startTime

    // Navigation should be under 500ms
    expect(navigationTime).toBeLessThan(500)
    console.log(`Navigation time: ${navigationTime}ms`)
  })

  it('should load large notes list efficiently', async () => {
    // Verify we have sufficient test data
    await expect(element(by.id('notes-list').atIndex(0))).toBeVisible()

    const startTime = Date.now()

    await waitFor(element(by.id('notes-list')))
      .toBeVisible()
      .withTimeout(3000)

    // Scroll through the list to test virtualization
    await element(by.id('notes-list')).scroll(1000, 'down')
    await element(by.id('notes-list')).scroll(1000, 'down')
    await element(by.id('notes-list')).scroll(1000, 'down')

    const loadTime = Date.now() - startTime

    // Large list should load and scroll smoothly within 3 seconds
    expect(loadTime).toBeLessThan(3000)
    console.log(`Large list load time: ${loadTime}ms`)
  })

  it('should search through large dataset quickly', async () => {
    await element(by.id('search-tab')).tap()

    const startTime = Date.now()

    await element(by.id('search-input')).typeText('test')
    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(2000)

    const searchTime = Date.now() - startTime

    // Search should return results within 1 second
    expect(searchTime).toBeLessThan(1000)
    console.log(`Search time: ${searchTime}ms`)
  })

  it('should handle memory usage efficiently during long session', async () => {
    // Simulate long usage session
    for (let i = 0; i < 10; i++) {
      // Create and edit notes
      await element(by.id('create-note-button')).tap()
      await element(by.id('note-title-input')).typeText(
        `Performance Test Note ${i}`
      )
      await element(by.id('note-content-input')).typeText(
        `This is test content for performance note ${i}. `.repeat(50)
      )
      await element(by.id('back-button')).tap()

      // Search for notes
      await element(by.id('search-tab')).tap()
      await element(by.id('search-input')).typeText(`note ${i}`)
      await element(by.id('search-input')).clearText()
      await element(by.id('home-tab')).tap()
    }

    // App should still be responsive after intensive usage
    await expect(element(by.id('notes-list'))).toBeVisible()
  })

  it('should sync changes efficiently', async () => {
    // Create multiple notes quickly
    const startTime = Date.now()

    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText('Sync Performance Test')
    await element(by.id('note-content-input')).typeText(
      'Testing sync performance'
    )
    await element(by.id('back-button')).tap()

    // Wait for sync to complete
    await waitFor(element(by.id('sync-indicator')))
      .not.toBeVisible()
      .withTimeout(5000)

    const syncTime = Date.now() - startTime

    // Sync should complete within 3 seconds
    expect(syncTime).toBeLessThan(3000)
    console.log(`Sync time: ${syncTime}ms`)
  })

  it('should handle offline-to-online transition smoothly', async () => {
    // Go offline
    await device.setNetworkConnection(false)

    // Create note offline
    await element(by.id('create-note-button')).tap()
    await element(by.id('note-title-input')).typeText(
      'Offline Performance Test'
    )
    await element(by.id('back-button')).tap()

    const startTime = Date.now()

    // Go back online
    await device.setNetworkConnection(true)

    // Wait for sync to complete
    await waitFor(element(by.id('sync-indicator')))
      .not.toBeVisible()
      .withTimeout(10000)

    const transitionTime = Date.now() - startTime

    // Offline-to-online transition should be smooth and under 5 seconds
    expect(transitionTime).toBeLessThan(5000)
    console.log(`Offline-to-online transition time: ${transitionTime}ms`)
  })

  afterEach(async () => {
    // Restore network connection
    await device.setNetworkConnection(true)
  })
})
