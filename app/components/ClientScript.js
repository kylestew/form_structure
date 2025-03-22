'use client'

import { useEffect } from 'react'
import * as geo from 'root/geo'
import * as array from 'root/array'
import * as random from 'root/random'
import * as math from 'root/math'

export default function ClientScript({ code }) {
    useEffect(() => {
        try {
            const fn = new Function('root', code)
            fn({ geo, array, random, math })
        } catch (err) {
            console.error('Error in <ClientScript>', err)
        }
    }, [code])

    return null
}
