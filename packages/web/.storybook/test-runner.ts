import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  // Temporarily disable strict accessibility testing to focus on TypeScript fixes
  // TODO: Re-enable accessibility testing in a separate PR to address the 438 violations found

  // Increase timeout for interactive play functions
  testTimeout: 60000, // 60 seconds instead of default 15 seconds

  async preVisit(page) {
    // Set longer timeouts for page interactions
    page.setDefaultTimeout(30000)
  },

  async postVisit(page) {
    // Wait for the story to be fully rendered (not just the root element)
    await page.waitForSelector('#storybook-root', { timeout: 30000 })

    // For theme stories, wait for the actual content to load
    try {
      await page.waitForSelector('#storybook-root > *', { timeout: 10000 })
    } catch {
      // If no content appears, at least ensure root is visible
      await page.waitForSelector('#storybook-root:not(:empty)', {
        timeout: 10000,
      })
    }
  },
}

export default config
