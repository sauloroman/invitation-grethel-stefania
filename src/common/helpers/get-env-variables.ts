export const getEnvVariables = () => {
    return {
        VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
        VITE_EVENT_ID: import.meta.env.VITE_EVENT_ID,
    }
}
