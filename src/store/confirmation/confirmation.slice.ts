import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface ConfirmationState {
    isLoading: boolean
}

const initialState: ConfirmationState = {
    isLoading: false,
}

export const confirmationSlice = createSlice({
    name: 'confirmation',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    },
})

export const { setIsLoading } = confirmationSlice.actions
export default confirmationSlice.reducer
