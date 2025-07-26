'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface DropdownMenuProps {
  children: React.ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false)

  const trigger = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === DropdownMenuTrigger
  )

  const content = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === DropdownMenuContent
  )

  return (
    <div className='relative inline-block text-left'>
      {React.isValidElement(trigger) &&
        React.cloneElement(trigger as React.ReactElement<any>, {
          onClick: () => setOpen(!open),
        })}
      {open && (
        <>
          <div className='fixed inset-0 z-10' onClick={() => setOpen(false)} />
          <div className='absolute right-0 z-20 mt-2'>
            {React.isValidElement(content) &&
              React.cloneElement(content as React.ReactElement<any>, {
                onClose: () => setOpen(false),
              })}
          </div>
        </>
      )}
    </div>
  )
}

interface DropdownMenuTriggerProps {
  asChild?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  asChild,
  children,
  onClick,
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick,
    })
  }

  return <button onClick={onClick}>{children}</button>
}

interface DropdownMenuContentProps {
  align?: 'start' | 'center' | 'end'
  className?: string
  children: React.ReactNode
  onClose?: () => void
}

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  align = 'center',
  className,
  children,
  onClose,
}) => {
  const alignClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0',
  }

  return (
    <div
      className={cn(
        'min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        alignClasses[align],
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childWithProps = child as React.ReactElement<{
            onClick?: () => void
          }>
          return React.cloneElement(childWithProps, {
            onSelect: () => {
              if (childWithProps.props.onClick) {
                childWithProps.props.onClick()
              }
              onClose?.()
            },
          })
        }
        return child
      })}
    </div>
  )
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void
}

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ className, children, onSelect, onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e)
    onSelect?.()
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuItem.displayName = 'DropdownMenuItem'

const DropdownMenuLabel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
)

const DropdownMenuSeparator: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
