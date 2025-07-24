'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@udecode/cn'

interface SimpleEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

export function SimpleEditor({
  value = '',
  onChange,
  placeholder = 'Start writing...',
  className,
}: SimpleEditorProps) {
  const [content, setContent] = useState(value)

  useEffect(() => {
    setContent(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setContent(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  return (
    <textarea
      value={content}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(
        'min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y font-mono',
        className
      )}
    />
  )
}
