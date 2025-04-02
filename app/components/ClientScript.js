'use client'

import { useEffect } from 'react'
import * as geo from 'root/geo'
import * as array from 'root/array'
import * as random from 'root/random'
import * as math from 'root/math'
import * as matrix from 'gl-matrix'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const palette = [
    [42, 44, 47], // Meteorite Black
    [179, 171, 163], // Moon Rock
    [236, 232, 227], // Warm Gray
    [253, 252, 244], // Warm White
    [255, 86, 35], // Solar Orange
]

export default function ClientScript({ code }) {
    useEffect(() => {
        try {
            const fn = new Function('root', code)
            fn({ geo, array, random, math, matrix, THREE, OrbitControls, palette })
        } catch (err) {
            console.error('Error in <ClientScript>', err)
        }
    }, [code])

    return null
}
