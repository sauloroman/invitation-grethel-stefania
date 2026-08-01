import axios from 'axios'

const rawBackendUrl = (import.meta.env.VITE_BACKEND_URL || '').trim()

const formattedUrl = rawBackendUrl
    ? (rawBackendUrl.startsWith('http://') || rawBackendUrl.startsWith('https://')
        ? rawBackendUrl
        : `https://${rawBackendUrl}`)
    : ''

export const instance = axios.create({
    baseURL: `${formattedUrl.replace(/\/$/, '')}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
})