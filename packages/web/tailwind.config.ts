import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import { colors, effects, motion, typography } from './design-system/tokens'

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
        // Design system theme colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        'border-color': 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        brand: 'var(--brand)',
        highlight: 'var(--highlight)',
        success: 'var(--success)',
        'success-foreground': 'var(--success-foreground)',
        warning: 'var(--warning)',
        'warning-foreground': 'var(--warning-foreground)',
        info: 'var(--info)',
        'info-foreground': 'var(--info-foreground)',
        // Static colors from design tokens
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
  plugins: [typographyPlugin],
} satisfies Config

export default config
