import { Grid } from 'root/geo'
import { mapRange } from 'root/math'
import { handDrawnCircle } from 'root/mark'

function handDrawnShapes(cmd, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette
    const colors = [primary, secondary, accent, dark, neutral, primary]

    cmd.clear(background)

    const grid = new Grid([-0.9, 0.9], [1.8, -1.8], 2, 3)
    grid.centers().forEach((center, index) => {
        const rad = mapRange(index, 0, grid.cellCount, 0.4, 0.1)
        const noiseScale = mapRange(index, 0, grid.cellCount, 0.01, 0.1)
        const circ = handDrawnCircle(center, rad, noiseScale, 1.4, 8, 0.0005)
        cmd.draw(circ, { fill: colors[index % colors.length] })
    })
}
handDrawnShapes.title = 'Hand Drawn'
export { handDrawnShapes }
