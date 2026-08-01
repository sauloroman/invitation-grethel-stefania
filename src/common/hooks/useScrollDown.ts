import { useCallback } from 'react'

/**
 * Custom hook to scroll down to the next section or element in the DOM.
 * @param currentElementId Optional ID of the reference element (defaults to 'hero')
 */
export const useScrollDown = (currentElementId: string = 'hero') => {
    const handleScrollDown = useCallback(() => {
        const currentElement = document.getElementById(currentElementId)
        const nextSection = currentElement?.nextElementSibling

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
    }, [currentElementId])

    return {
        handleScrollDown,
        scrollToNext: handleScrollDown,
    }
}
