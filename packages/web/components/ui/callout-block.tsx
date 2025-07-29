'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  AlertCircle,
  Zap,
  Quote,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type CalloutType =
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'tip'
  | 'note'
  | 'important'
  | 'quote'

interface CalloutBlockProps {
  attributes: any
  children: any
  element: {
    type: string
    calloutType?: CalloutType
    emoji?: string
  }
  className?: string
}

const calloutConfigs = {
  info: {
    icon: Info,
    colors: 'bg-blue-50 border-blue-200 text-blue-900',
    iconColor: 'text-blue-600',
    emoji: '💡',
  },
  warning: {
    icon: AlertTriangle,
    colors: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    iconColor: 'text-yellow-600',
    emoji: '⚠️',
  },
  success: {
    icon: CheckCircle,
    colors: 'bg-green-50 border-green-200 text-green-900',
    iconColor: 'text-green-600',
    emoji: '✅',
  },
  error: {
    icon: XCircle,
    colors: 'bg-red-50 border-red-200 text-red-900',
    iconColor: 'text-red-600',
    emoji: '❌',
  },
  tip: {
    icon: Lightbulb,
    colors: 'bg-amber-50 border-amber-200 text-amber-900',
    iconColor: 'text-amber-600',
    emoji: '💡',
  },
  note: {
    icon: AlertCircle,
    colors: 'bg-gray-50 border-gray-200 text-gray-900',
    iconColor: 'text-gray-600',
    emoji: '📝',
  },
  important: {
    icon: Zap,
    colors: 'bg-purple-50 border-purple-200 text-purple-900',
    iconColor: 'text-purple-600',
    emoji: '⚡',
  },
  quote: {
    icon: Quote,
    colors: 'bg-slate-50 border-slate-200 text-slate-900',
    iconColor: 'text-slate-600',
    emoji: '💭',
  },
}

export function CalloutBlock({
  attributes,
  children,
  element,
  className,
}: CalloutBlockProps) {
  const [calloutType, setCalloutType] = useState<CalloutType>(
    element.calloutType || 'info'
  )
  const [useEmoji, setUseEmoji] = useState(true)

  const config = calloutConfigs[calloutType]
  const Icon = config.icon

  const handleTypeChange = (newType: CalloutType) => {
    setCalloutType(newType)
    // TODO: Update the element data in Slate
  }

  const toggleEmojiIcon = () => {
    setUseEmoji((prev) => !prev)
    // TODO: Update the element data in Slate
  }

  return (
    <div
      {...attributes}
      className={cn(
        'callout-block border rounded-lg p-4 my-3 transition-all',
        config.colors,
        className
      )}
    >
      <div className='flex items-start gap-3'>
        {/* Icon/Emoji Toggle */}
        <button
          contentEditable={false}
          onClick={toggleEmojiIcon}
          className='flex items-center justify-center w-6 h-6 mt-0.5 rounded hover:bg-black/5 transition-colors'
          type='button'
          title='Toggle between emoji and icon'
        >
          {useEmoji ? (
            <span className='text-lg leading-none'>{config.emoji}</span>
          ) : (
            <Icon className={cn('h-5 w-5', config.iconColor)} />
          )}
        </button>

        {/* Content */}
        <div className='flex-1 min-w-0'>{children}</div>

        {/* Type Selector */}
        <div className='relative'>
          <select
            contentEditable={false}
            value={calloutType}
            onChange={(e) => handleTypeChange(e.target.value as CalloutType)}
            className='text-xs bg-transparent border border-current rounded px-2 py-1 opacity-50 hover:opacity-100 transition-opacity'
          >
            <option value='info'>Info</option>
            <option value='warning'>Warning</option>
            <option value='success'>Success</option>
            <option value='error'>Error</option>
            <option value='tip'>Tip</option>
            <option value='note'>Note</option>
            <option value='important'>Important</option>
            <option value='quote'>Quote</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export function CalloutElement(props: any) {
  return <CalloutBlock {...props} />
}
