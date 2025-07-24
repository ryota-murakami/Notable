'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { LoadingSpinner } from '@/components/loading-states'
import { useToast } from '@/hooks/use-toast'
import { TemplateEngine } from '@/utils/template-engine'
import type {
  NoteTemplate,
  PopularTemplate,
  TemplateCategory,
  TemplateVariableValues,
  TemplateProcessingResult,
} from '@/types/template'
import { TEMPLATE_CATEGORIES } from '@/types/template'
import {
  Search,
  FileText,
  Star,
  Clock,
  Eye,
  Plus,
  Filter,
  Tag,
  User,
  Calendar,
  TrendingUp,
  Grid3X3,
  List,
} from 'lucide-react'

interface TemplateGalleryProps {
  isOpen: boolean
  onClose: () => void
  onSelectTemplate: (result: TemplateProcessingResult) => void
  onCreateCustomTemplate?: () => void
}

interface TemplatePreviewProps {
  template: NoteTemplate | null
  variables: TemplateVariableValues
  onVariableChange: (key: string, value: string) => void
  onClose: () => void
  onUseTemplate: (result: TemplateProcessingResult) => void
}

function TemplatePreview({
  template,
  variables,
  onVariableChange,
  onClose,
  onUseTemplate,
}: TemplatePreviewProps) {
  const [previewResult, setPreviewResult] =
    useState<TemplateProcessingResult | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const generatePreview = useCallback(async () => {
    if (!template) return

    setIsProcessing(true)
    try {
      const result = await TemplateEngine.processTemplateLocally(
        template.id,
        variables
      )
      setPreviewResult(result)
    } catch (error) {
      console.error('Failed to generate preview:', error)
    } finally {
      setIsProcessing(false)
    }
  }, [template, variables])

  useEffect(() => {
    generatePreview()
  }, [generatePreview])

  const handleUseTemplate = async () => {
    if (!template) return

    setIsProcessing(true)
    try {
      const result = await TemplateEngine.createNoteFromTemplate(
        template.id,
        variables
      )
      if (result) {
        onUseTemplate(result)
      }
    } catch (error) {
      console.error('Failed to use template:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  if (!template) return null

  // Extract custom variables (excluding built-in ones)
  const customVariables = Object.keys(template.variables).filter(
    (key) => !['date', 'time', 'datetime', 'user'].includes(key)
  )

  return (
    <Dialog open={!!template} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] flex flex-col'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Eye className='h-5 w-5' />
            Preview: {template.name}
          </DialogTitle>
          <DialogDescription>{template.description}</DialogDescription>
        </DialogHeader>

        <div className='flex-1 grid grid-cols-2 gap-4 min-h-0'>
          {/* Variables Panel */}
          <div className='flex flex-col'>
            <h3 className='font-semibold mb-3'>Template Variables</h3>
            <ScrollArea className='flex-1'>
              <div className='space-y-3'>
                {customVariables.length > 0 ? (
                  customVariables.map((key) => (
                    <div key={key}>
                      <label className='text-sm font-medium mb-1 block'>
                        {key
                          .replace(/_/g, ' ')
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </label>
                      <Input
                        value={variables[key] || ''}
                        onChange={(e) => onVariableChange(key, e.target.value)}
                        placeholder={template.variables[key] || `Enter ${key}`}
                      />
                    </div>
                  ))
                ) : (
                  <p className='text-sm text-muted-foreground'>
                    This template uses only built-in variables (date, time,
                    user).
                  </p>
                )}

                <div className='mt-4 pt-4 border-t'>
                  <h4 className='text-sm font-medium mb-2'>
                    Built-in Variables
                  </h4>
                  <div className='space-y-1 text-xs text-muted-foreground'>
                    <div>{'{{date}}'} - Current date</div>
                    <div>{'{{time}}'} - Current time</div>
                    <div>{'{{datetime}}'} - Current date and time</div>
                    <div>{'{{user}}'} - Current user name</div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Preview Panel */}
          <div className='flex flex-col'>
            <h3 className='font-semibold mb-3'>Preview</h3>
            <ScrollArea className='flex-1 border rounded-md p-4 bg-muted/20'>
              {isProcessing ? (
                <div className='flex items-center justify-center py-8'>
                  <LoadingSpinner />
                </div>
              ) : previewResult ? (
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-lg'>
                      {previewResult.title}
                    </h4>
                  </div>
                  <div className='prose prose-sm max-w-none'>
                    <div className='p-4 border rounded bg-background min-h-32'>
                      {previewResult.content.map((node: any, index: number) => (
                        <div key={index} className='mb-2'>
                          {node.type === 'h1' && (
                            <h1 className='text-2xl font-bold'>
                              {node.children?.[0]?.text || ''}
                            </h1>
                          )}
                          {node.type === 'h2' && (
                            <h2 className='text-xl font-semibold'>
                              {node.children?.[0]?.text || ''}
                            </h2>
                          )}
                          {node.type === 'p' && (
                            <p className='text-sm'>
                              {node.children?.[0]?.text || ''}
                            </p>
                          )}
                          {node.type === 'ul' && (
                            <ul className='list-disc pl-4'>
                              {node.children?.map(
                                (li: any, liIndex: number) => (
                                  <li key={liIndex} className='text-sm'>
                                    {li.children?.[0]?.text || ''}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className='text-center py-8 text-muted-foreground'>
                  <FileText className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>Preview will appear here</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </div>

        <div className='flex justify-end gap-2 pt-4 border-t'>
          <Button variant='outline' onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleUseTemplate}
            disabled={isProcessing}
            className='gap-2'
          >
            {isProcessing ? (
              <LoadingSpinner className='h-4 w-4' />
            ) : (
              <Plus className='h-4 w-4' />
            )}
            Use Template
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function TemplateGallery({
  isOpen,
  onClose,
  onSelectTemplate,
  onCreateCustomTemplate,
}: TemplateGalleryProps) {
  const [templates, setTemplates] = useState<PopularTemplate[]>([])
  const [userTemplates, setUserTemplates] = useState<NoteTemplate[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<
    TemplateCategory | 'all'
  >('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTemplate, setSelectedTemplate] = useState<NoteTemplate | null>(
    null
  )
  const [templateVariables, setTemplateVariables] =
    useState<TemplateVariableValues>({})
  const { toast } = useToast()

  // Load templates
  const loadTemplates = useCallback(async () => {
    setIsLoading(true)
    try {
      const [popularTemplates, userCreatedTemplates] = await Promise.all([
        TemplateEngine.searchTemplates({
          query: searchQuery,
          category: selectedCategory !== 'all' ? selectedCategory : undefined,
          limit: 50,
        }),
        TemplateEngine.getUserTemplates(),
      ])

      setTemplates(popularTemplates)
      setUserTemplates(userCreatedTemplates)
    } catch (error) {
      console.error('Failed to load templates:', error)
      toast({
        title: 'Error',
        description: 'Failed to load templates',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [searchQuery, selectedCategory, toast])

  useEffect(() => {
    if (isOpen) {
      loadTemplates()
    }
  }, [isOpen, loadTemplates])

  const handleTemplateClick = (template: NoteTemplate) => {
    setSelectedTemplate(template)
    // Initialize variables with empty values
    const initialVariables: TemplateVariableValues = {}
    Object.keys(template.variables).forEach((key) => {
      if (!['date', 'time', 'datetime', 'user'].includes(key)) {
        initialVariables[key] = ''
      }
    })
    setTemplateVariables(initialVariables)
  }

  const handleVariableChange = (key: string, value: string) => {
    setTemplateVariables((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleUseTemplate = (result: TemplateProcessingResult) => {
    onSelectTemplate(result)
    setSelectedTemplate(null)
    onClose()
  }

  const renderTemplateCard = (
    template: NoteTemplate,
    isUserTemplate = false
  ) => (
    <Card
      key={template.id}
      className={`cursor-pointer transition-all hover:shadow-md ${
        viewMode === 'list' ? 'flex flex-row' : ''
      }`}
      onClick={() => handleTemplateClick(template)}
    >
      <CardHeader className={viewMode === 'list' ? 'flex-1' : ''}>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            <div className='text-2xl'>
              {TEMPLATE_CATEGORIES[template.category]?.icon || '📄'}
            </div>
            <div>
              <CardTitle className='text-base'>{template.name}</CardTitle>
              <CardDescription className='text-sm'>
                {template.description}
              </CardDescription>
            </div>
          </div>
          {template.isBuiltIn && (
            <Badge variant='secondary' className='text-xs'>
              Built-in
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className={viewMode === 'list' ? 'flex items-center' : ''}>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4 text-xs text-muted-foreground'>
            <span className='flex items-center gap-1'>
              <Tag className='h-3 w-3' />
              {TEMPLATE_CATEGORIES[template.category]?.label}
            </span>
            <span className='flex items-center gap-1'>
              <TrendingUp className='h-3 w-3' />
              {template.usageCount} uses
            </span>
            {isUserTemplate && (
              <span className='flex items-center gap-1'>
                <User className='h-3 w-3' />
                My Template
              </span>
            )}
          </div>

          {template.tags.length > 0 && (
            <div className='flex gap-1'>
              {template.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant='outline' className='text-xs'>
                  {tag}
                </Badge>
              ))}
              {template.tags.length > 3 && (
                <Badge variant='outline' className='text-xs'>
                  +{template.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='max-w-6xl max-h-[90vh] flex flex-col'>
          <DialogHeader>
            <DialogTitle className='flex items-center gap-2'>
              <FileText className='h-5 w-5' />
              Template Gallery
            </DialogTitle>
            <DialogDescription>
              Choose from built-in templates or create your own custom templates
            </DialogDescription>
          </DialogHeader>

          {/* Search and Filters */}
          <div className='flex items-center gap-4 pb-4 border-b'>
            <div className='flex-1 relative'>
              <Search className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
              <Input
                placeholder='Search templates...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-9'
              />
            </div>

            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                setSelectedCategory(value as TemplateCategory | 'all')
              }
            >
              <SelectTrigger className='w-48'>
                <Filter className='h-4 w-4 mr-2' />
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Categories</SelectItem>
                {Object.entries(TEMPLATE_CATEGORIES).map(([key, category]) => (
                  <SelectItem key={key} value={key}>
                    {category.icon} {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className='flex items-center border rounded-md'>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size='sm'
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className='h-4 w-4' />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size='sm'
                onClick={() => setViewMode('list')}
              >
                <List className='h-4 w-4' />
              </Button>
            </div>
          </div>

          <Tabs defaultValue='gallery' className='flex-1 flex flex-col'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='gallery' className='flex items-center gap-2'>
                <Star className='h-4 w-4' />
                Popular Templates
              </TabsTrigger>
              <TabsTrigger
                value='my-templates'
                className='flex items-center gap-2'
              >
                <User className='h-4 w-4' />
                My Templates
              </TabsTrigger>
              <TabsTrigger value='recent' className='flex items-center gap-2'>
                <Clock className='h-4 w-4' />
                Recently Used
              </TabsTrigger>
            </TabsList>

            <ScrollArea className='flex-1 mt-4'>
              <TabsContent value='gallery' className='mt-0'>
                {isLoading ? (
                  <div className='flex items-center justify-center py-12'>
                    <LoadingSpinner />
                  </div>
                ) : templates.length > 0 ? (
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                        : 'space-y-3'
                    }
                  >
                    {templates.map((template) => renderTemplateCard(template))}
                  </div>
                ) : (
                  <div className='text-center py-12 text-muted-foreground'>
                    <FileText className='h-12 w-12 mx-auto mb-4 opacity-50' />
                    <p>No templates found</p>
                    <p className='text-sm mt-2'>
                      Try adjusting your search or category filter
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value='my-templates' className='mt-0'>
                {userTemplates.length > 0 ? (
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                        : 'space-y-3'
                    }
                  >
                    {userTemplates.map((template) =>
                      renderTemplateCard(template, true)
                    )}
                  </div>
                ) : (
                  <div className='text-center py-12 text-muted-foreground'>
                    <User className='h-12 w-12 mx-auto mb-4 opacity-50' />
                    <p>No custom templates yet</p>
                    <p className='text-sm mt-2'>
                      Create your first template from an existing note
                    </p>
                    <Button
                      className='mt-4'
                      onClick={onCreateCustomTemplate}
                      variant='outline'
                    >
                      <Plus className='h-4 w-4 mr-2' />
                      Create Template
                    </Button>
                  </div>
                )}
              </TabsContent>

              <TabsContent value='recent' className='mt-0'>
                <div className='text-center py-12 text-muted-foreground'>
                  <Clock className='h-12 w-12 mx-auto mb-4 opacity-50' />
                  <p>Recently used templates will appear here</p>
                  <p className='text-sm mt-2'>
                    Start using templates to see your usage history
                  </p>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>

          <div className='flex justify-between pt-4 border-t'>
            <Button
              variant='outline'
              onClick={onCreateCustomTemplate}
              className='gap-2'
            >
              <Plus className='h-4 w-4' />
              Create Custom Template
            </Button>
            <Button variant='outline' onClick={onClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Template Preview Dialog */}
      <TemplatePreview
        template={selectedTemplate}
        variables={templateVariables}
        onVariableChange={handleVariableChange}
        onClose={() => setSelectedTemplate(null)}
        onUseTemplate={handleUseTemplate}
      />
    </>
  )
}
