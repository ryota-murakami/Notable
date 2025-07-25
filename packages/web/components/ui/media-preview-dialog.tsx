'use client'

import {
  PreviewImage,
  useImagePreview,
  useImagePreviewValue,
  useScaleInput,
} from '@platejs/media/react'
import { cva } from 'class-variance-authority'
import { ArrowLeft, ArrowRight, Download, Minus, Plus, X } from 'lucide-react'
import { useEditorRef } from 'platejs/react'

import { cn } from '@/lib/utils'

const buttonVariants = cva('rounded bg-[rgba(0,0,0,0.5)] px-1', {
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: 'text-white',
      disabled: 'cursor-not-allowed text-gray-400',
    },
  },
})

const SCROLL_SPEED = 4

export function MediaPreviewDialog() {
  const editor = useEditorRef()
  const isOpen = useImagePreviewValue('isOpen', editor.id)
  const scale = useImagePreviewValue('scale')
  const isEditingScale = useImagePreviewValue('isEditingScale')
  const currentPreview = useImagePreviewValue('currentPreview')
  const previewList = useImagePreviewValue('previewList')
  const {
    closeProps,
    currentUrlIndex,
    maskLayerProps,
    nextDisabled,
    nextProps,
    prevDisabled,
    prevProps,
    scaleTextProps,
    zommOutProps,
    zoomInDisabled,
    zoomInProps,
    zoomOutDisabled,
  } = useImagePreview({ scrollSpeed: SCROLL_SPEED })

  const handleDownload = async () => {
    if (!currentPreview?.url) return

    try {
      const currentUrl = currentPreview.url

      // Generate filename from URL or use default
      const generateFilename = (url: string) => {
        try {
          const urlObj = new URL(url)
          const pathname = urlObj.pathname
          const filename = pathname.split('/').pop()

          if (filename && filename.includes('.')) {
            return filename
          }

          // If no filename found, use timestamp
          return `image-${Date.now()}.jpg`
        } catch {
          return `image-${Date.now()}.jpg`
        }
      }

      const filename = generateFilename(currentUrl)

      // Handle different URL types
      if (currentUrl.startsWith('data:')) {
        // Handle base64 data URLs
        const link = document.createElement('a')
        link.href = currentUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else if (currentUrl.startsWith('blob:')) {
        // Handle blob URLs
        const link = document.createElement('a')
        link.href = currentUrl
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // Handle remote URLs - need to fetch and create blob
        const response = await fetch(currentUrl)
        if (!response.ok) throw new Error('Failed to fetch image')

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up object URL
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Failed to download image:', error)
      // Could add toast notification here
    }
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-50 h-screen w-screen select-none',
        !isOpen && 'hidden'
      )}
      onContextMenu={(e) => e.stopPropagation()}
      {...maskLayerProps}
    >
      <div className='absolute inset-0 size-full bg-black opacity-30'></div>
      <div className='absolute inset-0 size-full bg-black opacity-30'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative flex max-h-screen w-full items-center'>
          <PreviewImage
            className={cn(
              'mx-auto block max-h-[calc(100vh-4rem)] w-auto object-contain transition-transform'
            )}
          />
          <div
            className='absolute bottom-0 left-1/2 z-40 flex w-fit -translate-x-1/2 justify-center gap-4 p-2 text-center text-white'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex gap-1'>
              <button
                {...prevProps}
                className={cn(
                  buttonVariants({
                    variant: prevDisabled ? 'disabled' : 'default',
                  })
                )}
                type='button'
              >
                <ArrowLeft />
              </button>
              {(currentUrlIndex ?? 0) + 1}
              <button
                {...nextProps}
                className={cn(
                  buttonVariants({
                    variant: nextDisabled ? 'disabled' : 'default',
                  })
                )}
                type='button'
              >
                <ArrowRight />
              </button>
            </div>
            <div className='flex'>
              <button
                className={cn(
                  buttonVariants({
                    variant: zoomOutDisabled ? 'disabled' : 'default',
                  })
                )}
                {...zommOutProps}
                type='button'
              >
                <Minus className='size-4' />
              </button>
              <div className='mx-px'>
                {isEditingScale ? (
                  <>
                    <ScaleInput className='w-10 rounded px-1 text-slate-500 outline' />{' '}
                    <span>%</span>
                  </>
                ) : (
                  <span {...scaleTextProps}>{`${scale * 100}%`}</span>
                )}
              </div>
              <button
                className={cn(
                  buttonVariants({
                    variant: zoomInDisabled ? 'disabled' : 'default',
                  })
                )}
                {...zoomInProps}
                type='button'
              >
                <Plus className='size-4' />
              </button>
            </div>
            <button
              className={cn(
                buttonVariants({
                  variant: !currentPreview?.url ? 'disabled' : 'default',
                })
              )}
              type='button'
              onClick={handleDownload}
              disabled={!currentPreview?.url}
              title='Download image'
            >
              <Download className='size-4' />
            </button>
            <button
              {...closeProps}
              className={cn(buttonVariants())}
              type='button'
            >
              <X className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScaleInput(props: React.ComponentProps<'input'>) {
  const { props: scaleInputProps, ref } = useScaleInput()

  return <input {...scaleInputProps} {...props} ref={ref} />
}
