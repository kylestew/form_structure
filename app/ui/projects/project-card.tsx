import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    name: string
    title: string
    categories: string[]
    overlayExt?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, title, categories, overlayExt = 'jpg' }) => {
    const url = `/${name}`

    const imgPath = '/images/' + name
    const mainImagePath = imgPath + '/cover.jpg'

    // Join categories with a bullet
    const formattedCategories = categories.join(' • ')

    return (
        <Link href={url}>
            <figure className="group relative cursor-pointer">
                <Image src={mainImagePath} width={1200} height={960} alt={title} />

                <div className="overlay"></div>

                <figcaption className="py-2">
                    <p className="text-sm uppercase text-slate-500 py-1">{formattedCategories}</p>

                    <div className="relative">
                        <span className="text-4xl absolute left-0 transform -translate-x-full">➤</span>
                        <span className="text-4xl font-medium text-black">{title}</span>
                    </div>
                </figcaption>
            </figure>
        </Link>
    )
}

export default ProjectCard
