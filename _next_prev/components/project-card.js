import Link from "next/link";
import ProjectCardInner from "./project-card-inner";

function ProjectCard({ name, title, subtitle, overlayExt = "jpg" }) {
  const url = `/projects/${name}`;
  return (
    <li>
      <Link href={url}>
        <a>
          <ProjectCardInner
            name={name}
            title={title}
            subtitle={subtitle}
            overlayExt={overlayExt}
          />
        </a>
      </Link>
    </li>
  );
}

export default ProjectCard;
