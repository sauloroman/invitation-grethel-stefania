import React from 'react'
import { Modal } from '@/common/components/modal/Modal'
import { useModal } from '@/common/hooks'

export const GalleryModal: React.FC = () => {
    const { modalData } = useModal()
    const photoSrc = typeof modalData === 'string' ? modalData : (modalData as { src?: string })?.src

    if (!photoSrc) return null

    return (
        <Modal size="lg">
            <div className="gallery-modal">
                <img src={photoSrc} alt="Foto Ampliada" className="gallery-modal__image" />
            </div>
        </Modal>
    )
}
