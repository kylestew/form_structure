export const meta = {
    title: 'On a Line',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar eros sem, nec feugiatuu purus rutrum at. Aenean sed diam non massa fermentum consectetur.',
    animated: false,
}

import { createGLCanvas, createOffscreenCanvas } from 'root/canvas'
import { Line, Circle, asPoints, asPath } from 'root/geo'
import { weightedRandom, pickRandom, gaussian, random } from 'root/random'
import { randomRemove, shuffle } from 'root/array'
import { handDrawnCircle, linesFill } from 'root/mark'

import { randomPalette } from './labs/palettes'

import vertShaderSource from './shaders/basic.vert?raw'
import fragShaderSource from './shaders/crop_circles.frag?raw'

let gl, shader
let canvasA, canvasB

export function prepare(canvasRef) {
    const canvasScale = 2.0
    const width = 1200 * canvasScale
    const height = 1600 * canvasScale

    gl = createGLCanvas(width, height, canvasRef)
    shader = gl.loadShader(vertShaderSource, fragShaderSource)

    // create two offscreen canvases to draw sides into
    canvasA = createOffscreenCanvas(width, height, [-1, 1])
    canvasB = createOffscreenCanvas(width, height, [-1, 1])
}

function createCircleGeneration(line, lineLength, divisions, unitCircumference) {
    const pointDistance = lineLength / (divisions - 1)
    const rad = pointDistance * 0.5 * unitCircumference
    return asPoints(line, divisions).map((pt) => {
        return new Circle(pt, rad)
    })
}

function* createColorDistributor(colors) {
    const startingColor = shuffle(colors)
    let remainingColors = startingColor.slice()
    while (true) {
        if (remainingColors.length === 0) {
            remainingColors = startingColor.slice()
        }
        if (Math.random() < 0.333) {
            // randomly reset
            remainingColors = startingColor.slice()
        }
        const colorPicked = pickRandom(remainingColors)
        remainingColors = remainingColors.filter((color) => color !== colorPicked) // Remove the picked color
        yield colorPicked
    }
}

export function render(timestamp) {
    // (0) Setup initial CONDITIONS
    // define color palette
    const { background, primary, secondary, accent, dark, neutral } = randomPalette()
    const primaryColors = [primary, secondary, accent]
    const secondaryColors = [dark, neutral, dark, neutral, background]
    // clear canvas
    canvasA.clear(background)
    canvasB.clear(background)
    // decide if inverted colors
    const inverted = Math.random() < 0.1
    // random (but shared) zOffset in noise 3D function
    const zOffset = Math.random()

    function drawCircleGeneration(cmd, circles, colors, removePercentage) {
        const colorGenerator = createColorDistributor(colors)
        randomRemove(shuffle(circles), removePercentage).forEach((circle) => {
            const circleDapple = random(0.02, 0.04)
            const drawnCircle = handDrawnCircle(circle.pos, circle.r, circleDapple, 1.4, 8, zOffset)

            if (Math.random() > 0.2) {
                // usually we just fill
                cmd.draw(drawnCircle, { fill: colorGenerator.next().value })
            } else {
                if (Math.random() > 0.333) {
                    // STROKE IT
                    // need to shrink circle to keep same radius with stroke applied
                    const strokeWidth = 0.125
                    const weight = circle.r * strokeWidth
                    const circ = new Circle(circle.pos, circle.r * (1.0 - strokeWidth / 2.0))
                    cmd.draw(handDrawnCircle(circ.pos, circ.r, circleDapple, 1.4, 8, zOffset), {
                        fill: pickRandom(colors),
                        stroke: pickRandom([neutral, dark]),
                        weight: weight,
                    })
                } else {
                    // LINE FILL
                    cmd.ctx.save()

                    const colorA = colorGenerator.next().value
                    const colorB = colorGenerator.next().value

                    cmd.ctx.clip(asPath(drawnCircle))
                    cmd.draw(linesFill(circle, 16, pickRandom([splitAngle, 0, Math.PI / 2.0]), [colorA, colorB]))

                    cmd.ctx.restore()
                }
            }
        })
    }

    // (1) Create a diagonal line
    // random forward or reverse angle, randomized length
    const lineLength = weightedRandom([1.4, 1.6, 1.8], [2, 6, 1])
    const splitAngle = pickRandom([(2.0 * Math.PI) / 3 + gaussian(0, 0.15), Math.PI / 3 + gaussian(0, 0.15)])
    const splitCenter = [gaussian(0, 0.08), gaussian(0, 0.08)]
    const diagonal = Line.withCenter(splitCenter, splitAngle, lineLength)

    // (2) Divide diagonal into divisions per generation
    const divisions = pickRandom([
        [2, 3, 2],
        [3, 5, 3],
    ])

    // (3) Define circles for each generation using divisions
    const circles = divisions.map((d, idx) => {
        // define circle size per generation
        let unitCircumference
        if (idx == 0) {
            unitCircumference = pickRandom([1.0, 1.5])
        } else if (idx == 1) {
            unitCircumference = pickRandom([1.0, 1.5, 2.0])
        } else {
            unitCircumference = pickRandom([0.25, 0.5])
        }
        return createCircleGeneration(diagonal, lineLength, d, unitCircumference)
    })

    // (4) Draw generation 0: shuffling and removing some
    drawCircleGeneration(canvasA, circles[0], primaryColors, 0.33)
    drawCircleGeneration(canvasB, circles[0], primaryColors, 0.33)

    // (5) Draw generation 1: setting a blend mode, shuffling, and removing some
    const blendMode = weightedRandom(
        ['source-over', 'multiply', 'screen', 'overlay', 'darken', 'lighten'],
        [10, 1, 1, 1, 1, 1]
    )
    // console.log('blend mode', blendMode)
    canvasA.globalCompositeOperation = blendMode
    canvasB.globalCompositeOperation = blendMode
    drawCircleGeneration(canvasA, circles[1], primaryColors, 0.36, 0.2)
    drawCircleGeneration(canvasB, circles[1], primaryColors, 0.36, 0.2)

    // (6) Draw generation 2: clearing blend mode, shuffling, and removing many
    canvasA.globalCompositeOperation = 'source-over'
    canvasB.globalCompositeOperation = 'source-over'
    drawCircleGeneration(canvasA, circles[2], secondaryColors, 0, 0.0)
    drawCircleGeneration(canvasB, circles[2], secondaryColors, 0, 0.0)

    // ================== DISPLAY ====================================
    gl.clear([0, 0, 0, 1])
    gl.useShader(shader)

    gl.useTexture(gl.TEXTURE0, 'tex0', canvasA.canvas)
    gl.useTexture(gl.TEXTURE1, 'tex1', canvasB.canvas)

    // NOTE: this is hardcoded for the given canvas ratio
    const canvasTransform = new Float32Array([2.0, 0.0, 0.0, 0.0, 2.0 * 1.333, 0.0, -1.0, -1.333, 1.0])
    gl.setUniform('canvasTransform', canvasTransform)
    gl.setUniform('center', splitCenter)
    gl.setUniform('angle', splitAngle)
    gl.setUniform('smoothness', 0.002)
    gl.setUniform('invert', inverted)

    gl.drawScreen()
}
