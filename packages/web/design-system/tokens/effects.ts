// Notable Design System - Effects & Shadows Tokens

export const effects = {
  // Box shadows
  shadow: {
    none: 'none',
    // Subtle shadows
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    // Standard shadows
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '2xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    innerMd: 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    // Colored shadows
    brand:
      '0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -4px rgba(99, 102, 241, 0.1)',
    success:
      '0 10px 15px -3px rgba(34, 197, 94, 0.2), 0 4px 6px -4px rgba(34, 197, 94, 0.1)',
    error:
      '0 10px 15px -3px rgba(239, 68, 68, 0.2), 0 4px 6px -4px rgba(239, 68, 68, 0.1)',
  },

  // Elevation system (Material Design inspired)
  elevation: {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
  },

  // Dark mode shadows (lighter shadows for dark backgrounds)
  darkShadow: {
    xs: '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
    sm: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px -1px rgba(255, 255, 255, 0.1)',
    base: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)',
    md: '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)',
    lg: '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',
  },

  // Blur effects
  blur: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px',
  },

  // Backdrop filters
  backdrop: {
    blur: {
      none: 'blur(0)',
      sm: 'blur(4px)',
      base: 'blur(8px)',
      md: 'blur(12px)',
      lg: 'blur(16px)',
      xl: 'blur(24px)',
    },
    brightness: {
      50: 'brightness(0.5)',
      75: 'brightness(0.75)',
      90: 'brightness(0.9)',
      95: 'brightness(0.95)',
      100: 'brightness(1)',
      105: 'brightness(1.05)',
      110: 'brightness(1.1)',
      125: 'brightness(1.25)',
      150: 'brightness(1.5)',
    },
    contrast: {
      50: 'contrast(0.5)',
      75: 'contrast(0.75)',
      100: 'contrast(1)',
      125: 'contrast(1.25)',
      150: 'contrast(1.5)',
      200: 'contrast(2)',
    },
    saturate: {
      0: 'saturate(0)',
      50: 'saturate(0.5)',
      100: 'saturate(1)',
      150: 'saturate(1.5)',
      200: 'saturate(2)',
    },
  },

  // Gradients
  gradient: {
    // Linear gradients
    toBr: 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    toR: 'linear-gradient(to right, var(--tw-gradient-stops))',
    toTr: 'linear-gradient(to top right, var(--tw-gradient-stops))',
    toT: 'linear-gradient(to top, var(--tw-gradient-stops))',
    toTl: 'linear-gradient(to top left, var(--tw-gradient-stops))',
    toL: 'linear-gradient(to left, var(--tw-gradient-stops))',
    toBl: 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
    toB: 'linear-gradient(to bottom, var(--tw-gradient-stops))',

    // Radial gradients
    radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
    radialTl: 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
    radialTr: 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
    radialBl:
      'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
    radialBr:
      'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',

    // Conic gradients
    conic: 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },

  // Preset gradients
  presetGradients: {
    // Brand gradients
    brand:
      'linear-gradient(135deg, oklch(0.623 0.214 259.815) 0%, oklch(0.707 0.165 254.624) 100%)',
    brandSubtle:
      'linear-gradient(135deg, oklch(0.95 0.05 259.815) 0%, oklch(0.90 0.10 259.815) 100%)',

    // Semantic gradients
    success:
      'linear-gradient(135deg, oklch(0.596 0.189 142.495) 0%, oklch(0.52 0.18 142.495) 100%)',
    warning:
      'linear-gradient(135deg, oklch(0.828 0.189 84.429) 0%, oklch(0.769 0.188 70.08) 100%)',
    error:
      'linear-gradient(135deg, oklch(0.577 0.245 27.325) 0%, oklch(0.50 0.22 27.325) 100%)',
    info: 'linear-gradient(135deg, oklch(0.52 0.24 237) 0%, oklch(0.45 0.22 237) 100%)',

    // Neutral gradients
    neutral:
      'linear-gradient(135deg, oklch(0.87 0 0) 0%, oklch(0.708 0 0) 100%)',
    dark: 'linear-gradient(135deg, oklch(0.269 0 0) 0%, oklch(0.145 0 0) 100%)',

    // Special effect gradients
    sunrise:
      'linear-gradient(135deg, oklch(0.95 0.15 60) 0%, oklch(0.85 0.25 25) 50%, oklch(0.75 0.20 350) 100%)',
    sunset:
      'linear-gradient(135deg, oklch(0.85 0.20 45) 0%, oklch(0.75 0.25 20) 50%, oklch(0.65 0.20 290) 100%)',
    ocean:
      'linear-gradient(135deg, oklch(0.75 0.15 220) 0%, oklch(0.55 0.20 200) 100%)',
    forest:
      'linear-gradient(135deg, oklch(0.65 0.20 140) 0%, oklch(0.45 0.18 120) 100%)',

    // Overlay gradients
    lightOverlay:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
    darkOverlay:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
  },

  // Text shadows
  textShadow: {
    none: 'none',
    sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
    base: '0 2px 4px rgba(0, 0, 0, 0.25)',
    md: '0 4px 6px rgba(0, 0, 0, 0.25)',
    lg: '0 8px 10px rgba(0, 0, 0, 0.25)',
    xl: '0 12px 16px rgba(0, 0, 0, 0.25)',
  },

  // Glow effects
  glow: {
    sm: '0 0 10px rgba(99, 102, 241, 0.5)',
    base: '0 0 20px rgba(99, 102, 241, 0.5)',
    md: '0 0 30px rgba(99, 102, 241, 0.5)',
    lg: '0 0 40px rgba(99, 102, 241, 0.5)',
    xl: '0 0 50px rgba(99, 102, 241, 0.5)',
  },

  // Filters
  filter: {
    // Brightness
    brightness: {
      0: 'brightness(0)',
      50: 'brightness(0.5)',
      75: 'brightness(0.75)',
      90: 'brightness(0.9)',
      95: 'brightness(0.95)',
      100: 'brightness(1)',
      105: 'brightness(1.05)',
      110: 'brightness(1.1)',
      125: 'brightness(1.25)',
      150: 'brightness(1.5)',
      200: 'brightness(2)',
    },
    // Contrast
    contrast: {
      0: 'contrast(0)',
      50: 'contrast(0.5)',
      75: 'contrast(0.75)',
      100: 'contrast(1)',
      125: 'contrast(1.25)',
      150: 'contrast(1.5)',
      200: 'contrast(2)',
    },
    // Grayscale
    grayscale: {
      0: 'grayscale(0)',
      100: 'grayscale(1)',
    },
    // Hue rotate
    hueRotate: {
      0: 'hue-rotate(0deg)',
      15: 'hue-rotate(15deg)',
      30: 'hue-rotate(30deg)',
      60: 'hue-rotate(60deg)',
      90: 'hue-rotate(90deg)',
      180: 'hue-rotate(180deg)',
    },
    // Invert
    invert: {
      0: 'invert(0)',
      100: 'invert(1)',
    },
    // Saturate
    saturate: {
      0: 'saturate(0)',
      50: 'saturate(0.5)',
      100: 'saturate(1)',
      150: 'saturate(1.5)',
      200: 'saturate(2)',
    },
    // Sepia
    sepia: {
      0: 'sepia(0)',
      100: 'sepia(1)',
    },
  },
} as const

// Export type definitions
export type Effects = typeof effects
