'use client'

import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Command } from 'cmdk'
// import { Portal } from '@radix-ui/react-portal' // Temporarily disabled to test event handling
import { cn } from '@/lib/utils'
import {
  filterSlashCommands,
  groupSlashCommands,
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
  console.info('SlashCommandMenu component rendered!', { isOpen, position })
  const [search, setSearch] = useState('')
  const commandRef = useRef<HTMLDivElement>(null)

  // Filter and group commands based on search
  const filteredCommands = filterSlashCommands(search)
  const groupedCommands = groupSlashCommands(filteredCommands)
  const flatCommands = filteredCommands

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault()
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

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
    <div
      ref={commandRef}
      className={cn(
        'slash-command-menu fixed z-50 w-80 rounded-lg border bg-popover p-0 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
        className
      )}
      data-testid='slash-command-menu'
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

        <Command.List className='max-h-[300px] overflow-y-auto p-2'>
          {flatCommands.length === 0 ? (
            <Command.Empty className='py-6 text-center text-sm text-muted-foreground'>
              No commands found.
            </Command.Empty>
          ) : (
            <>
              {groupedCommands.map(([groupName, commands]) => (
                <Command.Group key={groupName} heading={groupName}>
                  {commands.map((command, _commandIndex) => {
                    const _globalIndex = flatCommands.indexOf(command)
                    const Icon = command.icon

                    return (
                      <Command.Item
                        key={command.key}
                        value={command.key}
                        data-testid={`slash-command-${command.key}`}
                        onSelect={(value) => {
                          console.info(
                            '🚨 CMDK Command.Item onSelect called!',
                            {
                              value,
                              commandKey: command.key,
                              commandTitle: command.title,
                            }
                          )
                          onSelect(command)
                        }}
                        onClick={(e) => {
                          console.info('🚨 Regular onClick handler called!', {
                            commandKey: command.key,
                            commandTitle: command.title,
                          })
                          e.preventDefault()
                          onSelect(command)
                        }}
                        className={cn(
                          'flex items-center gap-3 rounded-md px-2 py-2 text-sm cursor-pointer transition-colors',
                          'aria-selected:bg-accent aria-selected:text-accent-foreground',
                          'hover:bg-accent hover:text-accent-foreground'
                        )}
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
                      </Command.Item>
                    )
                  })}
                </Command.Group>
              ))}
            </>
          )}
        </Command.List>
      </Command>
    </div>
  )
}

// Hook to manage slash command menu state
export function useSlashCommand(editor: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [savedSelection, setSavedSelection] = useState<any>(null)

  const openMenu = useCallback(
    (pos: { x: number; y: number }) => {
      // Save current selection before opening menu
      setSavedSelection(editor.selection)
      setPosition(pos)
      setIsOpen(true)
    },
    [editor]
  )

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setSavedSelection(null)
  }, [])

  const handleCommandSelect = useCallback(
    (command: SlashCommandItem) => {
      console.info('🚨 handleCommandSelect called!', {
        commandKey: command.key,
        commandTitle: command.title,
      })
      console.info(
        '🚨 This should appear in the console if the function is called'
      )
      try {
        // Focus the editor first
        editor.focus()
        console.info('Editor focused')

        // Restore selection if we lost it
        const selection = editor.selection || savedSelection
        console.info('Selection state:', {
          current: editor.selection,
          saved: savedSelection,
          using: selection,
        })

        if (selection) {
          // Make sure we have a valid selection
          if (!editor.selection) {
            console.info('Restoring saved selection...')
            editor.select(selection)
          }

          const currentPath = selection.anchor.path
          const currentOffset = selection.anchor.offset
          console.info('Selection details:', {
            path: currentPath,
            offset: currentOffset,
          })

          // Execute the command with proper error handling FIRST
          console.info('About to execute command action...', {
            hasSelection: !!editor.selection,
          })
          command.action(editor)
          console.info('Command action executed')

          // Delete the slash character AFTER transformation
          console.info(
            'Attempting to delete slash character after transformation...'
          )
          try {
            // After transformation, we need to delete the slash character
            // First, let's make sure we have a selection
            const postTransformSelection = editor.selection
            console.info('Post-transform selection:', postTransformSelection)

            if (postTransformSelection) {
              // Try to select and delete the first character (which should be the slash)
              const nodePath = postTransformSelection.anchor.path.slice(0, -1) // Get element path without text node index
              const textPath = [...nodePath, 0] // Path to the first text node

              console.info('Trying to delete from path:', textPath)

              // Select just the first character (the slash)
              const slashSelection = {
                anchor: { path: textPath, offset: 0 },
                focus: { path: textPath, offset: 1 },
              }

              console.info('Selecting slash character:', slashSelection)
              editor.select(slashSelection)

              // Delete the selected slash character
              editor.deleteFragment()
              console.info('Slash character deleted via deleteFragment')

              // Position cursor at the beginning of the text
              editor.select({
                anchor: { path: textPath, offset: 0 },
                focus: { path: textPath, offset: 0 },
              })
              console.info('Cursor positioned at beginning of text')
            }
          } catch (error) {
            console.error('Error deleting slash character:', error)
            // Fallback: try to delete using tf.delete
            try {
              const selection = editor.selection
              if (selection) {
                const textPath = [...selection.anchor.path.slice(0, -1), 0]
                editor.tf.delete({
                  at: {
                    anchor: { path: textPath, offset: 0 },
                    focus: { path: textPath, offset: 1 },
                  },
                })
                console.info('Slash character deleted via fallback tf.delete')
              }
            } catch (fallbackError) {
              console.error('Fallback deletion also failed:', fallbackError)
            }
          }
        } else {
          // If no selection, try to execute the command anyway
          console.info('No selection available, executing command anyway...')
          command.action(editor)
        }
      } catch (error) {
        console.error('Slash command execution error:', error)
        // Fallback: just execute the command
        try {
          console.info('Attempting fallback command execution...')
          command.action(editor)
        } catch (fallbackError) {
          console.error('Fallback command execution failed:', fallbackError)
        }
      }
      console.info('Closing menu...')
      closeMenu()
    },
    [editor, closeMenu, savedSelection]
  )

  return {
    isOpen,
    position,
    openMenu,
    closeMenu,
    handleCommandSelect,
  }
}
