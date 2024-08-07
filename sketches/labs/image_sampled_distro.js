import { Circle, Line } from 'root/geo'
import { mapRange2D, mapRange } from 'root/math'
import { uniform2D } from 'root/random'

import { createImageSampler } from 'root/tex'

const testImgUrl = 'assets/test.png'

async function imageSampledDistro(cmd, palette) {
    const { background, primary, secondary, accent } = palette
    cmd.clear(background)

    const { sampler, imageData } = await createImageSampler(testImgUrl)
    const pts = uniform2D(10000)
        .map((uv) => {
            const [r, g, b, a] = sampler(uv).map((c) => c / 255.0)
            if (a <= 0.0) {
                // don't place anything in transparent areas
                return null
            }

            // place a line, circle, etc based on the pixel value probabilities
            const theta = mapRange(r, 0, 1, -Math.PI, Math.PI)
            const length = mapRange(g, 0, 1, 0.001, 0.03)
            const weight = mapRange(b, 0, 1, 0.001, 0.05)
            let col = primary
            if (Math.random() < b) {
                col = secondary
            }
            const pt = mapRange2D(uv, [0, 1], [0, 1], [-1, 1], [-1, 1])
            if (Math.random() < g * 0.01) {
                return new Circle(pt, length * 20, { fill: background + '33' })
            } else {
                return Line.withCenter(pt, theta, length, { stroke: col + 'AA', weight })
            }
        })
        .filter((pt) => pt !== null)

    cmd.ctx.putImageData(imageData, 0, 0)
    cmd.draw(pts)
}
imageSampledDistro.title = 'Image Sampled Distro'
export { imageSampledDistro }
