import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const MessageSection: React.FC = () => {
    return (
        <section className="message" id="message">
            <motion.div
                className="message__container"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 3.0, ease: FLUID_EASE }}
            >
                <motion.div
                    className="message__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.15, ease: FLUID_EASE }}
                >
                    <SectionHeader title="Mis Queridos XV" />
                </motion.div>

                <motion.div
                    className="message__ornament"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.35, ease: FLUID_EASE }}
                />

                <motion.p
                    className="message__text"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3.0, delay: 0.5, ease: FLUID_EASE }}
                >
                    Hay momentos inolvidables que se atesoran en el corazón para siempre. Por esa razón quiero que compartas conmigo esta noche tan especial.
                </motion.p>
            </motion.div>
        </section>
    )
}
