import { ThemeProvider } from '../components/theme-provider'
import { SyncProviderWrapper } from '../components/sync-provider-wrapper'
import { RoutingProvider } from '../components/routing-provider'
import { MSWProvider } from '../mocks/MSWProvider'
import { Toaster } from 'sonner'
import { Theme } from '@radix-ui/themes'
import './globals.css'
import '@radix-ui/themes/styles.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notable - Your notes, perfectly organized',
  description:
    'A modern note-taking app that syncs seamlessly across all your devices',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    other: [
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'manifest', url: '/manifest.json' },
    ],
  },
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#6366F1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <MSWProvider>
          <ThemeProvider
            attribute='data-theme'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Theme>
              <RoutingProvider>
                <SyncProviderWrapper>{children}</SyncProviderWrapper>
              </RoutingProvider>
              <Toaster position='top-center' richColors />
            </Theme>
          </ThemeProvider>
        </MSWProvider>
      </body>
    </html>
  )
}
