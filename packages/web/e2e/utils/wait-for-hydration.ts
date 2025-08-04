import { Page } from '@playwright/test'

/**
 * Wait for React hydration to complete in Next.js
 * This ensures that client-side event handlers are attached
 */
export async function waitForHydration(page: Page) {
  // Wait for document to be ready
  await page.waitForLoadState('domcontentloaded')

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
  await element.waitFor({ state: 'visible' })
  await element.waitFor({ state: 'attached' })

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
  } catch (error) {
    console.log('Standard click failed, trying force click')
    try {
      await element.click({ force: true, timeout: 5000 })
    } catch (error2) {
      console.log('Force click failed, trying JavaScript click')
      await element.evaluate((el: HTMLElement) => el.click())
    }
  }
}
