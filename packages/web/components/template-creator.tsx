'use client'

import { useState, useCallback, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LoadingSpinner } from '@/components/loading-states'
import { useToast } from '@/hooks/use-toast'
import { TemplateEngine } from '@/utils/template-engine'
import { createClient } from '@/utils/supabase/client'
import type {
  TemplateCreateRequest,
  TemplateCategory,
  TemplateVariable,
} from '@/types/template'
import {
  TEMPLATE_CATEGORIES,
  DEFAULT_TEMPLATE_VARIABLES,
} from '@/types/template'
import {
  Plus,
  X,
  FileText,
  Settings,
  Eye,
  Save,
  Wand2,
  Hash,
  AlertCircle,
} from 'lucide-react'

interface TemplateCreatorProps {
  isOpen: boolean
  onClose: () => void
  noteId?: string // If provided, create template from this note
  onTemplateCreated?: (templateId: string) => void
}

interface VariableInput {
  name: string
  description: string
  placeholder?: string
}

export function TemplateCreator({
  isOpen,
  onClose,
  noteId,
  onTemplateCreated,
}: TemplateCreatorProps) {
  const [step, setStep] = useState<'details' | 'variables' | 'preview'>(
    'details'
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Template form data
  const [templateData, setTemplateData] = useState<TemplateCreateRequest>({
    name: '',
    description: '',
    category: 'general',
    tags: [],
    titleTemplate: '',
    contentTemplate: [],
    variables: {},
    isPublic: false,
  })

  // UI state
  const [tagInput, setTagInput] = useState('')
  const [customVariables, setCustomVariables] = useState<VariableInput[]>([])
  const [errors, setErrors] = useState<string[]>([])

  const { toast } = useToast()

  // Load note data if noteId is provided
  const loadNoteData = useCallback(async () => {
    if (!noteId) return

    setIsLoading(true)
    try {
      const supabase = createClient()

      // Fetch the note data directly from the database
      const { data: noteData, error } = await supabase
        .from('notes')
        .select('title, content')
        .eq('id', noteId)
        .single()

      if (error || !noteData) {
        console.error('Failed to fetch note data:', error)
        toast({
          title: 'Error',
          description: 'Failed to fetch note data. Please try again.',
          variant: 'destructive',
        })
        return
      }

      // Parse the content if it's a JSON string
      let parsedContent
      try {
        parsedContent =
          typeof noteData.content === 'string'
            ? JSON.parse(noteData.content)
            : noteData.content
      } catch {
        // If content is not valid JSON, treat it as plain text
        parsedContent = [{ type: 'p', children: [{ text: noteData.content }] }]
      }

      setTemplateData((prev) => ({
        ...prev,
        name: `Template from "${noteData.title}"`,
        titleTemplate: noteData.title,
        contentTemplate: parsedContent,
      }))
    } catch (error) {
      console.error('Failed to load note data:', error)
      toast({
        title: 'Error',
        description: 'Failed to load note data',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [noteId, toast])

  useEffect(() => {
    if (isOpen && noteId) {
      loadNoteData()
    } else if (isOpen && !noteId) {
      // Reset form for new template
      setTemplateData({
        name: '',
        description: '',
        category: 'general',
        tags: [],
        titleTemplate: '',
        contentTemplate: [],
        variables: {},
        isPublic: false,
      })
      setCustomVariables([])
      setStep('details')
    }
  }, [isOpen, noteId, loadNoteData])

  // Auto-detect variables from template content
  const detectVariables = useCallback(() => {
    const detectedVars = TemplateEngine.extractVariables(
      templateData.titleTemplate,
      templateData.contentTemplate
    )

    // Filter out built-in variables and update custom variables
    const customVars = detectedVars.filter(
      (varName) => !Object.keys(DEFAULT_TEMPLATE_VARIABLES).includes(varName)
    )

    const newCustomVariables = customVars.map((varName) => ({
      name: varName,
      description: `Description for ${varName}`,
      placeholder: `Enter ${varName}`,
    }))

    setCustomVariables(newCustomVariables)

    // Update template variables
    const variables: Record<string, string> = {}
    customVars.forEach((varName) => {
      variables[varName] = `Description for ${varName}`
    })

    setTemplateData((prev) => ({
      ...prev,
      variables,
    }))
  }, [templateData.titleTemplate, templateData.contentTemplate])

  const handleAddTag = () => {
    if (
      tagInput.trim() &&
      !(templateData.tags || []).includes(tagInput.trim())
    ) {
      setTemplateData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTemplateData((prev) => ({
      ...prev,
      tags: (prev.tags || []).filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleAddVariable = () => {
    setCustomVariables((prev) => [
      ...prev,
      { name: '', description: '', placeholder: '' },
    ])
  }

  const handleUpdateVariable = (
    index: number,
    field: keyof VariableInput,
    value: string
  ) => {
    setCustomVariables((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const handleRemoveVariable = (index: number) => {
    setCustomVariables((prev) => prev.filter((_, i) => i !== index))
  }

  const validateTemplate = (): boolean => {
    const validationErrors = TemplateEngine.validateTemplate(templateData)

    // Additional validations
    if (customVariables.some((v) => !v.name.trim())) {
      validationErrors.push('All custom variables must have names')
    }

    setErrors(validationErrors)
    return validationErrors.length === 0
  }

  const handleSaveTemplate = async () => {
    if (!validateTemplate()) return

    setIsSaving(true)
    try {
      // Update variables from custom variables
      const variables: Record<string, string> = {}
      customVariables.forEach((variable) => {
        if (variable.name.trim()) {
          variables[variable.name] =
            variable.description || variable.placeholder || variable.name
        }
      })

      const finalTemplateData = {
        ...templateData,
        variables,
      }

      const createdTemplate =
        await TemplateEngine.createTemplate(finalTemplateData)

      if (createdTemplate) {
        toast({
          title: 'Template Created',
          description: `"${createdTemplate.name}" has been created successfully.`,
        })

        onTemplateCreated?.(createdTemplate.id)
        onClose()
      }
    } catch (error) {
      console.error('Failed to create template:', error)
      toast({
        title: 'Error',
        description: 'Failed to create template. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSaving(false)
    }
  }

  const renderDetailsStep = () => (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='template-name'>Template Name *</Label>
        <Input
          id='template-name'
          value={templateData.name}
          onChange={(e) =>
            setTemplateData((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder='Enter template name'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='template-description'>Description</Label>
        <Textarea
          id='template-description'
          value={templateData.description}
          onChange={(e) =>
            setTemplateData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder='Describe what this template is for'
          rows={3}
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='template-category'>Category *</Label>
        <Select
          value={templateData.category}
          onValueChange={(value) =>
            setTemplateData((prev) => ({
              ...prev,
              category: value as TemplateCategory,
            }))
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(TEMPLATE_CATEGORIES).map(([key, category]) => (
              <SelectItem key={key} value={key}>
                {category.icon} {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2'>
        <Label>Tags</Label>
        <div className='flex items-center gap-2'>
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder='Add a tag'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddTag()
              }
            }}
          />
          <Button type='button' onClick={handleAddTag} size='sm'>
            <Plus className='h-4 w-4' />
          </Button>
        </div>
        {(templateData.tags || []).length > 0 && (
          <div className='flex flex-wrap gap-2'>
            {(templateData.tags || []).map((tag) => (
              <Badge key={tag} variant='secondary' className='gap-1'>
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className='hover:text-destructive'
                >
                  <X className='h-3 w-3' />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='title-template'>Title Template *</Label>
        <Input
          id='title-template'
          value={templateData.titleTemplate}
          onChange={(e) =>
            setTemplateData((prev) => ({
              ...prev,
              titleTemplate: e.target.value,
            }))
          }
          placeholder='Template title (use {{variable}} for placeholders)'
        />
        <p className='text-xs text-muted-foreground'>
          Use {'{{variable}}'} syntax for dynamic content. Built-in variables:{' '}
          {'{{date}}'}, {'{{time}}'}, {'{{datetime}}'}, {'{{user}}'}
        </p>
      </div>

      <div className='flex items-center space-x-2'>
        <Switch
          id='public-template'
          checked={templateData.isPublic}
          onCheckedChange={(checked) =>
            setTemplateData((prev) => ({ ...prev, isPublic: checked }))
          }
        />
        <Label htmlFor='public-template'>Make this template public</Label>
      </div>
    </div>
  )

  const renderVariablesStep = () => (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='font-semibold'>Template Variables</h3>
          <p className='text-sm text-muted-foreground'>
            Configure custom variables for your template
          </p>
        </div>
        <Button onClick={detectVariables} variant='outline' size='sm'>
          <Wand2 className='h-4 w-4 mr-2' />
          Auto-detect
        </Button>
      </div>

      {/* Built-in variables info */}
      <div className='p-4 border rounded-lg bg-muted/50'>
        <h4 className='font-medium text-sm mb-2'>Built-in Variables</h4>
        <div className='grid grid-cols-2 gap-2 text-xs text-muted-foreground'>
          <div>{'{{date}}'} - Current date</div>
          <div>{'{{time}}'} - Current time</div>
          <div>{'{{datetime}}'} - Date and time</div>
          <div>{'{{user}}'} - Current user</div>
        </div>
      </div>

      {/* Custom variables */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h4 className='font-medium'>Custom Variables</h4>
          <Button onClick={handleAddVariable} variant='outline' size='sm'>
            <Plus className='h-4 w-4 mr-2' />
            Add Variable
          </Button>
        </div>

        {customVariables.length > 0 ? (
          <div className='space-y-3'>
            {customVariables.map((variable, index) => (
              <div key={index} className='p-3 border rounded-lg space-y-3'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Hash className='h-4 w-4 text-muted-foreground' />
                    <span className='font-medium text-sm'>
                      Variable {index + 1}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleRemoveVariable(index)}
                    variant='ghost'
                    size='sm'
                  >
                    <X className='h-4 w-4' />
                  </Button>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  <div>
                    <Label className='text-xs'>Variable Name</Label>
                    <Input
                      value={variable.name}
                      onChange={(e) =>
                        handleUpdateVariable(index, 'name', e.target.value)
                      }
                      placeholder='variable_name'
                      className='text-sm'
                    />
                  </div>
                  <div>
                    <Label className='text-xs'>Description</Label>
                    <Input
                      value={variable.description}
                      onChange={(e) =>
                        handleUpdateVariable(
                          index,
                          'description',
                          e.target.value
                        )
                      }
                      placeholder='What this variable represents'
                      className='text-sm'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-8 text-muted-foreground'>
            <Hash className='h-8 w-8 mx-auto mb-2 opacity-50' />
            <p className='text-sm'>No custom variables defined</p>
            <p className='text-xs'>
              Add variables to make your template dynamic
            </p>
          </div>
        )}
      </div>
    </div>
  )

  const renderPreviewStep = () => (
    <div className='space-y-6'>
      <div>
        <h3 className='font-semibold mb-2'>Template Preview</h3>
        <p className='text-sm text-muted-foreground'>
          Review your template before saving
        </p>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <div className='space-y-4'>
          <div className='p-4 border rounded-lg'>
            <h4 className='font-medium text-sm mb-2'>Template Details</h4>
            <div className='space-y-2 text-sm'>
              <div>
                <strong>Name:</strong> {templateData.name}
              </div>
              <div>
                <strong>Category:</strong>{' '}
                {TEMPLATE_CATEGORIES[templateData.category]?.label}
              </div>
              <div>
                <strong>Public:</strong> {templateData.isPublic ? 'Yes' : 'No'}
              </div>
              {templateData.description && (
                <div>
                  <strong>Description:</strong> {templateData.description}
                </div>
              )}
              {(templateData.tags || []).length > 0 && (
                <div>
                  <strong>Tags:</strong>
                  <div className='flex flex-wrap gap-1 mt-1'>
                    {(templateData.tags || []).map((tag) => (
                      <Badge key={tag} variant='outline' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='p-4 border rounded-lg'>
            <h4 className='font-medium text-sm mb-2'>Variables</h4>
            <div className='space-y-1 text-xs'>
              {Object.keys(DEFAULT_TEMPLATE_VARIABLES).map((varName) => (
                <div key={varName} className='text-muted-foreground'>
                  {`{{${varName}}} - ${DEFAULT_TEMPLATE_VARIABLES[varName].description}`}
                </div>
              ))}
              {customVariables.map((variable) => (
                <div key={variable.name}>
                  {`{{${variable.name}}} - ${variable.description}`}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='p-4 border rounded-lg'>
            <h4 className='font-medium text-sm mb-2'>Title Template</h4>
            <div className='text-sm font-mono bg-muted p-2 rounded'>
              {templateData.titleTemplate}
            </div>
          </div>

          <div className='p-4 border rounded-lg'>
            <h4 className='font-medium text-sm mb-2'>Content Structure</h4>
            <div className='text-xs text-muted-foreground'>
              {templateData.contentTemplate.length} content blocks defined
            </div>
          </div>
        </div>
      </div>

      {errors.length > 0 && (
        <div className='p-4 border border-destructive rounded-lg bg-destructive/10'>
          <div className='flex items-center gap-2 mb-2'>
            <AlertCircle className='h-4 w-4 text-destructive' />
            <span className='font-medium text-sm'>
              Please fix these issues:
            </span>
          </div>
          <ul className='text-sm text-destructive space-y-1'>
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl max-h-[90vh] flex flex-col'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <FileText className='h-5 w-5' />
            {noteId ? 'Create Template from Note' : 'Create Custom Template'}
          </DialogTitle>
          <DialogDescription>
            {noteId
              ? 'Convert your note into a reusable template'
              : 'Create a new custom template for repeated use'}
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className='flex items-center justify-center py-12'>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <Tabs
              value={step}
              onValueChange={(value) =>
                setStep(value as 'details' | 'variables' | 'preview')
              }
              className='flex-1'
            >
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger
                  value='details'
                  className='flex items-center gap-2'
                >
                  <Settings className='h-4 w-4' />
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value='variables'
                  className='flex items-center gap-2'
                >
                  <Hash className='h-4 w-4' />
                  Variables
                </TabsTrigger>
                <TabsTrigger
                  value='preview'
                  className='flex items-center gap-2'
                >
                  <Eye className='h-4 w-4' />
                  Preview
                </TabsTrigger>
              </TabsList>

              <ScrollArea className='flex-1 mt-4'>
                <TabsContent value='details' className='mt-0'>
                  {renderDetailsStep()}
                </TabsContent>

                <TabsContent value='variables' className='mt-0'>
                  {renderVariablesStep()}
                </TabsContent>

                <TabsContent value='preview' className='mt-0'>
                  {renderPreviewStep()}
                </TabsContent>
              </ScrollArea>
            </Tabs>

            <div className='flex justify-between pt-4 border-t'>
              <Button variant='outline' onClick={onClose}>
                Cancel
              </Button>

              <div className='flex gap-2'>
                {step !== 'details' && (
                  <Button
                    variant='outline'
                    onClick={() => {
                      if (step === 'variables') setStep('details')
                      if (step === 'preview') setStep('variables')
                    }}
                  >
                    Previous
                  </Button>
                )}

                {step !== 'preview' ? (
                  <Button
                    onClick={() => {
                      if (step === 'details') setStep('variables')
                      if (step === 'variables') setStep('preview')
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSaveTemplate}
                    disabled={isSaving}
                    className='gap-2'
                  >
                    {isSaving ? (
                      <LoadingSpinner className='h-4 w-4' />
                    ) : (
                      <Save className='h-4 w-4' />
                    )}
                    Create Template
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
