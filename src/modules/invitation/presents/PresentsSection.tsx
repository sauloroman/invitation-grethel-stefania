import React from 'react'
import { motion } from 'framer-motion'

import bg from '@/assets/images/backgrounds/bg-presents.svg'
import bg2 from '@/assets/images/backgrounds/bg-presents-2.svg'
import present from '@/assets/images/icons/present-icon.svg'
import envelop from '@/assets/images/icons/presents-envelop.svg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const PresentsSection: React.FC = () => {
    return (
        <div id="presents" className="presents">
            <div className="presents__container">
                <motion.div
                    className="presents__card"
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 3.0, delay: 0.15, ease: FLUID_EASE }}
                >
                    <div className="presents__card-bg" style={{ backgroundImage: `url(${bg})` }} />
                    <motion.div
                        className="presents__icon"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 0.3, ease: FLUID_EASE }}
                    >
                        <img src={present} alt="present" />
                    </motion.div>
                    <h2 className="presents__title">Obsequios Físicos</h2>
                    <p className="presents__text">
                        Si deseas consentirme con un regalo físico o detalle especial, cualquier obsequio será recibido con mucha ilusión y gratitud.
                    </p>
                </motion.div>

                <motion.div
                    className="presents__card"
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 3.0, delay: 0.35, ease: FLUID_EASE }}
                >
                    <div className="presents__card-bg" style={{ backgroundImage: `url(${bg2})` }} />
                    <motion.div
                        className="presents__icon"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, delay: 0.5, ease: FLUID_EASE }}
                    >
                        <img src={envelop} alt="present" />
                    </motion.div>
                    <h2 className="presents__title">Lluvia de Sobres</h2>
                    <p className="presents__text">
                        Si prefieres apoyarme con una aportación en efectivo para mis planes y metas, dispondremos de un sobre y buzón especial el día de la fiesta.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
