'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { AnimatePresence, motion } from 'framer-motion'

export interface ToggleProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  label?: string
  description?: string
  labelPosition?: 'left' | 'right'
  loading?: boolean
  icon?: React.ReactNode
  checkedIcon?: React.ReactNode
  uncheckedIcon?: React.ReactNode
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      id,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      size = 'md',
      variant = 'default',
      label,
      description,
      labelPosition = 'right',
      loading = false,
      icon,
      checkedIcon,
      uncheckedIcon,
      className,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked)

    const isControlled = controlledChecked !== undefined
    const checked = isControlled ? controlledChecked : internalChecked

    const handleToggle = () => {
      if (disabled || loading) return

      const newChecked = !checked

      if (!isControlled) {
        setInternalChecked(newChecked)
      }

      onChange?.(newChecked)
    }

    const sizeClasses = {
      sm: {
        track: 'w-8 h-4',
        thumb: 'w-3 h-3',
        icon: 'w-2 h-2',
        translate: 'translate-x-4',
        text: 'text-sm',
      },
      md: {
        track: 'w-11 h-6',
        thumb: 'w-5 h-5',
        icon: 'w-3 h-3',
        translate: 'translate-x-5',
        text: 'text-base',
      },
      lg: {
        track: 'w-14 h-8',
        thumb: 'w-7 h-7',
        icon: 'w-4 h-4',
        translate: 'translate-x-6',
        text: 'text-lg',
      },
    }

    const variantClasses = {
      default: {
        track: 'bg-primary',
        trackUnchecked: 'bg-input',
        thumb: 'bg-background',
        focus: 'focus-visible:ring-ring',
      },
      success: {
        track: 'bg-success',
        trackUnchecked: 'bg-input',
        thumb: 'bg-background',
        focus: 'focus-visible:ring-success',
      },
      warning: {
        track: 'bg-warning',
        trackUnchecked: 'bg-input',
        thumb: 'bg-background',
        focus: 'focus-visible:ring-warning',
      },
      danger: {
        track: 'bg-destructive',
        trackUnchecked: 'bg-input',
        thumb: 'bg-background',
        focus: 'focus-visible:ring-destructive',
      },
      info: {
        track: 'bg-info',
        trackUnchecked: 'bg-input',
        thumb: 'bg-background',
        focus: 'focus-visible:ring-info',
      },
    }

    const currentSize = sizeClasses[size]
    const currentVariant = variantClasses[variant]

    const toggleElement = (
      <div className='flex flex-col'>
        <button
          ref={ref}
          id={id}
          type='button'
          role='switch'
          aria-checked={checked}
          aria-label={ariaLabel || label}
          aria-describedby={ariaDescribedBy}
          disabled={disabled || loading}
          className={cn(
            'relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent',
            'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            currentSize.track,
            checked ? currentVariant.track : currentVariant.trackUnchecked,
            currentVariant.focus,
            disabled && 'cursor-not-allowed opacity-50',
            loading && 'cursor-wait',
            className
          )}
          onClick={handleToggle}
          {...props}
        >
          {/* Track background with gradient animation */}
          <motion.div
            className='absolute inset-0 rounded-full'
            initial={false}
            animate={{
              background: checked
                ? 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1))'
                : 'linear-gradient(45deg, rgba(0,0,0,0.1), transparent)',
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Thumb */}
          <motion.span
            className={cn(
              'pointer-events-none inline-block rounded-full shadow-lg ring-0 transition-transform',
              currentSize.thumb,
              currentVariant.thumb,
              'flex items-center justify-center'
            )}
            initial={false}
            animate={{
              x: checked
                ? currentSize.translate.replace('translate-x-', '')
                : '0',
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          >
            {/* Loading spinner */}
            {loading && (
              <motion.div
                className={cn(
                  'animate-spin border-2 border-current border-t-transparent rounded-full',
                  currentSize.icon
                )}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}

            {/* Icons */}
            {!loading && (
              <AnimatePresence mode='wait'>
                {checked && checkedIcon && (
                  <motion.div
                    key='checked-icon'
                    className={cn('text-current', currentSize.icon)}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    {checkedIcon}
                  </motion.div>
                )}
                {!checked && uncheckedIcon && (
                  <motion.div
                    key='unchecked-icon'
                    className={cn('text-current', currentSize.icon)}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    {uncheckedIcon}
                  </motion.div>
                )}
                {!checkedIcon && !uncheckedIcon && icon && (
                  <motion.div
                    className={cn('text-current', currentSize.icon)}
                    animate={{ rotate: checked ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {icon}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.span>

          {/* Ripple effect */}
          <motion.div
            className='absolute inset-0 rounded-full'
            initial={{ scale: 0, opacity: 0.3 }}
            animate={{
              scale: checked ? [1, 1.2, 1] : [1, 1.1, 1],
              opacity: [0.3, 0.1, 0],
            }}
            transition={{ duration: 0.4 }}
            key={checked ? 'checked-ripple' : 'unchecked-ripple'}
          />
        </button>

        {/* Description */}
        {description && (
          <motion.p
            className={cn(
              'mt-1 text-muted-foreground',
              currentSize.text === 'text-sm' ? 'text-xs' : 'text-sm'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    )

    if (!label) {
      return toggleElement
    }

    const labelElement = (
      <motion.label
        htmlFor={id}
        className={cn(
          'font-medium cursor-pointer select-none',
          currentSize.text,
          disabled && 'cursor-not-allowed opacity-50',
          loading && 'cursor-wait'
        )}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    )

    return (
      <div
        className={cn(
          'flex items-start gap-3',
          labelPosition === 'left' && 'flex-row-reverse'
        )}
      >
        {toggleElement}
        {labelElement}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

// Preset toggle variants for common use cases
export function SuccessToggle(props: Omit<ToggleProps, 'variant'>) {
  return (
    <Toggle
      variant='success'
      checkedIcon={
        <svg className='w-full h-full' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      }
      {...props}
    />
  )
}

export function DangerToggle(props: Omit<ToggleProps, 'variant'>) {
  return (
    <Toggle
      variant='danger'
      checkedIcon={
        <svg className='w-full h-full' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      }
      uncheckedIcon={
        <svg className='w-full h-full' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
            clipRule='evenodd'
          />
        </svg>
      }
      {...props}
    />
  )
}

export function InfoToggle(props: Omit<ToggleProps, 'variant'>) {
  return (
    <Toggle
      variant='info'
      icon={
        <svg className='w-full h-full' fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
            clipRule='evenodd'
          />
        </svg>
      }
      {...props}
    />
  )
}

// Toggle group for multiple related toggles
export interface ToggleGroupProps {
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ToggleGroup({
  children,
  orientation = 'vertical',
  spacing = 'md',
  className,
}: ToggleGroupProps) {
  const spacingClasses = {
    sm: orientation === 'horizontal' ? 'gap-2' : 'gap-1',
    md: orientation === 'horizontal' ? 'gap-4' : 'gap-3',
    lg: orientation === 'horizontal' ? 'gap-6' : 'gap-4',
  }

  return (
    <div
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
        spacingClasses[spacing],
        className
      )}
      role='group'
    >
      {children}
    </div>
  )
}
