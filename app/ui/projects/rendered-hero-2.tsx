'use client'
import { useEffect, useRef } from 'react'

import { blobWebGl } from '@/sketches/blob/main'

const RenderedHero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        blobWebGl(canvas)

        // const parent = canvas.parentElement
        // if (!parent) return
    }, [])

    return <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
}

export default RenderedHero
