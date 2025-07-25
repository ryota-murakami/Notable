// Notable Design System - Color Tokens
// Using OKLCH for perceptually uniform colors with better accessibility

export const colors = {
  // Brand Colors
  brand: {
    50: 'oklch(0.95 0.05 259.815)',
    100: 'oklch(0.90 0.10 259.815)',
    200: 'oklch(0.85 0.15 259.815)',
    300: 'oklch(0.75 0.20 259.815)',
    400: 'oklch(0.65 0.22 259.815)',
    500: 'oklch(0.623 0.214 259.815)', // Primary brand color
    600: 'oklch(0.55 0.20 259.815)',
    700: 'oklch(0.45 0.18 259.815)',
    800: 'oklch(0.35 0.15 259.815)',
    900: 'oklch(0.25 0.10 259.815)',
  },

  // Neutral Colors (Gray scale)
  neutral: {
    50: 'oklch(0.985 0 0)',
    100: 'oklch(0.97 0 0)',
    200: 'oklch(0.922 0 0)',
    300: 'oklch(0.87 0 0)',
    400: 'oklch(0.708 0 0)',
    500: 'oklch(0.556 0 0)',
    600: 'oklch(0.40 0 0)',
    700: 'oklch(0.269 0 0)',
    800: 'oklch(0.205 0 0)',
    900: 'oklch(0.145 0 0)',
    950: 'oklch(0.09 0 0)',
  },

  // Semantic Colors
  success: {
    50: 'oklch(0.95 0.05 142.495)',
    100: 'oklch(0.90 0.10 142.495)',
    200: 'oklch(0.85 0.15 142.495)',
    300: 'oklch(0.75 0.20 142.495)',
    400: 'oklch(0.65 0.22 142.495)',
    500: 'oklch(0.596 0.189 142.495)',
    600: 'oklch(0.52 0.18 142.495)',
    700: 'oklch(0.42 0.16 142.495)',
    800: 'oklch(0.32 0.12 142.495)',
    900: 'oklch(0.25 0.08 142.495)',
  },

  warning: {
    50: 'oklch(0.95 0.05 84.429)',
    100: 'oklch(0.92 0.10 84.429)',
    200: 'oklch(0.88 0.15 84.429)',
    300: 'oklch(0.828 0.189 84.429)',
    400: 'oklch(0.75 0.20 84.429)',
    500: 'oklch(0.67 0.21 84.429)',
    600: 'oklch(0.58 0.19 84.429)',
    700: 'oklch(0.48 0.17 84.429)',
    800: 'oklch(0.38 0.14 84.429)',
    900: 'oklch(0.28 0.10 84.429)',
  },

  error: {
    50: 'oklch(0.95 0.05 27.325)',
    100: 'oklch(0.90 0.10 27.325)',
    200: 'oklch(0.80 0.18 27.325)',
    300: 'oklch(0.70 0.22 27.325)',
    400: 'oklch(0.62 0.24 27.325)',
    500: 'oklch(0.577 0.245 27.325)',
    600: 'oklch(0.50 0.22 27.325)',
    700: 'oklch(0.42 0.20 27.325)',
    800: 'oklch(0.35 0.16 27.325)',
    900: 'oklch(0.25 0.10 27.325)',
  },

  info: {
    50: 'oklch(0.95 0.05 237)',
    100: 'oklch(0.90 0.10 237)',
    200: 'oklch(0.80 0.15 237)',
    300: 'oklch(0.70 0.20 237)',
    400: 'oklch(0.60 0.23 237)',
    500: 'oklch(0.52 0.24 237)',
    600: 'oklch(0.45 0.22 237)',
    700: 'oklch(0.38 0.18 237)',
    800: 'oklch(0.30 0.14 237)',
    900: 'oklch(0.22 0.10 237)',
  },

  // Accent Colors
  purple: {
    50: 'oklch(0.95 0.05 303.9)',
    100: 'oklch(0.90 0.10 303.9)',
    200: 'oklch(0.80 0.18 303.9)',
    300: 'oklch(0.70 0.24 303.9)',
    400: 'oklch(0.627 0.265 303.9)',
    500: 'oklch(0.55 0.26 303.9)',
    600: 'oklch(0.48 0.24 303.9)',
    700: 'oklch(0.40 0.20 303.9)',
    800: 'oklch(0.32 0.16 303.9)',
    900: 'oklch(0.24 0.10 303.9)',
  },

  teal: {
    50: 'oklch(0.95 0.05 162.48)',
    100: 'oklch(0.90 0.10 162.48)',
    200: 'oklch(0.80 0.15 162.48)',
    300: 'oklch(0.696 0.17 162.48)',
    400: 'oklch(0.60 0.18 162.48)',
    500: 'oklch(0.52 0.17 162.48)',
    600: 'oklch(0.45 0.16 162.48)',
    700: 'oklch(0.38 0.14 162.48)',
    800: 'oklch(0.30 0.11 162.48)',
    900: 'oklch(0.22 0.08 162.48)',
  },

  // Special Purpose Colors
  highlight: {
    yellow: 'oklch(0.852 0.199 91.936)',
    orange: 'oklch(0.78 0.189 70.08)',
    pink: 'oklch(0.85 0.15 16.439)',
    blue: 'oklch(0.85 0.12 237)',
    green: 'oklch(0.85 0.15 142.495)',
  },

  // Chart Colors
  chart: {
    1: 'oklch(0.646 0.222 41.116)',
    2: 'oklch(0.6 0.118 184.704)',
    3: 'oklch(0.398 0.07 227.392)',
    4: 'oklch(0.828 0.189 84.429)',
    5: 'oklch(0.769 0.188 70.08)',
    6: 'oklch(0.488 0.243 264.376)',
    7: 'oklch(0.696 0.17 162.48)',
    8: 'oklch(0.627 0.265 303.9)',
  },

  // Alpha Colors for overlays and transparency
  alpha: {
    black: {
      5: 'oklch(0 0 0 / 5%)',
      10: 'oklch(0 0 0 / 10%)',
      20: 'oklch(0 0 0 / 20%)',
      30: 'oklch(0 0 0 / 30%)',
      40: 'oklch(0 0 0 / 40%)',
      50: 'oklch(0 0 0 / 50%)',
      60: 'oklch(0 0 0 / 60%)',
      70: 'oklch(0 0 0 / 70%)',
      80: 'oklch(0 0 0 / 80%)',
      90: 'oklch(0 0 0 / 90%)',
    },
    white: {
      5: 'oklch(1 0 0 / 5%)',
      10: 'oklch(1 0 0 / 10%)',
      20: 'oklch(1 0 0 / 20%)',
      30: 'oklch(1 0 0 / 30%)',
      40: 'oklch(1 0 0 / 40%)',
      50: 'oklch(1 0 0 / 50%)',
      60: 'oklch(1 0 0 / 60%)',
      70: 'oklch(1 0 0 / 70%)',
      80: 'oklch(1 0 0 / 80%)',
      90: 'oklch(1 0 0 / 90%)',
    },
  },
} as const

