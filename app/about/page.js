import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Kyle Stewart</div>
                <div className="text-2xl text-light_gray mt-2">Creative Technologist · Toolmaker · Artist</div>
            </div>

            <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                    <Image
                        src="/images/art_Avi.png"
                        className="art"
                        alt="Profile Picture of Kyle Stewar"
                        width={432}
                        height={426}
                    />

                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.instagram.com/form.structure/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://x.com/FormStructure" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://github.com/kylestew" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kyle-stewart-91851166/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>

                <div className="col-span-2">
                    <p className="text text-gray ">
                        I'm a versatile software engineer with a profound passion for utilizing technology as a powerful
                        tool for creative expression. While my expertise lies in mobile development, where I have
                        successfully delivered graphics-intensive and award-winning apps to millions of users, my
                        interests and abilities extend far beyond the realm of mobile apps. I explore the intersection
                        of technology and artistic endeavors, venturing into diverse domains such as digital art, music,
                        and physical computing. My creative practice fuels my drive to push the boundaries of what's
                        possible, bringing innovative and imaginative ideas to life through cutting-edge technological
                        solutions. By bridging the gap between art and technology, I consistently seek to create unique
                        and captivating experiences that resonate with audiences on a profound level.
                    </p>

                    <p className="text-gray mb-4">
                        Kyle Stewart
                        <br />
                    </p>

                    <p className="text-gray mb-4">
                        I'm Kyle Stewart, a creative technologist and versatile software engineer exploring how code can
                        be more than functional—how it can evoke feeling, foster play, and expand what's possible.
                    </p>

                    <p className="text-gray mb-4">
                        I specialize in building expressive tools and interactive systems at the intersection of
                        technology and art. My career began in mobile development, where I led the creation of
                        graphics-intensive, award-winning apps used by millions. But my curiosity quickly pushed me
                        beyond the confines of traditional software.
                    </p>

                    <p className="text-gray mb-4">
                        I've since built real-time drawing engines, interactive installations, and generative art tools
                        that blur the line between user and creator. My work spans digital art, music, motion graphics,
                        and physical computing—driven by a passion to empower others through intuitive, dynamic, and
                        deeply engaging experiences.
                    </p>

                    <p className="text-gray mb-4">
                        I'm particularly excited by the future of creative tools: how we can make systems that are both
                        technically powerful and artistically accessible. Whether building a GPU-accelerated brush
                        system, designing a WebAssembly-based procedural design engine, or prototyping tangible
                        interfaces with microcontrollers, I aim to bridge the gap between engineering and expression.
                    </p>

                    <p className="text-gray mb-4">
                        I believe tools are a form of storytelling. They shape how we think, what we make, and how we
                        share it. As I continue to develop my creative practice, I'm eager to collaborate on projects
                        that push the boundaries of interactive media, immersive creation, and human–computer
                        collaboration.
                    </p>
                </div>
            </div>

            <div className="mb-10">
                <h2 className="text-4xl text-dark font-semibold flex items-center gap-3 mb-6">
                    <span role="img" aria-label="tools">
                        🛠️
                    </span>
                    Selected Skills
                </h2>

                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl text-dark font-medium mb-1">Languages:</h3>
                        <p className="text-gray">Python, Swift, JavaScript, C/C++</p>
                    </div>

                    <div>
                        <h3 className="text-xl text-dark font-medium mb-1">Graphics:</h3>
                        <p className="text-gray">GLSL, OpenGL, Metal, WebGL, GPU pipelines, linear algebra</p>
                    </div>

                    <div>
                        <h3 className="text-xl text-dark font-medium mb-1">Creative Coding:</h3>
                        <p className="text-gray">
                            Processing/P5.js, TouchDesigner, OpenFrameworks, Audio DSP, WebGL experiments
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl text-dark font-medium mb-1">Motion Graphics:</h3>
                        <p className="text-gray">Blender, Houdini, After Effects</p>
                    </div>

                    <div>
                        <h3 className="text-xl text-dark font-medium mb-1">Hardware & Electronics:</h3>
                        <p className="text-gray">Arduino, Raspberry Pi/Pico, ARM (STM32), bare metal, KiCad</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default About
