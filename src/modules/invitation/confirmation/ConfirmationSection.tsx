import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { ConfirmationForm } from './ConfirmationForm'
import envelop from '@/assets/images/icons/buzon.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const ConfirmationSection: React.FC = () => {
    return (
        <div id="confirmation" className="confirmation">
            <div className="confirmation__container">
                <motion.div
                    className="confirmation__card"
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 3.0, delay: 0.1, ease: FLUID_EASE }}
                >
                    <div className="confirmation__card-bg" />

                    <motion.div
                        className="confirmation__icon"
                        initial={{ opacity: 0, scale: 0.85, y: -10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.25, ease: FLUID_EASE }}
                    >
                        <img src={envelop} alt="Confirmación R.S.V.P." />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.4, ease: FLUID_EASE }}
                    >
                        <SectionHeader
                            subtitle="R.S.V.P."
                            title="Confirmación de Asistencia"
                        />
                        <p className="confirmation__description">
                            Por favor confirma tu asistencia completando el siguiente formulario.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.8, delay: 0.55, ease: FLUID_EASE }}
                    >
                        <ConfirmationForm />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
