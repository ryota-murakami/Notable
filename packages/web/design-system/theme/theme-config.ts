// Notable Design System - Theme Configuration

import { colors } from '../tokens/colors'

export interface ThemeConfig {
  name: string
  displayName: string
  description?: string
  colors: {
    // Base colors
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string

    // Extended colors
    success: string
    successForeground: string
    warning: string
    warningForeground: string
    info: string
    infoForeground: string

    // Chart colors
    chart1: string
    chart2: string
    chart3: string
    chart4: string
    chart5: string

    // Brand colors
    brand: string
    highlight: string
  }
  semantics?: {
    shadowColor?: string
    focusRingColor?: string
    selectionBackground?: string
    selectionForeground?: string
  }
}

// Predefined themes
export const themes: Record<string, ThemeConfig> = {
  // Default Light Theme
  light: {
    name: 'light',
    displayName: 'Light',
    description: 'Clean and bright theme for daytime use',
    colors: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.145 0 0)',
      card: 'oklch(1 0 0)',
      cardForeground: 'oklch(0.145 0 0)',
      popover: 'oklch(1 0 0)',
      popoverForeground: 'oklch(0.145 0 0)',
      primary: colors.brand[500],
      primaryForeground: 'oklch(0.985 0 0)',
      secondary: 'oklch(0.97 0 0)',
      secondaryForeground: 'oklch(0.205 0 0)',
      muted: 'oklch(0.97 0 0)',
      mutedForeground: 'oklch(0.556 0 0)',
      accent: 'oklch(0.97 0 0)',
      accentForeground: 'oklch(0.205 0 0)',
      destructive: colors.error[500],
      destructiveForeground: 'oklch(0.985 0 0)',
      border: 'oklch(0.922 0 0)',
      input: 'oklch(0.922 0 0)',
      ring: 'oklch(0.708 0 0)',
      success: colors.success[500],
      successForeground: 'oklch(0.985 0 0)',
      warning: colors.warning[500],
      warningForeground: 'oklch(0.145 0 0)',
      info: colors.info[500],
      infoForeground: 'oklch(0.985 0 0)',
      chart1: 'oklch(0.646 0.222 41.116)',
      chart2: 'oklch(0.6 0.118 184.704)',
      chart3: 'oklch(0.398 0.07 227.392)',
      chart4: 'oklch(0.828 0.189 84.429)',
      chart5: 'oklch(0.769 0.188 70.08)',
      brand: colors.brand[500],
      highlight: 'oklch(0.852 0.199 91.936)',
    },
  },

  // Default Dark Theme
  dark: {
    name: 'dark',
    displayName: 'Dark',
    description: 'Comfortable dark theme for nighttime use',
    colors: {
      background: 'oklch(0.145 0 0)',
      foreground: 'oklch(0.985 0 0)',
      card: 'oklch(0.205 0 0)',
      cardForeground: 'oklch(0.985 0 0)',
      popover: 'oklch(0.205 0 0)',
      popoverForeground: 'oklch(0.985 0 0)',
      primary: colors.brand[400],
      primaryForeground: 'oklch(0.985 0 0)',
      secondary: 'oklch(0.269 0 0)',
      secondaryForeground: 'oklch(0.985 0 0)',
      muted: 'oklch(0.269 0 0)',
      mutedForeground: 'oklch(0.708 0 0)',
      accent: 'oklch(0.269 0 0)',
      accentForeground: 'oklch(0.985 0 0)',
      destructive: colors.error[400],
      destructiveForeground: 'oklch(0.985 0 0)',
      border: 'oklch(1 0 0 / 10%)',
      input: 'oklch(1 0 0 / 15%)',
      ring: 'oklch(0.556 0 0)',
      success: colors.success[400],
      successForeground: 'oklch(0.985 0 0)',
      warning: colors.warning[400],
      warningForeground: 'oklch(0.145 0 0)',
      info: colors.info[400],
      infoForeground: 'oklch(0.985 0 0)',
      chart1: 'oklch(0.488 0.243 264.376)',
      chart2: 'oklch(0.696 0.17 162.48)',
      chart3: 'oklch(0.769 0.188 70.08)',
      chart4: 'oklch(0.627 0.265 303.9)',
      chart5: 'oklch(0.645 0.246 16.439)',
      brand: colors.brand[400],
      highlight: 'oklch(0.852 0.199 91.936)',
    },
  },

  // Midnight Theme
  midnight: {
    name: 'midnight',
    displayName: 'Midnight',
    description: 'Deep blue dark theme with excellent contrast',
    colors: {
      background: 'oklch(0.15 0.05 250)',
      foreground: 'oklch(0.95 0.02 250)',
      card: 'oklch(0.20 0.05 250)',
      cardForeground: 'oklch(0.95 0.02 250)',
      popover: 'oklch(0.20 0.05 250)',
      popoverForeground: 'oklch(0.95 0.02 250)',
      primary: 'oklch(0.65 0.25 220)',
      primaryForeground: 'oklch(0.98 0 0)',
      secondary: 'oklch(0.25 0.05 250)',
      secondaryForeground: 'oklch(0.95 0.02 250)',
      muted: 'oklch(0.25 0.05 250)',
      mutedForeground: 'oklch(0.65 0.03 250)',
      accent: 'oklch(0.30 0.15 220)',
      accentForeground: 'oklch(0.95 0.02 250)',
      destructive: colors.error[400],
      destructiveForeground: 'oklch(0.98 0 0)',
      border: 'oklch(0.30 0.05 250)',
      input: 'oklch(0.30 0.05 250)',
      ring: 'oklch(0.65 0.25 220)',
      success: colors.success[400],
      successForeground: 'oklch(0.98 0 0)',
      warning: colors.warning[300],
      warningForeground: 'oklch(0.15 0.05 250)',
      info: 'oklch(0.65 0.25 220)',
      infoForeground: 'oklch(0.98 0 0)',
      chart1: 'oklch(0.65 0.25 220)',
      chart2: 'oklch(0.70 0.20 180)',
      chart3: 'oklch(0.75 0.18 140)',
      chart4: 'oklch(0.80 0.20 280)',
      chart5: 'oklch(0.65 0.22 320)',
      brand: 'oklch(0.65 0.25 220)',
      highlight: 'oklch(0.85 0.25 220)',
    },
  },

  // Sunset Theme
  sunset: {
    name: 'sunset',
    displayName: 'Sunset',
    description: 'Warm, cozy theme inspired by golden hour',
    colors: {
      background: 'oklch(0.98 0.02 60)',
      foreground: 'oklch(0.20 0.05 30)',
      card: 'oklch(0.99 0.01 60)',
      cardForeground: 'oklch(0.20 0.05 30)',
      popover: 'oklch(0.99 0.01 60)',
      popoverForeground: 'oklch(0.20 0.05 30)',
      primary: 'oklch(0.60 0.25 25)',
      primaryForeground: 'oklch(0.98 0.02 60)',
      secondary: 'oklch(0.94 0.05 50)',
      secondaryForeground: 'oklch(0.25 0.05 30)',
      muted: 'oklch(0.94 0.05 50)',
      mutedForeground: 'oklch(0.50 0.10 40)',
      accent: 'oklch(0.70 0.20 40)',
      accentForeground: 'oklch(0.98 0.02 60)',
      destructive: 'oklch(0.55 0.30 15)',
      destructiveForeground: 'oklch(0.98 0.02 60)',
      border: 'oklch(0.90 0.05 50)',
      input: 'oklch(0.90 0.05 50)',
      ring: 'oklch(0.60 0.25 25)',
      success: 'oklch(0.55 0.20 140)',
      successForeground: 'oklch(0.98 0.02 60)',
      warning: 'oklch(0.65 0.25 70)',
      warningForeground: 'oklch(0.20 0.05 30)',
      info: 'oklch(0.55 0.20 220)',
      infoForeground: 'oklch(0.98 0.02 60)',
      chart1: 'oklch(0.60 0.25 25)',
      chart2: 'oklch(0.65 0.20 50)',
      chart3: 'oklch(0.55 0.15 350)',
      chart4: 'oklch(0.70 0.20 70)',
      chart5: 'oklch(0.50 0.25 10)',
      brand: 'oklch(0.60 0.25 25)',
      highlight: 'oklch(0.85 0.25 50)',
    },
  },

  // Forest Theme
  forest: {
    name: 'forest',
    displayName: 'Forest',
    description: 'Natural green theme inspired by deep forests',
    colors: {
      background: 'oklch(0.15 0.02 150)',
      foreground: 'oklch(0.95 0.02 120)',
      card: 'oklch(0.18 0.03 150)',
      cardForeground: 'oklch(0.95 0.02 120)',
      popover: 'oklch(0.18 0.03 150)',
      popoverForeground: 'oklch(0.95 0.02 120)',
      primary: 'oklch(0.55 0.22 140)',
      primaryForeground: 'oklch(0.98 0 0)',
      secondary: 'oklch(0.22 0.05 150)',
      secondaryForeground: 'oklch(0.95 0.02 120)',
      muted: 'oklch(0.22 0.05 150)',
      mutedForeground: 'oklch(0.60 0.05 140)',
      accent: 'oklch(0.30 0.10 160)',
      accentForeground: 'oklch(0.95 0.02 120)',
      destructive: 'oklch(0.55 0.25 20)',
      destructiveForeground: 'oklch(0.98 0 0)',
      border: 'oklch(0.25 0.05 150)',
      input: 'oklch(0.25 0.05 150)',
      ring: 'oklch(0.55 0.22 140)',
      success: 'oklch(0.60 0.25 140)',
      successForeground: 'oklch(0.98 0 0)',
      warning: 'oklch(0.70 0.25 90)',
      warningForeground: 'oklch(0.15 0.02 150)',
      info: 'oklch(0.55 0.20 200)',
      infoForeground: 'oklch(0.98 0 0)',
      chart1: 'oklch(0.55 0.22 140)',
      chart2: 'oklch(0.60 0.18 120)',
      chart3: 'oklch(0.50 0.15 180)',
      chart4: 'oklch(0.65 0.20 100)',
      chart5: 'oklch(0.45 0.18 160)',
      brand: 'oklch(0.55 0.22 140)',
      highlight: 'oklch(0.75 0.25 120)',
    },
  },

  // Ocean Theme
  ocean: {
    name: 'ocean',
    displayName: 'Ocean',
    description: 'Cool blue theme inspired by deep waters',
    colors: {
      background: 'oklch(0.97 0.02 220)',
      foreground: 'oklch(0.15 0.05 220)',
      card: 'oklch(0.99 0.01 220)',
      cardForeground: 'oklch(0.15 0.05 220)',
      popover: 'oklch(0.99 0.01 220)',
      popoverForeground: 'oklch(0.15 0.05 220)',
      primary: 'oklch(0.50 0.25 220)',
      primaryForeground: 'oklch(0.98 0 0)',
      secondary: 'oklch(0.92 0.05 220)',
      secondaryForeground: 'oklch(0.20 0.05 220)',
      muted: 'oklch(0.92 0.05 220)',
      mutedForeground: 'oklch(0.45 0.10 220)',
      accent: 'oklch(0.85 0.10 200)',
      accentForeground: 'oklch(0.15 0.05 220)',
      destructive: colors.error[500],
      destructiveForeground: 'oklch(0.98 0 0)',
      border: 'oklch(0.85 0.05 220)',
      input: 'oklch(0.85 0.05 220)',
      ring: 'oklch(0.50 0.25 220)',
      success: 'oklch(0.55 0.20 160)',
      successForeground: 'oklch(0.98 0 0)',
      warning: 'oklch(0.65 0.25 80)',
      warningForeground: 'oklch(0.15 0.05 220)',
      info: 'oklch(0.50 0.25 220)',
      infoForeground: 'oklch(0.98 0 0)',
      chart1: 'oklch(0.50 0.25 220)',
      chart2: 'oklch(0.55 0.20 200)',
      chart3: 'oklch(0.60 0.18 180)',
      chart4: 'oklch(0.45 0.22 240)',
      chart5: 'oklch(0.65 0.15 160)',
      brand: 'oklch(0.50 0.25 220)',
      highlight: 'oklch(0.80 0.20 200)',
    },
  },

  // High Contrast Light
  highContrastLight: {
    name: 'highContrastLight',
    displayName: 'High Contrast Light',
    description: 'Maximum contrast for accessibility',
    colors: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0 0 0)',
      card: 'oklch(1 0 0)',
      cardForeground: 'oklch(0 0 0)',
      popover: 'oklch(1 0 0)',
      popoverForeground: 'oklch(0 0 0)',
      primary: 'oklch(0.20 0.20 250)',
      primaryForeground: 'oklch(1 0 0)',
      secondary: 'oklch(0.95 0 0)',
      secondaryForeground: 'oklch(0 0 0)',
      muted: 'oklch(0.90 0 0)',
      mutedForeground: 'oklch(0.30 0 0)',
      accent: 'oklch(0.20 0.20 250)',
      accentForeground: 'oklch(1 0 0)',
      destructive: 'oklch(0.45 0.35 25)',
      destructiveForeground: 'oklch(1 0 0)',
      border: 'oklch(0 0 0)',
      input: 'oklch(0 0 0)',
      ring: 'oklch(0.20 0.20 250)',
      success: 'oklch(0.40 0.30 140)',
      successForeground: 'oklch(1 0 0)',
      warning: 'oklch(0.50 0.35 80)',
      warningForeground: 'oklch(0 0 0)',
      info: 'oklch(0.35 0.30 220)',
      infoForeground: 'oklch(1 0 0)',
      chart1: 'oklch(0.20 0.20 250)',
      chart2: 'oklch(0.40 0.30 140)',
      chart3: 'oklch(0.45 0.35 25)',
      chart4: 'oklch(0.50 0.35 80)',
      chart5: 'oklch(0.35 0.30 220)',
      brand: 'oklch(0.20 0.20 250)',
      highlight: 'oklch(0.85 0.30 80)',
    },
  },

  // High Contrast Dark
  highContrastDark: {
    name: 'highContrastDark',
    displayName: 'High Contrast Dark',
    description: 'Maximum contrast dark theme for accessibility',
    colors: {
      background: 'oklch(0 0 0)',
      foreground: 'oklch(1 0 0)',
      card: 'oklch(0.10 0 0)',
      cardForeground: 'oklch(1 0 0)',
      popover: 'oklch(0.10 0 0)',
      popoverForeground: 'oklch(1 0 0)',
      primary: 'oklch(0.75 0.25 220)',
      primaryForeground: 'oklch(0 0 0)',
      secondary: 'oklch(0.20 0 0)',
      secondaryForeground: 'oklch(1 0 0)',
      muted: 'oklch(0.20 0 0)',
      mutedForeground: 'oklch(0.80 0 0)',
      accent: 'oklch(0.75 0.25 220)',
      accentForeground: 'oklch(0 0 0)',
      destructive: 'oklch(0.70 0.30 25)',
      destructiveForeground: 'oklch(0 0 0)',
      border: 'oklch(1 0 0)',
      input: 'oklch(1 0 0)',
      ring: 'oklch(0.75 0.25 220)',
      success: 'oklch(0.65 0.30 140)',
      successForeground: 'oklch(0 0 0)',
      warning: 'oklch(0.80 0.30 80)',
      warningForeground: 'oklch(0 0 0)',
      info: 'oklch(0.70 0.25 220)',
      infoForeground: 'oklch(0 0 0)',
      chart1: 'oklch(0.75 0.25 220)',
      chart2: 'oklch(0.65 0.30 140)',
      chart3: 'oklch(0.70 0.30 25)',
      chart4: 'oklch(0.80 0.30 80)',
      chart5: 'oklch(0.60 0.25 300)',
      brand: 'oklch(0.75 0.25 220)',
      highlight: 'oklch(0.90 0.30 80)',
    },
  },
}

// Get CSS variables for a theme
export function getThemeCSSVariables(
  theme: ThemeConfig
): Record<string, string> {
  const cssVars: Record<string, string> = {}

  // Map theme colors to CSS variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
    cssVars[cssVarName] = value
  })

  // Add semantic colors if defined
  if (theme.semantics) {
    Object.entries(theme.semantics).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      cssVars[cssVarName] = value
    })
  }

  return cssVars
}

// Theme type guard
export function isValidTheme(
  themeName: string
): themeName is keyof typeof themes {
  return themeName in themes
}

// Get theme by name with fallback
export function getTheme(themeName: string): ThemeConfig {
  return isValidTheme(themeName) ? themes[themeName] : themes.light
}

// Export theme names for type safety
export type ThemeName = keyof typeof themes
