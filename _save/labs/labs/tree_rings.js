import { Polygon } from 'root/geo'
import { mapRange } from 'root/math'
import { linspace } from 'root/array'
import { simplex3 } from 'root/random'
import { chaikinCurve } from 'root/algos'

function treeRings(cmd, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette
    const colors = [primary, secondary, accent]

    cmd.clear(background)

    function makeRing(r, noiseMult, noiseScale, steps, zStep) {
        // use noise as the radial offset for each ring position
        return new Polygon(
            chaikinCurve(
                linspace(0, 2.0 * Math.PI, steps).map((theta) => {
                    // sample noise at base position
                    let x = r * Math.cos(theta)
                    let y = r * Math.sin(theta)

                    const offsetR = noiseMult * simplex3(noiseScale * x, noiseScale * y, zStep)
                    const newR = Math.max(r + offsetR, 0.01)

                    // add offset to position
                    x = newR * Math.cos(theta)
                    y = newR * Math.sin(theta)
                    return [x, y]
                }),
                2
            )
        )
    }

    const count = 64
    for (let i = 0; i < count; i++) {
        const r = mapRange(i, 0, count, 0.1, 2.0)
        const color = colors[i % colors.length]
        cmd.draw(makeRing(r, 0.1, 3.0, 128, 1.0), { stroke: color, weight: 0.02 })
    }
}
treeRings.title = 'Tree Rings'
export { treeRings }
