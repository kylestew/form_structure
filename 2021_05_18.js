const canvasSketch = require("canvas-sketch");

const settings = {
  pixelsPerInch: 300,
  units: "in",
  dimensions: [3, 3],
  bleed: 1 / 8,
  animate: true,
  duration: 360,
};

const sketch = () => {
  return ({
    context,
    exporting,
    bleed,
    width,
    height,
    trimWidth,
    trimHeight,
    playhead,
  }) => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#eff3f4";
    context.fillRect(0, 0, width, height);

    if (!exporting && bleed > 0) {
      context.strokeStyle = "hsl(0, 80%, 80%)";
      context.lineWidth = 0.0075;
      context.strokeRect(bleed, bleed, trimWidth, trimHeight);
    }

    const color = "#2b82b5";
    context.fillStyle = color;

    // Make circles expand to edge of smallest trim (card) edge,
    // but with a 1/4" padding.
    const maxRadius = Math.min(trimWidth, trimHeight) / 2 - 1 / 4;

    const points = Math.PI * 4 * 100;
    step = Math.sin(playhead * 2 * Math.PI) * 0.1;
    for (let i = 1; i <= points; i++) {
      const t = i / points;

      // golden ratio

      const phi = (Math.sqrt(5 + step) + 1) / 2;

      const theta = 2 * Math.PI * i * phi;

      const distance = Math.sqrt(t);

      const x = Math.cos(theta);
      const y = Math.sin(theta);

      const r = distance * maxRadius;

      const cx = width / 2 + x * r;
      const cy = height / 2 + y * r;

      const radius = 0.02 * Math.pow(t, 0.3);

      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2, false);
      context.fill();
    }
  };
};

canvasSketch(sketch, settings);
