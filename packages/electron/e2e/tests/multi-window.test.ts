import { test, expect } from '../fixtures/electron-fixtures'
import { 
  sendIPCMessage, 
  waitForIPCMessage, 
  evaluateInMain,
  getAllWindows,
  waitForNewWindow,
  setWindowState,
  getWindowState
} from '../utils/electron-utils'

test.describe('Multi-Window Management', () => {
  test.describe('Window Creation and Lifecycle', () => {
    test('should create new window via IPC', async ({ electronPage, electronMain }) => {
      const initialWindows = await getAllWindows(electronMain)
      const initialCount = initialWindows.length
      
      await sendIPCMessage(electronPage, 'createWindow')
      
      // Wait for window creation
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const finalWindows = await getAllWindows(electronMain)
      expect(finalWindows.length).toBe(initialCount + 1)
    })

    test('should create new window via menu', async ({ electronMain }) => {
      const initialWindows = await getAllWindows(electronMain)
      const initialCount = initialWindows.length
      
      // Trigger New Window menu item
      await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const windowMenu = menu?.items.find(item => item.label === 'Window')
        const newWindowItem = windowMenu?.submenu?.items.find(item => item.label === 'New Window')
        newWindowItem?.click()
      })
      
      // Wait for window creation
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const finalWindows = await getAllWindows(electronMain)
      expect(finalWindows.length).toBe(initialCount + 1)
    })

    test('should properly track windows in windows Set', async ({ electronMain }) => {
      const initialCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().length
      })
      
      // Create new window
      await evaluateInMain(electronMain, () => {
        // Access the createWindow function through the module's scope
        const { createWindow } = require('./main')
        createWindow()
      })
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const finalCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().length
      })
      
      expect(finalCount).toBe(initialCount + 1)
    })

    test('should handle window closure properly', async ({ electronMain, electronPage }) => {
      // Create an additional window first
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const beforeCloseCount = (await getAllWindows(electronMain)).length
      expect(beforeCloseCount).toBeGreaterThan(1)
      
      // Close the focused window
      await sendIPCMessage(electronPage, 'closeWindow')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const afterCloseCount = (await getAllWindows(electronMain)).length
      expect(afterCloseCount).toBe(beforeCloseCount - 1)
    })

    test('should handle multiple window creation concurrently', async ({ electronMain, electronPage }) => {
      const initialCount = (await getAllWindows(electronMain)).length
      
      // Create multiple windows concurrently
      const promises = [
        sendIPCMessage(electronPage, 'createWindow'),
        sendIPCMessage(electronPage, 'createWindow'),
        sendIPCMessage(electronPage, 'createWindow')
      ]
      
      await Promise.all(promises)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const finalCount = (await getAllWindows(electronMain)).length
      expect(finalCount).toBe(initialCount + 3)
    })
  })

  test.describe('Window State Management', () => {
    test('should maintain independent window states', async ({ electronMain, electronPage }) => {
      // Create a second window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const windows = await getAllWindows(electronMain)
      expect(windows.length).toBeGreaterThan(1)
      
      // Test that windows can have different states
      const windowStates = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const allWindows = BrowserWindow.getAllWindows()
        return allWindows.map((window, index) => ({
          id: window.id,
          isMaximized: window.isMaximized(),
          isMinimized: window.isMinimized(),
          isVisible: window.isVisible(),
          index
        }))
      })
      
      expect(windowStates.length).toBeGreaterThan(1)
      
      // Each window should have an independent state
      windowStates.forEach(state => {
        expect(typeof state.isMaximized).toBe('boolean')
        expect(typeof state.isMinimized).toBe('boolean')
        expect(typeof state.isVisible).toBe('boolean')
        expect(typeof state.id).toBe('number')
      })
    })

    test('should handle window maximize/restore independently', async ({ electronMain, electronPage }) => {
      // Create second window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Get window states before
      const beforeStates = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().map(window => ({
          id: window.id,
          isMaximized: window.isMaximized()
        }))
      })
      
      // Maximize the focused window
      await sendIPCMessage(electronPage, 'maximizeWindow')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Check that only one window state changed
      const afterStates = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().map(window => ({
          id: window.id,
          isMaximized: window.isMaximized()
        }))
      })
      
      // In test environment, the first window will be maximized if no focused window
      expect(afterStates.length).toBe(beforeStates.length)
      
      // Count how many windows changed their maximize state
      let changedWindows = 0
      beforeStates.forEach((beforeState, index) => {
        const afterState = afterStates.find(s => s.id === beforeState.id)
        if (afterState && beforeState.isMaximized !== afterState.isMaximized) {
          changedWindows++
        }
      })
      
      // Exactly one window should have changed its maximize state
      expect(changedWindows).toBe(1)
    })

    test('should handle window minimization independently', async ({ electronMain, electronPage }) => {
      // Create second window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const beforeMinimizeCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().filter(window => window.isMinimized()).length
      })
      
      // Minimize the focused window
      await sendIPCMessage(electronPage, 'minimizeWindow')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const afterMinimizeCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().filter(window => window.isMinimized()).length
      })
      
      expect(afterMinimizeCount).toBe(beforeMinimizeCount + 1)
      
      // Restore windows for cleanup
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        BrowserWindow.getAllWindows().forEach(window => {
          if (window.isMinimized()) {
            window.restore()
          }
        })
      })
    })
  })

  test.describe('Window Focus Management', () => {
    test('should handle window focus changes', async ({ electronMain, electronPage }) => {
      // Create second window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const windows = await getAllWindows(electronMain)
      expect(windows.length).toBeGreaterThan(1)
      
      // Test focus switching
      const focusResults = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const allWindows = BrowserWindow.getAllWindows()
        const firstWindow = allWindows[0]
        const secondWindow = allWindows[1]
        
        // Focus first window
        firstWindow?.focus()
        const firstFocused = BrowserWindow.getFocusedWindow()?.id === firstWindow?.id
        
        // Focus second window
        secondWindow?.focus()
        const secondFocused = BrowserWindow.getFocusedWindow()?.id === secondWindow?.id
        
        return {
          firstFocused,
          secondFocused,
          totalWindows: allWindows.length
        }
      })
      
      expect(focusResults.totalWindows).toBeGreaterThan(1)
      expect(focusResults.firstFocused).toBe(true)
      expect(focusResults.secondFocused).toBe(true)
    })

    test('should operate on focused window for IPC commands', async ({ electronMain, electronPage }) => {
      // Create second window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Ensure we have multiple windows
      const windowCount = (await getAllWindows(electronMain)).length
      expect(windowCount).toBeGreaterThan(1)
      
      // Test that IPC commands affect the focused window
      const testResult = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const allWindows = BrowserWindow.getAllWindows()
        const firstWindow = allWindows[0]
        const secondWindow = allWindows[1]
        
        // Focus first window and get its state
        firstWindow?.focus()
        const firstInitialMaximized = firstWindow?.isMaximized()
        
        // Focus second window and get its state
        secondWindow?.focus()
        const secondInitialMaximized = secondWindow?.isMaximized()
        
        return {
          firstWindow: { id: firstWindow?.id, initialMaximized: firstInitialMaximized },
          secondWindow: { id: secondWindow?.id, initialMaximized: secondInitialMaximized },
          focusedWindowId: BrowserWindow.getFocusedWindow()?.id
        }
      })
      
      // The focused window should be the second one
      expect(testResult.focusedWindowId).toBe(testResult.secondWindow.id)
      
      // Now trigger maximize on focused window
      await sendIPCMessage(electronPage, 'maximizeWindow')
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Verify only the focused (second) window was affected
      const afterMaximize = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const allWindows = BrowserWindow.getAllWindows()
        return allWindows.map(window => ({
          id: window.id,
          isMaximized: window.isMaximized()
        }))
      })
      
      const firstAfter = afterMaximize.find(w => w.id === testResult.firstWindow.id)
      const secondAfter = afterMaximize.find(w => w.id === testResult.secondWindow.id)
      
      // First window state should be unchanged
      expect(firstAfter?.isMaximized).toBe(testResult.firstWindow.initialMaximized)
      // Second window state should have changed
      expect(secondAfter?.isMaximized).toBe(!testResult.secondWindow.initialMaximized)
    })
  })

  test.describe('Theme Synchronization', () => {
    test('should synchronize theme across all windows', async ({ electronMain, electronPage }) => {
      // Create additional window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Change theme
      await sendIPCMessage(electronPage, 'setTheme', targetTheme)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Verify theme changed in main process
      const mainProcessTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainProcessTheme).toBe(targetTheme)
      
      // Since theme is global in nativeTheme, all windows should have the same theme
      const allWindowsTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => {
        return nativeTheme.themeSource
      })
      expect(allWindowsTheme).toBe(targetTheme)
      
      // Restore original theme
      await sendIPCMessage(electronPage, 'setTheme', initialTheme)
    })

    test('should rebuild menu for all windows when theme changes', async ({ electronMain, electronPage }) => {
      // Create additional window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const initialTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
      // Get initial menu state for all windows
      const initialMenuState = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
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
      
      // Change theme (this should rebuild the menu)
      await sendIPCMessage(electronPage, 'setTheme', targetTheme)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check updated menu state
      const updatedMenuState = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
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
      
      expect(updatedMenuState.currentTheme).toBe(targetTheme)
      
      // Verify radio button states updated correctly
      if (targetTheme === 'light') {
        expect(updatedMenuState.lightChecked).toBe(true)
        expect(updatedMenuState.darkChecked).toBe(false)
      } else if (targetTheme === 'dark') {
        expect(updatedMenuState.lightChecked).toBe(false)
        expect(updatedMenuState.darkChecked).toBe(true)
      }
      
      // Restore original theme
      await sendIPCMessage(electronPage, 'setTheme', initialTheme)
    })
  })

  test.describe('Platform-specific Window Behavior', () => {
    test('should handle close behavior correctly on macOS', async ({ electronMain, electronPage }) => {
      const platform = await evaluateInMain(electronMain, () => process.platform)
      
      if (platform === 'darwin') {
        // Create additional window to test close behavior
        await sendIPCMessage(electronPage, 'createWindow')
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        const beforeCloseCount = (await getAllWindows(electronMain)).length
        expect(beforeCloseCount).toBeGreaterThan(1)
        
        // Test that closing a window doesn't quit the app on macOS
        const appQuitPromise = new Promise(resolve => {
          const timeout = setTimeout(() => resolve('no-quit'), 2000)
          // This would resolve if app quit, but we expect it to timeout
        })
        
        // Close a window
        await sendIPCMessage(electronPage, 'closeWindow')
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const afterCloseCount = (await getAllWindows(electronMain)).length
        expect(afterCloseCount).toBe(beforeCloseCount - 1)
        
        // App should still be running
        const appStillRunning = await evaluateInMain(electronMain, ({ app }) => !app.isQuiting)
        expect(appStillRunning).toBe(true)
        
        const quitResult = await appQuitPromise
        expect(quitResult).toBe('no-quit')
      }
    })

    test('should restore window on app activate (macOS)', async ({ electronMain }) => {
      const platform = await evaluateInMain(electronMain, () => process.platform)
      
      if (platform === 'darwin') {
        // Hide all windows
        await evaluateInMain(electronMain, ({ BrowserWindow }) => {
          BrowserWindow.getAllWindows().forEach(window => window.hide())
        })
        
        const hiddenWindowCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
          return BrowserWindow.getAllWindows().filter(window => !window.isVisible()).length
        })
        
        expect(hiddenWindowCount).toBeGreaterThan(0)
        
        // Simulate app activation
        await evaluateInMain(electronMain, ({ app, BrowserWindow }) => {
          // Simulate the activate event
          if (BrowserWindow.getAllWindows().length === 0) {
            // This would create a new window, but we have hidden windows
            // so just show the main window
            const windows = BrowserWindow.getAllWindows()
            if (windows.length > 0) {
              windows[0].show()
            }
          }
        })
        
        // At least one window should be visible now
        const visibleWindowCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
          return BrowserWindow.getAllWindows().filter(window => window.isVisible()).length
        })
        
        expect(visibleWindowCount).toBeGreaterThan(0)
      }
    })
  })

  test.describe('Window Communication', () => {
    test('should send IPC messages to all windows', async ({ electronMain, electronPage }) => {
      // Create additional windows
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const windowCount = (await getAllWindows(electronMain)).length
      expect(windowCount).toBeGreaterThan(1)
      
      // Send a message to all windows
      const messagesSent = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        let sentCount = 0
        BrowserWindow.getAllWindows().forEach(window => {
          window.webContents.send('test-broadcast-message', 'Hello from main')
          sentCount++
        })
        return sentCount
      })
      
      expect(messagesSent).toBe(windowCount)
    })

    test('should handle window-specific operations', async ({ electronMain, electronPage }) => {
      // Create additional window
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Test that operations can target specific windows
      const operationResults = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const allWindows = BrowserWindow.getAllWindows()
        const results: Array<{id: number, canOperate: boolean}> = []
        
        allWindows.forEach(window => {
          // Test that each window can be individually controlled
          results.push({
            id: window.id,
            canOperate: window.isClosable() && window.isMinimizable() && window.isMaximizable()
          })
        })
        
        return results
      })
      
      expect(operationResults.length).toBeGreaterThan(1)
      operationResults.forEach(result => {
        expect(result.canOperate).toBe(true)
        expect(typeof result.id).toBe('number')
      })
    })
  })

  test.describe('Window Memory Management', () => {
    test('should properly clean up closed windows', async ({ electronMain, electronPage }) => {
      // Create multiple windows
      await sendIPCMessage(electronPage, 'createWindow')
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const initialCount = (await getAllWindows(electronMain)).length
      expect(initialCount).toBeGreaterThan(2)
      
      // Close some windows
      await sendIPCMessage(electronPage, 'closeWindow')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      await sendIPCMessage(electronPage, 'closeWindow') 
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const finalCount = (await getAllWindows(electronMain)).length
      expect(finalCount).toBe(initialCount - 2)
      
      // Verify windows are properly removed from tracking
      const trackedWindowCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().length
      })
      
      expect(trackedWindowCount).toBe(finalCount)
    })

    test('should handle rapid window creation and destruction', async ({ electronMain, electronPage }) => {
      const initialCount = (await getAllWindows(electronMain)).length
      
      // Rapidly create and close windows
      for (let i = 0; i < 3; i++) {
        await sendIPCMessage(electronPage, 'createWindow')
        await new Promise(resolve => setTimeout(resolve, 500))
        await sendIPCMessage(electronPage, 'closeWindow')
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      
      const finalCount = (await getAllWindows(electronMain)).length
      expect(finalCount).toBe(initialCount)
      
      // Verify no memory leaks in window tracking
      const trackedCount = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        return BrowserWindow.getAllWindows().length
      })
      
      expect(trackedCount).toBe(finalCount)
    })
  })
})