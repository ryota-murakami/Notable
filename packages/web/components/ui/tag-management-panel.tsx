'use client'

import * as React from 'react'
import {
  BarChart3,
  Download,
  Edit,
  FileText,
  Hash,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Tags,
  Trash2,
  Upload,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TagTree, TagTreeSearch } from '@/components/ui/tag-tree'
import { TagBadge } from '@/components/ui/tag-badge'
import {
  useTags,
  useCreateTag,
  useUpdateTag,
  useDeleteTag,
  useTagManager,
} from '@/hooks/use-tags'
import type { EnhancedTag, TagFormData } from '@/types/tags'
import { DEFAULT_TAG_COLORS } from '@/types/tags'

export interface TagManagementPanelProps {
  /** Whether the panel is open */
  open: boolean
  /** Callback when panel open state changes */
  onOpenChange: (open: boolean) => void
  /** Additional CSS classes */
  className?: string
}

interface TagStats {
  totalTags: number
  rootTags: number
  totalUsage: number
  averageUsage: number
  mostUsedTag: EnhancedTag | null
  leastUsedTag: EnhancedTag | null
  recentTags: EnhancedTag[]
}

const TagManagementPanel: React.FC<TagManagementPanelProps> = ({
  open,
  onOpenChange,
  className,
}) => {
  const [activeSection, setActiveSection] = React.useState<string>('overview')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedTag, setSelectedTag] = React.useState<EnhancedTag | null>(null)
  const [editingTag, setEditingTag] = React.useState<EnhancedTag | null>(null)
  const [showCreateDialog, setShowCreateDialog] = React.useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)

  // Fetch tags
  const { data: allTags = [], isLoading } = useTags()
  const createTagMutation = useCreateTag()
  const updateTagMutation = useUpdateTag()
  const deleteTagMutation = useDeleteTag()
  const { isLoading: isManaging } = useTagManager()

  // Filter tags based on search
  const filteredTags = React.useMemo(() => {
    if (!searchQuery.trim()) return allTags
    const query = searchQuery.toLowerCase()
    return allTags.filter(
      (tag) =>
        tag.name.toLowerCase().includes(query) ||
        tag.description?.toLowerCase().includes(query)
    )
  }, [allTags, searchQuery])

  // Calculate tag statistics
  const tagStats = React.useMemo((): TagStats => {
    if (!allTags.length) {
      return {
        totalTags: 0,
        rootTags: 0,
        totalUsage: 0,
        averageUsage: 0,
        mostUsedTag: null,
        leastUsedTag: null,
        recentTags: [],
      }
    }

    const rootTags = allTags.filter((tag) => !tag.parent_id)
    const totalUsage = allTags.reduce(
      (sum, tag) => sum + (tag.usage_count || 0),
      0
    )
    const tagsWithUsage = allTags.filter((tag) => (tag.usage_count || 0) > 0)

    const mostUsedTag =
      tagsWithUsage.length > 0
        ? tagsWithUsage.reduce((max, tag) =>
            (tag.usage_count || 0) > (max.usage_count || 0) ? tag : max
          )
        : null

    const leastUsedTag =
      tagsWithUsage.length > 0
        ? tagsWithUsage.reduce((min, tag) =>
            (tag.usage_count || 0) < (min.usage_count || 0) ? tag : min
          )
        : null

    const recentTags = [...allTags]
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
      .slice(0, 5)

    return {
      totalTags: allTags.length,
      rootTags: rootTags.length,
      totalUsage,
      averageUsage:
        tagsWithUsage.length > 0 ? totalUsage / tagsWithUsage.length : 0,
      mostUsedTag,
      leastUsedTag,
      recentTags,
    }
  }, [allTags])

  // Handle tag creation
  const handleCreateTag = async (formData: TagFormData) => {
    try {
      await createTagMutation.mutateAsync(formData)
      setShowCreateDialog(false)
    } catch (error) {
      console.error('Failed to create tag:', error)
    }
  }

  // Handle tag update
  const handleUpdateTag = async (id: string, formData: TagFormData) => {
    try {
      await updateTagMutation.mutateAsync({ id, ...formData })
      setEditingTag(null)
    } catch (error) {
      console.error('Failed to update tag:', error)
    }
  }

  // Handle tag deletion
  const handleDeleteTag = async (tag: EnhancedTag) => {
    try {
      await deleteTagMutation.mutateAsync(tag.id)
      setShowDeleteDialog(false)
      setSelectedTag(null)
    } catch (error) {
      console.error('Failed to delete tag:', error)
    }
  }

  const sections = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <BarChart3 className='h-4 w-4' />,
    },
    {
      id: 'manage',
      label: 'Manage Tags',
      icon: <Tags className='h-4 w-4' />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className='h-4 w-4' />,
    },
  ]

  if (!open) return null

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className={cn('max-w-5xl h-[80vh]', className)}>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              <Hash className='h-5 w-5' />
              Tag Management
            </DialogTitle>
            <DialogDescription>
              Manage your tags, view statistics, and organize your content
            </DialogDescription>
          </DialogHeader>

          <div className='flex h-full min-h-0'>
            {/* Sidebar */}
            <div className='w-48 border-r border-border p-4 space-y-1'>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    'w-full flex items-center gap-3 px-3 py-2 text-left text-sm font-medium rounded-md transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    activeSection === section.id &&
                      'bg-primary text-primary-foreground'
                  )}
                >
                  {section.icon}
                  {section.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className='flex-1 p-6 overflow-y-auto'>
              {activeSection === 'overview' && (
                <TagOverview stats={tagStats} isLoading={isLoading} />
              )}
              {activeSection === 'manage' && (
                <TagManagement
                  tags={filteredTags}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedTag={selectedTag}
                  onTagSelect={setSelectedTag}
                  onTagEdit={setEditingTag}
                  onTagDelete={(tag) => {
                    setSelectedTag(tag)
                    setShowDeleteDialog(true)
                  }}
                  onTagCreate={() => setShowCreateDialog(true)}
                  isLoading={isLoading}
                />
              )}
              {activeSection === 'settings' && <TagSettings />}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Tag Dialog */}
      <TagFormDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onSubmit={handleCreateTag}
        title='Create Tag'
        isLoading={createTagMutation.isPending}
      />

      {/* Edit Tag Dialog */}
      {editingTag && (
        <TagFormDialog
          open={!!editingTag}
          onOpenChange={(open) => !open && setEditingTag(null)}
          onSubmit={(formData) => handleUpdateTag(editingTag.id, formData)}
          title='Edit Tag'
          initialData={{
            name: editingTag.name,
            color: editingTag.color,
            description: editingTag.description,
            parent_id: editingTag.parent_id,
          }}
          isLoading={updateTagMutation.isPending}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Tag</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the tag "{selectedTag?.name}"?
              {selectedTag?.usage_count && selectedTag.usage_count > 0 && (
                <> This tag is used in {selectedTag.usage_count} notes.</>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setShowDeleteDialog(false)}
              disabled={deleteTagMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              variant='destructive'
              onClick={() => selectedTag && handleDeleteTag(selectedTag)}
              disabled={deleteTagMutation.isPending}
            >
              {deleteTagMutation.isPending ? 'Deleting...' : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

// Overview Section Component
interface TagOverviewProps {
  stats: TagStats
  isLoading: boolean
}

const TagOverview: React.FC<TagOverviewProps> = ({ stats, isLoading }) => {
  if (isLoading) {
    return (
      <div className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className='animate-pulse'>
                <div className='h-4 bg-muted rounded w-1/2'></div>
                <div className='h-8 bg-muted rounded w-1/3'></div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Tag Statistics</h3>

        {/* Statistics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Total Tags
              </CardTitle>
              <div className='text-2xl font-bold'>{stats.totalTags}</div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Root Tags
              </CardTitle>
              <div className='text-2xl font-bold'>{stats.rootTags}</div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Total Usage
              </CardTitle>
              <div className='text-2xl font-bold'>{stats.totalUsage}</div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className='pb-2'>
              <CardTitle className='text-sm font-medium text-muted-foreground'>
                Avg Usage
              </CardTitle>
              <div className='text-2xl font-bold'>
                {stats.averageUsage.toFixed(1)}
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Most/Least Used Tags */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium'>
                Most Used Tag
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.mostUsedTag ? (
                <div className='flex items-center justify-between'>
                  <TagBadge tag={stats.mostUsedTag} showIcon />
                  <Badge variant='secondary'>
                    {stats.mostUsedTag.usage_count} uses
                  </Badge>
                </div>
              ) : (
                <p className='text-sm text-muted-foreground'>
                  No tags with usage
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium'>
                Least Used Tag
              </CardTitle>
            </CardHeader>
            <CardContent>
              {stats.leastUsedTag ? (
                <div className='flex items-center justify-between'>
                  <TagBadge tag={stats.leastUsedTag} showIcon />
                  <Badge variant='secondary'>
                    {stats.leastUsedTag.usage_count} uses
                  </Badge>
                </div>
              ) : (
                <p className='text-sm text-muted-foreground'>
                  No tags with usage
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Tags */}
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Recently Created Tags
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stats.recentTags.length > 0 ? (
              <div className='space-y-2'>
                {stats.recentTags.map((tag) => (
                  <div
                    key={tag.id}
                    className='flex items-center justify-between'
                  >
                    <TagBadge tag={tag} showIcon />
                    <div className='text-xs text-muted-foreground'>
                      {new Date(tag.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-sm text-muted-foreground'>
                No tags created yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Tag Management Section Component
interface TagManagementProps {
  tags: EnhancedTag[]
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedTag: EnhancedTag | null
  onTagSelect: (tag: EnhancedTag) => void
  onTagEdit: (tag: EnhancedTag) => void
  onTagDelete: (tag: EnhancedTag) => void
  onTagCreate: () => void
  isLoading: boolean
}

const TagManagement: React.FC<TagManagementProps> = ({
  tags,
  searchQuery,
  onSearchChange,
  selectedTag,
  onTagSelect,
  onTagEdit,
  onTagDelete,
  onTagCreate,
  isLoading,
}) => {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Manage Tags</h3>
        <div className='flex items-center gap-2'>
          <Button variant='outline' size='sm' disabled>
            <Upload className='h-4 w-4 mr-1' />
            Import
          </Button>
          <Button variant='outline' size='sm' disabled>
            <Download className='h-4 w-4 mr-1' />
            Export
          </Button>
          <Button onClick={onTagCreate} size='sm'>
            <Plus className='h-4 w-4 mr-1' />
            Create Tag
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className='flex items-center gap-4'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input
            placeholder='Search tags...'
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className='pl-9'
          />
        </div>
      </div>

      {/* Tags List */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Tag Tree */}
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>Tag Hierarchy</CardTitle>
            <CardDescription>
              Explore your tag structure and relationships
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className='space-y-2'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className='flex items-center gap-2 animate-pulse'
                  >
                    <div className='h-4 w-4 bg-muted rounded' />
                    <div className='h-4 bg-muted rounded flex-1' />
                  </div>
                ))}
              </div>
            ) : (
              <TagTree
                tags={tags.filter((tag) => !tag.parent_id)}
                selectedTagId={selectedTag?.id}
                onTagSelect={onTagSelect}
                onTagEdit={onTagEdit}
                onTagDelete={onTagDelete}
                onTagCreate={() => onTagCreate()}
                className='max-h-96 overflow-y-auto'
              />
            )}
          </CardContent>
        </Card>

        {/* Tag Details */}
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>Tag Details</CardTitle>
            <CardDescription>
              {selectedTag
                ? 'Information about the selected tag'
                : 'Select a tag to view details'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedTag ? (
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <TagBadge tag={selectedTag} size='lg' showIcon />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='sm'>
                        <MoreHorizontal className='h-4 w-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      <DropdownMenuItem onClick={() => onTagEdit(selectedTag)}>
                        <Edit className='h-4 w-4 mr-2' />
                        Edit tag
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={() => onTagDelete(selectedTag)}
                        className='text-destructive focus:text-destructive'
                      >
                        <Trash2 className='h-4 w-4 mr-2' />
                        Delete tag
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className='space-y-3'>
                  <div>
                    <Label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                      Name
                    </Label>
                    <p className='text-sm'>{selectedTag.name}</p>
                  </div>

                  {selectedTag.description && (
                    <div>
                      <Label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                        Description
                      </Label>
                      <p className='text-sm'>{selectedTag.description}</p>
                    </div>
                  )}

                  <div>
                    <Label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                      Usage Count
                    </Label>
                    <p className='text-sm'>
                      {selectedTag.usage_count || 0} notes
                    </p>
                  </div>

                  <div>
                    <Label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                      Created
                    </Label>
                    <p className='text-sm'>
                      {new Date(selectedTag.created_at).toLocaleDateString()}
                    </p>
                  </div>

                  {selectedTag.updated_at && (
                    <div>
                      <Label className='text-xs font-medium text-muted-foreground uppercase tracking-wide'>
                        Last Updated
                      </Label>
                      <p className='text-sm'>
                        {new Date(selectedTag.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className='text-center py-8 text-muted-foreground'>
                <Hash className='mx-auto h-8 w-8 mb-2 opacity-50' />
                <p className='text-sm'>Select a tag to view its details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Tag Settings Section Component
const TagSettings: React.FC = () => {
  return (
    <div className='space-y-6'>
      <div>
        <h3 className='text-lg font-semibold mb-4'>Tag Settings</h3>

        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium'>
                Default Colors
              </CardTitle>
              <CardDescription>
                Colors used for new tags when none is specified
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-5 gap-2'>
                {DEFAULT_TAG_COLORS.map((color, index) => (
                  <div
                    key={color}
                    className='w-8 h-8 rounded-full border-2 border-border'
                    style={{ backgroundColor: color }}
                    title={`Color ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium'>
                Import/Export
              </CardTitle>
              <CardDescription>
                Manage your tag data across devices
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between py-2'>
                <div>
                  <div className='font-medium text-sm'>Export Tags</div>
                  <div className='text-xs text-muted-foreground'>
                    Export all tags and their relationships as JSON
                  </div>
                </div>
                <Button variant='outline' size='sm' disabled>
                  <Download className='h-4 w-4 mr-1' />
                  Export
                </Button>
              </div>

              <div className='flex items-center justify-between py-2'>
                <div>
                  <div className='font-medium text-sm'>Import Tags</div>
                  <div className='text-xs text-muted-foreground'>
                    Import tags from a JSON file
                  </div>
                </div>
                <Button variant='outline' size='sm' disabled>
                  <Upload className='h-4 w-4 mr-1' />
                  Import
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='text-sm font-medium'>Advanced</CardTitle>
              <CardDescription>Advanced tag management options</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center justify-between py-2'>
                <div>
                  <div className='font-medium text-sm'>Cleanup Unused Tags</div>
                  <div className='text-xs text-muted-foreground'>
                    Remove tags that are not assigned to any notes
                  </div>
                </div>
                <Button variant='outline' size='sm' disabled>
                  <Trash2 className='h-4 w-4 mr-1' />
                  Cleanup
                </Button>
              </div>

              <div className='flex items-center justify-between py-2'>
                <div>
                  <div className='font-medium text-sm'>
                    Rebuild Tag Statistics
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    Refresh usage counts and statistics
                  </div>
                </div>
                <Button variant='outline' size='sm' disabled>
                  <BarChart3 className='h-4 w-4 mr-1' />
                  Rebuild
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Tag Form Dialog Component
interface TagFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: TagFormData) => void
  title: string
  initialData?: Partial<TagFormData>
  isLoading?: boolean
}

const TagFormDialog: React.FC<TagFormDialogProps> = ({
  open,
  onOpenChange,
  onSubmit,
  title,
  initialData,
  isLoading = false,
}) => {
  const [formData, setFormData] = React.useState<TagFormData>({
    name: '',
    color: DEFAULT_TAG_COLORS[0],
    description: '',
    parent_id: null,
    ...initialData,
  })

  React.useEffect(() => {
    if (initialData) {
      setFormData({
        name: '',
        color: DEFAULT_TAG_COLORS[0],
        description: '',
        parent_id: null,
        ...initialData,
      })
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name.trim()) {
      onSubmit({
        ...formData,
        name: formData.name.trim(),
        description: formData.description || null,
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {title === 'Create Tag'
              ? 'Create a new tag to organize your notes'
              : 'Update the tag information'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='tag-name'>Name</Label>
            <Input
              id='tag-name'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder='Enter tag name...'
              disabled={isLoading}
              required
            />
          </div>

          <div>
            <Label htmlFor='tag-description'>Description (Optional)</Label>
            <Textarea
              id='tag-description'
              value={formData.description || ''}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder='Enter tag description...'
              disabled={isLoading}
              rows={3}
            />
          </div>

          <div>
            <Label>Color</Label>
            <div className='grid grid-cols-5 gap-2 mt-2'>
              {DEFAULT_TAG_COLORS.map((color) => (
                <button
                  key={color}
                  type='button'
                  onClick={() => setFormData({ ...formData, color })}
                  className={cn(
                    'w-8 h-8 rounded-full border-2 transition-all',
                    formData.color === color
                      ? 'border-primary scale-110'
                      : 'border-border hover:border-primary/50'
                  )}
                  style={{ backgroundColor: color }}
                  disabled={isLoading}
                />
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button
              type='button'
              variant='outline'
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type='submit' disabled={isLoading || !formData.name.trim()}>
              {isLoading
                ? 'Saving...'
                : title === 'Create Tag'
                  ? 'Create'
                  : 'Update'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { TagManagementPanel }
