import { Grid } from '../tools/geo/extended'
import { add, mulN } from '../tools/math/vectors'
import { draw } from '../tools/draw'

class Ray {
    constructor(origin, direction) {
        this.origin = origin
        this.direction = direction
    }

    at(t) {
        return add(this.origin, mulN(this.direction, t))
    }
}

export function rayTrace(ctx, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette

    // const ray = new Ray([0, 0, 0], [1, 1, 0.5])
    // console.log(ray)
    // console.log(ray.at(0.5))

    // TODO: rebuild canvas as [0, 1]

    // screen
    const aspectRatio = 16 / 9
    const imageWidth = 64
    const imageHeight = Math.floor(imageWidth / aspectRatio)
    // TODO: don't use a grid, point directly to render targets
    // const screen = new Grid([-1, -1 / aspectRatio], [2, 2 / aspectRatio], imageHeight, imageWidth)
    // draw(ctx, screen.centers())

    // camera
    const focalLength = 1.0
    const viewportHeight = 2.0
    const viewportWidth = viewportHeight * (width / height)
    const cameraCenter = [0, 0, 0]

    // vectors across the horizontal and down the vertical viewport edges
    const viewportU = [viewportWidth, 0, 0]
    const viewportV = [0, -viewportHeight, 0]

    /* https://raytracing.github.io/books/RayTracingInOneWeekend.html#rays,asimplecamera,andbackground */
}
