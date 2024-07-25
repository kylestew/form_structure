import { Circle } from 'root/geo'
import { mapRange } from 'root/math'
import { color } from 'root/color'
import { normalize, neg, mulN, mul, add, sub, dot, reflect, clamp01 } from 'root/math'

function pointOnSphere(r, theta, phi) {
    // theta - polar angle (north pole to south pole)
    // phi - azimuthal angle (around the equator)
    // convert spherical to cartesian coordinates
    return [
        r * Math.sin(theta) * Math.cos(phi), //
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(theta),
    ]
}

function phongLightingExample(cmd, palette) {
    const { background, primary, secondary } = palette

    cmd.clear(background)

    const time = 1.0

    // create positions on a sphere
    let pts = []
    const heightSegments = 128
    const widthSegments = 128
    for (let i = 0; i < widthSegments; i++) {
        const theta = mapRange(i, 0, widthSegments - 1, -Math.PI / 2.0, Math.PI / 2.0)
        for (let j = 0; j < heightSegments; j++) {
            const phi = mapRange(j, 0, heightSegments - 1, -Math.PI, Math.PI)
            pts.push(pointOnSphere(1, theta, phi))
        }
    }

    // setup material and lighting
    const materialColor = color(primary).toGLSL().slice(0, 3)
    // const lightColor = color(secondary).toGLSL().slice(0, 3)
    const material = {
        ambient: materialColor, // usually the material color
        diffuse: materialColor, // can match ambient
        specular: materialColor,
        shininess: 12.0,
    }
    const light = {
        pos: [4.0 * Math.sin(time * 0.666), 4.0 * Math.cos(time * 0.333), 3.0],

        ambient: [0.3, 0.3, 0.3],
        diffuse: [0.6, 0.6, 0.6],
        specular: [1.0, 1.0, 1.0],
    }
    // where we are viewing from
    const eyePos = [0, 0, 6]

    function phongLighting(pt, normal) {
        // ambient
        const ambient = mul(light.ambient, material.ambient)

        // Idiffuse = Kd * lightColor * max(0, dot(N, Ld))
        // Ld = normalize(lightPos - pt)
        const norm = normalize(normal)
        const lightDir = normalize(sub(light.pos, pt))
        const diff = Math.max(dot(norm, lightDir), 0.0)
        const diffuse = mul(light.diffuse, mulN(material.diffuse, diff))

        // specular
        const viewDir = normalize(sub(eyePos, pt))
        const reflectDir = reflect(neg(lightDir), norm)
        const spec = Math.pow(Math.max(dot(viewDir, reflectDir), 0.0), material.shininess)
        const specular = mul(light.specular, mulN(material.specular, spec))

        const output = add(add(ambient, diffuse), specular)
        return clamp01(output)
    }

    // convert points to lit marks
    const marks = pts.map(([x, y, z]) => {
        // do lighting calculation based on position
        // calculate normals (on a unit sphere, its simply the position vector)
        const litColor = phongLighting([x, y, z], [x, y, z])
        // console.log(litColor, color(litColor).toHex())

        // we can't draw in 3D, so convert Z to point size
        const rad = mapRange(z, 0, 1, 0.012, 0.012)
        return new Circle([x, y], rad, { fill: color(litColor).toHex() })
    })
    cmd.draw(marks)
}
phongLightingExample.title = 'Phong Lighting'
export { phongLightingExample }
