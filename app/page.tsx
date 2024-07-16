import Link from 'next/link'
import NavBar from '@/app/ui/navbar'
// import RenderedHero from '@/components/RenderedHero'
// import ProjectCard from '@/components/ProjectCard'
// import Footer from '@/components/Footer'

const projects = [
    {
        name: 'other-fields',
        title: 'Other Fields',
        categories: ['generative art', 'colors', 'life'],
    },
    {
        name: 'sandbox',
        title: 'Sandbox',
        categories: ['generative art'],
    },
    // {
    //   name: "other-fields",
    //   title: "Other Fields",
    //   categories: ["generative art", "colors", "life"],
    // },
    // {
    //   name: "other-fields",
    //   title: "Other Fields",
    //   categories: ["generative art", "colors", "life"],
    // },
    // {
    //   name: "other-fields",
    //   title: "Other Fields",
    //   categories: ["generative art", "colors", "life"],
    // },
]

export default function Page() {
    return (
        <>
            <header className="relative w-full h-[40vh] bg-pink">
                {/* Takes up entire area of header element as a background */}
                {/* <RenderedHero /> */}

                <div className="relative h-full max-w-6xl mx-auto">
                    <NavBar />

                    <span className="absolute bottom-0 right-0 px-6 py-4 text-white md:text-xl text-sm">
                        Portfolio of{' '}
                        <Link href="/about" className="link">
                            Kyle Stewart
                        </Link>
                    </span>
                </div>
            </header>

            <main className="bg-white">
                <section className="projects max-w-6xl mx-auto p-8">
                    <ul className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        {projects.map((project) => (
                            <li key={project.name}>
                                Test
                                {/* <ProjectCard
                                    name={project.name}
                                    title={project.title}
                                    categories={project.categories}
                                /> */}
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    )
}
