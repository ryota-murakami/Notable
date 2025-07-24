import type React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SupabaseProvider } from '@/components/supabase-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import { AnalyticsProvider } from '@/components/analytics-provider'
import { ErrorBoundary } from '@/components/error-boundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notable',
  description: 'A modern note-taking application',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/* Temporarily simplify layout for debugging */}
        {children}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  )
}
