'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar({}) {
    const pathName = usePathname()

    return (
        <nav className="max-w-6xl mx-auto flex justify-between p-6">
            <div>
                {/* Mobile */}
                <span className="text-white text-lg font-bold md:hidden">
                    <Link href="/">F+S</Link>
                </span>

                {/* Desktop */}
                <span className="hidden text-white text-3xl font-semibold md:block">
                    <Link href="/">FORM+STRUCTURE</Link>
                </span>
            </div>
            <div>
                {pathName !== '/' && (
                    <Link href="/" className="link uppercase text-lg pr-6">
                        Projects
                    </Link>
                )}
                <Link href="/labs" className="link uppercase text-lg pr-6">
                    Labs
                </Link>
                <Link href="/blog" className="link uppercase text-lg pr-6">
                    Blog
                </Link>
                <Link href="/about" className="link uppercase text-lg">
                    About
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
