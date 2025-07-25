// Notable Design System - Typography Tokens

export const typography = {
  // Font families
  fontFamily: {
    sans: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(', '),
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(
      ', '
    ),
    mono: [
      '"SF Mono"',
      'Monaco',
      '"Cascadia Code"',
      '"Roboto Mono"',
      'Menlo',
      'Consolas',
      '"Courier New"',
      'monospace',
    ].join(', '),
  },

  // Font sizes with line heights and letter spacing
  fontSize: {
    xs: {
      size: '0.75rem', // 12px
      lineHeight: '1rem', // 16px
      letterSpacing: '0.05em',
    },
    sm: {
      size: '0.875rem', // 14px
      lineHeight: '1.25rem', // 20px
      letterSpacing: '0.025em',
    },
    base: {
      size: '1rem', // 16px
      lineHeight: '1.5rem', // 24px
      letterSpacing: '0',
    },
    lg: {
      size: '1.125rem', // 18px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '-0.025em',
    },
    xl: {
      size: '1.25rem', // 20px
      lineHeight: '1.875rem', // 30px
      letterSpacing: '-0.025em',
    },
    '2xl': {
      size: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
      letterSpacing: '-0.025em',
    },
    '3xl': {
      size: '1.875rem', // 30px
      lineHeight: '2.25rem', // 36px
      letterSpacing: '-0.025em',
    },
    '4xl': {
      size: '2.25rem', // 36px
      lineHeight: '2.5rem', // 40px
      letterSpacing: '-0.05em',
    },
    '5xl': {
      size: '3rem', // 48px
      lineHeight: '1',
      letterSpacing: '-0.05em',
    },
    '6xl': {
      size: '3.75rem', // 60px
      lineHeight: '1',
      letterSpacing: '-0.05em',
    },
    '7xl': {
      size: '4.5rem', // 72px
      lineHeight: '1',
      letterSpacing: '-0.05em',
    },
    '8xl': {
      size: '6rem', // 96px
      lineHeight: '1',
      letterSpacing: '-0.05em',
    },
    '9xl': {
      size: '8rem', // 128px
      lineHeight: '1',
      letterSpacing: '-0.05em',
    },
  },

  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
  },

  // Text styles (pre-composed combinations)
  textStyles: {
    // Display styles
    displayLarge: {
      fontFamily: 'var(--font-sans)',
      fontSize: '3.75rem',
      lineHeight: '1',
      letterSpacing: '-0.05em',
      fontWeight: 800,
    },
    displayMedium: {
      fontFamily: 'var(--font-sans)',
      fontSize: '3rem',
      lineHeight: '1',
      letterSpacing: '-0.05em',
      fontWeight: 800,
    },
    displaySmall: {
      fontFamily: 'var(--font-sans)',
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      letterSpacing: '-0.05em',
      fontWeight: 700,
    },

    // Heading styles
    heading1: {
      fontFamily: 'var(--font-sans)',
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      letterSpacing: '-0.05em',
      fontWeight: 700,
    },
    heading2: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      letterSpacing: '-0.025em',
      fontWeight: 600,
    },
    heading3: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.5rem',
      lineHeight: '2rem',
      letterSpacing: '-0.025em',
      fontWeight: 600,
    },
    heading4: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.25rem',
      lineHeight: '1.875rem',
      letterSpacing: '-0.025em',
      fontWeight: 600,
    },
    heading5: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      letterSpacing: '-0.025em',
      fontWeight: 600,
    },
    heading6: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 600,
    },

    // Body styles
    bodyLarge: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    bodyMedium: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    bodySmall: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0',
      fontWeight: 400,
    },

    // UI styles
    buttonLarge: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.025em',
      fontWeight: 500,
    },
    buttonMedium: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.025em',
      fontWeight: 500,
    },
    buttonSmall: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.05em',
      fontWeight: 500,
    },

    // Label styles
    labelLarge: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0.025em',
      fontWeight: 500,
    },
    labelMedium: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.05em',
      fontWeight: 500,
    },
    labelSmall: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.625rem',
      lineHeight: '0.75rem',
      letterSpacing: '0.05em',
      fontWeight: 500,
    },

    // Code styles
    codeLarge: {
      fontFamily: 'var(--font-mono)',
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    codeMedium: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      letterSpacing: '0',
      fontWeight: 400,
    },
    codeSmall: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0',
      fontWeight: 400,
    },

    // Caption styles
    caption: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.025em',
      fontWeight: 400,
    },
    overline: {
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.1em',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
} as const

// Export type definitions
export type Typography = typeof typography
export type TextStyle = keyof typeof typography.textStyles
