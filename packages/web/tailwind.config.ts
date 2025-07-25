import type { Config } from 'tailwindcss'
import {
  colors,
  typography,
  spacing,
  radius,
  motion,
  effects,
} from './design-system/tokens'

// Tailwind CSS v4.1 configuration
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './store/**/*.{ts,tsx}',
    './design-system/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Extended color palette from design tokens
      colors: {
        brand: colors.brand,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
        purple: colors.purple,
        teal: colors.teal,
      },
      // Typography extensions
      fontFamily: {
        sans: typography.fontFamily.sans,
        serif: typography.fontFamily.serif,
        mono: typography.fontFamily.mono,
      },
      fontSize: Object.entries(typography.fontSize).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: [
            value.size,
            {
              lineHeight: value.lineHeight,
              letterSpacing: value.letterSpacing,
            },
          ],
        }),
        {}
      ),
      // Motion & animations
      transitionDuration: motion.duration,
      transitionTimingFunction: motion.easing,
      animation: motion.animation,
      keyframes: motion.keyframes,
      // Effects
      boxShadow: {
        ...effects.shadow,
        ...effects.elevation,
      },
      backdropBlur: effects.blur,
      blur: effects.blur,
      // Additional theme extensions now integrated from design tokens
      // Most configuration is enhanced via app/tailwind.css
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
