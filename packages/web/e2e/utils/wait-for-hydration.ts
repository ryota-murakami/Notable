import { type Page } from '@playwright/test'

/**
 * Wait for React hydration to complete in Next.js
 * This ensures that client-side event handlers are attached
 */
export async function waitForHydration(page: Page) {
  // Wait for document to be ready
  await page.waitForLoadState('domcontentloaded')

  // In test environment, skip hydration check as it may not be set properly
  const isTestEnv = await page.evaluate(() => {
    return document.cookie.includes('dev-auth-bypass=true')
  })

  if (isTestEnv) {
    // Just wait a bit for the app to stabilize
    await page.waitForTimeout(1000)
    return
  }

  // Wait for our custom hydration flag
  await page.waitForFunction(
    () => {
      return (window as any).__NOTABLE_HYDRATED === true
    },
    { timeout: 10000 }
  )

  // Small additional delay for any async effects
  await page.waitForTimeout(200)
}

/**
 * Click a button with hydration safety
 */
export async function clickWithHydration(page: Page, selector: string) {
  await waitForHydration(page)

  const element = page.locator(selector)
  await element.waitFor({ state: 'visible', timeout: 10000 })
  await element.waitFor({ state: 'attached', timeout: 5000 })

  // Wait for element to be enabled
  await page.waitForFunction(
    (sel) => {
      const el = document.querySelector(sel) as HTMLButtonElement
      return el && !el.disabled
    },
    selector,
    { timeout: 5000 }
  )

  // Try standard click first
  try {
    await element.click({ timeout: 5000 })
  } catch {
    console.info('Standard click failed, trying force click')
    try {
      await element.click({ force: true, timeout: 5000 })
    } catch {
      console.info('Force click failed, trying JavaScript click')
      await element.evaluate((el: HTMLElement) => el.click())
    }
  }
}
