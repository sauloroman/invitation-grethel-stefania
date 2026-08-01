export interface ConfirmationFormData {
    firstName: string
    lastName: string
    phone: string
    willAttend: boolean
    adultsQuantity: number
}

export interface ConfirmationRequest extends ConfirmationFormData {
    event: string
    kidsQuantity: number
}

export interface ConfirmationResponse {
    ok?: boolean
    message?: string
    data?: unknown
}
