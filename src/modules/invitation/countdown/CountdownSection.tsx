import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Countdown } from '@/common/components/countdown/Countdown'
import { useInvitationConfig, useCalendar, useSaveTheDate } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { CalendarPlusIcon } from '@phosphor-icons/react'

import bg from '@/assets/images/backgrounds/bg-countdown.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const CountdownSection: React.FC = () => {
    const { downloadSaveTheDate } = useSaveTheDate()
    const { sections } = useInvitationConfig()
    const { monthTitle, weekdays, days } = useCalendar({ month: 8, year: 2026, featuredDay: 22 })
    const targetDate = sections.countdown?.targetDate ?? '2026-08-22T16:00:00'

    return (
        <div id="countdown" className="countdown-section">
            <motion.div
                className="countdown-section__bg"
                style={{ backgroundImage: `url(${bg})` }}
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 0.9, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3.0, ease: FLUID_EASE }}
            />

            <div className="countdown-section__content">
                <motion.div
                    className="countdown-section__header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 3.0, delay: 0.1, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        subtitle="Contamos los Días"
                        title="Cuenta Regresiva"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 3.0, delay: 0.25, ease: FLUID_EASE }}
                >
                    <Countdown className="countdown-section__countdown" variant="minimal" targetDate={targetDate} />
                </motion.div>

                <motion.div
                    className="countdown-section__calendar"
                    initial={{ opacity: 0, y: 25, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 3.0, delay: 0.4, ease: FLUID_EASE }}
                >
                    <p className="countdown-section__calendar-title">{monthTitle}</p>
                    <div className="countdown-section__calendar-grid">
                        {weekdays.map((day) => (
                            <div key={day} className="countdown-section__calendar-head">
                                {day}
                            </div>
                        ))}
                        {days.map((dayItem) => (
                            <div
                                key={dayItem.id}
                                className={`countdown-section__calendar-day ${dayItem.isFeatured ? 'countdown-section__calendar-day--featured' : ''
                                    } ${!dayItem.isCurrentMonth ? 'countdown-section__calendar-day--muted' : ''}`}
                            >
                                <span className="countdown-section__calendar-num">{dayItem.dayNumber}</span>
                                {dayItem.isFeatured && (
                                    <motion.svg
                                        viewBox="0 0 24 24"
                                        className="countdown-section__calendar-heart"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: [0, 1.2, 1], opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2.8, delay: 0.7, ease: FLUID_EASE }}
                                    >
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                            fill="rgba(194, 159, 83, 0.25)"
                                            stroke="#C29F53"
                                            strokeWidth="2.2"
                                        />
                                    </motion.svg>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="countdown-section__button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 3.0, delay: 0.55, ease: FLUID_EASE }}
                >
                    <Button
                        variant="secondary"
                        radius="full"
                        icon={<CalendarPlusIcon size={18} weight="thin" />}
                        onClick={() => downloadSaveTheDate()}
                    >
                        GUARDAR RECORDATORIO
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
