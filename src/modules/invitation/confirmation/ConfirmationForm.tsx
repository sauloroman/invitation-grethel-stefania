import React from 'react'
import {
    CheckCircleIcon,
    XCircleIcon,
    UserIcon,
    PhoneIcon,
    UsersIcon,
    BabyIcon,
    PaperPlaneRightIcon,
    ArrowCounterClockwiseIcon,
    PlusIcon,
    MinusIcon,
    CheckIcon,
} from '@phosphor-icons/react'

import { Button } from '@/common/components/button/Button'
import { useConfirmationForm, type ConfirmationFormData } from './useConfirmationForm'

export type { ConfirmationFormData }

interface ConfirmationFormProps {
    onSuccessSubmit?: (data: ConfirmationFormData) => void
}

export const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ onSuccessSubmit }) => {
    const {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        attending,
        adults,
        childrenCount,
        isSubmitted,
        submittedData,
        handleAttendingSelect,
        handleIncrementAdults,
        handleDecrementAdults,
        handleIncrementChildren,
        handleDecrementChildren,
        onSubmit,
        handleResetForm,
    } = useConfirmationForm({ onSuccessSubmit })

    if (isSubmitted && submittedData) {
        return (
            <div className="confirmation-form__success">
                <div className="confirmation-form__success-icon">
                    {submittedData.attending === 'si' ? (
                        <CheckCircleIcon size={64} weight="fill" />
                    ) : (
                        <XCircleIcon size={64} weight="fill" />
                    )}
                </div>

                <h3 className="confirmation-form__success-title">
                    {submittedData.attending === 'si' ? '¡Confirmación Recibida!' : 'Respuesta Registrada'}
                </h3>

                <p className="confirmation-form__success-message">
                    {submittedData.attending === 'si'
                        ? '¡Estamos muy felices de contar con tu presencia en este día tan especial!'
                        : 'Gracias por informarnos. Te echaremos de menos en la celebración.'}
                </p>

                <div className="confirmation-form__summary">
                    <div className="confirmation-form__summary-item">
                        <span className="confirmation-form__summary-label">Nombre / Familia:</span>
                        <span className="confirmation-form__summary-value">{submittedData.fullName}</span>
                    </div>
                    <div className="confirmation-form__summary-item">
                        <span className="confirmation-form__summary-label">Asistencia:</span>
                        <span className="confirmation-form__summary-value">
                            {submittedData.attending === 'si' ? 'Sí, asistiré' : 'No podré asistir'}
                        </span>
                    </div>
                    {submittedData.attending === 'si' && (
                        <>
                            <div className="confirmation-form__summary-item">
                                <span className="confirmation-form__summary-label">Adultos:</span>
                                <span className="confirmation-form__summary-value">{submittedData.adults}</span>
                            </div>
                            <div className="confirmation-form__summary-item">
                                <span className="confirmation-form__summary-label">Niños:</span>
                                <span className="confirmation-form__summary-value">{submittedData.children}</span>
                            </div>
                        </>
                    )}
                </div>

                <Button
                    variant="outline"
                    radius="full"
                    icon={<ArrowCounterClockwiseIcon size={18} />}
                    onClick={handleResetForm}
                >
                    Volver a Registrar
                </Button>
            </div>
        )
    }

    return (
        <form className="confirmation-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="confirmation-form__group">
                <label className="confirmation-form__label">
                    1. ¿Asistirás? <span className="confirmation-form__required">*</span>
                </label>

                <div className="confirmation-form__radio-group">
                    <button
                        type="button"
                        className={`confirmation-form__radio-card ${attending === 'si' ? 'confirmation-form__radio-card--active-yes' : ''}`}
                        onClick={() => handleAttendingSelect('si')}
                    >
                        <div className="confirmation-form__radio-icon">
                            {attending === 'si' ? <CheckCircleIcon size={24} weight="fill" /> : <CheckIcon size={24} />}
                        </div>
                        <div className="confirmation-form__radio-text">
                            <span className="confirmation-form__radio-title">Sí</span>
                            <span className="confirmation-form__radio-subtitle">¡Ahí estaré!</span>
                        </div>
                    </button>

                    <button
                        type="button"
                        className={`confirmation-form__radio-card ${attending === 'no' ? 'confirmation-form__radio-card--active-no' : ''}`}
                        onClick={() => handleAttendingSelect('no')}
                    >
                        <div className="confirmation-form__radio-icon">
                            {attending === 'no' ? <XCircleIcon size={24} weight="fill" /> : <XCircleIcon size={24} weight="thin" />}
                        </div>
                        <div className="confirmation-form__radio-text">
                            <span className="confirmation-form__radio-title">No</span>
                            <span className="confirmation-form__radio-subtitle">No podré asistir</span>
                        </div>
                    </button>
                </div>

                <input
                    type="hidden"
                    {...register('attending', { required: 'Por favor indica si asistirás' })}
                />
                {errors.attending && (
                    <span className="confirmation-form__error">{errors.attending.message}</span>
                )}
            </div>

            <div className="confirmation-form__group">
                <label className="confirmation-form__label" htmlFor="fullName">
                    2. Ingresa tu nombre completo o el de tu familia <span className="confirmation-form__required">*</span>
                </label>
                <div className="confirmation-form__input-wrapper">
                    <UserIcon className="confirmation-form__input-icon" size={20} />
                    <input
                        id="fullName"
                        type="text"
                        className={`confirmation-form__input ${errors.fullName ? 'confirmation-form__input--error' : ''}`}
                        placeholder="Ej. Familia Pérez González / Juan Pérez"
                        {...register('fullName', {
                            required: 'Por favor ingresa tu nombre completo o el de tu familia',
                            minLength: {
                                value: 2,
                                message: 'El nombre debe tener al menos 2 caracteres',
                            },
                        })}
                    />
                </div>
                {errors.fullName && (
                    <span className="confirmation-form__error">{errors.fullName.message}</span>
                )}
            </div>

            <div className="confirmation-form__group">
                <label className="confirmation-form__label" htmlFor="phone">
                    3. Número de teléfono <span className="confirmation-form__required">*</span>
                </label>
                <div className="confirmation-form__input-wrapper">
                    <PhoneIcon className="confirmation-form__input-icon" size={20} />
                    <input
                        id="phone"
                        type="tel"
                        className={`confirmation-form__input ${errors.phone ? 'confirmation-form__input--error' : ''}`}
                        placeholder="Ej. 555 123 4567"
                        {...register('phone', {
                            required: 'Por favor ingresa tu número de teléfono',
                            minLength: {
                                value: 7,
                                message: 'El número debe tener al menos 7 dígitos',
                            },
                        })}
                    />
                </div>
                {errors.phone && (
                    <span className="confirmation-form__error">{errors.phone.message}</span>
                )}
            </div>

            <div className="confirmation-form__group">
                <label className="confirmation-form__label" htmlFor="adults">
                    4. Cantidad de adultos <span className="confirmation-form__required">*</span>
                </label>
                <div className="confirmation-form__counter-wrapper">
                    <div className="confirmation-form__counter-info">
                        <UsersIcon size={22} className="confirmation-form__counter-icon" />
                        <span className="confirmation-form__counter-title">Adultos</span>
                    </div>

                    <div className="confirmation-form__counter-controls">
                        <button
                            type="button"
                            className="confirmation-form__counter-btn"
                            onClick={handleDecrementAdults}
                            disabled={attending === 'no' || (adults ?? 0) <= 1}
                            aria-label="Disminuir adultos"
                        >
                            <MinusIcon size={16} weight="bold" />
                        </button>

                        <input
                            id="adults"
                            type="number"
                            className="confirmation-form__counter-input"
                            readOnly
                            {...register('adults', {
                                valueAsNumber: true,
                                min: {
                                    value: attending === 'no' ? 0 : 1,
                                    message: 'Mínimo 1 adulto',
                                },
                            })}
                        />

                        <button
                            type="button"
                            className="confirmation-form__counter-btn"
                            onClick={handleIncrementAdults}
                            disabled={attending === 'no'}
                            aria-label="Aumentar adultos"
                        >
                            <PlusIcon size={16} weight="bold" />
                        </button>
                    </div>
                </div>
                {errors.adults && (
                    <span className="confirmation-form__error">{errors.adults.message}</span>
                )}
            </div>

            <div className="confirmation-form__group">
                <label className="confirmation-form__label" htmlFor="children">
                    5. Cantidad de niños
                </label>
                <div className="confirmation-form__counter-wrapper">
                    <div className="confirmation-form__counter-info">
                        <BabyIcon size={22} className="confirmation-form__counter-icon" />
                        <span className="confirmation-form__counter-title">Niños</span>
                    </div>

                    <div className="confirmation-form__counter-controls">
                        <button
                            type="button"
                            className="confirmation-form__counter-btn"
                            onClick={handleDecrementChildren}
                            disabled={attending === 'no' || (childrenCount ?? 0) <= 0}
                            aria-label="Disminuir niños"
                        >
                            <MinusIcon size={16} weight="bold" />
                        </button>

                        <input
                            id="children"
                            type="number"
                            className="confirmation-form__counter-input"
                            readOnly
                            {...register('children', {
                                valueAsNumber: true,
                                min: {
                                    value: 0,
                                    message: 'La cantidad no puede ser negativa',
                                },
                            })}
                        />

                        <button
                            type="button"
                            className="confirmation-form__counter-btn"
                            onClick={handleIncrementChildren}
                            disabled={attending === 'no'}
                            aria-label="Aumentar niños"
                        >
                            <PlusIcon size={16} weight="bold" />
                        </button>
                    </div>
                </div>
                {errors.children && (
                    <span className="confirmation-form__error">{errors.children.message}</span>
                )}
            </div>

            <div className="confirmation-form__actions">
                <Button
                    type="submit"
                    variant="secondary"
                    radius="full"
                    fullWidth
                    isLoading={isSubmitting}
                    icon={<PaperPlaneRightIcon size={20} weight="bold" />}
                >
                    Enviar Confirmación
                </Button>
            </div>
        </form>
    )
}
