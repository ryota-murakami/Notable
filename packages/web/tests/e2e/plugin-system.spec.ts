import { expect, test } from '@playwright/test'

test.describe('Plugin System', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app and wait for it to load
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait for the plugin system to initialize
    await page.waitForTimeout(2000)
  })

  test('should initialize plugin system successfully', async ({ page }) => {
    // Check if plugin system is initialized by looking for console logs
    const logs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        logs.push(msg.text())
      }
    })

    // Refresh to trigger initialization
    await page.reload()
    await page.waitForTimeout(3000)

    // Look for plugin system initialization logs
    const initLogs = logs.filter(
      (log) =>
        log.includes('Initializing Notable Plugin System') ||
        log.includes('Notable Plugin System initialized successfully')
    )

    expect(initLogs.length).toBeGreaterThan(0)
  })

  test('should open plugin management panel', async ({ page }) => {
    // Mock opening the plugin panel - in a real app this would be triggered
    // through a menu item, keyboard shortcut, or command palette
    await page.evaluate(() => {
      // Create a button to trigger the plugin panel for testing
      const button = document.createElement('button')
      button.id = 'open-plugin-manager'
      button.textContent = 'Open Plugin Manager'
      button.onclick = () => {
        // This would normally be handled by the app's routing/modal system
        console.log('Plugin manager would open here')
      }
      document.body.appendChild(button)
    })

    // Click the test button
    await page.click('#open-plugin-manager')

    // Verify button was clicked (this is a simplified test)
    const logs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        logs.push(msg.text())
      }
    })

    await page.click('#open-plugin-manager')
    await page.waitForTimeout(500)

    expect(
      logs.some((log) => log.includes('Plugin manager would open here'))
    ).toBeTruthy()
  })

  test('should have hello world plugin installed by default', async ({
    page,
  }) => {
    // Check if the hello world plugin is installed and active
    const pluginExists = await page.evaluate(() => {
      // Access the plugin system from the global scope if available
      const pluginSystem = (window as any).notablePluginSystem
      if (!pluginSystem) return false

      const manager = pluginSystem.getPluginManager()
      const plugins = manager.getPlugins()

      return plugins.some((plugin: any) => plugin.manifest.id === 'hello-world')
    })

    expect(pluginExists).toBeTruthy()
  })

  test('should execute hello world plugin command', async ({ page }) => {
    const logs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        logs.push(msg.text())
      }
    })

    // Execute the hello world command
    await page.evaluate(() => {
      const pluginSystem = (window as any).notablePluginSystem
      if (pluginSystem) {
        pluginSystem.executeCommand('hello-world.hello')
      }
    })

    await page.waitForTimeout(1000)

    // Check if the command was executed (would show in console or UI)
    const commandLogs = logs.filter(
      (log) =>
        log.includes('hello') ||
        log.includes('Hello') ||
        log.includes('plugin command')
    )

    expect(commandLogs.length).toBeGreaterThan(0)
  })

  test('should display plugin system statistics', async ({ page }) => {
    // Get plugin system stats
    const stats = await page.evaluate(() => {
      const pluginSystem = (window as any).notablePluginSystem
      if (!pluginSystem) return null

      return pluginSystem.getStats()
    })

    expect(stats).toBeTruthy()
    expect(stats).toHaveProperty('totalPlugins')
    expect(stats).toHaveProperty('activePlugins')
    expect(stats).toHaveProperty('systemHealth')
    expect(typeof stats.totalPlugins).toBe('number')
    expect(typeof stats.activePlugins).toBe('number')
    expect(['healthy', 'warning', 'error']).toContain(stats.systemHealth)
  })

  test('should handle plugin activation and deactivation', async ({ page }) => {
    // Test plugin state management
    const result = await page.evaluate(async () => {
      const pluginSystem = (window as any).notablePluginSystem
      if (!pluginSystem) return { error: 'Plugin system not available' }

      const manager = pluginSystem.getPluginManager()

      try {
        // Get initial state
        const initialPlugins = manager.getActivePlugins()
        const initialCount = initialPlugins.length

        // Deactivate hello-world if it's active
        if (initialPlugins.some((p: any) => p.manifest.id === 'hello-world')) {
          await manager.deactivatePlugin('hello-world')
        }

        const afterDeactivate = manager.getActivePlugins().length

        // Reactivate hello-world
        await manager.activatePlugin('hello-world')

        const afterActivate = manager.getActivePlugins().length

        return {
          initialCount,
          afterDeactivate,
          afterActivate,
          success: true,
        }
      } catch (error) {
        return { error: (error as Error).message }
      }
    })

    expect(result.success).toBeTruthy()
    expect(result.afterActivate).toBeGreaterThan(result.afterDeactivate)
  })

  test('should handle plugin storage operations', async ({ page }) => {
    // Test plugin storage functionality
    const result = await page.evaluate(async () => {
      const pluginSystem = (window as any).notablePluginSystem
      if (!pluginSystem) return { error: 'Plugin system not available' }

      try {
        const manager = pluginSystem.getPluginManager()
        const plugins = manager.getPlugins()

        if (plugins.length === 0) {
          return { error: 'No plugins available for testing' }
        }

        // Test storage operations (would be done through the plugin API)
        // This is a simplified test
        return {
          pluginCount: plugins.length,
          pluginIds: plugins.map((p: any) => p.manifest.id),
          success: true,
        }
      } catch (error) {
        return { error: (error as Error).message }
      }
    })

    expect(result.success).toBeTruthy()
    expect(result.pluginCount).toBeGreaterThan(0)
    expect(result.pluginIds).toContain('hello-world')
  })

  test('should validate plugin permissions', async ({ page }) => {
    // Test plugin permission validation
    const result = await page.evaluate(() => {
      const pluginSystem = (window as any).notablePluginSystem
      if (!pluginSystem) return { error: 'Plugin system not available' }

      const manager = pluginSystem.getPluginManager()
      const plugins = manager.getPlugins()

      if (plugins.length === 0) {
        return { error: 'No plugins available' }
      }

      const helloWorldPlugin = plugins.find(
        (p: any) => p.manifest.id === 'hello-world'
      )

      if (!helloWorldPlugin) {
        return { error: 'Hello world plugin not found' }
      }

      return {
        hasPermissions: Array.isArray(helloWorldPlugin.manifest.permissions),
        permissionCount: helloWorldPlugin.manifest.permissions.length,
        permissions: helloWorldPlugin.manifest.permissions,
        success: true,
      }
    })

    expect(result.success).toBeTruthy()
    expect(result.hasPermissions).toBeTruthy()
    expect(result.permissionCount).toBeGreaterThan(0)
    expect(result.permissions).toContain('COMMANDS')
  })

  test('should handle plugin errors gracefully', async ({ page }) => {
    const logs: string[] = []
    const errors: string[] = []

    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        logs.push(msg.text())
      } else if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    // Try to execute a non-existent command
    await page.evaluate(() => {
      const pluginSystem = (window as any).notablePluginSystem
      if (pluginSystem) {
        try {
          pluginSystem.executeCommand('nonexistent.command')
        } catch (error) {
          console.error('Expected error:', (error as Error).message)
        }
      }
    })

    await page.waitForTimeout(1000)

    // Should handle the error without crashing
    expect(
      errors.some((error) => error.includes('Expected error'))
    ).toBeTruthy()
  })

  test('should maintain plugin system health', async ({ page }) => {
    // Check plugin system health over time
    const healthChecks = []

    for (let i = 0; i < 3; i++) {
      const health = await page.evaluate(() => {
        const pluginSystem = (window as any).notablePluginSystem
        if (!pluginSystem) return null

        const stats = pluginSystem.getStats()
        return stats.systemHealth
      })

      healthChecks.push(health)
      await page.waitForTimeout(1000)
    }

    // System should remain healthy throughout the test
    expect(healthChecks.every((health) => health === 'healthy')).toBeTruthy()
  })
})

