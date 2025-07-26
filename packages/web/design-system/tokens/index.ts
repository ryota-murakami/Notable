// Notable Design System - Main Token Export

export * from './colors'
export * from './typography'
export * from './spacing'
export * from './motion'
export * from './effects'

// Re-export commonly used tokens for convenience
import { colors, semanticColors } from './colors'
import { typography } from './typography'
import {
  componentSpacing,
  iconSize,
  layout,
  radius,
  spacing,
  zIndex,
} from './spacing'
import { microInteractions, motion } from './motion'
import { effects } from './effects'

// Create a unified tokens object
export const tokens = {
  colors,
  semanticColors,
  typography,
  spacing,
  componentSpacing,
  layout,
  iconSize,
  radius,
  zIndex,
  motion,
  microInteractions,
  effects,
} as const

// Utility function to get CSS variables from tokens
export function getCSSVariables(theme: 'light' | 'dark' = 'light') {
  const semanticTheme = semanticColors[theme]

  return {
    // Color variables
    '--color-brand-50': colors.brand[50],
    '--color-brand-100': colors.brand[100],
    '--color-brand-200': colors.brand[200],
    '--color-brand-300': colors.brand[300],
    '--color-brand-400': colors.brand[400],
    '--color-brand-500': colors.brand[500],
    '--color-brand-600': colors.brand[600],
    '--color-brand-700': colors.brand[700],
    '--color-brand-800': colors.brand[800],
    '--color-brand-900': colors.brand[900],

    // Semantic colors
    '--color-background-primary': semanticTheme.background.primary,
    '--color-background-secondary': semanticTheme.background.secondary,
    '--color-background-tertiary': semanticTheme.background.tertiary,
    '--color-background-inverse': semanticTheme.background.inverse,

    '--color-surface-primary': semanticTheme.surface.primary,
    '--color-surface-secondary': semanticTheme.surface.secondary,
    '--color-surface-tertiary': semanticTheme.surface.tertiary,
    '--color-surface-elevated': semanticTheme.surface.elevated,

    '--color-foreground-primary': semanticTheme.foreground.primary,
    '--color-foreground-secondary': semanticTheme.foreground.secondary,
    '--color-foreground-tertiary': semanticTheme.foreground.tertiary,
    '--color-foreground-inverse': semanticTheme.foreground.inverse,

    '--color-border-primary': semanticTheme.border.primary,
    '--color-border-secondary': semanticTheme.border.secondary,
    '--color-border-focus': semanticTheme.border.focus,

    // Typography
    '--font-sans': typography.fontFamily.sans,
    '--font-serif': typography.fontFamily.serif,
    '--font-mono': typography.fontFamily.mono,

    // Spacing
    '--spacing-xs': spacing[2],
    '--spacing-sm': spacing[4],
    '--spacing-md': spacing[6],
    '--spacing-lg': spacing[8],
    '--spacing-xl': spacing[12],

    // Radius
    '--radius-sm': radius.sm,
    '--radius-base': radius.base,
    '--radius-md': radius.md,
    '--radius-lg': radius.lg,
    '--radius-xl': radius.xl,
    '--radius-2xl': radius['2xl'],
    '--radius-full': radius.full,

    // Motion
    '--duration-fast': motion.duration.fast,
    '--duration-normal': motion.duration.normal,
    '--duration-slow': motion.duration.slow,
    '--easing-standard': motion.easing.easeInOut,
    '--easing-emphasized': motion.easing.easeOutQuart,

    // Effects
    '--shadow-sm': effects.shadow.sm,
    '--shadow-base': effects.shadow.base,
    '--shadow-md': effects.shadow.md,
    '--shadow-lg': effects.shadow.lg,
    '--shadow-xl': effects.shadow.xl,
  }
}

// Type definitions for design tokens
export type Tokens = typeof tokens
export type Theme = 'light' | 'dark'
