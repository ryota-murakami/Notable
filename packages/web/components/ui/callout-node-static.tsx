import * as React from 'react'

import { type SlateElementProps, SlateElement } from 'platejs'

import { cn } from '@/lib/utils'

export function CalloutElementStatic({
  children,
  className,
  ...props
}: SlateElementProps) {
  return (
    <SlateElement
      className={cn('my-1 flex rounded-sm bg-muted p-4 pl-3', className)}
      style={{
        backgroundColor: (props.element as { backgroundColor?: string })
          .backgroundColor,
      }}
      {...props}
    >
      <div className='flex w-full gap-2 rounded-md'>
        <div
          className='size-6 text-[18px] select-none'
          style={{
            fontFamily:
              '"Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols',
          }}
        >
          <span data-plate-prevent-deserialization>
            {(props.element as { icon?: string }).icon || '💡'}
          </span>
        </div>
        <div className='w-full'>{children}</div>
      </div>
    </SlateElement>
  )
}
