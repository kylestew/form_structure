// import styles from "../../styles/page.module.css";
import Image from 'next/image'

function Project() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Other Fields</div>
                <div className="text-2xl text-light_gray mt-2">Generative Art Print Series</div>
            </div>
            <div class="grid grid-cols-2 gap-6 mb-10">
                <Image
                    src="/images/other-fields/OF_gen_01.jpg"
                    className="art"
                    alt="OF_gen_01"
                    width={900}
                    height={1260}
                />
                <Image
                    src="/images/other-fields/OF_gen_02.jpg"
                    className="art"
                    alt="OF_gen_02"
                    width={900}
                    height={1260}
                />
            </div>
            <p className="text text-gray mb-8">
                Other Fields explores deeply the idea of noise, a tool used often in games, movies, and generative art.
                A system was created to combine multiple flow fields with an element of chance. I was amazed by the
                range of output this algorithm created and let it run for a while. Over five thousand images were
                generated, curating to the best 10 was quite a lengthy task.
            </p>
            <div className="text-xl font-semibold text-dark mb-4">Technical Details</div>
            <p className="text text-gray mb-8">
                I started creative coding almost ten years ago with Processing. Though it&apos;s still the best way to
                get started, Processing presented some challenges to my workflow. Recently I made the switch to using
                Python as an artist tool. The immediate feedback I can get in Python helps me stay in flow much more
                than waiting for a Processing sketch to compile. I&apos;m always looking for ways to make creative
                coding feel more like music than programming, and this is the closest I&apos;ve gotten while working in
                a code-based medium.
            </p>
            <p className="text text-gray mb-8">
                Jumping from Processing to Python meant I lost many of the useful creative tools I&apos;d relied on.
                Since then, I&apos;ve been iteratively developing a{' '}
                <a href="https://github.com/kylestew/geom">custom library</a> and set of tools for Python, allowing for
                high-resolution 2D graphics. The library uses{' '}
                <a href="https://pycairo.readthedocs.io/en/latest/">Cairo</a> for rendering and is heavily inspired by{' '}
                <a href="http://thi.ng/">thi.ng</a>. I&apos;ve found that the open-ended nature of Python allows me to
                develop the library without breaking my flow as I create new art pieces.
            </p>
            <div class="grid grid-cols-4 gap-4 mt-8 mb-8">
                <div>
                    <Image
                        src="/images/other-fields/OF_gen_03.jpg"
                        className="art"
                        alt="OF_gen_03"
                        width={450}
                        height={630}
                    />
                </div>
                <div>
                    <Image
                        src="/images/other-fields/OF_gen_04.jpg"
                        className="art"
                        alt="OF_gen_04"
                        width={450}
                        height={630}
                    />
                </div>
                <div>
                    <Image
                        src="/images/other-fields/OF_gen_05.jpg"
                        className="art"
                        alt="OF_gen_04"
                        width={450}
                        height={630}
                    />
                </div>
                <div>
                    <Image
                        src="/images/other-fields/OF_gen_07.jpg"
                        className="art"
                        alt="OF_gen_04"
                        width={450}
                        height={630}
                    />
                </div>
            </div>
        </article>
    )
}

export default Project
