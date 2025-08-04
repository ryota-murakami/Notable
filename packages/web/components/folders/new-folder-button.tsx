'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { FolderDialog } from './folder-dialog'
import { FolderPlusIcon } from 'lucide-react'

interface NewFolderButtonProps {
  parentId?: string | null
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  'data-testid'?: string
}

export function NewFolderButton({
  parentId,
  variant = 'ghost',
  size = 'sm',
  className,
  'data-testid': dataTestId = 'new-folder-button',
}: NewFolderButtonProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        variant={variant}
        size={size}
        onClick={() => setOpen(true)}
        className={className}
        data-testid={dataTestId}
      >
        <FolderPlusIcon className='h-4 w-4' />
        {size !== 'icon' && <span className='ml-2'>New Folder</span>}
      </Button>
      <FolderDialog
        open={open}
        onOpenChange={setOpen}
        mode='create'
        parentId={parentId}
      />
    </>
  )
}
