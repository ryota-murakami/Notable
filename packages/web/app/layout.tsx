import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/providers/auth-provider'

export const metadata: Metadata = {
  title: 'Notable - The Notion Clone but Better',
  description: 'A better note-taking experience with keyboard shortcuts and rich features',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}