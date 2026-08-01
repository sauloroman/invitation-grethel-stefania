import React from 'react'
import { motion } from 'framer-motion'
import { Particles } from '@/common/components/particles/Particles'
import { useInvitationConfig } from '@/common/hooks'
import photo from '@/assets/images/photos/5.jpeg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const Farewell: React.FC = () => {
    const { sections } = useInvitationConfig()
    const names = sections.hero?.names || 'Grethel Stefania'

    return (
        <footer id="farewell" className="farewell">
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

            <motion.div
                className="farewell__img"
                initial={{ scale: 1.12, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3.2, ease: FLUID_EASE }}
            >
                <div className="farewell__overlay" />
                <img src={photo} alt={names} />
                <div className="farewell__content">
                    <motion.p
                        className="farewell__subtitle"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.3, ease: FLUID_EASE }}
                    >
                        Gracias por acompañarme
                    </motion.p>
                    <motion.h2
                        className="farewell__name"
                        initial={{ opacity: 0, scale: 0.92, y: 25 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, delay: 0.55, ease: FLUID_EASE }}
                    >
                        {names}
                    </motion.h2>
                </div>
            </motion.div>

            <motion.div
                className="farewell__credit"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.2, ease: FLUID_EASE }}
            >
                <span className="farewell__credit-text">Hecho con amor por</span>
                <a
                    href="https://www.instagram.com/tuamigoinvitaciones/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="farewell__credit-link"
                >
                    TuAmigoInvitaciones
                </a>
            </motion.div>
        </footer>
    )
}
