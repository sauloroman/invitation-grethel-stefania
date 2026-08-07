import React from 'react'
import { motion } from 'framer-motion'
import { useInvitationConfig, useModal } from '@/common/hooks'
import { Button } from '@/common/components/button/Button'
import { MapPinIcon, ImageIcon } from '@phosphor-icons/react'
import { MODAL_NAMES } from '@/store/ui/modal.slice'

import logo from '@/assets/images/icons/logo.png'
import place from '@/assets/images/icons/cabania.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const PlacesSection: React.FC = () => {
    const { sections } = useInvitationConfig()
    const { onOpenModal } = useModal()
    const locations = sections.places?.locations ?? []

    return (
        <div id="places" className="places">
            <div className="places__container">
                {logo && (
                    <motion.div
                        className="places__logo"
                        initial={{ opacity: 0, scale: 0.9, y: -15 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, ease: FLUID_EASE }}
                    >
                        <img src={logo} alt="Grethel Stefania Logo" />
                    </motion.div>
                )}

                <motion.p
                    className="places__datetime"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.2, ease: FLUID_EASE }}
                >
                    A REALIZARSE EL DÍA SÁBADO 22 DE AGOSTO DE 2026. TE ESPERAMOS CON AMOR.
                </motion.p>

                <div className="places__list">
                    {locations.map((loc, idx) => (
                        <motion.div
                            key={idx}
                            className="places__item"
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 3.0, delay: 0.35 + idx * 0.2, ease: FLUID_EASE }}
                        >
                            <h2 className="places__title">{loc.title}</h2>
                            <p className="places__address">{loc.location}</p>
                            <p className="places__hour">{loc.time}</p>

                            {loc.note && (
                                <p className="places__note">{loc.note}</p>
                            )}

                            {(loc.url || loc.showPhotos) && (
                                <div className="places__action">
                                    {loc.url && (
                                        <Button
                                            variant="secondary"
                                            radius="full"
                                            icon={<MapPinIcon size={18} weight="thin" />}
                                            onClick={() => window.open(loc.url, '_blank', 'noopener,noreferrer')}
                                            aria-label={`Ver ubicación de ${loc.title}`}
                                        >
                                            VER UBICACIÓN
                                        </Button>
                                    )}

                                    {loc.showPhotos && (
                                        <Button
                                            variant="secondary"
                                            radius="full"
                                            icon={<ImageIcon size={18} weight="thin" />}
                                            onClick={() => onOpenModal(MODAL_NAMES.placePhotos, 'Fotos del Salón')}
                                            aria-label="Ver fotos de salón"
                                        >
                                            VER FOTOS DE SALÓN
                                        </Button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="places__draw"
                    initial={{ opacity: 0, y: 30, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.2, delay: 0.7, ease: FLUID_EASE }}
                >
                    <img src={place} alt="Cabaña" />
                </motion.div>
            </div>
        </div>
    )
}
