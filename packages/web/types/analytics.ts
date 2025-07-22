// Analytics type definitions

export interface AnalyticsProperties {
  [key: string]: string | number | boolean | null | undefined
}

export interface AnalyticsContext extends AnalyticsProperties {
  source?: string
  sessionId?: string
  userId?: string
}

export interface AnalyticsEvent {
  event: string
  properties?: AnalyticsProperties
  timestamp?: number
}

export interface FeatureUsageProperties extends AnalyticsProperties {
  feature: string
  action: string
  duration?: number
  success?: boolean
}

export interface ErrorContext extends AnalyticsContext {
  errorMessage?: string
  errorStack?: string
  severity?: 'low' | 'medium' | 'high' | 'critical'
}
