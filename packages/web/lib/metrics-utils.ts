// Metrics storage (in production, use a proper metrics library like prom-client)
const metrics = {
  httpRequestsTotal: 0,
  httpRequestDuration: [] as number[],
  activeConnections: 0,
  notesCreated: 0,
  notesUpdated: 0,
  notesDeleted: 0,
  searchQueries: 0,
  authAttempts: 0,
  authSuccesses: 0,
  authFailures: 0,
  errors: 0,
  startTime: Date.now(),
}

// Export function to update metrics from other parts of the app
export function updateMetric(metric: keyof typeof metrics, value: number = 1) {
  if (Array.isArray(metrics[metric])) {
    const arr = metrics[metric] as number[]
    arr.push(value)
    // Keep only last 1000 entries to prevent memory issues
    if (arr.length > 1000) {
      arr.shift()
    }
  } else {
    const currentValue = metrics[metric] as number
    ;(metrics as any)[metric] = currentValue + value
  }
}

export { metrics }
