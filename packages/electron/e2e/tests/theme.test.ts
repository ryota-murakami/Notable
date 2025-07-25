import { expect, test } from '../fixtures/electron-fixtures'
import { 
  evaluateInMain, 
  sendIPCMessage, 
  waitForIPCMessage,
  waitForThemeChange
} from '../utils/electron-utils'

test.describe('Theme System', () => {
  let originalTheme: string

  test.beforeEach(async ({ electronPage }) => {
    // Store original theme to restore after each test
    originalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
  })

  test.afterEach(async ({ electronPage }) => {
    // Restore original theme after each test
    if (originalTheme) {
      await sendIPCMessage(electronPage, 'setTheme', originalTheme)
    }
  })

  test.describe('Theme IPC Handlers', () => {
    test('should get current theme', async ({ electronPage }) => {
      const currentTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      
      expect(currentTheme).toBeDefined()
      expect(typeof currentTheme).toBe('string')
      expect(['light', 'dark', 'system']).toContain(currentTheme)
    })

    test('should set theme to light', async ({ electronPage, electronMain }) => {
      const result = await sendIPCMessage<string>(electronPage, 'setTheme', 'light')
      expect(result).toBe('light')
      
      // Verify theme actually changed in main process
      const mainTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainTheme).toBe('light')
      
      // Verify get-theme returns the new value
      const getThemeResult = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(getThemeResult).toBe('light')
    })

    test('should set theme to dark', async ({ electronPage, electronMain }) => {
      const result = await sendIPCMessage<string>(electronPage, 'setTheme', 'dark')
      expect(result).toBe('dark')
      
      const mainTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainTheme).toBe('dark')
      
      const getThemeResult = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(getThemeResult).toBe('dark')
    })

    test('should set theme to system', async ({ electronPage, electronMain }) => {
      const result = await sendIPCMessage<string>(electronPage, 'setTheme', 'system')
      expect(result).toBe('system')
      
      const mainTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainTheme).toBe('system')
      
      const getThemeResult = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(getThemeResult).toBe('system')
    })

    test('should handle all valid theme values in sequence', async ({ electronPage, electronMain }) => {
      const themes = ['light', 'dark', 'system'] as const
      
      for (const theme of themes) {
        const setResult = await sendIPCMessage<string>(electronPage, 'setTheme', theme)
        expect(setResult).toBe(theme)
        
        const getResult = await sendIPCMessage<string>(electronPage, 'getTheme')
        expect(getResult).toBe(theme)
        
        const mainResult = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
        expect(mainResult).toBe(theme)
        
        // Wait a bit between theme changes
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    })

    test('should handle rapid theme changes', async ({ electronPage, electronMain }) => {
      // Rapid theme switching
      const promises = [
        sendIPCMessage(electronPage, 'setTheme', 'light'),
        sendIPCMessage(electronPage, 'setTheme', 'dark'),
        sendIPCMessage(electronPage, 'setTheme', 'system'),
        sendIPCMessage(electronPage, 'setTheme', 'light')
      ]
      
      const results = await Promise.all(promises)
      expect(results).toEqual(['light', 'dark', 'system', 'light'])
      
      // Final theme should be light
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(finalTheme).toBe('light')
      
      const mainTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainTheme).toBe('light')
    })
  })

  test.describe('Menu Theme Integration', () => {
    test('should have theme submenu with correct structure', async ({ electronMain }) => {
      const themeMenuStructure = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
        
        if (themeItem?.submenu) {
          return {
            currentTheme: nativeTheme.themeSource,
            items: themeItem.submenu.items.map(item => ({
              label: item.label,
              type: item.type,
              checked: item.checked
            }))
          }
        }
        return null
      })
      
      expect(themeMenuStructure).toBeDefined()
      expect(themeMenuStructure?.items).toHaveLength(3)
      
      const items = themeMenuStructure?.items || []
      expect(items[0].label).toBe('Light')
      expect(items[0].type).toBe('radio')
      expect(items[1].label).toBe('Dark')
      expect(items[1].type).toBe('radio')
      expect(items[2].label).toBe('System')
      expect(items[2].type).toBe('radio')
      
      // Exactly one should be checked
      const checkedCount = items.filter(item => item.checked).length
      expect(checkedCount).toBe(1)
      
      // The checked item should match current theme
      const currentTheme = themeMenuStructure?.currentTheme
      const checkedItem = items.find(item => item.checked)
      expect(checkedItem?.label.toLowerCase()).toBe(currentTheme)
    })

    test('should update menu when theme changes via IPC', async ({ electronPage, electronMain }) => {
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Change theme via IPC
      await sendIPCMessage(electronPage, 'setTheme', targetTheme)
      
      // Wait for menu rebuild
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Check menu state
      const menuState = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
        
        return {
          currentTheme: nativeTheme.themeSource,
          lightChecked: themeItem?.submenu?.items.find(item => item.label === 'Light')?.checked,
          darkChecked: themeItem?.submenu?.items.find(item => item.label === 'Dark')?.checked,
          systemChecked: themeItem?.submenu?.items.find(item => item.label === 'System')?.checked
        }
      })
      
      expect(menuState.currentTheme).toBe(targetTheme)
      
      if (targetTheme === 'light') {
        expect(menuState.lightChecked).toBe(true)
        expect(menuState.darkChecked).toBe(false)
        expect(menuState.systemChecked).toBe(false)
      } else if (targetTheme === 'dark') {
        expect(menuState.lightChecked).toBe(false)
        expect(menuState.darkChecked).toBe(true)
        expect(menuState.systemChecked).toBe(false)
      }
    })

    test('should change theme when menu item is clicked', async ({ electronPage, electronMain }) => {
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Set up listener for theme change message
      const themeChangePromise = waitForIPCMessage(electronPage, 'theme-changed', 5000)
      
      // Click theme menu item
      await evaluateInMain(electronMain, ({ Menu }, targetTheme) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
        const targetItem = themeItem?.submenu?.items.find(item => 
          item.label?.toLowerCase() === targetTheme
        )
        targetItem?.click()
      }, targetTheme)
      
      // Wait for theme change message
      const changedTheme = await themeChangePromise
      expect(changedTheme).toBe(targetTheme)
      
      // Verify theme actually changed
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(finalTheme).toBe(targetTheme)
    })

    test('should handle all theme menu items', async ({ electronPage, electronMain }) => {
      const themes = ['light', 'dark', 'system']
      
      for (const theme of themes) {
        // Set up listener for theme change
        const themeChangePromise = waitForIPCMessage(electronPage, 'theme-changed', 3000)
        
        // Click the theme menu item
        await evaluateInMain(electronMain, ({ Menu }, theme) => {
          const menu = Menu.getApplicationMenu()
          const viewMenu = menu?.items.find(item => item.label === 'View')
          const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
          const targetItem = themeItem?.submenu?.items.find(item => 
            item.label?.toLowerCase() === theme
          )
          targetItem?.click()
        }, theme)
        
        // Verify theme change message
        const changedTheme = await themeChangePromise
        expect(changedTheme).toBe(theme)
        
        // Verify theme is set correctly
        const currentTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
        expect(currentTheme).toBe(theme)
        
        // Wait between theme changes
        await new Promise(resolve => setTimeout(resolve, 200))
      }
    })
  })

  test.describe('Native Theme Events', () => {
    test('should handle native theme updated events', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Set up listener for native theme updates
      const nativeThemeUpdatePromise = waitForIPCMessage(page, 'native-theme-updated', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger native theme update event
      await electronMain.evaluate(({ nativeTheme }) => {
        // Simulate native theme change
        nativeTheme.emit('updated')
      })
      
      const themeUpdate = await nativeThemeUpdatePromise
      expect(typeof themeUpdate).toBe('boolean')
    })

    test('should reflect system theme when set to system', async ({ electronPage, electronMain }) => {
      // Set theme to system
      await sendIPCMessage(electronPage, 'setTheme', 'system')
      
      const systemThemeInfo = await electronMain.evaluate(({ nativeTheme }) => {
        return {
          themeSource: nativeTheme.themeSource,
          shouldUseDarkColors: nativeTheme.shouldUseDarkColors,
          shouldUseHighContrastColors: nativeTheme.shouldUseHighContrastColors,
          shouldUseInvertedColorScheme: nativeTheme.shouldUseInvertedColorScheme
        }
      })
      
      expect(systemThemeInfo.themeSource).toBe('system')
      expect(typeof systemThemeInfo.shouldUseDarkColors).toBe('boolean')
      expect(typeof systemThemeInfo.shouldUseHighContrastColors).toBe('boolean')
      expect(typeof systemThemeInfo.shouldUseInvertedColorScheme).toBe('boolean')
    })

    test('should emit native theme updated on system changes', async ({ electronPage, electronMain }) => {
      // Set to system theme first
      await sendIPCMessage(electronPage, 'setTheme', 'system')
      
      // Set up listener
      const updatePromise = waitForIPCMessage(electronPage, 'native-theme-updated', 5000)
      
      // Small delay to ensure listener is ready
      await electronPage.waitForTimeout(100)
      
      // Simulate system theme change
      await electronMain.evaluate(({ nativeTheme }) => {
        // Force theme update
        const currentSource = nativeTheme.themeSource
        nativeTheme.themeSource = 'light'
        nativeTheme.themeSource = currentSource
        nativeTheme.emit('updated')
      })
      
      const updateData = await updatePromise
      expect(typeof updateData).toBe('boolean')
    })
  })

  test.describe('Theme Message Broadcasting', () => {
    test('should send theme-changed message when theme is set', async ({ electronPage, electronMain }) => {
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Set up listener for theme change message
      const themeChangePromise = waitForIPCMessage(electronPage, 'theme-changed', 3000)
      
      // Change theme via menu (which sends theme-changed message)
      await evaluateInMain(electronMain, ({ Menu }, targetTheme) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
        const targetItem = themeItem?.submenu?.items.find(item => 
          item.label?.toLowerCase() === targetTheme
        )
        targetItem?.click()
      }, targetTheme)
      
      const receivedTheme = await themeChangePromise
      expect(receivedTheme).toBe(targetTheme)
    })

    test('should broadcast theme changes to all windows', async ({ electronPage, electronMain }) => {
      // Create additional window
      await sendIPCMessage(electronPage, 'create-window')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const windowCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().length
      })
      expect(windowCount).toBeGreaterThan(1)
      
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Track messages sent to all windows
      const messagesSent = await evaluateInMain(electronMain, ({ BrowserWindow, Menu }, targetTheme) => {
        let sentCount = 0
        
        // Mock webContents.send to count messages
        BrowserWindow.getAllWindows().forEach(window => {
          const originalSend = window.webContents.send
          window.webContents.send = function(channel: string, ...args: any[]) {
            if (channel === 'theme-changed') {
              sentCount++
            }
            return originalSend.call(this, channel, ...args)
          }
        })
        
        // Trigger theme change
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
        const targetItem = themeItem?.submenu?.items.find(item => 
          item.label?.toLowerCase() === targetTheme
        )
        targetItem?.click()
        
        return sentCount
      }, targetTheme)
      
      expect(messagesSent).toBeGreaterThan(0)
    })
  })

  test.describe('Theme Persistence and Consistency', () => {
    test('should maintain theme consistency across operations', async ({ electronPage, electronMain }) => {
      // Set a specific theme
      await sendIPCMessage(electronPage, 'setTheme', 'dark')
      
      // Perform various operations
      await sendIPCMessage(electronPage, 'create-window')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      await sendIPCMessage(electronPage, 'minimize-window')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Check that theme is still consistent
      const themeAfterOps = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(themeAfterOps).toBe('dark')
      
      const mainTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainTheme).toBe('dark')
    })

    test('should handle theme during window lifecycle', async ({ electronPage, electronMain }) => {
      // Set initial theme
      await sendIPCMessage(electronPage, 'setTheme', 'light')
      
      // Create new window
      await sendIPCMessage(electronPage, 'create-window')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Change theme
      await sendIPCMessage(electronPage, 'setTheme', 'dark')
      
      // Close a window
      await sendIPCMessage(electronPage, 'close-window')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Theme should still be correct
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(finalTheme).toBe('dark')
    })

    test('should synchronize theme across multiple windows', async ({ electronPage, electronMain }) => {
      // Create additional window
      await sendIPCMessage(electronPage, 'create-window')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Change theme
      const targetTheme = 'dark'
      await sendIPCMessage(electronPage, 'setTheme', targetTheme)
      
      // Verify all windows see the same theme
      const allWindowsTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => {
        // Since nativeTheme is global, all windows share the same theme
        return nativeTheme.themeSource
      })
      
      expect(allWindowsTheme).toBe(targetTheme)
    })
  })

  test.describe('Theme Edge Cases', () => {
    test('should handle invalid theme values gracefully', async ({ electronPage }) => {
      // Try to set invalid theme values
      const invalidThemes = ['invalid', '', null, undefined, 123, {}]
      
      for (const invalidTheme of invalidThemes) {
        try {
          const result = await sendIPCMessage(electronPage, 'setTheme', invalidTheme)
          // If it doesn't throw, the result should be valid
          if (result !== undefined) {
            expect(['light', 'dark', 'system']).toContain(result)
          }
        } catch (error) {
          // It's acceptable for invalid values to throw errors
          expect(error).toBeDefined()
        }
      }
      
      // Theme should still be valid after invalid attempts
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(['light', 'dark', 'system']).toContain(finalTheme)
    })

    test('should handle theme switching during heavy operations', async ({ electronPage, electronMain }) => {
      // Start some heavy operations
      const operationPromises = [
        sendIPCMessage(electronPage, 'create-window'),
        sendIPCMessage(electronPage, 'save-notes', Array(1000).fill(0).map((_, i) => ({ id: i, content: 'test' }))),
        sendIPCMessage(electronPage, 'load-notes')
      ]
      
      // Change theme during operations
      const themePromise = sendIPCMessage(electronPage, 'setTheme', 'dark')
      
      // Wait for all operations
      await Promise.all([...operationPromises, themePromise])
      
      // Theme should be correctly set
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(finalTheme).toBe('dark')
    })

    test('should handle multiple rapid theme menu clicks', async ({ electronPage, electronMain }) => {
      const themes = ['light', 'dark', 'system', 'light', 'dark']
      
      // Rapidly click theme menu items
      for (const theme of themes) {
        await evaluateInMain(electronMain, ({ Menu }, theme) => {
          const menu = Menu.getApplicationMenu()
          const viewMenu = menu?.items.find(item => item.label === 'View')
          const themeItem = viewMenu?.submenu?.items.find(item => item.label === 'Theme')
          const targetItem = themeItem?.submenu?.items.find(item => 
            item.label?.toLowerCase() === theme
          )
          targetItem?.click()
        }, theme)
        
        // Very short delay between clicks
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      
      // Final theme should be the last one clicked
      await new Promise(resolve => setTimeout(resolve, 500))
      const finalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(finalTheme).toBe('dark')
    })
  })
})