'use client'

import React from 'react'
import { PlateEditor } from './plate-editor'

// Simple className utility function
const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface EnhancedPlateEditorProps {
  value?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  className?: string
  showToolbar?: boolean
}

export function EnhancedPlateEditor({
  value = [{ type: 'p', children: [{ text: '' }] }],
  onChange,
  placeholder = 'Start writing...',
  className,
  showToolbar = false,
}: EnhancedPlateEditorProps) {
  return (
    <div
      className={cn('rounded-lg border border-border bg-background', className)}
    >
      <PlateEditor
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='border-0 ring-0 focus-visible:ring-0'
      />
    </div>
  )
}
