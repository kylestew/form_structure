import { Polygon, Circle } from '../tools/geo'
import { asPoints } from '../tools/geo'
import { pickRandom } from '../tools/random'
import { rotate } from '../tools/array'
import { draw } from '../tools/draw'

function fanCircle(circle, count) {
    const pts = rotate(asPoints(circle, count * 2), pickRandom([0, 1]))

    let polys = []
    for (let i = 0; i < pts.length; i += 2) {
        polys.push(new Polygon([circle.pos, pts[i], pts[i + 1]]))
    }
    return polys
}

export function negroni(ctx, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette

    const circA = new Circle([-0.3, 0], 0.6)
    const circB = new Circle([0.3, 0], 0.6)

    const parts = 92
    const polysA = fanCircle(circA, parts)
    const polysB = fanCircle(circB, parts)

    draw(ctx, polysA, { fill: primary })

    const blendMode = pickRandom([
        'source-over',
        'source-in',
        'source-out',
        'source-atop',
        'destination-over',
        'destination-in',
        'destination-out',
        'destination-atop',
        'lighter',
        'copy',
        'xor',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
    ])

    console.log('blend mode', blendMode)
    // ctx.globalCompositeOperation = blendMode
    ctx.globalCompositeOperation = 'difference'

    draw(ctx, polysB, { fill: secondary })
}
