import Head from "next/head";
import Layout from "../components/layout";
import ProjectCard from "../components/project-card";
import ProjectCardExt from "../components/project-card-ext";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Form+Structure - Portfolio of Kyle Stewart</title>
      </Head>
      <section id="projects">
        <ul>
          {/* Motion Design Examples */}

          <ProjectCard
            name="other-fields"
            title="Other Fields"
            subtitle="Generative Art Series"
          />

          {/* <ProjectCard
            name="spool"
            title="Spool"
            subtitle="Create visuals for your music"
          /> */}

          {/* Audio DSP work (hardware + software) - replaces synth exploration post */}

          <ProjectCard
            name="tetralume"
            title="Tetralume"
            subtitle="Sound and motion experience"
          />

          {/* Redo your creative coding post with more examples */}
          <ProjectCard
            name="gen-art-challenge"
            title="100 Days of Generative Art"
            subtitle="My coding addiction"
            overlayExt="gif"
          />

          <ProjectCardExt
            extLink="https://subdivisions.netlify.app/"
            name="subdivs"
            title="Subdivisions"
            subtitle="Beauty in Complexity"
          />
          <ProjectCard
            name="creature"
            title="Creature"
            subtitle="Moody little orb"
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
