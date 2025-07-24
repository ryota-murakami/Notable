'use client'

import React from 'react'
import { cn } from '@udecode/cn'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Link,
  Image,
} from 'lucide-react'

interface ToolbarButtonProps {
  isActive?: boolean
  onToggle: () => void
  icon: React.ReactNode
  tooltip?: string
}

const ToolbarButton = ({
  isActive,
  onToggle,
  icon,
  tooltip,
}: ToolbarButtonProps) => {
  return (
    <Button
      variant={isActive ? 'default' : 'ghost'}
      size='sm'
      onClick={onToggle}
      className={cn(
        'h-8 w-8 p-0',
        isActive && 'bg-primary text-primary-foreground'
      )}
      title={tooltip}
    >
      {icon}
    </Button>
  )
}

export function PlateToolbar() {
  // Placeholder functions - in a real implementation, these would interact with the editor
  const toggleBold = () => console.log('Toggle bold')
  const toggleItalic = () => console.log('Toggle italic')
  const toggleUnderline = () => console.log('Toggle underline')
  const toggleStrikethrough = () => console.log('Toggle strikethrough')
  const toggleCode = () => console.log('Toggle code')
  const setHeading1 = () => console.log('Set H1')
  const setHeading2 = () => console.log('Set H2')
  const setHeading3 = () => console.log('Set H3')
  const setBlockquote = () => console.log('Set blockquote')
  const insertBulletList = () => console.log('Insert bullet list')
  const insertNumberedList = () => console.log('Insert numbered list')
  const insertLink = () => console.log('Insert link')
  const insertImage = () => console.log('Insert image')

  return (
    <div className='flex flex-wrap items-center gap-1 border-b border-border p-2'>
      {/* Text Formatting */}
      <ToolbarButton
        isActive={false}
        onToggle={toggleBold}
        icon={<Bold className='h-4 w-4' />}
        tooltip='Bold'
      />
      <ToolbarButton
        isActive={false}
        onToggle={toggleItalic}
        icon={<Italic className='h-4 w-4' />}
        tooltip='Italic'
      />
      <ToolbarButton
        isActive={false}
        onToggle={toggleUnderline}
        icon={<Underline className='h-4 w-4' />}
        tooltip='Underline'
      />
      <ToolbarButton
        isActive={false}
        onToggle={toggleStrikethrough}
        icon={<Strikethrough className='h-4 w-4' />}
        tooltip='Strikethrough'
      />
      <ToolbarButton
        isActive={false}
        onToggle={toggleCode}
        icon={<Code className='h-4 w-4' />}
        tooltip='Inline Code'
      />

      <Separator orientation='vertical' className='mx-1 h-6' />

      {/* Headings */}
      <ToolbarButton
        isActive={false}
        onToggle={setHeading1}
        icon={<Heading1 className='h-4 w-4' />}
        tooltip='Heading 1'
      />
      <ToolbarButton
        isActive={false}
        onToggle={setHeading2}
        icon={<Heading2 className='h-4 w-4' />}
        tooltip='Heading 2'
      />
      <ToolbarButton
        isActive={false}
        onToggle={setHeading3}
        icon={<Heading3 className='h-4 w-4' />}
        tooltip='Heading 3'
      />

      <Separator orientation='vertical' className='mx-1 h-6' />

      {/* Lists */}
      <ToolbarButton
        isActive={false}
        onToggle={insertBulletList}
        icon={<List className='h-4 w-4' />}
        tooltip='Bullet List'
      />
      <ToolbarButton
        isActive={false}
        onToggle={insertNumberedList}
        icon={<ListOrdered className='h-4 w-4' />}
        tooltip='Numbered List'
      />

      <Separator orientation='vertical' className='mx-1 h-6' />

      {/* Quote */}
      <ToolbarButton
        isActive={false}
        onToggle={setBlockquote}
        icon={<Quote className='h-4 w-4' />}
        tooltip='Quote'
      />

      <Separator orientation='vertical' className='mx-1 h-6' />

      {/* Links and Media */}
      <ToolbarButton
        isActive={false}
        onToggle={insertLink}
        icon={<Link className='h-4 w-4' />}
        tooltip='Insert Link'
      />
      <ToolbarButton
        isActive={false}
        onToggle={insertImage}
        icon={<Image className='h-4 w-4' />}
        tooltip='Insert Image'
      />
    </div>
  )
}
