'use client'

import * as React from 'react'
const { useState } = React
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToggleBlockProps {
  attributes: any
  children: any
  element: {
    type: string
    open?: boolean
    title?: string
  }
  className?: string
}

export function ToggleBlock({
  attributes,
  children,
  element,
  className,
}: ToggleBlockProps) {
  const [isOpen, setIsOpen] = useState(element.open ?? false)
  const [title, setTitle] = useState(element.title || '')

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    // TODO: Update the element data in Slate
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    // TODO: Update the element data in Slate
  }

  return (
    <div
      {...attributes}
      className={cn(
        'toggle-block border border-gray-200 rounded-lg overflow-hidden my-2',
        'hover:border-gray-300 transition-colors',
        className
      )}
    >
      <div className='flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 transition-colors'>
        <button
          contentEditable={false}
          onClick={handleToggle}
          className='flex items-center justify-center w-6 h-6 rounded hover:bg-gray-200 transition-colors'
          type='button'
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <ChevronDown className='h-4 w-4 text-gray-600' />
          ) : (
            <ChevronRight className='h-4 w-4 text-gray-600' />
          )}
        </button>

        <input
          contentEditable={false}
          value={title}
          onChange={handleTitleChange}
          placeholder='Toggle title...'
          className='flex-1 bg-transparent border-none outline-none text-sm font-medium placeholder-gray-400'
        />
      </div>

      {isOpen && (
        <div className='p-3 border-t border-gray-200 bg-white'>
          <div className='prose prose-sm max-w-none'>{children}</div>
        </div>
      )}
    </div>
  )
}

export function ToggleElement(props: any) {
  return <ToggleBlock {...props} />
}
