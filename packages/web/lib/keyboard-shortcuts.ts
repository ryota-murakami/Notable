export interface KeyboardShortcut {
  id: string
  name: string
  description: string
  keys: string[]
  category:
    | 'navigation'
    | 'editing'
    | 'view'
    | 'notes'
    | 'search'
    | 'general'
    | 'ai'
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
    id: 'open-advanced-search',
    name: 'Advanced Search',
    description: 'Open advanced search dialog',
    keys: ['Cmd+Shift+F', 'Ctrl+Shift+F'],
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

  // New Feature Shortcuts

  // Daily Notes
  {
    id: 'open-daily-note',
    name: "Today's Daily Note",
    description: "Open or create today's daily note",
    keys: ['Cmd+T', 'Ctrl+T'],
    category: 'notes',
  },
  {
    id: 'open-yesterday-note',
    name: "Yesterday's Daily Note",
    description: "Open yesterday's daily note",
    keys: ['Cmd+Shift+T', 'Ctrl+Shift+T'],
    category: 'notes',
  },

  // Version History
  {
    id: 'open-version-history',
    name: 'Version History',
    description: 'Open version history for current note',
    keys: ['Cmd+H', 'Ctrl+H'],
    category: 'notes',
  },

  // AI Features
  {
    id: 'ai-generate',
    name: 'AI Generate',
    description: 'Open AI content generation',
    keys: ['Cmd+Shift+G', 'Ctrl+Shift+G'],
    category: 'ai',
  },
  {
    id: 'ai-summary',
    name: 'AI Summary',
    description: 'Generate AI summary of content',
    keys: ['Cmd+Shift+S', 'Ctrl+Shift+S'],
    category: 'ai',
  },
  {
    id: 'ai-improve',
    name: 'AI Improve',
    description: 'Improve content with AI',
    keys: ['Cmd+Shift+I', 'Ctrl+Shift+I'],
    category: 'ai',
  },

  // Templates
  {
    id: 'open-template-picker',
    name: 'Template Picker',
    description: 'Open template picker dialog',
    keys: ['Cmd+Option+T', 'Ctrl+Alt+T'],
    category: 'notes',
  },

  // Export
  {
    id: 'open-export',
    name: 'Export Note',
    description: 'Open export dialog for current note',
    keys: ['Cmd+Shift+E', 'Ctrl+Shift+E'],
    category: 'view',
  },

  // Graph View
  {
    id: 'open-graph-view',
    name: 'Graph View',
    description: 'Open graph visualization',
    keys: ['Cmd+G', 'Ctrl+G'],
    category: 'navigation',
  },

  // Tag Management
  {
    id: 'open-tag-management',
    name: 'Manage Tags',
    description: 'Open tag management panel',
    keys: ['Cmd+Shift+M', 'Ctrl+Shift+M'],
    category: 'notes',
  },

  // Smart Suggestions
  {
    id: 'toggle-smart-suggestions',
    name: 'Toggle Smart Suggestions',
    description: 'Show/hide smart suggestions panel',
    keys: ['Cmd+Shift+R', 'Ctrl+Shift+R'],
    category: 'view',
  },

  // Editor Formatting
  {
    id: 'format-bold',
    name: 'Bold',
    description: 'Make text bold',
    keys: ['Cmd+B', 'Ctrl+B'],
    category: 'editing',
  },
  {
    id: 'format-italic',
    name: 'Italic',
    description: 'Make text italic',
    keys: ['Cmd+I', 'Ctrl+I'],
    category: 'editing',
  },
  {
    id: 'format-underline',
    name: 'Underline',
    description: 'Underline text',
    keys: ['Cmd+U', 'Ctrl+U'],
    category: 'editing',
  },
  {
    id: 'format-code',
    name: 'Code',
    description: 'Format as inline code',
    keys: ['Cmd+`', 'Ctrl+`'],
    category: 'editing',
  },
  {
    id: 'format-strikethrough',
    name: 'Strikethrough',
    description: 'Strike through text',
    keys: ['Cmd+Shift+X', 'Ctrl+Shift+X'],
    category: 'editing',
  },

  // Note Organization
  {
    id: 'toggle-favorite',
    name: 'Toggle Favorite',
    description: 'Add/remove current note from favorites',
    keys: ['Cmd+Option+F', 'Ctrl+Alt+F'],
    category: 'notes',
  },
  {
    id: 'toggle-pin',
    name: 'Toggle Pin',
    description: 'Pin/unpin current note',
    keys: ['Cmd+Option+P', 'Ctrl+Alt+P'],
    category: 'notes',
  },
  {
    id: 'toggle-archive',
    name: 'Toggle Archive',
    description: 'Archive/unarchive current note',
    keys: ['Cmd+Shift+A', 'Ctrl+Shift+A'],
    category: 'notes',
  },

  // Quick Actions
  {
    id: 'duplicate-note',
    name: 'Duplicate Note',
    description: 'Create a copy of current note',
    keys: ['Cmd+Shift+D', 'Ctrl+Shift+D'],
    category: 'notes',
  },
  {
    id: 'focus-title',
    name: 'Focus Title',
    description: 'Focus the note title input',
    keys: ['Cmd+Shift+L', 'Ctrl+Shift+L'],
    category: 'editing',
  },
  {
    id: 'focus-content',
    name: 'Focus Content',
    description: 'Focus the note content editor',
    keys: ['Cmd+Shift+K', 'Ctrl+Shift+K'],
    category: 'editing',
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
