'use client'
import { useEffect, useRef, useState, MutableRefObject } from 'react'
import { ReactNode, MouseEvent } from 'react'
import { runSketch } from 'root/sketch'
import { randomPalette } from '@/sketches/labs/palettes'
import { examples } from '@/sketches/labs'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    content: ReactNode
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
    if (!isOpen) return null

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
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
    const canvasRefs: MutableRefObject<(HTMLCanvasElement | null)[]> = useRef([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<ReactNode>(null)

    useEffect(() => {
        const palette = randomPalette()

        canvasRefs.current.forEach((canvas, index) => {
            if (canvas) {
                const fn = examples[index]
                runSketch(fn, { palette, canvas, width: 640, height: 640 })
            }
        })
    }, [])

    const handleCanvasClick = (index: number) => {
        const canvas = canvasRefs.current[index]
        if (canvas) {
            setModalContent(
                <canvas
                    width="640"
                    height="640"
                    ref={(el) => {
                        if (el) {
                            const fn = examples[index]
                            runSketch(fn, { palette: randomPalette(), canvas: el, width: 640, height: 640 })
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
