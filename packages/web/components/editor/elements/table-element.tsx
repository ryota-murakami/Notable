import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { cn } from '../../../lib/utils'

export const TableElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'my-4 w-full overflow-hidden rounded-md border border-border',
        className
      )}
      {...props}
    >
      <table>
        <tbody>{props.children}</tbody>
      </table>
    </PlateElement>
  )
})

TableElement.displayName = 'TableElement'

export const TableRowElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn('border-b border-border last:border-b-0', className)}
      {...props}
    >
      <tr>{props.children}</tr>
    </PlateElement>
  )
})

TableRowElement.displayName = 'TableRowElement'

export interface TableCellElementProps extends PlateElementProps {
  variant?: 'td' | 'th'
}

export const TableCellElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  TableCellElementProps
>(({ className, variant = 'td', ...props }, ref) => {
  const Component = variant

  return (
    <PlateElement
      ref={ref}
      asChild
      className={cn(
        'border-r border-border px-3 py-2 text-left last:border-r-0',
        variant === 'th' && 'bg-muted font-medium',
        className
      )}
      {...props}
    >
      <Component>{props.children}</Component>
    </PlateElement>
  )
})

TableCellElement.displayName = 'TableCellElement'
