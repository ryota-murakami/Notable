'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { AnimatePresence, motion } from 'framer-motion'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'flushed' | 'outlined'
  inputSize?: 'sm' | 'md' | 'lg'
  error?: string
  success?: boolean
  warning?: string
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  label?: string
  helper?: string
  floating?: boolean
  clearable?: boolean
  onClear?: () => void
  validation?: ValidationRule[]
  showCharacterCount?: boolean
  maxLength?: number
  suggestions?: string[]
  onSuggestionSelect?: (suggestion: string) => void
  debounceMs?: number
  onDebouncedChange?: (value: string) => void
}

export interface ValidationRule {
  type:
    | 'required'
    | 'email'
    | 'url'
    | 'number'
    | 'minLength'
    | 'maxLength'
    | 'pattern'
    | 'custom'
  value?: string | number | RegExp
  message: string
  validator?: (value: string) => boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'default',
      inputSize = 'md',
      error,
      success,
      warning,
      loading = false,
      icon,
      iconPosition = 'left',
      label,
      helper,
      floating = false,
      clearable = false,
      onClear,
      validation = [],
      showCharacterCount = false,
      maxLength,
      suggestions = [],
      onSuggestionSelect,
      debounceMs = 300,
      onDebouncedChange,
      type,
      value,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(!!value)
    const [validationError, setValidationError] = React.useState<string>('')
    const [showSuggestions, setShowSuggestions] = React.useState(false)
    const [filteredSuggestions, setFilteredSuggestions] = React.useState<
      string[]
    >([])
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
      React.useState(-1)
    const debounceTimeoutRef = React.useRef<NodeJS.Timeout | undefined>(
      undefined
    )
    const suggestionsRef = React.useRef<HTMLDivElement>(null)

    // Validation function
    const validateInput = React.useCallback(
      (inputValue: string) => {
        for (const rule of validation) {
          switch (rule.type) {
            case 'required':
              if (!inputValue.trim()) {
                return rule.message
              }
              break
            case 'email': {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              if (inputValue && !emailRegex.test(inputValue)) {
                return rule.message
              }
              break
            }
            case 'url':
              if (inputValue) {
                try {
                  new URL(inputValue)
                } catch {
                  return rule.message
                }
              }
              break
            case 'number':
              if (inputValue && isNaN(Number(inputValue))) {
                return rule.message
              }
              break
            case 'minLength':
              if (inputValue && inputValue.length < (rule.value as number)) {
                return rule.message
              }
              break
            case 'maxLength':
              if (inputValue && inputValue.length > (rule.value as number)) {
                return rule.message
              }
              break
            case 'pattern':
              if (inputValue && !(rule.value as RegExp).test(inputValue)) {
                return rule.message
              }
              break
            case 'custom':
              if (inputValue && rule.validator && !rule.validator(inputValue)) {
                return rule.message
              }
              break
          }
        }
        return ''
      },
      [validation]
    )

    React.useEffect(() => {
      setHasValue(!!value)
      // Validate input on value change
      if (validation.length > 0) {
        const error = validateInput((value as string) || '')
        setValidationError(error)
      }
    }, [value, validateInput, validation.length])

