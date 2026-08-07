import React from 'react'
import { useModal } from '@/common/hooks'
import { MODAL_NAMES } from '@/store/ui/modal.slice'
import { GalleryModal } from '@/modules/invitation/gallery/GalleryModal'
import { PlacePhotosModal } from '@/modules/invitation/places/PlacePhotosModal'

export const ModalMaster: React.FC = () => {
    const { isOpen, modalName } = useModal()

    return (
        <>
            {isOpen && modalName === MODAL_NAMES.gallery && <GalleryModal />}
            {isOpen && modalName === MODAL_NAMES.placePhotos && <PlacePhotosModal />}
        </>
    )
}

