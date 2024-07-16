import Link from 'next/link'

function NavBarSide({}) {
    return (
        <nav className="p-4 border-t-2 border-gray flex justify-center">
            <span className="text-white text-3xl font-semibold">
                <Link href="/">FORM+STRUCTURE</Link>
            </span>
        </nav>
    )
}

export default NavBarSide
