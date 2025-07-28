import { expect, test } from '../fixtures/electron-fixtures'
import { getAppName, isAppPackaged } from '../utils/electron-utils'

test.describe('CI Integration Tests', () => {
  test('should launch app successfully in CI environment', async ({ electronApp, electronPage }) => {
    // Verify app launched
    expect(electronApp.app).toBeDefined()
    expect(electronPage).toBeDefined()

    // Wait for page to be ready
    await electronPage.waitForLoadState('domcontentloaded')
    
    // Verify the page loaded correctly
    const readyState = await electronPage.evaluate(() => document.readyState)
    expect(readyState).toBe('complete')
  })

  test('should have correct CI environment settings', async ({ electronMain }) => {
    // Verify app name
    const appName = await getAppName(electronMain)
    expect(appName).toBe('Notable')

    // In CI, app should not be packaged
    const isPackaged = await isAppPackaged(electronMain)
    expect(isPackaged).toBe(false)
  })

  test('should handle web server connection', async ({ electronPage }) => {
    // Test that the Electron app can connect to the web server
    // This verifies the CI setup script started the web server correctly
    
    // Navigate to a route and verify it loads
    await electronPage.goto('http://localhost:4378')
    
    // Wait for the app shell to load
    await electronPage.waitForSelector('[data-testid="app-shell"]', { 
      timeout: 30000 
    })
    
    // Verify the shell loaded
    const appShell = electronPage.locator('[data-testid="app-shell"]')
    await expect(appShell).toBeVisible()
  })

  test('should support basic window operations in CI', async ({ electronMain, electronPage }) => {
    // Test window management in CI environment
    const windowCount = await electronMain.evaluate(({ BrowserWindow }) => {
      return BrowserWindow.getAllWindows().length
    })
    
    expect(windowCount).toBeGreaterThan(0)
    
    // Test window title
    const title = await electronPage.title()
    expect(title).toBeDefined()
    expect(typeof title).toBe('string')
  })

  test('should handle CI-specific environment variables', async ({ electronMain }) => {
    // Verify CI environment variables are set correctly
    const nodeEnv = await electronMain.evaluate(() => process.env.NODE_ENV)
    
    if (process.env.CI) {
      // In CI environment, verify security warnings are disabled
      const securityWarnings = await electronMain.evaluate(() => 
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS
      )
      expect(securityWarnings).toBe('true')
    }
  })

  test('should capture screenshots on failure (CI only)', async ({ electronPage }) => {
    // This test is designed to verify screenshot capture works in CI
    // It will only run in CI environments
    
    if (!process.env.CI) {
      test.skip()
    }
    
    // Navigate to the app
    await electronPage.goto('http://localhost:4378')
    
    // Wait for app to load
    await electronPage.waitForSelector('[data-testid="app-shell"]')
    
    // Take a screenshot to verify the feature works
    const screenshot = await electronPage.screenshot({ fullPage: true })
    expect(screenshot).toBeDefined()
    expect(screenshot.length).toBeGreaterThan(0)
  })

  test('should handle cross-platform file paths', async ({ electronMain }) => {
    // Test that the app handles file paths correctly across platforms
    const platform = await electronMain.evaluate(() => process.platform)
    expect(platform).toMatch(/^(win32|darwin|linux)$/)
    
    // Verify app path exists and is accessible
    const appPath = await electronMain.evaluate(({ app }) => app.getAppPath())
    expect(appPath).toBeDefined()
    expect(typeof appPath).toBe('string')
    expect(appPath.length).toBeGreaterThan(0)
  })
})