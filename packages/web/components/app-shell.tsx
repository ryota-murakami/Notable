'use client'

import { useEffect, useRef, useState } from 'react'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isEditMode, setIsEditMode] = useState(true)
  const [notes, setNotes] = useState<string[]>([])
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      const modifier = isMac ? event.metaKey : event.ctrlKey
      
      // Handle Escape for menu
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        buttonRef.current?.focus()
      }
      
      // Handle Tab navigation
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
      
      // Handle Cmd/Ctrl+E for edit mode toggle
      if (modifier && event.key === 'e') {
        event.preventDefault()
        setIsEditMode(prev => !prev)
      }
      
      // Handle Cmd/Ctrl+, for sidebar toggle
      if (modifier && event.key === ',') {
        event.preventDefault()
        setIsSidebarOpen(prev => !prev)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <div data-testid="app-shell" className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold">Notable</h1>
              <span className="text-sm text-gray-600">
                {isEditMode ? 'Edit mode' : 'View mode'}
              </span>
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
              onClick={() => setNotes([...notes, 'Untitled'])}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mb-4"
            >
              New Note
            </button>
            <nav>
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Notes</h2>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                    Welcome Note
                  </a>
                </li>
                {notes.map((note, index) => (
                  <li key={index}>
                    <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
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
    </div>
  )
}