export interface KeyboardShortcut {
  id: string
  name: string
  description: string
  keys: string[]
  category: 'navigation' | 'editing' | 'view' | 'notes' | 'search' | 'general'
  action: () => void
  enabled?: boolean
  global?: boolean
}

export interface KeyboardShortcutConfig {
  [key: string]: string[] // Map of action ID to key combinations
}

// Default keyboard shortcuts
export const defaultShortcuts: Omit<KeyboardShortcut, 'action'>[] = [
  // Navigation
  {
    id: 'navigate-next',
    name: 'Next Note',
    description: 'Navigate to the next note',
    keys: ['ArrowDown', 'j'],
    category: 'navigation',
  },
  {
    id: 'navigate-previous',
    name: 'Previous Note',
    description: 'Navigate to the previous note',
    keys: ['ArrowUp', 'k'],
    category: 'navigation',
  },
  // Quick switch shortcuts (1-9)
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `quick-switch-${i + 1}`,
    name: `Quick Switch ${i + 1}`,
    description: `Switch to note ${i + 1}`,
    keys: [`Cmd+${i + 1}`, `Ctrl+${i + 1}`],
    category: 'navigation' as const,
  })),

  // Note Management
  {
    id: 'create-note',
    name: 'New Note',
    description: 'Create a new note',
    keys: ['Cmd+N', 'Ctrl+N'],
    category: 'notes',
  },
  {
    id: 'delete-note',
    name: 'Delete Note',
    description: 'Delete the current note',
    keys: ['Cmd+D', 'Ctrl+D'],
    category: 'notes',
  },
  {
    id: 'save-note',
    name: 'Save Note',
    description: 'Save the current note',
    keys: ['Cmd+S', 'Ctrl+S'],
    category: 'notes',
  },

  // Search
  {
    id: 'open-search',
    name: 'Search',
    description: 'Open search dialog',
    keys: ['Cmd+K', 'Ctrl+K'],
    category: 'search',
  },
  {
    id: 'focus-filter',
    name: 'Focus Filter',
    description: 'Focus the sidebar filter',
    keys: ['Cmd+F', 'Ctrl+F'],
    category: 'search',
  },

  // View
  {
    id: 'toggle-sidebar',
    name: 'Toggle Sidebar',
    description: 'Show/hide the sidebar',
    keys: ['Cmd+,', 'Ctrl+,'],
    category: 'view',
  },
  {
    id: 'toggle-view-mode',
    name: 'Toggle View Mode',
    description: 'Switch between edit and view mode',
    keys: ['Cmd+E', 'Ctrl+E'],
    category: 'view',
  },
  {
    id: 'toggle-multi-select',
    name: 'Multi-Select Mode',
    description: 'Enable/disable multi-select mode',
    keys: ['Cmd+M', 'Ctrl+M'],
    category: 'view',
  },
  {
    id: 'select-all',
    name: 'Select All',
    description: 'Select all notes (in multi-select mode)',
    keys: ['Cmd+A', 'Ctrl+A'],
    category: 'view',
  },

  // General
  {
    id: 'close-dialog',
    name: 'Close Dialog',
    description: 'Close any open dialog or modal',
    keys: ['Escape'],
    category: 'general',
  },
  {
    id: 'command-palette',
    name: 'Command Palette',
    description: 'Open command palette',
    keys: ['Cmd+Shift+P', 'Ctrl+Shift+P'],
    category: 'general',
  },
  {
    id: 'shortcuts-help',
    name: 'Keyboard Shortcuts',
    description: 'Show keyboard shortcuts help',
    keys: ['Cmd+/', 'Ctrl+/'],
    category: 'general',
  },
]

export class KeyboardShortcutManager {
  private shortcuts: Map<string, KeyboardShortcut> = new Map()
  private keyMap: Map<string, string> = new Map() // Maps key combinations to action IDs
  private customConfig: KeyboardShortcutConfig = {}

  constructor() {
    this.loadCustomConfig()
  }

  // Register a shortcut
  register(shortcut: KeyboardShortcut) {
    this.shortcuts.set(shortcut.id, shortcut)
    this.updateKeyMap(shortcut)
  }

