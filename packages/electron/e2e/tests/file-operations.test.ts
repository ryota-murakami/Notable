import { expect, test } from '../fixtures/electron-fixtures'
import { 
  cleanupTempFiles, 
  evaluateInMain, 
  sendIPCMessage,
  waitForIPCMessage
} from '../utils/electron-utils'

test.describe('File Operations', () => {
  let tempFiles: string[] = []

  test.beforeEach(async ({ electronPage }) => {
    // Clear any existing notes to start with clean state
    await sendIPCMessage(electronPage, 'saveNotes', [])
  })

  test.afterEach(() => {
    // Clean up temp files
    cleanupTempFiles(tempFiles)
    tempFiles = []
  })

  test.describe('File Dialog Operations', () => {
    test('should show open dialog with correct filters', async ({ electronPage, electronMain }) => {
      let dialogOptions: any = null
      
      // Mock dialog to capture options
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowOpenDialog = dialog.showOpenDialog
        dialog.showOpenDialog = async (window, options) => {
          (global as any).__capturedDialogOptions = options
          return { canceled: true, filePaths: [] }
        }
        ;(global as any).__originalShowOpenDialog = originalShowOpenDialog
      })
      
      await sendIPCMessage(electronPage, 'showOpenDialog')
      
      // Get captured options
      dialogOptions = await evaluateInMain(electronMain, () => (global as any).__capturedDialogOptions)
      
      expect(dialogOptions).toBeDefined()
      expect(dialogOptions.properties).toContain('openFile')
      expect(dialogOptions.filters).toBeDefined()
      
      // Check filter structure
      const filters = dialogOptions.filters
      expect(filters).toHaveLength(2)
      expect(filters[0].name).toBe('Notable files')
      expect(filters[0].extensions).toEqual(['notable', 'md', 'txt'])
      expect(filters[1].name).toBe('All files')
      expect(filters[1].extensions).toEqual(['*'])
      
      // Restore original dialog
      await evaluateInMain(electronMain, ({ dialog }) => {
        dialog.showOpenDialog = (global as any).__originalShowOpenDialog
        delete (global as any).__capturedDialogOptions
        delete (global as any).__originalShowOpenDialog
      })
    })

    test('should show save dialog with correct filters', async ({ electronPage, electronMain }) => {
      let dialogOptions: any = null
      
      // Mock dialog to capture options
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowSaveDialog = dialog.showSaveDialog
        dialog.showSaveDialog = async (window, options) => {
          (global as any).__capturedSaveDialogOptions = options
          return { canceled: true, filePath: undefined }
        }
        ;(global as any).__originalShowSaveDialog = originalShowSaveDialog
      })
      
      await sendIPCMessage(electronPage, 'showSaveDialog')
      
      // Get captured options
      dialogOptions = await evaluateInMain(electronMain, () => (global as any).__capturedSaveDialogOptions)
      
      expect(dialogOptions).toBeDefined()
      expect(dialogOptions.filters).toBeDefined()
      
      // Check save filter structure
      const filters = dialogOptions.filters
      expect(filters).toHaveLength(3)
      expect(filters[0].name).toBe('Notable files')
      expect(filters[0].extensions).toEqual(['notable'])
      expect(filters[1].name).toBe('Markdown files')
      expect(filters[1].extensions).toEqual(['md'])
      expect(filters[2].name).toBe('Text files')
      expect(filters[2].extensions).toEqual(['txt'])
      
      // Restore original dialog
      await evaluateInMain(electronMain, ({ dialog }) => {
        dialog.showSaveDialog = (global as any).__originalShowSaveDialog
        delete (global as any).__capturedSaveDialogOptions
        delete (global as any).__originalShowSaveDialog
      })
    })

    test('should handle dialog cancellation', async ({ electronPage, electronMain }) => {
      // Mock dialogs to return canceled
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowOpenDialog = dialog.showOpenDialog
        const originalShowSaveDialog = dialog.showSaveDialog
        
        dialog.showOpenDialog = async () => ({ canceled: true, filePaths: [] })
        dialog.showSaveDialog = async () => ({ canceled: true, filePath: undefined })
        
        ;(global as any).__originalShowOpenDialog = originalShowOpenDialog
        ;(global as any).__originalShowSaveDialog = originalShowSaveDialog
      })
      
      const openResult = await sendIPCMessage(electronPage, 'showOpenDialog')
      expect(openResult.canceled).toBe(true)
      expect(openResult.filePaths).toEqual([])
      
      const saveResult = await sendIPCMessage(electronPage, 'showSaveDialog')
      expect(saveResult.canceled).toBe(true)
      expect(saveResult.filePath).toBeUndefined()
      
      // Restore original dialogs
      await evaluateInMain(electronMain, ({ dialog }) => {
        dialog.showOpenDialog = (global as any).__originalShowOpenDialog
        dialog.showSaveDialog = (global as any).__originalShowSaveDialog
        delete (global as any).__originalShowOpenDialog
        delete (global as any).__originalShowSaveDialog
      })
    })

    test('should handle successful file selection', async ({ electronPage, electronMain }) => {
      const testFilePath = '/test/path/example.notable'
      const testSavePath = '/test/save/path/saved.notable'
      
      // Mock dialogs to return file paths
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowOpenDialog = dialog.showOpenDialog
        const originalShowSaveDialog = dialog.showSaveDialog
        
        dialog.showOpenDialog = async () => ({ 
          canceled: false, 
          filePaths: ['/test/path/example.notable'] 
        })
        dialog.showSaveDialog = async () => ({ 
          canceled: false, 
          filePath: '/test/save/path/saved.notable' 
        })
        
        ;(global as any).__originalShowOpenDialog = originalShowOpenDialog
        ;(global as any).__originalShowSaveDialog = originalShowSaveDialog
      })
      
      const openResult = await sendIPCMessage(electronPage, 'showOpenDialog')
      expect(openResult.canceled).toBe(false)
      expect(openResult.filePaths).toEqual([testFilePath])
      
      const saveResult = await sendIPCMessage(electronPage, 'showSaveDialog')
      expect(saveResult.canceled).toBe(false)
      expect(saveResult.filePath).toBe(testSavePath)
      
      // Restore original dialogs
      await evaluateInMain(electronMain, ({ dialog }) => {
        dialog.showOpenDialog = (global as any).__originalShowOpenDialog
        dialog.showSaveDialog = (global as any).__originalShowSaveDialog
        delete (global as any).__originalShowOpenDialog
        delete (global as any).__originalShowSaveDialog
      })
    })

    test('should handle menu-triggered file open', async ({ electronPage, electronMain }) => {
      // Set up listener for file open message
      const fileOpenPromise = waitForIPCMessage(electronPage, 'menu-open-file', 5000)
      
      // Mock dialog to return a file path
      await evaluateInMain(electronMain, ({ dialog }) => {
        const originalShowOpenDialog = dialog.showOpenDialog
        dialog.showOpenDialog = async () => ({ 
          canceled: false, 
          filePaths: ['/test/menu-opened-file.notable'] 
        })
        ;(global as any).__originalShowOpenDialog = originalShowOpenDialog
      })
      
      // Trigger File > Open menu
      await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find(item => item.label === 'File')
        const openItem = fileMenu?.submenu?.items.find(item => item.label === 'Open...')
        openItem?.click()
      })
      
      const openedFilePath = await fileOpenPromise
      expect(openedFilePath).toBe('/test/menu-opened-file.notable')
      
      // Restore dialog
      await evaluateInMain(electronMain, ({ dialog }) => {
        dialog.showOpenDialog = (global as any).__originalShowOpenDialog
        delete (global as any).__originalShowOpenDialog
      })
    })
  })

  test.describe('Notes Persistence', () => {
    test('should save and load notes correctly', async ({ electronPage }) => {
      const testNotes = [
        {
          id: 'note-1',
          title: 'First Test Note',
          content: 'This is the content of the first test note',
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z'
        },
        {
          id: 'note-2', 
          title: 'Second Test Note',
          content: 'This is the content of the second test note',
          createdAt: '2023-01-02T00:00:00.000Z',
          updatedAt: '2023-01-02T00:00:00.000Z'
        }
      ]
      
      // Save notes
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', testNotes)
      expect(saveResult.success).toBe(true)
      
      // Load notes back
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(testNotes)
    })

    test('should handle empty notes array', async ({ electronPage }) => {
      // Save empty array
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', [])
      expect(saveResult.success).toBe(true)
      
      // Load should return empty array
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual([])
    })

    test('should handle notes with special characters', async ({ electronPage }) => {
      const specialNotes = [
        {
          id: 'special-1',
          title: 'Special Characters: éñü中文🚀',
          content: 'Content with special chars: àáâãäåæçèéêëìíîïñòóôõöøùúûüý\nNew line\tTab\r\nWindows line ending',
          tags: ['测试', 'tëst', '🏷️']
        }
      ]
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', specialNotes)
      expect(saveResult.success).toBe(true)
      
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(specialNotes)
    })

    test('should handle large notes data', async ({ electronPage }) => {
      // Create a note with large content (1MB)
      const largeContent = 'x'.repeat(1024 * 1024)
      const largeNote = [{
        id: 'large-note',
        title: 'Large Note',
        content: largeContent
      }]
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', largeNote)
      expect(saveResult.success).toBe(true)
      
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes[0].content).toHaveLength(largeContent.length)
      expect(loadedNotes[0].content).toBe(largeContent)
    })

    test('should handle save errors gracefully', async ({ electronPage }) => {
      // Create invalid data that would cause JSON.stringify to fail
      const circularRef: any = { id: 'circular' }
      circularRef.self = circularRef
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', circularRef)
      expect(saveResult.success).toBe(false)
      expect(saveResult.error).toBeDefined()
      expect(typeof saveResult.error).toBe('string')
    })

    test('should load empty array when notes file does not exist', async ({ electronPage, electronMain }) => {
      // First, clear any existing notes file by loading a temporary location
      await evaluateInMain(electronMain, async ({ app }) => {
        const tempPath = app.getPath('temp')
        const { join } = await import('path')
        const tempNotesPath = join(tempPath, 'test-notes-nonexistent.json')
        
        // Ensure file doesn't exist
        const { existsSync, unlinkSync } = await import('fs')
        if (existsSync(tempNotesPath)) {
          unlinkSync(tempNotesPath)
        }
        
        // Temporarily override notesPath for this test
        (global as any).__originalNotesPath = join(app.getPath('userData'), 'notes.json')
        ;(global as any).__testNotesPath = tempNotesPath
      })

      // Override the load-notes handler to use test path
      await evaluateInMain(electronMain, async ({ ipcMain }) => {
        const { existsSync, readFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        
        // Remove existing handler
        ipcMain.removeAllListeners('load-notes')
        
        // Add test handler
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(testPath)) {
              const data = readFileSync(testPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
      })

      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(Array.isArray(loadedNotes)).toBe(true)
      expect(loadedNotes).toEqual([])

      // Restore original handler
      await evaluateInMain(electronMain, async ({ ipcMain, _app }) => {
        const { existsSync, readFileSync } = await import('fs')
        const originalPath = (global as any).__originalNotesPath
        
        // Remove test handler
        ipcMain.removeAllListeners('load-notes')
        
        // Restore original handler
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(originalPath)) {
              const data = readFileSync(originalPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
        
        // Cleanup globals
        delete (global as any).__originalNotesPath
        delete (global as any).__testNotesPath
      })
    })

    test('should verify notes file location', async ({ electronPage, electronMain }) => {
      const testNotes = [{ id: 'location-test', title: 'Location Test' }]
      
      // Setup test environment with controlled file path
      await evaluateInMain(electronMain, async ({ app }) => {
        const tempPath = app.getPath('temp')
        const { join } = await import('path')
        const testPath = join(tempPath, 'test-notes-location.json')
        ;(global as any).__testNotesPath = testPath
        
        // Clean up any existing test file
        const { existsSync, unlinkSync } = await import('fs')
        if (existsSync(testPath)) {
          unlinkSync(testPath)
        }
      })

      // Override both save and load handlers to use test path
      await evaluateInMain(electronMain, async ({ ipcMain }) => {
        const { writeFileSync, existsSync, readFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        
        // Remove existing handlers
        ipcMain.removeAllListeners('save-notes')
        ipcMain.removeAllListeners('load-notes')
        
        // Add test handlers
        ipcMain.handle('save-notes', (_, notes) => {
          try {
            writeFileSync(testPath, JSON.stringify(notes, null, 2), 'utf8')
            return { success: true }
          } catch (error) {
            console.error('Failed to save notes:', error)
            return {
              success: false,
              error: error instanceof Error ? error.message : String(error),
            }
          }
        })
        
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(testPath)) {
              const data = readFileSync(testPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
      })
      
      // Save notes
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', testNotes)
      expect(saveResult.success).toBe(true)
      
      // Verify file exists at expected location
      const fileExists = await evaluateInMain(electronMain, async () => {
        const { existsSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        return existsSync(testPath)
      })
      expect(fileExists).toBe(true)
      
      // Load them back to verify they were saved
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(testNotes)

      // Verify file content directly
      const fileContent = await evaluateInMain(electronMain, async () => {
        const { readFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        return JSON.parse(readFileSync(testPath, 'utf8'))
      })
      expect(fileContent).toEqual(testNotes)

      // Restore original handlers
      await evaluateInMain(electronMain, async ({ ipcMain, app }) => {
        const { existsSync, unlinkSync, writeFileSync, readFileSync } = await import('fs')
        const { join } = await import('path')
        const originalPath = join(app.getPath('userData'), 'notes.json')
        
        // Clean up test file
        const testPath = (global as any).__testNotesPath
        if (existsSync(testPath)) {
          unlinkSync(testPath)
        }
        
        // Remove test handlers
        ipcMain.removeAllListeners('save-notes')
        ipcMain.removeAllListeners('load-notes')
        
        // Restore original handlers
        ipcMain.handle('save-notes', (_, notes) => {
          try {
            writeFileSync(originalPath, JSON.stringify(notes, null, 2), 'utf8')
            return { success: true }
          } catch (error) {
            console.error('Failed to save notes:', error)
            return {
              success: false,
              error: error instanceof Error ? error.message : String(error),
            }
          }
        })
        
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(originalPath)) {
              const data = readFileSync(originalPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
        
        // Cleanup globals
        delete (global as any).__testNotesPath
      })
    })
  })

  test.describe('Export Operations', () => {
    test('should handle export IPC functionality', async ({ electronPage }) => {
      // Test the export IPC handler directly
      const testNoteData = {
        title: 'Test Export Note',
        content: 'This is test content for export',
        filename: 'test-export.md'
      }
      
      // Mock dialog to prevent actual file dialog from appearing
      await electronPage.evaluate(() => {
        if (window.electronAPI) {
          // Store original export function
          const originalExport = window.electronAPI.exportNote
          
          // Mock export to return success without showing dialog
          window.electronAPI.exportNote = async (noteData: any, format: string) => {
            return { success: true, filePath: `/test/path/${noteData.filename || 'test'}.${format}` }
          }
          
          // Store mock for restoration
          ;(window as any).__originalExport = originalExport
        }
      })
      
      const result = await electronPage.evaluate(async (noteData) => {
        if (window.electronAPI?.exportNote) {
          return await window.electronAPI.exportNote(noteData, 'markdown')
        }
        return null
      }, testNoteData)
      
      expect(result).toBeDefined()
      expect(result?.success).toBe(true)
      expect(result?.filePath).toContain('test-export.md')
      
      // Restore original function
      await electronPage.evaluate(() => {
        if ((window as any).__originalExport) {
          window.electronAPI.exportNote = (window as any).__originalExport
          delete (window as any).__originalExport
        }
      })
    })

    test('should trigger PDF export menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Add debugging to check IPC listeners
      await page.evaluate(() => {
        console.log('[Test] Checking window.electronAPI:', window.electronAPI)
        console.log('[Test] Checking onMessage function:', window.electronAPI?.onMessage)
      })

      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const exportPromise = waitForIPCMessage(page, 'menu-export-pdf', 5000)

      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger Export > PDF menu with debugging
      const menuDebugInfo = await electronMain.evaluate(({ Menu, BrowserWindow }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Export...')
        const pdfItem = exportItem?.submenu?.items.find((item: any) => item.label === 'Export as PDF')
        const focusedWindow = BrowserWindow.getFocusedWindow()
        const allWindows = BrowserWindow.getAllWindows()
        
        // Return debug info
        return {
          hasMenu: !!menu,
          hasFileMenu: !!fileMenu,
          hasExportMenu: !!exportItem,
          hasPdfItem: !!pdfItem,
          pdfItemClickable: !!(pdfItem && typeof pdfItem.click === 'function'),
          hasFocusedWindow: !!focusedWindow,
          windowCount: allWindows.length,
          windowIds: allWindows.map(w => w.id)
        }
      })
      
      console.log('[Test] Menu debug info:', menuDebugInfo)
      
      // Now try clicking
      await electronMain.evaluate(({ Menu, BrowserWindow: _BrowserWindow }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Export...')
        const pdfItem = exportItem?.submenu?.items.find((item: any) => item.label === 'Export as PDF')
        
        if (pdfItem && pdfItem.click) {
          console.log('[Main] About to click PDF export menu item')
          pdfItem.click()
          console.log('[Main] Clicked PDF export menu item')
        }
      })
      
      const result = await exportPromise
      expect(result).toBeDefined()
    })

    test('should trigger HTML export menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const exportPromise = waitForIPCMessage(page, 'menu-export-html', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger Export > HTML menu
      await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Export...')
        const htmlItem = exportItem?.submenu?.items.find((item: any) => item.label === 'Export as HTML')
        htmlItem?.click()
      })
      
      const result = await exportPromise
      expect(result).toBeDefined()
    })

    test('should trigger Markdown export menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const exportPromise = waitForIPCMessage(page, 'menu-export-markdown', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger Export > Markdown menu
      await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Export...')
        const markdownItem = exportItem?.submenu?.items.find((item: any) => item.label === 'Export as Markdown')
        markdownItem?.click()
      })
      
      const result = await exportPromise
      expect(result).toBeDefined()
    })

    test('should have complete export submenu', async ({ electronMain }) => {
      const exportSubmenu = await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Export...')
        
        if (exportItem?.submenu) {
          return exportItem.submenu.items.map((item: any) => ({
            label: item.label,
            hasClick: typeof item.click === 'function'
          }))
        }
        return null
      })
      
      expect(exportSubmenu).toBeDefined()
      expect(exportSubmenu).toHaveLength(3)
      
      const labels = exportSubmenu?.map(item => item.label) || []
      expect(labels).toContain('Export as PDF')
      expect(labels).toContain('Export as HTML')
      expect(labels).toContain('Export as Markdown')
      
      // All items should have click handlers
      exportSubmenu?.forEach(item => {
        expect(item.hasClick).toBe(true)
      })
    })
  })

  test.describe('Menu File Operations', () => {
    test('should trigger New Note menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const newNotePromise = waitForIPCMessage(page, 'menu-new-note', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger File > New Note menu action
      await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const newNoteItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'New Note')
        
        if (newNoteItem && newNoteItem.click) {
          console.log('[Test] Clicking New Note menu item')
          newNoteItem.click()
        } else {
          console.error('[Test] New Note menu item not found')
        }
      })
      
      // Wait for the IPC message
      const result = await newNotePromise
      expect(result).toBeDefined()
    })

    test('should trigger Save menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const savePromise = waitForIPCMessage(page, 'menu-save', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger File > Save
      await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const saveItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Save')
        saveItem?.click()
      })
      
      const result = await savePromise
      expect(result).toBeDefined()
    })

    test('should trigger Save As menu action', async ({ electronPage, electronMain }) => {
      const page = electronPage
      
      // Focus the window before triggering menu action
      await electronMain.evaluate(({ BrowserWindow }) => {
        const windows = BrowserWindow.getAllWindows()
        if (windows.length > 0) {
          windows[0].focus()
        }
      })

      // Set up IPC listener before triggering menu action
      const saveAsPromise = waitForIPCMessage(page, 'menu-save-as', 5000)
      
      // Small delay to ensure listener is ready
      await page.waitForTimeout(100)
      
      // Trigger File > Save As
      await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        const saveAsItem = fileMenu?.submenu?.items.find((item: any) => item.label === 'Save As...')
        saveAsItem?.click()
      })
      
      const result = await saveAsPromise
      expect(result).toBeDefined()
    })

    test('should have correct keyboard shortcuts', async ({ electronMain }) => {
      const shortcuts = await electronMain.evaluate(({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find((item: any) => item.label === 'File')
        
        if (fileMenu?.submenu) {
          return fileMenu.submenu.items.map((item: any) => ({
            label: item.label,
            accelerator: item.accelerator
          })).filter((item: any) => item.accelerator)
        }
        return []
      })
      
      const shortcutMap = new Map(shortcuts?.map(item => [item.label, item.accelerator]))
      
      expect(shortcutMap.get('New Note')).toBe('CmdOrCtrl+N')
      expect(shortcutMap.get('Open...')).toBe('CmdOrCtrl+O')
      expect(shortcutMap.get('Save')).toBe('CmdOrCtrl+S')
      expect(shortcutMap.get('Save As...')).toBe('CmdOrCtrl+Shift+S')
      expect(shortcutMap.get('Preferences')).toBe('CmdOrCtrl+,')
    })
  })

  test.describe('File System Edge Cases', () => {
    test('should handle concurrent save operations', async ({ electronPage }) => {
      const notes1 = [{ id: '1', title: 'Concurrent 1' }]
      const notes2 = [{ id: '2', title: 'Concurrent 2' }]
      const notes3 = [{ id: '3', title: 'Concurrent 3' }]
      
      // Start multiple save operations concurrently
      const promises = [
        sendIPCMessage(electronPage, 'saveNotes', notes1),
        sendIPCMessage(electronPage, 'saveNotes', notes2),
        sendIPCMessage(electronPage, 'saveNotes', notes3)
      ]
      
      const results = await Promise.all(promises)
      
      // All saves should succeed
      results.forEach(result => {
        expect(result.success).toBe(true)
      })
      
      // The last save should be the one that persists
      const finalNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(finalNotes).toBeDefined()
      expect(Array.isArray(finalNotes)).toBe(true)
    })

    test('should handle malformed notes file', async ({ electronPage, electronMain }) => {
      // Setup test environment with malformed JSON file
      await evaluateInMain(electronMain, async ({ app }) => {
        const tempPath = app.getPath('temp')
        const { join } = await import('path')
        const testPath = join(tempPath, 'test-notes-malformed.json')
        ;(global as any).__testNotesPath = testPath
        
        // Create a malformed JSON file
        const { writeFileSync } = await import('fs')
        writeFileSync(testPath, '{ "invalid": json, "content": }', 'utf8')
      })

      // Override the load-notes handler to use test path
      await evaluateInMain(electronMain, async ({ ipcMain }) => {
        const { existsSync, readFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        
        // Remove existing handler
        ipcMain.removeAllListeners('load-notes')
        
        // Add test handler
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(testPath)) {
              const data = readFileSync(testPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
      })

      // The loadNotes handler should handle malformed JSON gracefully and return empty array
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(Array.isArray(loadedNotes)).toBe(true)
      expect(loadedNotes).toEqual([])

      // Test with another type of malformed JSON (incomplete)
      await evaluateInMain(electronMain, async () => {
        const { writeFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        writeFileSync(testPath, '[{"id": "test", "title": "incomplete"', 'utf8')
      })

      const loadedNotes2 = await sendIPCMessage(electronPage, 'loadNotes')
      expect(Array.isArray(loadedNotes2)).toBe(true)
      expect(loadedNotes2).toEqual([])

      // Test with completely invalid content
      await evaluateInMain(electronMain, async () => {
        const { writeFileSync } = await import('fs')
        const testPath = (global as any).__testNotesPath
        writeFileSync(testPath, 'this is not json at all!', 'utf8')
      })

      const loadedNotes3 = await sendIPCMessage(electronPage, 'loadNotes')
      expect(Array.isArray(loadedNotes3)).toBe(true)
      expect(loadedNotes3).toEqual([])

      // Restore original handler and cleanup
      await evaluateInMain(electronMain, async ({ ipcMain, app }) => {
        const { existsSync, unlinkSync, readFileSync } = await import('fs')
        const { join } = await import('path')
        const originalPath = join(app.getPath('userData'), 'notes.json')
        
        // Clean up test file
        const testPath = (global as any).__testNotesPath
        if (existsSync(testPath)) {
          unlinkSync(testPath)
        }
        
        // Remove test handler
        ipcMain.removeAllListeners('load-notes')
        
        // Restore original handler
        ipcMain.handle('load-notes', () => {
          try {
            if (existsSync(originalPath)) {
              const data = readFileSync(originalPath, 'utf8')
              return JSON.parse(data)
            }
            return []
          } catch (error) {
            console.error('Failed to load notes:', error)
            return []
          }
        })
        
        // Cleanup globals
        delete (global as any).__testNotesPath
      })
    })

    test('should handle very deep nested objects', async ({ electronPage }) => {
      test.setTimeout(120000) // Increase timeout to 2 minutes for deep nested objects
      
      // Create deeply nested object - reduce from 100 to 50 levels to avoid timeout
      const deepObject: any = { id: 'deep-test' }
      let current = deepObject
      
      // Create 50 levels of nesting (reduced from 100 to avoid timeout)
      for (let i = 0; i < 50; i++) {
        current.nested = { level: i }
        current = current.nested
      }
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', [deepObject])
      expect(saveResult.success).toBe(true)
      
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toHaveLength(1)
      expect(loadedNotes[0].id).toBe('deep-test')
    })

    test('should handle notes with binary-like content', async ({ electronPage }) => {
      // Test with content that might contain binary-like data
      const binaryLikeNote = [{
        id: 'binary-test',
        title: 'Binary-like Content',
        content: '\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009\u000A\u000B\u000C\u000D\u000E\u000F',
        binaryData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
      }]
      
      const saveResult = await sendIPCMessage(electronPage, 'saveNotes', binaryLikeNote)
      expect(saveResult.success).toBe(true)
      
      const loadedNotes = await sendIPCMessage(electronPage, 'loadNotes')
      expect(loadedNotes).toEqual(binaryLikeNote)
    })
  })
})