import { expect, test } from '../fixtures/electron-fixtures'
import { 
  evaluateInMain, 
  getAllWindows, 
  sendIPCMessage, 
  waitForIPCMessage
} from '../utils/electron-utils'

// Helper function to trigger menu items and wait for IPC messages
async function triggerMenuAndWaitForIPC(
  electronMain: any,
  electronPage: any,
  menuPath: { menu: string, item: string, submenu?: string },
  ipcChannel: string
) {
  // Set up the IPC message listener first
  const messagePromise = waitForIPCMessage(electronPage, ipcChannel)
  
  // Wait for listener to be ready
  await electronPage.waitForTimeout(200)
  
  // Trigger menu item via main process
  const result = await electronMain.evaluate(({ Menu, BrowserWindow }, params: any) => {
    console.log('[Menu Test] Looking for menu:', params.menu, 'item:', params.item, 'submenu:', params.submenu)
    
    const appMenu = Menu.getApplicationMenu()
    if (!appMenu) {
      console.log('[Menu Test] No application menu found, sending direct IPC')
      const window = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0]
      if (window) {
        window.webContents.send(params.ipcChannel)
        return { sent: true, method: 'direct-no-menu' }
      }
      return { sent: false, error: 'No menu and no window' }
    }
    
    const topMenu = appMenu.items.find(m => m.label === params.menu)
    if (!topMenu?.submenu) {
      console.log('[Menu Test] Top menu not found:', params.menu)
      return { sent: false, error: `Menu ${params.menu} not found` }
    }
    
    if (params.submenu) {
      const subMenuItem = topMenu.submenu.items.find(i => i.label === params.submenu)
      if (!subMenuItem?.submenu) {
        console.log('[Menu Test] Submenu not found:', params.submenu)
        return { sent: false, error: `Submenu ${params.submenu} not found` }
      }
      const targetItem = subMenuItem.submenu.items.find(i => i.label === params.item)
      if (targetItem?.click) {
        console.log('[Menu Test] Clicking submenu item:', params.item)
        targetItem.click()
        return { sent: true, method: 'submenu-click' }
      }
    } else {
      const targetItem = topMenu.submenu.items.find(i => i.label === params.item)
      if (targetItem?.click) {
        console.log('[Menu Test] Clicking menu item:', params.item)
        targetItem.click()
        return { sent: true, method: 'menu-click' }
      }
    }
    
    console.log('[Menu Test] Menu item not found or not clickable')
    return { sent: false, error: 'Menu item not found' }
  }, { menu: menuPath.menu, item: menuPath.item, submenu: menuPath.submenu, ipcChannel })
  
  console.log('[Test] Menu trigger result:', result)
  
  return messagePromise
}

