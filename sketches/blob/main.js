import * as THREE from 'three'

import vertShaderSource from '../shaders/blob.vert?raw'
import fragShaderSource from '../shaders/blob.frag?raw'

export function blobWebGl(canvas) {
    let canvasContainer = canvas.parentElement
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientWidth)

    renderer.setClearColor(0x222222)

    let camera = new THREE.PerspectiveCamera(45, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.01, 1000)
    camera.position.set(0, 0, 1.333)

    const scene = new THREE.Scene()

    const geometry = new THREE.IcosahedronGeometry(1, 64)

    // const material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
    const material = new THREE.ShaderMaterial({
        vertexShader: vertShaderSource,
        fragmentShader: fragShaderSource,
        uniforms: {
            time: {
                type: 'f',
                value: 0,
            },
            side: THREE.DoubleSide, // Render backfaces
        },
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function render(time) {
        time /= 5000.0
        mesh.material.uniforms.time.value = time
        renderer.render(scene, camera)
        requestAnimationFrame(render)
    }
    render()

    window.onresize = function () {
        camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight
        camera.updateProjectionMatrix()
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientWidth)
    }
}
