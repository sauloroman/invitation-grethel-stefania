import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { useModal } from '@/common/hooks'
import { MODAL_NAMES } from '@/store/ui/modal.slice'

import photo3 from '@/assets/images/photos/3.jpeg'
import photo4 from '@/assets/images/photos/4.jpeg'
import photo6 from '@/assets/images/photos/6.jpeg'

export const GallerySection: React.FC = () => {
    const { onOpenModal } = useModal()

    const images = [
        { id: 1, src: photo3, alt: 'Grethel Stefania Galería 1', className: 'gallery__item--featured' },
        { id: 2, src: photo4, alt: 'Grethel Stefania Galería 2', className: 'gallery__item--top' },
        { id: 3, src: photo6, alt: 'Grethel Stefania Galería 3', className: 'gallery__item--bottom' },
    ]

    const handlePhotoClick = (photoSrc: string) => {
        onOpenModal(MODAL_NAMES.gallery, 'Galería de Fotos', photoSrc)
    }

    return (
        <section id="gallery" className="gallery">
            <div className="gallery__container">
                <div className="gallery__header">
                    <SectionHeader title="Galería de Fotos" subtitle="Mis Momentos" />
                </div>

                <div className="gallery__mosaic">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className={`gallery__item ${img.className}`}
                            onClick={() => handlePhotoClick(img.src)}
                        >
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery__overlay">
                                <span>Ver Foto</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
