import Link from 'next/link'
import Image from 'next/image'

import { getNotes, formatImage } from '@/app/notes/utils'

export default function NotesPage() {
    let allNotes = getNotes()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {allNotes.map((note) => (
                <Link key={note.slug} className="flex flex-col space-y-2 mb-4" href={`/notes/${note.slug}`}>
                    {note.metadata.image && (
                        <div className="relative w-full h-48 rounded overflow-hidden">
                            <Image
                                src={formatImage(note.metadata.image)}
                                alt={note.metadata.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <p className="title mt-2 text-center">{note.metadata.title}</p>
                </Link>
            ))}
        </div>
    )
}
