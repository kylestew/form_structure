import colors from "/web_modules/flat-palettes.js";
import { createCrystalMesh, centroid } from "./crystal-mesh.js";
import createCamera from "/web_modules/perspective-camera.js";
import cameraProject from "/web_modules/camera-project.js";
import { mat4 } from "gl-matrix";
import BezierEasing from "/web_modules/bezier-easing.js";
import { polar, cartesian } from "/web_modules/@thi.ng/vectors.js";

const settings = {
  loopTime: 8,
  pointCountMin: 6,
  pointCountMax: 12,
  easeA: new BezierEasing(0.14, 0.28, 0.48, 0.45),
  easeB: new BezierEasing(0.14, 0.28, 0.67, 0.46),
  lineWidth: 3.0,
  ballSize: 6.0,
};

let camera = createCamera({
  fov: (80 * Math.PI) / 180,
  near: 0.01,
  far: 1000,
});
let mesh;
let background, primary, secondary;

function setup() {
  const pointCount = parseInt(
    Math.random() * (settings.pointCountMax - settings.pointCountMin) +
      settings.pointCountMin
  );
  mesh = createCrystalMesh(pointCount);
  [background, primary, secondary] = colors(3);
}

const drawCells = (ctx, positions, cells) => {
  const circle = (ctx, pos, r, stroke = false, fill = true) => {
    ctx.beginPath();
    let [x, y] = pos;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    if (stroke === true) ctx.stroke();
    if (fill === true) ctx.fill();
  };

  const stroke = (ctx, points) => {
    ctx.beginPath();
    points.forEach((p) => ctx.lineTo(p[0], p[1]));

    ctx.fillStyle = secondary + "22";
    ctx.fill();

    ctx.strokeStyle = primary;
    ctx.lineWidth = settings.lineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
  };

  // determine centroid Z position of each cell
  const depthCells = cells.map((cell) => {
    const points = cell.map((i) => positions[i]);
    const cent = centroid(points);
    return { points: points, depth: cent[2] };
  });

  // order by depth and render
  depthCells
    .sort((a, b) => b.depth - a.depth)
    .forEach(({ points }) => {
      points.push(points[0]);
      stroke(ctx, points);

      ctx.fillStyle = secondary;
      points.forEach((pt) => {
        circle(ctx, pt, settings.ballSize);
      });
    });
};

const updateMesh = (mesh) => {
  // randomly disturb a vertices
  const idx = Math.floor(Math.random() * mesh.positions.length);
  let p = polar([], mesh.positions[idx]);
  p[0] += 0.01 * (Math.random() - 0.45);
  mesh.positions[idx] = cartesian([], p);
  return mesh;
};

function render({ ctx, width, height, playhead }) {
  ctx.fillStyle = background + "99"; // add a bit of blur
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // truck camera back and point at world center
  const viewport = [0, 0, width, height];
  camera.viewport = viewport;
  let zOffset = Math.sin(playhead * Math.PI * -2) * 0.6;
  camera.identity();
  camera.translate([0, 0, 2.5 + zOffset]);
  camera.lookAt([0, 0, 0]);
  camera.update();

  const projection = camera.projection;
  const view = camera.view;
  const model = mat4.identity([]);

  // rotate the mesh in place
  mat4.rotateY(model, model, settings.easeA(playhead) * Math.PI * 2);
  mat4.rotateX(model, model, settings.easeB(playhead) * Math.PI * 2);

  // build MVP matrix
  const combined = mat4.identity([]);
  mat4.multiply(combined, view, model);
  mat4.multiply(combined, projection, combined);

  // "project" the 3D positions into 2D [x, y] points in pixel space
  mesh = updateMesh(mesh);
  let { cells, positions } = mesh;
  const points = positions.map((position) => {
    return cameraProject([], position, viewport, combined);
  });

  // draw the mesh
  drawCells(ctx, points, cells);
}

export { settings, setup, render };
