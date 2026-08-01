import React from 'react'
import { useInvitationConfig } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { MapPinIcon } from '@phosphor-icons/react'

import logo from '@/assets/images/icons/logo.png'
import place from '@/assets/images/icons/cabania.svg'

export const PlacesSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const locations = sections.places?.locations ?? []

    return (
        <div id="places" className="places">
            <div className="places__container">
                {logo && (
                    <div className="places__logo">
                        <img src={logo} alt="Grethel Stefania Logo" />
                    </div>
                )}

                <p className="places__datetime">
                    A REALIZARSE EL DÍA SÁBADO 22 DE AGOSTO DE 2026.TE ESPERAMOS CON AMOR.
                </p>

                <div className="places__list">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="places__item">
                            <h2 className="places__title">{loc.title}</h2>
                            <p className="places__address">{loc.location}</p>

                            {loc.url && (
                                <div className="places__action">
                                    <Button
                                        variant="secondary"
                                        radius="full"
                                        icon={<MapPinIcon size={18} weight="thin" />}
                                        onClick={() => window.open(loc.url, '_blank', 'noopener,noreferrer')}
                                        aria-label={`Ver ubicación de ${loc.title}`}
                                    >
                                        VER UBICACIÓN
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="places__draw">
                    <img src={place} alt="Cabaña" />
                </div>
            </div>
        </div>
    )
}