  // Unregister a shortcut
  unregister(id: string) {
    const shortcut = this.shortcuts.get(id)
    if (shortcut) {
      shortcut.keys.forEach((key) => {
        const normalizedKey = this.normalizeKey(key)
        this.keyMap.delete(normalizedKey)
      })
      this.shortcuts.delete(id)
    }
  }

  // Update key bindings for a shortcut
  updateKeys(id: string, newKeys: string[]) {
    const shortcut = this.shortcuts.get(id)
    if (shortcut) {
      // Remove old key mappings
      shortcut.keys.forEach((key) => {
        const normalizedKey = this.normalizeKey(key)
        this.keyMap.delete(normalizedKey)
      })

      // Update shortcut with new keys
      shortcut.keys = newKeys
      this.updateKeyMap(shortcut)

      // Save to custom config
      this.customConfig[id] = newKeys
      this.saveCustomConfig()
    }
  }

  // Get all shortcuts
  getAll(): KeyboardShortcut[] {
    return Array.from(this.shortcuts.values())
  }

  // Get shortcuts by category
  getByCategory(category: KeyboardShortcut['category']): KeyboardShortcut[] {
    return this.getAll().filter((s) => s.category === category)
  }

  // Get shortcut by ID
  getById(id: string): KeyboardShortcut | undefined {
    return this.shortcuts.get(id)
  }

  // Handle keyboard event
  handleKeyEvent(event: KeyboardEvent): boolean {
    const key = this.getKeyFromEvent(event)
    const normalizedKey = this.normalizeKey(key)
    const actionId = this.keyMap.get(normalizedKey)

    if (actionId) {
      const shortcut = this.shortcuts.get(actionId)
      if (shortcut && shortcut.enabled !== false) {
        event.preventDefault()
        shortcut.action()
        return true
      }
    }

    return false
  }

  // Check for conflicts
  checkConflict(keys: string[]): string | null {
    for (const key of keys) {
      const normalizedKey = this.normalizeKey(key)
      const existingId = this.keyMap.get(normalizedKey)
      if (existingId) {
        const existingShortcut = this.shortcuts.get(existingId)
        return existingShortcut ? existingShortcut.name : 'Unknown shortcut'
      }
    }
    return null
  }

  // Private methods
  private updateKeyMap(shortcut: KeyboardShortcut) {
    shortcut.keys.forEach((key) => {
      const normalizedKey = this.normalizeKey(key)
      this.keyMap.set(normalizedKey, shortcut.id)
    })
  }

  private normalizeKey(key: string): string {
    return key
      .toLowerCase()
      .replace('cmd', 'meta')
      .replace('ctrl', 'control')
      .replace(/\s+/g, '+')
  }

  private getKeyFromEvent(event: KeyboardEvent): string {
    const parts: string[] = []

    if (event.metaKey) parts.push('meta')
    if (event.ctrlKey && !event.metaKey) parts.push('control')
    if (event.shiftKey) parts.push('shift')
    if (event.altKey) parts.push('alt')

    // Handle special keys
    const key = event.key.toLowerCase()
    if (key === ' ') {
      parts.push('space')
    } else if (key.length === 1) {
      parts.push(key)
    } else {
      parts.push(key)
    }

    return parts.join('+')
  }

  private loadCustomConfig() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('keyboard-shortcuts')
      if (saved) {
        try {
          this.customConfig = JSON.parse(saved)
        } catch (error) {
          console.error('Failed to load custom keyboard shortcuts:', error)
        }
      }
    }
  }

  private saveCustomConfig() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(
          'keyboard-shortcuts',
          JSON.stringify(this.customConfig)
        )
      } catch (error) {
        console.error('Failed to save custom keyboard shortcuts:', error)
      }
    }
  }

  // Apply custom config to shortcuts
  applyCustomConfig(shortcuts: Omit<KeyboardShortcut, 'action'>[]) {
    return shortcuts.map((shortcut) => {
      const customKeys = this.customConfig[shortcut.id]
      if (customKeys) {
        return { ...shortcut, keys: customKeys }
      }
      return shortcut
    })
  }
}

// Global instance
export const shortcutManager = new KeyboardShortcutManager()
