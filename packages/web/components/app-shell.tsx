'use client'

import { useEffect, useRef, useState } from 'react'
import { CommandPalette } from './ui/command-palette'
import { KeyboardShortcutsDialog } from './ui/keyboard-shortcuts-dialog'
import { SearchDialog } from './ui/search-dialog'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [notes, setNotes] = useState<string[]>([])
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1)
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false)
  const [selectedNotes, setSelectedNotes] = useState<Set<number>>(new Set())
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [keyboardShortcutsOpen, setKeyboardShortcutsOpen] = useState(false)
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle custom events from command palette
  useEffect(() => {
    const handleCustomEvents = (event: Event) => {
      switch (event.type) {
        case 'create-new-note':
          setNotes(prev => [...prev, 'Untitled'])
          break
        case 'toggle-sidebar':
          setIsSidebarOpen(prev => !prev)
          break
        case 'show-keyboard-shortcuts':
          setKeyboardShortcutsOpen(true)
          break
      }
    }

    window.addEventListener('create-new-note', handleCustomEvents)
    window.addEventListener('toggle-edit-mode', handleCustomEvents)
    window.addEventListener('toggle-sidebar', handleCustomEvents)
    window.addEventListener('show-keyboard-shortcuts', handleCustomEvents)

    return () => {
      window.removeEventListener('create-new-note', handleCustomEvents)
      window.removeEventListener('toggle-edit-mode', handleCustomEvents)
      window.removeEventListener('toggle-sidebar', handleCustomEvents)
      window.removeEventListener('show-keyboard-shortcuts', handleCustomEvents)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cross-platform modifier key detection
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform) || 
                   /macOS|iPhone OS/.test(navigator.userAgent)
      const modifier = isMac ? event.metaKey : event.ctrlKey
      
      // Don't handle shortcuts when typing in input fields
      const target = event.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return
      }
      
      // Handle Escape for closing dialogs and menu
      if (event.key === 'Escape') {
        if (commandPaletteOpen) {
          setCommandPaletteOpen(false)
          return
        }
        if (keyboardShortcutsOpen) {
          setKeyboardShortcutsOpen(false)
          return
        }
        if (searchDialogOpen) {
          setSearchDialogOpen(false)
          return
        }
        if (isMenuOpen) {
          setIsMenuOpen(false)
          buttonRef.current?.focus()
          return
        }
      }
      
      // Handle Tab navigation for menu
      if (event.key === 'Tab' && isMenuOpen) {
        const menuItems = menuRef.current?.querySelectorAll('button[role="menuitem"]')
        if (menuItems && menuItems.length > 0) {
          const firstItem = menuItems[0] as HTMLElement
          const lastItem = menuItems[menuItems.length - 1] as HTMLElement
          
          if (event.shiftKey && document.activeElement === firstItem) {
            event.preventDefault()
            buttonRef.current?.focus()
          } else if (!event.shiftKey && document.activeElement === lastItem) {
            event.preventDefault()
            setIsMenuOpen(false)
            buttonRef.current?.focus()
          }
        }
      }
      
      // Handle Command Palette (Cmd/Ctrl+Shift+P)
      if (modifier && event.shiftKey && event.key === 'P') {
        event.preventDefault()
        setCommandPaletteOpen(true)
      }
      
      // Handle Keyboard Shortcuts (Cmd/Ctrl+/)
      if (modifier && event.key === '/') {
        event.preventDefault()
        setKeyboardShortcutsOpen(true)
      }
      
      // Handle Search (Cmd/Ctrl+K)
      if (modifier && (event.key === 'k' || event.key === 'K')) {
        event.preventDefault()
        setSearchDialogOpen(true)
      }
      
      // Handle Multi-select mode (Cmd/Ctrl+M)
      if (modifier && (event.key === 'm' || event.key === 'M')) {
        event.preventDefault()
        setIsMultiSelectMode(prev => {
          // Clear selections when exiting multi-select mode
          if (prev) {
            setSelectedNotes(new Set())
          }
          return !prev
        })
      }
      
      // Handle Edit mode toggle (Cmd/Ctrl+E)
      if (modifier && (event.key === 'e' || event.key === 'E')) {
        event.preventDefault()
        const customEvent = new CustomEvent('toggle-edit-mode')
        window.dispatchEvent(customEvent)
      }
      
      // Handle Sidebar toggle (Cmd/Ctrl+,)
      if (modifier && event.key === ',') {
        event.preventDefault()
        setIsSidebarOpen(prev => !prev)
      }
      
      // Handle navigation with arrow keys and vim keys
      if (!modifier && (event.key === 'ArrowDown' || event.key === 'j')) {
        event.preventDefault()
        setSelectedNoteIndex(prev => Math.min(prev + 1, notes.length - 1))
      }
      
      if (!modifier && (event.key === 'ArrowUp' || event.key === 'k')) {
        event.preventDefault()
        setSelectedNoteIndex(prev => Math.max(prev - 1, -1)) // -1 is Welcome Note
      }
      
      // Handle quick switch with number keys (Cmd/Ctrl+1-9)
      if (modifier && event.key >= '1' && event.key <= '9') {
        event.preventDefault()
        const index = parseInt(event.key) - 1
        if (index < notes.length) {
          setSelectedNoteIndex(index)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, commandPaletteOpen, keyboardShortcutsOpen, searchDialogOpen, notes.length])

  return (
    <div data-testid="app-shell" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Notable</h1>
              <div className="flex items-center space-x-3">
                {isMultiSelectMode && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    Multi-select mode
                  </span>
                )}
              </div>
            </div>
            
            {/* User Menu */}
            <div className="relative">
              <button
                ref={buttonRef}
                data-testid="user-menu-trigger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="User menu"
              >
                <span className="text-sm font-medium">DU</span>
              </button>
              
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  role="menu"
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200"
                >
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium">Demo User</p>
                    <p className="text-xs text-gray-500">demo@notable.app</p>
                  </div>
                  <button
                    role="menuitem"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsMenuOpen(false)
                      // Show toast for settings
                      const toast = document.createElement('div')
                      toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50'
                      toast.textContent = 'Settings page coming soon!'
                      document.body.appendChild(toast)
                      setTimeout(() => toast.remove(), 3000)
                    }}
                  >
                    Settings
                  </button>
                  <button
                    role="menuitem"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      // Clear auth cookie and redirect to auth with logout param
                      document.cookie = 'dev-auth-bypass=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
                      window.location.href = '/auth?logout=true'
                    }}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside data-testid="sidebar" className="w-64 bg-white border-r border-gray-200 p-4">
            <button 
              onClick={() => {
                setNotes([...notes, 'Untitled'])
                // Trigger create new note event
                const event = new CustomEvent('create-new-note')
                window.dispatchEvent(event)
              }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mb-4"
            >
              New Note
            </button>
            {isMultiSelectMode && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-700 font-medium">Multi-select mode</span>
                  <span className="text-xs text-blue-600">
                    {selectedNotes.size} selected
                  </span>
                </div>
                {selectedNotes.size > 0 && (
                  <button
                    onClick={() => setSelectedNotes(new Set())}
                    className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            )}
            <nav>
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Notes</h2>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="#" 
                    className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md ${selectedNoteIndex === -1 ? 'bg-blue-100 text-blue-900' : ''}`}
                    data-selected={selectedNoteIndex === -1}
                    onClick={(e) => {
                      e.preventDefault()
                      if (!isMultiSelectMode) {
                        setSelectedNoteIndex(-1)
                      }
                    }}
                  >
                    Welcome Note
                  </a>
                </li>
                {notes.map((note, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className={`block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md ${
                        isMultiSelectMode && selectedNotes.has(index) 
                          ? 'bg-green-100 text-green-900 border border-green-300' 
                          : selectedNoteIndex === index 
                            ? 'bg-blue-100 text-blue-900' 
                            : ''
                      }`}
                      data-selected={selectedNoteIndex === index}
                      onClick={(e) => {
                        e.preventDefault()
                        if (isMultiSelectMode) {
                          // Toggle selection in multi-select mode
                          setSelectedNotes(prev => {
                            const newSet = new Set(prev)
                            if (newSet.has(index)) {
                              newSet.delete(index)
                            } else {
                              newSet.add(index)
                            }
                            return newSet
                          })
                        } else {
                          setSelectedNoteIndex(index)
                        }
                      }}
                    >
                      {note}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Dialogs */}
      <CommandPalette 
        open={commandPaletteOpen} 
        onOpenChange={setCommandPaletteOpen} 
      />
      <KeyboardShortcutsDialog 
        open={keyboardShortcutsOpen} 
        onOpenChange={setKeyboardShortcutsOpen} 
      />
      <SearchDialog 
        open={searchDialogOpen} 
        onOpenChange={setSearchDialogOpen} 
      />
    </div>
  )
}