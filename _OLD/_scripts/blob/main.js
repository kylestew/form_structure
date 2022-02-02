import * as THREE from "/web_modules/three.js";
// import { EffectComposer } from "/web_modules/three.js/examples/jsm/postprocessing/EffectComposer.js";

// console.log(THREE.EffectComposer);

import noiseShaderUtils from "./shader-noise-util.js";

const fragShader =
  noiseShaderUtils +
  `
varying vec3 vNormal;

uniform float time;

void main() {
    // sample random color
    float r = (pnoise(0.75 * (vNormal + sin(time)), vec3(10.0)));
    float g = (pnoise(0.5 * (vNormal + cos(time)), vec3(10.0)));
    float b = (pnoise(0.9 * (vNormal + time), vec3(10.0)));
    // brighten it up
    float n = pnoise(0.7 * (vNormal + sin(0.5 * time)), vec3(10));
    n = pow(0.01 * (sin(0.5 * time)), n);  // add white banding

    vec3 color = vec3(r + n, g + n, b + n);
    gl_FragColor = vec4(color, 1.0);
}
`;

const vertShader =
  noiseShaderUtils +
  `
varying vec3 vNormal;

uniform float time;

void main() {
    vNormal = normal;
    float noise = 0.5 * pnoise(normal + time, vec3(10.0));
    vec3 pos = position + noise * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

init();

function init() {
  const canvasContainer = document.getElementById("sketch-container");
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientWidth);
  canvasContainer.appendChild(renderer.domElement);

  let camera = new THREE.PerspectiveCamera(
    45,
    canvasContainer.clientWidth / canvasContainer.clientHeight,
    1,
    1000
  );
  camera.position.set(0, 0, 8);

  const scene = new THREE.Scene();

  const geometry = new THREE.IcosahedronGeometry(1, 64);

  // const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
  const material = new THREE.ShaderMaterial({
    vertexShader: vertShader,
    fragmentShader: fragShader,
    uniforms: {
      time: {
        type: "f",
        value: 0,
      },
    },
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function render(time) {
    time /= 1000.0;
    mesh.material.uniforms.time.value = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = function () {
    camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientWidth);
    // composer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
  };
}
