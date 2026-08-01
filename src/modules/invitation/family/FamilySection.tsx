import React from 'react'
import { motion } from 'framer-motion'
import bg from '@/assets/images/backgrounds/bg-family-4.svg'
import photo from '@/assets/images/photos/2.jpeg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const FamilySection: React.FC = () => {
    return (
        <div id="family" className="family-section">
            <motion.div
                className="family__photo"
                initial={{ opacity: 0, scale: 1.08 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3.2, ease: FLUID_EASE }}
            >
                <div className="family__photo-overlay" />
                <img src={photo} alt="Grethel Stefania Foto" />
            </motion.div>

            <div className="family">
                <motion.div
                    className="family__card"
                    initial={{ opacity: 0, y: 35, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 3.0, delay: 0.1, ease: FLUID_EASE }}
                >
                    <div className="family__card-bg" />

                    <div className="family__card-content">
                        <motion.div
                            className="family__quote"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.8, delay: 0.25, ease: FLUID_EASE }}
                        >
                            <p className="family__quote-text">
                                &ldquo;Pues mandará a sus ángeles acerca de tí, para que te guarden en todos tus caminos.&rdquo;
                            </p>
                            <span className="family__quote-author">&mdash; Salmo 91:11 &mdash;</span>
                        </motion.div>

                        <motion.div
                            className="family__blessing"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.8, delay: 0.4, ease: FLUID_EASE }}
                        >
                            <p>Con la bendición de Dios y en compañía de mis padres y padrinos</p>
                        </motion.div>

                        <div className="family__family">
                            <motion.div
                                className="family__family-group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.8, delay: 0.55, ease: FLUID_EASE }}
                            >
                                <h3 className="family__family-title">Mis Padres</h3>
                                <p className="family__family-names">
                                    Yesenia Ortega Ortíz<br />
                                    Francisco Javier Nava Trinidad
                                </p>
                            </motion.div>

                            <motion.div
                                className="family__family-divider"
                                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.5, delay: 0.7, ease: FLUID_EASE }}
                            >
                                ✦
                            </motion.div>

                            <motion.div
                                className="family__family-group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.8, delay: 0.85, ease: FLUID_EASE }}
                            >
                                <h3 className="family__family-title">Mis Padrinos</h3>
                                <p className="family__family-names">
                                    Rosa Trinidad Carmona<br />
                                    Rosa Ma. Ortíz Saucedo
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="family__family-draw"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, delay: 1.0, ease: FLUID_EASE }}
                    >
                        <img src={bg} alt="Background family" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
