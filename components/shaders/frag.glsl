// clang-format off
#pragma glslify: noise = require(glsl-noise/simplex/3d)
// clang-format on

uniform float time;

varying vec2 vUv;
varying vec3 vPosition;

float lines(vec2 uv, float offset) {
    return smoothstep(0., 0.5 + offset * 0.5, abs(0.5 * (sin(uv.x * 10.) + offset * 2.)));
}

mat2 rotate2D(float angle) { return mat2(cos(angle), -sin(angle), sin(angle), cos(angle)); }

void main() {
    vec3 baseFirst = vec3(120. / 255., 158. / 255., 113. / 255.);
    vec3 accent = vec3(0., 0., 0.);
    vec3 baseSecond = vec3(224. / 255., 148. / 255., 66. / 255.);

    float n = noise(vPosition + time * 0.333);
    vec2 baseUV = rotate2D(n) * vPosition.xy * 0.333;

    float basePattern = lines(baseUV, 0.5);
    float secondPattern = lines(baseUV, 0.1);

    vec3 baseColor = mix(baseSecond, baseFirst, basePattern);
    vec3 secondBaseColor = mix(baseColor, accent, secondPattern);

    gl_FragColor = vec4(secondBaseColor, 1.0);
}