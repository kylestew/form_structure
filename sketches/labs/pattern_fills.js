import { Rectangle, Circle, Grid, asPath } from 'root/geo'
import { mulN } from 'root/math'
import { pickRandom } from 'root/random'
import { linesFill, checkersFill, dotGridFill } from 'root/mark'

function patternFills(cmd, palette) {
    let { background, primary, secondary, accent, dark, neutral } = palette
    let colors = [primary, secondary, accent, dark, neutral]

    const fillFns = [
        (shape) => linesFill(shape, pickRandom([6, 12, 24]), Math.PI / pickRandom([4.0, -4.0, 2.0, 1.0]), colors),
        (shape) => checkersFill(shape, pickRandom([6, 12, 18]), pickRandom([6, 12, 18]), colors),
        (shape) => dotGridFill(shape, pickRandom([6, 12, 18, 24]), pickRandom([1.0, 0.9, 0.75, 0.5]), colors),
    ]

    cmd.clear(background)

    let fillIdx = 0
    new Grid([-0.95, -0.95], [1.9, 1.9], 2, 2).cells().forEach(({ center, size }) => {
        let shape
        if (Math.random() > 0.5) {
            shape = Rectangle.withCenter(center, mulN(size, 0.9))
        } else {
            shape = new Circle(center, size[0] * 0.5 * 0.9)
        }

        cmd.ctx.save()
        cmd.ctx.clip(asPath(shape))

        // draw fill
        cmd.draw(fillFns[fillIdx++ % fillFns.length](shape))

        cmd.ctx.restore()

        // draw border (original shape)
        cmd.draw(shape)
    })
}
patternFills.description = 'Pattern Fills'
export { patternFills }
