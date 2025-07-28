import { useCallback, useEffect } from 'react'

type ShortcutHandler = () => void

interface ShortcutHandlers {
  'cmd+shift+p': ShortcutHandler
  'cmd+/': ShortcutHandler
  'cmd+k': ShortcutHandler
  'cmd+e': ShortcutHandler
  'cmd+,': ShortcutHandler
  'cmd+m': ShortcutHandler
  'cmd+a': ShortcutHandler
  'cmd+1': ShortcutHandler
  'cmd+2': ShortcutHandler
  'cmd+3': ShortcutHandler
  'arrowdown': ShortcutHandler
  'arrowup': ShortcutHandler
  'j': ShortcutHandler
  'k': ShortcutHandler
}

export function useKeyboardShortcuts(handlers: Partial<ShortcutHandlers>) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      const target = event.target as HTMLElement
      const tagName = target.tagName.toLowerCase()
      if (
        tagName === 'input' ||
        tagName === 'textarea' ||
        target.contentEditable === 'true'
      ) {
        return
      }

      const { key, metaKey, ctrlKey, shiftKey, altKey } = event
      const modifier = metaKey || ctrlKey

      // Build shortcut string
      let shortcut = ''
      if (modifier) shortcut += 'cmd+'
      if (shiftKey) shortcut += 'shift+'
      if (altKey) shortcut += 'alt+'
      
      // Handle special keys
      const normalizedKey = key.toLowerCase()
      if (normalizedKey === 'escape') {
        return // Let escape be handled normally
      }
      
      shortcut += normalizedKey

      // Check if we have a handler for this shortcut
      const handler = handlers[shortcut as keyof ShortcutHandlers]
      if (handler) {
        event.preventDefault()
        handler()
      }
    },
    [handlers]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}