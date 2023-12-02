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
