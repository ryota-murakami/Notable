/**
 * Web adapter for Next.js routing integration
 * Handles browser-based navigation and route synchronization
 */

import type { PlatformAdapter, RouteLocation } from '../types'
import { getRouteById } from '../routes'

export class WebAdapter implements PlatformAdapter {
  platform: 'web' = 'web'
  private listeners: Array<(location: RouteLocation) => void> = []
  private currentPathname: string = '/'
  private currentSearchParams: string = ''
  private locationUpdateTimeout: number | null = null
  private isNotifying: boolean = false

  constructor() {
    // Only initialize if we're in a browser environment
    if (typeof window !== 'undefined') {
      this.currentPathname = window.location.pathname
      this.currentSearchParams = window.location.search
      
      // Listen for browser navigation events
      window.addEventListener('popstate', this.handlePopState)
    }
  }

  private handlePopState = () => {
    if (typeof window !== 'undefined') {
      const newSearchParams = new URLSearchParams(window.location.search)
      this.setCurrentLocation(window.location.pathname, newSearchParams)
    }
  }

  getCurrentLocation(): RouteLocation {
    if (typeof window === 'undefined') {
      return {
        pathname: this.currentPathname,
        searchParams: new URLSearchParams(this.currentSearchParams),
        route: getRouteById('home') || null, // Default fallback
      }
    }

    const pathname = window.location.pathname
    const searchParams = new URLSearchParams(window.location.search)
    const route = getRouteById(pathname === '/' ? 'home' : pathname.slice(1)) || getRouteById('not-found') || null

    return {
      pathname,
      searchParams,
      route,
    }
  }

  private setCurrentLocation(pathname: string, searchParams: URLSearchParams) {
    this.currentPathname = pathname
    this.currentSearchParams = searchParams.toString()
    
    // Prevent multiple rapid notifications
    if (this.isNotifying) {
      return
    }
    
    // Debounce notifications to prevent rapid fire during navigation
    if (this.locationUpdateTimeout) {
      clearTimeout(this.locationUpdateTimeout)
    }
    
    this.locationUpdateTimeout = window.setTimeout(() => {
      this.isNotifying = true
      const route = getRouteById(pathname === '/' ? 'home' : pathname.slice(1))
      
      if (route) {
        const location: RouteLocation = {
          pathname,
          searchParams,
          route,
        }
        
        this.listeners.forEach(callback => {
          try {
            callback(location)
          } catch (error) {
            console.error('Error in web adapter location listener:', error)
          }
        })
      }
      
      this.isNotifying = false
      this.locationUpdateTimeout = null
    }, 10) as unknown as number // Type assertion for compatibility
  }

  navigate(pathname: string, searchParams?: URLSearchParams) {
    if (typeof window === 'undefined') {
      console.warn('Cannot navigate in server environment')
      return
    }

    const url = new URL(pathname, window.location.origin)
    if (searchParams) {
      url.search = searchParams.toString()
    }

    // Use history.pushState for client-side navigation
    window.history.pushState({}, '', url.toString())
    
    // Manually trigger location update
    this.setCurrentLocation(pathname, searchParams || new URLSearchParams())
  }

  subscribe(callback: (location: RouteLocation) => void): () => void {
    this.listeners.push(callback)
    
    // Immediately call with current location
    const currentLocation = this.getCurrentLocation()
    if (currentLocation.route) {
      callback(currentLocation)
    }
    
    return () => {
      const index = this.listeners.indexOf(callback)
      if (index !== -1) {
        this.listeners.splice(index, 1)
      }
    }
  }

  dispose() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this.handlePopState)
    }
    
    if (this.locationUpdateTimeout) {
      clearTimeout(this.locationUpdateTimeout)
      this.locationUpdateTimeout = null
    }
    
    this.listeners = []
  }
}

// Export singleton instance
export const webAdapter = new WebAdapter()
