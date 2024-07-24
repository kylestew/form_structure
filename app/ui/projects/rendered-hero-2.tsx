'use client'
import { useEffect, useRef } from 'react'

import { blobWebGl } from '@/sketches/blob/main'

const RenderedHero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const stopRef = useRef<() => void | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const { stop } = blobWebGl(canvas)

        // Cleanup function to stop the animation when the component unmounts
        return () => {
            stop()
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
}

export default RenderedHero
