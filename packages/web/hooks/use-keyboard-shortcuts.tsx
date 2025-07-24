import { useEffect, useCallback, useState } from 'react'
import {
  KeyboardShortcut,
  shortcutManager,
  defaultShortcuts,
} from '@/lib/keyboard-shortcuts'

interface UseKeyboardShortcutsOptions {
  enabled?: boolean
  preventDefault?: boolean
  stopPropagation?: boolean
}

export function useKeyboardShortcuts(
  shortcuts: Partial<KeyboardShortcut>[],
  options: UseKeyboardShortcutsOptions = {}
) {
  const {
    enabled = true,
    preventDefault = true,
    stopPropagation = false,
  } = options

  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip if user is typing in an input/textarea
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).contentEditable === 'true'
      ) {
        return
      }

      const handled = shortcutManager.handleKeyEvent(event)

      if (handled) {
        if (preventDefault) event.preventDefault()
        if (stopPropagation) event.stopPropagation()
      }
    }

    // Register shortcuts
    shortcuts.forEach((shortcut) => {
      if (shortcut.id && shortcut.action) {
        const defaultShortcut = defaultShortcuts.find(
          (s) => s.id === shortcut.id
        )
        const fullShortcut: KeyboardShortcut = {
          ...defaultShortcut,
          ...shortcut,
          keys: shortcut.keys || defaultShortcut?.keys || [],
          category: shortcut.category || defaultShortcut?.category || 'general',
          name: shortcut.name || defaultShortcut?.name || shortcut.id,
          description:
            shortcut.description || defaultShortcut?.description || '',
        } as KeyboardShortcut

        shortcutManager.register(fullShortcut)
      }
    })

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)

      // Unregister shortcuts
      shortcuts.forEach((shortcut) => {
        if (shortcut.id) {
          shortcutManager.unregister(shortcut.id)
        }
      })
    }
  }, [shortcuts, enabled, preventDefault, stopPropagation])
}

// Hook for managing all keyboard shortcuts
export function useKeyboardShortcutManager() {
  const [shortcuts, setShortcuts] = useState<KeyboardShortcut[]>([])

  useEffect(() => {
    setShortcuts(shortcutManager.getAll())
  }, [])

  const updateShortcutKeys = useCallback((id: string, newKeys: string[]) => {
    const conflict = shortcutManager.checkConflict(newKeys)
    if (conflict) {
      return { success: false, error: `Conflict with "${conflict}"` }
    }

    shortcutManager.updateKeys(id, newKeys)
    setShortcuts(shortcutManager.getAll())
    return { success: true }
  }, [])

  const resetToDefaults = useCallback(() => {
    // Clear custom config
    if (typeof window !== 'undefined') {
      localStorage.removeItem('keyboard-shortcuts')
    }

    // Re-register all shortcuts with default keys
    shortcuts.forEach((shortcut) => {
      const defaultShortcut = defaultShortcuts.find((s) => s.id === shortcut.id)
      if (defaultShortcut) {
        shortcutManager.updateKeys(shortcut.id, defaultShortcut.keys)
      }
    })

    setShortcuts(shortcutManager.getAll())
  }, [shortcuts])

  const getShortcutsByCategory = useCallback(
    (category: KeyboardShortcut['category']) => {
      return shortcuts.filter((s) => s.category === category)
    },
    [shortcuts]
  )

  return {
    shortcuts,
    updateShortcutKeys,
    resetToDefaults,
    getShortcutsByCategory,
  }
}
