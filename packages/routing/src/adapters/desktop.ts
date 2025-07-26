import type {
  PlatformAdapter,
  RouteChangeCallback,
  RouteDefinition,
} from '../types'
import { ROUTES } from '../routes'

// Type definitions for Electron API
interface ElectronAPI {
  onMenuNavigation?: (
    callback: (data: {
      routeId: string
      params?: Record<string, string>
    }) => void,
  ) => void
  onRouteChange?: (callback: (data: { path: string }) => void) => void
  onDeepLink?: (callback: (url: string) => void) => void
  setAlwaysOnTop?: (alwaysOnTop: boolean) => void
  createWindow?: (config: unknown) => Promise<void>
  sendRouteChange?: (data: {
    route: string
    params: Record<string, string>
    query: Record<string, string>
    path: string
  }) => void
}

// Type definition for web adapter
interface WebAdapter {
  navigate?: (
    route: RouteDefinition,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => void
  getCurrentRoute?: () => {
    route: RouteDefinition | null
    params: Record<string, string>
    query: Record<string, string>
  }
  pathToRoute?: (path: string) => {
    route: RouteDefinition | null
    params: Record<string, string>
    query: Record<string, string>
  } | null
  onRouteChange?: (callback: RouteChangeCallback) => () => void
  router?: {
    push: (path: string) => void
  }
}

// Extend window interface for Electron API
declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}

/**
 * Desktop Platform Adapter for Electron
 * Handles routing integration with Electron IPC and window management
 */
export class DesktopAdapter implements PlatformAdapter {
  platform = 'desktop' as const
  private routeChangeCallbacks: Set<RouteChangeCallback> = new Set()
  private electronAPI: ElectronAPI | null = null
  private pathname: string = '/'
  private searchParams: URLSearchParams = new URLSearchParams()
  private webAdapter: WebAdapter | null = null

  constructor() {
    // Initialize with current browser state (Electron uses web content)
    if (typeof window !== 'undefined') {
      this.pathname = window.location.pathname
      this.searchParams = new URLSearchParams(window.location.search)
      this.setupElectronListeners()
      this.setupHashRouting()
    }
  }

  /**
   * Set the Electron API instance
   * This should be available via window.electronAPI in the renderer process
   */
  setElectronAPI(electronAPI: ElectronAPI) {
    this.electronAPI = electronAPI
  }

  /**
   * Set the web adapter for delegation
   * Desktop routing often delegates to web routing for the main content
   */
  setWebAdapter(webAdapter: WebAdapter) {
    this.webAdapter = webAdapter

    // Listen to web adapter route changes
    if (webAdapter?.onRouteChange) {
      webAdapter.onRouteChange(
        (
          route: RouteDefinition,
          params: Record<string, string>,
          query: Record<string, string>,
        ) => {
          this.notifyRouteChange(route, params, query)
        },
      )
    }
  }

  /**
   * Set current location (usually delegated from web adapter)
   */
  setCurrentLocation(pathname: string, searchParams?: URLSearchParams) {
    const oldPathname = this.pathname
    const oldSearchParams = this.searchParams.toString()

    this.pathname = pathname
    this.searchParams = searchParams || new URLSearchParams()

    // Trigger callbacks if location changed
    if (
      oldPathname !== pathname ||
      oldSearchParams !== this.searchParams.toString()
    ) {
      this.notifyRouteChange()
    }
  }

  navigate(route: RouteDefinition, params = {}, query = {}) {
    // Check if route requires special desktop handling
    const desktopConfig = route.meta?.platforms?.desktop

    if (desktopConfig?.window?.newWindow) {
      // Handle new window creation
      this.createNewWindow(route, params, query)
    } else {
      // Use web navigation for main window content
      if (this.webAdapter?.navigate) {
        this.webAdapter.navigate(route, params, query)
      } else {
        // Fallback to direct navigation
        const path = this.routeToPath(route, params, query)
        this.navigateToPath(path)
      }
    }

    // Handle desktop-specific features
    this.handleDesktopFeatures(route, params, query)
  }

  getCurrentRoute() {
    // Delegate to web adapter if available
    if (this.webAdapter?.getCurrentRoute) {
      return this.webAdapter.getCurrentRoute()
    }

    // Fallback to direct path parsing
    const result = this.pathToRoute(
      `${this.pathname}?${this.searchParams.toString()}`,
    )
    return result || { route: null, params: {}, query: {} }
  }

  onRouteChange(callback: RouteChangeCallback) {
    this.routeChangeCallbacks.add(callback)
    return () => {
      this.routeChangeCallbacks.delete(callback)
    }
  }

