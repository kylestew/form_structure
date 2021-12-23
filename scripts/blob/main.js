import * as THREE from "/web_modules/three.js";
// import { EffectComposer } from "/web_modules/three.js/examples/jsm/postprocessing/EffectComposer.js";

// console.log(THREE.EffectComposer);

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

  const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
  // const material = new THREE.ShaderMaterial({
  //   vertexShader: vertShader,
  //   fragmentShader: fragShader,
  //   uniforms: {
  //     time: {
  //       type: "f",
  //       value: 0,
  //     },
  //   },
  // });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function render(time) {
    time /= 1000.0;
    // mesh.material.uniforms.time.value = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  window.onresize = function () {
    camera.aspect = canvasContainer.clientWidth / canvasContainer.clientWidth;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientWidth);
    // composer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
  };
}
