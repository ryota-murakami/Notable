'use client'

import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Command } from 'cmdk'
import { Portal } from '@radix-ui/react-portal'
import { cn } from '@/lib/utils'
import {
  filterSlashCommands,
  groupSlashCommands,
  SLASH_COMMANDS,
  type SlashCommandItem,
} from './plugins/slash-command-kit'

interface SlashCommandMenuProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (command: SlashCommandItem) => void
  position: { x: number; y: number }
  className?: string
}

export function SlashCommandMenu({
  isOpen,
  onClose,
  onSelect,
  position,
  className,
}: SlashCommandMenuProps) {
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const commandRef = useRef<HTMLDivElement>(null)

  // Filter and group commands based on search
  const filteredCommands = filterSlashCommands(search)
  const groupedCommands = groupSlashCommands(filteredCommands)
  const flatCommands = filteredCommands

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [search])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          onClose()
          break
        case 'ArrowDown':
          event.preventDefault()
          setSelectedIndex((prev) =>
            prev < flatCommands.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : flatCommands.length - 1
          )
          break
        case 'Enter':
          event.preventDefault()
          if (flatCommands[selectedIndex]) {
            onSelect(flatCommands[selectedIndex])
          }
          break
        case 'Tab':
          event.preventDefault()
          if (flatCommands[selectedIndex]) {
            onSelect(flatCommands[selectedIndex])
          }
          break
      }
    },
    [isOpen, onClose, onSelect, flatCommands, selectedIndex]
  )

  // Set up keyboard listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <Portal>
      <div
        ref={commandRef}
        className={cn(
          'slash-command-menu fixed z-50 w-80 rounded-lg border bg-popover p-0 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
          className
        )}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <Command className='w-full'>
          <div className='flex items-center border-b px-3'>
            <span className='mr-2 text-muted-foreground'>/</span>
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder='Type a command or search...'
              className='flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50'
              autoFocus
            />
          </div>

          <Command.List className='max-h-[300px] overflow-y-auto'>
            {flatCommands.length === 0 ? (
              <Command.Empty className='py-6 text-center text-sm text-muted-foreground'>
                No commands found.
              </Command.Empty>
            ) : (
              <div className='p-2'>
                {groupedCommands.map(([groupName, commands]) => (
                  <div key={groupName} className='mb-2'>
                    <div className='px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider'>
                      {groupName}
                    </div>
                    <div className='space-y-1'>
                      {commands.map((command, commandIndex) => {
                        const globalIndex = flatCommands.indexOf(command)
                        const Icon = command.icon

                        return (
                          <div
                            key={command.key}
                            className={cn(
                              'flex items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer transition-colors',
                              globalIndex === selectedIndex
                                ? 'bg-accent text-accent-foreground'
                                : 'hover:bg-accent hover:text-accent-foreground'
                            )}
                            onClick={() => onSelect(command)}
                          >
                            <div className='flex h-8 w-8 items-center justify-center rounded-md bg-muted'>
                              <Icon className='h-4 w-4' />
                            </div>
                            <div className='flex-1 min-w-0'>
                              <div className='font-medium'>{command.title}</div>
                              <div className='text-xs text-muted-foreground truncate'>
                                {command.description}
                              </div>
                            </div>
                            {globalIndex === selectedIndex && (
                              <div className='text-xs text-muted-foreground'>
                                ↵
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Command.List>
        </Command>
      </div>
    </Portal>
  )
}

// Hook to manage slash command menu state
export function useSlashCommand(editor: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const openMenu = useCallback((pos: { x: number; y: number }) => {
    setPosition(pos)
    setIsOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleCommandSelect = useCallback(
    (command: SlashCommandItem) => {
      command.action(editor)
      closeMenu()
    },
    [editor, closeMenu]
  )

  return {
    isOpen,
    position,
    openMenu,
    closeMenu,
    handleCommandSelect,
  }
}
