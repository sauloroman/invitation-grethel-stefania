import { useMemo } from 'react'
import { useInvitationConfig } from './useInvitationConfig'

export interface SaveTheDateOptions {
    title?: string
    description?: string
    location?: string
    startDate?: string
    durationHours?: number
}

export interface CalendarDayItem {
    id: string
    dayNumber: number
    isCurrentMonth: boolean
    isFeatured: boolean
    isPrevMonth?: boolean
    isNextMonth?: boolean
}

export interface UseCalendarOptions {
    /** Month number (1 to 12). If omitted, uses month from countdown.targetDate or August (8) */
    month?: number
    /** Year number (e.g. 2026). If omitted, uses year from countdown.targetDate or 2026 */
    year?: number
    /** Day to highlight with a heart (e.g. 22) */
    featuredDay?: number
    /** Custom weekday header labels (default: ['do.', 'lu.', 'ma.', 'mi.', 'ju.', 'vi.', 'sá.']) */
    weekdays?: string[]
}

export const useCalendar = (options?: UseCalendarOptions) => {
    const { sections } = useInvitationConfig()

    // Determine target date defaults from configuration if not explicitly provided
    const targetDateStr = sections.countdown?.targetDate ?? '2026-08-22T17:00:00'
    const targetDate = useMemo(() => new Date(targetDateStr), [targetDateStr])

    const defaultMonth = !isNaN(targetDate.getTime()) ? targetDate.getMonth() + 1 : 8
    const defaultYear = !isNaN(targetDate.getTime()) ? targetDate.getFullYear() : 2026
    const defaultFeaturedDay = !isNaN(targetDate.getTime()) ? targetDate.getDate() : 22

    const month = options?.month ?? defaultMonth
    const year = options?.year ?? defaultYear
    const featuredDay = options?.featuredDay ?? defaultFeaturedDay
    const weekdays = options?.weekdays ?? ['do.', 'lu.', 'ma.', 'mi.', 'ju.', 'vi.', 'sá.']

    const calendarData = useMemo(() => {
        // Ensure month is within 1 - 12
        const validMonth = Math.max(1, Math.min(12, month))
        const monthIndex = validMonth - 1

        // Date object for 1st of target month
        const firstDayOfMonth = new Date(year, monthIndex, 1)
        const totalDaysInMonth = new Date(year, validMonth, 0).getDate()

        // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        const startDayOfWeek = firstDayOfMonth.getDay()

        // Month name in Spanish uppercase (e.g. "AGOSTO")
        const rawMonthName = firstDayOfMonth.toLocaleDateString('es-ES', { month: 'long' })
        const monthName = rawMonthName.charAt(0).toUpperCase() + rawMonthName.slice(1).toLowerCase()
        const monthTitle = `${rawMonthName.toUpperCase()} ${year}`

        const days: CalendarDayItem[] = []

        // Previous month padding days (for filling initial grid slots)
        const prevMonthTotalDays = new Date(year, monthIndex, 0).getDate()
        for (let i = startDayOfWeek - 1; i >= 0; i--) {
            const dayNum = prevMonthTotalDays - i
            days.push({
                id: `prev-${dayNum}`,
                dayNumber: dayNum,
                isCurrentMonth: false,
                isFeatured: false,
                isPrevMonth: true,
            })
        }

        // Current month days
        for (let day = 1; day <= totalDaysInMonth; day++) {
            days.push({
                id: `curr-${day}`,
                dayNumber: day,
                isCurrentMonth: true,
                isFeatured: day === featuredDay,
            })
        }

        // Next month padding days to complete 7-column grid rows
        const totalGridSlots = days.length
        const remainingSlots = (7 - (totalGridSlots % 7)) % 7
        for (let day = 1; day <= remainingSlots; day++) {
            days.push({
                id: `next-${day}`,
                dayNumber: day,
                isCurrentMonth: false,
                isFeatured: false,
                isNextMonth: true,
            })
        }

        return {
            monthName,
            monthTitle,
            startDayOfWeek,
            totalDaysInMonth,
            days,
        }
    }, [month, year, featuredDay])

    return {
        year,
        month,
        monthName: calendarData.monthName,
        monthTitle: calendarData.monthTitle,
        weekdays,
        days: calendarData.days,
        totalDaysInMonth: calendarData.totalDaysInMonth,
        featuredDay,
    }
}
