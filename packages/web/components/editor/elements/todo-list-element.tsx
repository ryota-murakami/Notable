import React from 'react'
import { PlateElement, PlateElementProps } from '@udecode/plate-common'
import { useTodoListElement } from '@udecode/plate-list'
import { cn } from '../../../lib/utils'
import { Checkbox } from '../../ui/checkbox'

export const TodoListElement = React.forwardRef<
  React.ElementRef<typeof PlateElement>,
  PlateElementProps
>(({ className, ...props }, ref) => {
  const { element, setChecked } = useTodoListElement()
  const checked = element.checked as boolean

  return (
    <PlateElement
      ref={ref}
      className={cn('flex items-start gap-2 my-1', className)}
      {...props}
    >
      <div contentEditable={false} className='flex h-6 items-center'>
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => {
            setChecked(!!value)
          }}
        />
      </div>
      <span
        className={cn(
          'flex-1',
          checked && 'text-muted-foreground line-through'
        )}
      >
        {props.children}
      </span>
    </PlateElement>
  )
})

TodoListElement.displayName = 'TodoListElement'
