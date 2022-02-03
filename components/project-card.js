import Link from "next/link";

export default function ProjectCard({ name, title, subtitle }) {
  return (
    <li>
      <Link href={`/projects/${name}`}>
        <a>
          <figure>
            <img src={`/images/${name}/cover.jpg`} alt="" />

            <img
              src={`/images/${name}/cover-overlay.jpg`}
              className="focused"
              alt=""
            />

            <div className="overlay"></div>
            <figcaption>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </figcaption>
          </figure>
        </a>
      </Link>
    </li>
  );
}
