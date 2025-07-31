import * as React from 'react'
import { type KeyboardShortcut, shortcutManager } from './keyboard-shortcuts'
import type { EnhancedTag } from '@/types/tags'

export interface TagShortcutActions {
  openTagPicker: () => void
  openTagManagement: () => void
  toggleTagFilter: (tagName: string) => void
  createQuickTag: (tagName: string) => void
  removeTagFromNote: (tagId: string) => void
  clearAllTags: () => void
  focusTagInput: () => void
  selectNextTag: () => void
  selectPreviousTag: () => void
  confirmTagSelection: () => void
}

// Tag-specific keyboard shortcuts
export const tagShortcuts: Omit<KeyboardShortcut, 'action'>[] = [
  {
    id: 'open-tag-picker',
    name: 'Open Tag Picker',
    description: 'Open tag picker to add tags to current note',
    keys: ['Cmd+T', 'Ctrl+T'],
    category: 'editing',
  },
  {
    id: 'open-tag-management',
    name: 'Tag Management',
    description: 'Open tag management panel',
    keys: ['Cmd+Shift+T', 'Ctrl+Shift+T'],
    category: 'general',
  },
  {
    id: 'quick-tag-work',
    name: 'Quick Tag: Work',
    description: 'Quickly add "work" tag to current note',
    keys: ['Cmd+1', 'Ctrl+1'],
    category: 'editing',
  },
  {
    id: 'quick-tag-personal',
    name: 'Quick Tag: Personal',
    description: 'Quickly add "personal" tag to current note',
    keys: ['Cmd+2', 'Ctrl+2'],
    category: 'editing',
  },
  {
    id: 'quick-tag-important',
    name: 'Quick Tag: Important',
    description: 'Quickly add "important" tag to current note',
    keys: ['Cmd+3', 'Ctrl+3'],
    category: 'editing',
  },
  {
    id: 'focus-tag-input',
    name: 'Focus Tag Input',
    description: 'Focus the tag input field when available',
    keys: ['Alt+T'],
    category: 'navigation',
  },
  {
    id: 'clear-all-tags',
    name: 'Clear All Tags',
    description: 'Remove all tags from current note',
    keys: ['Cmd+Shift+Backspace', 'Ctrl+Shift+Backspace'],
    category: 'editing',
  },
  {
    id: 'filter-by-tag',
    name: 'Filter by Tag',
    description: 'Open tag filter in search',
    keys: ['Cmd+Shift+F', 'Ctrl+Shift+F'],
    category: 'search',
  },
]

export class TagShortcutManager {
  private actions: TagShortcutActions | null = null
  private registeredShortcuts: Set<string> = new Set()

  constructor() {
    this.registerDefaultShortcuts()
  }

  // Set the action handlers
  setActions(actions: TagShortcutActions) {
    this.actions = actions
    this.updateShortcutActions()
  }

  // Register tag shortcuts
  private registerDefaultShortcuts() {
    tagShortcuts.forEach((shortcut) => {
      const fullShortcut: KeyboardShortcut = {
        ...shortcut,
        action: () => this.handleShortcutAction(shortcut.id),
      }

      shortcutManager.register(fullShortcut)
      this.registeredShortcuts.add(shortcut.id)
    })
  }

  // Handle shortcut actions
  private handleShortcutAction(shortcutId: string) {
    if (!this.actions) {
      console.warn('Tag shortcut actions not set')
      return
    }

    switch (shortcutId) {
      case 'open-tag-picker':
        this.actions.openTagPicker()
        break
      case 'open-tag-management':
        this.actions.openTagManagement()
        break
      case 'quick-tag-work':
        this.actions.createQuickTag('work')
        break
      case 'quick-tag-personal':
        this.actions.createQuickTag('personal')
        break
      case 'quick-tag-important':
        this.actions.createQuickTag('important')
        break
      case 'focus-tag-input':
        this.actions.focusTagInput()
        break
      case 'clear-all-tags':
        this.actions.clearAllTags()
        break
      case 'filter-by-tag':
        this.actions.toggleTagFilter('')
        break
      default:
        console.warn(`Unknown tag shortcut: ${shortcutId}`)
    }
  }

  // Update shortcut actions when actions change
  private updateShortcutActions() {
    this.registeredShortcuts.forEach((shortcutId) => {
      const shortcut = shortcutManager.getById(shortcutId)
      if (shortcut) {
        shortcut.action = () => this.handleShortcutAction(shortcutId)
      }
    })
  }

