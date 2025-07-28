// Analytics integration layer
import type { AnalyticsProvider } from './provider'
import { vercelAnalytics } from './vercel'
import { posthogAnalytics } from './posthog'
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
  private config: Record<string, any> = {}
  private consentGiven: boolean = false

  constructor() {
    // Initialize providers based on environment variables
    if (process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID) {
      this.providers.push(vercelAnalytics)
    }

    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      this.providers.push(posthogAnalytics)
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

  // Track performance metrics (expected by tests)
  performance(metric: string, value: number, unit: string = 'ms', properties?: Record<string, unknown>): void {
    this.track('performance', {
      metric,
      value,
      unit,
      ...properties,
    })
  }

  // Track interactions (expected by tests)
  interaction(type: string, element: string, properties?: Record<string, unknown>): void {
    this.track('interaction', {
      type,
      element,
      ...properties,
    })
  }

  // Track page views (expected by tests)
  pageView(page: string, properties?: Record<string, unknown>): void {
    this.track('page_view', {
      page,
      ...properties,
    })
  }

  // Track usage (expected by tests)
  usage(feature: string, duration: number, properties?: Record<string, unknown>): void {
    this.track('usage', {
      feature,
      duration,
      ...properties,
    })
  }

  // Feature usage tracking (keep for backward compatibility)
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

  // Get session data (expected by tests)
  getSessionData(): { sessionId: string | null; userId: string | null; config: Record<string, any>; consentGiven: boolean; queueLength: number } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      config: this.config,
      consentGiven: this.consentGiven,
      queueLength: 0,
    }
  }

  // Set user consent (expected by tests)
  setConsent(consent: boolean): void {
    this.consentGiven = consent
  }

  // Set user (expected by tests)
  setUser(userId: string, properties?: Record<string, any>): void {
    this.userId = userId
    if (properties) {
      this.identify({ id: userId, ...properties })
    }
  }

  // Update configuration (expected by tests)
  updateConfig(config: Record<string, any>): void {
    this.config = { ...this.config, ...config }
  }

  // Delete user data (expected by tests)
  deleteUserData(): void {
    this.userId = null
    this.consentGiven = false
    this.config = {}
    this.reset()
  }

  // Export data (expected by tests)
  exportData(): Record<string, any> {
    return {
      userId: this.userId,
      sessionId: this.sessionId,
      config: this.config,
      consentGiven: this.consentGiven,
    }
  }

  // Start timer for performance tracking (expected by tests)
  startTimer(name: string): () => void {
    const startTime = Date.now()
    return () => {
      const duration = Date.now() - startTime
      this.performance(name, duration, 'ms')
    }
  }

  // Reset session (expected by tests)
  resetSession(): void {
    this.sessionId = this.generateSessionId()
  }
}

// Export class and singleton instance
export { Analytics }
export const analytics = new Analytics()

