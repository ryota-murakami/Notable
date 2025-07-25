'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion } from 'framer-motion'

// Spinner Loading
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function Spinner({
  size = 'md',
  color = 'primary',
  className,
}: SpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  }

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white',
  }

  return (
    <svg
      className={cn(
        'animate-spin',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
    </svg>
  )
}

// Dots Loading
interface DotsProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'white'
  className?: string
}

export function Dots({ size = 'md', color = 'primary', className }: DotsProps) {
  const sizeClasses = {
    sm: 'h-2 w-2',
    md: 'h-3 w-3',
    lg: 'h-4 w-4',
  }

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  }

  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -10 },
  }

  return (
    <div className={cn('flex space-x-2', className)}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={cn('rounded-full', sizeClasses[size], colorClasses[color])}
          variants={dotVariants}
          initial='initial'
          animate='animate'
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: index * 0.15,
          }}
        />
      ))}
    </div>
  )
}

// Pulse Loading
interface PulseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary'
  className?: string
}

export function Pulse({
  size = 'md',
  color = 'primary',
  className,
}: PulseProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20',
  }

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  }

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <motion.div
        className={cn(
          'absolute inset-0 rounded-full opacity-75',
          colorClasses[color]
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.3, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={cn(
          'absolute inset-0 rounded-full opacity-75',
          colorClasses[color]
        )}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </div>
  )
}

// Bar Loading
interface BarsProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  className?: string
}

export function Bars({ size = 'md', color = 'primary', className }: BarsProps) {
  const sizeClasses = {
    sm: 'h-4 w-1',
    md: 'h-8 w-1.5',
    lg: 'h-12 w-2',
  }

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  }

  return (
    <div className={cn('flex space-x-1', className)}>
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className={cn('rounded-full', sizeClasses[size], colorClasses[color])}
          animate={{
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  )
}

// Skeleton Loading
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const variantClasses = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    rounded: 'rounded-lg',
  }

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }

  const style: React.CSSProperties = {
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height:
      height ||
      (variant === 'circular' ? '40px' : variant === 'text' ? '16px' : '100px'),
  }

  return (
    <div
      className={cn(
        'bg-muted relative overflow-hidden',
        variantClasses[variant],
        animationClasses[animation],
        className
      )}
      style={style}
    >
      {animation === 'wave' && (
        <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent' />
      )}
    </div>
  )
}

// Progress Loading
interface ProgressProps {
  value: number
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  showLabel?: boolean
  className?: string
}

export function Progress({
  value,
  size = 'md',
  color = 'primary',
  showLabel = false,
  className,
}: ProgressProps) {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  }

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-destructive',
  }

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'w-full bg-muted rounded-full overflow-hidden',
          sizeClasses[size]
        )}
      >
        <motion.div
          className={cn('h-full rounded-full', colorClasses[color])}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <p className='mt-2 text-sm text-muted-foreground text-center'>
          {Math.round(value)}%
        </p>
      )}
    </div>
  )
}

// Loading Overlay
interface LoadingOverlayProps {
  visible: boolean
  children?: React.ReactNode
  spinner?: 'spinner' | 'dots' | 'pulse' | 'bars'
  blur?: boolean
  fullScreen?: boolean
  className?: string
}

export function LoadingOverlay({
  visible,
  children,
  spinner = 'spinner',
  blur = true,
  fullScreen = false,
  className,
}: LoadingOverlayProps) {
  if (!visible) return null

  const LoadingComponent = {
    spinner: Spinner,
    dots: Dots,
    pulse: Pulse,
    bars: Bars,
  }[spinner]

  return (
    <motion.div
      className={cn(
        'absolute inset-0 z-50 flex items-center justify-center',
        blur && 'backdrop-blur-sm',
        fullScreen && 'fixed',
        'bg-background/80',
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex flex-col items-center space-y-4'>
        <LoadingComponent size='lg' />
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Circular Progress
interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  showLabel?: boolean
  className?: string
}

export function CircularProgress({
  value,
  size = 120,
  strokeWidth = 8,
  color = 'primary',
  showLabel = true,
  className,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-destructive',
  }

  return (
    <div
      className={cn('relative', className)}
      style={{ width: size, height: size }}
    >
      <svg className='transform -rotate-90' width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          className='text-muted'
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          className={colorClasses[color]}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          strokeLinecap='round'
        />
      </svg>
      {showLabel && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-2xl font-semibold'>{Math.round(value)}%</span>
        </div>
      )}
    </div>
  )
}
