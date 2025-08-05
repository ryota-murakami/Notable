import { Page } from '@playwright/test'

/**
 * Click an element using JavaScript evaluation
 * This bypasses Playwright's actionability checks and works around timeout issues
 */
export async function jsClick(page: Page, selector: string): Promise<void> {
  await page.evaluate((sel) => {
    const element = document.querySelector(sel)
    if (element instanceof HTMLElement) {
      element.click()
    } else {
      throw new Error(`Element not found: ${sel}`)
    }
  }, selector)
}

/**
 * Check if an element is clickable (not covered by other elements)
 */
export async function isElementClickable(page: Page, selector: string) {
  return await page.evaluate((sel) => {
    const element = document.querySelector(sel)
    if (!element) return { clickable: false, reason: 'Element not found' }

    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const elementAtPoint = document.elementFromPoint(centerX, centerY)

    const isClickable =
      element.contains(elementAtPoint) || element === elementAtPoint

    return {
      clickable: isClickable,
      elementInfo: {
        tagName: element.tagName,
        disabled: (element as any).disabled,
        visible: rect.width > 0 && rect.height > 0,
        position: { x: centerX, y: centerY },
      },
      elementAtPoint: elementAtPoint
        ? {
            tagName: elementAtPoint.tagName,
            className: elementAtPoint.className,
            id: elementAtPoint.id,
          }
        : null,
    }
  }, selector)
}
