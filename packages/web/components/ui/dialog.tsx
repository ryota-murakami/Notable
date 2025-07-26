'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className='fixed inset-0 bg-black/50'
        onClick={() => onOpenChange?.(false)}
      />
      <div className='fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]'>
        {children}
      </div>
    </div>
  )
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-background rounded-lg shadow-lg w-full max-w-lg p-6',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
DialogContent.displayName = 'DialogContent'

const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
)

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6',
      className
    )}
    {...props}
  />
)

const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
)

const DialogDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...props }) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
}
