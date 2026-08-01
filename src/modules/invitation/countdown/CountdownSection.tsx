import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Countdown } from '@/common/components/countdown/Countdown'
import { useInvitationConfig, useCalendar, useSaveTheDate } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { CalendarPlusIcon } from '@phosphor-icons/react'

import bg from '@/assets/images/backgrounds/bg-countdown.svg'

export const CountdownSection: React.FC = () => {
    const { downloadSaveTheDate } = useSaveTheDate()
    const { sections } = useInvitationConfig()
    const { monthTitle, weekdays, days } = useCalendar({ month: 8, year: 2026, featuredDay: 22 })
    const targetDate = sections.countdown.targetDate

    return (
        <div id='countdown-section' className="countdown-section">
            <div className="countdown-section__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="countdown-section__content">

                <div className="countdown-section__header">
                    <SectionHeader
                        subtitle='Contamos los Días'
                        title='Cuenta Regresiva'
                    />
                </div>

                <Countdown className='countdown-section__countdown' variant='minimal' targetDate={targetDate} />

                <div className="countdown-section__calendar">
                    <p className="countdown-section__calendar-title">{monthTitle}</p>
                    <div className="countdown-section__calendar-grid">
                        {weekdays.map(day => (
                            <div key={day} className="countdown-section__calendar-head">
                                {day}
                            </div>
                        ))}
                        {days.map(dayItem => (
                            <div
                                key={dayItem.id}
                                className={`countdown-section__calendar-day ${dayItem.isFeatured ? 'countdown-section__calendar-day--featured' : ''
                                    } ${!dayItem.isCurrentMonth ? 'countdown-section__calendar-day--muted' : ''}`}
                            >
                                <span className="countdown-section__calendar-num">{dayItem.dayNumber}</span>
                                {dayItem.isFeatured && (
                                    <svg viewBox="0 0 24 24" className="countdown-section__calendar-heart">
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                            fill="rgba(194, 159, 83, 0.25)"
                                            stroke="#C29F53"
                                            strokeWidth="2.2"
                                        />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="countdown-section__button">
                    <Button
                        variant="secondary"
                        radius="full"
                        icon={<CalendarPlusIcon size={18} weight="thin" />}
                        onClick={() => downloadSaveTheDate()}
                    >
                        GUARDAR RECORDATORIO
                    </Button>
                </div>
            </div>
        </div>
    )
}


