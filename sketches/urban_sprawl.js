export const meta = {
    title: 'Urban Spral',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar eros sem, nec feugiatuu purus rutrum at. Aenean sed diam non massa fermentum consectetur.',
    animated: false,
}

import { createCanvas } from 'root/canvas'
import { Line, Rectangle } from 'root/geo'
import { rotate } from 'root/geo'
import { full, zip, randomRemove } from 'root/array'
import { gaussian, pareto } from 'root/random'

let cmd

export function prepare(canvasRef) {
    // create and format canvas
    cmd = createCanvas(1400, 1400, canvasRef, [-1.0, 1.0])
}

export function render(timestamp) {
    cmd.clear('#ffffff')

    const gaussian2D = (count, center, stdDev) => {
        return full(count, () => [gaussian(center[0], stdDev[0]), gaussian(center[1], stdDev[1])])
    }

    const pts = gaussian2D(600, [0, 0], [0.3, 0.3])
    cmd.draw(pts)
}
