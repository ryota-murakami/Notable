// Notable Design System - Theme Utilities

import { tokens } from '../tokens'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function to merge class names with Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get semantic color value based on theme
export function getSemanticColor(
  colorPath: string,
  theme: 'light' | 'dark' = 'light'
): string {
  const pathParts = colorPath.split('.')
  let value: any = tokens.semanticColors[theme]

  for (const part of pathParts) {
    value = value?.[part]
    if (!value) break
  }

  return value || ''
}

// Apply theme-aware styles
export function themed(
  lightStyles: string | string[],
  darkStyles: string | string[]
): string {
  const light = Array.isArray(lightStyles) ? lightStyles.join(' ') : lightStyles
  const dark = Array.isArray(darkStyles) ? darkStyles.join(' ') : darkStyles

  return cn(light, `dark:${dark}`)
}

// Generate responsive styles
export function responsive(
  base: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
  xxl?: string
): string {
  return cn(
    base,
    sm && `sm:${sm}`,
    md && `md:${md}`,
    lg && `lg:${lg}`,
    xl && `xl:${xl}`,
    xxl && `2xl:${xxl}`
  )
}

// Apply hover state with micro-interactions
export function hoverEffect(
  effect: keyof typeof tokens.microInteractions.hover
): string {
  const hoverStyles = tokens.microInteractions.hover[effect]
  return Object.entries(hoverStyles)
    .map(
      ([prop, value]) =>
        `hover:${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}-[${value}]`
    )
    .join(' ')
}

// Apply focus state
export function focusEffect(
  effect: keyof typeof tokens.microInteractions.focus = 'ring'
): string {
  const focusStyles = tokens.microInteractions.focus[effect]
  return Object.entries(focusStyles)
    .map(
      ([prop, value]) =>
        `focus:${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}-[${value}]`
    )
    .join(' ')
}

// Apply active state
export function activeEffect(
  effect: keyof typeof tokens.microInteractions.active
): string {
  const activeStyles = tokens.microInteractions.active[effect]
  return Object.entries(activeStyles)
    .map(
      ([prop, value]) =>
        `active:${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}-[${value}]`
    )
    .join(' ')
}

// Create a button variant
export function buttonVariant(
  variant: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
): string {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-all',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'active:scale-[0.98]'
  )

  const sizeStyles = {
    xs: 'h-7 px-2 text-xs rounded-md gap-1',
    sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
    md: 'h-9 px-4 text-sm rounded-lg gap-2',
    lg: 'h-10 px-6 text-base rounded-lg gap-2',
    xl: 'h-12 px-8 text-lg rounded-xl gap-3',
  }

  const variantStyles = {
    primary: cn(
      'bg-primary text-primary-foreground shadow-sm',
      'hover:bg-primary/90 hover:shadow-md',
      'focus-visible:ring-primary'
    ),
    secondary: cn(
      'bg-secondary text-secondary-foreground shadow-sm',
      'hover:bg-secondary/80 hover:shadow-md',
      'focus-visible:ring-secondary'
    ),
    destructive: cn(
      'bg-destructive text-destructive-foreground shadow-sm',
      'hover:bg-destructive/90 hover:shadow-md',
      'focus-visible:ring-destructive'
    ),
    ghost: cn(
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:ring-accent'
    ),
    link: cn(
      'text-primary underline-offset-4',
      'hover:underline hover:text-primary/80',
      'focus-visible:ring-primary'
    ),
  }

  return cn(baseStyles, sizeStyles[size], variantStyles[variant])
}

// Create a card variant
export function cardVariant(
  variant: 'default' | 'elevated' | 'bordered' | 'ghost' = 'default',
  interactive: boolean = false
): string {
  const baseStyles = cn(
    'rounded-xl bg-card text-card-foreground',
    interactive && 'transition-all cursor-pointer'
  )

  const variantStyles = {
    default: cn(
      'border border-border',
      interactive && 'hover:border-border/60 hover:shadow-md'
    ),
    elevated: cn(
      'shadow-md',
      interactive && 'hover:shadow-lg hover:-translate-y-0.5'
    ),
    bordered: cn(
      'border-2 border-border',
      interactive && 'hover:border-primary/50'
    ),
    ghost: cn(interactive && 'hover:bg-accent hover:text-accent-foreground'),
  }

  return cn(baseStyles, variantStyles[variant])
}

// Create an input variant
export function inputVariant(
  variant: 'default' | 'filled' | 'flushed' = 'default',
  size: 'sm' | 'md' | 'lg' = 'md'
): string {
  const baseStyles = cn(
    'flex w-full transition-colors file:border-0 file:bg-transparent',
    'file:text-sm file:font-medium placeholder:text-muted-foreground',
    'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
  )

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-9 px-3 text-sm rounded-lg',
    lg: 'h-10 px-4 text-base rounded-lg',
  }

  const variantStyles = {
    default: cn(
      'border border-input bg-background',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
    ),
    filled: cn(
      'border-0 bg-muted',
      'focus-visible:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring'
    ),
    flushed: cn(
      'border-0 border-b-2 border-input rounded-none px-0',
      'focus-visible:border-primary'
    ),
  }

  return cn(baseStyles, sizeStyles[size], variantStyles[variant])
}

// Animation preset utility
export function animate(
  animation: keyof typeof tokens.motion.animation,
  options?: {
    delay?: string
    duration?: string
    iterationCount?: string | number
  }
): string {
  const animationValue = tokens.motion.animation[animation]

  if (options) {
    const styles: string[] = [`animate-[${animationValue}]`]

    if (options.delay) {
      styles.push(`animation-delay-[${options.delay}]`)
    }
    if (options.duration) {
      styles.push(`animation-duration-[${options.duration}]`)
    }
    if (options.iterationCount) {
      styles.push(`animation-iteration-count-[${options.iterationCount}]`)
    }

    return cn(styles)
  }

  return `animate-[${animationValue}]`
}

// Gradient utility
export function gradient(
  type: 'linear' | 'radial' | 'conic',
  from: string,
  via?: string,
  to?: string,
  direction?: string
): string {
  const colors = [`from-${from}`, via && `via-${via}`, to && `to-${to}`]
    .filter(Boolean)
    .join(' ')

  const gradientType = {
    linear: direction ? `bg-gradient-${direction}` : 'bg-gradient-to-r',
    radial: 'bg-gradient-radial',
    conic: 'bg-gradient-conic',
  }

  return cn(gradientType[type], colors)
}

// Export all utilities
export const themeUtils = {
  cn,
  getSemanticColor,
  themed,
  responsive,
  hoverEffect,
  focusEffect,
  activeEffect,
  buttonVariant,
  cardVariant,
  inputVariant,
  animate,
  gradient,
}
