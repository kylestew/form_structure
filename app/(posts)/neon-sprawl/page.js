// import styles from "../../styles/page.module.css";
import Image from 'next/image'

function Project() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Neon Sprawl</div>
                <div className="text-2xl text-light_gray mt-2">Interactive Installation for City Lights, San Diego</div>
            </div>

            <video controls className="w-full max-w-xl" height="auto">
                <source src="/images/neon-sprawl/video02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="text text-gray mt-8 mb-8">
                Neon Sprawl is an interactive projected installation I created for City Lights San Diego, an immersive
                art experience held in the East Village. Inspired by the atmosphere of city nights and the glow of neon
                lights, the piece invites visitors to step into a luminous urban dreamscape where motion and light
                converge.
            </p>

            <p className="text text-gray mt-8 mb-8">
                At its core, Neon Sprawl is a kinetic reflection of San Diego itself. I collected symbols from across
                the city—signage, architecture, local iconography—and algorithmically wove them together into a shifting
                tapestry. As visitors move in front of the projection, their silhouette becomes part of the city’s
                rhythm, activating light, triggering patterns, and expanding or collapsing clusters of symbols like
                buildings forming and reforming in real time.
            </p>

            <div className="text-xl font-semibold text-dark mb-4">The Experience </div>

            <p className="text text-gray mt-8 mb-8">
                Neon Sprawl unfolds in a continuous loop of four distinct visual modes, each lasting 90 seconds. Like
                chapters in a city’s dream, these modes pulse with unique aesthetic logic—from glitchy reflections to
                organic symbol swarms—offering shifting emotional textures as the cityscape responds to the viewer’s
                presence. The transitions are seamless, inviting repeated exploration and new encounters each cycle.
            </p>

            <div className="text-l font-semibold text-dark mb-2">Time Shadows</div>
            <div className="mb-6 grid grid-cols-2 gap-4">
                <Image
                    src="/images/neon-sprawl/time_shadows_01.jpg"
                    className="art"
                    alt="OF_gen_01"
                    width={1092}
                    height={1365}
                />
                <Image
                    src="/images/neon-sprawl/time_shadows_02.jpg"
                    className="art"
                    alt="OF_gen_01"
                    width={1092}
                    height={1365}
                />
            </div>

            <div className="text-l font-semibold text-dark mb-2">City Wave</div>
            <div className="mb-6 gap-4">
                <Image
                    src="/images/neon-sprawl/city_wave.jpg"
                    className="art"
                    alt="OF_gen_01"
                    width={1092}
                    height={1365}
                />
            </div>

            <div className="text-l font-semibold text-dark mb-2">Shake Off the City</div>
            <video controls className="w-full max-w-xl mb-8" height="auto">
                <source src="/images/neon-sprawl/shake_off.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="text-l font-semibold text-dark mb-2">Burning Tape</div>
            <video controls className="w-full max-w-xl mb-8" height="auto">
                <source src="/images/neon-sprawl/retro-feedback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="text-xl font-semibold text-dark mb-4">Interaction & Technology</div>
            <div className="mb-6 grid grid-cols-2 gap-4">
                <Image
                    src="/images/neon-sprawl/hardware-demo.jpg"
                    className="art"
                    alt="OF_gen_01"
                    width={900}
                    height={1260}
                />
            </div>
            <p className="text text-gray mb-8">
                The installation uses an <strong className="font-bold">Orbbec stereo vision camera</strong> to track
                body movement in front of the screen. Those movements are interpreted in{' '}
                <strong className="font-bold">TouchDesigner</strong>, where I built a custom system of real-time shaders
                and procedural networks that control the visuals. Each gesture becomes a spark that reshapes the
                sprawl—triggering shifts in density, motion, and illumination across a symbol-filled canvas.
            </p>

            <p className="text text-gray mb-8">
                The goal was to create a space that felt alive with urban energy—dense, chaotic, and luminous, but also
                deeply personal. Every visitor reshapes the city in their own way, just by being present.
            </p>

            <div className="text-xl font-semibold text-dark mb-4">Exhibition Context</div>
            <p className="text text-gray mb-8">
                City Lights San Diego transformed Quartyard into a celebration of light and sound during the winter
                season. Neon Sprawl was part of a series of installations exploring facets of city life, with my piece
                representing the dense nighttime energy and cultural layers of San Diego's streets.
            </p>

            <div className="text-xl font-semibold text-dark mb-4">Reflection</div>

            <video controls width="100%" height="auto" className="mb-4">
                <source src="/images/neon-sprawl/video01.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <p className="text text-gray mb-8">
                This piece was an exploration of urban identity through interactivity. By using city-specific symbols
                and a visual language reminiscent of neon, I wanted to capture the way cities glow with both collective
                and individual stories after dark.
            </p>

            <p className="text text-gray italic mb-8">
                <a href="https://citylights.space">City Lights - San Diego</a> is a creation by{' '}
                <a href="https://www.instagram.com/benguerrette">Ben Guerrette</a> in collaboration with{' '}
                <a href="https://quartyardsd.com/">Quartyard SD</a>, and I'm grateful to have been invited to
                participate.
            </p>

            <p className="text text-gray italic mb-8">
                Event photos by <a href="https://www.instagram.com/ericajoanphoto/">Erica Joan</a>
            </p>
        </article>
    )
}

export default Project
