const { test, expect } = require('@playwright/test')
const { ElectronApplication, _electron } = require('playwright')

test('Debug what is loading', async () => {
  const electronApp = await _electron.launch({
    args: ['.'],
  })

  const page = await electronApp.firstWindow()
  
  // Log the URL
  console.log('URL:', page.url())
  
  // Log the title
  console.log('Title:', await page.title())
  
  // Log the body content
  const bodyText = await page.locator('body').textContent()
  console.log('Body text length:', bodyText?.length)
  console.log('Body text preview:', bodyText?.substring(0, 200))
  
  // Take a screenshot
  await page.screenshot({ path: 'debug-page.png' })
  
  await electronApp.close()
})