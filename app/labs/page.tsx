'use client'
import { useEffect, useRef, useState } from 'react'
import { createCanvas } from 'root/canvas'
import { randomPalette } from '@/sketches/labs/palettes'
import { examples } from '@/sketches/labs'

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleBackdropClick}
        >
            <div className="relative bg-white p-8 rounded-lg">
                {content}
                <button onClick={onClose} className="absolute top-2 right-2 text-4xl text-gray-500 hover:text-gray-700">
                    &times;
                </button>
            </div>
        </div>
    )
}

export default function Page() {
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    useEffect(() => {
        const palette = randomPalette()

        canvasRefs.current.forEach((canvas, index) => {
            if (canvas) {
                const cmd = createCanvas(640, 640, canvas, [-1, 1])
                const fn = examples[index]
                fn(cmd, palette)
            }
        })
    }, [])

    const handleCanvasClick = (index) => {
        const canvas = canvasRefs.current[index]
        if (canvas) {
            setModalContent(
                <canvas
                    width="640"
                    height="640"
                    ref={(el) => {
                        if (el) {
                            const cmd = createCanvas(640, 640, el, [-1, 1])
                            const fn = examples[index]
                            fn(cmd, randomPalette())
                        }
                    }}
                ></canvas>
            )
            setIsModalOpen(true)
        }
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {examples.map((example, index) => (
                    <div key={example.name}>
                        <canvas
                            ref={(el) => {
                                if (el) canvasRefs.current[index] = el
                            }}
                            id={`canvas-${example.name}`}
                            width="640"
                            height="640"
                            className="cursor-pointer"
                            onClick={() => handleCanvasClick(index)}
                        ></canvas>
                        <div className="title mt-2 text-center">{example.title}</div>
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
        </>
    )
}
