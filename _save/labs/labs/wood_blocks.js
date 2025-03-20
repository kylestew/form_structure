import { Rectangle, Line, Arc, Polyline } from 'root/geo'
import { asPoints, asPath, translate, scale } from 'root/geo'
import { takePieces, zip } from 'root/array'
import { add, neg, dist, midPt } from 'root/math'
import { simplex3 } from 'root/random'
import { chaikinCurve } from 'root/algos'

function woodBlocks(cmd, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette
    cmd.clear(background)

    function createWoodBlock(zOffset) {
        // (1) create a line across the entire canvas
        const line = new Line([-2.0, 0], [2.0, 0])

        // (2) split the line into two equal list of points and join them with arcs
        const arcCount = 300
        const [ptsA, ptsB] = takePieces(asPoints(line, arcCount), arcCount / 2)
        const basePointsA = ptsA.reverse().slice(5)
        const basePointsB = ptsB.slice(5)
        const arcs = zip(basePointsA, basePointsB).map(([a, b]) => {
            const mid = midPt(a, b)
            const rad = dist(mid, a)
            return new Arc(mid, rad, 0, Math.PI, false)
        })

        // (3) convert arcs to points evenly spaced
        let arcPoints = arcs.map((arc) => {
            const ptCount = Math.floor(arc.arcLength() * 30)
            return asPoints(arc, ptCount)
        })

        // (4) flow points through a field
        const noiseStrength = 0.01
        const noiseMult = 14.0
        const noiseZ = Date.now() + zOffset
        const dampingFactor = 15.0 // Adjust this factor to control the damping effect
        arcPoints = arcPoints.map((pts) =>
            pts.map((pt) => {
                // Calculate the damping based on the y-coordinate
                const yDamping = 1.0 - Math.max(0, 1 - dampingFactor * Math.abs(pt[1]))

                // Apply the noise with damping
                return add(pt, [
                    noiseStrength * yDamping * simplex3(noiseMult * pt[0], noiseMult * pt[1], 0.1 + noiseZ),
                    noiseStrength * yDamping * simplex3(noiseMult * pt[0], noiseMult * pt[1], 0.9123 + noiseZ),
                ])
            })
        )

        // (5) convert points back to polylines
        const polylines = arcPoints.map((pts) => new Polyline(chaikinCurve(pts, 3)))

        return polylines
    }

    const clipRectSize = [1.4, 0.7]
    const rectSeperation = [-0.06, 0.06]

    // BLOCK A
    let blockA = createWoodBlock(0.0)
    blockA = blockA.map((polyline) => translate(polyline, [0.35, -0.45]))
    // clip to rect
    const clipA = Rectangle.withCenter(neg(rectSeperation), clipRectSize)
    cmd.ctx.save()
    cmd.ctx.clip(asPath(clipA))
    cmd.draw(blockA, { stroke: primary + 'AA', weight: 0.003 })
    cmd.ctx.restore()

    // BLOCK B
    let blockB = createWoodBlock(0.12345)
    blockB = blockB.map((polyline) => scale(translate(polyline, [-0.35, -0.45]), [1, -1]))
    // clip to rect
    const clipB = Rectangle.withCenter(rectSeperation, clipRectSize)
    cmd.ctx.save()
    cmd.ctx.clip(asPath(clipB))
    cmd.draw(blockB, { stroke: secondary + 'AA', weight: 0.003 })
    cmd.ctx.restore()

    cmd.draw(clipA, { stroke: accent + 'AA', weight: 0.004 })
    cmd.draw(clipB, { stroke: accent + 'AA', weight: 0.004 })
}
woodBlocks.title = 'Wood Blocks'
export { woodBlocks }
