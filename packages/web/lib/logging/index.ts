// Mock server logger since winston dependency was removed
const createServerLogger = () => ({
  error: (message: string, metadata?: any) => console.error(message, metadata),
  warn: (message: string, metadata?: any) => console.warn(message, metadata),
  info: (message: string, metadata?: any) => console.info(message, metadata),
  debug: (message: string, metadata?: any) => console.debug(message, metadata),
  verbose: (message: string, metadata?: any) => console.log(message, metadata),
  log: (level: string, message: string, metadata?: any) =>
    console.log(`[${level}]`, message, metadata),
})
import { createClientLogger } from './client'

// Logger interface
export interface Logger {
  error: (message: string, metadata?: LogMetadata) => void
  warn: (message: string, metadata?: LogMetadata) => void
  info: (message: string, metadata?: LogMetadata) => void
  debug: (message: string, metadata?: LogMetadata) => void
  verbose: (message: string, metadata?: LogMetadata) => void
  log: (level: LogLevel, message: string, metadata?: LogMetadata) => void
}

// Export appropriate logger based on environment
export const logger =
  typeof window === 'undefined' ? createServerLogger() : createClientLogger()

// Log levels
export enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
  VERBOSE = 'verbose',
}

// Log metadata interface
export interface LogMetadata {
  userId?: string
  sessionId?: string
  requestId?: string
  action?: string
  component?: string
  duration?: number
  error?:
    | Error
    | { message: string; stack?: string; name?: string; code?: string }
  [key: string]: unknown
}

// Structured log entry
export interface LogEntry {
  level: LogLevel
  message: string
  timestamp: Date
  metadata?: LogMetadata
}

// Helper to detect server environment
const isServerSide = () => typeof window === 'undefined'

// Helper function to format errors for logging
export function formatError(error: unknown): {
  message: string
  stack?: string
  name?: string
  code?: string
} {
  if (error instanceof Error) {
    return {
      message: error.message,
      ...(error.stack !== undefined && { stack: error.stack }),
      ...(error.name !== undefined && { name: error.name }),
      ...((error as Error & { code?: string }).code !== undefined && {
        code: (error as Error & { code?: string }).code,
      }),
    }
  }

  if (typeof error === 'string') {
    return { message: error }
  }

  return { message: 'Unknown error', stack: JSON.stringify(error) }
}

// Performance logging helper
export function logPerformance(
  operation: string,
  duration: number,
  metadata?: LogMetadata
) {
  const level = duration > 1000 ? LogLevel.WARN : LogLevel.INFO
  const message = `Performance: ${operation} took ${duration}ms`
  const data = {
    ...metadata,
    operation,
    duration,
    performanceWarning: duration > 1000,
  }

  if (isServerSide()) {
    console.log(`[${level}] ${message}`, data)
  }
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
  const message = `${method} ${path} - ${statusCode} (${duration}ms)`
  const data = {
    ...metadata,
    method,
    path,
    statusCode,
    duration,
  }

  if (isServerSide()) {
    const logMethod = level === LogLevel.ERROR ? 'error' : 'log'
    console[logMethod](`[${level}] ${message}`, data)
  }
}

// User action logging helper
export function logUserAction(
  action: string,
  userId?: string,
  metadata?: LogMetadata
) {
  const message = `User action: ${action}`
  const data = {
    ...metadata,
    action,
    ...(userId !== undefined && { userId }),
    timestamp: new Date().toISOString(),
  }

  if (isServerSide()) {
    console.log(`[${LogLevel.INFO}] ${message}`, data)
  }
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

  const message = `Security event: ${event}`
  const data = {
    ...metadata,
    securityEvent: event,
    severity,
    timestamp: new Date().toISOString(),
  }

  if (isServerSide()) {
    const logMethod = level === LogLevel.ERROR ? 'error' : 'warn'
    console[logMethod](`[${level}] ${message}`, data)
  }
}

// Export convenience methods
const LoggingModule = {
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

export default LoggingModule
