import { createCanvas } from 'root/canvas'
import { Grid, Rectangle } from 'root/geo'
import { color } from 'root/color'

function showPalette(context, options) {
    const palette = options.palette
    const colorNames = Object.keys(palette)

    const cmd = createCanvas(options.width, options.height, context.canvas, [-1, 1])
    cmd.clear('#fff')

    const grid = new Grid([0, 0], [2, 2], 1, colorNames.length)
    grid.cells().forEach(({ index, rect, center }) => {
        const col = color(palette[colorNames[index]])
        cmd.draw(rect, { fill: col.toHex() })

        const ctx = cmd.ctx
        ctx.save()
        ctx.translate(center[0] + 0.03, center[1] - 0.8)
        ctx.rotate(Math.PI / 2)
        ctx.scale(1, -1)
        ctx.font = '0.1px Monaco'
        ctx.fillStyle = col.luminance() > 128 ? 'black' : 'white'
        ctx.fillText(col.toHex(), 0, 0)
        ctx.fillText(colorNames[index], 1.0, 0)
        ctx.restore()
    })
}
showPalette.title = 'Show Palette'
export { showPalette }
