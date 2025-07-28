'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './dialog'
import { SearchIcon } from 'lucide-react'

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [search, setSearch] = useState('')

  // Optimized search handler with useCallback
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])

  // Reset search when dialog opens/closes
  useEffect(() => {
    if (!open) {
      setSearch('')
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        
        <div className="flex items-center border-b px-3">
          <SearchIcon className="h-4 w-4 shrink-0 opacity-50 mr-2" />
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={handleSearchChange}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            autoFocus
          />
        </div>
        
        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden p-4">
          {search ? (
            <div className="py-6 text-center text-sm text-gray-500">
              Search results for &ldquo;{search}&rdquo; would appear here.
            </div>
          ) : (
            <div className="py-6 text-center text-sm text-gray-500">
              Start typing to search notes...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}