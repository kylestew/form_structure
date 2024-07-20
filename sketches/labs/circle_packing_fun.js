import { Circle, Line } from '../tools/geo'
import { random, pickRandom, weightedRandom, gaussian } from '../tools/random'
import { CircleLinePacking } from '../tools/algos/circle-line-packing'
import { draw } from '../tools/draw'
import { animate } from '../tools/canvas-utils/animate'

export function circlePackingFun(ctx, palette) {
    let { background, primary, secondary, accent, dark, neutral } = palette
    const colors = [primary, secondary, accent]

    // place any initial obstacles
    const gaussianRandomPt = () => {
        return [gaussian(0.0, 0.2), gaussian(0.0, 0.12)]
    }
    const centerCircle = new Circle(gaussianRandomPt(), random(0.3, 0.6))
    const line1 = Line.withCenter(centerCircle.pos, random(-Math.PI, Math.PI), 3.0)
    const line2 = Line.withCenter(centerCircle.pos, random(-Math.PI, Math.PI), 3.0)
    const line3 = Line.withCenter(centerCircle.pos, random(-Math.PI, Math.PI), 3.0)
    const line4 = Line.withCenter(centerCircle.pos, random(-Math.PI, Math.PI), 3.0)
    // const obstacles = [centerCircle, line1, line2, line3, line4]
    const obstacles = [centerCircle, line1, line2]

    // create packer
    const packer = new CircleLinePacking(obstacles)

    const nextRandomPt = () => {
        // return randomPoint([-1, -1], [1, 1])
        return [gaussian(0.0, 0.2), gaussian(0.0, 0.32)]
    }

    // pack a bunch of stuff
    // caller is in charge of picking the shape type, position, min and step size
    const minSize = 0.002
    const maxSize = 1.0
    const stepSize = 0.001
    function render() {
        for (let i = 0; i < 100; i++) {
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
                [6.0, 0.0]
            )

            const placed = packer.attemptPlacement(shapeFn(), stepSize, maxSize)
            if (placed !== undefined) {
                draw(ctx, placed, { fill: pickRandom(colors), weight: 0.01 })
            }
        }

        // draw(ctx, obstacles, { stroke: accent + '99', weight: 0.005 })
    }
    animate(24, render)
}
