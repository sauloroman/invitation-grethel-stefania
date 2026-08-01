import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useInvitationConfig, useScrollTimeline, useConfetti } from '@/common/hooks'
import { HeartIcon } from '@phosphor-icons/react'

import illustration from '@/assets/images/backgrounds/itinerary-flower.svg'
import macetero from '@/assets/images/icons/macetero.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const ItinerarySection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const { fireConfetti } = useConfetti()
    const hasFiredConfetti = useRef(false)

    const itineraryItems = ((sections.itinerary?.itinerary as { time: string, event: string }[]) || []).filter(
        (item: { time: string; event: string }) => item.event && item.event !== '-1'
    )

    const { gridRef, setItemRef, activeIndex, iconTop } = useScrollTimeline({
        itemCount: itineraryItems.length,
    })

    useEffect(() => {
        const isLastItem = activeIndex === itineraryItems.length - 1
        if (isLastItem && itineraryItems.length > 0) {
            if (!hasFiredConfetti.current) {
                hasFiredConfetti.current = true
                fireConfetti({
                    preset: 'side-cannons',
                    particleCount: 150,
                    colors: ['#384001', '#b3bf5a', '#f2f2eb', '#fee0ef', '#8c8072', '#C29F53', '#9CB08D'],
                })
            }
        } else {
            hasFiredConfetti.current = false
        }
    }, [activeIndex, itineraryItems.length, fireConfetti])

    return (
        <div id="itinerary" className="itinerary">
            <motion.img
                className="itinerary__img"
                src={illustration}
                alt="Decoración itinerario"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 3.0, ease: FLUID_EASE }}
            />

            <div className="itinerary__container">
                <motion.div
                    className="itinerary__header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.15, ease: FLUID_EASE }}
                >
                    <SectionHeader subtitle="Las Amenidades" title="Itinerario" />
                    <p className="itinerary__subtitle-text">
                        Disfruta con nosotros cada momento preparado con cariño para esta gran celebración
                    </p>
                </motion.div>

                <div className="itinerary__grid" ref={gridRef}>
                    <div
                        className="itinerary__active-node"
                        style={{ top: `${iconTop}px` }}
                    >
                        <HeartIcon size={22} weight="bold" />
                    </div>

                    {itineraryItems.map((item: { time: string; event: string }, index: number) => {
                        const isEven = index % 2 === 0
                        const sideClass = isEven ? 'itinerary__item--left' : 'itinerary__item--right'
                        const isActive = index === activeIndex

                        return (
                            <motion.div
                                key={index}
                                ref={setItemRef(index)}
                                className={`itinerary__item ${sideClass} ${isActive ? 'itinerary__item--active' : ''}`}
                                style={{ gridRow: index + 1 }}
                                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 2.8, delay: 0.3 + index * 0.15, ease: FLUID_EASE }}
                            >
                                <div className="itinerary__node-outline">
                                    <HeartIcon size={18} weight="thin" />
                                </div>
                                <span className="itinerary__time">{item.time}</span>
                                <h3 className="itinerary__event">{item.event}</h3>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="itinerary__maceteros">
                <motion.img
                    className="itinerary__macetero itinerary__macetero--left"
                    src={macetero}
                    alt="Decoración Macetero"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.0, delay: 0.6, ease: FLUID_EASE }}
                />
                <motion.img
                    className="itinerary__macetero itinerary__macetero--right"
                    src={macetero}
                    alt="Decoración Macetero"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.0, delay: 0.6, ease: FLUID_EASE }}
                />
            </div>
        </div>
    )
}
