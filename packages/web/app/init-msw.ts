// Initialize MSW on the client side only when API mocking is enabled
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
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
