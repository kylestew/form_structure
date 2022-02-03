import Head from "next/head";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Portfolio of Kyle Stewart</title>
      </Head>
      <section id="projects">
        <ul>
          <ProjectCard
            path="project1"
            title="Thin Film"
            subtitle="Realtime and Offline explorations"
            coverImage="/images/project01/cover.jpg"
            overlayImage="/images/project01/cover-overlay.jpg"
          />
          <ProjectCard
            path="project2"
            title="Triangles"
            subtitle="The most stable geometry"
            coverImage="/images/project02/cover.jpg"
            overlayImage="/images/project02/cover-overlay.jpg"
          />
        </ul>
      </section>
    </Layout>
  );
}