    // Update suggestions based on input value
    React.useEffect(() => {
      if (suggestions.length > 0 && value && isFocused) {
        const filtered = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes((value as string).toLowerCase())
        )
        setFilteredSuggestions(filtered)
        setShowSuggestions(filtered.length > 0)
        setSelectedSuggestionIndex(-1)
      } else {
        setFilteredSuggestions([])
        setShowSuggestions(false)
      }
    }, [suggestions, value, isFocused])

    // Debounced change handler
    React.useEffect(() => {
      if (onDebouncedChange && value !== undefined) {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current)
        }
        debounceTimeoutRef.current = setTimeout(() => {
          onDebouncedChange(value as string)
        }, debounceMs)
      }

      return () => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current)
        }
      }
    }, [value, onDebouncedChange, debounceMs])

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setTimeout(() => {
        setIsFocused(false)
        setShowSuggestions(false)
      }, 100) // Delay to allow suggestion clicks
      onBlur?.(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showSuggestions || filteredSuggestions.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedSuggestionIndex((prev) =>
            prev < filteredSuggestions.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1))
          break
        case 'Enter':
          e.preventDefault()
          if (selectedSuggestionIndex >= 0) {
            handleSuggestionSelect(filteredSuggestions[selectedSuggestionIndex])
          }
          break
        case 'Escape':
          setShowSuggestions(false)
          setSelectedSuggestionIndex(-1)
          break
      }
    }

    const handleSuggestionSelect = (suggestion: string) => {
      onSuggestionSelect?.(suggestion)
      onChange?.({
        target: { value: suggestion },
      } as React.ChangeEvent<HTMLInputElement>)
      setShowSuggestions(false)
      setSelectedSuggestionIndex(-1)
    }

    const sizeClasses = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-5 text-base',
    }

    const variantClasses = {
      default: cn(
        'border bg-background',
        error || validationError
          ? 'border-destructive'
          : warning
            ? 'border-warning'
            : success
              ? 'border-success'
              : 'border-input',
        isFocused &&
          !error &&
          !validationError &&
          !warning &&
          'border-primary ring-2 ring-primary/20'
      ),
      filled: cn(
        'border-0 bg-muted',
        error || validationError
          ? 'bg-destructive/10'
          : warning
            ? 'bg-warning/10'
            : success
              ? 'bg-success/10'
              : '',
        isFocused &&
          !error &&
          !validationError &&
          !warning &&
          'bg-muted/50 ring-2 ring-primary/20'
      ),
      flushed: cn(
        'border-0 border-b-2 rounded-none px-0',
        error || validationError
          ? 'border-destructive'
          : warning
            ? 'border-warning'
            : success
              ? 'border-success'
              : 'border-input',
        isFocused && !error && !validationError && !warning && 'border-primary'
      ),
      outlined: cn(
        'border-2 bg-transparent',
        error || validationError
          ? 'border-destructive'
          : warning
            ? 'border-warning'
            : success
              ? 'border-success'
              : 'border-input',
        isFocused && !error && !validationError && !warning && 'border-primary'
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
            loading && 'pr-10',
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className='absolute right-3 top-1/2 -translate-y-1/2'>
            <motion.div
              className='w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        )}

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
                boxShadow: `0 0 0 3px ${error || validationError ? 'hsl(var(--destructive) / 0.2)' : warning ? 'hsl(var(--warning) / 0.2)' : 'hsl(var(--primary) / 0.2)'}`,
              }}
            />
          )}
        </AnimatePresence>

        {/* Suggestions Dropdown */}
        <AnimatePresence>
          {showSuggestions && filteredSuggestions.length > 0 && (
            <motion.div
              ref={suggestionsRef}
              className='absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-lg shadow-lg max-h-60 overflow-auto'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion}
                  className={cn(
                    'px-3 py-2 cursor-pointer text-sm transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    index === selectedSuggestionIndex &&
                      'bg-accent text-accent-foreground'
                  )}
                  onClick={() => handleSuggestionSelect(suggestion)}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.1 }}
                >
                  {suggestion}
                </motion.div>
              ))}
            </motion.div>
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

        {/* Character Count and Helper Text */}
        <div className='flex justify-between items-start mt-1.5'>
          <div className='flex-1'>
            {/* Helper Text */}
            <AnimatePresence mode='wait'>
              {(error || validationError || warning || helper) && (
                <motion.p
                  key={error || validationError || warning || helper}
                  className={cn(
                    'text-xs',
                    error || validationError
                      ? 'text-destructive'
                      : warning
                        ? 'text-warning'
                        : 'text-muted-foreground'
                  )}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {error || validationError || warning || helper}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Character Count */}
          {showCharacterCount && maxLength && (
            <motion.span
              className={cn(
                'text-xs text-muted-foreground ml-2 flex-shrink-0',
                value &&
                  (value as string).length > maxLength * 0.8 &&
                  'text-warning',
                value &&
                  (value as string).length >= maxLength &&
                  'text-destructive'
              )}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {value ? (value as string).length : 0}/{maxLength}
            </motion.span>
          )}
        </div>
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
