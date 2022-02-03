import Link from "next/link";

export default function ProjectCard({
  name,
  title,
  subtitle,
  overlayExt = "jpg",
}) {
  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";
  const overlayImagePath = imgPath + "/cover-overlay." + overlayExt;

  return (
    <li>
      <Link href={`/projects/${name}`}>
        <a>
          <figure>
            <img src={mainImagePath} alt="" />

            <img src={overlayImagePath} className="focused" alt="" />

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
