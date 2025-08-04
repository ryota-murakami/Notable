'use client'

import React, { useState } from 'react'
import { Clock, History } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
  currentVersion,
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn('gap-2', className)}
          data-testid='version-history-button'
        >
          <Clock className='h-4 w-4' />
          {showLabel && size !== 'icon' && 'History'}
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl max-h-[80vh] overflow-hidden'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <History className='h-5 w-5' />
            Version History
          </DialogTitle>
        </DialogHeader>
        <VersionHistoryPanel
          noteId={noteId}
          currentVersion={currentVersion}
          className='max-h-[60vh] overflow-auto'
        />
      </DialogContent>
    </Dialog>
  )
}

export default VersionHistoryButton
