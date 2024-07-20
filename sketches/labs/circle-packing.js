import { CircleLinePacking } from './libs/circle-line-packing.js'

window.meta = {
    title: 'Circle Packing',
    description: '',
    refLink: '',
}

env('sketch-2d', { width: 900, height: 900, range: [-1, 1] })
const palette = getPalette()

// place any initial obstacles
const circle1 = new Circle(randomPoint(), 0.5)
const circle2 = new Circle(randomPoint(), 0.5)
const line1 = Line.withCenter([0.0, 0.0], random(-Math.PI, Math.PI), 3.0)
const line2 = Line.withCenter([0.0, 0.0], random(-Math.PI, Math.PI), 3.0)
const line3 = Line.withCenter([0.0, 0.0], random(-Math.PI, Math.PI), 3.0)
const line4 = Line.withCenter([0.0, 0.0], random(-Math.PI, Math.PI), 3.0)
const obstacles = [circle2, circle1, line1, line2, line3, line4]

// create packer
const packer = new CircleLinePacking(obstacles)

// create a random point picking function
const nextRandomPt = () => {
    // UNIFORM
    return randomPoint([-1, -1], [1, 1])
}

// pack a bunch of stuff
// caller is in charge of picking the shape type, position, min and step size
const minSize = 0.005
const maxSize = 1.0
const stepSize = 0.005
const tries = 1000
for (let i = 0; i < tries; i++) {
    const shapeFn = weightedRandom(
        [
            () => {
                // CIRCLE
                return new Circle(nextRandomPt(), minSize)
            },
            () => {
                // LINE
                return Line.withCenter(nextRandomPt(), random(-Math.PI, Math.PI), minSize)
            },
        ],
        [6.0, 2.0]
    )

    packer.attemptPlacement(shapeFn(), stepSize, maxSize)
}

clear(palette.background)

draw(
    packer.packed.filter((obj) => obj instanceof Circle),
    { fill: palette.primary, weight: 0.01 }
)
draw(
    packer.packed.filter((obj) => obj instanceof Line),
    { stroke: palette.secondary, weight: 0.005 }
)
draw(obstacles, { stroke: palette.accent + '99', weight: 0.005 })
