'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion, type MotionProps } from 'framer-motion'
import { Spinner } from '../../components/ui/spinner'

export interface CardProps extends Omit<MotionProps, 'children'> {
  children?: React.ReactNode
  variant?:
    | 'default'
    | 'elevated'
    | 'bordered'
    | 'ghost'
    | 'gradient'
    | 'glass'
    | 'neumorphism'
    | 'premium'
  hover?: 'none' | 'lift' | 'glow' | 'scale' | 'tilt' | 'float' | 'rotate'
  interactive?: boolean
  loading?: boolean
  blur?: boolean
  status?: 'default' | 'success' | 'warning' | 'error' | 'info'
  selectable?: boolean
  selected?: boolean
  collapsible?: boolean
  collapsed?: boolean
  onToggle?: () => void
  className?: string
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
      status = 'default',
      selectable = false,
      selected = false,
      collapsible = false,
      collapsed = false,
      onToggle,
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
      elevated: 'bg-card text-card-foreground shadow-lg shadow-black/5',
      bordered: 'bg-card text-card-foreground border-2 border-border',
      ghost: 'bg-transparent',
      gradient:
        'bg-gradient-to-br from-card via-card to-accent/10 text-card-foreground border border-border/50',
      glass:
        'bg-white/10 backdrop-blur-md border border-white/20 text-card-foreground shadow-xl',
      neumorphism: 'bg-card text-card-foreground shadow-neumorphism border-0',
      premium:
        'bg-gradient-to-br from-card via-white/5 to-accent/5 text-card-foreground border border-border/30 shadow-premium',
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
      float: {
        y: -8,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' },
      },
      rotate: {
        rotateY: 5,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeOut' },
      },
      tilt: {},
    }

    const statusClasses = {
      default: '',
      success: 'border-l-4 border-l-success',
      warning: 'border-l-4 border-l-warning',
      error: 'border-l-4 border-l-destructive',
      info: 'border-l-4 border-l-info',
    }

    const handleCardClick = () => {
      if (collapsible && onToggle) {
        onToggle()
      }
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl overflow-hidden relative',
          variantClasses[variant],
          statusClasses[status],
          interactive && 'cursor-pointer transition-all',
          selectable && 'cursor-pointer',
          selected && 'ring-2 ring-primary ring-offset-2',
          blur && 'backdrop-blur-md bg-opacity-80',
          loading && 'animate-pulse',
          collapsible && 'cursor-pointer',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        whileHover={interactive && hover !== 'none' ? hoverEffects[hover] : {}}
        style={hover === 'tilt' ? tiltStyle : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          height: collapsible && collapsed ? 'auto' : 'auto',
        }}
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

        {/* Status indicator */}
        {status !== 'default' && (
          <motion.div
            className={cn('absolute top-2 right-2 w-3 h-3 rounded-full', {
              'bg-success': status === 'success',
              'bg-warning': status === 'warning',
              'bg-destructive': status === 'error',
              'bg-info': status === 'info',
            })}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        )}

        {/* Selection indicator */}
        {selectable && selected && (
          <motion.div
            className='absolute top-2 left-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className='w-3 h-3 text-white'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </motion.div>
        )}

        {/* Collapsible content */}
        {collapsible ? (
          <motion.div
            initial={false}
            animate={{ height: collapsed ? 0 : 'auto' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
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
  // eslint-disable-next-line jsx-a11y/heading-has-content
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

// Progress card with animated progress bar
interface ProgressCardProps extends CardProps {
  title: string
  description?: string
  progress: number
  showPercentage?: boolean
  color?: 'primary' | 'success' | 'warning' | 'error'
}

export function ProgressCard({
  title,
  description,
  progress,
  showPercentage = true,
  color = 'primary',
  className,
  ...props
}: ProgressCardProps) {
  const colorClasses = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-destructive',
  }

  return (
    <Card variant='elevated' className={className} {...props}>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg'>{title}</CardTitle>
          {showPercentage && (
            <motion.span
              className='text-sm font-medium text-muted-foreground'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {Math.round(progress)}%
            </motion.span>
          )}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className='w-full bg-secondary rounded-full h-2 overflow-hidden'>
          <motion.div
            className={cn('h-2 rounded-full', colorClasses[color])}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </CardContent>
    </Card>
  )
}

// Notification card with dismiss functionality
interface NotificationCardProps extends CardProps {
  title: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
}

export function NotificationCard({
  title,
  message,
  type = 'info',
  dismissible = true,
  onDismiss,
  icon,
  className,
  ...props
}: NotificationCardProps) {
  const typeStyles = {
    info: 'border-l-info bg-info/5',
    success: 'border-l-success bg-success/5',
    warning: 'border-l-warning bg-warning/5',
    error: 'border-l-destructive bg-destructive/5',
  }

  return (
    <Card
      variant='bordered'
      className={cn('border-l-4', typeStyles[type], className)}
      {...props}
    >
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex items-start gap-3'>
            {icon && (
              <motion.div
                className='flex-shrink-0 mt-0.5'
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {icon}
              </motion.div>
            )}
            <div>
              <CardTitle className='text-base'>{title}</CardTitle>
              <CardDescription className='mt-1'>{message}</CardDescription>
            </div>
          </div>
          {dismissible && (
            <motion.button
              onClick={onDismiss}
              className='flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1 rounded'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </motion.button>
          )}
        </div>
      </CardHeader>
    </Card>
  )
}

// Action card with button actions
interface ActionCardProps extends CardProps {
  title: string
  description: string
  icon?: React.ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
    loading?: boolean
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
}

export function ActionCard({
  title,
  description,
  icon,
  primaryAction,
  secondaryAction,
  className,
  ...props
}: ActionCardProps) {
  return (
    <Card
      variant='elevated'
      hover='lift'
      interactive
      className={className}
      {...props}
    >
      <CardHeader>
        {icon && (
          <motion.div
            className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className='text-primary'>{icon}</div>
          </motion.div>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {(primaryAction || secondaryAction) && (
        <CardFooter className='gap-2'>
          {primaryAction && (
            <motion.button
              onClick={primaryAction.onClick}
              disabled={primaryAction.loading}
              className='px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:bg-primary/90 disabled:opacity-50'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {primaryAction.loading ? (
                <span className='flex items-center gap-2'>
                  <Spinner size='1' />
                  <span>Loading...</span>
                </span>
              ) : (
                primaryAction.label
              )}
            </motion.button>
          )}
          {secondaryAction && (
            <motion.button
              onClick={secondaryAction.onClick}
              className='px-4 py-2 text-muted-foreground hover:text-foreground transition-colors'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {secondaryAction.label}
            </motion.button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
