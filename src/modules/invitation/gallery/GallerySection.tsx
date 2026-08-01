import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useModal } from '@/common/hooks'
import { MODAL_NAMES } from '@/store/ui/modal.slice'

import photo3 from '@/assets/images/photos/3.jpeg'
import photo4 from '@/assets/images/photos/4.jpeg'
import photo6 from '@/assets/images/photos/6.jpeg'

const FLUID_EASE = [0.22, 1, 0.36, 1] as const

export const GallerySection: React.FC = () => {
    const { onOpenModal } = useModal()

    const images = [
        { id: 1, src: photo3, alt: 'Grethel Stefania Galería 1', className: 'gallery__item--featured', delay: 0.25 },
        { id: 2, src: photo4, alt: 'Grethel Stefania Galería 2', className: 'gallery__item--top', delay: 0.45 },
        { id: 3, src: photo6, alt: 'Grethel Stefania Galería 3', className: 'gallery__item--bottom', delay: 0.65 },
    ]

    const handlePhotoClick = (photoSrc: string) => {
        onOpenModal(MODAL_NAMES.gallery, 'Galería de Fotos', photoSrc)
    }

    return (
        <section id="gallery" className="gallery">
            <div className="gallery__container">
                <motion.div
                    className="gallery__header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.8, delay: 0.1, ease: FLUID_EASE }}
                >
                    <SectionHeader title="Galería de Fotos" subtitle="Mis Momentos" />
                </motion.div>

                <div className="gallery__mosaic">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            className={`gallery__item ${img.className}`}
                            onClick={() => handlePhotoClick(img.src)}
                            initial={{ opacity: 0, scale: 0.93, y: 25 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 3.0, delay: img.delay, ease: FLUID_EASE }}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery__overlay">
                                <span>Ver Foto</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
