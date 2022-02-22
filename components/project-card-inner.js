export default function ProjectCardInner({
  name,
  title,
  subtitle,
  overlayExt = "jpg",
}) {
  const imgPath = "/images/" + name;
  const mainImagePath = imgPath + "/cover.jpg";
  const overlayImagePath = imgPath + "/cover-overlay." + overlayExt;

  return (
    <figure>
      <img src={mainImagePath} alt="" />

      <img src={overlayImagePath} className="focused" alt="" />

      <div className="overlay"></div>
      <figcaption>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </figcaption>
    </figure>
  );
}
