/**
 * Analytics module for performance tracking and user behavior analysis
 * GDPR compliant with privacy-first approach
 */

import { type PerformanceMetric } from './performance'
import { isDevelopment } from './utils/environment'

// Analytics event types
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
  timestamp?: number
  userId?: string
  sessionId?: string
}

export interface PerformanceAnalyticsEvent extends AnalyticsEvent {
  metric: PerformanceMetric
  category: 'performance'
}

export interface UserInteractionEvent extends AnalyticsEvent {
  category: 'interaction'
  action: string
  element?: string
  page?: string
}

export interface ErrorEvent extends AnalyticsEvent {
  category: 'error'
  error: Error | string
  context?: Record<string, unknown>
  severity?: 'low' | 'medium' | 'high' | 'critical'
}

export interface UsageEvent extends AnalyticsEvent {
  category: 'usage'
  feature: string
  duration?: number
  metadata?: Record<string, unknown>
}

// Privacy settings
export interface AnalyticsConfig {
  enabled: boolean
  performanceTracking: boolean
  errorTracking: boolean
  userInteractionTracking: boolean
  usageStatistics: boolean
  anonymizeIp: boolean
  respectDoNotTrack: boolean
  consentRequired: boolean
}

// Default privacy-first configuration
const DEFAULT_CONFIG: AnalyticsConfig = {
  enabled: true,
  performanceTracking: true,
  errorTracking: true,
  userInteractionTracking: false, // Opt-in only
  usageStatistics: true,
  anonymizeIp: true,
  respectDoNotTrack: true,
  consentRequired: true,
}

class Analytics {
  private config: AnalyticsConfig = DEFAULT_CONFIG
  private sessionId: string = this.generateSessionId()
  private userId?: string
  private consentGiven: boolean = false
  private queue: AnalyticsEvent[] = []
  private initialized: boolean = false

  // External analytics services
  private posthog?: typeof import('posthog-js').default
  private sentry?: typeof import('@sentry/nextjs')

