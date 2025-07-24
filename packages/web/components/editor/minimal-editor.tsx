'use client'

import React from 'react'

// Simple className utility function
const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface MinimalEditorProps {
  value?: any[]
  onChange?: (value: any[]) => void
  placeholder?: string
  className?: string
}

export function MinimalEditor({
  value = [{ type: 'p', children: [{ text: '' }] }],
  onChange,
  placeholder = 'Start writing...',
  className,
}: MinimalEditorProps) {
  // Convert from Plate format to plain text
  const convertToText = (plateValue: any[]): string => {
    if (!Array.isArray(plateValue)) return ''

    const extractText = (node: any): string => {
      if (typeof node === 'string') return node
      if (node.text) return node.text
      if (node.children && Array.isArray(node.children)) {
        return node.children.map(extractText).join('')
      }
      return ''
    }

    return plateValue.map(extractText).join('\n')
  }

  // Convert from plain text to Plate format
  const convertToPlate = (text: string): any[] => {
    if (!text) return [{ type: 'p', children: [{ text: '' }] }]

    const lines = text.split('\n')
    return lines.map((line) => ({
      type: 'p',
      children: [{ text: line }],
    }))
  }

  const textValue = convertToText(value)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value
    if (onChange) {
      const plateValue = convertToPlate(newText)
      onChange(plateValue)
    }
  }

  return (
    <textarea
      value={textValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={cn(
        'min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y font-mono',
        className
      )}
    />
  )
}
