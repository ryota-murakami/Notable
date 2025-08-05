import { isTest } from '@/lib/utils/environment'

// Initialize MSW on the client side only when in test mode
if (typeof window !== 'undefined' && isTest()) {
  import('../mocks/browser')
    .then(async ({ worker }) => {
      await worker.start({
        onUnhandledRequest: 'bypass',
        serviceWorker: {
          url: '/mockServiceWorker.js',
        },
      })
      console.info('🛠️ MSW initialized for testing')
    })
    .catch((error) => {
      console.warn('Failed to initialize MSW:', error)
    })
}
