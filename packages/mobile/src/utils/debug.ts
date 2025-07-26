/**
 * Debug utilities for development
 */
/* eslint-disable no-console */

import React from 'react';
import { Platform } from 'react-native';

// Colors for console logging
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

export class DevLogger {
  private static isDev = __DEV__;
  private static enableColors = Platform.OS !== 'web';

  private static colorize(text: string, color: keyof typeof colors): string {
    if (!this.enableColors) return text;
    return `${colors[color]}${text}${colors.reset}`;
  }

  static log(message: string, ...args: any[]) {
    if (!this.isDev) return;
    console.log(`[${new Date().toISOString()}] ${message}`, ...args);
  }

  static info(message: string, ...args: any[]) {
    if (!this.isDev) return;
    const prefix = this.colorize('[INFO]', 'blue');
    console.log(`${prefix} ${message}`, ...args);
  }

  static success(message: string, ...args: any[]) {
    if (!this.isDev) return;
    const prefix = this.colorize('[SUCCESS]', 'green');
    console.log(`${prefix} ${message}`, ...args);
  }

  static warn(message: string, ...args: any[]) {
    if (!this.isDev) return;
    const prefix = this.colorize('[WARN]', 'yellow');
    console.warn(`${prefix} ${message}`, ...args);
  }

  static error(message: string, error?: Error, ...args: any[]) {
    if (!this.isDev) return;
    const prefix = this.colorize('[ERROR]', 'red');
    console.error(`${prefix} ${message}`, error, ...args);
    if (error?.stack) {
      console.error(this.colorize('Stack trace:', 'dim'), error.stack);
    }
  }

  static debug(message: string, data?: any) {
    if (!this.isDev) return;
    const prefix = this.colorize('[DEBUG]', 'magenta');
    console.log(`${prefix} ${message}`);
    if (data !== undefined) {
      console.log(this.colorize('Data:', 'dim'), data);
    }
  }

  static group(label: string) {
    if (!this.isDev) return;
    console.group(this.colorize(`▼ ${label}`, 'cyan'));
  }

  static groupEnd() {
    if (!this.isDev) return;
    console.groupEnd();
  }

  static table(data: any) {
    if (!this.isDev) return;
    console.table(data);
  }

  static time(label: string) {
    if (!this.isDev) return;
    console.time(this.colorize(`⏱ ${label}`, 'yellow'));
  }

  static timeEnd(label: string) {
    if (!this.isDev) return;
    console.timeEnd(this.colorize(`⏱ ${label}`, 'yellow'));
  }
}

/**
 * Performance monitoring utilities
 */
export class PerfMonitor {
  private static measurements = new Map<string, number>();

  static start(label: string) {
    if (!__DEV__) return;
    this.measurements.set(label, Date.now());
    DevLogger.debug(`Performance measurement started: ${label}`);
  }

  static end(label: string) {
    if (!__DEV__) return;
    const startTime = this.measurements.get(label);
    if (!startTime) {
      DevLogger.warn(`No start time found for: ${label}`);
      return;
    }

    const duration = Date.now() - startTime;
    this.measurements.delete(label);

    const color = duration < 16 ? 'green' : duration < 100 ? 'yellow' : 'red';
    DevLogger.log(
      `Performance: ${label} took ${duration.toFixed(2)}ms`,
      color
    );

    return duration;
  }

  static async measure<T>(label: string, fn: () => Promise<T>): Promise<T> {
    this.start(label);
    try {
      const result = await fn();
      this.end(label);
      return result;
    } catch (error) {
      this.end(label);
      throw error;
    }
  }
}

/**
 * Memory monitoring utilities
 */
export class MemoryMonitor {
  static log() {
    if (!__DEV__) return;
    // Memory monitoring is not available in React Native
    // This is a placeholder for future implementation
    DevLogger.info('Memory monitoring not available in React Native');
  }

  static startMonitoring(_intervalMs = 5000) {
    if (!__DEV__) return () => {};
    
    // Placeholder for React Native memory monitoring
    DevLogger.info('Memory monitoring not available in React Native');
    return () => {};
  }
}

/**
 * Network request interceptor for debugging
 */
export class NetworkDebugger {
  private static requestId = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static requests = new Map<number, any>();

  static init() {
    if (!__DEV__) return;

    const originalFetch = global.fetch;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global.fetch = async (input: any, init?: any) => {
      const id = ++this.requestId;
      const url = typeof input === 'string' ? input : input.toString();
      const method = init?.method || 'GET';
      
      const startTime = Date.now();
      this.requests.set(id, { url, method, startTime });

      DevLogger.info(`🌐 [${id}] ${method} ${url}`);
      
      try {
        const response = await originalFetch(input, init);
        const duration = Date.now() - startTime;
        
        const color = response.ok ? 'green' : 'red';
        DevLogger.log(
          `🌐 [${id}] ${response.status} ${response.statusText} (${duration.toFixed(0)}ms)`,
          color
        );
        
        this.requests.delete(id);
        return response;
      } catch (error) {
        const duration = Date.now() - startTime;
        DevLogger.error(`🌐 [${id}] Network error (${duration.toFixed(0)}ms)`, error as Error);
        this.requests.delete(id);
        throw error;
      }
    };
  }

  static getPendingRequests() {
    return Array.from(this.requests.entries()).map(([id, req]) => ({
      id,
      ...req,
      duration: Date.now() - req.startTime,
    }));
  }

  static logPendingRequests() {
    const pending = this.getPendingRequests();
    if (pending.length > 0) {
      DevLogger.warn(`Pending requests: ${pending.length}`);
      DevLogger.table(pending);
    }
  }
}

/**
 * Component render tracker
 */
export function useRenderTracker(componentName: string) {
  const renderCount = React.useRef(0);
  renderCount.current += 1;

  React.useEffect(() => {
    if (!__DEV__) return;
    DevLogger.debug(`${componentName} rendered (${renderCount.current} times)`);
  });

  React.useEffect(() => {
    if (!__DEV__) return;
    return () => {
      DevLogger.debug(`${componentName} unmounted after ${renderCount.current} renders`);
    };
  }, [componentName, renderCount]);
}

/**
 * Initialize all debug utilities
 */
export function initializeDebugTools() {
  if (!__DEV__) return;

  DevLogger.info('🚀 Notable Mobile Debug Tools Initialized');
  
  // Initialize network debugger
  NetworkDebugger.init();
  
  // Log memory usage periodically
  const stopMemoryMonitoring = MemoryMonitor.startMonitoring(30000);
  
  // Log initial memory
  MemoryMonitor.log();
  
  // Provide global debug utilities
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).DevLogger = DevLogger;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).PerfMonitor = PerfMonitor;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).MemoryMonitor = MemoryMonitor;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).NetworkDebugger = NetworkDebugger;
  
  DevLogger.success('Debug tools available globally: DevLogger, PerfMonitor, MemoryMonitor, NetworkDebugger');
  
  return () => {
    stopMemoryMonitoring();
  };
}