import { Line, Rectangle } from '../tools/geo'
import { pointAt } from '../tools/geo/ops'
import { random, gaussian, pareto, pickRandom, weightedRandom } from '../tools/random'
import { range } from '../tools/array'
import { draw } from '../tools/draw'

/* https://www.tylerxhobbs.com/words/probability-distributions-for-algorithmic-artists */
export function hobbsCommunity(ctx, palette) {
    const { background, primary, secondary, accent, dark, neutral } = palette
    const colors = [primary, secondary, accent, neutral]

    // draw random rect (width, heights) according to pareto distribution

    const rects = range(2000).map(() => {
        const width = pareto(0.008, 1.0)
        const height = pareto(0.005, 1.0)
        const color = weightedRandom(colors, [3, 3, 2, 1])
        return new Rectangle([gaussian(-0.2, 0.4), gaussian(-0.2, 0.5)], [width, height], { fill: color + 'AA' })
    })
    draw(ctx, rects)
}
