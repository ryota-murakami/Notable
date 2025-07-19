'use client'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Eye, Edit3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModeToggleProps {
  isViewMode: boolean
  onToggle: () => void
  className?: string
}

export function ModeToggle({
  isViewMode,
  onToggle,
  className,
}: ModeToggleProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={cn(
              'flex items-center gap-2 transition-colors',
              isViewMode
                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800'
                : 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800',
              className,
            )}
          >
            {isViewMode ? (
              <>
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">View</span>
              </>
            ) : (
              <>
                <Edit3 className="h-4 w-4" />
                <span className="text-sm font-medium">Edit</span>
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2">
            {isViewMode ? 'Switch to Edit Mode' : 'Switch to View Mode'}
            <kbd className="ml-2 px-1.5 py-0.5 text-xs border rounded-md bg-muted">
              Ctrl+E
            </kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
