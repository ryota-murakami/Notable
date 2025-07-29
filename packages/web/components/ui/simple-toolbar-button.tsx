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
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onPressedChange?.(!pressed)
      onClick?.(e)
    }

    return (
      <Button
        ref={ref}
        variant={pressed ? 'default' : 'ghost'}
        size='sm'
        className={cn('h-8 px-2', className)}
        onClick={handleClick}
        title={tooltip}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

ToolbarButton.displayName = 'ToolbarButton'
