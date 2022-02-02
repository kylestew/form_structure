import Layout from "../components/layout";
import ProjectCard from "../components/project-card";

export default function Home() {
  return (
    <Layout>
      <section id="projects">
        <ul>
          <ProjectCard
            title="Thin Film"
            subtitle="Realtime and Offline explorations"
            image="images/project01/display-0.jpg"
            focusedImage="images/project01/display-2.jpg"
          />
          <ProjectCard
            title="Triangles"
            subtitle="The most stable geometry"
            image="images/project02/display-0.jpg"
            focusedImage="images/project02/display-2.jpg"
          />
        </ul>
      </section>
    </Layout>
  );
}
