import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "@/store/store"
import { closeModal, openModal, type ModalName } from "@/store/ui/modal.slice"

export const useModal = () => {
    const dispatch: AppDispatch = useDispatch()
    const { isOpen, modalTitle, modalName, modalData } = useSelector((state: RootState) => state.modal)

    const onOpenModal = (modalName: ModalName, modalTitle: string, modalData?: unknown) => {
        dispatch(openModal({ modalName, modalTitle, modalData }))
    }

    const onCloseModal = () => {
        dispatch(closeModal())
    }

    return {
        isOpen,
        modalTitle,
        modalName,
        modalData,

        onOpenModal,
        onCloseModal
    }
}