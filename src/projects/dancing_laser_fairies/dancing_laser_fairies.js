import { createCanvas } from 'root/canvas'
import { Circle, Line, pointAt } from 'root/geo'
import { random, randomInt, randomOffset, gaussian, pareto, perlin2 } from 'root/random'
import { sand } from 'root/mark'

import { randomPalette } from '../_lib/palettes'

let cmd
export function prepare(canvasInstance) {
    const canvasScale = 2
    cmd = createCanvas(1200 * canvasScale, 1600 * canvasScale, canvasInstance, [-1.0, 1.0])
}

class CircleWalker {
    constructor(circ) {
        this.t0 = random()
        this.t1 = this.t0 + gaussian(0.5, 0.02)
        // this.t1 = this.t0 + 0.5
        this.circ = circ

        this.previousTimeStep = Date.now()
    }

    walk(time, noiseScale, noiseAmp, zOffset, direction) {
        const timefrac = time * 0.001
        const timestep = time - this.previousTimeStep
        this.previousTimeStep = time

        // wander t values
        this.t0 += timestep * noiseAmp * 0.005 * direction
        this.t0 += noiseAmp * perlin2(noiseScale * this.t0, timefrac + zOffset)
        this.t1 += timestep * noiseAmp * 0.005 * direction
        this.t1 += noiseAmp * perlin2(noiseScale * this.t1, timefrac + zOffset + 1.234)

        // define a line at the current t0 and t1 values
        const a = pointAt(this.circ, this.t0)
        const b = pointAt(this.circ, this.t1)
        return new Line(a, b)
    }
}

let walker1, walker2, walker3
let background, primary, secondary, accent
let frameCount = 0
export function randomize() {
    // TODO: reset conditions here for a new run of the algorithm
    const palette = randomPalette()
    background = palette.background
    primary = palette.primary
    secondary = palette.secondary
    accent = palette.accent

    const circ1 = new Circle(randomOffset(0.05, 0.02), 1.15)
    const circ2 = new Circle(randomOffset(0.05, 0.02), 1.15)
    const circ3 = new Circle(randomOffset(0.05, 0.02), 1.15)

    walker1 = new CircleWalker(circ1)
    walker2 = new CircleWalker(circ2)
    walker3 = new CircleWalker(circ3)

    frameCount = 0

    cmd.clear(background)
}

const zOffset = Date.now() / 100
export function render(time) {
    // every so often, skip ahead a ton
    let line1, line2, line3
    let iterations = Math.random() < 0.005 ? randomInt(40, 100) : 1
    for (let i = 0; i < iterations; i++) {
        line1 = walker1.walk(time, 0.8, 0.0008, zOffset + 0.123, 1)
    }
    iterations = Math.random() < 0.005 ? randomInt(40, 100) : 1
    for (let i = 0; i < iterations; i++) {
        line2 = walker2.walk(time, 2.0, 0.0006, zOffset + 123.42, -1)
    }
    iterations = Math.random() < 0.005 ? randomInt(40, 100) : 1
    for (let i = 0; i < iterations; i++) {
        line3 = walker3.walk(time, 1.5, 0.0012, zOffset + 6.1, 1)
    }

    const grainCount = 2048 * 8
    const lineEndOffset = pareto(0.001, 0.25)

    const grains1 = sand(line1, 0.005, 3.7, 0.02, 0.002, 0.007, 48)
    const grains2 = sand(line2, 0.005, 3.7, 0.02, 0.002, 0.007, 48)
    const grains3 = sand(line3, 0.005, 3.7, 0.02, 0.002, 0.007, 48)

    cmd.draw(grains1, { fill: primary + '16', weight: 0.0006 })
    cmd.draw(grains2, { fill: secondary + '16', weight: 0.0006 })
    cmd.draw(grains3, { fill: accent + '16', weight: 0.0006 })
}
