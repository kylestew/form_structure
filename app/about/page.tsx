import Image from 'next/image'

function About() {
    return (
        <article className="max-w-4xl ">
            <div className="mt-4 mb-8">
                <div className="text-6xl text-dark font-semibold">Kyle Stewart</div>
                <div className="text-2xl text-light_gray mt-2">Generative Artist</div>
            </div>

            <div class="grid grid-cols-3 gap-8 mb-10">
                <div>
                    <Image
                        src="/images/art_Avi.png"
                        className="art"
                        alt="Profile Picture of Kyle Stewar"
                        width={432}
                        height={426}
                    />
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
                </div>
            </div>
        </article>
    )
}

export default About
