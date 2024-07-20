'use client'
import { useEffect, useRef } from 'react'
import { prepareProjectContainer } from '@/app/lib/proj-tools'

import { prepare, randomize, render } from '@/sketches/on_a_line'

export default function Page() {
    const canvasRef = useRef(null)

    useEffect(() => {
        prepareProjectContainer(
            {
                title: 'On a Line',
                description:
                    "Inspired by a recent visit to the Tate Modern, where I encountered the vibrant works of Robert Delaunay, I developed this art algorithm. Delaunay's innovative use of color and geometric forms influenced the algorithm's design, celebrating the harmony and rhythm of abstract shapes.",
                animated: false,
            },
            canvasRef.current,
            prepare,
            render,
            render
        )
    }, [])

    return <canvas ref={canvasRef}></canvas>
}
