import Link from 'next/link'

function NavBar({}) {
    return (
        <nav className="max-w-7xl mx-auto flex justify-between p-8">
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
                <Link href="/" className="link uppercase text-lg pr-6">
                    Projects
                </Link>
                <Link href="/labs" className="link uppercase text-lg pr-6">
                    Labs
                </Link>
                <Link href="/about" className="link uppercase text-lg">
                    About
                </Link>
            </div>
        </nav>
        // </div>
    )
}

export default NavBar
