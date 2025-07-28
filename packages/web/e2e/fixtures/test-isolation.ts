import { test as base } from '@playwright/test'

/**
 * Extended test fixture that provides test isolation
 * Ensures each test starts with a clean state
 */
export const test = base.extend({
  // Override the page fixture to add automatic state clearing
  page: async ({ page }, use) => {
    // Setup: Clear any existing state before each test
    await page.evaluate(() => {
      // Clear localStorage
      localStorage.clear()
      
      // Clear sessionStorage  
      sessionStorage.clear()
      
      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        const eqPos = c.indexOf("=")
        const name = eqPos > -1 ? c.substr(0, eqPos) : c
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
      })
    })
    
    // Use the page fixture
    await use(page)
    
    // Teardown: Clean up after test if needed
    // (Additional cleanup can be added here)
  },
})

export { expect } from '@playwright/test'
