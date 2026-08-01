import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/store/store'
import type { ConfirmationFormData } from '@/common/types/confirmation.types'
import { startRegisteringConfirmation } from '@/store/confirmation/confirmation.thunk'
import { getEnvVariables } from '@/common/helpers/get-env-variables'

const { VITE_EVENT_ID } = getEnvVariables()

export const useConfirmation = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { isLoading } = useSelector((state: RootState) => state.confirmation)

    const registerConfirmation = async (data: ConfirmationFormData) => {
        return await dispatch(startRegisteringConfirmation(VITE_EVENT_ID || '6a6920ef0cd74972326d174e', data))
    }

    return {
        isLoading,
        registerConfirmation,
    }
}
