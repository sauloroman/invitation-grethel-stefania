import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { Button } from '@/common/components/button/Button'
import maskImg from '@/assets/images/icons/mask-1.png'
import bg from '@/assets/images/backgrounds/bg-presents-2.svg'
import { ArrowUpRightIcon } from '@phosphor-icons/react'

export const MasqueradeSection: React.FC = () => {
    const handlePinterestClick = () => {
        window.open('https://www.pinterest.com/search/pins/?q=mascaras%20venecianas%20elegantes', '_blank', 'noopener,noreferrer')
    }

    return (
        <section id="masquerade" className="masquerade">
            <div className="masquerade__container">
                <div className="masquerade__card">
                    <div className="masquerade__card-bg" style={{ backgroundImage: `url(${bg})` }}></div>

                    <div className="masquerade__mask-img">
                        <img src={maskImg} alt="Máscara Veneciana - Venetian Masquerade" />
                    </div>

                    <SectionHeader
                        subtitle="Temática del Evento"
                        title="Venetian Masquerade"
                    />

                    <div className="masquerade__message">
                        <p className="masquerade__text">
                            Te invitamos a sumergirte en el encanto, el misterio y la elegancia de una inolvidable Noche de Máscara Veneciana.
                        </p>
                        <p className="masquerade__invitation">
                            Para ser parte de esta mágica temática, te pedimos amablemente <strong>traer tu propia máscara o antifaz veneciano</strong> a la recepción para celebrar juntos este baile de fantasía.
                        </p>
                    </div>

                    <div className="masquerade__action">
                        <Button
                            variant="secondary"
                            radius="none"
                            icon={<ArrowUpRightIcon size={18} weight="bold" />}
                            iconPosition="right"
                            onClick={handlePinterestClick}
                            aria-label="Ver ejemplos e ideas de máscaras venecianas en Pinterest"
                        >
                            VER EJEMPLOS DE MÁSCARAS
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
