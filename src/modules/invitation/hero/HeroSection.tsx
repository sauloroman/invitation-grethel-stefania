import React from 'react'
import { motion } from 'framer-motion'
import { Particles } from '@/common/components/particles/Particles'
import { useInvitationConfig, useScrollDown, useConfetti } from '@/common/hooks'
import { ScratchCard } from '@/common/components/scratch-card/ScratchCard'
import { CaretDownIcon } from '@phosphor-icons/react'

import photo from '@/assets/images/photos/1.jpeg'
import name from '@/assets/images/icons/name-2.png'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const HeroSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const { handleScrollDown } = useScrollDown('hero')
    const { fireConfetti } = useConfetti()
    
    const handleScratchReveal = () => {
        // Fire another central confetti explosion to double the effect
        fireConfetti({
            preset: 'explosion',
            particleCount: 250,
            colors: ['#FFD700', '#D4AF37', '#FFF8DC', '#FFFFFF', '#c5a059'],
        })
    }
    const rawDate = sections.hero?.date ?? '22.08.2026'

    const formattedDate = rawDate
        .split('.')
        .map((part) => part.trim())
        .join(' . ')

    return (
        <div id="hero" className="hero">
            <Particles
                variant="glitter"
                count={80}
                colors={['#FFFFFF', '#FFF8DC', '#FFD700', '#D4AF37', '#F3E5AB', '#E6CA65', '#FFF3CD']}
                minSize={1.5}
                maxSize={4.5}
                speed={0.85}
                direction="down"
                zIndex={3}
            />

            <motion.div
                className="hero__img"
                initial={{ scale: 1.12, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3.2, ease: FLUID_EASE }}
            >
                <motion.div
                    className="hero__overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.8, ease: 'easeOut' }}
                />
                <img src={photo} alt="Grethel Stefania XV Años" />
            </motion.div>

            <motion.div
                className="hero__subtitle"
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3.0, delay: 0.25, ease: FLUID_EASE }}
            >
                <span className="hero__subtitle-text">Mis</span>
                <span className="hero__subtitle-script">XV</span>
                <span className="hero__subtitle-text">AÑOS</span>
            </motion.div>

            <motion.div
                className="hero__names"
                initial={{ opacity: 0, scale: 0.92, y: 22 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 3.0, delay: 0.5, ease: FLUID_EASE }}
            >
                <img src={name} alt="Grethel Stefania" />
            </motion.div>

            <motion.div
                className="hero__details"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3.0, delay: 0.75, ease: FLUID_EASE }}
            >
                <ScratchCard
                    shape="rect"
                    foilColor="gold-glitter"
                    overlayText="Rasca para descubrir"
                    brushSize={28}
                    revealPercent={45}
                    onReveal={handleScratchReveal}
                    className="hero__scratch"
                >
                    <p className="hero__date">{formattedDate}</p>
                    <p className="hero__location">AGUASCALIENTES - MX</p>
                </ScratchCard>
            </motion.div>

            <motion.button
                type="button"
                className="hero__scroll"
                onClick={handleScrollDown}
                aria-label="Deslizar hacia abajo"
                initial={{ opacity: 0, y: 18, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                transition={{ duration: 2.8, delay: 1.0, ease: FLUID_EASE }}
            >
                <span className="hero__scroll-text">Desliza</span>
                <div className="hero__scroll-arrows">
                    <CaretDownIcon className="hero__scroll-arrow hero__scroll-arrow--1" size={16} weight="bold" />
                    <CaretDownIcon className="hero__scroll-arrow hero__scroll-arrow--2" size={16} weight="bold" />
                </div>
            </motion.button>
        </div>
    )
}
