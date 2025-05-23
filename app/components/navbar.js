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
                    <Link key="/" href="/" className="link uppercase text-lg pr-6">
                        Projects
                    </Link>
                )}
                <Link key="/notes" href="/notes" className="link uppercase text-lg pr-6">
                    Notes
                </Link>
                <Link key="/about" href="/about" className="link uppercase text-lg">
                    About
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
