import { Circle, Line, Quadratic } from 'root/geo'
import { gaussian } from 'root/random'
import { sand } from 'root/mark'

function sandlines(cmd, palette) {
    cmd.clear(palette.background)

    // circle
    const circ = new Circle([0, 0], 0.6)

    let grains = sand(circ, 4096, 0.004)
    cmd.draw(grains, { fill: palette.primary + '99', weight: 0.001 })

    // line
    const line = new Line([-0.5, -0.5], [0.5, 0.5])

    grains = sand(line, 4096, 0.004, () => Math.random())
    // grains = sand(line, 4096, 0.004, () => gaussian(0.5, 0.3))

    cmd.draw(grains, { fill: palette.secondary + '99', weight: 0.001 })

    // curves
    // NO POINT AT for quadratic
    // const tick = 9.0
    // let pts = [
    //     [-0.75, -0.75],
    //     [1.0, -0.5],
    //     [0.75, 0.75],
    // ]
    // const curve0 = new Quadratic(pts)
    // grains = sand(curve0, 4096, 0.004)
    // // draw(grains, { fill: accent + '99', weight: 0.001 })
}
sandlines.title = 'Sandlines'
export { sandlines }

// window.meta = {
//     title: 'Sandlines',
//     description: '',
//     refLink: 'https://inconvergent.net/2017/grains-of-sand',
// }