  // Register custom quick tag shortcuts
  registerQuickTag(tagName: string, keys: string[], slotNumber?: number) {
    const shortcutId = `quick-tag-${tagName.toLowerCase()}`
    const displayName = `Quick Tag: ${tagName.charAt(0).toUpperCase() + tagName.slice(1)}`

    // Remove existing shortcut if it exists
    if (this.registeredShortcuts.has(shortcutId)) {
      shortcutManager.unregister(shortcutId)
      this.registeredShortcuts.delete(shortcutId)
    }

    const shortcut: KeyboardShortcut = {
      id: shortcutId,
      name: displayName,
      description: `Quickly add "${tagName}" tag to current note`,
      keys,
      category: 'editing',
      action: () => this.actions?.createQuickTag(tagName),
    }

    shortcutManager.register(shortcut)
    this.registeredShortcuts.add(shortcutId)
  }

  // Unregister a quick tag shortcut
  unregisterQuickTag(tagName: string) {
    const shortcutId = `quick-tag-${tagName.toLowerCase()}`
    if (this.registeredShortcuts.has(shortcutId)) {
      shortcutManager.unregister(shortcutId)
      this.registeredShortcuts.delete(shortcutId)
    }
  }

  // Setup quick tags from user's most used tags
  setupQuickTagsFromUsage(tags: EnhancedTag[], maxSlots: number = 9) {
    // Sort tags by usage count and take top ones
    const topTags = tags
      .filter((tag) => (tag.usage_count || 0) > 0)
      .sort((a, b) => (b.usage_count || 0) - (a.usage_count || 0))
      .slice(0, maxSlots)

    // Clear existing quick tags (except predefined ones)
    const predefinedTags = ['work', 'personal', 'important']
    this.registeredShortcuts.forEach((shortcutId) => {
      if (shortcutId.startsWith('quick-tag-')) {
        const tagName = shortcutId.replace('quick-tag-', '')
        if (!predefinedTags.includes(tagName)) {
          shortcutManager.unregister(shortcutId)
          this.registeredShortcuts.delete(shortcutId)
        }
      }
    })

    // Register new quick tags
    topTags.forEach((tag, index) => {
      const slotNumber = index + 4 // Start from 4 (after predefined slots 1-3)
      if (slotNumber <= 9) {
        this.registerQuickTag(
          tag.name,
          [`Cmd+${slotNumber}`, `Ctrl+${slotNumber}`],
          slotNumber
        )
      }
    })
  }

  // Get all registered tag shortcuts
  getRegisteredShortcuts(): KeyboardShortcut[] {
    return Array.from(this.registeredShortcuts)
      .map((id) => shortcutManager.getById(id))
      .filter(
        (shortcut): shortcut is KeyboardShortcut => shortcut !== undefined
      )
  }

  // Cleanup - unregister all tag shortcuts
  cleanup() {
    this.registeredShortcuts.forEach((shortcutId) => {
      shortcutManager.unregister(shortcutId)
    })
    this.registeredShortcuts.clear()
    this.actions = null
  }
}

// Hook for managing tag shortcuts in React components
export function useTagShortcuts(actions: TagShortcutActions) {
  const [manager] = React.useState(() => new TagShortcutManager())

  React.useEffect(() => {
    manager.setActions(actions)
    return () => manager.cleanup()
  }, [manager, actions])

  return {
    manager,
    registerQuickTag: manager.registerQuickTag.bind(manager),
    unregisterQuickTag: manager.unregisterQuickTag.bind(manager),
    setupQuickTagsFromUsage: manager.setupQuickTagsFromUsage.bind(manager),
    getRegisteredShortcuts: manager.getRegisteredShortcuts.bind(manager),
  }
}

// Global instance
export const tagShortcutManager = new TagShortcutManager()

// Helper function to setup tag shortcuts in the app
export function setupTagShortcuts(actions: TagShortcutActions) {
  tagShortcutManager.setActions(actions)
  return tagShortcutManager
}

// Helper to create quick tag input handler
export function createTagInputKeyHandler(
  onTag: (tagName: string) => void,
  onNavigate: (direction: 'up' | 'down') => void,
  onConfirm: () => void,
  onEscape: () => void
) {
  return (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        onNavigate('up')
        break
      case 'ArrowDown':
        event.preventDefault()
        onNavigate('down')
        break
      case 'Enter':
        event.preventDefault()
        onConfirm()
        break
      case 'Escape':
        event.preventDefault()
        onEscape()
        break
      case 'Tab':
        // Allow tab navigation but don't interfere
        break
      default:
        // Check for hash tag syntax
        if (
          event.key === '#' ||
          (event.target as HTMLInputElement).value.includes('#')
        ) {
          // Let the input handle # naturally, but we could add logic here for tag parsing
        }
    }
  }
}

// Helper to parse hashtags from text input
export function parseHashtagsFromText(text: string): string[] {
  const tagRegex = /#([a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*)/g
  const matches = Array.from(text.matchAll(tagRegex))
  return matches.map((match) => match[1])
}

// Helper to validate tag name for keyboard input
export function isValidTagName(name: string): boolean {
  const tagNameRegex = /^[a-zA-Z0-9_-]+$/
  return tagNameRegex.test(name) && name.length > 0 && name.length <= 50
}
