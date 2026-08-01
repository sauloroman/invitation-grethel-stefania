import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useConfetti, useToast } from '@/common/hooks'

export interface ConfirmationFormData {
    attending: 'si' | 'no'
    fullName: string
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

    const onSubmit = (data: ConfirmationFormData) => {
        setSubmittedData(data)
        setIsSubmitted(true)

        if (data.attending === 'si') {
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
    }

    const handleResetForm = () => {
        setIsSubmitted(false)
        setSubmittedData(null)
        reset({
            attending: 'si',
            fullName: '',
            adults: 1,
            children: 0,
        })
    }

    return {
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
    }
}
