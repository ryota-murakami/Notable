'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface ToolbarButtonProps
  extends React.ComponentProps<typeof Button> {
  pressed?: boolean
  onPressedChange?: (pressed: boolean) => void
  tooltip?: string
}

export const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  ToolbarButtonProps
>(
  (
    {
      className,
      pressed,
      onPressedChange,
      tooltip,
      children,
      onClick,
      onMouseDown,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onPressedChange?.(!pressed)
      onClick?.(e)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Prevent focus loss to maintain text selection
      e.preventDefault()
      onMouseDown?.(e)
    }

    return (
      <Button
        ref={ref}
        variant={pressed ? 'default' : 'ghost'}
        size='sm'
        className={cn('h-8 px-2', className)}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        title={tooltip}
        data-plate-prevent-unselect
        {...props}
      >
        {children}
      </Button>
    )
  }
)

ToolbarButton.displayName = 'ToolbarButton'
