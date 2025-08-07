'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

const ThemeProvider = React.memo(({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
})

ThemeProvider.displayName = 'ThemeProvider'

export { ThemeProvider }
