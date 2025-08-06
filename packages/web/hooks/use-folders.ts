'use client'

import { useCallback, useMemo } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useToast } from '@/hooks/use-toast'
import type {
  CreateFolderInput,
  Folder,
  FolderTreeNode,
  UpdateFolderInput,
} from '@/types/folder'

export function useFolders() {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  // Fetch all folders
  const {
    data: folders = [],
    isLoading,
    error,
  } = useQuery<Folder[]>({
    queryKey: ['folders'],
    queryFn: async () => {
      const response = await fetch('/api/folders')
      if (!response.ok) {
        throw new Error('Failed to fetch folders')
      }
      const result = await response.json()
      return result.data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  // Build folder tree structure
  const folderTree = useMemo(() => {
    const tree: FolderTreeNode[] = []
    const folderMap = new Map<string, FolderTreeNode>()

    // First pass: create all nodes
    folders.forEach((folder) => {
      folderMap.set(folder.id, {
        ...folder,
        children: [],
        level: 0,
        expanded: true,
      })
    })

    // Second pass: build tree structure
    folders.forEach((folder) => {
      const node = folderMap.get(folder.id)
      if (node && folder.parent_id) {
        const parent = folderMap.get(folder.parent_id)
        if (parent) {
          parent.children.push(node)
          node.level = parent.level + 1
        } else {
          // Orphaned folder, add to root
          tree.push(node)
        }
      } else if (node) {
        // Root level folder
        tree.push(node)
      }
    })

    // Sort children alphabetically
    const sortChildren = (nodes: FolderTreeNode[]) => {
      nodes.sort((a, b) => a.name.localeCompare(b.name))
      nodes.forEach((node) => sortChildren(node.children))
    }
    sortChildren(tree)

    return tree
  }, [folders])

  // Create folder mutation
  const createFolder = useMutation({
    mutationFn: async (input: CreateFolderInput) => {
      const response = await fetch('/api/folders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to create folder')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
      toast({
        title: 'Folder created',
        description: `"${data.name}" has been created successfully.`,
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  // Update folder mutation
  const updateFolder = useMutation({
    mutationFn: async ({
      id,
      ...input
    }: UpdateFolderInput & { id: string }) => {
      const response = await fetch(`/api/folders/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to update folder')
      }

      const result = await response.json()
      return result.data
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
      toast({
        title: 'Folder updated',
        description: `"${data.name}" has been updated successfully.`,
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  // Delete folder mutation
  const deleteFolder = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/folders/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to delete folder')
      }

      return id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
      toast({
        title: 'Folder deleted',
        description: 'The folder has been deleted successfully.',
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  // Move notes to folder mutation
  const moveNotesToFolder = useMutation({
    mutationFn: async ({
      folderId,
      noteIds,
    }: {
      folderId: string | null
      noteIds: string[]
    }) => {
      const targetId = folderId || 'root'
      const response = await fetch(`/api/folders/${targetId}/move`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note_ids: noteIds }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to move notes')
      }

      return response.json()
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['folders'] })
      queryClient.invalidateQueries({ queryKey: ['notes'] })
      toast({
        title: 'Notes moved',
        description: data.message,
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  // Get folder by ID
  const getFolderById = useCallback(
    (id: string) => {
      return folders.find((f) => f.id === id)
    },
    [folders]
  )

  // Get folder path
  const getFolderPath = useCallback(
    (folderId: string): Folder[] => {
      const path: Folder[] = []
      let currentFolder = getFolderById(folderId)

      while (currentFolder) {
        path.unshift(currentFolder)
        currentFolder = currentFolder.parent_id
          ? getFolderById(currentFolder.parent_id)
          : undefined
      }

      return path
    },
    [getFolderById]
  )

  return {
    folders,
    folderTree,
    isLoading,
    error,
    createFolder,
    updateFolder,
    deleteFolder,
    moveNotesToFolder,
    getFolderById,
    getFolderPath,
  }
}

// Hook for managing a single folder
export function useFolder(id: string) {
  const { toast: _toast } = useToast()

  const {
    data: folder,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['folders', id],
    queryFn: async () => {
      const response = await fetch(`/api/folders/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch folder')
      }
      const result = await response.json()
      return result.data
    },
    enabled: !!id && id !== 'root',
  })

  return {
    folder,
    isLoading,
    error,
  }
}
