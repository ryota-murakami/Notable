'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion, AnimatePresence } from 'framer-motion'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'flushed' | 'outlined'
  inputSize?: 'sm' | 'md' | 'lg'
  error?: string
  success?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  label?: string
  helper?: string
  floating?: boolean
  clearable?: boolean
  onClear?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      inputSize = 'md',
      error,
      success,
      icon,
      iconPosition = 'left',
      label,
      helper,
      floating = false,
      clearable = false,
      onClear,
      type,
      value,
      placeholder,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(!!value)

    React.useEffect(() => {
      setHasValue(!!value)
    }, [value])

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      onBlur?.(e)
    }

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    }

    const variantClasses = {
      default: cn(
        'border bg-background',
        error
          ? 'border-destructive'
          : success
            ? 'border-success'
            : 'border-input',
        isFocused && !error && 'border-primary ring-2 ring-primary/20'
      ),
      filled: cn(
        'border-0 bg-muted',
        error ? 'bg-destructive/10' : success ? 'bg-success/10' : '',
        isFocused && !error && 'bg-muted/50 ring-2 ring-primary/20'
      ),
      flushed: cn(
        'border-0 border-b-2 rounded-none px-0',
        error
          ? 'border-destructive'
          : success
            ? 'border-success'
            : 'border-input',
        isFocused && !error && 'border-primary'
      ),
      outlined: cn(
        'border-2 bg-transparent',
        error
          ? 'border-destructive'
          : success
            ? 'border-success'
            : 'border-input',
        isFocused && !error && 'border-primary'
      ),
    }

    const inputElement = (
      <div className='relative w-full'>
        {/* Floating Label */}
        {floating && label && (
          <motion.label
            className={cn(
              'absolute left-3 text-muted-foreground pointer-events-none',
              'transition-all duration-200 ease-out',
              sizeClasses[inputSize].includes('text-sm')
                ? 'text-sm'
                : 'text-base'
            )}
            animate={{
              top: hasValue || isFocused ? '-0.5rem' : '50%',
              y: hasValue || isFocused ? 0 : '-50%',
              fontSize: hasValue || isFocused ? '0.75rem' : 'inherit',
              backgroundColor:
                hasValue || isFocused
                  ? 'hsl(var(--background))'
                  : 'transparent',
              paddingLeft: hasValue || isFocused ? '0.25rem' : 0,
              paddingRight: hasValue || isFocused ? '0.25rem' : 0,
              color: isFocused
                ? 'hsl(var(--primary))'
                : 'hsl(var(--muted-foreground))',
            }}
          >
            {label}
          </motion.label>
        )}

        {/* Icon Left */}
        {icon && iconPosition === 'left' && (
          <div
            className={cn(
              'absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none',
              isFocused && 'text-primary'
            )}
          >
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          ref={ref}
          type={type}
          value={value}
          placeholder={floating && label ? '' : placeholder}
          className={cn(
            'flex w-full rounded-lg transition-all duration-200',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            sizeClasses[inputSize],
            variantClasses[variant],
            icon && iconPosition === 'left' && 'pl-10',
            icon && iconPosition === 'right' && 'pr-10',
            clearable && hasValue && 'pr-10',
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {/* Icon Right */}
        {icon && iconPosition === 'right' && !clearable && (
          <div
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none',
              isFocused && 'text-primary'
            )}
          >
            {icon}
          </div>
        )}

        {/* Clear Button */}
        {clearable && hasValue && (
          <motion.button
            type='button'
            onClick={onClear}
            className={cn(
              'absolute right-3 top-1/2 -translate-y-1/2',
              'text-muted-foreground hover:text-foreground',
              'focus-visible:outline-none'
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </motion.button>
        )}

        {/* Focus Ring Animation */}
        <AnimatePresence>
          {isFocused && variant === 'default' && (
            <motion.div
              className='absolute inset-0 rounded-lg pointer-events-none'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                boxShadow: `0 0 0 3px ${error ? 'hsl(var(--destructive) / 0.2)' : 'hsl(var(--primary) / 0.2)'}`,
              }}
            />
          )}
        </AnimatePresence>
      </div>
    )

    return (
      <div className='w-full'>
        {/* Non-floating Label */}
        {label && !floating && (
          <label
            className={cn(
              'block text-sm font-medium mb-1.5',
              error ? 'text-destructive' : 'text-foreground'
            )}
          >
            {label}
          </label>
        )}

        {inputElement}

        {/* Helper Text */}
        <AnimatePresence mode='wait'>
          {(error || helper) && (
            <motion.p
              key={error || helper}
              className={cn(
                'mt-1.5 text-xs',
                error ? 'text-destructive' : 'text-muted-foreground'
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {error || helper}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

Input.displayName = 'Input'

// Search Input Component
interface SearchInputProps extends Omit<InputProps, 'icon' | 'iconPosition'> {
  onSearch?: (value: string) => void
}

export function SearchInput({ onSearch, ...props }: SearchInputProps) {
  const [searchValue, setSearchValue] = React.useState('')

  const handleSearch = () => {
    onSearch?.(searchValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Input
      {...props}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      icon={
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='11' cy='11' r='8' />
          <path d='m21 21-4.35-4.35' />
        </svg>
      }
      iconPosition='left'
      clearable
      onClear={() => {
        setSearchValue('')
        onSearch?.('')
      }}
      placeholder='Search...'
    />
  )
}

// Password Input Component
export function PasswordInput(props: Omit<InputProps, 'type'>) {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      icon={
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='text-muted-foreground hover:text-foreground focus-visible:outline-none'
        >
          {showPassword ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' />
              <line x1='1' y1='1' x2='23' y2='23' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
              <circle cx='12' cy='12' r='3' />
            </svg>
          )}
        </button>
      }
      iconPosition='right'
    />
  )
}

export { Input }
