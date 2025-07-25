'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion, type MotionProps } from 'framer-motion'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag'>,
    Omit<MotionProps, 'children'> {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'gradient'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  ripple?: boolean
}

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      ripple = true,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      Array<{ x: number; y: number; id: number }>
    >([])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !disabled && !loading) {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const id = Date.now()

        setRipples((prev) => [...prev, { x, y, id }])

        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
        }, 600)
      }

      onClick?.(e)
    }

    const sizeClasses = {
      xs: 'h-7 px-2.5 text-xs gap-1',
      sm: 'h-8 px-3 text-sm gap-1.5',
      md: 'h-9 px-4 text-sm gap-2',
      lg: 'h-10 px-6 text-base gap-2',
      xl: 'h-12 px-8 text-lg gap-3',
    }

    const variantClasses = {
      default: cn(
        'bg-primary text-primary-foreground shadow-sm',
        'hover:bg-primary/90 hover:shadow-md',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      primary: cn(
        'bg-brand-500 text-white shadow-sm',
        'hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/20',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      secondary: cn(
        'bg-secondary text-secondary-foreground shadow-sm',
        'hover:bg-secondary/80 hover:shadow-md',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      destructive: cn(
        'bg-destructive text-destructive-foreground shadow-sm',
        'hover:bg-destructive/90 hover:shadow-md hover:shadow-destructive/20',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      ghost: cn(
        'hover:bg-accent hover:text-accent-foreground',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      link: cn(
        'text-primary underline-offset-4',
        'hover:underline hover:text-primary/80',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
      gradient: cn(
        'bg-gradient-to-r from-brand-500 to-purple-500 text-white shadow-sm',
        'hover:shadow-lg hover:shadow-brand-500/20',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none'
      ),
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-medium transition-all overflow-hidden',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'rounded-lg',
          sizeClasses[size],
          variantClasses[variant],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        {...props}
      >
        {/* Ripple effect */}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className='absolute rounded-full bg-white/30 pointer-events-none'
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}

        {/* Loading spinner */}
        {loading && (
          <motion.svg
            className={cn(
              'animate-spin h-4 w-4',
              children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''
            )}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
          </motion.svg>
        )}

        {/* Icon */}
        {icon && !loading && iconPosition === 'left' && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}

        {/* Children */}
        {children && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {children}
          </motion.span>
        )}

        {/* Icon on right */}
        {icon && !loading && iconPosition === 'right' && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.button>
    )
  }
)

ButtonComponent.displayName = 'Button'

// Export with motion capabilities
export const Button = motion(ButtonComponent)
