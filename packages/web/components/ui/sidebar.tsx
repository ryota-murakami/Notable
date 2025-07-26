'use client'

import * as React from 'react'
import { cn } from '../../lib/utils'
import { Button } from '../../design-system/components/button'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FileTextIcon,
  FolderIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
} from 'lucide-react'

interface SidebarProps {
  children?: React.ReactNode
  className?: string
  collapsed?: boolean
  onToggle?: () => void
}

interface SidebarContextValue {
  collapsed: boolean
  onToggle?: () => void
}

const SidebarContext = React.createContext<SidebarContextValue>({
  collapsed: false,
})

export function Sidebar({
  children,
  className,
  collapsed = false,
  onToggle,
}: SidebarProps) {
  return (
    <SidebarContext.Provider value={{ collapsed, onToggle }}>
      <aside
        className={cn(
          'flex h-full flex-col bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
        data-collapsed={collapsed}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

export function SidebarHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <header
      className={cn(
        'flex items-center justify-between p-4 border-b border-sidebar-border',
        className
      )}
    >
      {!collapsed && children}
    </header>
  )
}

export function SidebarContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex-1 overflow-y-auto p-2', className)}>
      {children}
    </div>
  )
}

export function SidebarFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <footer className={cn('p-4 border-t border-sidebar-border', className)}>
      {children}
    </footer>
  )
}

export interface SidebarItemProps {
  children: React.ReactNode
  icon?: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

export function SidebarItem({
  children,
  icon,
  active,
  onClick,
  className,
}: SidebarItemProps) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',
        'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        active && 'bg-sidebar-primary text-sidebar-primary-foreground',
        collapsed && 'justify-center px-2',
        className
      )}
    >
      {icon && <span className='flex-shrink-0'>{icon}</span>}
      {!collapsed && <span className='truncate'>{children}</span>}
    </button>
  )
}

export function SidebarGroup({
  children,
  title,
  className,
}: {
  children: React.ReactNode
  title?: string
  className?: string
}) {
  const { collapsed } = React.useContext(SidebarContext)

  return (
    <div className={cn('space-y-1', className)}>
      {title && !collapsed && (
        <div className='px-3 py-2 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wide'>
          {title}
        </div>
      )}
      {children}
    </div>
  )
}

export function SidebarToggle({ className }: { className?: string }) {
  const { collapsed, onToggle } = React.useContext(SidebarContext)

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={onToggle}
      className={cn('h-8 w-8 p-0 hover:bg-sidebar-accent', className)}
    >
      {collapsed ? (
        <ChevronRightIcon className='h-4 w-4' />
      ) : (
        <ChevronLeftIcon className='h-4 w-4' />
      )}
    </Button>
  )
}

// Pre-built Notable Sidebar with common structure
export function NotableSidebar({
  collapsed = false,
  onToggle,
  notes = [],
  onNewNote,
  onNoteSelect,
  selectedNoteId,
  onSearch,
  onSettings,
}: {
  collapsed?: boolean
  onToggle?: () => void
  notes?: Array<{
    id: string
    title: string
    isFolder?: boolean
    children?: any[]
  }>
  onNewNote?: () => void
  onNoteSelect?: (noteId: string) => void
  selectedNoteId?: string
  onSearch?: () => void
  onSettings?: () => void
}) {
  return (
    <Sidebar collapsed={collapsed} onToggle={onToggle}>
      <SidebarHeader>
        <div className='flex items-center justify-between w-full'>
          <h2 className='text-lg font-semibold text-sidebar-primary'>
            Notable
          </h2>
          <SidebarToggle />
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarItem
            icon={<PlusIcon className='h-4 w-4' />}
            onClick={onNewNote}
          >
            New Note
          </SidebarItem>
          <SidebarItem
            icon={<SearchIcon className='h-4 w-4' />}
            onClick={onSearch}
          >
            Search
          </SidebarItem>
        </SidebarGroup>

        {/* Notes */}
        <SidebarGroup title='Notes' className='mt-6'>
          {notes.length === 0 ? (
            <div className='px-3 py-8 text-center text-sm text-sidebar-foreground/60'>
              No notes yet. Create your first note to get started.
            </div>
          ) : (
            notes.map((note) => (
              <SidebarItem
                key={note.id}
                icon={
                  note.isFolder ? (
                    <FolderIcon className='h-4 w-4' />
                  ) : (
                    <FileTextIcon className='h-4 w-4' />
                  )
                }
                active={selectedNoteId === note.id}
                onClick={() => onNoteSelect?.(note.id)}
              >
                {note.title || 'Untitled'}
              </SidebarItem>
            ))
          )}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarItem
          icon={<SettingsIcon className='h-4 w-4' />}
          onClick={onSettings}
        >
          Settings
        </SidebarItem>
      </SidebarFooter>
    </Sidebar>
  )
}
