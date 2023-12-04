import Link from "next/link";

function NavBar({}) {
  return (
    <nav className="flex justify-between p-4">
      <div>
        <span className="text-white text-lg">
          <Link href="/">FORM+STRUCTURE</Link>
        </span>
      </div>
      <div>
        <Link href="/" className="text-white pr-4">
          Projects
        </Link>
        <Link href="/labs" className="text-white pr-4">
          Labs
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
      </div>
    </nav>
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
