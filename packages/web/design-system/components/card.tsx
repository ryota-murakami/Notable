'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion, type MotionProps } from 'framer-motion'

export interface CardProps
  extends Omit<
      React.HTMLAttributes<HTMLDivElement>,
      | 'onDrag'
      | 'onDragEnd'
      | 'onDragStart'
      | 'onAnimationStart'
      | 'onAnimationEnd'
    >,
    Omit<MotionProps, 'children'> {
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost' | 'gradient'
  hover?: 'none' | 'lift' | 'glow' | 'scale' | 'tilt'
  interactive?: boolean
  loading?: boolean
  blur?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      hover = 'lift',
      interactive = false,
      loading = false,
      blur = false,
      children,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [tiltStyle, setTiltStyle] = React.useState({})

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hover !== 'tilt') return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      })
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      if (hover === 'tilt') {
        setTiltStyle({})
      }
    }

    const variantClasses = {
      default: 'bg-card text-card-foreground border border-border',
      elevated: 'bg-card text-card-foreground shadow-lg',
      bordered: 'bg-card text-card-foreground border-2 border-border',
      ghost: 'bg-transparent',
      gradient:
        'bg-gradient-to-br from-card via-card to-accent/10 text-card-foreground border border-border/50',
    }

    const hoverEffects = {
      none: {},
      lift: {
        y: -4,
        transition: { duration: 0.2, ease: 'easeOut' },
      },
      glow: {
        boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
        transition: { duration: 0.3, ease: 'easeOut' },
      },
      scale: {
        scale: 1.02,
        transition: { duration: 0.2, ease: 'easeOut' },
      },
      tilt: {},
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden',
          variantClasses[variant],
          interactive && 'cursor-pointer transition-all',
          blur && 'backdrop-blur-md bg-opacity-80',
          loading && 'animate-pulse',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={interactive && hover !== 'none' ? hoverEffects[hover] : {}}
        style={hover === 'tilt' ? tiltStyle : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        {...props}
      >
        {/* Gradient overlay for hover effect */}
        {interactive && hover === 'glow' && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Loading skeleton overlay */}
        {loading && (
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer' />
        )}

        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

// Feature card with icon
interface FeatureCardProps extends CardProps {
  icon?: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      variant='bordered'
      hover='lift'
      interactive
      className={cn('group', className)}
      {...props}
    >
      <CardHeader>
        {icon && (
          <motion.div
            className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className='text-primary'>{icon}</div>
          </motion.div>
        )}
        <CardTitle className='group-hover:text-primary transition-colors'>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

// Metric card with animated number
interface MetricCardProps extends CardProps {
  label: string
  value: number | string
  change?: number
  icon?: React.ReactNode
}

export function MetricCard({
  label,
  value,
  change,
  icon,
  className,
  ...props
}: MetricCardProps) {
  const isPositive = change && change > 0

  return (
    <Card variant='elevated' className={className} {...props}>
      <CardHeader className='flex flex-row items-center justify-between pb-2'>
        <p className='text-sm font-medium text-muted-foreground'>{label}</p>
        {icon && <div className='text-muted-foreground'>{icon}</div>}
      </CardHeader>
      <CardContent>
        <motion.div
          className='text-2xl font-bold'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {value}
        </motion.div>
        {change !== undefined && (
          <motion.p
            className={cn(
              'text-xs mt-1',
              isPositive ? 'text-success' : 'text-destructive'
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span>{isPositive ? '↑' : '↓'}</span>
            {Math.abs(change)}% from last month
          </motion.p>
        )}
      </CardContent>
    </Card>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
