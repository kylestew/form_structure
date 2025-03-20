import { Line, Polyline, Polygon, asPoints } from 'root/geo'
import { random } from 'root/random'
import { zip, interleave } from 'root/array'
import { chaikinCurve } from 'root/algos'

function joyDivision(cmd, palette) {
    // ext.chaikinCurve()

    // make 2 vertical control lines
    const lineA = new Line([-0.9, 0.7], [-0.9, -0.9])
    const lineB = new Line([0.9, 0.7], [0.9, -0.9])

    // turn each line into endpoints for horizontal lines
    const numLines = 32
    const ptsA = asPoints(lineA, numLines)
    const ptsB = asPoints(lineB, numLines)

    // zip up the points into lines
    const lines = zip(ptsA, ptsB).map(([ptA, ptB]) => new Line(ptA, ptB))

    // convert the new lines into N points we can move around
    const numPoints = 36
    const linePoints = lines.map((line) => asPoints(line, numPoints))

    // randomly move the points (only on the positive Y axis)
    const randomnessBig = 0.4
    const randomnessSmall = 0.005
    let linePointsMoved = linePoints.map((pts) =>
        pts.map((pt) => {
            const x = pt[0]
            const gaussShape = Math.exp(-8 * x * x)
            return [pt[0], pt[1] + gaussShape * random(0, randomnessBig)]
        })
    )

    // smooth out curve one iteration
    let smoothPoints = linePointsMoved.map((pts) => chaikinCurve(pts, 2))

    // second pass of random displacement, smaller values
    linePointsMoved = smoothPoints.map((pts) =>
        pts.map((pt) => {
            // (TRICKY BIT)
            // TODO: learn how these work
            // gaussian shaping function
            // only apply on the outsides
            const x = pt[0]
            const gaussShape = 1.0 - Math.exp(-8 * x * x)
            return [pt[0], pt[1] + random(-randomnessSmall, gaussShape * randomnessSmall)]
        })
    )

    // finish smoothing things out
    // smoothPoints = linePointsMoved.map((pts) => chaikinCurve(pts, 2))

    // convert to polylines
    cmd.clear(palette.background)

    const polylines = smoothPoints.map((pts) => new Polyline(pts, { stroke: palette.secondary, weight: 0.008 }))
    const polys = polylines.map((polyline) => new Polygon(polyline.pts, { fill: palette.background }))
    cmd.draw(interleave(polys, polylines))
}
joyDivision.title = 'Joy Division'
export { joyDivision }

// const meta = {
//     title: 'Joy Division',
//     description: 'This is way more complex than needed, probably better to use loops like in the original example.',
//     refLink: 'https://generativeartistry.com/tutorials/joy-division/',
// }
