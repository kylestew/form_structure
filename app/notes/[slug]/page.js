import { notFound } from 'next/navigation'
import { getNotes, formatDate } from '@/app/notes/utils'
import { CustomMDX } from '@/app/components/mdx'

// statically generate all the notes
export async function generateStaticParams() {
    let notes = getNotes()
    return notes.map((note) => ({
        slug: note.slug,
    }))
}

const components = {}

export default async function Page({ params }) {
    const { slug } = await params
    let note = getNotes().find((note) => note.slug === slug)

    if (!note) {
        notFound()
    }

    return (
        <section>
            <h1 className="title font-semibold text-2xl tracking-tighter">{note.metadata.title}</h1>
            <div>{formatDate(note.metadata.publishedAt)}</div>
            <article className="notes">
                <CustomMDX source={note.content} />
            </article>
        </section>
    )
}