// Semantic color mappings
export const semanticColors = {
  // Light mode
  light: {
    // Backgrounds
    background: {
      primary: colors.neutral[50],
      secondary: colors.neutral[100],
      tertiary: colors.neutral[200],
      inverse: colors.neutral[900],
    },
    // Surfaces
    surface: {
      primary: 'oklch(1 0 0)',
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
      elevated: 'oklch(1 0 0)',
    },
    // Foregrounds
    foreground: {
      primary: colors.neutral[900],
      secondary: colors.neutral[700],
      tertiary: colors.neutral[500],
      inverse: colors.neutral[50],
    },
    // Borders
    border: {
      primary: colors.neutral[200],
      secondary: colors.neutral[300],
      focus: colors.brand[500],
    },
    // Interactive states
    interactive: {
      primary: colors.brand[500],
      primaryHover: colors.brand[600],
      primaryActive: colors.brand[700],
      secondary: colors.neutral[100],
      secondaryHover: colors.neutral[200],
      secondaryActive: colors.neutral[300],
    },
  },
  // Dark mode
  dark: {
    // Backgrounds
    background: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[700],
      inverse: colors.neutral[50],
    },
    // Surfaces
    surface: {
      primary: colors.neutral[800],
      secondary: colors.neutral[700],
      tertiary: colors.neutral[600],
      elevated: colors.neutral[800],
    },
    // Foregrounds
    foreground: {
      primary: colors.neutral[50],
      secondary: colors.neutral[200],
      tertiary: colors.neutral[400],
      inverse: colors.neutral[900],
    },
    // Borders
    border: {
      primary: colors.alpha.white[10],
      secondary: colors.alpha.white[20],
      focus: colors.brand[400],
    },
    // Interactive states
    interactive: {
      primary: colors.brand[400],
      primaryHover: colors.brand[300],
      primaryActive: colors.brand[200],
      secondary: colors.neutral[700],
      secondaryHover: colors.neutral[600],
      secondaryActive: colors.neutral[500],
    },
  },
} as const

// Export type definitions
export type ColorScale = typeof colors
export type SemanticColors = typeof semanticColors
