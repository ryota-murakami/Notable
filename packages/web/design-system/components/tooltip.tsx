'use client'

import * as React from 'react'
import { cn } from '../utils/theme'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  delay?: number
  hideDelay?: number
  disabled?: boolean
  arrow?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?:
    | 'default'
    | 'dark'
    | 'light'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
  className?: string
  contentClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  portal?: boolean
  maxWidth?: number
}

interface Position {
  x: number
  y: number
  arrowX?: number
  arrowY?: number
}

export function Tooltip({
  content,
  children,
  placement = 'top',
  trigger = 'hover',
  delay = 200,
  hideDelay = 0,
  disabled = false,
  arrow = true,
  size = 'md',
  variant = 'default',
  className,
  contentClassName,
  open: controlledOpen,
  onOpenChange,
  portal = true,
  maxWidth = 320,
}: TooltipProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 })
  const [mounted, setMounted] = React.useState(false)

  const triggerRef = React.useRef<HTMLElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const showTimeoutRef = React.useRef<NodeJS.Timeout>()
  const hideTimeoutRef = React.useRef<NodeJS.Timeout>()

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const setOpen = React.useCallback(
    (open: boolean) => {
      if (disabled) return

      if (!isControlled) {
        setInternalOpen(open)
      }
      onOpenChange?.(open)
    },
    [disabled, isControlled, onOpenChange]
  )

  const showTooltip = React.useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = undefined
    }

    if (!isOpen) {
      showTimeoutRef.current = setTimeout(() => {
        setOpen(true)
      }, delay)
    }
  }, [isOpen, setOpen, delay])

  const hideTooltip = React.useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = undefined
    }

    if (isOpen) {
      hideTimeoutRef.current = setTimeout(() => {
        setOpen(false)
      }, hideDelay)
    }
  }, [isOpen, setOpen, hideDelay])

  const calculatePosition = React.useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const scrollX = window.scrollX
    const scrollY = window.scrollY

    const gap = 8 // Distance between trigger and tooltip
    const arrowSize = 6

    let x = 0
    let y = 0
    let arrowX = 0
    let arrowY = 0

    // Calculate base position
    switch (placement) {
      case 'top':
      case 'top-start':
      case 'top-end':
        y = triggerRect.top + scrollY - tooltipRect.height - gap
        if (placement === 'top') {
          x =
            triggerRect.left +
            scrollX +
            (triggerRect.width - tooltipRect.width) / 2
          arrowX = tooltipRect.width / 2 - arrowSize
        } else if (placement === 'top-start') {
          x = triggerRect.left + scrollX
          arrowX = triggerRect.width / 2 - arrowSize
        } else {
          x = triggerRect.right + scrollX - tooltipRect.width
          arrowX = tooltipRect.width - triggerRect.width / 2 - arrowSize
        }
        arrowY = tooltipRect.height - 1
        break

      case 'bottom':
      case 'bottom-start':
      case 'bottom-end':
        y = triggerRect.bottom + scrollY + gap
        if (placement === 'bottom') {
          x =
            triggerRect.left +
            scrollX +
            (triggerRect.width - tooltipRect.width) / 2
          arrowX = tooltipRect.width / 2 - arrowSize
        } else if (placement === 'bottom-start') {
          x = triggerRect.left + scrollX
          arrowX = triggerRect.width / 2 - arrowSize
        } else {
          x = triggerRect.right + scrollX - tooltipRect.width
          arrowX = tooltipRect.width - triggerRect.width / 2 - arrowSize
        }
        arrowY = -arrowSize
        break

      case 'left':
      case 'left-start':
      case 'left-end':
        x = triggerRect.left + scrollX - tooltipRect.width - gap
        if (placement === 'left') {
          y =
            triggerRect.top +
            scrollY +
            (triggerRect.height - tooltipRect.height) / 2
          arrowY = tooltipRect.height / 2 - arrowSize
        } else if (placement === 'left-start') {
          y = triggerRect.top + scrollY
          arrowY = triggerRect.height / 2 - arrowSize
        } else {
          y = triggerRect.bottom + scrollY - tooltipRect.height
          arrowY = tooltipRect.height - triggerRect.height / 2 - arrowSize
        }
        arrowX = tooltipRect.width - 1
        break

      case 'right':
      case 'right-start':
      case 'right-end':
        x = triggerRect.right + scrollX + gap
        if (placement === 'right') {
          y =
            triggerRect.top +
            scrollY +
            (triggerRect.height - tooltipRect.height) / 2
          arrowY = tooltipRect.height / 2 - arrowSize
        } else if (placement === 'right-start') {
          y = triggerRect.top + scrollY
          arrowY = triggerRect.height / 2 - arrowSize
        } else {
          y = triggerRect.bottom + scrollY - tooltipRect.height
          arrowY = tooltipRect.height - triggerRect.height / 2 - arrowSize
        }
        arrowX = -arrowSize
        break
    }

    // Viewport boundary adjustments
    if (x < scrollX + 10) {
      x = scrollX + 10
    } else if (x + tooltipRect.width > scrollX + viewportWidth - 10) {
      x = scrollX + viewportWidth - tooltipRect.width - 10
    }

    if (y < scrollY + 10) {
      y = scrollY + 10
    } else if (y + tooltipRect.height > scrollY + viewportHeight - 10) {
      y = scrollY + viewportHeight - tooltipRect.height - 10
    }

    setPosition({ x, y, arrowX, arrowY })
  }, [placement])

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

  const handleTriggerEvents = React.useMemo(() => {
    const events: React.HTMLAttributes<HTMLElement> = {}

    if (trigger === 'hover') {
      events.onMouseEnter = showTooltip
      events.onMouseLeave = hideTooltip
      events.onFocus = showTooltip
      events.onBlur = hideTooltip
    } else if (trigger === 'click') {
      events.onClick = (e) => {
        e.preventDefault()
        setOpen(!isOpen)
      }
    } else if (trigger === 'focus') {
      events.onFocus = showTooltip
      events.onBlur = hideTooltip
    }

    return events
  }, [trigger, showTooltip, hideTooltip, setOpen, isOpen])

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  }

  const variantClasses = {
    default:
      'bg-popover text-popover-foreground border border-border shadow-md',
    dark: 'bg-gray-900 text-white border-gray-800 shadow-lg',
    light: 'bg-white text-gray-900 border-gray-200 shadow-lg',
    success: 'bg-success text-white border-success shadow-lg',
    warning: 'bg-warning text-white border-warning shadow-lg',
    error: 'bg-destructive text-white border-destructive shadow-lg',
    info: 'bg-info text-white border-info shadow-lg',
  }

  const getArrowClasses = () => {
    const base = 'absolute w-3 h-3 transform rotate-45'
    const variantColors = {
      default: 'bg-popover border-border',
      dark: 'bg-gray-900 border-gray-800',
      light: 'bg-white border-gray-200',
      success: 'bg-success border-success',
      warning: 'bg-warning border-warning',
      error: 'bg-destructive border-destructive',
      info: 'bg-info border-info',
    }

    let positionClasses = ''
    let borderClasses = ''

    if (placement.startsWith('top')) {
      positionClasses = 'border-t border-l'
      borderClasses = 'border-r-0 border-b-0'
    } else if (placement.startsWith('bottom')) {
      positionClasses = 'border-b border-r'
      borderClasses = 'border-t-0 border-l-0'
    } else if (placement.startsWith('left')) {
      positionClasses = 'border-l border-b'
      borderClasses = 'border-t-0 border-r-0'
    } else if (placement.startsWith('right')) {
      positionClasses = 'border-r border-t'
      borderClasses = 'border-l-0 border-b-0'
    }

    return cn(base, variantColors[variant], positionClasses, borderClasses)
  }

  const tooltipContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={tooltipRef}
          className={cn(
            'fixed z-50 rounded-md font-medium pointer-events-none',
            sizeClasses[size],
            variantClasses[variant],
            contentClassName
          )}
          style={{
            left: position.x,
            top: position.y,
            maxWidth,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          onMouseEnter={trigger === 'hover' ? showTooltip : undefined}
          onMouseLeave={trigger === 'hover' ? hideTooltip : undefined}
        >
          {content}
          {arrow && (
            <div
              className={getArrowClasses()}
              style={{
                left: position.arrowX,
                top: position.arrowY,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )

  const triggerElement = React.cloneElement(children as React.ReactElement, {
    ref: (node: HTMLElement) => {
      triggerRef.current = node

      // Preserve existing ref
      const originalRef = (children as any)?.ref
      if (typeof originalRef === 'function') {
        originalRef(node)
      } else if (originalRef?.current !== undefined) {
        originalRef.current = node
      }
    },
    ...handleTriggerEvents,
  })

  React.useEffect(() => {
    return () => {
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current)
      }
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      <span className={className}>{triggerElement}</span>
      {mounted && portal && typeof document !== 'undefined'
        ? createPortal(tooltipContent, document.body)
        : tooltipContent}
    </>
  )
}

// Preset tooltip variants
export function InfoTooltip(props: Omit<TooltipProps, 'variant'>) {
  return <Tooltip variant='info' {...props} />
}

export function ErrorTooltip(props: Omit<TooltipProps, 'variant'>) {
  return <Tooltip variant='error' {...props} />
}

export function SuccessTooltip(props: Omit<TooltipProps, 'variant'>) {
  return <Tooltip variant='success' {...props} />
}

export function WarningTooltip(props: Omit<TooltipProps, 'variant'>) {
  return <Tooltip variant='warning' {...props} />
}

// Tooltip provider for managing global tooltip behavior
export interface TooltipProviderProps {
  children: React.ReactNode
  delay?: number
  hideDelay?: number
  portal?: boolean
}

const TooltipContext = React.createContext<{
  delay: number
  hideDelay: number
  portal: boolean
}>({
  delay: 200,
  hideDelay: 0,
  portal: true,
})

export function TooltipProvider({
  children,
  delay = 200,
  hideDelay = 0,
  portal = true,
}: TooltipProviderProps) {
  return (
    <TooltipContext.Provider value={{ delay, hideDelay, portal }}>
      {children}
    </TooltipContext.Provider>
  )
}

export function useTooltipContext() {
  return React.useContext(TooltipContext)
}
