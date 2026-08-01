import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import { PaletteIcon, InfoIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import womenDressCode from '@/assets/images/icons/women-dress-code.svg'
import menDressCode from '@/assets/images/icons/men-dress-code.svg'

export const DressCodeSection: React.FC = () => {
    const handleWomenPinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=vestidos%20glam%20fiesta%20elegantes', '_blank', 'noopener,noreferrer')
    }

    const handleMenPinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=traje%20formal%20hombre%20corbata%20mono', '_blank', 'noopener,noreferrer')
    }

    return (
        <section id="dress-code" className="dress-code">
            <div className="dress-code__container">
                <SectionHeader
                    subtitle="Etiqueta del Evento"
                    title="Código de Vestimenta"
                />

                <div className="dress-code__badge">
                    <span>Vestimenta Formal</span>
                </div>

                <div className="dress-code__grid">
                    {/* Damas */}
                    <div className="dress-code__item">
                        <div className="dress-code__item-icon">
                            <img src={womenDressCode} alt="Vestimenta de Damas" />
                        </div>
                        <h3 className="dress-code__item-title">Damas</h3>
                        <p className="dress-code__item-requirement">
                            Vestido Glam, Brillante & Perlas
                        </p>
                        <p className="dress-code__item-desc">
                            Sugerimos vestidos elegantes de noche o cocktail enriquecidos con finas aplicaciones brillantes, detalles en perlas o bordados deslumbrantes.
                        </p>

                        <div className="dress-code__glam-info">
                            <InfoIcon size={18} weight="bold" className="dress-code__glam-icon" />
                            <span className="dress-code__glam-text">
                                <strong>Estilo Glam:</strong> Look deslumbrante y sofisticado con detalles de perlas, brillos y máxima elegancia.
                            </span>
                        </div>

                        <div className="dress-code__item-action">
                            <Button
                                variant="secondary"
                                radius="none"
                                size="sm"
                                icon={<ArrowUpRightIcon size={16} weight="bold" />}
                                iconPosition="right"
                                onClick={handleWomenPinterestClick}
                                aria-label="Ver ejemplos de vestidos en Pinterest"
                            >
                                VER EJEMPLOS
                            </Button>
                        </div>
                    </div>

                    {/* Caballeros */}
                    <div className="dress-code__item">
                        <div className="dress-code__item-icon">
                            <img src={menDressCode} alt="Vestimenta de Caballeros" />
                        </div>
                        <h3 className="dress-code__item-title">Caballeros</h3>
                        <p className="dress-code__item-requirement">
                            Traje Formal con Corbata o Moño
                        </p>
                        <p className="dress-code__item-desc">
                            Traje elegante indispensablemente acompañado de corbata o moño (pajarita) para mantener la formalidad de la noche.
                        </p>

                        <div className="dress-code__item-action">
                            <Button
                                variant="secondary"
                                radius="none"
                                size="sm"
                                icon={<ArrowUpRightIcon size={16} weight="bold" />}
                                iconPosition="right"
                                onClick={handleMenPinterestClick}
                                aria-label="Ver ejemplos de trajes en Pinterest"
                            >
                                VER EJEMPLOS
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sección Colores Reservados */}
                <div className="dress-code__reserved">
                    <div className="dress-code__reserved-header">
                        <PaletteIcon size={24} weight="thin" className="dress-code__reserved-icon" />
                        <h4 className="dress-code__reserved-title">Colores Reservados</h4>
                    </div>
                    <p className="dress-code__reserved-subtitle">
                        Solicitamos amablemente reservar los siguientes colores de uso exclusivo para los anfitriones:
                    </p>

                    <div className="dress-code__colors-list">
                        <div className="dress-code__color-item">
                            <div className="dress-code__color-swatch dress-code__color-swatch--black"></div>
                            <div className="dress-code__color-text">
                                <strong>Negro</strong>
                                <span>Exclusivo Quinceañera</span>
                            </div>
                        </div>

                        <div className="dress-code__color-item">
                            <div className="dress-code__color-swatch dress-code__color-swatch--gold"></div>
                            <div className="dress-code__color-text">
                                <strong>Dorado</strong>
                                <span>Exclusivo Familia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
