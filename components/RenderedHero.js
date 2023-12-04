"use client";

import { useEffect, useRef } from "react";

const RenderedHero = () => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "rgba(32, 0, 32, 1.0)"; // Set the color you want to clear with
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Fill the entire canvas
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Resize the canvas to fill the container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Call your draw function
    draw(context);
  }, [draw]);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default RenderedHero;
