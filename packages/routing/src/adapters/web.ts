import { PlatformAdapter, RouteDefinition, RouteChangeCallback } from '../types'
import { ROUTES } from '../routes'

/**
 * Web Platform Adapter for Next.js App Router
 * Handles routing integration with Next.js navigation
 */
export class WebAdapter implements PlatformAdapter {
  platform = 'web' as const
  private routeChangeCallbacks: Set<RouteChangeCallback> = new Set()
  private router: any = null
  private pathname: string = '/'
  private searchParams: URLSearchParams = new URLSearchParams()

  constructor() {
    // Initialize with current browser state
    if (typeof window !== 'undefined') {
      this.pathname = window.location.pathname
      this.searchParams = new URLSearchParams(window.location.search)
      this.setupBrowserListeners()
    }
  }

  /**
   * Set the Next.js router instance
   * This should be called from a Next.js component with useRouter()
   */
  setRouter(router: any) {
    this.router = router
  }

  /**
   * Set current pathname and search params
   * This should be called from Next.js components with usePathname() and useSearchParams()
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
    const path = this.routeToPath(route, params, query)

    if (this.router) {
      // Use Next.js router if available
      this.router.push(path)
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

  getCurrentRoute() {
    const result = this.pathToRoute(
      this.pathname + '?' + this.searchParams.toString(),
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

    // Replace path parameters (e.g., /note/:id -> /note/123)
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`:${key}`, encodeURIComponent(String(value)))
    })

    // Add query parameters
    const queryParams = new URLSearchParams()
    Object.entries(query).forEach(([key, value]) => {
      queryParams.set(key, String(value))
    })
    const queryString = queryParams.toString()
    if (queryString) {
      path += '?' + queryString
    }

    return path
  }

  pathToRoute(path: string) {
    const url = new URL(path, 'http://localhost')
    const pathname = url.pathname
    const searchParams = url.searchParams

    // Find matching route
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

  private setupBrowserListeners() {
    if (typeof window === 'undefined') return

    // Listen for browser navigation events
    const handlePopState = () => {
      this.pathname = window.location.pathname
      this.searchParams = new URLSearchParams(window.location.search)
      this.notifyRouteChange()
    }

    window.addEventListener('popstate', handlePopState)

    // Return cleanup function
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }

  private notifyRouteChange() {
    const currentRoute = this.getCurrentRoute()
    if (currentRoute.route) {
      this.routeChangeCallbacks.forEach((callback) => {
        callback(currentRoute.route!, currentRoute.params, currentRoute.query)
      })
    }
  }

  private matchPath(pathname: string, routePath: string) {
    // Convert route path to regex pattern
    const paramNames: string[] = []
    const regexPath = routePath
      .replace(/:[^/]+/g, (match) => {
        paramNames.push(match.slice(1)) // Remove the ':'
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
}

// Singleton instance
export const webAdapter = new WebAdapter()
