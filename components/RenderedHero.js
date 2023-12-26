"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

import vertShader from "./shaders/vert.glsl";
import fragShader from "./shaders/frag.glsl";

const RenderedHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    // Set up the scene, camera, and renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
    const scene = new THREE.Scene();
    // Setup a camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
    camera.position.set(0, 0, 1.3);
    camera.lookAt(new THREE.Vector3());

    // Setup a geometry
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);

    // Setup a material
    const material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
      // wireframe: true,
      vertexShader: vertShader,
      fragmentShader: fragShader,
    });

    // Setup a mesh with geometry + material
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId;
    const animate = function (timestamp) {
      mesh.material.uniforms.time.value = 0.5 * (timestamp / 1000);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = (info) => {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId); // Stop the animation
      renderer.dispose(); // Dispose of the renderer

      if (mesh.geometry) mesh.geometry.dispose(); // Dispose of the geometry
      if (mesh.material) mesh.material.dispose(); // Dispose of the material

      container.removeChild(canvas); // Remove the canvas from the DOM
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default RenderedHero;
