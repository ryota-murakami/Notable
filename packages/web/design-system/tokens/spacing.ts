// Notable Design System - Spacing Tokens

export const spacing = {
  // Base spacing scale (4px base)
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 288px
  80: '20rem', // 320px
  96: '24rem', // 384px
} as const

// Component-specific spacing
export const componentSpacing = {
  // Button padding
  button: {
    xs: {
      x: spacing[2],
      y: spacing[1],
    },
    sm: {
      x: spacing[3],
      y: spacing[1.5],
    },
    md: {
      x: spacing[4],
      y: spacing[2],
    },
    lg: {
      x: spacing[6],
      y: spacing[3],
    },
    xl: {
      x: spacing[8],
      y: spacing[4],
    },
  },

  // Input padding
  input: {
    sm: {
      x: spacing[3],
      y: spacing[1.5],
    },
    md: {
      x: spacing[3],
      y: spacing[2],
    },
    lg: {
      x: spacing[4],
      y: spacing[3],
    },
  },

  // Card padding
  card: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  },

  // Modal padding
  modal: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  },

  // List spacing
  list: {
    gap: spacing[2],
    itemPadding: spacing[3],
  },

  // Grid gaps
  grid: {
    xs: spacing[2],
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
    xl: spacing[12],
  },

  // Stack spacing
  stack: {
    xs: spacing[1],
    sm: spacing[2],
    md: spacing[4],
    lg: spacing[6],
    xl: spacing[8],
  },

  // Section spacing
  section: {
    sm: spacing[8],
    md: spacing[12],
    lg: spacing[16],
    xl: spacing[24],
  },
} as const

// Layout spacing
export const layout = {
  // Container padding
  container: {
    padding: {
      mobile: spacing[4],
      tablet: spacing[6],
      desktop: spacing[8],
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      full: '100%',
    },
  },

  // Page margins
  page: {
    margin: {
      mobile: spacing[4],
      tablet: spacing[8],
      desktop: spacing[12],
    },
  },

  // Sidebar width
  sidebar: {
    width: {
      collapsed: '4rem',
      narrow: '240px',
      default: '280px',
      wide: '320px',
    },
  },

  // Header height
  header: {
    height: {
      mobile: '56px',
      desktop: '64px',
    },
  },

  // Content area
  content: {
    maxWidth: {
      prose: '65ch',
      article: '720px',
      wide: '1200px',
    },
  },
} as const

// Icon sizes
export const iconSize = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
} as const

// Border radius
export const radius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const

// Z-index scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  top: 90,
} as const

// Export type definitions
export type Spacing = typeof spacing
export type ComponentSpacing = typeof componentSpacing
export type Layout = typeof layout
export type IconSize = typeof iconSize
export type Radius = typeof radius
export type ZIndex = typeof zIndex
