'use client'
import { useEffect, useRef } from 'react'
import { prepareProjectContainer } from '@/app/lib/proj-tools'

import { prepare, randomize, render } from '@/sketches/dancing_laser_fairies'

export default function Page() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const cleanup = prepareProjectContainer(
            {
                title: 'Dancing Laser Fairies',
                description: '',
                animated: true,
            },
            canvasRef.current,
            prepare,
            randomize,
            render
        )

        return () => {
            cleanup()
        }
    }, [])

    return <canvas ref={canvasRef}></canvas>
}
