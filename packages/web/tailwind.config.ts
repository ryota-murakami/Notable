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
      animation: {
        ...motion.animation,
        // Enhanced skeleton animations for better perceived performance
        shimmer: 'shimmer 2s linear infinite',
        wave: 'wave 1.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        ...motion.keyframes,
        // Performance-optimized skeleton animations
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // Effects
      boxShadow: {
        ...effects.shadow,
        ...effects.elevation,
      },
      backdropBlur: effects.blur,
      blur: effects.blur,
      // Background gradients for skeleton animations
      backgroundImage: {
        shimmer:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        'shimmer-dark':
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      // Additional theme extensions now integrated from design tokens
      // Most configuration is enhanced via app/tailwind.css
    },
  },
  plugins: [typographyPlugin],
} satisfies Config

export default config
