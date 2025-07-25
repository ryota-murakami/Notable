// Notable Design System - Motion & Animation Tokens

export const motion = {
  // Duration scales
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    slowest: '500ms',
  },

  // Timing functions (easing)
  easing: {
    // Standard easing
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Expressive easing
    easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
    easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
    easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',

    // Bounce easing
    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',

    // Spring easing
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    springSmooth: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Transitions
  transition: {
    // Base transitions
    none: 'none',
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Property-specific transitions
    colors:
      'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), color 200ms cubic-bezier(0.4, 0, 0.2, 1), fill 200ms cubic-bezier(0.4, 0, 0.2, 1), stroke 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Common combinations
    fade: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    slide: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    scale: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Interactive transitions
    button:
      'background-color 100ms cubic-bezier(0.4, 0, 0.2, 1), color 100ms cubic-bezier(0.4, 0, 0.2, 1), border-color 100ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    link: 'color 100ms cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    input:
      'border-color 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Keyframe animations
  keyframes: {
    // Fade animations
    fadeIn: {
      from: { opacity: '0' },
      to: { opacity: '1' },
    },
    fadeOut: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },

    // Slide animations
    slideInFromTop: {
      from: { transform: 'translateY(-100%)' },
      to: { transform: 'translateY(0)' },
    },
    slideInFromBottom: {
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0)' },
    },
    slideInFromLeft: {
      from: { transform: 'translateX(-100%)' },
      to: { transform: 'translateX(0)' },
    },
    slideInFromRight: {
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(0)' },
    },

    // Scale animations
    scaleIn: {
      from: { transform: 'scale(0.95)', opacity: '0' },
      to: { transform: 'scale(1)', opacity: '1' },
    },
    scaleOut: {
      from: { transform: 'scale(1)', opacity: '1' },
      to: { transform: 'scale(0.95)', opacity: '0' },
    },

    // Rotate animations
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },

    // Pulse animation
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },

    // Bounce animation
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      },
      '50%': {
        transform: 'translateY(0)',
        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },

    // Shake animation
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
    },

    // Skeleton loading
    shimmer: {
      '0%': {
        backgroundPosition: '-200% 0',
      },
      '100%': {
        backgroundPosition: '200% 0',
      },
    },

    // Accordion animations
    accordionDown: {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    accordionUp: {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
    },
  },

  // Animation utilities
  animation: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
    shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',

    // Fade animations
    fadeIn: 'fadeIn 200ms ease-out',
    fadeOut: 'fadeOut 200ms ease-in',

    // Slide animations
    slideInFromTop: 'slideInFromTop 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slideInFromBottom: 'slideInFromBottom 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slideInFromLeft: 'slideInFromLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slideInFromRight: 'slideInFromRight 300ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Scale animations
    scaleIn: 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    scaleOut: 'scaleOut 200ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Loading animations
    shimmer: 'shimmer 2s linear infinite',

    // Accordion animations
    accordionDown: 'accordionDown 200ms ease-out',
    accordionUp: 'accordionUp 200ms ease-out',
  },
} as const

// Micro-interaction presets
export const microInteractions = {
  hover: {
    scale: {
      transform: 'scale(1.05)',
      transition: motion.transition.transform,
    },
    lift: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
    },
    glow: {
      boxShadow: '0 0 0 2px var(--color-primary)',
      transition: motion.transition.shadow,
    },
  },

  active: {
    scale: {
      transform: 'scale(0.98)',
      transition: 'transform 100ms ease-out',
    },
    press: {
      transform: 'translateY(1px)',
      transition: 'transform 100ms ease-out',
    },
  },

  focus: {
    ring: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: '0 0 0 2px var(--color-ring)',
      transition: motion.transition.shadow,
    },
  },
} as const

// Export type definitions
export type Motion = typeof motion
export type MicroInteractions = typeof microInteractions
