const canvas = document.getElementById('example01')
if (canvas?.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'orange'
    ctx.fillRect(10, 10, 150, 75)
    ctx.fillStyle = 'black'
    ctx.font = '16px sans-serif'
    ctx.fillText('Hello Canvas', 20, 60)
}

/*
function unDeuxTrois(cmd, palette) {
    // create a grid of positions
    const cellCount = 24
    const grid = new Grid([-0.9, 0.9], [1.8, -1.8], cellCount, cellCount)

    // place a line in each rect with a random angle
    const lineLength = grid.cellSize[0]
    const lines = grid.centers().flatMap((pt, idx) => {
        // this line will be used to determine the center of the 1/2/3 lines we are placing in the next step
        const theta = random(0, 2.0 * Math.PI)
        const centerLine = Line.withCenter(pt, theta, lineLength)

        // use center line to find center point of output lines
        const pct = idx / (cellCount * cellCount)
        let stops = [0.5]
        if (pct > 0.66) {
            stops = [0.2, 0.5, 0.8]
        } else if (pct > 0.33) {
            stops = [0.3, 0.7]
        }
        return stops.map((stop) => Line.withCenter(pointAt(centerLine, stop), theta + Math.PI / 2.0, lineLength))
    })

    cmd.clear(palette.background)
    cmd.draw(lines, { stroke: palette.primary, weight: 0.015, lineCap: 'round' })
}

unDeuxTrois.title = 'Un Deux Trois'
export { unDeuxTrois }

*/
