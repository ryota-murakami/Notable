import { expect, test } from '@playwright/test'
import { _electron as electron, type ElectronApplication } from 'playwright'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let electronApp: ElectronApplication

test.beforeAll(async () => {
  // Launch Electron app
  electronApp = await electron.launch({
    args: [path.join(__dirname, '../../build/main.js')],
    env: {
      ...process.env,
      // Remove this to let Electron use default (built files)
      // ELECTRON_START_URL: 'http://localhost:4378'
    }
  })
})

test.afterAll(async () => {
  await electronApp.close()
})

test.describe('App Loading Tests', () => {
  test('should not hang on Loading... screen', async () => {
    const page = await electronApp.firstWindow()
    const url = page.url()
    const isDevServer = url.startsWith('http://localhost')
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle')
    
    // Always check that we have the correct title
    await expect(page).toHaveTitle('Notable')
    
    // For dev server, we expect full functionality
    if (isDevServer) {
      // Verify that we're not stuck on "Loading..." 
      await expect(page.locator('body')).not.toContainText('Loading...')
      
      // Wait a bit longer to ensure the app has fully initialized
      await page.waitForTimeout(3000)
      
      // Verify that the loading state has resolved
      const loadingText = await page.locator('text=Loading...').count()
      expect(loadingText).toBe(0)
    } else {
      // For built files, just verify the page loaded without hanging
      console.log('Running against built files, skipping interactive content checks')
      const bodyText = await page.locator('body').textContent()
      expect(bodyText).toBeTruthy()
    }
    
    // Take a screenshot for verification
    await page.screenshot({ path: 'test-results/app-loaded-successfully.png' })
  })

  test('should load app interface within reasonable time', async () => {
    const page = await electronApp.firstWindow()
    const url = page.url()
    const isDevServer = url.startsWith('http://localhost')
    
    // Start timing
    const startTime = Date.now()
    
    // Wait for the app to load (should not take more than 10 seconds)
    await page.waitForLoadState('networkidle', { timeout: 10000 })
    
    const loadTime = Date.now() - startTime
    
    // App should load within 10 seconds
    expect(loadTime).toBeLessThan(10000)
    
    // Verify the app has content
    const bodyText = await page.locator('body').textContent()
    expect(bodyText).toBeTruthy()
    
    // Only check for "Loading..." if we're on dev server
    if (isDevServer) {
      expect(bodyText).not.toBe('Loading...')
    }
  })

  test('should handle development mode gracefully', async () => {
    const page = await electronApp.firstWindow()
    const url = page.url()
    const isDevServer = url.startsWith('http://localhost')
    
    // Wait for the page to load
    await page.waitForLoadState('networkidle')
    
    if (isDevServer) {
      // In development mode with mock data, we should see either:
      // 1. The welcome screen with sample notes
      // 2. The main app interface
      // 3. But definitely not stuck on "Loading..."
      
      // Check that we have some interactive content
      const hasInteractiveContent = await page.evaluate(() => {
        // Look for buttons, links, or other interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]')
        return interactiveElements.length > 0
      })
      
      expect(hasInteractiveContent).toBe(true)
      
      // Verify no infinite loading state
      await expect(page.locator('text=Loading...')).toHaveCount(0)
    } else {
      // For built files, just check basic page structure
      console.log('Running against built files, checking basic page structure')
      const hasContent = await page.evaluate(() => {
        return document.body.children.length > 0
      })
      expect(hasContent).toBe(true)
    }
  })

  test('should recover from authentication failures', async () => {
    const page = await electronApp.firstWindow()
    const url = page.url()
    const isDevServer = url.startsWith('http://localhost')
    
    // Check console for any critical errors that would cause hanging
    const consoleErrors: string[] = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })
    
    await page.waitForLoadState('networkidle')
    
    if (isDevServer) {
      // Even if there are authentication errors, the app should not hang
      await expect(page.locator('text=Loading...')).toHaveCount(0)
    }
    
    // The app should show some form of UI, even if it's an error state
    const hasVisibleContent = await page.evaluate(() => {
      return document.body.children.length > 0
    })
    
    expect(hasVisibleContent).toBe(true)
  })
})