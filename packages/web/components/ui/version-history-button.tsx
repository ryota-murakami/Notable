'use client'

import React, { useState } from 'react'
import { Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VersionHistoryPanel } from '@/components/ui/version-history'
import { cn } from '@/lib/utils'

interface VersionHistoryButtonProps {
  noteId: string
  currentVersion?: number
  className?: string
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  showLabel?: boolean
}

export const VersionHistoryButton: React.FC<VersionHistoryButtonProps> = ({
  noteId,
  currentVersion: _currentVersion,
  className,
  variant = 'ghost',
  size = 'default',
  showLabel = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!noteId) {
    return null
  }

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cn('gap-2', className)}
        onClick={() => setIsOpen(true)}
        data-testid='version-history-button'
      >
        <Clock className='h-4 w-4' />
        {showLabel && size !== 'icon' && 'History'}
      </Button>

      <VersionHistoryPanel
        open={isOpen}
        onOpenChange={setIsOpen}
        noteId={noteId}
      />
    </>
  )
}

export default VersionHistoryButton