  constructor(config?: Partial<AnalyticsConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config }
    this.checkDoNotTrack()
    this.initializeServices()
  }

  /**
   * Initialize external analytics services
   */
  private async initializeServices() {
    if (typeof window === 'undefined' || !this.config.enabled) return

    try {
      // Initialize PostHog for product analytics
      if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        const posthog = await import('posthog-js')
        this.posthog = posthog.default

        this.posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
          api_host:
            process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
          capture_pageview: false, // We'll handle this manually
          capture_pageleave: true,
          disable_session_recording: !this.config.userInteractionTracking,
          respect_dnt: this.config.respectDoNotTrack,
          autocapture: false, // Privacy-first: only track what we explicitly send
          session_recording: {
            maskAllInputs: true,
          },
        })
      }

      // Initialize Sentry for error tracking
      if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        this.sentry = await import('@sentry/nextjs')
        // Sentry is already initialized via next.config.js, just store reference
      }

      this.initialized = true
      this.processQueue()
    } catch (error) {
      console.error('Failed to initialize analytics services:', error)
    }
  }

  /**
   * Check Do Not Track preference
   */
  private checkDoNotTrack() {
    if (typeof navigator === 'undefined') return

    if (this.config.respectDoNotTrack && navigator.doNotTrack === '1') {
      this.config.enabled = false
      console.info('Analytics disabled due to Do Not Track preference')
    }
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Set user consent for analytics
   */
  setConsent(granted: boolean) {
    this.consentGiven = granted

    if (granted) {
      this.processQueue()
    } else {
      this.queue = []
      this.posthog?.opt_out_capturing()
    }

    // Store consent in localStorage for persistence
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('analytics-consent', granted.toString())
    }
  }

  /**
   * Check if consent is required and granted
   */
  private hasConsent(): boolean {
    if (!this.config.consentRequired) return true

    // Check stored consent
    if (typeof localStorage !== 'undefined' && !this.consentGiven) {
      const storedConsent = localStorage.getItem('analytics-consent')
      if (storedConsent) {
        this.consentGiven = storedConsent === 'true'
      }
    }

    return this.consentGiven
  }

  /**
   * Set user ID for tracking
   */
  setUser(userId: string, properties?: Record<string, unknown>) {
    this.userId = userId

    if (!this.hasConsent() || !this.config.enabled) return

    this.posthog?.identify(userId, properties)
    this.sentry?.setUser({ id: userId, ...properties })
  }

  /**
   * Track performance metrics
   */
  performance(
    name: string,
    value: number,
    unit: PerformanceMetric['unit'],
    metadata?: Record<string, unknown>
  ) {
    if (!this.config.performanceTracking) return

    const event: PerformanceAnalyticsEvent = {
      name: `performance_${name}`,
      category: 'performance',
      metric: {
        name,
        value,
        unit,
        timestamp: Date.now(),
        metadata,
      },
      properties: {
        value,
        unit,
        ...metadata,
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    }

    this.track(event)
  }

  /**
   * Track user interactions
   */
  interaction(
    action: string,
    element?: string,
    properties?: Record<string, unknown>
  ) {
    if (!this.config.userInteractionTracking) return

    const event: UserInteractionEvent = {
      name: `interaction_${action}`,
      category: 'interaction',
      action,
      element,
      page:
        typeof window !== 'undefined' ? window.location.pathname : undefined,
      properties: {
        element,
        ...properties,
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    }

    this.track(event)
  }

  /**
   * Track errors
   */
  error(
    error: Error | string,
    context?: Record<string, unknown>,
    severity: ErrorEvent['severity'] = 'medium'
  ) {
    if (!this.config.errorTracking) return

    const errorMessage = error instanceof Error ? error.message : error
    const errorStack = error instanceof Error ? error.stack : undefined

    const event: ErrorEvent = {
      name: 'error_occurred',
      category: 'error',
      error: errorMessage,
      context,
      severity,
      properties: {
        message: errorMessage,
        stack: errorStack,
        severity,
        ...context,
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    }

    this.track(event)

    // Send to Sentry for detailed error tracking
    if (this.sentry && error instanceof Error) {
      this.sentry.captureException(error, {
        tags: { severity },
        extra: context,
      })
    }
  }

  /**
   * Track feature usage
   */
  usage(
    feature: string,
    duration?: number,
    metadata?: Record<string, unknown>
  ) {
    if (!this.config.usageStatistics) return

    const event: UsageEvent = {
      name: `usage_${feature}`,
      category: 'usage',
      feature,
      duration,
      metadata,
      properties: {
        feature,
        duration,
        ...metadata,
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    }

    this.track(event)
  }

  /**
   * Track page views
   */
  pageView(path?: string, properties?: Record<string, unknown>) {
    if (!this.config.enabled) return

    const page =
      path || (typeof window !== 'undefined' ? window.location.pathname : '/')

    const event: AnalyticsEvent = {
      name: 'page_view',
      properties: {
        page,
        title: typeof document !== 'undefined' ? document.title : undefined,
        referrer:
          typeof document !== 'undefined' ? document.referrer : undefined,
        ...properties,
      },
      timestamp: Date.now(),
      userId: this.userId,
      sessionId: this.sessionId,
    }

    this.track(event)
  }

  /**
   * Track custom events
   */
  track(event: AnalyticsEvent) {
    if (!this.config.enabled) return

    // Add to queue if consent not yet given or services not initialized
    if (!this.hasConsent() || !this.initialized) {
      this.queue.push(event)
      return
    }

    // Send to PostHog
    if (this.posthog) {
      this.posthog.capture(event.name, event.properties)
    }

    // Log for development
    if (isDevelopment()) {
      console.log('Analytics event:', event)
    }
  }

  /**
   * Process queued events
   */
  private processQueue() {
    if (!this.hasConsent() || !this.initialized) return

    while (this.queue.length > 0) {
      const event = this.queue.shift()
      if (event) {
        this.track(event)
      }
    }
  }

  /**
   * Get current session analytics
   */
  getSessionData() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      config: this.config,
      consentGiven: this.consentGiven,
      queueLength: this.queue.length,
    }
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<AnalyticsConfig>) {
    this.config = { ...this.config, ...newConfig }

    // Reinitialize if needed
    if (newConfig.enabled !== undefined) {
      if (newConfig.enabled) {
        this.initializeServices()
      } else {
        this.posthog?.opt_out_capturing()
      }
    }
  }

  /**
   * Reset session (useful for logout)
   */
  resetSession() {
    this.sessionId = this.generateSessionId()
    this.userId = undefined
    this.queue = []

    this.posthog?.reset()
    this.sentry?.setUser(null)
  }

  /**
   * Export analytics data (for privacy compliance)
   */
  exportData() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      config: this.config,
      queuedEvents: this.queue.length,
      consentGiven: this.consentGiven,
      lastActivity: Date.now(),
    }
  }

  /**
   * Delete user data (for GDPR compliance)
   */
  deleteUserData() {
    this.userId = undefined
    this.queue = []
    this.consentGiven = false

    // Clear stored consent
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('analytics-consent')
    }

    // Request deletion from external services
    this.posthog?.opt_out_capturing()
    this.sentry?.setUser(null)
  }
}

// Export singleton instance
export const analytics = new Analytics()

// Export class for testing
export { Analytics }

// Types are already exported with their declarations above
