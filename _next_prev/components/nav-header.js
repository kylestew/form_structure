import Link from "next/link";
import styles from "./nav-header.module.css";

export default function NavHeader({}) {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Form+Structure</a>
            </Link>
          </li>
          <li className={styles.spacer}></li>
          <li>
            <Link href="/">
              <a className={styles.active}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
