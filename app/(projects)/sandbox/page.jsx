'use client'

import { useEffect, useRef } from 'react'

import { createCanvas } from 'root/canvas'
import { Line, Rectangle, Circle } from 'root/geo'
import { rotate } from 'root/geo'
import { full, zip, randomRemove } from 'root/array'
import { gaussian, pareto } from 'root/random'

function Project2() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const { ctx, setRange, clear, draw } = createCanvas(500, 500, canvasRef.current)
        const rangeInfo = setRange(-1.0, 1.0)

        clear('#ffffff')
        const gaussian2D = (count, center, stdDev) => {
            return full(count, () => [gaussian(center[0], stdDev[0]), gaussian(center[1], stdDev[1])])
        }
        const pts = gaussian2D(600, [0, 0], [0.5, 0.5])
        draw(pts)
    }, [])

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Project2
