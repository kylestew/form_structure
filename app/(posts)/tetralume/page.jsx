// import styles from "../../styles/page.module.css";
import Image from 'next/image'

function Project() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Tetralume</div>
                <div className="text-2xl text-light_gray mt-2">Generative Art Print Series</div>
            </div>

            <iframe
                src="https://player.vimeo.com/video/273113997?h=a8d107e79f"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-56 md:h-96"
            ></iframe>

            <p className="text text-gray mt-8 mb-8">
                Tetralume is a twelve minute light and sound performance that occurs on an eleven foot tetrahedron
                structure mapped with LED lighting choreographed to an original score that takes you on a journey
                through an eclectic electronic musical soundscape.
            </p>

            <div className="text-xl font-semibold text-dark mb-4">Technical Details</div>
            <p className="text text-gray mb-8">
                The biggest challenge we encountered while developing Tetralume was animating onto a 3D structure.
                Traditional animation systems are targeted towards a flat-screen. We iterated my ideas on mapping an
                animation created on a 2D screen to a 3D object. Touch Designer was a beneficial tool for creating
                animations and visualizing them in 3D. It also allowed us to pull in our custom audio track and sync the
                animations tightly to the music.
            </p>
            <p className="text text-gray mb-8">
                This was also quite a bit more LEDs than I'd ever worked with before. Powering 1200 LEDs allowed me to
                learn about more power supplies and proper wiring. Each LED takes approximately 35 mAh, which seems tiny
                until you multiply it by 1200 LEDs. We budgeted for a peak power of 90 watts and distributed the load
                between two Meanwell PSUs.
            </p>
            <p className="text text-gray mb-8">
                Other challenges included getting a high refresh rate out of the finicky WS2812 LEDs and providing good
                signal quality over long distances. People were impressed by the performance, but the experience and
                learning I took from it are what I appreciate most.
            </p>

            <div className="text-xl font-semibold text-dark mb-4">Technical Details</div>
            <ul className="text text-gray mb-8 list-disc">
                <li>1200 RGB LEDs</li>
                <li>Redundant PSUs</li>
                <li>PixelPusher networked LED controller</li>
                <li>Touch Designer custom LED mapping and animations</li>
            </ul>

            <p className="text text-gray italic mb-8">
                <a href="https://www.instagram.com/luminul_creative">Luminul Creative</a> is a collaboration between{' '}
                <a href="https://www.instagram.com/benguerrette">Ben Guerrette</a> and myself.
            </p>
        </article>
    )
}

export default Project
