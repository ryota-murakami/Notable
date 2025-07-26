'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [open, setOpen] = React.useState(false)
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const trigger = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === SelectTrigger
  )

  const content = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === SelectContent
  )

  return (
    <div className='relative'>
      {React.isValidElement(trigger) &&
        React.cloneElement(trigger as React.ReactElement<any>, {
          onClick: () => setOpen(!open),
          ref: triggerRef,
        })}
      {open && (
        <>
          <div className='fixed inset-0 z-10' onClick={() => setOpen(false)} />
          <div className='absolute z-20 mt-1 w-full'>
            {React.isValidElement(content) &&
              React.cloneElement(content as React.ReactElement<any>, {
                onValueChange: (val: string) => {
                  onValueChange?.(val)
                  setOpen(false)
                },
              })}
          </div>
        </>
      )}
    </div>
  )
}

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 opacity-50' />
    </button>
  )
})
SelectTrigger.displayName = 'SelectTrigger'

const SelectValue: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  return <span>{placeholder}</span>
}

interface SelectContentProps {
  children: React.ReactNode
  onValueChange?: (value: string) => void
}

const SelectContent: React.FC<SelectContentProps> = ({
  children,
  onValueChange,
}) => {
  return (
    <div className='rounded-md border bg-popover p-1 text-popover-foreground shadow-md'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            onSelect: onValueChange,
          })
        }
        return child
      })}
    </div>
  )
}

interface SelectItemProps {
  value: string
  children: React.ReactNode
  onSelect?: (value: string) => void
}

const SelectItem: React.FC<SelectItemProps> = ({
  value,
  children,
  onSelect,
}) => {
  return (
    <div
      className='relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground'
      onClick={() => onSelect?.(value)}
    >
      {children}
    </div>
  )
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }
