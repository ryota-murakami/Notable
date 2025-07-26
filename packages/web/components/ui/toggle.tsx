import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  size?: 'default' | 'sm' | 'lg'
  variant?: 'default' | 'outline'
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed = false,
      onPressedChange,
      onClick,
      size = 'default',
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onPressedChange?.(!pressed)
      onClick?.(e)
    }

    const sizeClasses = {
      default: 'h-10 px-3',
      sm: 'h-9 px-2.5',
      lg: 'h-11 px-5',
    }

    const variantClasses = {
      default: cn('bg-transparent hover:bg-muted', pressed && 'bg-muted'),
      outline: cn(
        'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        pressed && 'bg-accent text-accent-foreground'
      ),
    }

    return (
      <button
        type='button'
        ref={ref}
        aria-pressed={pressed}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onClick={handleClick}
        {...props}
      />
    )
  }
)

Toggle.displayName = 'Toggle'

export { Toggle }
