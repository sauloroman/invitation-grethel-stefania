import React from 'react'
import { SectionHeader } from '@/common/components/section-header/SectionHeader'
import { ConfirmationForm } from './ConfirmationForm'
import envelop from '@/assets/images/icons/presents-envelop.svg'

export const ConfirmationSection: React.FC = () => {
    return (
        <div id="confirmation" className="confirmation">
            <div className="confirmation__container">
                <div className="confirmation__card">
                    <div className="confirmation__card-bg"></div>

                    <div className="confirmation__icon">
                        <img src={envelop} alt="Confirmación R.S.V.P." />
                    </div>

                    <SectionHeader
                        subtitle="R.S.V.P."
                        title="Confirmación de Asistencia"
                    />

                    <p className="confirmation__description">
                        Por favor confirma tu asistencia completando el siguiente formulario.
                    </p>

                    <ConfirmationForm />
                </div>
            </div>
        </div>
    )
}
