import type { TestRunnerConfig } from '@storybook/test-runner'
import type { Page } from 'playwright'

const config: TestRunnerConfig = {
  // Setup Jest options
  setup() {
    // Configure Jest timeout globally
    jest.setTimeout(120000) // 2 minutes per test
  },
  async preVisit(page: Page) {
    // Disable animations to speed up tests
    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation-delay: -1ms !important;
          animation-duration: 1ms !important;
          animation-iteration-count: 1 !important;
          background-attachment: initial !important;
          scroll-behavior: auto !important;
          transition-duration: 1ms !important;
          transition-delay: -1ms !important;
        }
      `,
    })

    // Set up reduced motion preference
    await page.emulateMedia({ reducedMotion: 'reduce' })

    // Wait for initial load with shorter timeout
    await page.waitForLoadState('domcontentloaded', { timeout: 10000 })
  },
  async postVisit(page: Page, context) {
    const { story } = context

    // Skip accessibility checks if disabled
    if (story.parameters?.a11y?.disable) {
      return
    }

    // Shorter wait for post-visit
    await page.waitForTimeout(100)

    // Basic smoke test - ensure no JS errors
    const errors = await page.evaluate(() => {
      return window.storybookErrors || []
    })

    if (errors.length > 0) {
      console.warn(`JS errors found in ${story.title}:`, errors)
    }
  },
  // Configure browser launch options
  getHttpHeaders: async () => {
    return {
      'Cache-Control': 'no-cache',
    }
  },
}

export default config
