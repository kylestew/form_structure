import { Line, Quadratic } from 'root/geo'
import { pointAt, tangentAt, normalAt } from 'root/geo'
import { add, easeInQuad } from 'root/math'
import { linspace } from 'root/array'

function curveDemos(cmd, palette) {
    const { background, primary, secondary } = palette
    cmd.clear(background)

    let pts = [
        [-0.75, -0.75],
        [1.0, 0.0],
        [-0.5, 0.75],
    ]
    const curve0 = new Quadratic(pts)

    let tangents = linspace(0, 1.0, 16).map((t) => {
        const a = pointAt(curve0, t)
        const b = tangentAt(curve0, t)
        return new Line(a, add(a, b))
    })
    cmd.draw(tangents, { stroke: 'black', weight: 0.005 })
    cmd.draw([curve0, pts], { stroke: primary, weight: 0.02 })

    pts = [
        [-0.75, 0.0],
        [0.5 * Math.cos(0.8), 0.5 * Math.sin(1.2)],
        [0.75, -0.75],
    ]
    const curve1 = new Quadratic(pts)
    cmd.draw([curve1, pts], { stroke: secondary, weight: 0.02 })

    let normals = linspace(0, 1.0, 16).map((t) => {
        const pct = easeInQuad(t)
        const a = pointAt(curve1, pct)
        const b = normalAt(curve1, pct)
        return new Line(a, add(a, b))
    })
    cmd.draw(normals, { stroke: 'black', weight: 0.005 })
}
curveDemos.title = 'Curve Demos'
export { curveDemos }
