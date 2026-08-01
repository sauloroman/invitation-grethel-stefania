import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useConfetti, useToast, useConfirmation } from '@/common/hooks'

export interface ConfirmationFormData {
    attending: 'si' | 'no'
    fullName: string
    phone: string
    adults: number
    children: number
}

interface UseConfirmationFormOptions {
    onSuccessSubmit?: (data: ConfirmationFormData) => void
}

export const useConfirmationForm = (options: UseConfirmationFormOptions = {}) => {
    const { onSuccessSubmit } = options
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submittedData, setSubmittedData] = useState<ConfirmationFormData | null>(null)

    const { fireConfetti } = useConfetti()
    const { showSuccess, showInfo } = useToast()
    const { registerConfirmation, isLoading: isApiLoading } = useConfirmation()

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ConfirmationFormData>({
        defaultValues: {
            attending: 'si',
            fullName: '',
            phone: '',
            adults: 1,
            children: 0,
        },
        mode: 'onTouched',
    })

    const attending = useWatch({ control, name: 'attending' })
    const adults = useWatch({ control, name: 'adults' })
    const childrenCount = useWatch({ control, name: 'children' })

    const handleAttendingSelect = (value: 'si' | 'no') => {
        setValue('attending', value, { shouldValidate: true })
        if (value === 'no') {
            setValue('adults', 0)
            setValue('children', 0)
        } else if ((adults ?? 0) === 0) {
            setValue('adults', 1)
        }
    }

    const handleIncrementAdults = () => {
        setValue('adults', (adults ?? 0) + 1, { shouldValidate: true })
    }

    const handleDecrementAdults = () => {
        const min = attending === 'no' ? 0 : 1
        if ((adults ?? 0) > min) {
            setValue('adults', (adults ?? 0) - 1, { shouldValidate: true })
        }
    }

    const handleIncrementChildren = () => {
        setValue('children', (childrenCount ?? 0) + 1, { shouldValidate: true })
    }

    const handleDecrementChildren = () => {
        if ((childrenCount ?? 0) > 0) {
            setValue('children', (childrenCount ?? 0) - 1, { shouldValidate: true })
        }
    }

    const onSubmit = async (data: ConfirmationFormData) => {
        const willAttend = data.attending === 'si'
        const nameParts = data.fullName.trim().split(' ')
        const firstName = nameParts[0] || 'Invitado'
        const lastName = nameParts.slice(1).join(' ') || ' '

        try {
            await registerConfirmation({
                firstName,
                lastName,
                phone: data.phone?.trim() || '0000000000',
                willAttend,
                adultsQuantity: willAttend ? (data.adults || 1) : 0,
            })

            setSubmittedData(data)
            setIsSubmitted(true)

            if (willAttend) {
                fireConfetti({
                    preset: 'side-cannons',
                    particleCount: 120,
                })
                showSuccess('¡Muchas gracias por confirmar tu asistencia!')
            } else {
                showInfo('Gracias por avisarnos. Lamentamos que no puedas acompañarnos.')
            }

            if (onSuccessSubmit) {
                onSuccessSubmit(data)
            }
        } catch (error) {
            console.error('Error al registrar la confirmación:', error)
            showInfo('Hubo un inconveniente al registrar la confirmación. Por favor inténtalo de nuevo.')
        }
    }

    const handleResetForm = () => {
        setIsSubmitted(false)
        setSubmittedData(null)
        reset({
            attending: 'si',
            fullName: '',
            phone: '',
            adults: 1,
            children: 0,
        })
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting: isSubmitting || isApiLoading,
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
    }
}
