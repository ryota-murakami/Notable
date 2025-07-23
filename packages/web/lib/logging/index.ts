import { createServerLogger } from './server'
import { createClientLogger } from './client'
import { LogLevel } from './types'
import type { LogEntry, LogMetadata } from './types'

// Re-export types
export { LogLevel } from './types'
export type { LogEntry, LogMetadata } from './types'

// Export appropriate logger based on environment
export const logger =
  typeof window === 'undefined' ? createServerLogger() : createClientLogger()

// Performance logging helper
export function logPerformance(
  operation: string,
  duration: number,
  metadata?: LogMetadata
) {
  const level = duration > 1000 ? LogLevel.WARN : LogLevel.INFO
  logger.log(level, `Performance: ${operation} took ${duration}ms`, {
    ...metadata,
    operation,
    duration,
    performanceWarning: duration > 1000,
  })
}

// API logging helper
export function logApiCall(
  method: string,
  path: string,
  statusCode: number,
  duration: number,
  metadata?: LogMetadata
) {
  const level = statusCode >= 400 ? LogLevel.ERROR : LogLevel.INFO
  logger.log(level, `${method} ${path} - ${statusCode} (${duration}ms)`, {
    ...metadata,
    method,
    path,
    statusCode,
    duration,
  })
}

// User action logging helper
export function logUserAction(
  action: string,
  userId?: string,
  metadata?: LogMetadata
) {
  logger.info(`User action: ${action}`, {
    ...metadata,
    action,
    userId,
    timestamp: new Date().toISOString(),
  })
}

// Security event logging helper
export function logSecurityEvent(
  event: string,
  severity: 'low' | 'medium' | 'high' | 'critical',
  metadata?: LogMetadata
) {
  const level =
    severity === 'critical' || severity === 'high'
      ? LogLevel.ERROR
      : LogLevel.WARN

  logger.log(level, `Security event: ${event}`, {
    ...metadata,
    securityEvent: event,
    severity,
    timestamp: new Date().toISOString(),
  })
}

// Export convenience methods
const loggerExports = {
  error: (message: string, metadata?: LogMetadata) =>
    logger.error(message, metadata),
  warn: (message: string, metadata?: LogMetadata) =>
    logger.warn(message, metadata),
  info: (message: string, metadata?: LogMetadata) =>
    logger.info(message, metadata),
  debug: (message: string, metadata?: LogMetadata) =>
    logger.debug(message, metadata),
  verbose: (message: string, metadata?: LogMetadata) =>
    logger.verbose(message, metadata),

  // Specialized loggers
  performance: logPerformance,
  api: logApiCall,
  userAction: logUserAction,
  security: logSecurityEvent,
}

export default loggerExports
