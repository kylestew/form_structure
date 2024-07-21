import Link from 'next/link'
import NavBar from '@/app/ui/navbar'
import RenderedHero from '@/app/ui/projects/rendered-hero-2'
import ProjectCard from '@/app/ui/projects/project-card'
import Footer from '@/app/ui/footer'

const projects = [
    {
        name: 'dancing-laser-fairies',
        title: 'Dancing Laser Fairies',
        categories: ['exe', 'generative', 'animated'],
    },
    {
        name: 'other-fields',
        title: 'Other Fields',
        categories: ['generative', 'print'],
    },
    {
        name: 'on-a-line',
        title: 'On a Line',
        categories: ['exe', 'generative'],
    },
    {
        name: 'tetralume',
        title: 'Tetralume',
        categories: ['physical', 'performance'],
    },
]

export default function Page() {
    return (
        <>
            <header className="relative w-full h-[32vh] bg-dark">
                <RenderedHero />

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
                                <ProjectCard
                                    name={project.name}
                                    title={project.title}
                                    categories={project.categories}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
            </main>

            <Footer />
        </>
    )
}
