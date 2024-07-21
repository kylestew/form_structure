import { saveAs } from 'file-saver'

export function prepareProjectContainer(meta, canvasElement, prepareFn, randomizeFn, renderFn) {
    // Set the title and description
    const titleElement = document.getElementById('title')
    titleElement.innerText = meta.title
    const descriptionElement = document.getElementById('description')
    descriptionElement.innerText = meta.description

    let isRunning = false
    const statusElement = document.getElementById('status')
    const runButtonElement = document.getElementById('run')
    const randomizeButtonElement = document.getElementById('randomize')
    const captureButtonElement = document.getElementById('capture')
    function updateUIState() {
        if (isRunning) {
            statusElement.innerText = 'status: running...'
            runButtonElement.innerText = 'pause'
        } else {
            statusElement.innerText = 'status: paused'
            runButtonElement.innerText = 'run'
        }
    }

    // RUN/PAUSE
    runButtonElement.addEventListener('click', () => {
        isRunning = !isRunning
        if (isRunning) {
            requestAnimationFrame(animationLoop)
        }
        updateUIState()
    })

    // RANDOMIZE
    randomizeButtonElement.classList.remove('hidden')
    randomizeButtonElement.addEventListener('click', () => {
        randomizeFn()
    })

    // CAPTURE
    captureButtonElement.classList.remove('hidden')
    captureButtonElement.addEventListener('click', () => {
        saveCanvas(canvasElement)
    })

    // == MAIN EVENT ==
    prepareFn(canvasElement)
    randomizeFn()

    function animationLoop(timestamp) {
        if (isRunning) {
            renderFn(timestamp)
            requestAnimationFrame(animationLoop)
        }
    }

    isRunning = true
    if (meta.animated) {
        // remove hidden class from run button
        runButtonElement.classList.remove('hidden')

        requestAnimationFrame(animationLoop)
    } else {
        // this isn't animated - run once
        renderFn()
    }

    updateUIState()
}

function saveCanvas(canvas) {
    // Create an image from the canvas
    var image = canvas.toDataURL('image/png')

    // Convert the data URL to a Blob
    var byteString = atob(image.split(',')[1])
    var mimeString = image.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }
    var blob = new Blob([ab], { type: mimeString })

    // Get the current date to add to the filename
    var date = new Date()
    var dateString =
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getDate().toString().padStart(2, '0') +
        '-' +
        date.getFullYear()

    // Set the filename including the date
    var filename = 'sketch-' + dateString + '.png'

    // Trigger the download using FileSaver.js
    saveAs(blob, filename)
}
