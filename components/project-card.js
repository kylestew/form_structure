import Link from "next/link";

export default function ProjectCard({
  coverImage,
  overlayImage,
  title,
  subtitle,
  path,
}) {
  return (
    <li>
      <Link href={path}>
        <a>
          <figure>
            <img src={coverImage} alt="" />
            <img src={overlayImage} class="focused" alt="" />
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
