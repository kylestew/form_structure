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
            name="tetralume"
            title="Tetralume"
            subtitle="Sound and motion experience"
          />
        </ul>
      </section>
    </Layout>
  );
}
