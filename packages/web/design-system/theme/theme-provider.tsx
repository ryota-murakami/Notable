'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { getThemeCSSVariables, type ThemeName, themes } from './theme-config'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeName
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

// Extended theme context
interface ThemeContextValue {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  themes: string[]
  systemTheme?: ThemeName
  resolvedTheme?: ThemeName
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'notable-theme',
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  // Create style element for CSS variables
  React.useEffect(() => {
    // Create or get style element
    let styleElement = document.getElementById(
      'theme-variables'
    ) as HTMLStyleElement
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = 'theme-variables'
      document.head.appendChild(styleElement)
    }

    // Generate CSS for all themes
    const cssContent = Object.entries(themes)
      .map(([themeName, theme]) => {
        const cssVars = getThemeCSSVariables(theme)
        const cssRules = Object.entries(cssVars)
          .map(([varName, value]) => `  ${varName}: ${value};`)
          .join('\n')

        // For light theme, apply to :root and html:not([data-theme])
        if (themeName === 'light') {
          return `:root {\n${cssRules}\n}\n\nhtml:not([data-theme]) {\n${cssRules}\n}`
        }

        // For other themes, apply to [data-theme="themeName"]
        return `[data-theme="${themeName}"] {\n${cssRules}\n}`
      })
      .join('\n\n')

    styleElement.textContent = cssContent
  }, [])

  return (
    <NextThemesProvider
      attribute='data-theme'
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      themes={Object.keys(themes)}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

// Theme switcher component
interface ThemeSwitcherProps {
  className?: string
  showLabel?: boolean
}

export function ThemeSwitcher({
  className,
  showLabel = true,
}: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={className}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeName)}
        className='w-full px-3 py-2 text-sm bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring'
        aria-label='Select theme'
      >
        <optgroup label='Standard Themes'>
          <option value='light'>🌞 Light</option>
          <option value='dark'>🌙 Dark</option>
        </optgroup>
        <optgroup label='Special Themes'>
          <option value='midnight'>🌌 Midnight</option>
          <option value='sunset'>🌅 Sunset</option>
          <option value='forest'>🌲 Forest</option>
          <option value='ocean'>🌊 Ocean</option>
        </optgroup>
        <optgroup label='Accessibility'>
          <option value='highContrastLight'>⚪ High Contrast Light</option>
          <option value='highContrastDark'>⚫ High Contrast Dark</option>
        </optgroup>
        <optgroup label='System'>
          <option value='system'>💻 System</option>
        </optgroup>
      </select>
      {showLabel && (
        <p className='mt-2 text-xs text-muted-foreground'>
          Theme: {themes[theme as ThemeName]?.displayName || 'System'}
        </p>
      )}
    </div>
  )
}

// Compact theme toggle button
interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Simple light/dark toggle
  const isDark =
    theme === 'dark' ||
    theme.includes('Dark') ||
    theme === 'midnight' ||
    theme === 'forest'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'inline-flex items-center justify-center rounded-lg p-2 transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='5' />
          <line x1='12' y1='1' x2='12' y2='3' />
          <line x1='12' y1='21' x2='12' y2='23' />
          <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
          <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
          <line x1='1' y1='12' x2='3' y2='12' />
          <line x1='21' y1='12' x2='23' y2='12' />
          <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
          <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
        </svg>
      )}
    </button>
  )
}

// Utility function (you may want to import this from a shared utils file)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}
