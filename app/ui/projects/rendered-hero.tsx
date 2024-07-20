'use client'
import { useEffect, useRef } from 'react'

import { createCanvas } from 'root/canvas'
import { Circle } from 'root/geo'
import { linspace, range } from 'root/array'
import { random, gaussian } from 'root/random'

import { randomPalette } from '@/sketches/labs/palettes'

const RenderedHero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const parent = canvas.parentElement
        if (!parent) return

        const cmd = createCanvas(parent.clientWidth, parent.clientHeight, canvas, [-1, 1])

        const { background, primary, secondary, accent, dark, neutral } = randomPalette()
        cmd.clear(background)

        // console.log(cmd.range)
        const canvasSpan = 8.2

        // for evenly spaced rad stops
        const ringCount = 512
        const dotDensity = 64
        const dots = linspace(0.0, 1.0, ringCount).map((t) => {
            // TODO: use a different distribution for rad
            const rad = t * canvasSpan * 0.5
            // const rad = easeInCubic(t) * canvasSpan * 0.5

            // this defines number of points on ring based on circumference
            const circumference = 2.0 * Math.PI * rad
            const numPoints = Math.round(circumference * dotDensity)
            const thetaSpacing = (2.0 * Math.PI) / numPoints

            // different patterns achieved by offsetting the start of the ring (so they don't all start at theta = 0)
            // const startOffset = t // regular
            const startOffset = gaussian(0, 0.333)

            // const startOffset = pareto(0.01, 0.1)
            return range(startOffset, startOffset + 2.0 * Math.PI, thetaSpacing).map((theta) => {
                const x = rad * Math.cos(theta)
                const y = rad * Math.sin(theta)
                return new Circle([x, y], random(0.0035, 0.006))
            })
        })
        cmd.draw(dots, { fill: dark })

        // TODO: this is previous animation stuff
        // let animationFrameId;
        // const animate = function (timestamp) {
        //   mesh.material.uniforms.time.value = 0.5 * (timestamp / 1000);

        //   renderer.render(scene, camera);
        //   animationFrameId = requestAnimationFrame(animate);
        // };

        // const handleResize = (info) => {
        //   renderer.setPixelRatio(window.devicePixelRatio);
        //   renderer.setSize(container.clientWidth, container.clientHeight);
        //   camera.aspect = container.clientWidth / container.clientHeight;
        //   camera.updateProjectionMatrix();
        // };
        // window.addEventListener("resize", handleResize);
        // handleResize();

        // animate();

        // return () => {
        //   window.removeEventListener("resize", handleResize);
        //   cancelAnimationFrame(animationFrameId); // Stop the animation
        //   renderer.dispose(); // Dispose of the renderer

        //   if (mesh.geometry) mesh.geometry.dispose(); // Dispose of the geometry
        //   if (mesh.material) mesh.material.dispose(); // Dispose of the material

        //   container.removeChild(canvas); // Remove the canvas from the DOM
        // };
    }, [])

    return <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
}

export default RenderedHero
