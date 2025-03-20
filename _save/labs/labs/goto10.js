import { Grid, Line, asPoints } from 'root/geo'
import { randomBool } from 'root/random'

function goto10(cmd, palette) {
    // likelihood of a backslash instead of a forward one
    const probability = 0.333

    // generate grid cells
    const cellCount = 12
    const grid = new Grid([-1, -1], [2, 2], cellCount, cellCount)

    // for each grid cell, randomly pick a diagonal line across it (forward or backward)
    const lines = grid.rects().map((rect) => {
        let [a, b, c, d] = asPoints(rect)
        const pts = randomBool(probability) ? [a, c] : [b, d]
        return new Line(pts[0], pts[1])
    })

    cmd.clear(palette.background)
    cmd.draw(lines, { stroke: palette.primary, lineCap: 'round', weight: 0.03 })
}
goto10.title = 'Goto 10'
export { goto10 }
//     refLink: 'https://10print.org/',
