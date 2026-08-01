import type { ConfirmationFormData, ConfirmationRequest } from '@/common/types/confirmation.types'
import type { AppDispatch } from '../store'
import { setIsLoading } from './confirmation.slice'
import { instance } from '@/common/config/http.plugin'

export const startRegisteringConfirmation = (eventId: string, data: ConfirmationFormData) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setIsLoading(true))
        try {
            const payload: ConfirmationRequest = {
                ...data,
                kidsQuantity: data.willAttend ? (data.kidsQuantity || 0) : 0,
                adultsQuantity: data.willAttend ? (data.adultsQuantity || 1) : 0,
                event: eventId,
            }
            const { data: response } = await instance.post('/open-confirmations', payload)
            return response
        } catch (error) {
            console.error('Error al registrar la confirmación:', error)
            throw error
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}
