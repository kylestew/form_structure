export function prepareProjectContainer(meta, canvasElement, prepareFn, renderFn) {
    const titleElement = document.getElementById('title')
    titleElement.innerText = meta.title
    const descriptionElement = document.getElementById('description')
    descriptionElement.innerText = meta.description

    const statusElement = document.getElementById('status')
    statusElement.innerText = 'ready'

    const buttonElement = document.getElementById('run')
    buttonElement.addEventListener('click', () => {
        // Code to run when the button is clicked
    })

    const randomizeButtonElement = document.getElementById('randomize')
    randomizeButtonElement.classList.remove('hidden')
    randomizeButtonElement.addEventListener('click', () => {
        renderFn(0.0)
    })

    const captureButtonElement = document.getElementById('capture')
    captureButtonElement.classList.remove('hidden')
    captureButtonElement.addEventListener('click', () => {
        saveCanvas(canvasElement)
    })

    prepareFn(canvasElement)

    if (meta.animated) {
        // remove hidden class from run button
    }

    // begin running by default
    statusElement.innerText = 'status: running...'
    buttonElement.innerText = 'pause'

    // this isn't animated
    renderFn(0.0)

    statusElement.innerText = 'status: done'
    buttonElement.innerText = 'run'
}

function saveCanvas(canvas) {
    // Create an image from the canvas
    var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')

    // Create a temporary link element
    var link = document.createElement('a')

    // Get the current date to add to the filename
    var date = new Date()
    var dateString =
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getDate().toString().padStart(2, '0') +
        '-' +
        date.getFullYear()

    // Set the filename including the date
    link.download = 'sketch-' + dateString + '.png'
    link.href = image

    // Trigger the download
    link.click()
}
