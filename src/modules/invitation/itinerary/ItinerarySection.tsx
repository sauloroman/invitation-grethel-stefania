import React, { useEffect, useRef } from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useInvitationConfig, useScrollTimeline, useConfetti } from '@/common/hooks'
import { HeartIcon } from '@phosphor-icons/react'

import illustration from '@/assets/images/backgrounds/itinerary-flower.svg'
import illustration2 from '@/assets/images/backgrounds/itinerary-flower-4.svg'

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
            <img className="itinerary__img" src={illustration} alt="Decoración itinerario" />

            <div className="itinerary__container">
                <div className="itinerary__header">
                    <SectionHeader subtitle="Las Amenidades" title="Itinerario" />
                    <p className="itinerary__subtitle-text">
                        Disfruta con nosotros cada momento preparado con cariño para esta gran celebración
                    </p>
                </div>

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
                            <div
                                key={index}
                                ref={setItemRef(index)}
                                className={`itinerary__item ${sideClass} ${isActive ? 'itinerary__item--active' : ''}`}
                                style={{ gridRow: index + 1 }}
                            >
                                <div className="itinerary__node-outline">
                                    <HeartIcon size={18} weight="thin" />
                                </div>
                                <span className="itinerary__time">{item.time}</span>
                                <h3 className="itinerary__event">{item.event}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

            <img className="itinerary__img" src={illustration2} alt="Decoración itinerario" />
        </div>
    )
}



