import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const MODAL_NAMES = {
    none: 'none',
    RSVP: 'RSVP',
    gallery: 'gallery',
    placePhotos: 'placePhotos',
} as const

export type ModalName = typeof MODAL_NAMES[keyof typeof MODAL_NAMES];

interface ModalState {
    isOpen: boolean
    modalTitle: string
    modalName: ModalName
    modalData?: unknown
}

const initialState: ModalState = {
    isOpen: false,
    modalTitle: '',
    modalName: MODAL_NAMES.none,
    modalData: null,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }: PayloadAction<{ modalTitle: string; modalName: ModalName; modalData?: unknown }>) => {
            state.isOpen = true
            state.modalTitle = payload.modalTitle
            state.modalName = payload.modalName
            state.modalData = payload.modalData ?? null
        },

        closeModal: (state) => {
            state.isOpen = false
            state.modalTitle = ''
            state.modalName = MODAL_NAMES.none
            state.modalData = null
        },
    }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer