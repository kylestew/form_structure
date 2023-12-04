import Link from "next/link";
import Image from "next/image";

function ProjectCard({ name, title, subtitle, overlayExt = "jpg" }) {
  const url = `/projects/${name}`;

  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";

  return (
    <Link href={url}>
      <figure>
        <Image src={mainImagePath} width={1200} height={960} alt="" />

        <div className="overlay"></div>
        <figcaption>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ProjectCard;
