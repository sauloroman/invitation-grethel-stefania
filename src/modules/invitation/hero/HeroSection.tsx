import React from 'react'
import { useInvitationConfig, useScrollDown } from '@/common/hooks'
import { CaretDownIcon } from '@phosphor-icons/react'

import bg from '@/assets/images/backgrounds/bg-hero.svg'
import name from '@/assets/images/icons/name-2.png'

export const HeroSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const { handleScrollDown } = useScrollDown('hero')
    const rawDate = sections.hero?.date ?? '22.08.2026'

    const formattedDate = rawDate
        .split('.')
        .map((part) => part.trim())
        .join(' . ')

    return (
        <div id="hero" className="hero">
            <div className="hero__bg" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="hero__content">
                <div className="hero__subtitle">
                    <span className="hero__subtitle-text">Mis</span>
                    <span className="hero__subtitle-script">XV</span>
                    <span className="hero__subtitle-text">AÑOS</span>
                </div>

                <div className="hero__names">
                    <img src={name} alt="names" />
                </div>

                <div className="hero__details">
                    <p className="hero__date">{formattedDate}</p>
                    <p className="hero__location">AGUASCALIENTES - MX</p>
                </div>
            </div>

            <button
                type="button"
                className="hero__scroll"
                onClick={handleScrollDown}
                aria-label="Deslizar hacia abajo"
            >
                <span className="hero__scroll-text">Desliza</span>
                <div className="hero__scroll-arrows">
                    <CaretDownIcon className="hero__scroll-arrow hero__scroll-arrow--1" size={16} weight="bold" />
                    <CaretDownIcon className="hero__scroll-arrow hero__scroll-arrow--2" size={16} weight="bold" />
                </div>
            </button>
        </div>
    )
}
