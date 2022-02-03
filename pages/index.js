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
          <ProjectCard
            name="plotter"
            title="Pen Plotter"
            subtitle="Mechanically plotted artwork"
          />
          <ProjectCard
            name="gen-art-challenge"
            title="100 Days of Generative Art"
            subtitle="My coding addiction"
            overlayExt="gif"
          />
          <ProjectCard
            name="non-realtime"
            title="3D Renders"
            subtitle="Exploring Houdini"
          />

          {/* <ProjectCard
            name="canvas-sketches"
            title="Canvas Sketches"
            subtitle="Look what the browser can do!"
          /> */}
        </ul>
      </section>
    </Layout>
  );
}
