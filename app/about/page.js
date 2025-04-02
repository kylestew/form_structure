import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Kyle Stewart</div>
                <div className="text-2xl text-light_gray mt-2">
                    Creative Technologist · Generative Artist · Toolmaker
                </div>
            </div>

            <div className="grid grid-col-1 md:grid-cols-3 gap-8 mb-10">
                <div>
                    <Image
                        src="/images/art_avi_tall.jpg"
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
                    <p className="text text-gray mb-4">
                        I build expressive tools, systems, and visuals that explore the creative potential of code. With
                        over a decade of experience crafting graphics-intensive technologies — from real-time renderers
                        to generative design platforms — my work blends performance, play, and artistic intent.
                    </p>

                    <p className="text text-gray mb-4">
                        My independent studio practice explores the intersection of code, art, and interaction. I create
                        procedural design tools, interactive simulations, and visual languages that turn abstract
                        systems into intuitive, expressive experiences. Whether through generative visuals, physical
                        computing, or node-based creative environments, I aim to blur the lines between engineering and
                        art.
                    </p>

                    <p className="text text-gray mb-4">
                        I'm driven by curiosity, systems thinking, and a desire to make tools and experiences that
                        resonate — technically and emotionally. My work bridges disciplines, and I'm always looking for
                        new ways to build meaning through structure, process, and play.
                    </p>

                    <div className="mt-12">
                        <h2 className="text-4xl text-dark font-semibold mb-8">Focus Areas</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl text-dark font-medium mb-2">Generative & Procedural Design</h3>
                                <p className="text-gray">
                                    Custom algorithms, Computation Design, Node Based Systems, Houdini, Blender
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-dark font-medium mb-2">
                                    Creative Programming & Toolmaking
                                </h3>
                                <p className="text-gray ">JavaScript, Python, Swift, Rust, C</p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-dark font-medium mb-2">Graphics & Rendering</h3>
                                <p className="text-gray">
                                    GPU pipelines, shader development, GLSL, Metal, WebGL, real-time visuals,
                                    ray-tracing, linear algebra
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-dark font-medium mb-2">Interactive Systems</h3>
                                <p className="text-gray">
                                    Sensor-based input, spatial tracking, gestural interfaces, reactive environments
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl text-dark font-medium mb-2">Physical Computing</h3>
                                <p className="text-gray">Arduino, Raspberry Pi/Pico, ARM (STM32), bare metal, KiCad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-12">
                <h2 className="text-4xl text-dark font-semibold mb-6">Let's Work Together</h2>

                <p className="text-gray mb-6">I'm currently open to:</p>

                <ul className="space-y-3 text-gray mb-8">
                    <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Artist residencies or fellowships focused on creative technology</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>
                            Exhibitions or collaborations involving generative, data-driven, or interactive work
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Commissioned creative tools or installations</span>
                    </li>
                    <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>Speaking, workshops, or writing about creative technology and process</span>
                    </li>
                </ul>

                <div className="space-y-2">
                    <a
                        href="https://www.instagram.com/form.structure/"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                        <span className="mr-2">→</span>
                        Contact
                    </a>
                </div>
            </div>
        </article>
    )
}

export default About
