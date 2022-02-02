export default function ProjectCard(props) {
  return (
    <li>
      <a href="#">
        <figure>
          <img src={props.image} alt="" />
          <img src={props.focusedImage} class="focused" alt="" />
          <div className="overlay"></div>
          <figcaption>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
}
