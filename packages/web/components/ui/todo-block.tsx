'use client'

import * as React from 'react'
const { useCallback, useState } = React
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TodoBlockProps {
  attributes: any
  children: any
  element: {
    type: string
    checked?: boolean
    id?: string
  }
  className?: string
}

export function TodoBlock({
  attributes,
  children,
  element,
  className,
}: TodoBlockProps) {
  const [isChecked, setIsChecked] = useState(element.checked || false)

  const handleToggle = useCallback(() => {
    setIsChecked((prev) => !prev)
    // TODO: Update the element data in Slate
    // This would typically be done through the editor API
  }, [])

  return (
    <div
      {...attributes}
      className={cn(
        'todo-block flex items-start gap-3 py-1 group',
        isChecked && 'opacity-75',
        className
      )}
    >
      <button
        contentEditable={false}
        className={cn(
          'todo-checkbox mt-0.5 flex h-5 w-5 items-center justify-center rounded border-2 transition-all',
          'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
          isChecked
            ? 'bg-blue-500 border-blue-500 text-white'
            : 'border-gray-300 hover:border-gray-400'
        )}
        onClick={handleToggle}
        type='button'
        role='checkbox'
        aria-checked={isChecked}
      >
        {isChecked && <Check className='h-3 w-3' />}
      </button>

      <div
        className={cn(
          'flex-1 min-w-0 transition-all',
          isChecked && 'line-through text-gray-500'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function TodoElement(props: any) {
  return <TodoBlock {...props} />
}
