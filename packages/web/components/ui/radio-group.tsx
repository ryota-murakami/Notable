'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
  className?: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  children,
  className,
}) => {
  return (
    <div className={cn('grid gap-2', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            checked: child.props.value === value,
            onChange: () => onValueChange?.(child.props.value),
          })
        }
        return child
      })}
    </div>
  )
}

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type='radio'
        ref={ref}
        className={cn(
          'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    )
  }
)
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
