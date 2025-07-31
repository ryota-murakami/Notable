// Analytics integration layer
import type { AnalyticsProvider } from './provider'
import { vercelAnalytics } from './vercel'
import { customAnalytics } from './custom'

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
  timestamp?: number
  userId?: string
  sessionId?: string
}

export interface AnalyticsUser {
  id: string
  email?: string
  name?: string
  properties?: Record<string, unknown>
}

export interface PageViewEvent {
  url: string
  referrer?: string
  title?: string
  properties?: Record<string, unknown>
}

class Analytics {
  private providers: AnalyticsProvider[] = []
  private userId: string | null = null
  private sessionId: string | null = null

  constructor() {
    // Initialize providers based on environment variables
    if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID) {
      this.providers.push(vercelAnalytics)
    }

    // Always include custom analytics for internal tracking
    this.providers.push(customAnalytics)

    // Generate session ID
    this.sessionId = this.generateSessionId()
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
  }

  // Initialize all providers
  async initialize(): Promise<void> {
    await Promise.all(this.providers.map((provider) => provider.initialize?.()))
  }

  // Identify user
  identify(user: AnalyticsUser): void {
    this.userId = user.id
    this.providers.forEach((provider) => {
      provider.identify?.(user)
    })
  }

  // Track custom event
  track(
    event: string | AnalyticsEvent,
    properties?: Record<string, unknown>
  ): void {
    const eventData: AnalyticsEvent =
      typeof event === 'string'
        ? {
            name: event,
            ...(properties !== undefined && { properties }),
          }
        : event

    // Enrich with session data
    if (!eventData.userId && this.userId) {
      eventData.userId = this.userId
    }
    if (!eventData.sessionId && this.sessionId) {
      eventData.sessionId = this.sessionId
    }
    eventData.timestamp = eventData.timestamp || Date.now()

    this.providers.forEach((provider) => {
      provider.track(eventData)
    })
  }

  // Track page view
  page(data?: PageViewEvent): void {
    // Skip if running on server
    if (typeof window === 'undefined') {
      return
    }

    const pageData: PageViewEvent = data || {
      url: window.location.href,
      referrer: document.referrer,
      title: document.title,
    }

    this.providers.forEach((provider) => {
      provider.page?.(pageData)
    })
  }

  // Track errors
  error(error: Error, context?: Record<string, unknown>): void {
    this.track('error', {
      message: error.message,
      stack: error.stack,
      context,
      ...context,
    })
  }

  // Track performance metrics
  performance(metric: string, value: number, unit: string = 'ms'): void {
    this.track('performance', {
      metric,
      value,
      unit,
    })
  }

  // Feature usage tracking
  feature(
    feature: string,
    action: string,
    properties?: Record<string, unknown>
  ): void {
    this.track('feature_usage', {
      feature,
      action,
      ...properties,
    })
  }

  // Business metrics
  revenue(
    amount: number,
    currency: string = 'USD',
    properties?: Record<string, unknown>
  ): void {
    this.track('revenue', {
      amount,
      currency,
      ...properties,
    })
  }

  // User actions
  userAction(
    action: string,
    target?: string,
    properties?: Record<string, unknown>
  ): void {
    this.track('user_action', {
      action,
      target,
      ...properties,
    })
  }

  // Reset user (on logout)
  reset(): void {
    this.userId = null
    this.sessionId = this.generateSessionId()
    this.providers.forEach((provider) => {
      provider.reset?.()
    })
  }

  // Flush any pending events
  async flush(): Promise<void> {
    await Promise.all(this.providers.map((provider) => provider.flush?.()))
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Common event helpers
export const trackEvent = analytics.track.bind(analytics)
export const trackPage = analytics.page.bind(analytics)
export const trackError = analytics.error.bind(analytics)
export const trackPerformance = analytics.performance.bind(analytics)
export const trackFeature = analytics.feature.bind(analytics)
export const trackRevenue = analytics.revenue.bind(analytics)
export const trackUserAction = analytics.userAction.bind(analytics)
export const identifyUser = analytics.identify.bind(analytics)
export const resetAnalytics = analytics.reset.bind(analytics)
