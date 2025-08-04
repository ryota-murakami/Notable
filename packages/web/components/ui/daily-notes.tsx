'use client'

import * as React from 'react'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Edit3,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { format, isToday, isYesterday, startOfWeek, addDays } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useDailyNotes } from '@/hooks/use-daily-notes'

interface DailyNotesProps {
  className?: string
  compact?: boolean
}

export function DailyNotes({ className, compact = false }: DailyNotesProps) {
  const {
    todaysDailyNote,
    thisWeeksDailyNotes,
    dailyNotesStreak,
    isLoadingTodaysNote,
    isCreatingDailyNote,
    goToTodaysDailyNote,
    goToDailyNote,
    getDailyNoteTitle,
  } = useDailyNotes()

  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())

  if (compact) {
    return (
      <div className={cn('space-y-2', className)}>
        <Button
          onClick={goToTodaysDailyNote}
          variant={todaysDailyNote ? 'default' : 'outline'}
          className='w-full justify-start gap-2'
          disabled={isCreatingDailyNote}
          data-testid='daily-notes-today-button'
        >
          <Edit3 className='h-4 w-4' />
          {isCreatingDailyNote ? 'Creating...' : "Today's Note"}
          {dailyNotesStreak > 0 && (
            <Badge variant='secondary' className='ml-auto'>
              {dailyNotesStreak}🔥
            </Badge>
          )}
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('space-y-4', className)}>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Calendar className='h-4 w-4' />
          <h3 className='font-semibold'>Daily Notes</h3>
        </div>
        {dailyNotesStreak > 0 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant='secondary' className='gap-1'>
                  <TrendingUp className='h-3 w-3' />
                  {dailyNotesStreak}🔥
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{dailyNotesStreak} day streak!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Today's Note */}
      <div className='space-y-2'>
        <Button
          onClick={goToTodaysDailyNote}
          variant={todaysDailyNote ? 'default' : 'outline'}
          className='w-full justify-start gap-2'
          disabled={isCreatingDailyNote || isLoadingTodaysNote}
          data-testid='daily-notes-today-button'
        >
          <Edit3 className='h-4 w-4' />
          {isCreatingDailyNote ? 'Creating...' : "Today's Note"}
          {todaysDailyNote && (
            <Badge variant='secondary' className='ml-auto'>
              ✓
            </Badge>
          )}
        </Button>

        {/* Quick Calendar Access */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant='ghost'
              size='sm'
              className='w-full justify-start gap-2'
            >
              <Calendar className='h-3 w-3' />
              Other dates
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <div className='p-4'>
              <CalendarComponent
                mode='single'
                selected={selectedDate}
                onSelect={(date) => {
                  if (date) {
                    setSelectedDate(date)
                    goToDailyNote(date)
                  }
                }}
                initialFocus
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Separator />

      {/* This Week's Notes */}
      <div className='space-y-2'>
        <h4 className='text-sm font-medium text-muted-foreground'>This Week</h4>
        <WeeklyDailyNotes
          dailyNotes={thisWeeksDailyNotes}
          onDateClick={goToDailyNote}
          getDailyNoteTitle={getDailyNoteTitle}
        />
      </div>
    </div>
  )
}

interface WeeklyDailyNotesProps {
  dailyNotes?: Array<{
    id: string
    custom_id: string
    title: string
    created_at: string
  }>
  onDateClick: (date: Date) => void
  getDailyNoteTitle: (date: Date) => string
}

function WeeklyDailyNotes({
  dailyNotes = [],
  onDateClick,
  getDailyNoteTitle,
}: WeeklyDailyNotesProps) {
  const today = new Date()
  const weekStart = startOfWeek(today, { weekStartsOn: 0 }) // Sunday

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  return (
    <div className='space-y-1'>
      {weekDays.map((date) => {
        const dailyNoteId = `daily-${date.toISOString().split('T')[0]}`
        const hasNote = dailyNotes.some(
          (note) => note.custom_id === dailyNoteId
        )
        const isCurrentDay = isToday(date)
        const isPastDay = date < today && !isCurrentDay

        return (
          <TooltipProvider key={date.toISOString()}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onDateClick(date)}
                  className={cn(
                    'w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors hover:bg-accent',
                    isCurrentDay && 'bg-accent font-medium',
                    hasNote && 'text-foreground',
                    !hasNote && isPastDay && 'text-muted-foreground/60'
                  )}
                >
                  <div className='flex items-center gap-2'>
                    <div
                      className={cn(
                        'w-2 h-2 rounded-full',
                        hasNote ? 'bg-green-500' : 'bg-muted-foreground/30'
                      )}
                    />
                    <span>
                      {isToday(date)
                        ? 'Today'
                        : isYesterday(date)
                          ? 'Yesterday'
                          : format(date, 'EEE')}
                    </span>
                  </div>
                  <span className='text-xs text-muted-foreground'>
                    {format(date, 'MMM d')}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>{getDailyNoteTitle(date)}</p>
                <p className='text-xs text-muted-foreground'>
                  {hasNote ? 'Click to open' : 'Click to create'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
}

/**
 * Quick action component for global daily notes access
 */
export function DailyNotesQuickAction() {
  const {
    todaysDailyNote,
    dailyNotesStreak,
    isCreatingDailyNote,
    goToTodaysDailyNote,
  } = useDailyNotes()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={goToTodaysDailyNote}
            variant='ghost'
            size='icon'
            disabled={isCreatingDailyNote}
            className={cn(
              'relative',
              todaysDailyNote && 'text-green-600 hover:text-green-700'
            )}
            data-testid='daily-notes-quick-action'
          >
            <Edit3 className='h-4 w-4' />
            {dailyNotesStreak > 0 && (
              <Badge
                variant='secondary'
                className='absolute -top-1 -right-1 h-4 w-4 p-0 text-xs'
              >
                {dailyNotesStreak > 9 ? '9+' : dailyNotesStreak}
              </Badge>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{todaysDailyNote ? "Open today's note" : "Create today's note"}</p>
          {dailyNotesStreak > 0 && (
            <p className='text-xs text-muted-foreground mt-1'>
              {dailyNotesStreak} day streak! 🔥
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

/**
 * Daily notes widget for dashboard
 */
export function DailyNotesWidget() {
  const {
    todaysDailyNote,
    thisWeeksDailyNotes = [],
    dailyNotesStreak,
    isLoadingTodaysNote,
    goToTodaysDailyNote,
  } = useDailyNotes()

  const completedThisWeek = thisWeeksDailyNotes.length
  const currentWeekProgress = Math.round((completedThisWeek / 7) * 100)

  return (
    <div className='rounded-lg border bg-card p-4 space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Calendar className='h-5 w-5 text-blue-600' />
          <h3 className='font-semibold'>Daily Notes</h3>
        </div>
        {dailyNotesStreak > 0 && (
          <Badge variant='secondary' className='gap-1'>
            <TrendingUp className='h-3 w-3' />
            {dailyNotesStreak}🔥
          </Badge>
        )}
      </div>

      <div className='space-y-3'>
        {/* Today's Status */}
        <div className='flex items-center justify-between p-3 rounded-md bg-muted/50'>
          <div className='flex items-center gap-2'>
            <div
              className={cn(
                'w-3 h-3 rounded-full',
                todaysDailyNote ? 'bg-green-500' : 'bg-orange-500'
              )}
            />
            <span className='text-sm font-medium'>
              {todaysDailyNote ? "Today's note ready" : "Today's note pending"}
            </span>
          </div>
          <Button
            onClick={goToTodaysDailyNote}
            size='sm'
            variant={todaysDailyNote ? 'outline' : 'default'}
            disabled={isLoadingTodaysNote}
          >
            {todaysDailyNote ? 'Open' : 'Create'}
          </Button>
        </div>

        {/* Weekly Progress */}
        <div className='space-y-2'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-muted-foreground'>This week</span>
            <span className='font-medium'>
              {completedThisWeek}/7 days ({currentWeekProgress}%)
            </span>
          </div>
          <div className='w-full bg-muted rounded-full h-2'>
            <div
              className='bg-green-500 h-2 rounded-full transition-all duration-300'
              style={{ width: `${currentWeekProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