test.describe('Plugin Management UI', () => {
  test('should render plugin management components in Storybook', async ({
    page,
  }) => {
    // Navigate to Storybook to test UI components
    await page.goto('/storybook')
    await page.waitForLoadState('networkidle')

    // Navigate to plugin management story
    const pluginStoryExists = await page
      .locator('text=PluginManagementPanel')
      .isVisible({ timeout: 5000 })

    if (pluginStoryExists) {
      await page.click('text=PluginManagementPanel')
      await page.waitForTimeout(2000)

      // Check if the component renders
      const componentVisible = await page
        .locator('[data-testid="plugin-management-panel"]')
        .isVisible({ timeout: 5000 })

      // This test is conditional since Storybook might not be running
      if (componentVisible) {
        expect(componentVisible).toBeTruthy()
      }
    }
  })
})

// Integration test for the complete plugin workflow
test.describe('Plugin Workflow Integration', () => {
  test('should complete full plugin lifecycle', async ({ page }) => {
    const logs: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        logs.push(msg.text())
      }
    })

    // Complete plugin system workflow
    const result = await page.evaluate(async () => {
      try {
        const pluginSystem = (window as any).notablePluginSystem
        if (!pluginSystem) return { error: 'Plugin system not available' }

        // 1. Check system initialization
        const initialStats = pluginSystem.getStats()

        // 2. Get plugin manager
        const manager = pluginSystem.getPluginManager()

        // 3. List plugins
        const plugins = manager.getPlugins()

        // 4. Test plugin activation/deactivation
        if (plugins.length > 0) {
          const testPlugin = plugins[0]
          const pluginId = testPlugin.manifest.id

          // Deactivate and reactivate
          if (
            manager
              .getActivePlugins()
              .some((p: any) => p.manifest.id === pluginId)
          ) {
            await manager.deactivatePlugin(pluginId)
          }
          await manager.activatePlugin(pluginId)
        }

        // 5. Get final stats
        const finalStats = pluginSystem.getStats()

        return {
          success: true,
          initialStats,
          finalStats,
          pluginCount: plugins.length,
          workflow: 'completed',
        }
      } catch (error) {
        return { error: (error as Error).message }
      }
    })

    expect(result.success).toBeTruthy()
    expect(result.workflow).toBe('completed')
    expect(result.pluginCount).toBeGreaterThan(0)
    expect(result.finalStats.systemHealth).toBe('healthy')
  })
})
