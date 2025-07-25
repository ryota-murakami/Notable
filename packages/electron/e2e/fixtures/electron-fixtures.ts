import { test as base, type Page } from '@playwright/test'
import type { ElectronApplication } from '@playwright/test'
import { launchElectronApp, closeElectronApp, type ElectronTestContext } from '../utils/electron-utils'

export interface ElectronFixtures {
  electronApp: ElectronTestContext
  electronPage: Page
  electronMain: ElectronApplication
}

/**
 * Extended test with Electron fixtures
 */
export const test = base.extend<ElectronFixtures>({
  electronApp: async ({}, use) => {
    let context: ElectronTestContext | null = null
    
    try {
      // Launch Electron app before each test
      context = await launchElectronApp()
      await use(context)
    } finally {
      // Clean up after each test
      if (context) {
        await closeElectronApp(context.app)
      }
    }
  },

  electronPage: async ({ electronApp }, use) => {
    // Provide easy access to the main page
    await use(electronApp.page)
  },

  electronMain: async ({ electronApp }, use) => {
    // Provide easy access to the Electron application
    await use(electronApp.app)
  },
})

export { expect } from '@playwright/test'