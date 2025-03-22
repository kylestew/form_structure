const canvas = document.getElementById('myCanvas')
if (canvas?.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'orange'
    ctx.fillRect(10, 10, 150, 75)
    ctx.fillStyle = 'black'
    ctx.font = '16px sans-serif'
    ctx.fillText('Hello Canvas', 20, 60)
}
