const canvasSketch = require("canvas-sketch");
const createShader = require("canvas-sketch-util/shader");
const glsl = require("glslify");

const settings = {
  context: "webgl",
  animate: true,
};

const frag = glsl(/* glsl */ `
  precision highp float;

  uniform float time;
  uniform float aspect;
  varying vec2 vUv;

  #pragma glslify: noise = require('glsl-noise/simplex/3d');
  #pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

  void main () {
    vec3 colorA = vec3(0.4, 0.8, 0.1);
    vec3 colorB = vec3(0.6, 0.1, 1.0);
    
    vec2 center = vUv - 0.5;
    center.x *= aspect;
    
    float dist = length(center);
    
    float alpha = smoothstep(0.395, 0.35, dist);
    
    float n = noise(vec3(center * 1.3, time * 0.1));
    
    vec3 color = hsl2rgb(
      0.6 + n * 0.2,
      0.5,
      0.5
    );

    // color = mix(colorA, colorB, n);
    
    gl_FragColor = vec4(color, alpha);
  }
`);

const sketch = ({ gl }) => {
  return createShader({
    clearColor: "white",
    gl,
    frag,
    uniforms: {
      // Expose props from canvas-sketch
      time: ({ time }) => time,
      aspect: ({ width, height }) => width / height,
    },
  });
};

canvasSketch(sketch, settings);
