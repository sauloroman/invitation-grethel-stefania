import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

export const MessageSection: React.FC = () => {
    return (
        <>
            <section className="message" id="message">
                <div className="message__container">
                    <div className="message__header">
                        <SectionHeader
                            title='Mis Queridos XV'
                        />
                    </div>
                    <p className='message__text'>Hay momentos inolvidables que se atesoran en el corazón para siempre. Por esa razón quiero que compartas conmigo esta noche tan especial.</p>
                </div>
            </section>
        </>
    )
}
