import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import maskImg from '@/assets/images/icons/mask-1.png'
import bg from '@/assets/images/backgrounds/bg-presents-2.svg'
import { ArrowUpRightIcon } from '@phosphor-icons/react'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const MasqueradeSection: React.FC = () => {
    const handlePinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=mascaras%20venecianas%20elegantes', '_blank', 'noopener,noreferrer')
    }

    return (
        <section id="masquerade" className="masquerade">
            <div className="masquerade__container">
                <motion.div
                    className="masquerade__card"
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 3.0, delay: 0.1, ease: FLUID_EASE }}
                >
                    <div className="masquerade__card-bg" style={{ backgroundImage: `url(${bg})` }} />

                    <motion.div
                        className="masquerade__mask-img"
                        initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, delay: 0.25, ease: FLUID_EASE }}
                    >
                        <img src={maskImg} alt="Máscara Veneciana - Venetian Masquerade" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.4, ease: FLUID_EASE }}
                    >
                        <SectionHeader
                            subtitle="Temática del Evento"
                            title="Venetian Masquerade"
                        />
                    </motion.div>

                    <motion.div
                        className="masquerade__message"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.55, ease: FLUID_EASE }}
                    >
                        <p className="masquerade__text">
                            Te invitamos a sumergirte en el encanto, el misterio y la elegancia de una inolvidable Noche de Máscara Veneciana.
                        </p>
                        <p className="masquerade__invitation">
                            Para ser parte de esta mágica temática, te pedimos amablemente <strong>traer tu propia máscara o antifaz veneciano</strong> a la recepción para celebrar juntos este baile de fantasía.
                        </p>
                    </motion.div>

                    <motion.div
                        className="masquerade__action"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.7, ease: FLUID_EASE }}
                    >
                        <Button
                            variant="secondary"
                            radius="none"
                            icon={<ArrowUpRightIcon size={18} weight="bold" />}
                            iconPosition="right"
                            onClick={handlePinterestClick}
                            aria-label="Ver ejemplos e ideas de máscaras venecianas en Pinterest"
                        >
                            VER EJEMPLOS DE MÁSCARAS
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
