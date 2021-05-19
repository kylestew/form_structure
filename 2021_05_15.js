const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");
const luminance = require("color-luminance");

const settings = {
  dimensions: [2048, 2048],
};

function hexToRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const sketch = () => {
  const creategrid = (count) => {
    const points = [];
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          position: [u, v],
          rotation: random.pick([0, Math.PI / 2.0, Math.PI, 1.5 * Math.PI]),
        });
      }
    }
    return points;
  };

  const count = random.pick([3, 4, 6, 8, 9, 12, 16]);
  const points = creategrid(count);

  const bgcolor = random.shuffle(random.pick(palettes))[0];
  const components = hexToRGB(bgcolor);
  const lumi = luminance(components.r, components.g, components.b);
  const primaryColor = lumi > 128 ? "black" : "white";

  return ({ context: ctx, width, height }) => {
    ctx.fillStyle = bgcolor;
    ctx.fillRect(0, 0, width, height);

    const margin = width * 0.2;
    const rad = (width - margin * 2) / count / 2;

    points.forEach((data) => {
      const { position, rotation } = data;
      const [u, v] = position;

      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      ctx.save();

      ctx.fillStyle = primaryColor;
      ctx.translate(x, y);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, rad, rotation, rotation + 1.5 * Math.PI);
      ctx.lineTo(0, 0);
      ctx.fill();

      ctx.restore();
    });
  };
};

canvasSketch(sketch, settings);
