"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const RenderedHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const canvas = document.createElement("canvas");
    container.appendChild(canvas);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;

    let animationFrameId;
    const animate = function () {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
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

      if (cube.geometry) cube.geometry.dispose(); // Dispose of the geometry
      if (cube.material) cube.material.dispose(); // Dispose of the material

      container.removeChild(canvas); // Remove the canvas from the DOM
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default RenderedHero;
