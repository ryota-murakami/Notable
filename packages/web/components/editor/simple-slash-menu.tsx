'use client'

import * as React from 'react'
const { useCallback, useEffect, useRef, useState } = React
import { cn } from '@/lib/utils'
import {
  SLASH_COMMANDS,
  type SlashCommandItem,
} from './plugins/slash-command-kit'

interface SimpleSlashMenuProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (command: SlashCommandItem) => void
  position: { x: number; y: number }
}

export function SimpleSlashMenu({
  isOpen,
  onClose,
  onSelect,
  position,
}: SimpleSlashMenuProps) {
  console.info('🚨 SimpleSlashMenu rendered!', { isOpen, position })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  // Reset selection when menu opens
  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          onClose()
          break
        case 'ArrowDown':
          event.preventDefault()
          setSelectedIndex((prev) =>
            prev < SLASH_COMMANDS.length - 1 ? prev + 1 : 0
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : SLASH_COMMANDS.length - 1
          )
          break
        case 'Enter':
          event.preventDefault()
          console.info('🚨 Enter key pressed in SimpleSlashMenu!', {
            selectedIndex,
            command: SLASH_COMMANDS[selectedIndex]?.title,
          })
          if (SLASH_COMMANDS[selectedIndex]) {
            console.info('🚨 Calling onSelect from keyboard...')
            onSelect(SLASH_COMMANDS[selectedIndex])
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onSelect, selectedIndex])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className='fixed z-[9999] w-80 rounded-lg border bg-white p-2 text-gray-900 shadow-lg pointer-events-auto'
      style={{
        left: position.x,
        top: position.y,
        position: 'fixed',
        zIndex: 9999,
      }}
      data-testid='simple-slash-menu'
      onClick={(e) => {
        console.info('🚨 Menu container onClick called!', e.target)
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          console.info('🚨 Menu container onKeyDown called!', e.target)
        }
      }}
      role='menu'
      tabIndex={0}
      onMouseDown={(e) => {
        console.info('🚨 Menu container onMouseDown called!', e.target)
      }}
    >
      <div className='text-xs font-medium text-muted-foreground mb-2 px-2'>
        Slash Commands
      </div>
      <div className='space-y-1'>
        {SLASH_COMMANDS.map((command, index) => {
          const Icon = command.icon
          const isSelected = index === selectedIndex

          return (
            <div
              key={command.key}
              data-testid={`slash-command-${command.key}`}
              className={cn(
                'flex items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer transition-colors',
                isSelected
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
              role='button'
              tabIndex={0}
              onClick={(e) => {
                console.info('🚨 SimpleSlashMenu onClick called!', {
                  commandKey: command.key,
                  commandTitle: command.title,
                })
                e.preventDefault()
                e.stopPropagation()
                onSelect(command)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  e.stopPropagation()
                  onSelect(command)
                }
              }}
              onMouseDown={(e) => {
                console.info('🚨 SimpleSlashMenu onMouseDown called!', {
                  commandKey: command.key,
                  commandTitle: command.title,
                })
                e.preventDefault()
                e.stopPropagation()
                onSelect(command)
              }}
              onPointerDown={(e) => {
                console.info('🚨 SimpleSlashMenu onPointerDown called!', {
                  commandKey: command.key,
                  commandTitle: command.title,
                })
                e.preventDefault()
                e.stopPropagation()
                onSelect(command)
              }}
            >
              <div className='flex h-6 w-6 items-center justify-center rounded-md bg-muted'>
                <Icon className='h-3 w-3' />
              </div>
              <div className='flex-1 min-w-0'>
                <div className='font-medium'>{command.title}</div>
                <div className='text-xs text-muted-foreground truncate'>
                  {command.description}
                </div>
              </div>
              {isSelected && (
                <div className='text-xs text-muted-foreground'>↵</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Simple hook to manage the menu
export function useSimpleSlashCommand(editor: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const openMenu = useCallback((pos: { x: number; y: number }) => {
    console.info('🚨 SimpleSlashMenu opening at:', pos)
    setPosition(pos)
    setIsOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    console.info('🚨 SimpleSlashMenu closing')
    setIsOpen(false)
  }, [])

  const handleCommandSelect = useCallback(
    (command: SlashCommandItem) => {
      console.info('🚨 SimpleSlashMenu handleCommandSelect called!', {
        commandKey: command.key,
        commandTitle: command.title,
      })

      try {
        // Focus the editor
        editor.focus()

        // Execute the command
        console.info('🚨 About to execute command action...')
        command.action(editor)
        console.info('🚨 Command action executed successfully')

        // Close the menu
        closeMenu()
      } catch (error) {
        console.error('🚨 Error executing slash command:', error)
      }
    },
    [editor, closeMenu]
  )

  // Add a direct command execution method for testing
  const executeCommand = useCallback(
    (commandKey: string) => {
      console.info('🚨 Direct command execution:', commandKey)
      const command = SLASH_COMMANDS.find((cmd) => cmd.key === commandKey)
      if (command) {
        handleCommandSelect(command)
      }
    },
    [handleCommandSelect]
  )

  return {
    isOpen,
    position,
    openMenu,
    closeMenu,
    handleCommandSelect,
    executeCommand,
  }
}
