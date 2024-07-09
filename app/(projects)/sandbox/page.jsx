'use client' // This directive ensures that this file is run on the client side

// import styles from "../../styles/page.module.css";
import { useEffect, useRef } from 'react'

import { Circle } from 'root/geo'

const circ = new Circle([0, 0], 0.5, { fill: 'red' })
console.log(circ)

function Project() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        // Set canvas size
        canvas.width = 500
        canvas.height = 500

        // Clear the canvas with white color
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Draw a circle
        context.beginPath()
        context.arc(250, 250, 100, 0, 2 * Math.PI)
        context.fillStyle = 'blue'
        context.fill()
        context.stroke()
    }, [])

    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Project
