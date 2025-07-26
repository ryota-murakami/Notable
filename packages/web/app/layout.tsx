import { ThemeProvider } from '../components/theme-provider'
import { SyncProviderWrapper } from '../components/sync-provider-wrapper'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SyncProviderWrapper>{children}</SyncProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
