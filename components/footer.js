import styles from "./footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({}) {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="https://www.instagram.com/form.structure/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://github.com/kylestew">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kyle-stewart-91851166/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faCopyright} /> Kyle Stewart - 2022
        </li>
      </ul>
    </footer>
  );
}
