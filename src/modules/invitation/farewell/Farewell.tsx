import React from 'react'
import { Particles } from '@/common/components/particles/Particles'
import { useInvitationConfig } from '@/common/hooks'
import photo from '@/assets/images/photos/1.jpeg'

export const Farewell: React.FC = () => {
    const { sections } = useInvitationConfig()
    const names = sections.hero?.names || 'Grethel Stefania'

    return (
        <footer className="farewell">
            <Particles
                variant="glitter"
                count={80}
                colors={['#FFFFFF', '#FFF8DC', '#FFD700', '#D4AF37', '#F3E5AB', '#E6CA65', '#FFF3CD']}
                minSize={1.5}
                maxSize={4.5}
                speed={0.85}
                direction="down"
                zIndex={2}
            />

            <div className="farewell__img">
                <div className="farewell__overlay"></div>
                <img src={photo} alt={names} />
                <div className="farewell__content">
                    <p className="farewell__subtitle">Gracias por acompañarme</p>
                    <h2 className="farewell__name">{names}</h2>
                </div>
            </div>
        </footer>
    )
}
