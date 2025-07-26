'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('grid gap-2', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childWithProps = child as React.ReactElement<any>
          return React.cloneElement(childWithProps, {
            checked: childWithProps.props.value === value,
            onChange: () => onValueChange?.(childWithProps.props.value || ''),
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
