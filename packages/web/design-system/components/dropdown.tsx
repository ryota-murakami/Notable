'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'

export interface DropdownOption {
  label: string
  value: string
  disabled?: boolean
  icon?: React.ReactNode
  description?: string
  group?: string
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string | string[]
  defaultValue?: string | string[]
  onValueChange?: (value: string | string[]) => void
  placeholder?: string
  searchable?: boolean
  searchPlaceholder?: string
  multiple?: boolean
  disabled?: boolean
  loading?: boolean
  clearable?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'outlined'
  error?: string
  success?: boolean
  label?: string
  helper?: string
  maxHeight?: number
  virtualized?: boolean
  creatable?: boolean
  onCreateOption?: (inputValue: string) => void
  className?: string
  dropdownClassName?: string
  optionClassName?: string
  'aria-label'?: string
}

interface DropdownContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  selectedValue: string | string[]
  setSelectedValue: (value: string | string[]) => void
  options: DropdownOption[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  focusedIndex: number
  setFocusedIndex: (index: number) => void
  filteredOptions: DropdownOption[]
  multiple: boolean
  searchable: boolean
  disabled: boolean
  loading: boolean
}

const DropdownContext = React.createContext<DropdownContextType | null>(null)

const useDropdownContext = () => {
  const context = React.useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown')
  }
  return context
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onValueChange,
      placeholder = 'Select option...',
      searchable = false,
      searchPlaceholder = 'Search...',
      multiple = false,
      disabled = false,
      loading = false,
      clearable = false,
      size = 'md',
      variant = 'default',
      error,
      success = false,
      label,
      helper,
      maxHeight = 320,
      virtualized = false,
      creatable = false,
      onCreateOption,
      className,
      dropdownClassName,
      optionClassName,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(
      defaultValue || (multiple ? [] : '')
    )
    const [isOpen, setIsOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [focusedIndex, setFocusedIndex] = React.useState(-1)
    const [mounted, setMounted] = React.useState(false)
    const [dropdownPosition, setDropdownPosition] = React.useState({
      x: 0,
      y: 0,
      width: 0,
    })

    const triggerRef = React.useRef<HTMLButtonElement>(null)
    const dropdownRef = React.useRef<HTMLDivElement>(null)
    const searchInputRef = React.useRef<HTMLInputElement>(null)
    const optionRefs = React.useRef<(HTMLDivElement | null)[]>([])

    const isControlled = controlledValue !== undefined
    const selectedValue = isControlled ? controlledValue : internalValue

    React.useEffect(() => {
      setMounted(true)
    }, [])

    // Filter options based on search query
    const filteredOptions = React.useMemo(() => {
      if (!searchQuery.trim()) return options

      return options.filter(
        (option) =>
          option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
          option.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }, [options, searchQuery])

    // Calculate dropdown position
    const calculatePosition = React.useCallback(() => {
      if (!triggerRef.current || !dropdownRef.current) return

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const dropdownRect = dropdownRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY
      const scrollX = window.scrollX

      let x = triggerRect.left + scrollX
      let y = triggerRect.bottom + scrollY + 4

      // Check if dropdown would go off bottom of screen
      if (y + dropdownRect.height > scrollY + viewportHeight - 20) {
        // Position above trigger instead
        y = triggerRect.top + scrollY - dropdownRect.height - 4
      }

      // Check if dropdown would go off right of screen
      if (x + triggerRect.width > scrollX + window.innerWidth - 20) {
        x = scrollX + window.innerWidth - triggerRect.width - 20
      }

      setDropdownPosition({ x, y, width: triggerRect.width })
    }, [])

    React.useEffect(() => {
      if (isOpen) {
        calculatePosition()
        const handleResize = () => calculatePosition()
        const handleScroll = () => calculatePosition()

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll, true)

        return () => {
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('scroll', handleScroll, true)
        }
      }
    }, [isOpen, calculatePosition])

    // Focus search input when dropdown opens
    React.useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 100)
      }
    }, [isOpen, searchable])

    // Handle value change
    const handleValueChange = (newValue: string | string[]) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    // Handle option selection
    const handleOptionSelect = (option: DropdownOption) => {
      if (option.disabled) return

      if (multiple) {
        const currentValues = Array.isArray(selectedValue) ? selectedValue : []
        const isSelected = currentValues.includes(option.value)

        if (isSelected) {
          handleValueChange(currentValues.filter((v) => v !== option.value))
        } else {
          handleValueChange([...currentValues, option.value])
        }
      } else {
        handleValueChange(option.value)
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled || loading) return

      switch (e.key) {
        case 'Enter':
          if (!isOpen) {
            setIsOpen(true)
          } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
            e.preventDefault()
            handleOptionSelect(filteredOptions[focusedIndex])
          } else if (creatable && searchQuery.trim() && onCreateOption) {
            e.preventDefault()
            onCreateOption(searchQuery.trim())
            setSearchQuery('')
          }
          break
        case 'Escape':
          setIsOpen(false)
          setSearchQuery('')
          setFocusedIndex(-1)
          break
        case 'ArrowDown':
          e.preventDefault()
          if (!isOpen) {
            setIsOpen(true)
          } else {
            setFocusedIndex((prev) =>
              prev < filteredOptions.length - 1 ? prev + 1 : prev
            )
          }
          break
        case 'ArrowUp':
          e.preventDefault()
          if (isOpen) {
            setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0))
          }
          break
        case 'Tab':
          if (isOpen) {
            setIsOpen(false)
            setSearchQuery('')
          }
          break
      }
    }

    // Clear selection
    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation()
      handleValueChange(multiple ? [] : '')
    }

    // Get display value
    const getDisplayValue = () => {
      if (multiple && Array.isArray(selectedValue)) {
        if (selectedValue.length === 0) return placeholder
        if (selectedValue.length === 1) {
          const option = options.find((opt) => opt.value === selectedValue[0])
          return option?.label || selectedValue[0]
        }
        return `${selectedValue.length} selected`
      } else {
        const option = options.find((opt) => opt.value === selectedValue)
        return option?.label || placeholder
      }
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
        'focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20'
      ),
      filled: cn(
        'border-0 bg-muted',
        error ? 'bg-destructive/10' : success ? 'bg-success/10' : '',
        'focus-visible:bg-muted/50 focus-visible:ring-2 focus-visible:ring-primary/20'
      ),
      outlined: cn(
        'border-2 bg-transparent',
        error
          ? 'border-destructive'
          : success
            ? 'border-success'
            : 'border-input',
        'focus-visible:border-primary'
      ),
    }

    const contextValue: DropdownContextType = {
      isOpen,
      setIsOpen,
      selectedValue,
      setSelectedValue: handleValueChange,
      options,
      searchQuery,
      setSearchQuery,
      focusedIndex,
      setFocusedIndex,
      filteredOptions,
      multiple,
      searchable,
      disabled,
      loading,
    }

    const hasSelection = multiple
      ? Array.isArray(selectedValue) && selectedValue.length > 0
      : selectedValue !== '' && selectedValue !== undefined

    const dropdownContent = (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            className={cn(
              'fixed z-50 bg-popover border border-border rounded-lg shadow-lg overflow-hidden',
              dropdownClassName
            )}
            style={{
              left: dropdownPosition.x,
              top: dropdownPosition.y,
              width: dropdownPosition.width,
              maxHeight,
            }}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search Input */}
            {searchable && (
              <div className='p-2 border-b border-border'>
                <input
                  ref={searchInputRef}
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className='w-full px-3 py-2 text-sm bg-transparent border-0 focus:outline-none placeholder:text-muted-foreground'
                />
              </div>
            )}

            {/* Options List */}
            <div className='max-h-60 overflow-y-auto'>
              {loading ? (
                <div className='flex items-center justify-center py-8'>
                  <motion.div
                    className='w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                </div>
              ) : filteredOptions.length === 0 ? (
                <div className='py-8 text-center text-sm text-muted-foreground'>
                  {searchQuery ? (
                    <>
                      No options found
                      {creatable && onCreateOption && (
                        <button
                          onClick={() => {
                            onCreateOption(searchQuery.trim())
                            setSearchQuery('')
                          }}
                          className='block mt-2 text-primary hover:underline'
                        >
                          Create "{searchQuery}"
                        </button>
                      )}
                    </>
                  ) : (
                    'No options available'
                  )}
                </div>
              ) : (
                <>
                  {filteredOptions.map((option, index) => {
                    const isSelected = multiple
                      ? Array.isArray(selectedValue) &&
                        selectedValue.includes(option.value)
                      : selectedValue === option.value
                    const isFocused = index === focusedIndex

                    return (
                      <motion.div
                        key={option.value}
                        ref={(el) => {
                          optionRefs.current[index] = el
                        }}
                        className={cn(
                          'flex items-center px-3 py-2 cursor-pointer text-sm transition-colors',
                          'hover:bg-accent hover:text-accent-foreground',
                          isFocused && 'bg-accent text-accent-foreground',
                          isSelected && 'bg-primary/10 text-primary',
                          option.disabled && 'opacity-50 cursor-not-allowed',
                          optionClassName
                        )}
                        onClick={() =>
                          !option.disabled && handleOptionSelect(option)
                        }
                        onMouseEnter={() => setFocusedIndex(index)}
                        whileHover={!option.disabled ? { x: 2 } : {}}
                        transition={{ duration: 0.1 }}
                      >
                        {/* Multiple selection checkbox */}
                        {multiple && (
                          <div className='flex items-center mr-3'>
                            <div
                              className={cn(
                                'w-4 h-4 border rounded flex items-center justify-center',
                                isSelected
                                  ? 'bg-primary border-primary text-white'
                                  : 'border-input'
                              )}
                            >
                              {isSelected && (
                                <svg
                                  className='w-3 h-3'
                                  fill='currentColor'
                                  viewBox='0 0 20 20'
                                >
                                  <path
                                    fillRule='evenodd'
                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                    clipRule='evenodd'
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Option icon */}
                        {option.icon && (
                          <div className='flex items-center mr-3 text-muted-foreground'>
                            {option.icon}
                          </div>
                        )}

                        {/* Option content */}
                        <div className='flex-1 min-w-0'>
                          <div className='font-medium truncate'>
                            {option.label}
                          </div>
                          {option.description && (
                            <div className='text-xs text-muted-foreground truncate'>
                              {option.description}
                            </div>
                          )}
                        </div>

                        {/* Single selection indicator */}
                        {!multiple && isSelected && (
                          <svg
                            className='w-4 h-4 text-primary ml-2'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                          >
                            <path
                              fillRule='evenodd'
                              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        )}
                      </motion.div>
                    )
                  })}
                </>
              )}
            </div>

            {/* Create new option */}
            {creatable &&
              searchQuery &&
              !filteredOptions.some(
                (opt) => opt.label.toLowerCase() === searchQuery.toLowerCase()
              ) &&
              onCreateOption && (
                <div className='border-t border-border p-2'>
                  <button
                    onClick={() => {
                      onCreateOption(searchQuery.trim())
                      setSearchQuery('')
                    }}
                    className='w-full px-3 py-2 text-sm text-left hover:bg-accent rounded transition-colors'
                  >
                    Create "{searchQuery}"
                  </button>
                </div>
              )}
          </motion.div>
        )}
      </AnimatePresence>
    )

    return (
      <DropdownContext.Provider value={contextValue}>
        <div className='w-full'>
          {/* Label */}
          {label && (
            <label
              className={cn(
                'block text-sm font-medium mb-1.5',
                error ? 'text-destructive' : 'text-foreground'
              )}
            >
              {label}
            </label>
          )}

          {/* Trigger Button */}
          <button
            ref={triggerRef}
            type='button'
            onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            aria-expanded={isOpen}
            aria-haspopup='listbox'
            className={cn(
              'flex w-full items-center justify-between rounded-lg transition-all duration-200',
              'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              sizeClasses[size],
              variantClasses[variant],
              className
            )}
            {...props}
          >
            <span
              className={cn(
                'flex-1 text-left truncate',
                !hasSelection && 'text-muted-foreground'
              )}
            >
              {getDisplayValue()}
            </span>

            <div className='flex items-center gap-2'>
              {/* Loading spinner */}
              {loading && (
                <motion.div
                  className='w-4 h-4 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              )}

              {/* Clear button */}
              {clearable && hasSelection && !loading && (
                <motion.button
                  type='button'
                  onClick={handleClear}
                  className='text-muted-foreground hover:text-foreground p-0.5 rounded'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className='w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </motion.button>
              )}

              {/* Dropdown arrow */}
              <motion.svg
                className='w-4 h-4 text-muted-foreground'
                fill='currentColor'
                viewBox='0 0 20 20'
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </motion.svg>
            </div>
          </button>

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

          {/* Portal for dropdown */}
          {mounted &&
            typeof document !== 'undefined' &&
            createPortal(dropdownContent, document.body)}
        </div>
      </DropdownContext.Provider>
    )
  }
)

Dropdown.displayName = 'Dropdown'

// Preset dropdown variants
export function SearchableDropdown(props: Omit<DropdownProps, 'searchable'>) {
  return <Dropdown searchable {...props} />
}

export function MultiSelectDropdown(props: Omit<DropdownProps, 'multiple'>) {
  return <Dropdown multiple clearable {...props} />
}

export function CreatableDropdown(
  props: Omit<DropdownProps, 'creatable' | 'searchable'>
) {
  return <Dropdown creatable searchable {...props} />
}

export { Dropdown as Select }
