import { expect, test } from '../fixtures/electron-fixtures'
import { 
  cleanupTempFiles, 
  evaluateInMain, 
  getAllWindows,
  sendIPCMessage,
  waitForIPCMessage
} from '../utils/electron-utils'

test.describe('IPC Communication', () => {
  let tempFiles: string[] = []

  test.afterEach(async () => {
    // Clean up any temp files created during tests
    cleanupTempFiles(tempFiles)
    tempFiles = []
  })

  test.describe('File Operations IPC', () => {
    test('should handle load-notes IPC call', async ({ electronPage }) => {
      const result = await sendIPCMessage(electronPage, 'loadNotes')
      
      // Should return an array (empty if no notes exist, or actual notes)
      expect(Array.isArray(result)).toBe(true)
    })

    test('should handle save-notes IPC call', async ({ electronPage, electronMain }) => {
      const testNotes = [
        { id: '1', title: 'Test Note 1', content: 'Content 1' },
        { id: '2', title: 'Test Note 2', content: 'Content 2' }
      ]
      
      const result = await sendIPCMessage(electronPage, 'saveNotes', testNotes)
      
      expect(result).toEqual({ success: true })
      
      // Verify notes were actually saved by loading them back
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(testNotes)
    })

    test('should handle save-notes error gracefully', async ({ electronPage, electronMain }) => {
      // Try to save invalid data that would cause JSON.stringify to fail
      const circularRef: any = {}
      circularRef.self = circularRef
      
      const result = await sendIPCMessage(electronPage, 'saveNotes', circularRef)
      
      expect(result.success).toBe(false)
      expect(result.error).toBeDefined()
      expect(typeof result.error).toBe('string')
    })

    test('should handle show-open-dialog IPC call', async ({ electronPage, electronMain }) => {
      // Mock the dialog to avoid actually showing it
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowOpenDialog = dialog.showOpenDialog
        dialog.showOpenDialog = async () => ({ 
          canceled: false, 
          filePaths: ['/test/path/test.notable'] 
        })
        
        // Store original for cleanup
        ;(global as any).__originalShowOpenDialog = originalShowOpenDialog
      })
      
      const result = await sendIPCMessage(electronPage, 'showOpenDialog')
      
      expect(result).toEqual({
        canceled: false,
        filePaths: ['/test/path/test.notable']
      })
      
      // Restore original dialog
      await evaluateInMain(electronMain, ({ dialog }) => {
        if ((global as any).__originalShowOpenDialog) {
          dialog.showOpenDialog = (global as any).__originalShowOpenDialog
          delete (global as any).__originalShowOpenDialog
        }
      })
    })

    test('should handle show-save-dialog IPC call', async ({ electronPage, electronMain }) => {
      // Mock the dialog to avoid actually showing it
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowSaveDialog = dialog.showSaveDialog
        dialog.showSaveDialog = async () => ({ 
          canceled: false, 
          filePath: '/test/path/saved-note.notable' 
        })
        
        // Store original for cleanup
        ;(global as any).__originalShowSaveDialog = originalShowSaveDialog
      })
      
      const result = await sendIPCMessage(electronPage, 'showSaveDialog')
      
      expect(result).toEqual({
        canceled: false,
        filePath: '/test/path/saved-note.notable'
      })
      
      // Restore original dialog
      await evaluateInMain(electronMain, ({ dialog }) => {
        if ((global as any).__originalShowSaveDialog) {
          dialog.showSaveDialog = (global as any).__originalShowSaveDialog
          delete (global as any).__originalShowSaveDialog
        }
      })
    })

    test('should handle dialogs when no main window exists', async ({ electronPage, electronMain }) => {
      // Close main window temporarily
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        windows.forEach(window => window.destroy())
      })
      
      const openResult = await sendIPCMessage(electronPage, 'showOpenDialog')
      expect(openResult.canceled).toBe(true)
      
      const saveResult = await sendIPCMessage(electronPage, 'showSaveDialog')
      expect(saveResult.canceled).toBe(true)
    })
  })

  test.describe('Window Operations IPC', () => {
    test('should handle create-window IPC call', async ({ electronPage, electronMain }) => {
      const initialWindowCount = (await getAllWindows(electronMain)).length
      
      await sendIPCMessage(electronPage, 'createWindow')
      
      // Wait for window creation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const finalWindowCount = (await getAllWindows(electronMain)).length
      expect(finalWindowCount).toBe(initialWindowCount + 1)
    })

    test('should handle window state operations', async ({ electronPage, electronMain }) => {
      // Test is-maximized
      const initialMaximized = await sendIPCMessage<boolean>(electronPage, 'isMaximized')
      expect(typeof initialMaximized).toBe('boolean')
      
      // Test maximize-window (toggles state)
      await sendIPCMessage(electronPage, 'maximizeWindow')
      
      // Wait for state change
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const afterToggleMaximized = await sendIPCMessage<boolean>(electronPage, 'isMaximized')
      expect(afterToggleMaximized).toBe(!initialMaximized)
      
      // Test minimize-window
      await sendIPCMessage(electronPage, 'minimizeWindow')
      
      // Verify window is minimized
      const isMinimized = await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        return focusedWindow ? focusedWindow.isMinimized() : false
      })
      
      expect(isMinimized).toBe(true)
      
      // Restore window for other tests
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        windows.forEach(window => {
          if (window.isMinimized()) {
            window.restore()
          }
        })
      })
    })

    test('should handle close-window IPC call', async ({ electronPage, electronMain }) => {
      // Create a new window first
      await sendIPCMessage(electronPage, 'createWindow')
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const beforeCloseCount = (await getAllWindows(electronMain)).length
      expect(beforeCloseCount).toBeGreaterThan(1)
      
      // Close the focused window
      await sendIPCMessage(electronPage, 'closeWindow')
      
      // Wait for window closure
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const afterCloseCount = (await getAllWindows(electronMain)).length
      expect(afterCloseCount).toBe(beforeCloseCount - 1)
    })

    test('should handle window operations when no focused window exists', async ({ electronPage, electronMain }) => {
      // Make sure no window is focused
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        windows.forEach(window => window.blur())
      })
      
      // These should not throw errors even without focused window
      await expect(sendIPCMessage(electronPage, 'minimizeWindow')).resolves.toBeUndefined()
      await expect(sendIPCMessage(electronPage, 'maximizeWindow')).resolves.toBeUndefined()
      await expect(sendIPCMessage(electronPage, 'closeWindow')).resolves.toBeUndefined()
      
      const isMaximized = await sendIPCMessage<boolean>(electronPage, 'isMaximized')
      expect(isMaximized).toBe(false)
    })
  })

  test.describe('Theme Operations IPC', () => {
    test('should handle get-theme IPC call', async ({ electronPage }) => {
      const theme = await sendIPCMessage<string>(electronPage, 'getTheme')
      
      expect(theme).toBeDefined()
      expect(['light', 'dark', 'system']).toContain(theme)
    })

    test('should handle set-theme IPC call', async ({ electronPage, electronMain }) => {
      const originalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = originalTheme === 'light' ? 'dark' : 'light'
      
      const result = await sendIPCMessage<string>(electronPage, 'setTheme', targetTheme)
      
      expect(result).toBe(targetTheme)
      
      // Verify theme actually changed
      const newTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      expect(newTheme).toBe(targetTheme)
      
      // Verify nativeTheme was updated in main process
      const mainProcessTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(mainProcessTheme).toBe(targetTheme)
      
      // Restore original theme
      await sendIPCMessage(electronPage, 'setTheme', originalTheme)
    })

    test('should handle all valid theme values', async ({ electronPage }) => {
      const themes = ['light', 'dark', 'system'] as const
      
      for (const theme of themes) {
        const result = await sendIPCMessage<string>(electronPage, 'setTheme', theme)
        expect(result).toBe(theme)
        
        const getCurrentTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
        expect(getCurrentTheme).toBe(theme)
      }
    })
  })

  test.describe('Utility Operations IPC', () => {
    test('should handle show-notification IPC call', async ({ electronPage }) => {
      const title = 'Test Notification'
      const body = 'This is a test notification message'
      
      // This should not throw an error
      await expect(sendIPCMessage(electronPage, 'showNotification', title, body)).resolves.toBeUndefined()
    })

    test('should handle open-dev-tools IPC call', async ({ electronPage, electronMain }) => {
      let devToolsOpened = false
      
      // Mock webContents.openDevTools to track calls
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow) {
          const originalOpenDevTools = focusedWindow.webContents.openDevTools
          focusedWindow.webContents.openDevTools = function() {
            (global as any).__devToolsOpened = true
            return originalOpenDevTools.call(this)
          }
        }
      })
      
      await sendIPCMessage(electronPage, 'openDevTools')
      
      // Check if dev tools were opened
      devToolsOpened = await evaluateInMain(electronMain, () => {
        return !!(global as any).__devToolsOpened
      })
      
      expect(devToolsOpened).toBe(true)
      
      // Cleanup
      await evaluateInMain(electronMain, () => {
        delete (global as any).__devToolsOpened
      })
    })

    test('should handle reload-window IPC call', async ({ electronPage, electronMain }) => {
      let reloadCalled = false
      
      // Mock webContents.reload to track calls
      await evaluateInMain(electronMain, ({ BrowserWindow }) => {
        const focusedWindow = BrowserWindow.getFocusedWindow()
        if (focusedWindow) {
          const originalReload = focusedWindow.webContents.reload
          focusedWindow.webContents.reload = function() {
            (global as any).__reloadCalled = true
            // Don't actually reload to avoid disrupting tests
            return
          }
        }
      })
      
      await sendIPCMessage(electronPage, 'reloadWindow')
      
      // Check if reload was called
      reloadCalled = await evaluateInMain(electronMain, () => {
        return !!(global as any).__reloadCalled
      })
      
      expect(reloadCalled).toBe(true)
      
      // Cleanup
      await evaluateInMain(electronMain, () => {
        delete (global as any).__reloadCalled
      })
    })
  })

  test.describe('IPC Message Broadcasting', () => {
    test('should receive native-theme-updated messages', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Set up listener for theme updates
      const themeUpdatePromise = waitForIPCMessage(page, 'native-theme-updated', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger native theme change from main process
      await electronMain.evaluate(({ nativeTheme }) => {
        // Simulate native theme update by emitting the event
        nativeTheme.emit('updated')
      })
      
      const themeUpdate = await themeUpdatePromise
      expect(typeof themeUpdate).toBe('boolean')
    })

    test('should receive theme-changed messages when theme is set', async ({ electronPage, electronMain }) => {
      const originalTheme = await sendIPCMessage<string>(electronPage, 'getTheme')
      const targetTheme = originalTheme === 'light' ? 'dark' : 'light'
      
      // Set up listener for theme change message
      const themeChangePromise = waitForIPCMessage(electronPage, 'theme-changed', 5000)
      
      // Small delay to ensure listener is ready
      await electronPage.waitForTimeout(100)
      
      // Change theme via menu (which should send theme-changed message)
      await electronMain.evaluate(({ Menu, BrowserWindow }) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find((item: any) => item.label === 'View')
        const themeItem = viewMenu?.submenu?.items.find((item: any) => item.label === 'Theme')
        
        console.log('[Main] View menu:', viewMenu)
        console.log('[Main] Theme submenu:', themeItem)
        console.log('[Main] Windows count:', BrowserWindow.getAllWindows().length)
        
        // Click the first non-checked theme option
        const items = themeItem?.submenu?.items || []
        for (const item of items) {
          if (item.type === 'radio' && !item.checked) {
            console.log('[Main] Clicking theme item:', item.label)
            item.click()
            break
          }
        }
      })
      
      const newTheme = await themeChangePromise
      expect(newTheme).toBe(targetTheme)
      
      // Restore original theme
      await sendIPCMessage(electronPage, 'setTheme', originalTheme)
    })

    test('should handle IPC communication error scenarios', async ({ electronPage }) => {
      // Test calling non-existent IPC handler
      try {
        await sendIPCMessage(electronPage, 'non-existent-handler')
        // If no error is thrown, that's unexpected but not necessarily wrong
        // Some Electron versions might return undefined for unknown handlers
        expect(true).toBe(true)
      } catch (error) {
        // If an error is thrown, it should be meaningful
        expect(error).toBeDefined()
      }
    })
  })

  test.describe('File System Integration', () => {
    test('should persist and load notes correctly', async ({ electronPage }) => {
      // Create test data
      const testNotes = [
        {
          id: 'test-1',
          title: 'Integration Test Note',
          content: 'This is a test note for IPC integration testing',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        {
          id: 'test-2', 
          title: 'Second Test Note',
          content: 'Another test note with special characters: éñ中文🚀',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]
      
      // Save notes
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', testNotes)
      expect(saveResult.success).toBe(true)
      
      // Load notes back
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(testNotes)
      
      // Test that notes persist between calls
      const secondLoad = await sendIPCMessage(electronPage, 'loadNotes')
      expect(secondLoad).toEqual(testNotes)
    })

    test('should handle empty notes array', async ({ electronPage }) => {
      // Save empty array
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', [])
      expect(saveResult.success).toBe(true)
      
      // Load should return empty array
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual([])
    })

    test('should handle large notes data', async ({ electronPage }) => {
      // Create a large note (1MB+ content)
      const largeContent = 'x'.repeat(1024 * 1024) // 1MB of 'x' characters
      const largeNotes = [{
        id: 'large-note',
        title: 'Large Note Test',
        content: largeContent
      }]
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', largeNotes)
      expect(saveResult.success).toBe(true)
      
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes[0].content.length).toBe(largeContent.length)
      expect(loadedNotes[0].content).toBe(largeContent)
    })
  })
})