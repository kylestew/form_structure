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

          {/* <ProjectCard
            name="subdivs"
            extLink="https://subdivisions.netlify.app/"
            title="Subdivision"
            subtitle="..."
          /> */}

          <ProjectCard
            name="three"
            extLink="https://three-js-uber-example.netlify.app/"
            title="Flying Dragon"
            subtitle="Exploring Three JS"
          />
          <ProjectCard
            name="gen-art-challenge"
            title="100 Days of Generative Art"
            subtitle="My coding addiction"
            overlayExt="gif"
          />
          <ProjectCard
            name="creature"
            title="Creature"
            subtitle="Moodly little orb"
          />
          <ProjectCard
            name="non-realtime"
            title="3D Renders"
            subtitle="Exploring Houdini"
          />
          <ProjectCard
            name="plotter"
            title="Penmanship"
            subtitle="Mechanically plotted artwork"
          />
          <ProjectCard
            name="synths"
            title="Synth Exploration"
            subtitle="30 days - 30 instruments"
          />
        </ul>
      </section>
    </Layout>
  );
}
