import React from 'react'
import { Modal } from '@/common/components/modal/Modal'
import locationVideo from '@/assets/videos/location-video.mp4'

export const LocationVideoModal: React.FC = () => {
    return (
        <Modal size="lg" className="location-video-modal">
            <div className="location-video-modal__container">
                <video
                    src={locationVideo}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="location-video-modal__video"
                />
            </div>
        </Modal>
    )
}
