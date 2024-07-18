'use client'
import { useEffect, useRef } from 'react'
import { prepareProjectContainer } from '@/app/lib/proj-tools'

// import { meta, prepare, render } from '@/sketches/urban-sprawl'
import { meta, prepare, render } from '@/sketches/crop_circles'

export default function Page() {
    const canvasRef = useRef(null)

    useEffect(() => {
        prepareProjectContainer(meta, canvasRef.current, prepare, render)
    }, [])

    return <canvas ref={canvasRef}></canvas>
}
