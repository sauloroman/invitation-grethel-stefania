import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import { PaletteIcon, InfoIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import womenDressCode from '@/assets/images/icons/women-dress-code.svg'
import menDressCode from '@/assets/images/icons/men-dress-code.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const DressCodeSection: React.FC = () => {
    const handleWomenPinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=vestidos%20glam%20fiesta%20elegantes', '_blank', 'noopener,noreferrer')
    }

    const handleMenPinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=traje%20formal%20hombre%20corbata%20mono', '_blank', 'noopener,noreferrer')
    }

    return (
        <section id="dress-code" className="dress-code">
            <div className="dress-code__container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.1, ease: FLUID_EASE }}
                >
                    <SectionHeader
                        subtitle="Etiqueta del Evento"
                        title="Código de Vestimenta"
                    />
                </motion.div>

                <motion.div
                    className="dress-code__badge"
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.25, ease: FLUID_EASE }}
                >
                    <span>Vestimenta Formal</span>
                </motion.div>

                <div className="dress-code__grid">
                    {/* Damas */}
                    <motion.div
                        className="dress-code__item"
                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 3.0, delay: 0.4, ease: FLUID_EASE }}
                    >
                        <motion.div
                            className="dress-code__item-icon"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.55, ease: FLUID_EASE }}
                        >
                            <img src={womenDressCode} alt="Vestimenta de Damas" />
                        </motion.div>
                        <motion.h3
                            className="dress-code__item-title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.65, ease: FLUID_EASE }}
                        >
                            Damas
                        </motion.h3>
                        <motion.p
                            className="dress-code__item-requirement"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.75, ease: FLUID_EASE }}
                        >
                            Vestido Glam, Brillante & Perlas
                        </motion.p>
                        <motion.p
                            className="dress-code__item-desc"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.8, ease: FLUID_EASE }}
                        >
                            Sugerimos vestidos elegantes de noche o cocktail enriquecidos con finas aplicaciones brillantes, detalles en perlas o bordados deslumbrantes.
                        </motion.p>

                        <motion.div
                            className="dress-code__glam-info"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.85, ease: FLUID_EASE }}
                        >
                            <InfoIcon size={18} weight="bold" className="dress-code__glam-icon" />
                            <span className="dress-code__glam-text">
                                <strong>Estilo Glam:</strong> Look deslumbrante y sofisticado con detalles de perlas, brillos y máxima elegancia.
                            </span>
                        </motion.div>

                        <motion.div
                            className="dress-code__item-action"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.95, ease: FLUID_EASE }}
                        >
                            <Button
                                variant="secondary"
                                radius="none"
                                size="sm"
                                icon={<ArrowUpRightIcon size={16} weight="bold" />}
                                iconPosition="right"
                                onClick={handleWomenPinterestClick}
                                aria-label="Ver ejemplos de vestidos en Pinterest"
                            >
                                VER EJEMPLOS
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Caballeros */}
                    <motion.div
                        className="dress-code__item"
                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 3.0, delay: 0.55, ease: FLUID_EASE }}
                    >
                        <motion.div
                            className="dress-code__item-icon"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.7, ease: FLUID_EASE }}
                        >
                            <img src={menDressCode} alt="Vestimenta de Caballeros" />
                        </motion.div>
                        <motion.h3
                            className="dress-code__item-title"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.8, ease: FLUID_EASE }}
                        >
                            Caballeros
                        </motion.h3>
                        <motion.p
                            className="dress-code__item-requirement"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.85, ease: FLUID_EASE }}
                        >
                            Traje Formal con Corbata o Moño
                        </motion.p>
                        <motion.p
                            className="dress-code__item-desc"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.9, ease: FLUID_EASE }}
                        >
                            Traje elegante indispensablemente acompañado de corbata o moño (pajarita) para mantener la formalidad de la noche.
                        </motion.p>

                        <motion.div
                            className="dress-code__item-action"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, delay: 0.95, ease: FLUID_EASE }}
                        >
                            <Button
                                variant="secondary"
                                radius="none"
                                size="sm"
                                icon={<ArrowUpRightIcon size={16} weight="bold" />}
                                iconPosition="right"
                                onClick={handleMenPinterestClick}
                                aria-label="Ver ejemplos de trajes en Pinterest"
                            >
                                VER EJEMPLOS
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Sección Colores Reservados */}
                <motion.div
                    className="dress-code__reserved"
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 3.0, delay: 0.6, ease: FLUID_EASE }}
                >
                    <motion.div
                        className="dress-code__reserved-header"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 0.75, ease: FLUID_EASE }}
                    >
                        <PaletteIcon size={24} weight="thin" className="dress-code__reserved-icon" />
                        <h4 className="dress-code__reserved-title">Colores Reservados</h4>
                    </motion.div>
                    <motion.p
                        className="dress-code__reserved-subtitle"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 0.85, ease: FLUID_EASE }}
                    >
                        Solicitamos amablemente reservar los siguientes colores de uso exclusivo para los anfitriones:
                    </motion.p>

                    <div className="dress-code__colors-list">
                        <motion.div
                            className="dress-code__color-item"
                            initial={{ opacity: 0, scale: 0.85, x: -20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.8, delay: 0.95, ease: FLUID_EASE }}
                        >
                            <div className="dress-code__color-swatch dress-code__color-swatch--black" />
                            <div className="dress-code__color-text">
                                <strong>Negro</strong>
                                <span>Exclusivo Quinceañera</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="dress-code__color-item"
                            initial={{ opacity: 0, scale: 0.85, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.8, delay: 1.1, ease: FLUID_EASE }}
                        >
                            <div className="dress-code__color-swatch dress-code__color-swatch--gold" />
                            <div className="dress-code__color-text">
                                <strong>Dorado</strong>
                                <span>Exclusivo Familia</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
