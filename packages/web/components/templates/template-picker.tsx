'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, Grid, Search, Star, Zap } from 'lucide-react'

interface TemplateVariable {
  name: string
  label: string
  type: 'text' | 'date' | 'select' | 'textarea'
  required: boolean
  options?: string[]
  placeholder?: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  categoryName: string
  categoryIcon: string
  tags?: string[]
  content: string
  variables?: TemplateVariable[]
  isPublic: boolean
  isSystem: boolean
  usageCount: number
  rating: number
  ratingCount: number
  variableCount: number
}

interface Category {
  id: string
  name: string
  icon: string
  description: string
  displayOrder: number
  templateCount: number
}

interface TemplatePickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTemplateSelect: (template: Template) => void
  onCreateBlank: () => void
}

export function TemplatePicker({
  open,
  onOpenChange,
  onTemplateSelect,
  onCreateBlank,
}: TemplatePickerProps) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('browse')
  const [loading, setLoading] = useState(false)

  const fetchTemplates = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (selectedCategory !== 'all') {
        params.set('category', selectedCategory)
      }
      if (searchQuery) {
        params.set('search', searchQuery)
      }
      if (activeTab === 'popular') {
        params.set('sort', 'usage')
      } else if (activeTab === 'recent') {
        params.set('sort', 'recent')
      } else {
        params.set('sort', 'popular')
      }

      const response = await fetch(`/api/templates?${params}`)
      const result = await response.json()

      if (result.success) {
        setTemplates(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch templates:', error)
      setTemplates([])
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, searchQuery, activeTab])

  // Fetch templates and categories
  useEffect(() => {
    if (open) {
      fetchTemplates()
      fetchCategories()
    }
  }, [open, fetchTemplates])

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/templates/categories')
      const result = await response.json()

      if (result.success) {
        setCategories(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      setCategories([])
    }
  }

  // Re-fetch when filters change
  useEffect(() => {
    if (open) {
      fetchTemplates()
    }
  }, [selectedCategory, searchQuery, activeTab, fetchTemplates, open])

  const handleSelectTemplate = (template: Template) => {
    onTemplateSelect(template)
    onOpenChange(false)
  }

  const handleCreateBlank = () => {
    onCreateBlank()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-4xl max-h-[80vh] overflow-hidden flex flex-col'>
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
          <p className='text-sm text-muted-foreground'>
            Get started quickly with professional templates
          </p>
        </DialogHeader>

        <div className='flex-1 overflow-hidden'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='h-full flex flex-col'
          >
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='browse' role='tab'>
                <Grid className='h-4 w-4 mr-2' />
                Browse
              </TabsTrigger>
              <TabsTrigger value='popular' role='tab'>
                <Star className='h-4 w-4 mr-2' />
                Popular
              </TabsTrigger>
              <TabsTrigger value='recent' role='tab'>
                <Clock className='h-4 w-4 mr-2' />
                Recent
              </TabsTrigger>
            </TabsList>

            <TabsContent value='browse' className='flex-1 overflow-hidden'>
              <BrowseTemplates
                templates={templates}
                categories={categories}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
                loading={loading}
                onCategoryChange={setSelectedCategory}
                onSearchChange={setSearchQuery}
                onSelectTemplate={handleSelectTemplate}
              />
            </TabsContent>

            <TabsContent value='popular' className='flex-1 overflow-hidden'>
              <div className='h-full overflow-auto'>
                <div className='mb-4'>
                  <h3 className='text-lg font-semibold mb-2'>
                    Most Popular Templates
                  </h3>
                  <div className='relative mb-4'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                    <Input
                      placeholder='Search templates...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='pl-9'
                    />
                  </div>
                </div>
                <TemplateGrid
                  templates={templates}
                  loading={loading}
                  onSelectTemplate={handleSelectTemplate}
                />
              </div>
            </TabsContent>

            <TabsContent value='recent' className='flex-1 overflow-hidden'>
              <div className='h-full overflow-auto'>
                <div className='mb-4'>
                  <h3 className='text-lg font-semibold mb-2'>Recently Added</h3>
                  <div className='relative mb-4'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
                    <Input
                      placeholder='Search templates...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='pl-9'
                    />
                  </div>
                </div>
                <TemplateGrid
                  templates={templates}
                  loading={loading}
                  onSelectTemplate={handleSelectTemplate}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className='border-t pt-4'>
          <Button onClick={handleCreateBlank} className='w-full'>
            Blank Note
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function BrowseTemplates({
  templates,
  categories,
  selectedCategory,
  searchQuery,
  loading,
  onCategoryChange,
  onSearchChange,
  onSelectTemplate,
}: {
  templates: Template[]
  categories: Category[]
  selectedCategory: string
  searchQuery: string
  loading: boolean
  onCategoryChange: (category: string) => void
  onSearchChange: (query: string) => void
  onSelectTemplate: (template: Template) => void
}) {
  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <div className='mb-4'>
        <div className='relative mb-4'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground' />
          <Input
            placeholder='Search templates...'
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className='pl-9'
          />
        </div>

        <div className='flex flex-wrap gap-2'>
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size='sm'
            onClick={() => onCategoryChange('all')}
          >
            All Templates
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size='sm'
              onClick={() => onCategoryChange(category.id)}
            >
              {category.icon} {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className='flex-1 overflow-auto'>
        <TemplateGrid
          templates={templates}
          loading={loading}
          onSelectTemplate={onSelectTemplate}
        />
      </div>
    </div>
  )
}

function TemplateGrid({
  templates,
  loading,
  onSelectTemplate,
}: {
  templates: Template[]
  loading: boolean
  onSelectTemplate: (template: Template) => void
}) {
  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='border rounded-lg p-4 animate-pulse'>
            <div className='h-4 bg-muted rounded mb-2'></div>
            <div className='h-3 bg-muted rounded mb-3'></div>
            <div className='flex gap-2'>
              <div className='h-5 w-12 bg-muted rounded'></div>
              <div className='h-5 w-16 bg-muted rounded'></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (templates.length === 0) {
    return (
      <div className='text-center py-8'>
        <Zap className='h-12 w-12 mx-auto text-muted-foreground mb-4' />
        <h3 className='text-lg font-semibold mb-2'>No templates found</h3>
        <p className='text-muted-foreground'>
          Try adjusting your search or category filters.
        </p>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {templates.map((template) => (
        <div
          key={template.id}
          className='border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer'
          data-template-name={template.name}
          onClick={() => onSelectTemplate(template)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelectTemplate(template)
            }
          }}
          tabIndex={0}
          role='button'
        >
          <div className='flex items-start justify-between mb-2'>
            <h4 className='font-semibold text-sm'>{template.name}</h4>
            <Badge variant='secondary' className='text-xs'>
              {template.categoryIcon} {template.categoryName}
            </Badge>
          </div>

          <p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
            {template.description}
          </p>

          <div className='flex items-center gap-4 text-xs text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <Star className='h-3 w-3 fill-current' />
              {template.rating.toFixed(1)}
            </div>
            <div>{template.usageCount} uses</div>
            {template.variableCount > 0 && (
              <Badge variant='outline' className='text-xs'>
                {template.variableCount} fields
              </Badge>
            )}
          </div>

          {template.tags && template.tags.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {template.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant='secondary' className='text-xs'>
                  {tag}
                </Badge>
              ))}
              {template.tags.length > 3 && (
                <Badge variant='secondary' className='text-xs'>
                  +{template.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