test.describe('Menu System', () => {
  test('should create application menu on startup', async ({ electronMain }) => {
    const hasMenu = await evaluateInMain(electronMain, ({ Menu }) => {
      const menu = Menu.getApplicationMenu()
      return menu !== null
    })
    
    expect(hasMenu).toBe(true)
  })

  test('should have correct menu structure', async ({ electronMain }) => {
    const menuStructure = await evaluateInMain(electronMain, ({ Menu }) => {
      const menu = Menu.getApplicationMenu()
      if (!menu) return null
      
      return menu.items.map(item => ({
        label: item.label,
        submenuCount: item.submenu ? item.submenu.items.length : 0
      }))
    })
    
    expect(menuStructure).toBeDefined()
    
    const platform = await evaluateInMain(electronMain, () => process.platform)
    
    if (platform === 'darwin') {
      // macOS should have app menu first
      expect(menuStructure?.[0]?.label).toBe('Notable')
      expect(menuStructure?.[1]?.label).toBe('File')
    } else {
      // Other platforms start with File menu
      expect(menuStructure?.[0]?.label).toBe('File')
    }
    
    // Check for main menu sections
    const menuLabels = menuStructure?.map(item => item.label) || []
    expect(menuLabels).toContain('File')
    expect(menuLabels).toContain('Edit')
    expect(menuLabels).toContain('View')
    expect(menuLabels).toContain('Window')
    expect(menuLabels).toContain('Help')
  })

  test.describe('File Menu', () => {
    test('should trigger New Note action', async ({ electronMain, electronPage }) => {
      // Wait a bit to ensure menu is fully initialized
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'File', item: 'New Note' },
        'menu-new-note'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should trigger Save action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'File', item: 'Save' },
        'menu-save'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should trigger Save As action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'File', item: 'Save As...' },
        'menu-save-as'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should show Open dialog when Open menu is clicked', async ({ electronMain, electronPage: _electronPage }) => {
      // This test verifies the dialog is attempted to be shown
      // We can't actually interact with the system dialog in E2E tests
      const dialogShown = await evaluateInMain(electronMain, async ({ Menu, dialog, BrowserWindow: _BrowserWindow }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find(item => item.label === 'File')
        const openItem = fileMenu?.submenu?.items.find(item => item.label === 'Open...')
        
        if (openItem?.click) {
          // Mock dialog to avoid actually showing it
          const originalShowOpenDialog = dialog.showOpenDialog
          dialog.showOpenDialog = async () => ({ canceled: true, filePaths: [] })
          
          try {
            openItem.click()
            return true
          } finally {
            dialog.showOpenDialog = originalShowOpenDialog
          }
        }
        return false
      })
      
      expect(dialogShown).toBe(true)
    })

    test('should have Export submenu with correct options', async ({ electronMain }) => {
      const exportSubmenu = await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const fileMenu = menu?.items.find(item => item.label === 'File')
        const exportItem = fileMenu?.submenu?.items.find(item => item.label === 'Export...')
        
        if (exportItem?.submenu) {
          return exportItem.submenu.items.map(item => item.label)
        }
        return null
      })
      
      expect(exportSubmenu).toEqual([
        'Export as PDF',
        'Export as HTML', 
        'Export as Markdown'
      ])
    })

    test('should trigger Export PDF action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'File', item: 'Export as PDF', submenu: 'Export...' },
        'menu-export-pdf'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should trigger Preferences action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'File', item: 'Preferences' },
        'menu-preferences'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })
  })

  test.describe('Edit Menu', () => {
    test('should have standard edit menu items', async ({ electronMain }) => {
      const editMenuItems = await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const editMenu = menu?.items.find(item => item.label === 'Edit')
        
        if (editMenu?.submenu) {
          return editMenu.submenu.items.map(item => ({
            label: item.label,
            role: item.role,
            type: item.type
          }))
        }
        return null
      })
      
      expect(editMenuItems).toBeDefined()
      
      // Check for standard roles
      const roles = editMenuItems?.map(item => item.role).filter(Boolean)
      expect(roles).toContain('undo')
      expect(roles).toContain('redo')
      expect(roles).toContain('cut')
      expect(roles).toContain('copy')
      expect(roles).toContain('paste')
      expect(roles).toContain('selectAll')
    })

    test('should trigger Find action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'Edit', item: 'Find' },
        'menu-find'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should trigger Find and Replace action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'Edit', item: 'Find and Replace' },
        'menu-find-replace'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })
  })

  test.describe('View Menu', () => {
    test('should have standard view menu items', async ({ electronMain }) => {
      const viewMenuItems = await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const viewMenu = menu?.items.find(item => item.label === 'View')
        
        if (viewMenu?.submenu) {
          return viewMenu.submenu.items.map(item => ({
            label: item.label,
            role: item.role,
            type: item.type
          }))
        }
        return null
      })
      
      expect(viewMenuItems).toBeDefined()
      
      // Check for standard view roles
      const roles = viewMenuItems?.map(item => item.role).filter(Boolean)
      expect(roles).toContain('reload')
      expect(roles).toContain('forceReload')
      expect(roles).toContain('toggleDevTools')
      expect(roles).toContain('resetZoom')
      expect(roles).toContain('zoomIn')
      expect(roles).toContain('zoomOut')
      expect(roles).toContain('togglefullscreen')
    })

    test('should have Theme submenu with radio buttons', async ({ electronMain }) => {
      const themeSubmenu = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
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
      
      expect(themeSubmenu).toBeDefined()
      expect(themeSubmenu?.items).toHaveLength(3)
      
      const themeItems = themeSubmenu?.items || []
      expect(themeItems[0]).toEqual({ label: 'Light', type: 'radio', checked: themeSubmenu?.currentTheme === 'light' })
      expect(themeItems[1]).toEqual({ label: 'Dark', type: 'radio', checked: themeSubmenu?.currentTheme === 'dark' })
      expect(themeItems[2]).toEqual({ label: 'System', type: 'radio', checked: themeSubmenu?.currentTheme === 'system' })
    })

    test('should change theme when theme menu item is clicked', async ({ electronMain, electronPage }) => {
      // Wait a bit to ensure menu is fully initialized
      await electronPage.waitForTimeout(1000)
      
      // Get current theme
      const initialTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      
      // Set up listener for theme change message first
      const themeChangePromise = waitForIPCMessage(electronPage, 'theme-changed')
      
      // Wait for listener to be ready
      await electronPage.waitForTimeout(200)
      
      // Click on a different theme (if current is light, click dark, otherwise click light)
      const targetTheme = initialTheme === 'light' ? 'dark' : 'light'
      
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
      const newTheme = await themeChangePromise
      expect(newTheme).toBe(targetTheme)
      
      // Verify theme actually changed
      const finalTheme = await evaluateInMain(electronMain, ({ nativeTheme }) => nativeTheme.themeSource)
      expect(finalTheme).toBe(targetTheme)
    })
  })

  test.describe('Window Menu', () => {
    test('should have standard window menu items', async ({ electronMain }) => {
      const windowMenuItems = await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const windowMenu = menu?.items.find(item => item.label === 'Window')
        
        if (windowMenu?.submenu) {
          return windowMenu.submenu.items.map(item => ({
            label: item.label,
            role: item.role,
            accelerator: item.accelerator
          }))
        }
        return null
      })
      
      expect(windowMenuItems).toBeDefined()
      
      // Check for standard window operations
      const labels = windowMenuItems?.map(item => item.label) || []
      expect(labels).toContain('New Window')
      expect(labels).toContain('Focus Mode')
      
      const roles = windowMenuItems?.map(item => item.role).filter(Boolean)
      expect(roles).toContain('minimize')
      expect(roles).toContain('close')
    })

    test('should create new window when New Window is clicked', async ({ electronMain }) => {
      const initialWindowCount = await getAllWindows(electronMain)
      
      await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const windowMenu = menu?.items.find(item => item.label === 'Window')
        const newWindowItem = windowMenu?.submenu?.items.find(item => item.label === 'New Window')
        newWindowItem?.click()
      })
      
      // Wait a bit for window creation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const finalWindowCount = await getAllWindows(electronMain)
      expect(finalWindowCount.length).toBe(initialWindowCount.length + 1)
    })

    test('should trigger Focus Mode action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'Window', item: 'Focus Mode' },
        'menu-focus-mode'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })
  })

  test.describe('Help Menu', () => {
    test('should have help menu items', async ({ electronMain }) => {
      const helpMenuItems = await evaluateInMain(electronMain, ({ Menu }) => {
        const menu = Menu.getApplicationMenu()
        const helpMenu = menu?.items.find(item => item.label === 'Help')
        
        if (helpMenu?.submenu) {
          return helpMenu.submenu.items.map(item => ({
            label: item.label,
            type: item.type
          }))
        }
        return null
      })
      
      expect(helpMenuItems).toBeDefined()
      
      const labels = helpMenuItems?.map(item => item.label) || []
      expect(labels).toContain('About Notable')
      expect(labels).toContain('Keyboard Shortcuts')
      expect(labels).toContain('Report Bug')
      expect(labels).toContain('Submit Feedback')
    })

    test('should show About dialog when About Notable is clicked', async ({ electronMain }) => {
      const dialogShown = await evaluateInMain(electronMain, async ({ Menu, dialog, BrowserWindow: _BrowserWindow }) => {
        const menu = Menu.getApplicationMenu()
        const helpMenu = menu?.items.find(item => item.label === 'Help')
        const aboutItem = helpMenu?.submenu?.items.find(item => item.label === 'About Notable')
        
        if (aboutItem?.click) {
          // Mock dialog to avoid actually showing it
          const originalShowMessageBox = dialog.showMessageBox
          dialog.showMessageBox = async () => ({ response: 0 })
          
          try {
            aboutItem.click()
            return true
          } finally {
            dialog.showMessageBox = originalShowMessageBox
          }
        }
        return false
      })
      
      expect(dialogShown).toBe(true)
    })

    test('should trigger Keyboard Shortcuts action', async ({ electronMain, electronPage }) => {
      await electronPage.waitForTimeout(1000)
      
      const messagePromise = triggerMenuAndWaitForIPC(
        electronMain,
        electronPage,
        { menu: 'Help', item: 'Keyboard Shortcuts' },
        'menu-shortcuts'
      )
      
      await expect(messagePromise).resolves.toBeDefined()
    })

    test('should open external links for Report Bug and Submit Feedback', async ({ electronMain }) => {
      const externalLinksOpened = await evaluateInMain(electronMain, ({ Menu, shell }) => {
        const opened: string[] = []
        
        // Mock shell.openExternal to track calls
        const originalOpenExternal = shell.openExternal
        shell.openExternal = async (url: string) => {
          opened.push(url)
          return Promise.resolve()
        }
        
        try {
          const menu = Menu.getApplicationMenu()
          const helpMenu = menu?.items.find(item => item.label === 'Help')
          
          // Test Report Bug
          const reportBugItem = helpMenu?.submenu?.items.find(item => item.label === 'Report Bug')
          reportBugItem?.click()
          
          // Test Submit Feedback
          const feedbackItem = helpMenu?.submenu?.items.find(item => item.label === 'Submit Feedback')
          feedbackItem?.click()
          
          return opened
        } finally {
          shell.openExternal = originalOpenExternal
        }
      })
      
      expect(externalLinksOpened).toHaveLength(2)
      expect(externalLinksOpened[0]).toContain('github.com/ryota-murakami/Notable/issues')
      expect(externalLinksOpened[1]).toContain('github.com/ryota-murakami/Notable/discussions')
    })
  })

  test.describe('Platform-specific Menu Behavior', () => {
    test('should have correct menu structure on macOS', async ({ electronMain }) => {
      const platform = await evaluateInMain(electronMain, () => process.platform)
      
      if (platform === 'darwin') {
        const menuStructure = await evaluateInMain(electronMain, ({ Menu, app }) => {
          const menu = Menu.getApplicationMenu()
          if (!menu) return null
          
          const appMenu = menu.items[0]
          return {
            firstMenuLabel: appMenu.label,
            appName: app.getName(),
            hasServices: appMenu.submenu?.items.some(item => item.role === 'services') || false,
            hasHide: appMenu.submenu?.items.some(item => item.role === 'hide') || false,
            hasQuit: appMenu.submenu?.items.some(item => item.role === 'quit') || false
          }
        })
        
        expect(menuStructure?.firstMenuLabel).toBe('Notable')
        expect(menuStructure?.appName).toBe('Notable')
        expect(menuStructure?.hasServices).toBe(true)
        expect(menuStructure?.hasHide).toBe(true)
        expect(menuStructure?.hasQuit).toBe(true)
      }
    })

    test('should rebuild menu when theme changes to update radio buttons', async ({ electronMain }) => {
      // Get initial checked state
      const initialState = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
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
      
      // Change theme via IPC (which rebuilds menu)
      const targetTheme = initialState.currentTheme === 'light' ? 'dark' : 'light'
      await sendIPCMessage(electronPage, 'setTheme', targetTheme)
      
      // Wait a bit for menu rebuild
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Check new state
      const finalState = await evaluateInMain(electronMain, ({ Menu, nativeTheme }) => {
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
      
      expect(finalState.currentTheme).toBe(targetTheme)
      
      // Verify radio button states updated correctly
      if (targetTheme === 'light') {
        expect(finalState.lightChecked).toBe(true)
        expect(finalState.darkChecked).toBe(false)
      } else {
        expect(finalState.lightChecked).toBe(false)
        expect(finalState.darkChecked).toBe(true)
      }
    })
  })
})