  routeToPath(route: RouteDefinition, params = {}, query = {}) {
    let path = route.path

    // Replace path parameters
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, encodeURIComponent(String(value)))
    })

    // Add query parameters
    const queryString = new URLSearchParams(query).toString()
    if (queryString) {
      path = `${path}?${queryString}`
    }

    return path
  }

  pathToRoute(path: string) {
    // Delegate to web adapter if available
    if (this.webAdapter?.pathToRoute) {
      return this.webAdapter.pathToRoute(path)
    }

    // Fallback implementation
    const url = new URL(path, 'http://localhost')
    const pathname = url.pathname
    const searchParams = url.searchParams

    for (const route of Object.values(ROUTES)) {
      const match = this.matchPath(pathname, route.path)
      if (match) {
        const query: Record<string, string> = {}
        searchParams.forEach((value, key) => {
          query[key] = value
        })

        return {
          route,
          params: match.params,
          query,
        }
      }
    }

    return null
  }

  /**
   * Create new window for desktop-specific routes
   */
  private async createNewWindow(
    route: RouteDefinition,
    params = {},
    query = {},
  ) {
    if (!this.electronAPI) {
      console.warn('Electron API not available for new window creation')
      return
    }

    const desktopConfig = route.meta?.platforms?.desktop
    const windowConfig = desktopConfig?.window

    try {
      // Send IPC message to main process to create new window
      await this.electronAPI?.createWindow?.({
        url: this.routeToPath(route, params, query),
        ...windowConfig,
      })
    } catch (error) {
      console.error('Failed to create new window:', error)
    }
  }

  /**
   * Handle desktop-specific features like menu updates, notifications, etc.
   */
  private handleDesktopFeatures(
    route: RouteDefinition,
    params = {},
    query = {},
  ) {
    const desktopConfig = route.meta?.platforms?.desktop

    // Update window title
    if (route.meta?.title && typeof document !== 'undefined') {
      document.title = route.meta.title
    }

    // Send route change to main process for menu updates
    if (this.electronAPI?.sendRouteChange) {
      this.electronAPI.sendRouteChange({
        route: route.id,
        params,
        query,
        path: this.routeToPath(route, params, query),
      })
    }

    // Handle window-specific configurations
    if (desktopConfig?.window && this.electronAPI?.setAlwaysOnTop) {
      // Update window properties if needed
      if (desktopConfig.window.properties?.alwaysOnTop !== undefined) {
        this.electronAPI.setAlwaysOnTop(
          desktopConfig.window.properties.alwaysOnTop,
        )
      }
    }
  }

  /**
   * Setup Electron-specific event listeners
   */
  private setupElectronListeners() {
    if (typeof window === 'undefined' || !window.electronAPI) return

    // Listen for menu-triggered navigation
    window.electronAPI.onMenuNavigation?.(
      (data: { routeId: string; params?: Record<string, string> }) => {
        const route = ROUTES[data.routeId]
        if (route) {
          this.navigate(route, data.params || {})
        }
      },
    )

    // Listen for IPC messages from main process
    window.electronAPI.onRouteChange?.((data: { path: string }) => {
      this.navigateToPath(data.path)
    })

    // Handle deep links from main process
    window.electronAPI.onDeepLink?.((url: string) => {
      try {
        const urlObj = new URL(url)
        const path = urlObj.pathname + urlObj.search
        this.navigateToPath(path)
      } catch (error) {
        console.warn('Invalid deep link URL:', url, error)
      }
    })
  }

  /**
   * Setup hash-based routing for Electron deep links
   */
  private setupHashRouting() {
    if (typeof window === 'undefined') return

    // Handle hash changes for Electron deep linking
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash && hash !== this.pathname) {
        this.navigateToPath(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    // Handle initial hash
    if (window.location.hash) {
      handleHashChange()
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }

  /**
   * Navigate to a specific path
   */
  private navigateToPath(path: string) {
    if (this.webAdapter && this.webAdapter.router) {
      this.webAdapter.router.push(path)
    } else if (typeof window !== 'undefined') {
      // Fallback to browser navigation
      window.history.pushState(null, '', path)
      this.pathname = new URL(path, window.location.origin).pathname
      this.searchParams = new URLSearchParams(
        new URL(path, window.location.origin).search,
      )
      this.notifyRouteChange()
    }
  }

  /**
   * Match path pattern (similar to web adapter)
   */
  private matchPath(pathname: string, routePath: string) {
    const paramNames: string[] = []
    const regexPath = routePath
      .replace(/:[^/]+/g, (match) => {
        paramNames.push(match.slice(1))
        return '([^/]+)'
      })
      .replace(/\*/g, '(.*)')

    const regex = new RegExp(`^${regexPath}$`)
    const match = pathname.match(regex)

    if (!match) return null

    const params: Record<string, string> = {}
    paramNames.forEach((name, index) => {
      const paramValue = match[index + 1]
      if (paramValue !== undefined) {
        params[name] = decodeURIComponent(paramValue)
      }
    })

    return { params }
  }

  /**
   * Notify route change callbacks
   */
  private notifyRouteChange(
    route?: RouteDefinition,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) {
    if (route && params !== undefined && query !== undefined) {
      // Use provided route info
      this.routeChangeCallbacks.forEach((callback) => {
        callback(route, params, query)
      })
    } else {
      // Get current route info
      const currentRoute = this.getCurrentRoute()
      const currentRouteDefinition = currentRoute.route
      if (currentRouteDefinition !== null) {
        this.routeChangeCallbacks.forEach((callback) => {
          callback(
            currentRouteDefinition,
            currentRoute.params,
            currentRoute.query,
          )
        })
      }
    }
  }

  /**
   * Handle global shortcuts from main process
   */
  handleGlobalShortcut(shortcut: string) {
    // Find route with matching shortcut
    for (const route of Object.values(ROUTES)) {
      const desktopConfig = route.meta?.platforms?.desktop
      if (desktopConfig?.menu?.accelerator === shortcut) {
        this.navigate(route)
        break
      }
    }
  }

  /**
   * Get menu structure for main process
   */
  getMenuStructure() {
    const menuItems: Array<{
      id: string
      label: string
      path: string
      accelerator?: string
      enabled: boolean
    }> = []

    Object.values(ROUTES).forEach((route) => {
      const desktopConfig = route.meta?.platforms?.desktop
      if (desktopConfig?.menu?.path) {
        const menuItem: {
          id: string
          label: string
          path: string
          accelerator?: string
          enabled: boolean
        } = {
          id: route.id,
          label: route.name,
          path: desktopConfig.menu.path,
          enabled: true,
        }

        if (desktopConfig.menu.accelerator) {
          menuItem.accelerator = desktopConfig.menu.accelerator
        }

        menuItems.push(menuItem)
      }
    })

    return menuItems
  }
}

// Singleton instance
export const desktopAdapter = new DesktopAdapter()
