import Link from "next/link";

export default function ProjectCard({
  name,
  extLink,
  title,
  subtitle,
  overlayExt = "jpg",
}) {
  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";
  const overlayImagePath = imgPath + "/cover-overlay." + overlayExt;

  const url = extLink ?? `/projects/${name}`;

  return (
    <li>
      <Link href={url}>
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
