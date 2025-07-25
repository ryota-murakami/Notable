/* eslint-env jest, detox/detox */
const { device, element, by, waitFor, expect } = require('detox')

describe('Search Functionality', () => {
  beforeAll(async () => {
    // Assume user is authenticated and has some test notes
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should show search tab', async () => {
    await element(by.id('search-tab')).tap()
    await expect(element(by.id('search-input'))).toBeVisible()
    await expect(element(by.text('Search your notes...'))).toBeVisible()
  })

  it('should allow typing in search input', async () => {
    await element(by.id('search-tab')).tap()

    const searchQuery = 'test note'
    await element(by.id('search-input')).typeText(searchQuery)

    await expect(element(by.id('search-input'))).toHaveText(searchQuery)
  })

  it('should show search results', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('test')

    // Wait for search results to appear
    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(3000)
  })

  it('should highlight search terms in results', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('test')

    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(3000)

    // Check if search terms are highlighted
    await expect(element(by.id('highlighted-text'))).toBeVisible()
  })

  it('should show no results message when nothing found', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('nonexistentquery12345')

    await waitFor(element(by.text('No notes found')))
      .toBeVisible()
      .withTimeout(3000)
  })

  it('should clear search results when input is cleared', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('test')

    // Wait for results
    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(3000)

    // Clear search
    await element(by.id('search-input')).clearText()

    // Results should be hidden
    await expect(element(by.id('search-results'))).not.toBeVisible()
  })

  it('should navigate to note from search results', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-input')).typeText('test')

    await waitFor(element(by.id('search-results')))
      .toBeVisible()
      .withTimeout(3000)

    // Tap on first search result
    await element(by.id('search-result-0')).tap()

    // Should open note editor
    await expect(element(by.id('note-editor'))).toBeVisible()
  })

  it('should show recent searches', async () => {
    await element(by.id('search-tab')).tap()

    // Should show recent searches section
    await expect(element(by.text('Recent Searches'))).toBeVisible()
  })

  it('should support search filters', async () => {
    await element(by.id('search-tab')).tap()
    await element(by.id('search-filter-button')).tap()

    // Should show filter options
    await expect(element(by.text('Filter by Date'))).toBeVisible()
    await expect(element(by.text('Filter by Tags'))).toBeVisible()
  })
})
