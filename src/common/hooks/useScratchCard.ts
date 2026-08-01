import { useRef, useEffect, useState, useCallback } from 'react'
import { useConfetti } from './useConfetti'

export interface UseScratchCardOptions {
    brushSize?: number
    revealPercent?: number
    shape?: 'emerald' | 'plaque' | 'rounded' | 'rect' | 'heart' | 'ellipse'
    foilColor?: string
    confettiParticleCount?: number
    confettiColors?: string[]
    onReveal?: () => void
    onScratchStart?: () => void
    disabled?: boolean
}

export const useScratchCard = ({
    brushSize = 28,
    revealPercent = 45,
    shape = 'emerald',
    foilColor = 'white',
    confettiParticleCount = 500,
    confettiColors,
    onReveal,
    onScratchStart,
    disabled = false,
}: UseScratchCardOptions = {}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const [isRevealed, setIsRevealed] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)
    const lastPointRef = useRef<{ x: number; y: number } | null>(null)

    const { fireConfetti } = useConfetti()

    const initCanvas = useCallback(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return

        const rect = container.getBoundingClientRect()
        const width = rect.width || 300
        const height = rect.height || 260

        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.scale(dpr, dpr)
        ctx.clearRect(0, 0, width, height)

        ctx.save()

        if (shape === 'emerald') {
            const cut = Math.min(width, height) * 0.18
            ctx.beginPath()
            ctx.moveTo(cut, 0)
            ctx.lineTo(width - cut, 0)
            ctx.lineTo(width, cut)
            ctx.lineTo(width, height - cut)
            ctx.lineTo(width - cut, height)
            ctx.lineTo(cut, height)
            ctx.lineTo(0, height - cut)
            ctx.lineTo(0, cut)
            ctx.closePath()
            ctx.clip()
        } else if (shape === 'heart') {
            ctx.beginPath()
            ctx.moveTo(width * 0.5, height * 0.18)

            ctx.bezierCurveTo(
                width * 0.42, height * 0.06,
                width * 0.28, height * 0.03,
                width * 0.18, height * 0.08
            )
            ctx.bezierCurveTo(
                width * 0.04, height * 0.14,
                width * 0.02, height * 0.34,
                width * 0.10, height * 0.48
            )
            ctx.bezierCurveTo(
                width * 0.18, height * 0.64,
                width * 0.35, height * 0.82,
                width * 0.50, height * 0.96
            )
            ctx.bezierCurveTo(
                width * 0.65, height * 0.82,
                width * 0.82, height * 0.64,
                width * 0.90, height * 0.48
            )
            ctx.bezierCurveTo(
                width * 0.98, height * 0.34,
                width * 0.96, height * 0.14,
                width * 0.82, height * 0.08
            )
            ctx.bezierCurveTo(
                width * 0.72, height * 0.03,
                width * 0.58, height * 0.06,
                width * 0.50, height * 0.18
            )
            ctx.closePath()
            ctx.clip()
        } else if (shape === 'ellipse') {
            ctx.beginPath()
            ctx.ellipse(width / 2, height / 2, width / 2, height / 2, 0, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.clip()
        } else if (shape === 'rounded') {
            const radius = Math.min(width, height) * 0.15
            ctx.beginPath()
            ctx.roundRect(0, 0, width, height, radius)
            ctx.closePath()
            ctx.clip()
        }

        const isWhiteFoil = foilColor === 'white' || foilColor === 'white-glitter' || foilColor === '#fcfbf9'
        const isGoldFoil = foilColor === 'gold' || foilColor === 'gold-glitter' || foilColor === 'special' || foilColor === '#c5a059' || !foilColor

        if (isWhiteFoil) {
            const gradient = ctx.createRadialGradient(
                width * 0.45, height * 0.35, width * 0.05,
                width * 0.5, height * 0.5, width * 0.7
            )
            gradient.addColorStop(0, '#ffffff')
            gradient.addColorStop(0.35, '#f9f8f6')
            gradient.addColorStop(0.7, '#ece9e4')
            gradient.addColorStop(1, '#dfdcd6')
            ctx.fillStyle = gradient
            if (shape === 'rect') ctx.fillRect(0, 0, width, height)
            else ctx.fill()

            ctx.save()
            const sparkleCount = Math.floor((width * height) / 50)
            for (let i = 0; i < sparkleCount; i++) {
                const sx = Math.random() * width
                const sy = Math.random() * height
                const size = Math.random() * 1.8 + 0.4
                const opacity = Math.random() * 0.8 + 0.2
                const isSilver = Math.random() > 0.5
                ctx.fillStyle = isSilver
                    ? `rgba(215, 222, 232, ${opacity})`
                    : `rgba(255, 255, 255, ${opacity * 1.3})`
                ctx.beginPath()
                ctx.arc(sx, sy, size, 0, Math.PI * 2)
                ctx.fill()
            }

            const starCount = 10
            for (let s = 0; s < starCount; s++) {
                const starX = (0.2 + Math.random() * 0.6) * width
                const starY = (0.2 + Math.random() * 0.6) * height
                const starLen = Math.random() * 4 + 3
                ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`
                ctx.lineWidth = 1.2
                ctx.beginPath()
                ctx.moveTo(starX - starLen, starY)
                ctx.lineTo(starX + starLen, starY)
                ctx.moveTo(starX, starY - starLen)
                ctx.lineTo(starX, starY + starLen)
                ctx.stroke()
            }
            ctx.restore()
        } else if (isGoldFoil) {
            const gradient = ctx.createRadialGradient(
                width * 0.45, height * 0.35, width * 0.05,
                width * 0.5, height * 0.5, width * 0.75
            )
            gradient.addColorStop(0, '#f5efe3')
            gradient.addColorStop(0.25, '#dcd0b9')
            gradient.addColorStop(0.55, '#c2b396')
            gradient.addColorStop(0.8, '#a39478')
            gradient.addColorStop(1, '#695f4c')
            ctx.fillStyle = gradient
            if (shape === 'rect') ctx.fillRect(0, 0, width, height)
            else ctx.fill()

            ctx.save()
            const sparkleCount = Math.floor((width * height) / 45)
            for (let i = 0; i < sparkleCount; i++) {
                const sx = Math.random() * width
                const sy = Math.random() * height
                const size = Math.random() * 1.8 + 0.4
                const opacity = Math.random() * 0.8 + 0.2
                const type = Math.random()
                if (type < 0.4) {
                    ctx.fillStyle = `rgba(245, 239, 227, ${opacity})`
                } else if (type < 0.7) {
                    ctx.fillStyle = `rgba(194, 179, 150, ${opacity * 1.2})`
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 1.3})`
                }
                ctx.beginPath()
                ctx.arc(sx, sy, size, 0, Math.PI * 2)
                ctx.fill()
            }

            const starCount = 12
            for (let s = 0; s < starCount; s++) {
                const starX = (0.15 + Math.random() * 0.7) * width
                const starY = (0.15 + Math.random() * 0.7) * height
                const starLen = Math.random() * 4 + 3
                const isGold = Math.random() > 0.5
                ctx.strokeStyle = isGold
                    ? `rgba(255, 215, 0, ${Math.random() * 0.7 + 0.3})`
                    : `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
                ctx.lineWidth = 1.2
                ctx.beginPath()
                ctx.moveTo(starX - starLen, starY)
                ctx.lineTo(starX + starLen, starY)
                ctx.moveTo(starX, starY - starLen)
                ctx.lineTo(starX, starY + starLen)
                ctx.stroke()
            }
            ctx.restore()
        } else {
            ctx.fillStyle = foilColor
            if (shape === 'rect') ctx.fillRect(0, 0, width, height)
            else ctx.fill()
        }

        ctx.restore()
    }, [foilColor, shape])

    useEffect(() => {
        initCanvas()

        const handleResize = () => {
            if (!isRevealed) {
                initCanvas()
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [initCanvas, isRevealed])

    const getPos = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        const canvas = canvasRef.current
        if (!canvas) return { x: 0, y: 0 }

        const rect = canvas.getBoundingClientRect()
        let clientX = 0
        let clientY = 0

        if ('touches' in e && e.touches.length > 0) {
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        } else if ('clientX' in e) {
            clientX = e.clientX
            clientY = e.clientY
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top,
        }
    }

    const scratchLine = (from: { x: number; y: number }, to: { x: number; y: number }) => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.globalCompositeOperation = 'destination-out'
        ctx.lineWidth = brushSize * 2
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
    }

    const checkPercentage = useCallback(() => {
        if (isRevealed) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const dpr = window.devicePixelRatio || 1
        const width = canvas.width
        const height = canvas.height

        const sampleStep = 8 * dpr
        const imageData = ctx.getImageData(0, 0, width, height)
        const pixels = imageData.data

        let transparentCount = 0
        let totalSamples = 0

        for (let y = 0; y < height; y += sampleStep) {
            for (let x = 0; x < width; x += sampleStep) {
                const index = (y * width + x) * 4
                const alpha = pixels[index + 3]
                if (alpha < 128) {
                    transparentCount++
                }
                totalSamples++
            }
        }

        const currentPercent = (transparentCount / totalSamples) * 100

        if (currentPercent >= revealPercent) {
            setIsRevealed(true)
            fireConfetti({
                particleCount: confettiParticleCount,
                colors: confettiColors ?? ['#ebd07f', '#d4af37', '#c5a059', '#ffffff', '#e6dfd3'],
                preset: 'side-cannons',
            })
            if (onReveal) {
                onReveal()
            }
        }
    }, [isRevealed, revealPercent, confettiParticleCount, confettiColors, onReveal, fireConfetti])

    const startScratch = (e: React.MouseEvent | React.TouchEvent) => {
        if (disabled || isRevealed) return
        if (!hasStarted && onScratchStart) {
            onScratchStart()
        }
        setIsDrawing(true)
        setHasStarted(true)
        const pos = getPos(e)
        lastPointRef.current = pos
        scratchLine(pos, pos)
    }

    const moveScratch = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawing || disabled || isRevealed) return
        const currentPos = getPos(e)
        if (lastPointRef.current) {
            scratchLine(lastPointRef.current, currentPos)
        }
        lastPointRef.current = currentPos
    }

    const stopScratch = () => {
        if (!isDrawing) return
        setIsDrawing(false)
        lastPointRef.current = null
        checkPercentage()
    }

    return {
        containerRef,
        canvasRef,
        isRevealed,
        hasStarted,
        startScratch,
        moveScratch,
        stopScratch,
    }
}
