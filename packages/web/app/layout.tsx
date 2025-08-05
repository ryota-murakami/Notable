import { ThemeProvider } from '../components/theme-provider'
import { SyncProviderWrapper } from '../components/sync-provider-wrapper'
import { RoutingProvider } from '../components/routing-provider'
import { MSWProviderWrapper } from './msw-provider'
import { QueryProvider } from '../components/query-provider'
import { DevTools } from '../components/dev-tools'
import { Toaster } from 'sonner'
import { Theme } from '@radix-ui/themes'
import './globals.css'
import '@radix-ui/themes/styles.css'
import './init-msw' // Initialize MSW if in test mode
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Notable - Premium Note-Taking Experience',
    template: '%s | Notable',
  },
  description:
    "The world's most elegant note-taking application. Create, organize, and sync your notes seamlessly across all devices with our premium Notion-inspired experience.",
  keywords: [
    'notes',
    'note-taking',
    'productivity',
    'writing',
    'organization',
    'sync',
    'collaboration',
    'rich text editor',
    'markdown',
  ],
  authors: [{ name: 'Notable Team' }],
  creator: 'Notable',
  publisher: 'Notable',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://notable.app',
    title: 'Notable - Premium Note-Taking Experience',
    description: "The world's most elegant note-taking application",
    siteName: 'Notable',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notable - Premium Note-Taking Experience',
    description: "The world's most elegant note-taking application",
    creator: '@notable_app',
  },
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
        <MSWProviderWrapper>
          <ThemeProvider
            attribute='data-theme'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Theme>
              <QueryProvider>
                <RoutingProvider>
                  <SyncProviderWrapper>{children}</SyncProviderWrapper>
                </RoutingProvider>
              </QueryProvider>
              <Toaster position='top-center' richColors />
              <DevTools />
            </Theme>
          </ThemeProvider>
        </MSWProviderWrapper>
      </body>
    </html>
  )
}
