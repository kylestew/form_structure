import Link from "next/link";

function NavBar({}) {
  return (
    <div className="relative w-full">
      <nav className="absolute left-1/2 transform -translate-x-1/2 z-50 max-w-6xl w-full flex justify-between p-8">
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
    </div>
  );
}

export default NavBar;

/*
.header {
  margin: 0 auto;
  padding: 1rem;
}

.header nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  gap: 2%;
  align-items: center;
}

.spacer {
  flex-grow: 1;
}

.header nav li:first-child a {
  font-size: 1.4rem;
  font-weight: 800;
  color: black;
}

.header nav a {
  font-size: 1.2rem;
  text-transform: uppercase;
  display: block;
  padding: 0.5rem;
  text-align: center;
}

@media (min-width: 650px) {
  .header {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 1.4rem 2rem 1.4rem 2rem;
  }
}
*/
