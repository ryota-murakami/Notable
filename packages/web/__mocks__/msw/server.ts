/**
 * MSW Server Setup for Node.js Testing Environment
 *
 * This file sets up Mock Service Worker for use in Node.js test environments
 * like Jest. It creates a server instance that intercepts HTTP requests
 * during testing.
 */

import { setupServer } from 'msw/node'
import { handlers, mswUtils } from './handlers'

// Create MSW server instance with our handlers
const server = setupServer(...handlers)

// Export server and utilities
export { server, mswUtils }
