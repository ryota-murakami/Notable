export interface RouteDefinition {
  /** Route identifier */
  id: string
  /** Display name for the route */
  name: string
  /** Route path pattern */
  path: string
  /** Parent route ID for nested routes */
  parent?: string
  /** Route parameters */
  params?: Record<string, string>
  /** Query parameters */
  query?: Record<string, string>
  /** Route metadata */
  meta?: {
    /** Whether route requires authentication */
    requiresAuth?: boolean
    /** Route title for browser/app bar */
    title?: string
    /** Route description */
    description?: string
    /** Route category for grouping */
    category?: string
    /** Whether route is public (accessible without auth) */
    public?: boolean
    /** Platform-specific configurations */
    platforms?: {
      web?: WebRouteConfig
      mobile?: MobileRouteConfig
      desktop?: DesktopRouteConfig
    }
  }
}

export interface WebRouteConfig {
  /** Next.js specific route configuration */
  dynamic?: boolean
  /** Layout component to use */
  layout?: string
  /** Page component */
  component?: string
  /** SEO metadata */
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
  }
}

export interface MobileRouteConfig {
  /** Screen transition animation */
  animation?: 'slide' | 'fade' | 'modal' | 'none'
  /** Tab bar configuration if part of tabs */
  tabBar?: {
    label?: string
    icon?: string
    badge?: string
  }
  /** Header configuration */
  header?: {
    title?: string
    hidden?: boolean
    backButton?: boolean
  }
  /** Screen orientation */
  orientation?: 'portrait' | 'landscape' | 'default'
}

export interface DesktopRouteConfig {
  /** Window configuration for Electron */
  window?: {
    /** Create new window for this route */
    newWindow?: boolean
    /** Window size */
    size?: { width: number; height: number }
    /** Window position */
    position?: { x: number; y: number }
    /** Window properties */
    properties?: {
      resizable?: boolean
      alwaysOnTop?: boolean
      frame?: boolean
    }
  }
  /** Menu integration */
  menu?: {
    /** Menu path (e.g., "File > New Note") */
    path?: string
    /** Keyboard shortcut */
    accelerator?: string
  }
}

export interface NavigationState {
  /** Current route */
  currentRoute: RouteDefinition | null
  /** Navigation history */
  history: Array<{
    route: RouteDefinition
    params: Record<string, string>
    query: Record<string, string>
  }>
  /** Navigation stack index */
  historyIndex: number
  /** Loading state */
  isNavigating: boolean
  /** Error state */
  error: string | null
}

export interface NavigationAction {
  type:
    | 'NAVIGATE'
    | 'BACK'
    | 'FORWARD'
    | 'REPLACE'
    | 'RESET'
    | 'SET_LOADING'
    | 'SET_ERROR'
  payload?: unknown
}

export interface NavigationStore extends NavigationState {
  /** Navigate to a route */
  navigate: (
    routeId: string,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => void
  /** Go back in history */
  goBack: () => void
  /** Go forward in history */
  goForward: () => void
  /** Replace current route */
  replace: (
    routeId: string,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => void
  /** Reset navigation stack */
  reset: (
    routeId: string,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => void
  /** Check if can go back */
  canGoBack: () => boolean
  /** Check if can go forward */
  canGoForward: () => boolean
  /** Get route by ID */
  getRoute: (routeId: string) => RouteDefinition | undefined
  /** Get current URL/path */
  getCurrentPath: () => string
  /** Parse path to route and params */
  parsePath: (path: string) => {
    route: RouteDefinition | null
    params: Record<string, string>
    query: Record<string, string>
  } | null
}

export interface PlatformAdapter {
  /** Platform identifier */
  platform: 'web' | 'mobile' | 'desktop'
  /** Navigate to route using platform-specific method */
  navigate: (
    route: RouteDefinition,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => void
  /** Get current route information */
  getCurrentRoute: () => {
    route: RouteDefinition | null
    params: Record<string, string>
    query: Record<string, string>
  }
  /** Listen for route changes */
  onRouteChange: (
    callback: (
      route: RouteDefinition,
      params: Record<string, string>,
      query: Record<string, string>,
    ) => void,
  ) => () => void
  /** Convert route to platform-specific path */
  routeToPath: (
    route: RouteDefinition,
    params?: Record<string, string>,
    query?: Record<string, string>,
  ) => string
  /** Convert platform path to route */
  pathToRoute: (path: string) => {
    route: RouteDefinition | null
    params: Record<string, string>
    query: Record<string, string>
  } | null
}

export type Platform = 'web' | 'mobile' | 'desktop'
export type RouteChangeCallback = (
  route: RouteDefinition,
  params: Record<string, string>,
  query: Record<string, string>,
) => void
