import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Modal } from '@/common/components/modal/Modal'
import { Carousel } from '@/common/components/carousel/Carousel'

import ubi1 from '@/assets/images/photos/ubicacion-1.jpeg'
import ubi2 from '@/assets/images/photos/ubicacion-2.jpeg'
import ubi3 from '@/assets/images/photos/ubicacion-3.jpeg'

export const PlacePhotosModal: React.FC = () => {
    const images = [ubi1, ubi2, ubi3]

    return (
        <Modal size="lg">
            <div className="place-photos-modal">
                <Carousel
                    autoplay={false}
                    loop={true}
                    showNavigation={true}
                    showPagination={true}
                    className="place-photos-carousel"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="place-photos-modal__slide">
                                <img
                                    src={img}
                                    alt={`Foto de la ubicación ${index + 1}`}
                                    className="place-photos-modal__image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Carousel>
            </div>
        </Modal>
    )
}
