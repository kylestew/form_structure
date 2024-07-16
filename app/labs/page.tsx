'use client'
import { useEffect, useRef } from 'react'
import { createCanvas } from 'root/canvas'
import { randomPalette } from '@/sketches/labs/palettes'

import { examples } from '@/sketches/labs'

export default function Page() {
    const canvasRefs = useRef([])

    useEffect(() => {
        const palette = randomPalette()

        canvasRefs.current.forEach((canvas, index) => {
            const cmd = createCanvas(640, 640, canvas)
            cmd.setRange(-1.0, 1.0)

            const fn = examples[index]
            fn(cmd, palette)
        })
    }, [])

    return (
        <div className="grid grid-cols-3 gap-4">
            {examples.map((example, index) => (
                <div key={example.name}>
                    <canvas
                        ref={(el) => (canvasRefs.current[index] = el)}
                        id={`canvas-${example.name}`}
                        width="640"
                        height="640"
                    ></canvas>
                    <div className="title mt-2 text-center">{example.title}</div>
                </div>
            ))}
        </div>
    )
}
