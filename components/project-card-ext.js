import Link from "next/link";
import ProjectCardInner from "./project-card-inner";

export default function ProjectCardExt({
  extLink,
  name,
  title,
  subtitle,
  overlayExt = "jpg",
}) {
  return (
    <li>
      <Link href={extLink}>
        <a target="_blank" rel="noopener noreferrer">
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
