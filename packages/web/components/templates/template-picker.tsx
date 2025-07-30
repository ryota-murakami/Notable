'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  ChevronRight,
  Clock,
  FileText,
  Filter,
  Search,
  Sparkles,
  Star,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { ScrollArea } from '@/components/ui/scroll-area'

import type { Template, TemplateCategory } from '@/types/templates'

export type { Template, TemplateCategory }

export interface TemplatePickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTemplateSelect: (template: Template) => void
  onCreateBlank?: () => void
  className?: string
}

export function TemplatePicker({
  open,
  onOpenChange,
  onTemplateSelect,
  onCreateBlank,
  className,
}: TemplatePickerProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')
  const [sortBy, setSortBy] = React.useState<
    'popular' | 'recent' | 'name' | 'rating'
  >('popular')
  const [templates, setTemplates] = React.useState<Template[]>([])
  const [categories, setCategories] = React.useState<TemplateCategory[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [selectedTemplate, setSelectedTemplate] =
    React.useState<Template | null>(null)

  // Fetch templates and categories
  React.useEffect(() => {
    if (open) {
      fetchTemplatesAndCategories()
    }
  }, [open, selectedCategory, sortBy, searchQuery])

  const fetchTemplatesAndCategories = async () => {
    setIsLoading(true)
    try {
      // Fetch categories
      const categoriesResponse = await fetch('/api/templates/categories')
      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json()
        setCategories(categoriesData.data || [])
      }

      // Build templates query
      const params = new URLSearchParams()
      if (selectedCategory !== 'all') params.set('category', selectedCategory)
      if (searchQuery) params.set('search', searchQuery)
      params.set('sort', sortBy)
      params.set('limit', '50')

      // Fetch templates
      const templatesResponse = await fetch(`/api/templates?${params}`)
      if (templatesResponse.ok) {
        const templatesData = await templatesResponse.json()
        setTemplates(templatesData.data || [])
      }
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template)
    onTemplateSelect(template)
    onOpenChange(false)
  }

  const handleCreateBlank = () => {
    onCreateBlank?.()
    onOpenChange(false)
  }

  // Filter templates based on search and category
  const filteredTemplates = React.useMemo(() => {
    let filtered = templates

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (template) =>
          template.name.toLowerCase().includes(query) ||
          template.description.toLowerCase().includes(query) ||
          template.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [templates, searchQuery])

  // Group templates by category for display
  const groupedTemplates = React.useMemo(() => {
    const groups: Record<string, Template[]> = {}

    filteredTemplates.forEach((template) => {
      const category = template.categoryName || template.category
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(template)
    })

    return groups
  }, [filteredTemplates])

  const popularTemplates = templates
    .filter((t) => t.usageCount > 20)
    .slice(0, 6)
  const recentTemplates = templates.slice(0, 6)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn('max-w-6xl h-[80vh] p-0', className)}>
        <DialogHeader className='px-6 py-4 border-b'>
          <DialogTitle className='flex items-center gap-2'>
            <Sparkles className='h-5 w-5 text-primary' />
            Choose a Template
          </DialogTitle>
          <DialogDescription>
            Get started quickly with professional templates or create a blank
            note
          </DialogDescription>
        </DialogHeader>

        <div className='flex h-full'>
          {/* Sidebar */}
          <div className='w-64 border-r bg-muted/30 p-4'>
            <div className='space-y-4'>
              {/* Quick Actions */}
              <div className='space-y-2'>
                <Button
                  onClick={handleCreateBlank}
                  variant='outline'
                  className='w-full justify-start'
                >
                  <FileText className='mr-2 h-4 w-4' />
                  Blank Note
                </Button>
              </div>

              {/* Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
                <Input
                  placeholder='Search templates...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-9'
                />
                {searchQuery && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setSearchQuery('')}
                    className='absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0'
                  >
                    <X className='h-3 w-3' />
                  </Button>
                )}
              </div>

              {/* Sort & Filter */}
              <div className='flex gap-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='sm' className='flex-1'>
                      <Filter className='mr-2 h-3 w-3' />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setSortBy('popular')}>
                      Most Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy('recent')}>
                      Most Recent
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy('rating')}>
                      Highest Rated
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSortBy('name')}>
                      Name A-Z
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Categories */}
              <div className='space-y-2'>
                <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wide'>
                  Categories
                </h3>
                <div className='space-y-1'>
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                    size='sm'
                    onClick={() => setSelectedCategory('all')}
                    className='w-full justify-start'
                  >
                    All Templates ({templates.length})
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? 'default' : 'ghost'
                      }
                      size='sm'
                      onClick={() => setSelectedCategory(category.id)}
                      className='w-full justify-start'
                    >
                      <span className='mr-2'>{category.icon}</span>
                      {category.name} ({category.templateCount})
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1 overflow-hidden'>
            <Tabs defaultValue='browse' className='h-full flex flex-col'>
              <TabsList className='grid w-full grid-cols-3 mx-6 mt-4'>
                <TabsTrigger value='browse'>Browse</TabsTrigger>
                <TabsTrigger value='popular'>Popular</TabsTrigger>
                <TabsTrigger value='recent'>Recent</TabsTrigger>
              </TabsList>

              <div className='flex-1 overflow-hidden'>
                <TabsContent value='browse' className='h-full mt-0'>
                  <ScrollArea className='h-full px-6 py-4'>
                    {isLoading ? (
                      <div className='flex items-center justify-center h-32'>
                        <div className='text-sm text-muted-foreground'>
                          Loading templates...
                        </div>
                      </div>
                    ) : Object.keys(groupedTemplates).length > 0 ? (
                      <div className='space-y-8'>
                        {Object.entries(groupedTemplates).map(
                          ([categoryName, categoryTemplates]) => (
                            <div key={categoryName}>
                              <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
                                {
                                  categories.find(
                                    (c) => c.name === categoryName
                                  )?.icon
                                }
                                {categoryName}
                                <Badge variant='secondary' className='ml-2'>
                                  {categoryTemplates.length}
                                </Badge>
                              </h3>
                              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                                {categoryTemplates.map((template) => (
                                  <TemplateCard
                                    key={template.id}
                                    template={template}
                                    onClick={() =>
                                      handleTemplateSelect(template)
                                    }
                                  />
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <div className='flex flex-col items-center justify-center h-32 text-center'>
                        <Search className='h-12 w-12 text-muted-foreground mb-4' />
                        <h3 className='text-lg font-medium mb-2'>
                          No templates found
                        </h3>
                        <p className='text-sm text-muted-foreground'>
                          Try adjusting your search or category filter
                        </p>
                      </div>
                    )}
                  </ScrollArea>
                </TabsContent>

                <TabsContent value='popular' className='h-full mt-0'>
                  <ScrollArea className='h-full px-6 py-4'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-2 mb-6'>
                        <Star className='h-5 w-5 text-yellow-500' />
                        <h3 className='text-lg font-semibold'>
                          Most Popular Templates
                        </h3>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {popularTemplates.map((template) => (
                          <TemplateCard
                            key={template.id}
                            template={template}
                            onClick={() => handleTemplateSelect(template)}
                            showStats
                          />
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value='recent' className='h-full mt-0'>
                  <ScrollArea className='h-full px-6 py-4'>
                    <div className='space-y-4'>
                      <div className='flex items-center gap-2 mb-6'>
                        <Clock className='h-5 w-5 text-blue-500' />
                        <h3 className='text-lg font-semibold'>
                          Recently Added
                        </h3>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {recentTemplates.map((template) => (
                          <TemplateCard
                            key={template.id}
                            template={template}
                            onClick={() => handleTemplateSelect(template)}
                          />
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

interface TemplateCardProps {
  template: Template
  onClick: () => void
  showStats?: boolean
}

function TemplateCard({
  template,
  onClick,
  showStats = false,
}: TemplateCardProps) {
  return (
    <div
      onClick={onClick}
      className='group relative p-4 rounded-lg border border-border bg-card hover:bg-accent/50 cursor-pointer transition-all duration-200 hover:shadow-md'
    >
      {/* Template Preview/Thumbnail */}
      <div className='relative aspect-video mb-3 rounded-md bg-muted/50 border flex items-center justify-center overflow-hidden'>
        {template.thumbnail ? (
          <Image
            src={template.thumbnail}
            alt={template.name}
            fill
            className='object-cover'
          />
        ) : (
          <div className='flex flex-col items-center gap-2 text-muted-foreground'>
            <FileText className='h-8 w-8' />
            <span className='text-xs font-medium'>{template.categoryIcon}</span>
          </div>
        )}
      </div>

      {/* Template Info */}
      <div className='space-y-2'>
        <div className='flex items-start justify-between'>
          <h4 className='font-medium text-sm leading-5 group-hover:text-primary transition-colors'>
            {template.name}
          </h4>
          <ChevronRight className='h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100' />
        </div>

        <p className='text-xs text-muted-foreground line-clamp-2 leading-relaxed'>
          {template.description}
        </p>

        {/* Template Metadata */}
        <div className='flex items-center justify-between pt-2'>
          <div className='flex items-center gap-2'>
            {template.isSystem && (
              <Badge variant='secondary' className='text-xs'>
                Built-in
              </Badge>
            )}
            {template.variableCount > 0 && (
              <Badge variant='outline' className='text-xs'>
                {template.variableCount} fields
              </Badge>
            )}
          </div>

          {showStats && (
            <div className='flex items-center gap-2 text-xs text-muted-foreground'>
              {template.rating > 0 && (
                <div className='flex items-center gap-1'>
                  <Star className='h-3 w-3 fill-yellow-400 text-yellow-400' />
                  <span>{template.rating.toFixed(1)}</span>
                </div>
              )}
              {template.usageCount > 0 && (
                <span>{template.usageCount} uses</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
