'use client'

import { useEffect } from 'react'

export default function ClientScript({ code }) {
    useEffect(() => {
        try {
            const fn = new Function(code)
            fn()
        } catch (err) {
            console.error('Error in <ClientScript>', err)
        }
    }, [code])

    return null
}
