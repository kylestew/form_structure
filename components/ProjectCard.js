import Link from "next/link";
import Image from "next/image";

function ProjectCard({ name, title, categories, overlayExt = "jpg" }) {
  const url = `/projects/${name}`;

  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";

  // Join categories with a bullet
  const formattedCategories = categories.join(" • ");

  return (
    <Link href={url}>
      <figure className="group relative cursor-pointer">
        <Image src={mainImagePath} width={1200} height={960} alt={title} />

        <div className="overlay"></div>

        <figcaption className="py-2">
          <p className="text-sm uppercase text-slate-500 py-1">
            {formattedCategories}
          </p>

          <div className="relative">
            <span className="text-4xl absolute left-0 transform -translate-x-full">
              ➤
            </span>
            <span className="text-4xl font-medium text-black">{title}</span>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
}

export default ProjectCard;

/*
export default function ProjectCardInner({
  name,
  title,
  subtitle,
  overlayExt = "jpg",
}) {
  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";
  const overlayImagePath = imgPath + "/cover-overlay." + overlayExt;
  const overlayVideoPath = imgPath + "/cover-overlay.mp4";

  return (
    <figure>
      <img src={mainImagePath} alt="" />

      {overlayExt == "mp4" ? (
        <video controls>
          <source src={overlayVideoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={overlayImagePath} className="focused" alt="" />
      )}

      <div className="overlay"></div>
      <figcaption>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </figcaption>
    </figure>
  );
}
*/
